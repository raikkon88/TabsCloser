chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)  {
    chrome.tabs.query({url: "https://www.ringcentral.com/post_meeting/*"}, tabs => {
        tabs.forEach(tab => chrome.tabs.remove(tab.id, () => console.log(`closed ${tab.url}`)))
    })
});
