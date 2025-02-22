function hideModal() {
    let modalHidder = document.querySelectorAll('.nf-modal.interstitial-full-screen');
    modalHidder.forEach(modal => { modal.style.display = 'none'; });
}

function checkForVideo() {
    let videoClip = document.querySelector("video");
    if (videoClip) {
        videoClip.setAttribute("controls", "true");
        videoClip.setAttribute("autoplay", "true");

        setTimeout(() => {
            videoClip.play();
        }, 1000);
    }
}

// Esperar a que los elementos se carguen con un observer
const observer = new MutationObserver(() => {
    hideModal();
    checkForVideo();
});

observer.observe(document.body, { childList: true, subtree: true });

// Ejecutar inmediatamente por si ya están cargados
hideModal();
checkForVideo();
