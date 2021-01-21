
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)  {
    chrome.tabs.query({url: "https://meetings.ringcentral.com/join?*"}, tabs => {
        // Close the ringcentral postmeeting tabs.
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { tabId: tab.id }, (response) => {
                console.log("message sent : " + response);
            });
        });
    });
});


chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "fuckringcentral");
    console.log("port setted")
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        // if (msg.close){
        //     chrome.tabs.remove(msg.tabId, () => console.log(`closed ${tab.url}`));
        // }
    });
});
