import shop from "./assets/midnight-milk-shop.jpg";
import cow from "./assets/midnight-milk-cow.jpg";
//exports a function used to create elements in home page
export default function () {
  const content = document.querySelector("#content");
  let about = document.createElement("div");
  //create dom elements
  const header = document.createElement("h2");
  const messageDiv = document.createElement("div");
  const openingP = document.createElement("p");
  const subheader1 = document.createElement("h3");
  const secondP = document.createElement("p");
  const subheader2 = document.createElement("h3");
  const thirdP = document.createElement("p");
  const subheader3 = document.createElement("h3");
  const fourthP = document.createElement("p");
  const subheader4 = document.createElement("h3");
  const fifthP = document.createElement("p");
  const subheader5 = document.createElement("h3");
  const sixthP = document.createElement("p");
  const shopImage = document.createElement("img");
  const block1 = document.createElement("div");
  const cowImage = document.createElement("img");
  //add class/id to dom elements
  about.classList.add("about");
  block1.classList.add("about-block");
  //add content to dom elements
  header.innerHTML = "About Us";
  subheader1.innerHTML = "Our Story";
  subheader2.innerHTML = "Our Mission";
  //   subheader3.innerHTML = "Our Offerings";
  subheader4.innerHTML = "Why Late Night?";
  subheader5.innerHTML = "Join Us";
  openingP.innerHTML =
    "Welcome to Midnight Milk, where the night comes alive with the rich, creamy goodness of our premium milk! Nestled in the heart of the city, we are your go-to destination for a unique, late-night treat that’s as comforting as it is delicious.";
  secondP.innerHTML =
    "The concept of Midnight Milk was born from a simple yet profound idea: to provide a delightful and nourishing experience during the quietest hours of the night. Whether you're burning the midnight oil, winding down after a night out, or simply craving a nostalgic taste of home, Midnight Milk is here to serve you.";
  thirdP.innerHTML =
    "The concept of Midnight Milk was born from a simple yet profound idea: to provide a delightful and nourishing experience during the quietest hours of the night. Whether you're burning the midnight oil, winding down after a night out, or simply craving a nostalgic taste of home, Midnight Milk is here to serve you.";
  //   fourthP.innerHTML =
  //     "Our menu is crafted to provide a diverse range of options that suit every mood. Whether you’re in the mood for something classic or adventurous, we’ve got you covered:Pure & Simple: Enjoy the timeless taste of whole, skim, or lactose-free milk.Flavored Favorites: Delight in our house-made flavored milks, including chocolate, strawberry, and vanilla.Specialty Drinks: Indulge in our unique concoctions, such as spiced chai milk, matcha milk, and seasonal limited editions.Snacks & Pairings: Complement your drink with our selection of freshly baked cookies, pastries, and light snacks.";
  fifthP.innerHTML =
    "There’s something special about the quiet hours of the night – a time for reflection, relaxation, and indulgence. Midnight Milk was created to cater to those who appreciate the beauty of nighttime and the joy of a late-night treat. We open our doors when others close theirs, providing a haven for night owls, students, workers, and anyone seeking a comforting escape.";
  sixthP.innerHTML =
    "Step into Midnight Milk and experience the warmth and tranquility of our late-night haven. Whether you’re picking up a bottle to go or staying awhile in our cozy seating area, we promise a memorable and satisfying visit. Come see why Midnight Milk is the perfect blend of tradition and innovation, all served with a dash of nighttime charm. Midnight Milk because great things happen after dark.";
  shopImage.src = shop;
  cowImage.src = cow;
  //add dom elements to page
  block1.append(
    shopImage,
    openingP,
    subheader1,
    secondP,
    subheader2,
    thirdP,
    cowImage,
    subheader4,
    fifthP,
    subheader5,
    sixthP
  );
  messageDiv.append(block1);
  about.append(header, messageDiv);

  content.appendChild(about);
}
