// background.js - Updated for Manifest V3
chrome.action.onClicked.addListener(function(tab) {
  // In Manifest V3, we can't inject scripts directly into pages
  // Instead, we'll send a message to the content script
  chrome.tabs.sendMessage(tab.id, {"message": "clicked_browser_action"});
});

// Alternative approach: Use chrome.scripting.executeScript if needed
// chrome.action.onClicked.addListener(function(tab) {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['getWeather.js']
//   });
// });