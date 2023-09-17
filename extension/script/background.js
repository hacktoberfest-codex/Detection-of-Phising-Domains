chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.startsWith("http://facebok.id/")) {
        console.log(changeInfo.url)
        chrome.windows.create({
            type: 'popup',
            url: 'notification/notification.html',
            width: 300,
            height: 200
          });                 
        }
      });