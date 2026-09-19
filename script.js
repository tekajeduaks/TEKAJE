// Efek sederhana saat halaman di-scroll

const cards = document.querySelectorAll(
    ".org-card, .person, .day-card, .piket-item"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);
});