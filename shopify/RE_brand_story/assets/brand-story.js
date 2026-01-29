document.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll(".story-scene");
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.4 }
  );

  scenes.forEach(scene => observer.observe(scene));
  timelineItems.forEach(item => observer.observe(item));
});
