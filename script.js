// Képek a galériához - ide töltsd majd be a sajátjaidat!
const images = [
    { src: "https://picsum.photos/1000/800?random=1", title: "Szakmai Projekt 1" },
    { src: "https://picsum.photos/1000/800?random=2", title: "Gyakorlati munka" },
    { src: "https://picsum.photos/1000/800?random=3", title: "Bánki Emlékverseny" },
    { src: "banki logo.jpg", title: "Iskolánk logója" }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const caption = document.getElementById('caption');
    const galleryBtn = document.getElementById('galleryBtn');
    const closeBtn = document.querySelector('.close-btn');

    // Megnyitás
    galleryBtn.onclick = () => {
        modal.style.display = "block";
        updateGallery();
    }

    // Bezárás
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

    function updateGallery() {
        modalImg.src = images[currentIndex].src;
        caption.innerHTML = `<strong>${images[currentIndex].title}</strong> (${currentIndex + 1} / ${images.length})`;
    }

    window.changeImage = (n) => {
        currentIndex += n;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        updateGallery();
    }
});