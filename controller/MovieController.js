// IFrame Player API �R�[�h ��ǂݍ���
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

videoId = 'dBdEb4XVLqs'

// IFrame Player API �R�[�h���ǂݍ��܂��� onYouTubeIframeAPIReady�֐������s�����
var player;
function onYouTubeIframeAPIReady() {
    // ����v���[���[��}������ YT.Player �I�u�W�F�N�g���쐬����
    player = new YT.Player( 'player', {
        width: '760', //960
        height: '540', //540
        videoId: videoId, // YouTube����ID
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function ply() {
    player.destroy();
    player = new YT.Player( 'player', {
        width: '760', //960
        height: '540', //540
        videoId: 'EKUBLenVvH4', // YouTube����ID
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.PLAYING && !done){
        event.target.loadVideoById(videoId);
    }
}