// IFrame Player API コード を読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// IFrame Player API コードが読み込まれると onYouTubeIframeAPIReady関数が実行される
var player;
function onYouTubeIframeAPIReady() {
    // 動画プレーヤーを挿入する YT.Player オブジェクトを作成する
    player = new YT.Player( 'player', {
        width: '960',
        height: '540',
        videoId: 'dBdEb4XVLqs', // YouTube動画ID
        events: {
            'onReady':onPlayerReady // 準備ができたら再生を始めるように指示
        }
    });
}

// 再生を開始する関数
function onPlayerReady(event) {
    event.target.playVideo();
}