document.addEventListener("DOMContentLoaded", function () {
  // Fade-in animations
  const fadeIns = document.querySelectorAll(
    ".animate-fade-in, .animate-fade-in-delay"
  );
  fadeIns.forEach((fadeIn, index) => {
    setTimeout(() => {
      fadeIn.classList.add("fade-in-active");
    }, index * 200);
  });
});
