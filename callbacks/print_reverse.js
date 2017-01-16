var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
  var newStr = html.split("").reverse().join("")
  console.log(newStr);
}

getHTML(requestOptions, printReverse);