document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".product-item");

    // Observer to detect when items enter viewport
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // fade-in once only
                }
            });
        },
        {
            threshold: 0.2 // triggers when 20% of element is visible
        }
    );

    // Observe each product card
    items.forEach(item => observer.observe(item));

    
});
