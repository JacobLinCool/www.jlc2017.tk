function player(){
    var VideoMp4Url = document.getElementById("VideoSourceMp4").value;
    document.write("<link href='http://vjs.zencdn.net/5.8.8/video-js.css' rel='stylesheet'><script src='http://vjs.zencdn.net/5.8.8/video.js'></script><script src='https://unpkg.com/videojs-flash/dist/videojs-flash.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.10.1/videojs-contrib-hls.min.js'></script><title>JLCVideo - Player</title><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='../Music/css/styles.css'><figure id='videoContainer' data-fullscreen='false'><video id='video' preload='metadata'><source src='"+VideoMp4Url+"' type='video/mp4'><track label='zh_TW' kind='subtitles' srclang='zh_TW' src='.vtt' default=''></video><div id='video-controls' class='controls' data-state='visible'><button id='playpause' type='button' data-state='play'>Play/Pause</button><button id='stop' type='button' data-state='stop'>Stop</button><div class='progress'><progress id='progress' value='0' min='0' max='120'><span id='progress-bar'></span></progress></div><button id='mute' type='button' data-state='mute'>Mute/Unmute</button><button id='volinc' type='button' data-state='volup'>Vol+</button><button id='voldec' type='button' data-state='voldown'>Vol-</button><button id='fs' type='button' data-state='go-fullscreen' style='display: none;'>Fullscreen</button><button id='subtitles' type='button' data-state='subtitles'>CC</button></div><ul class='subtitles-menu'><li><button id='subtitles-off' class='subtitles-button' value='Off' data-state='inactive'>Off</button></li><li><button id='subtitles-en' class='subtitles-button' lang='en' value='English' data-state='inactive'>English</button></li><li><button id='subtitles-de' class='subtitles-button' lang='de' value='Deutsch' data-state='inactive'>Deutsch</button></li><li><button id='subtitles-es' class='subtitles-button' lang='es' value='Español' data-state='inactive'>Español</button></li></ul></figure><script src='../Music/js/vp.js'></script>"); 
	}
