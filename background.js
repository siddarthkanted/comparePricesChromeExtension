function urlOpener(urlArray){
for (var count in urlArray) {
		chrome.tabs.create({url: urlArray[count], "active":true});
	}
};

function receiveMessages(){
		chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
		 if (request.from == "content") {
            urlOpener(request.urlArray);
        } 
    }
);
}


if (jQuery) {
    // jQuery loaded
	
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
	receiveMessages();
		
} else {
    // jQuery not loaded
	
	
}