function getSelectionText() {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();

  return text;
  }
}

chrome.tabs.executeScript(
  null,
    {
      file:"searchTerm.js"
    }
)

/*
  else if(){
    text = "is empty";
  }
  */
  var searchTerm = getSelectionText();
  var tester = "hej hej";
  console.log(searchTerm);
  console.log("hej");
  //document.getElementById("search").innerHTML = "tester";
