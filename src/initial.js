import hero from "./assets/milk-bottle-hero.jpg";
import badge from "./assets/badge.png";
import computer from "./assets/3d-computer.png";
import deliveryBike from "./assets/delivery-bike.png";
//exports a function used to create elements in home page
export default function () {
  const content = document.querySelector("#content");
  const homepage = document.createElement("div");
  //declare new items
  const startBlock = document.createElement("div");
  const smallHeader = document.createElement("h2");
  const heroImage = document.createElement("img");
  const middleBlock = document.createElement("div");
  const infoCard1 = document.createElement("div");
  const infoCard2 = document.createElement("div");
  const infoCard3 = document.createElement("div");
  const infoCard1text = document.createElement("p");
  const infoCard2text = document.createElement("p");
  const infoCard3text = document.createElement("p");
  const infoCard1Image = document.createElement("img");
  const infoCard2Image = document.createElement("img");
  const infoCard3Image = document.createElement("img");
  const testimonies = document.createElement("div");
  const testimony1 = document.createElement("div");
  const testimony2 = document.createElement("div");
  const testimony1text = document.createElement("p");
  const testimony2text = document.createElement("p");
  const testimony1author = document.createElement("p");
  const testimony2author = document.createElement("p");
  //add classes/id
  startBlock.classList.add("block");
  middleBlock.classList.add("block");
  testimonies.classList.add("block");
  //add content
  heroImage.src = hero;
  smallHeader.innerHTML =
    "Your one stop shop for all your late night milk cravings . . .";
  infoCard1Image.src = badge;
  infoCard2Image.src = computer;
  infoCard3Image.src = deliveryBike;
  testimony1text.innerHTML = `"Nothing I had ever drunk had ever tasted like that before: rich and warm and perfectly happy in my mouth. I remembered that milk after I had forgotten about everything else."`;
  testimony2text.innerHTML = `“And chances are if he asks you for a glass of milk, he's going to want a cookie to go with it.”`;
  testimony1author.innerHTML =
    "- The Ocean at the End of the Lane, Neil Gaiman";
  testimony2author.innerHTML =
    "- If You Give a Mouse a Cookie, Laura Joffe Numeroff";
  //add elements to content div
  startBlock.append(smallHeader, heroImage);
  infoCard1text.innerHTML = "Award winning flavor and guaranteed freshness.";
  infoCard2text.innerHTML = "Order in person or online.";
  infoCard3text.innerHTML = "We deliver wherever you are.";
  infoCard1.append(infoCard1Image, infoCard1text);
  infoCard2.append(infoCard2Image, infoCard2text);
  infoCard3.append(infoCard3Image, infoCard3text);
  middleBlock.append(infoCard1, infoCard2, infoCard3);
  testimony1.append(testimony1text, testimony1author);
  testimony2.append(testimony2text, testimony2author);
  testimonies.append(testimony1, testimony2);
  homepage.append(startBlock, middleBlock, testimonies);
  // add content div to page
  content.appendChild(homepage);
}
