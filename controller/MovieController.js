// IFrame Player API �R�[�h ��ǂݍ���
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// IFrame Player API �R�[�h���ǂݍ��܂��� onYouTubeIframeAPIReady�֐������s�����
var player;
function onYouTubeIframeAPIReady() {
    // ����v���[���[��}������ YT.Player �I�u�W�F�N�g���쐬����
    player = new YT.Player( 'player', {
        width: '960',
        height: '540',
        videoId: 'dBdEb4XVLqs', // YouTube����ID
        events: {
            'onReady':onPlayerReady // �������ł�����Đ����n�߂�悤�Ɏw��
        }
    });
}

// �Đ����J�n����֐�
function onPlayerReady(event) {
    event.target.playVideo();
}