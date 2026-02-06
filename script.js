const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Enikk ariyaa nee yes paryuenn... No aanel ninne njn ondalloooo😡";
  document.querySelector(".buttons").style.display = "none";
});
