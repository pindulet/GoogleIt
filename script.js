function getSearchterm(){
  chrome.tabs.executeScript(
    null,
    {
      file:"searchTerm.js"
    }
  )
}

chrome.browserAction.onClicked.addListener(getSearchterm())
window.close();
