function openTabs(){
	var productName = document.getElementById("productNameText").value;
	var urlArray = urls(productName);
	urlOpener(urlArray);
}

function urlOpener(urlArray){
for (var count in urlArray) {
		chrome.tabs.create({url: urlArray[count], "active":true});
	}
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
"http://www.amazon.in/gp/goldbox/all-deals/?ie=UTF8&camp=3626&creative=24790&linkCode=ur2&tag=awesomechromeextension-21", 
"http://dl.flipkart.com/dl/offers?affid=siddarthk", 
"http://www.snapdeal.com/offers/deal-of-the-day?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=77922"];


urlOpener(urlArray);

}

document.addEventListener('DOMContentLoaded', function() {
		document.getElementById("submitButton").onclick = function() {openTabs()};
		document.getElementById("openDealsAnchor").onclick = function() {openDeals()};
		$( "#tabs" ).tabs();
});

