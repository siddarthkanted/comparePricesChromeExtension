window.onload = function() {
	createStripe();
	flightInit(true);
};

function createStripe(){
	var stripeHtml = '<input type="text" placeholder="Enter the source name" id="flightSourceNameText" class="centersearchtextboxSmall"></input> <input type="text" placeholder="Enter the destination name" id="flightDestinationNameText" class="centersearchtextboxSmall"></input> <input type="text" id="flightDepartDate" placeholder="Enter the departure date" class="centersearchtextboxSmall"></input> <input type="checkbox" name="flightCheckboxList" id="GoibiboCheckbox" value="https://www.goibibo.com/flights/#flight-searchresult/#air-{0}-{1}-{4}{3}{2}--1-0-0-E" checked>Goibibo</input> <input type="checkbox" name="flightCheckboxList" id="CleartripCheckbox" value="https://www.cleartrip.com/flights/results?from={0}&to={1}&depart_date={2}/{3}/{4}&adults=1&childs=0&infants=0&class=Economy&airline=&carrier=&intl=n&sd=1478262832914&page=loaded" checked>Cleartrip</input> <input type="checkbox" name="flightCheckboxList" id="YatraCheckbox" value="https://flight.yatra.com/air-search-ui/dom2/trigger?type=O&viewName=normal&flexi=0&noOfSegments=1&origin={0}&originCountry=IN&destination={1}&destinationCountry=IN&flight_depart_date={2}/{3}/{4}&ADT=1&CHD=0&INF=0&class=Economy&source=fresco-home" checked>Yatra</input> <input type="checkbox" name="flightCheckboxList" id="FlywidusCheckbox" value="http://flights.flywidus.com/domoneway.jsp?triptype=OneWay&start={0}&end={1}&fromdate={4}{3}{2}&todate=&nadults=1&nchild=0&ninfants=0&pclass=Y&pairline=All&displaystart=&displayend=&actioncode=" checked>Flywidus</input> <input type="checkbox" name="flightCheckboxList" id="PaytmCheckbox" value="https://paytm.com/flights/flightSearch/{0}-aaaa/{1}-bbbb/1/0/0/E/{4}-{3}-{2}" checked>Paytm</input> <input type="checkbox" name="flightCheckboxList" id="IxigoCheckbox" value="https://www.ixigo.com/search/result/flight/{0}/{1}/{2}{3}{4}//1/0/0/e" checked>Ixigo</input> <input type="checkbox" name="flightCheckboxList" id="MakemytripCheckbox" value="https://flights.makemytrip.com/makemytrip/search/O/O/E/1/0/0/S/V0/{0}_{1}_{2}-{3}-{4}?intid=DF_LP_Widget_Search_Hyderabad_Coimbatore" checked>Makemytrip</input> <a id="flightSearchButton" class="highlightGreenSmall">Search</a>';
	
	var stripeDiv = document.createElement('div');
	stripeDiv.className  += "topbar";
	stripeDiv.innerHTML = stripeHtml;
	
	var bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.parentNode.insertBefore(stripeDiv, bodyTag);
};