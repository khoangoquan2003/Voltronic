
    const images = [
        "imgs/respone (1).jpg",
        "imgs/respone (2).jpg",
        "imgs/respone (4).jpg",
        "imgs/respone (5).jpg",
        "imgs/respone (6).jpg",
        "imgs/respone (7).jpg",
        "imgs/respone (8).jpg",
        "imgs/respone (9).jpg",
        "imgs/respone (10).jpg",
        "imgs/respone (11).jpg",
        "imgs/respone (12).jpg",
        "imgs/respone (13).jpg",
        "imgs/respone (14).jpg",
        "imgs/respone (15).jpg",
        "imgs/respone (16).jpg"
    ];

    let currentIndex = 0;

    function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = images[currentIndex];
}

    function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

    function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

    // Điều khiển bằng phím mũi tên
    document.addEventListener('keydown', function(e) {
    const lightboxDisplay = document.getElementById('lightbox').style.display;
    if (lightboxDisplay === 'flex') {
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'Escape') closeLightbox();
}
});

