import milkBottle from "./assets/milk-bottle-svg.svg";

//exports a function used to create elements in home page
export default function () {
  const content = document.querySelector("#content");
  let menu = document.createElement("div");
  //create dom elements
  const header = document.createElement("h2");
  const grid = document.createElement("div");
  const originalMilk = document.createElement("div");
  const midnightMilk = document.createElement("div");
  const chocolateMilk = document.createElement("div");
  const strawberryMilk = document.createElement("div");
  const bananaMilk = document.createElement("div");
  const coffeeMilk = document.createElement("div");
  const milkSixPack = document.createElement("div");
  const milkTwelvePack = document.createElement("div");
  const chocolateChipCookie = document.createElement("div");
  const cookieSixPack = document.createElement("div");
  const originalMilkText = document.createElement("p");
  const midnightMilkText = document.createElement("p");
  const chocolateMilkText = document.createElement("p");
  const strawberryMilkText = document.createElement("p");
  const bananaMilkText = document.createElement("p");
  const coffeeMilkText = document.createElement("p");
  const milkSixPackText = document.createElement("p");
  const milkTwelvePackText = document.createElement("p");
  const chocolateChipCookieText = document.createElement("p");
  const cookieSixPackText = document.createElement("p");
  const originalMilkImage = document.createElement("img");
  const midnightMilkImage = document.createElement("img");
  const chocolateMilkImage = document.createElement("img");
  const strawberryMilkImage = document.createElement("img");
  const bananaMilkImage = document.createElement("img");
  const coffeeMilkImage = document.createElement("img");
  const milkSixPackImage = document.createElement("img");
  const milkTwelvePackImage = document.createElement("img");
  const chocolateChipCookieImage = document.createElement("img");
  const cookieSixPackImage = document.createElement("img");
  //add classes/id to elements
  menu.classList.add("menu");
  //add content to elements
  header.innerHTML = "Menu";
  originalMilkText.innerHTML = "Original Milk";
  midnightMilkText.innerHTML = "Midnight Milk";
  chocolateMilkText.innerHTML = "Chocolate Milk";
  strawberryMilkText.innerHTML = "Strawberry Milk";
  bananaMilkText.innerHTML = "Banana Milk";
  coffeeMilkText.innerHTML = "Coffee Milk";
  milkSixPackText.innerHTML = "6-pack of Milk (any flavor)";
  milkTwelvePackText.innerHTML = "12-pack of Milk (any flavor)";
  chocolateChipCookieText.innerHTML = "Chocolate Chip Cookie";
  cookieSixPackText.innerHTML = "6-pack of Chocolate Chip Cookies";
  originalMilkImage.src = milkBottle;
  midnightMilkImage.src = milkBottle;
  chocolateMilkImage.src = milkBottle;
  strawberryMilkImage.src = milkBottle;
  bananaMilkImage.src = milkBottle;
  coffeeMilkImage.src = milkBottle;
  milkSixPackImage.src = milkBottle;
  milkTwelvePackImage.src = milkBottle;
  chocolateChipCookieImage.src = milkBottle;
  cookieSixPackImage.src = milkBottle;
  //add elements to page
  originalMilk.append(originalMilkImage, originalMilkText);
  midnightMilk.append(midnightMilkImage, midnightMilkText);
  chocolateMilk.append(chocolateMilkImage, chocolateMilkText);
  strawberryMilk.append(strawberryMilkImage, strawberryMilkText);
  bananaMilk.append(bananaMilkImage, bananaMilkText);
  coffeeMilk.append(coffeeMilkImage, coffeeMilkText);
  milkSixPack.append(milkSixPackImage, milkSixPackText);
  milkTwelvePack.append(milkTwelvePackImage, milkTwelvePackText);
  chocolateChipCookie.append(chocolateChipCookieImage, chocolateChipCookieText);
  cookieSixPack.append(cookieSixPackImage, cookieSixPackText);
  grid.append(
    originalMilk,
    midnightMilk,
    chocolateMilk,
    strawberryMilk,
    bananaMilk,
    coffeeMilk,
    milkSixPack,
    milkTwelvePack,
    chocolateChipCookie,
    cookieSixPack
  );
  menu.append(header, grid);
  content.appendChild(menu);
}
