// IFrame Player API コード を読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// IFrame Player API コードが読み込まれると onYouTubeIframeAPIReady関数が実行される
var player;
function onYouTubeIframeAPIReady() {
    loadVideo('dBdEb4XVLqs');
}

function loadVideo(videoId) {
    if(player) {
        player.destroy();
    }
    player = new YT.Player( 'player', {
        width: '760', //960
        height: '540', //540
        videoId: videoId, // YouTube動画ID
    });
}