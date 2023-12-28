"use strict";

const snowFlake = document.querySelectorAll(".snow-ball");
const sky = document.querySelector("body");

let snowFlakeCounter = 0;

const randomY = () => {
  return Math.floor(Math.random() * 101);
}


const createSnowFlakes = () => {
  const Y = randomY();
  const snow = document.createElement("i");
  snow.classList.value = "fa-regular fa-snowflake snow-ball";
  snow.style.left = `${Y}%`;
  snow.style.top = `-${Y + 20}%`;
  snow.style.animation = `${Y <= 50 ? "fallingRight" : "fallingLeft"} ${Math.floor(Math.random() * 3000) + 1200}ms linear infinite`;
  snowFlakeCounter++;
  sky.appendChild(snow);
}

const makingSnow = setInterval(() => {
  if (snowFlakeCounter > 70) {
    clearInterval(makingSnow);
  }
  console.log("ss");
  createSnowFlakes();
}, 1000);