function FileWriter() {
    var Stream = document.getElementById("input").value;
    var blob = new Blob([Stream], { "type": "text/plain" });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, "lylics.txt");
    } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}