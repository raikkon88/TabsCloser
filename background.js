chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({ url: "https://launchmetrics.zoom.us/*/*" }, (tabs) => {
    tabs.forEach((tab) => {
      console.log("found -> ", tab.url);
      if (tab.url.includes("success")) {
        setTimeout(() => {
          console.log("includes");
          chrome.tabs.remove(tab.id, () => console.log(`closed ${tab.url}`));
        }, 1000);
      }
    });
  });
  chrome.tabs.query({ url: "https://*.ringcentral.com/*/*" }, (tabs) => {
    tabs.forEach((tab) => {
      console.log("found -> ", tab.url);
      if (tab.url.includes("post_meeting")) {
        console.log("includes");
        chrome.tabs.remove(tab.id, () => console.log(`closed ${tab.url}`));
      }
    });
  });

  //https://launchmetrics.awsapps.com/start/user-consent/login-success.html
  chrome.tabs.query(
    { url: "https://launchmetrics.awsapps.com/*/*" },
    (tabs) => {
      tabs.forEach((tab) => {
        if (tab.url.includes("login-success")) {
          chrome.tabs.remove(tab.id, () => console.log(`closed ${tab.url}`));
        }
      });
    }
  );
});
