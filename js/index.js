const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!');

import {doughNuts} from "/js/doughNuts.js";

const containerStuff = document.querySelector(".container");

const doughNutThing = new doughNuts();

function moreDoughNuts() {
  doughNutThing.click();
  setInterval(updateValues(doughNutThing),1000);
}

const doughNutBtn = document.querySelector(".doughNutButton");
doughNutBtn.addEventListener("click",()=>{
  doughNutThing.click();
  updateValues(doughNutThing);
});

const autoClickerBtn = document.querySelector(".buyClicker");
autoClickerBtn.innerText = "Auto Clicker Price: " + doughNutThing.price.toFixed(2);
autoClickerBtn.addEventListener("click",()=>{
  if(doughNutThing.dCount >= doughNutThing.price){
    doughNutThing.dCount -= doughNutThing.price;
    doughNutThing.priceChange();
    setInterval(moreDoughNuts, 1000);
  }
  updateValues(doughNutThing);
});

const clickMultEl = document.querySelector(".buyMultiplier");
clickMultEl.innerText = "Multiplier Price: " + doughNutThing.multiplierPrice.toFixed(2);
clickMultEl.addEventListener("click", ()=>{
    if(doughNutThing.dCount >= doughNutThing.multiplierPrice) {
    doughNutThing.clickMultiplier();
    clickMultEl.innerText = "Price: " + doughNutThing.multiplierPrice.toFixed(2);
    }
    updateValues(doughNutThing);
  })

const updateValues = function(doughNutThing){
  dCountEl.innerText = "Doughnuts: " + doughNutThing.dCount.toFixed(2);
  autoClickerBtn.innerText = "Auto ClickerPrice: " + doughNutThing.price.toFixed(2);
  clickMultEl.innerText = "Multiplier Price: " + doughNutThing.multiplierPrice.toFixed(2);
  clickMultDisplay.innerText = "Click Worth: " + doughNutThing.clickWorth.toFixed(2);

}

let dCountEl = document.createElement("p");
  dCountEl.innerText = "Doughnuts: " + doughNutThing.dCount.toFixed(2);
  containerStuff.appendChild(dCountEl);

let clickMultDisplay = document.createElement("p");
clickMultDisplay.innerText = "Click Worth: " + doughNutThing.clickWorth.toFixed(2);
containerStuff.appendChild(clickMultDisplay);

  


