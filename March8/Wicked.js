let wrongAnswer1 = document.querySelector(".wrongAnswer1");
let wrongAnswer2 = document.querySelector(".wrongAnswer2");
let wrongAnswer3 = document.querySelector(".wrongAnswer3");
let wrongAnswer4 = document.querySelector(".wrongAnswer4");
let wrongAnswer5 = document.querySelector(".wrongAnswer5");
let wrongAnswer6 = document.querySelector(".wrongAnswer6");
let wrongAnswer7 = document.querySelector(".wrongAnswer7");
let wrongAnswer8 = document.querySelector(".wrongAnswer8");
let wrongAnswer9 = document.querySelector(".wrongAnswer9");
let wrongAnswer10 = document.querySelector(".wrongAnswer10");
let wrongAnswer11 = document.querySelector(".wrongAnswer11");
let wrongAnswer12 = document.querySelector(".wrongAnswer12");
let wrongAnswer13 = document.querySelector(".wrongAnswer13");
let wrongAnswer14 = document.querySelector(".wrongAnswer14");
let wrongAnswer15 = document.querySelector(".wrongAnswer15");
let wrongAnswer16 = document.querySelector(".wrongAnswer16");
let wrongAnswer17 = document.querySelector(".wrongAnswer17");
let wrongAnswer18 = document.querySelector(".wrongAnswer18");
let wrongAnswer19 = document.querySelector(".wrongAnswer19");
let wrongAnswer20 = document.querySelector(".wrongAnswer20");
let wrongAnswer21 = document.querySelector(".wrongAnswer21");
let wrongAnswer22 = document.querySelector(".wrongAnswer22");
let wrongAnswer23 = document.querySelector(".wrongAnswer23");
let wrongAnswer24 = document.querySelector(".wrongAnswer24");
let wrongAnswer25 = document.querySelector(".wrongAnswer25");
let wrongAnswer26 = document.querySelector(".wrongAnswer26");
let wrongAnswer27 = document.querySelector(".wrongAnswer27");
let wrongAnswer28 = document.querySelector(".wrongAnswer28");
let wrongAnswer29 = document.querySelector(".wrongAnswer29");
let wrongAnswer30 = document.querySelector(".wrongAnswer30");

let bt = document.getElementById("bt-sc");
let poster = document.getElementById("poster");
let h1 = document.getElementById("h1");

let correctAnswer = document.querySelector("#correctAnswer");
let correctAnswer1 = document.querySelector("#correctAnswer1");
let correctAnswer2 = document.querySelector("#correctAnswer2");
let correctAnswer3 = document.querySelector("#correctAnswer3");
let correctAnswer4 = document.querySelector("#correctAnswer4");
let correctAnswer5 = document.querySelector("#correctAnswer5");
let correctAnswer6 = document.querySelector("#correctAnswer6");
let correctAnswer7 = document.querySelector("#correctAnswer7");
let correctAnswer8 = document.querySelector("#correctAnswer8");
let correctAnswer9 = document.querySelector("#correctAnswer9");

let score = 0;

wrongAnswer2.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer3.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});

correctAnswer.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});
wrongAnswer5.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer6.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer7.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});

correctAnswer1.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});
wrongAnswer9.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer10.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});

wrongAnswer12.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
correctAnswer2.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});
wrongAnswer13.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer14.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});

wrongAnswer16.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
correctAnswer3.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});
wrongAnswer17.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});

wrongAnswer19.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer20.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
correctAnswer4.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});

wrongAnswer22.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});
wrongAnswer23.addEventListener("click", () => {
  console.log("bad");
  score--;
  console.log(score);
});

correctAnswer5.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});

correctAnswer6.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});

correctAnswer7.addEventListener("click", () => {
  console.log("good");
  score++;
  console.log(score);
});

bt.addEventListener("click", () => {
  document.getElementById("finalScore").innerHTML =
    "Your score is " + score + "pt.";
  poster.classList.toggle("posterV");

  h1.classList.toggle("h1V");
});
