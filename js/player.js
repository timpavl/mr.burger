let player;

function onYouTubeIframeAPIReady() {
   player = new YT.Player("yt-player", {
     width: "660",
     height: "405",
     videoId: "V5w1OGknhlc",
     playerVars: {
       controls: 0,
       disablekb: 0,
       showinfo: 0,
       rel: 0,
       autoplay: 0,
       modestbranding: 0
     },
     events: {
      onReady: onPlayerReady,
       onStateChange: onPlayerStateChange
     }
   });
 }


$('.player__playback').on('click', e => {
   const bar = $(e.currentTarget);
   const newButtonPosition = e.originalEvent.layerX;
   const clickedPercent = (newButtonPosition / bar.width()) * 100;
   const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

   player.seekTo(newPlayerTime);
})


$('.player__splash').on('click', e => {
   player.playVideo();
})

 function onPlayerReady(e) {
 

 let interval;
 const durationTime = player.getDuration();

 clearInterval(interval);

 updateTimerDisplay();


 interval = setInterval(() => {
     const completedTime = player.getCurrentTime();
     const percent = (completedTime / durationTime) * 100;
     $('.player__playback-button').css({
     left: `${percent}%`
   })

   updateTimerDisplay();
 }, 1000);
 }

 function onPlayerStateChange(event) {
     const btn = $('.player__start');
     switch (event.data){
       case 1:
       btn.addClass('paused');
       $('.player__wrapper').addClass('active');
       break;
       case 2:
       btn.removeClass('paused');
       break;
     }
 }






 function updateTimerDisplay () {
   $('.player__duration-estimate').text(formatTime(player.getDuration()));
   $('.player__duration-completed').text(formatTime(player.getCurrentTime()));
 }


 $('.player__start').on('click', e=> {
     const btn =$(e.currentTarget);
     const playerState = player.getPlayerState();

     if(playerState !== 1 ) {
       player.playVideo();
     } else {
         player.pauseVideo();
     }
 });

 function formatTime(time) {
     const roundTime = Math.round(time);
     const minutes = Math.floor(roundTime / 60);
     const seconds = roundTime - minutes * 60;

     const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
     return `${minutes}:${formattedSeconds}`;
 };
