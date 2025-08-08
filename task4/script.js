
let cards = document.querySelectorAll(".card");
let index = 0;
setInterval(() => {
  cards.forEach((card) => card.classList.remove("active"));
  index = (index + 1) % cards.length;
  cards[index].classList.add("active");
}, 3000);


function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}
function openSignup() {
  document.getElementById("signupModal").style.display = "block";
}
function closeSignup() {
  document.getElementById("signupModal").style.display = "none";
}
function switchToLogin() {
  closeSignup();
  openLogin();
}
