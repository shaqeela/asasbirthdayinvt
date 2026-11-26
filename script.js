const params = new URLSearchParams(window.location.search);

const guestName = params.get("to");

if (guestName) {
    document.getElementById("guestNameDisplay").textContent =
        guestName;
}

function openInvitation() {
    document.getElementById("cover").style.display = "none";

    document.getElementById("invitation")
        .classList.remove("hidden");

    document.getElementById("musicButton")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}

const eventDate = new Date("2027-02-14T18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        document.querySelector(".countdown").innerHTML =
            "Acara telah dimulai!";
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").textContent =
        Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("seconds").textContent =
        Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const music = document.getElementById("backgroundMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
        document.getElementById("musicButton").textContent =
            "♫ Pause Musik";
    } else {
        music.pause();
        document.getElementById("musicButton").textContent =
            "♫ Putar Musik";
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

document.getElementById("guestForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("guestName").value;
        const attendance = document.getElementById("attendance").value;
        const message = document.getElementById("message").value;

        const entry = document.createElement("div");
        entry.className = "guest-entry";

        const guestTitle = document.createElement("strong");
        guestTitle.textContent = name;

        const guestStatus = document.createElement("p");
        guestStatus.textContent = attendance;

        const guestMessage = document.createElement("p");
        guestMessage.textContent = message;

        entry.append(guestTitle, guestStatus, guestMessage);

        document.getElementById("guestList").prepend(entry);

        this.reset();

        alert("Terima kasih sudah mengisi buku tamu!");
    });

        const galleryImages = document.querySelectorAll(".gallery img");
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightboxImage");

        galleryImages.forEach(image => {
            image.addEventListener("click", function() {
                lightboxImage.src = this.src;
                lightbox.classList.add("active");
            });
        });

        lightbox.addEventListener("click", function() {
            lightbox.classList.remove("active");
        });
