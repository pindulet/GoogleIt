function getSelectionText() {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();

  return text;
  }
}
/*
  else if(){
    text = "is empty";
  }
  */
  var searchTerm = getSelectionText();
  var tester = "hej hej";
  //console.log(searchterm);
  document.getElementById("search").innerHTML = "tester";
