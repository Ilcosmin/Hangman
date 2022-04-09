function wordToGuess() {
	const word = document.getElementById("inputWord").value;
	wordToGuessOnLetters(word);
}

function wordToGuessOnLetters(word) {
	for (let i = 0; i < word.length; ++i) {
	  	let button = document.createElement("button");
		button.setAttribute("id", i);
		document.body.appendChild(button);
		button.innerHTML = "_";
	}
	generateLettersButtons(word);
}

function generateLettersButtons(word) {
	for (let i = 97; i <= 122; ++i) {
	  	let button = document.createElement("button");
		button.innerHTML = String.fromCharCode(i);
		button.setAttribute("id", i);
		document.body.appendChild(button);
	}
}
