window.onload = function () {
  const ctx = document.getElementById("myBarChart").getContext("2d");

  const data = {
    labels: [
      "Nagpur",
      "Pune",
      "Amravati",
      "Konkan",
      "Nashik",
      "Chhatrapati Sambhajinagar",
    ],
    datasets: [
      {
        label: "Sales",
        data: [300, 400, 200, 500, 700, 600],
        backgroundColor: [
          "#008001",
          "#0000FE",
          "#DECF00",
          "#FE0002",
          "#81007F",
          "#F87219",
        ],
        borderColor: [
          "#008001",
          "#0000FE",
          "#DECF00",
          "#FE0002",
          "#81007F",
          "#F87219",
        ],
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
      delay: (context) => {
        return context.dataIndex * 200;
      },
    },
    scales: {
      x: {
        offset: true,
        ticks: {
          font: {
            size: 11,
            weight: "200",
            color: "black",
          },
        },
        title: {
          display: true,
          text: "Regions",
          font: {
            size: 12,
            weight: "400",
            family: "Arial",
          },
          color: "black",
        },
      },
      y: {
        ticks: {
          stepSize: 100,
          font: {
            size: 9,
            weight: "200",
            color: "#000000",
          },
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Scheme",
          font: {
            size: 12,
            weight: "400",
            family: "Arial",
          },
          color: "black",
        },
      },
    },
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
};


document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = Array.from(gallery.children);
    
    // Clone images to create infinite effect
    images.forEach(img => {
        let clone = img.cloneNode(true);
        gallery.appendChild(clone);
    });
});