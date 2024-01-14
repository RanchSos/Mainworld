document.addEventListener("DOMContentLoaded", function () {
  createStars(); // Create stars initially
  document.body.classList.add("loaded");

  var spanElements = document.querySelectorAll("h2.custom-font a span");
  var starElements = document.querySelectorAll("#stars-container .star");

  spanElements.forEach(function (span) {
    span.addEventListener("mouseover", function () {
      document.body.classList.add("hover-effect");

      starElements.forEach(function (star) {
        star.classList.add("yeni");
      });
    });

    span.addEventListener("mouseout", function () {
      document.body.classList.remove("hover-effect");

      starElements.forEach(function (star) {
        star.classList.remove("yeni");
      });
    });
  });

  createSnowflakes(0);
});

function createSnowflakes(count) {
  const maxSnowflakes = 25;
  if (count <= maxSnowflakes) {
    createSnowflake();
    setTimeout(function () {
      createSnowflakes(count + 1);
    }, 100);
  }
}

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";

  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 2 + 2;
  const fontSize = Math.random() * 2 + 1.2;

  snowflake.style.left = startX + "px";
  snowflake.style.animationDuration = duration + "s";
  snowflake.style.fontSize = fontSize + "em";

  document.body.appendChild(snowflake);

  snowflake.addEventListener("animationiteration", () => {
    const newY = -snowflake.clientHeight; // Set to a negative value to position above the viewport
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.top = newY + "px";
  });
}

let starsCreated = false;
function createStars() {
  if (!starsCreated) {
    const starsContainer = document.getElementById("stars-container");
    const numStars = 65;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      starsContainer.appendChild(star);

      const topPosition = Math.random() * window.innerHeight;
      const leftPosition = Math.random() * window.innerWidth;

      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
    }
    starsCreated = true;
  }
}
