const scrollUp = document.querySelector("#scroll-up");

const checkbox = document.querySelector("#checkbox");

function story() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let inform = prompt("What story would you love to share?");
  let emoji = prompt("What is your favorite emoji?");


  alert(
    "Thank you, " +
      name +
      "! We'll be in touch by email, keep calm and be limitless " +
      emoji
  );
}

function report() {
  let name = prompt("What is your name?");
  let mail = prompt("What is your email address?");
  let report = prompt("What case of inequality would you want to report?");
  let emoji = prompt("What is your favorite emoji?");

  alert(
    "Thank you, " +
      name +
      "! We'll be in touch by email, keep calm and be limitless " +
      emoji
  );
}



let storyButton = document.querySelector(".story-button");
storyButton.addEventListener("click", story);

let reportButton = document.querySelector(".report-button");
reportButton.addEventListener("click", report);


scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});


