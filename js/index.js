
import { doughNuts } from "/js/doughNuts.js";

const containerStuff = document.querySelector(".container");

const doughNutThing = new doughNuts();

let moreStuff = false;

function moreDoughNuts() {
  doughNutThing.click();
  setInterval(updateValues(doughNutThing), 1000);
}

function showContent() {
  showHiddenInfo.classList.toggle("hidden");
  if (moreStuff) {
    moreStuff = true;
  }
}

function showContent2() {
  showHiddenInfo2.classList.toggle("hidden");
  if (moreStuff) {
    moreStuff = true;
  }
}

function showContent3() {
  showHiddenInfo3.classList.toggle("hidden");
  if (moreStuff) {
    moreStuff = true;
  }
}

const collapsibleEl = document.querySelector(".collapsible")
const collapsibleEl2 = document.querySelector(".collapsible2")
const collapsibleEl3 = document.querySelector(".collapsible3")

const showHiddenInfo = document.querySelector(".content")
const showHiddenInfo2 = document.querySelector(".content2")
const showHiddenInfo3 = document.querySelector(".content3")
showHiddenInfo.classList.add("hidden");
showHiddenInfo2.classList.add("hidden");
showHiddenInfo3.classList.add("hidden");
collapsibleEl.addEventListener("click", () => {
  showContent();
})

collapsibleEl2.addEventListener("click", () => {
  showContent2();
})

collapsibleEl3.addEventListener("click", () => {
  showContent3();
})

const doughNutBtn = document.querySelector(".doughNutButton");
doughNutBtn.addEventListener("click", () => {
  doughNutThing.click();
  updateValues(doughNutThing);
});

const autoClickerBtn = document.querySelector(".buyClicker");
autoClickerBtn.innerText = "Auto Clicker Price: " + doughNutThing.price.toFixed(2);
autoClickerBtn.addEventListener("click", () => {
  if (doughNutThing.dCount >= doughNutThing.price) {
    doughNutThing.dCount -= doughNutThing.price;
    doughNutThing.priceChange();
    setInterval(moreDoughNuts, 1000);
  }
  updateValues(doughNutThing);
});

const clickMultEl = document.querySelector(".buyMultiplier");
clickMultEl.innerText = "Multiplier Price: " + doughNutThing.multiplierPrice.toFixed(2);
clickMultEl.addEventListener("click", () => {
  if (doughNutThing.dCount >= doughNutThing.multiplierPrice) {
    doughNutThing.clickMultiplier();
    clickMultEl.innerText = "Price: " + doughNutThing.multiplierPrice.toFixed(2);
  }
  updateValues(doughNutThing);
})

const updateValues = function (doughNutThing) {
  dCountEl.innerText = "Doughnuts: " + doughNutThing.dCount.toFixed(2);
  autoClickerBtn.innerText = "Auto Clicker Price: " + doughNutThing.price.toFixed(2);
  clickMultEl.innerText = "Multiplier Price: " + doughNutThing.multiplierPrice.toFixed(2);
  clickMultDisplay.innerText = "Click Worth: " + doughNutThing.clickWorth.toFixed(2);

}

let gameEl = document.querySelector(".game");

let dCountEl = document.createElement("p");
dCountEl.innerText = "Doughnuts: " + doughNutThing.dCount.toFixed(2);
doughNutBtn.appendChild(dCountEl);

let clickMultDisplay = document.createElement("p");
clickMultDisplay.innerText = "Click Worth: " + doughNutThing.clickWorth.toFixed(2);
doughNutBtn.appendChild(clickMultDisplay);
