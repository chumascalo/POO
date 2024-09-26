console.log("page loaded...");

// Función para reproducir el video seleccionado en el reproductor principal
function playVideo(videoSecundario) {
    var mainvideo = document.getElementById("mainvideo");  // Obtiene el elemento de video principal
    var temp = mainvideo.src;  // Guarda temporalmente la fuente del video principal
    mainvideo.src = videoSecundario.src;  // Cambia la fuente del video principal a la del video secundario
    mainvideo.play();  // Reproduce el video principal con la nueva fuente
    videoSecundario.src = temp;  // Intercambia las fuentes, asignando la fuente anterior del video principal al video secundario
}

// Función para pausar el video y devolver la fuente original
function pauseVideo(videoSecundario) {
    var mainvideo = document.getElementById("mainvideo");  // Obtiene el elemento de video principal
    var tempSrc = mainvideo.src;  // Guarda temporalmente la fuente del video principal
    mainvideo.src = videoSecundario.src;  // Cambia la fuente del video principal a la del video secundario
    videoSecundario.src = tempSrc;  // Intercambia las fuentes nuevamente
    mainvideo.play();  // Reproduce el video principal con la nueva fuente
}