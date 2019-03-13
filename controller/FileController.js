var file = document.querySelector('#getfile');

file.onchange = function (){
  var fileList = file.files;
  //読み込み
  var reader = new FileReader();
  reader.readAsText(fileList[0]);

  //読み込み後
  reader.onload = function  () {
    document.querySelector('#display').textContent = reader.result;
  };
};

/*
var fs = require('fs');
var readline = require("readline");

var text = fs.readFileSync("lylics.txt");
var lines = text.toString().split('¥n');

for (var line of lines) {
  console.log(line)
}
*/

function FileWriter() {
    var Stream = document.getElementById("textarea_id").value;
    var blob = new Blob([Stream], { "type": "text/plain" });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, "lylics.txt");
    } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}