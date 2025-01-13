// Add scroll animations
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    if (scrollPosition > section.offsetTop + section.offsetHeight / 2) {
      section.style.animation = "fadeIn 1.2s ease-out forwards";
    }
  });
});
