document.addEventListener("DOMContentLoaded", () => {
  fetch("calendar-data.json")
    .then((res) => res.json())
    .then((data) => {
      const calendar = document.getElementById("calendar");

      data.forEach((monthData) => {
        const card = document.createElement("div");
        card.className = "month-card";

        const header = document.createElement("div");
        header.className = "month-header";
        header.textContent = monthData.month;

        const content = document.createElement("div");
        content.className = "month-content";

        const vula = document.createElement("div");
        vula.className = "vula-title";
        vula.textContent = `${monthData.vulaVakaViti}`;

        const interp = document.createElement("p");
        interp.textContent = monthData.interpretation;

        const phases = document.createElement("div");
        for (const [phase, date] of Object.entries(monthData.lunarPhases)) {
          const p = document.createElement("div");
          p.className = "lunar-phase";
          p.textContent = `${phase}: ${date}`;
          phases.appendChild(p);
        }

        content.appendChild(vula);
        content.appendChild(phases);
        content.appendChild(interp);

        card.appendChild(header);
        card.appendChild(content);
        calendar.appendChild(card);

        header.addEventListener("click", () => {
          card.classList.toggle("active");
        });
      });
    });
});
