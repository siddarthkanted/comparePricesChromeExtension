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

function urlOpener(urlArray){
	if(null == chrome.tabs || null == chrome.tabs.create){
		chrome.runtime.sendMessage({"urlArray":urlArray, "action":"urlOpener"});
	}else{
		for (var count in urlArray) {
			chrome.tabs.create({url: urlArray[count], "active":true});
		}
	}
}

function appVersionNumber(){
	var manifestData = chrome.runtime.getManifest();
	document.getElementById('appVersionNumber').innerHTML = "Version : " + manifestData.version;
}

String.format = function() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {       
          var reg = new RegExp("\\{" + i + "\\}", "gm");             
          s = s.replace(reg, arguments[i + 1]);
      }
      return s;
}

document.addEventListener('DOMContentLoaded', function() {
$( "#tabs" ).tabs();
appVersionNumber();
});

function getCurrentUrl(callBackFuntion){
	//you are in content scripts
	if(null == chrome.tabs || null == chrome.tabs.query){
		callBackFuntion(document.location.href);
	}else{
	//you are in popup
	var queryInfo = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function(tabs) {
		var tab = tabs[0]; 
		callBackFuntion(tab.url);
  });	
	}
}