//exports a function used to create elements in home page
export default function () {
    const content = document.querySelector("#content");
    
    let homepage = document.createElement("div");
    homepage.innerHTML = "This is the About page.";

    content.appendChild(homepage);
}