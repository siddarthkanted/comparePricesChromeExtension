window.onload = function() {
	createStripe();
	shopInit();
	defaultOffersDisplay();
	chrome.runtime.sendMessage({"action":"getShopProductList"});
	ReceiveMessages();
};

function createStripe(){
	var stripeHtml = '<input type="text" placeholder="Enter the product name" id="productNameText" class="centersearchtextboxSmall"></input> <input type="checkbox" name="productCheckboxList" id="amazonCheckbox" value="http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords={0}&tag=awesomechromeextension-21" checked>Amazon</input> <input type="checkbox" name="productCheckboxList" id="flipkartCheckbox" value="https://www.flipkart.com/search?q={0}&affid=siddarthk" checked>Flipkart</input> <input type="checkbox" name="productCheckboxList" id="snapdealCheckbox" value="https://www.snapdeal.com/search?keyword={0}&aff_id=77922" checked>Snapdeal</input> <input type="checkbox" name="productCheckboxList" id="ebayCheckbox" value="http://www.ebay.in/sch/i.html?_nkw={0}" checked>Ebay</input> <input type="checkbox" name="productCheckboxList" id="paytmCheckbox" value="https://paytm.com/shop/search?q={0}" checked>Paytm</input> <input type="checkbox" name="productCheckboxList" id="bigbasketCheckbox" value="http://www.bigbasket.com/ps/?q={0}" checked>Bigbasket</input> <a id="shopSearchButton" class="highlightGreenSmall">Search product</a> <a id="openDealsAnchor" class="highlightRedSmall">Deals of the day</a><div id="openShopCompareAnchor" class="highlightWhiteSmall dropdownCss">Compare <div id="boxDiv" class="dropdown-content dropDownStyle"><ul id="offers_partner_items_ul" style="list-style: none; padding: 0px; margin: 0px;"></ul></div></div>';
	
	var stripeDiv = document.createElement('div');
	stripeDiv.className  += "topbar";
	stripeDiv.innerHTML = stripeHtml;
	
	var bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.parentNode.insertBefore(stripeDiv, bodyTag);
};

function sendMessageToBackground(){
	chrome.runtime.sendMessage({"action":"getShopProductList"});
}

function ReceiveMessages(){
    chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
        console.log('onMessage', msg);
        if (msg.from == "background" && msg.action == "ShopProductList") {
			var ajaxResponse = msg.msg;
            displayItemArrayFromAjaxResponse(ajaxResponse);
        }if (msg.from == "popup") {
            sendResponse({domHtml: document.documentElement.innerHTML, "from":"content", ajaxResponse:ajaxResponse});
        }
    });
}