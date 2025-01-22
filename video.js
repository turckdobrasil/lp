    window.onload = function() {
        var video = document.getElementById('header-video');
        video.autoplay = true; // Garante que o autoplay esteja ativado
        video.loop = true;     // Garante que o loop esteja ativado
        video.muted = true;    // Garante que o vídeo será sem som
        video.play();          // Inicia o vídeo automaticamente
    }

    