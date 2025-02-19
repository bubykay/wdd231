const skils = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Mobile Development",
  "Quality Assurance",
  "QA Automation",
];

function updateText() {
  const randomIndex = Math.floor(Math.random() * skils.length);
  document.querySelector(".dynamic-text").textContent = skils[randomIndex];
}

setInterval(updateText, 2000);
