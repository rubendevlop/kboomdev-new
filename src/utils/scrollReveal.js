export function scrollReveal() {
    const items = document.querySelectorAll(".fade-up, .fade-in");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    items.forEach((el) => observer.observe(el));
  }
  