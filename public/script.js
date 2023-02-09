let card = document.querySelector(".flip-card");
let flip_card = document.querySelector(".flip-card-inner");

card.addEventListener("click", () => {
  flip_card.classList.toggle("flip");
});
