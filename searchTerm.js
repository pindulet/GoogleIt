var text = window.getSelection().toString();
var searchUrl = 'https://www.google.dk/search?q=' + text;
window.open(searchUrl, "_blank");
