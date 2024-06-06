//exports a function used to create elements in home page
export default function () {
    const content = document.querySelector("#content");
    let menu = document.createElement("div");
    //create dom elements
    const header = document.createElement("h2");
    //add classes/id to elements
    //add content to elements
    header.innerHTML = "Menu"
    //add elements to page
    menu.append(header);
    content.appendChild(menu);
}