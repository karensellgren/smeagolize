// JavaScript for Gauge & Mobile Menu 
document.addEventListener('DOMContentLoaded', function () {
    const score = 3; // Example: Set your sentiment score here (1 to 5)
    const maxScore = 5;

    const fill = document.querySelector('.gauge-fill');
    const needle = document.querySelector('.gauge-needle');

    // Calculate rotation angles
    const fillAngle = (score / maxScore) * 180; // Degrees for the fill
    const needleAngle = (score / maxScore) * 180 - 90; // Degrees for the needle

    // Apply transformations
    fill.style.transform = `rotate(${fillAngle}deg)`;
    needle.style.transform = `translateX(-3px) rotate(${needleAngle}deg)`;
});

//Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

//Chart 
const ctx = document.getElementById("sentimentChart").getContext("2d");

new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [{
            data: [600, 250, 150],
            backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
            borderWidth: 1,
        }]
    },
    options: {
        cutout: "60%",
        responsive: true,
        aspectRatio: 1,
        plugins: {
            legend: { display: false }
        }
    }
});

//Chart Timeline
const chartCtx = document.getElementById('sentimentTimelineChart').getContext('2d');

const sentimentData = {
    labels: ["11PM", "12PM", "1AM", "2AM"],
    datasets: [
        {
            label: "Positive",
            data: [140, 160, 180, 120],
            backgroundColor: "green",
            borderRadius: 10
        },
        {
            label: "Neutral",
            data: [80, 120, 30, 20],
            backgroundColor: "orange",
            borderRadius: 10
        },
        {
            label: "Negative",
            data: [20, 80, 30, 20],
            backgroundColor: "red",
            borderRadius: 10
        }
    ]
};

const sentimentChart = new Chart(chartCtx, {
    type: "bar",
    data: sentimentData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    font: { size: 14 },
                    color: "black"
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: { color: "black", font: { size: 14 } }
            },
            y: {
                stacked: true,
                ticks: { color: "black", font: { size: 14 } }
            }
        }
    }
});

