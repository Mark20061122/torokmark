// Képek a galériához - Mind a 12 egyedi konzultációs lap pontos adatai
const images = [
    { 
        src: "mikrovezerlo_programozas.png", 
        title: "Mikrovezérlő programozás - Tanár: Major Sándor - Feladat: Mikrovezérlő felépítése, Bemeneti és kimeneti elemek használata" 
    },
    { 
        src: "programfejlesztes.png", 
        title: "Programfejlesztés - Tanár: Major Sándor - Feladat: Eseményvezérelt, grafikus felhasználói felületű alkalmazást készít" 
    },
    { 
        src: "plc_programozas.png", 
        title: "PLC programozás - Tanár: Horváth Ferenc - Feladat: Ismeri a különböző típusú PLC-k jellemzőit" 
    },
    { 
        src: "iot_tantargy.png", 
        title: "IoT tantárgy - Tanár: Major Sándor - Feladat: IoT eszközök kezelése" 
    },
    { 
        src: "adatbaziskezeles_alapjai.png", 
        title: "Adatbáziskezelés alapjai - Tanár: Major Sándor - Feladat: Egyszerű relációs adatbázist tervez" 
    },
    { 
        src: "halozatkezeles.png", 
        title: "Hálózatkezelés - Tanár: Major Sándor - Feladat: Elkészíti egy hálózat címzési tervét" 
    },
    { 
        src: "digitalis_aramkorok.png", 
        title: "Digitális áramkörök - Tanár: Antal Gábor - Feladat: Analóg és digitális jeleket különböző számrendszerekbe átszámol" 
    },
    { 
        src: "szamitogepes_szimulacio.png", 
        title: "Számítógépes szimuláció - Tanár: Antal Gábor - Feladat: Áramköri rajzok- CAD ismerete" 
    },
    { 
        src: "elektronika.png", 
        title: "Elektronika - Tanár: Antal Gábor - Feladat: Mérési jegyzőkönyvet készít irodai és/vagy célszoftver használatával, Méréssel meghatározza kondenzátor kapacitását" 
    },
    { 
        src: "robottechnika_cad_cam.png", 
        title: "Robottechnika CAD/CAM - Tanár: Antal Gábor - Feladat: Tervező programmal NYÁK-ot tervez-CAD" 
    },
    { 
        src: "munkavallaloi_idegen_nyelven.png", 
        title: "Munkavállalói idegen nyelven - Tanár: Dr. Rosenberg Daniel James - Feladat: Önéletrajz készítése (önéletrajz készítő informatikai programok használatával)" 
    },
    { 
        src: "programozas_alapjai.png", 
        title: "Programozás alapjai - Tanár: Korom Károly - Feladat: Program leírásokat készítése, programozási nyelv és környezet választása és használat" 
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
