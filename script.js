// Smooth scroll to timeline section
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector(".timeline-section").scrollIntoView({
    behavior: "smooth",
  });
});
