// Képek a galériához - Mind a 12 feltöltött konzultációs lap
const images = [
    { 
        src: "mikrovezerlo_2025_tavasz.jpg", 
        title: "Mikrovezérlő programozás (2025. tavasz) - Tanár: Major Sándor - Feladat: Mikrovezérlő felépítése, Bemeneti és kimeneti elemek használata" 
    },
    { 
        src: "mikrovezerlo_2025_osz.jpg", 
        title: "IoT tantárgy (2025. ősz) - Tanár: Major Sándor - Feladat: IoT eszközök kezelése" 
    },
    { 
        src: "adatbazis_2024.jpg", 
        title: "Adatbáziskezelés alapjai (2024) - Tanár: Major Sándor - Feladat: Egyszerű relációs adatbázist tervez" 
    },
    { 
        src: "halozatkezeles_2025.jpg", 
        title: "Hálózatkezelés (2025) - Tanár: Major Sándor - Feladat: Elkészíti egy hálózat címzési tervét" 
    },
    { 
        src: "digitalis_aramkorok_2023_2024.jpg", 
        title: "Digitális áramkörök (2023/2024) - Tanár: Antal Gábor - Feladat: Analóg és digitális jeleket különböző számrendszerekbe átszámol" 
    },
    { 
        src: "szamitogepes_szimulacio_2025.jpg", 
        title: "Számítógépes szimuláció (2025) - Tanár: Antal Gábor - Feladat: Áramköri rajzok - CAD ismerete" 
    },
    { 
        src: "elektronika_2024.jpg", 
        title: "Elektronika (2024) - Tanár: Antal Gábor - Feladat: Mérési jegyzőkönyvet készít irodai és/vagy célszoftver használatával" 
    },
    { 
        src: "robottechnika_2025.jpg", 
        title: "Robottechnika CAD/CAM (2025) - Tanár: Antal Gábor - Feladat: Tervező programmal NYÁK-ot tervez - CAD" 
    },
    { 
        src: "munkavallaloi_2026.jpg", 
        title: "Munkavállalói idegen nyelven (2026) - Tanár: Dr. Rosenberg Daniel James - Feladat: Önéletrajz készítése informatikai programok használatával" 
    },
    { 
        src: "programozas_alapjai_2025.jpg", 
        title: "Programozás alapjai (2025) - Tanár: Korom Károly - Feladat: Program leírásokat készítése, programozási nyelv és környezet választása" 
    },
    { 
        src: "adatbazis_masolat.jpg", 
        title: "Adatbáziskezelés alapjai (Ismétlés/Másik félév) - Tanár: Major Sándor - Feladat: Egyszerű relációs adatbázist tervez" 
    },
    { 
        src: "halozatkezeles_masolat.jpg", 
        title: "Hálózatkezelés (Másik verzió) - Tanár: Major Sándor - Feladat: Elkészíti egy hálózat címzési tervét" 
    }
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
        caption.innerHTML = `<strong>${images[currentIndex].title}</strong> <br><br> (${currentIndex + 1} / ${images.length})`;
    }

    window.changeImage = (n) => {
        currentIndex += n;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        updateGallery();
    }
});
