document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Product items fade-in ---------- */
    const productItems = document.querySelectorAll(".product-item");
  
    if (productItems.length) {
      const productObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        { threshold: 0.18 } // change trigger point if needed
      );
  
      productItems.forEach(item => productObserver.observe(item));
    }
  
    /* ---------- CTA buttons animate-in ---------- */
    const ctaButtons = document.querySelectorAll(".add-cart-btn");
  
    if (ctaButtons.length) {
      const ctaObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        { threshold: 0.25 } // CTA observed when ~25% visible
      );
  
      ctaButtons.forEach(btn => ctaObserver.observe(btn));
    }
   /* ---------- Home-page image scroll animation ---------- */
const image = document.querySelector("#home-page-img");

function animateImageOnScroll() {
    const scrollY = window.scrollY;
    const maxScroll = 400; // adjust as needed

    // progress from 0 → 1
    const progress = Math.min(scrollY / maxScroll, 1);

    // Scale 1 → 1.3
    const scaleValue = 1 + progress * 0.3;

    // Fade 1 → 0
    const opacityValue = 1 - progress;

    image.style.transform = `translateY(-50%) scale(${scaleValue})`;
    image.style.opacity = opacityValue;
}

// Fire on scroll
window.addEventListener("scroll", animateImageOnScroll);

// Fire once at load (optional)
animateImageOnScroll();
});