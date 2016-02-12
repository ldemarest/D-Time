chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);

chrome.alarms.create('alarm',{delayInMinutes:1})

chrome.notifications.create('backToWork',{
  type:"basic",
  iconUrl:"icon.png",
  title:"Poop",
  message:"Get Back To WORK!"
})

chrome.alarms.onAlarm.addListener(function(alarm){

})