// Képek a galériához - Kizárólag a saját konzultációs lapok és a logó
const images = [
    { src: "img20260520_11124546.jpg", title: "Digitális áramkörök - Számrendszerek átszámítása" },
    { src: "img20260520_11142029.jpg", title: "Számítógépes szimuláció - Áramköri rajzok (CAD)" },
    { src: "img20260520_11152980.jpg", title: "Elektronika - Kondenzátor kapacitás mérése" },
    { src: "img20260520_11175545.jpg", title: "Robottechnika CAD/CAM - NYÁK tervezés" },
    { src: "img20260520_11185160.jpg", title: "Munkavállalói idegen nyelven - Önéletrajz készítése" },
    { src: "img20260520_11194857.jpg", title: "Programozás alapjai - Programleírások és környezetek" },
    { src: "img20260520_11204337.jpg", title: "PLC programozás - PLC típusok jellemzői" },
    { src: "img20260520_11214395.jpg", title: "Programfejlesztés - Eseményvezérelt GUI alkalmazás" },
    { src: "img20260520_11230540.jpg", title: "Mikrovezérlő programozás - I/O elemek használata" },
    { src: "img20260520_11240201.jpg", title: "IoT - IoT eszközök kezelése" },
    { src: "img20260520_11250834.jpg", title: "Adatbáziskezelés alapjai - Egyszerű relációs adatbázis tervezése" },
    { src: "img20260520_11260227.jpg", title: "Hálózatkezelés - Hálózati címzési terv készítése" },
    { src: "banki logo.jpg", title: "Iskolánk logója (Bánki Donát Technikum)" }
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
