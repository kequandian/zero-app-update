if(!window.MC){
  window.MC = {};
}
// window.MC = { ...window.MC };
// window.MC.HOST = 'http://112.74.26.228:10080';
window.MC.HOST = 'http://120.79.77.207:8080';
console.log(window.MC);
window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
    // TODO
    alert(JSON.stringify(errorMessage))
}
