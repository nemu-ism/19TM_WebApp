function FileWrite(Filename, Stream) {
    var blob = new Blob([Stream], { "type": "text/plain" });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, FileName);
    } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}
 
function run(){    
    var Stream = document.getElementById("textarea_id").value;
    FileWrite('test.txt',Stream);
}