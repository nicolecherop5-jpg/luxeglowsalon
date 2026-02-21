// Scroll Animation
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    observer.observe(card);
});

// Filter Function
function filterServices(category) {
    const services = document.querySelectorAll(".service-card");

    services.forEach(service => {
        if (category === "all") {
            service.style.display = "block";
        } else {
            if (service.classList.contains(category)) {
                service.style.display = "block";
            } else {
                service.style.display = "none";
            }
        }
    });
}