window.onload = function() {
	createStripe();
	busInit(true);
};

function createStripe(){
	var stripeHtml = '<div class="topbar"> <input type="text" placeholder="Enter the source name" id="busSourceNameText" class="centersearchtextboxSmall"></input> <input type="text" placeholder="Enter the destination name" id="busDestinationNameText" class="centersearchtextboxSmall"></input> <input type="text" id="busDepartDate" placeholder="Enter the departure date" class="centersearchtextboxSmall"></input> <input type="checkbox" name="busCheckboxList" id="busPaytmCheckbox" value="https://paytm.com/bus-tickets/search/{0}/{1}/{4}-{3}-{2}/1" checked>Paytm</input> <input type="checkbox" name="busCheckboxList" id="busGoibiboCheckbox" value="https://www.goibibo.com/bus/#bus-{0}-{1}-{4}{3}{2}---0-0-2162254155836171767-3924148632351062483" checked>Goibibo</input> <input type="checkbox" name="busCheckboxList" id="busMakemytripCheckbox" value="https://bus.makemytrip.com/bus/search/{0}/{1}/{2}-{3}-{4}" checked>Makemytrip</input> <input type="checkbox" name="busCheckboxList" id="busIxigoCheckbox" value="https://www.ixigo.com/search/result/bus/{0}/{1}/{2}{3}{4}//1" checked>Ixigo</input> <a id="busSearchButton" class="highlightGreenSmall">Search</a> </div>';
	
	var stripeDiv = document.createElement('div');
	stripeDiv.className  += "topbar";
	stripeDiv.innerHTML = stripeHtml;
	
	var bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.parentNode.insertBefore(stripeDiv, bodyTag);
};