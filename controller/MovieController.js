// IFrame Player API コード を読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// IFrame Player API コードが読み込まれると onYouTubeIframeAPIReady関数が実行される
var player;
videoId = 'xyQS4XOFK1M'
function onYouTubeIframeAPIReady() {
    loadVideo();
}

function loadVideo() {
    if(player && document.getElementById('videoURL').value) {
        player.destroy();
        videoId = document.getElementById('videoURL').value.substr(32,11);
    }
    player = new YT.Player( 'player', {
        width: '760', //960
        height: '540', //540
        videoId: videoId, // YouTube動画ID
    });
}