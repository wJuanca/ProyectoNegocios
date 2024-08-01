function playVideo(videoId) {
    document.getElementById('videoModal').style.display = 'flex';
    document.getElementById(videoId).style.display = 'block';
    document.getElementById(videoId).src += "&autoplay=1";
}

function closeVideo() {
    const iframes = document.querySelectorAll('.video-content iframe');
    iframes.forEach((iframe) => {
        iframe.style.display = 'none';
        iframe.src = iframe.src.replace("&autoplay=1", "");
    });
    document.getElementById('videoModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeVideo();
    }
}
