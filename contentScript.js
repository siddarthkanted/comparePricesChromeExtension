if (!chrome.runtime) {
    // Chrome 20-21
    chrome.runtime = chrome.extension;
} else if(!chrome.runtime.onMessage) {
    // Chrome 22-25
    chrome.runtime.onMessage = chrome.extension.onMessage;
    chrome.runtime.sendMessage = chrome.extension.sendMessage;
    chrome.runtime.onConnect = chrome.extension.onConnect;
    chrome.runtime.connect = chrome.extension.connect;
}

window.onload = function() {
	createStripe();
	buttonClicks();
};

function createStripe(){
	var stripeHtml = '<input type="text" placeholder="Enter the product name" id="productNameText" class="centersearchtextbox"> <input class="checkbox" type="checkbox" name="checkboxList" id="amazonCheckbox" value="http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords={0}&tag=awesomechromeextension-21" checked>Amazon <input class="checkbox" type="checkbox" name="checkboxList" id="flipkartCheckbox" value="https://www.flipkart.com/search?q={0}&affid=siddarthk" checked>Flipkart <input class="checkbox" type="checkbox" name="checkboxList" id="snapdealCheckbox" value="https://www.snapdeal.com/search?keyword={0}&aff_id=77922" checked>Snapdeal <a id="submitButton" class="highlightGreen">Search</input> <a id="openDealsAnchor" class="highlightRed">Deals of the day</a>';
	
	$('#flipkartCheckbox').removeAttr('vertical-align');
	
	var stripeDiv = document.createElement('div');
	stripeDiv.className  += "topbar";
	stripeDiv.innerHTML = stripeHtml;
	
	document.body.insertBefore(stripeDiv, document.body.firstChild);
};

function buttonClicks(){
		document.getElementById("submitButton").onclick = function() {openTabs()};
		document.getElementById("openDealsAnchor").onclick = function() {openDeals()};
};

function openTabs(){
	var productName = document.getElementById("productNameText").value;
	var urlArray = urls(productName);
	urlOpener(urlArray);
}

function urlOpener(urlArray){
sendMessageToBackground(urlArray);
}

function sendMessageToBackground(urlArray){
	chrome.runtime.sendMessage({"urlArray":urlArray, "from":"content"});
}

 String.format = function() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {       
          var reg = new RegExp("\\{" + i + "\\}", "gm");             
          s = s.replace(reg, arguments[i + 1]);
      }
      return s;
  }

function urls(productName){
  var checkValues = $('input[name=checkboxList]:checked').map(function()
            {
                return $(this).val();
            }).get();
			
	if(!productName)
		productName = "mobiles";
		
	for (var count in checkValues) {
		checkValues[count] = String.format(checkValues[count], productName);
	}		
		
	return checkValues;
	
}

function openDeals(){

var urlArray = [
"http://www.amazon.in/gp/goldbox/all-deals/?ie=UTF8&camp=3626&creative=24790&linkCode=ur2&tag=httpssiddarth-21", 
"http://dl.flipkart.com/dl/offers?affid=siddarthk", 
"http://www.snapdeal.com/offers/deal-of-the-day?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=77922"];


urlOpener(urlArray);

}








    