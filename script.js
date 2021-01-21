chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    sendResponse(true);
    let tabId = request.tabId;
    let port = chrome.runtime.connect({name: "fuckringcentral"});

    let polling = setInterval(() => {
        console.log(document.getElementsByClassName("desc12 launch-msg"));
        if(document.getElementsByClassName("desc12 launch-msg").length > 0) {
            console.log("now I have found it");
            port.postMessage({
                close: true,
                tabId: tabId
            });
        }
    }, 500);
    polling();
});
