
/* ===================================
   1. MENU MOBILE
=================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


/* ===================================
   2. TYPING ANIMATION
=================================== */

const words = [
    "Web Developer",
    "Mahasiswa",
    "UI/UX Designer",
    "Flutter Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


/* ===================================
   3. UPLOAD FOTO PROFIL
=================================== */

const uploadPhoto = document.getElementById("uploadPhoto");

uploadPhoto.addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Silakan pilih file gambar!");
        uploadPhoto.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        const image = document.getElementById("profileImage");

        image.src = e.target.result;
        image.style.display = "block";

        document.getElementById("photoPlaceholder").style.display = "none";

    };

    reader.readAsDataURL(file);

});


/* ===================================
   4. FORM KONTAK KE WHATSAPP
=================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // GANTI DENGAN NOMOR WHATSAPP KAMU
    const nomorWhatsApp = "628XXXXXXXXXX";

    if (nomorWhatsApp.includes("X")) {
        alert("Silakan ganti nomor WhatsApp pada file script.js terlebih dahulu!");
        return;
    }

    const pesan =
        `Halo Marsya!%0A%0A` +
        `Nama: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Pesan: ${encodeURIComponent(message)}`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;

    window.open(url, "_blank");

});


/* ===================================
   5. TAHUN OTOMATIS
=================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();
