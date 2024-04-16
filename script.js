"use strict";

// DOM ELEMENTS
const balanceEl = document.querySelector(".balance-container");
const chartEl = document.querySelector(".chart-container");
const ctx = document.getElementById("myChart");
const date = new Date();

// CHART JS API
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tus", "wed", "thus", "fri", "sat", "sun"],
    datasets: [
      {
        label: "$",
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        borderWidth: 1,
        backgroundColor: (color) => {
          let colors =
            color.index === date.getDay() - 1
              ? "rgba(118, 181, 188, 1)"
              : "rgba(236, 119, 95, 1)";
          return colors;
        },
        borderRadius: 5,
        borderSkipped: false,
        hoverBackgroundColor: (color) => {
          //   const bg = color.element.options.backgroundColor;
          let colors =
            color.index === date.getDay() - 1
              ? "rgba(118, 181, 188, 0.7)"
              : "rgba(236, 119, 95, 0.7)";
          return colors;
        },
      },
    ],
  },
  options: {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 5,
        suggestedMax: 70,
        display: false,
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
      x: {
        grid: { color: "rgba(0, 0, 0, 0)" },
        border: {
          display: false,
        },
      },
    },
  },
});

// LOADING EFFECT
const revealElement = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");

  if (entry.target && entry.target instanceof Element) {
    observer.unobserve(entry.target);
  } else {
    console.error("Invalid entry target for observer");
  }
};

const balObserver = new IntersectionObserver(revealElement, {
  root: null,
  threshold: 1.0,
});

const chartObserver = new IntersectionObserver(revealElement, {
  root: null,
  threshold: 1.0,
});

balObserver.observe(balanceEl);
// chartObserver.observe(chartEl);
// setTimeout(() => chartObserver.observe(chartEl), 300);
