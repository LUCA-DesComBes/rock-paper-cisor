const paper = document.getElementById("paper");
const main = document.getElementById("main");
let count = 0;

let section;
let div_first;
let div_first_circle;

function changeMain() {
	section = document.createElement("section");

    div_first = document.createElement("div");

    div_first_circle = document.createElement("div");

    div_first_circle.setAttribute("style", "")

    div_first.setAttribute("style", "display: flex; flex-direction: column; gap: 17px;")

	section.setAttribute(
		"style",
		"display: flex; flex-direction: row; justify-content: space-beetween;"
	);
	main.appendChild(section);
    section.appendChild(div_first);
	console.log("gvhjop");
}
paper.addEventListener("click", changeMain);
