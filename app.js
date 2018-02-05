const startButton = document.getElementsByClassName("btn__reset")[0];
const overlay = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const phraseArray = "This is a test";


startButton.addEventListener("click", () => {
	overlay.style.display = "none";
	});

qwerty.addEventListener("click", (e) => {
	if (e.target.tagName === 'BUTTON') {
		e.target.className = "chosen";
	}
	});

const kevy = phraseArray.split("");

for (i = 0; i < kevy.length; i++) {
	let li = document.createElement("li");
	li.innerHTML = kevy[i];
	if (kevy[i] === " ") {
		li.className = "space";
	} else {
		li.className = "letter";
	}
	phrase.firstElementChild.appendChild(li);
}