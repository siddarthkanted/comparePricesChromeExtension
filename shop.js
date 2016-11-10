function openShopTabs(isContentScript){
	var productName = document.getElementById("productNameText").value;
	var urlArray = shopUrls(productName);
	urlOpener(urlArray);
}

function shopUrls(productName){
  var checkValues = $('input[name=productCheckboxList]:checked').map(function()
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

function openShopDeals(isContentScript){
var urlArray = [
"http://www.amazon.in/gp/goldbox/all-deals/?ie=UTF8&camp=3626&creative=24790&linkCode=ur2&tag=awesomechromeextension-21", 
"http://dl.flipkart.com/dl/offers?affid=siddarthk", 
"http://www.snapdeal.com/offers/deal-of-the-day?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=77922"];

urlOpener(urlArray);
}

function shopButtonClicks(){
		document.getElementById("shopSearchButton").onclick = function() {openShopTabs()};
		document.getElementById("openDealsAnchor").onclick = function() {openShopDeals()};
}

function shopAutoFillText(currentUrl){
	var supportedUrls = $('input[name=productCheckboxList]').map(function()
            {
                return $(this).val();
            }).get();
	var currentUri = new URI(currentUrl);	
	for (var count in supportedUrls) {
		var supportedUri = new URI(supportedUrls[count]);	
		if(currentUri.domain() == supportedUri.domain()){
			var paramKey = getUrlParamKey(supportedUrls[count], "{0}");
			var paramValue = getUrlParameterValue(currentUrl, paramKey);
			if(paramValue){
				document.getElementById('productNameText').value  = paramValue;
			}
		}
	}
}

function shopInit(){
	shopButtonClicks();
	getCurrentUrl(shopAutoFillText);
}

document.addEventListener('DOMContentLoaded', function() {
shopInit();
});

