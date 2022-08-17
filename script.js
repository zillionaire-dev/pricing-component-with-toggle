const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");
const toggleBtn = document.getElementById("checkbox");

toggleBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    monthly.forEach(element => element.style.display = "block");
    annually.forEach(element => element.style.display = "none");
  } else {
    monthly.forEach(element => element.style.display = "none");
    annually.forEach(element => element.style.display = "block");
  }
})