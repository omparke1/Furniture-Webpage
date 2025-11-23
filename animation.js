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
  });