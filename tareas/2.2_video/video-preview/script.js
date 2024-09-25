console.log("page loaded...");


function playVideo(video){
video.play();
};

function pauseVideo(video){
video.pause();
video.currentTime = 0; //vuelve video al inicio
};

function playPequeños(video) {
    var largeVideo = document.getElementById('largeVideo');
    largeVideo.src = video.src;
    largeVideo.play(); 
}
