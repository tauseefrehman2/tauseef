const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
  observer.observe(item);
});

const projectList = document.querySelector("#projectList");
const projectToggle = document.querySelector("#projectToggle");

if (projectList && projectToggle) {
  projectToggle.addEventListener("click", () => {
    const isExpanded = projectList.classList.toggle("is-expanded");
    projectToggle.setAttribute("aria-expanded", String(isExpanded));
    projectToggle.textContent = isExpanded ? "Show less" : "View all";
  });
}
