// index.js

function addingEventListener() {
  const button = document.getElementById("button");
  const main = document.getElementById("main");

  button.addEventListener("click", function () {
    main.textContent = "Button was clicked!";
  });
}

addingEventListener();
