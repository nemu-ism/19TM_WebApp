﻿function TextInput() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var file = fso.OpenTextFile("lylics.txt");

    while(!file.AtEndOfStream) {
        text += file.ReadLine();
    }
}

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