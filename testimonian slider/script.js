"use strict";
const firstPerson = document.querySelector(".marnie");
const secondPerson = document.querySelector(".polada");
const Btn = document.querySelector(".left2");
const rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", (e) => {
  firstPerson.classList.add("hide");
  secondPerson.classList.remove("hide");
});

Btn.addEventListener("click", () => {
  firstPerson.classList.remove("hide");
  secondPerson.classList.add("hide");
});
