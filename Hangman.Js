function wordToGuess() {
	const word = document.getElementById("inputWord").value;
	if (word.match("[a-z]")) {
		document.getElementById("sendWord").disabled = true;
		wordToGuessOnLetters(word);
	}
	
}

function wordToGuessOnLetters(word) {
	for (let i = 0; i < word.length; ++i) {
	  	let button = document.createElement("button");
		document.body.appendChild(button);
		button.setAttribute("id", i);
		button.innerHTML = "_";

	}
}

function generateLettersButtons() {
	document.getElementById("alphabetButtons").disabled = true;
	for (let i = 97; i <= 122; ++i) {
	  	let button = document.createElement("button");
		button.setAttribute("id", i);
		document.body.appendChild(button);
		button.innerHTML = String.fromCharCode(i);
	}
	clickLetterButton();
}

function clickLetterButton() {
	const word = document.getElementById("inputWord").value;
	for (let i = 97; i <= 122; ++i) {
		document.getElementById(i).onclick = function () {
			document.getElementById(i).disabled = true;
			let letterPosition = 0;
			let startPosition = 0;
			while(letterPosition !== -1 && startPosition < word.length) {
				letterPosition = word.indexOf(String.fromCharCode(i), startPosition);
				let letter = document.getElementById(letterPosition);
				letter.innerHTML = String.fromCharCode(i);
				startPosition = letterPosition + 1;
			}
		};
	}
}
