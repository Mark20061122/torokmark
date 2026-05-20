// Képek a galériához - Mind a 12 egyedi konzultációs lap pontos adatai
const images = [
    { 
        src: "mikrovezerlo_programozas.png",  
    },
    { 
        src: "programfejlesztes.png", 
         
    },
    { 
        src: "plc_programozas.png", 
         
    },
    { 
        src: "iot_tantargy.png", 
         
    },
    { 
        src: "adatbaziskezeles_alapjai.png", 
         
    },
    { 
        src: "halozatkezeles.png", 
         
    },
    { 
        src: "digitalis_aramkorok_2023_2024.png", 
        
    },
    { 
        src: "szamitogepes_szimulacio_2025.png", 
         
    },
    { 
        src: "elektronika_2024.png", 
         
    },
    { 
        src: "robottechnika_2025.png", 
        
    },
    { 
        src: "munkavallaloi_2026.png", 
        
    },
    { 
        src: "programozas_alapjai_2025.png", 
         
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
