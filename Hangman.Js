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
		button.style.backgroundColor = "yellow";
		if (word.charAt(i) === word.charAt(0) || word.charAt(i) === word.charAt(word.length - 1)) {
			button.innerHTML = word.charAt(i);
		}
	}
	const newParagraph = document.createElement("P");
	const node = document.createTextNode("Press start game and choose letters");
	newParagraph.appendChild(node);
	document.body.appendChild(newParagraph);
	newParagraph.setAttribute("id", "newParagraph");
}

function generateLettersButtons() {
	const word = document.getElementById("inputWord").value;
	document.getElementById("alphabetButtons").disabled = true;
	for (let i = 97; i <= 122; ++i) {
	  	let button = document.createElement("button");
		button.setAttribute("id", i);
		document.body.appendChild(button);
		button.innerHTML = String.fromCharCode(i);
		button.style.backgroundColor = "#19cf2c";
		let vowels = "aeiou";
		if (vowels.includes(String.fromCharCode(i))) {
			button.style.backgroundColor = "#66a4ad";
		}
		if (String.fromCharCode(i) === word.charAt(0) || String.fromCharCode(i) === word.charAt(word.length - 1)) {
			button.disabled = true;
		}
	}
	clickLetterButton(word);
	gallows();
}

function clickLetterButton(word) {
	let clicksNumber = 1;
	for (let i = 97; i <= 122; ++i) {
		document.getElementById(i).onclick = function () {
			document.getElementById(i).disabled = true;
			let letterPosition, startPosition = 0;
			while((letterPosition = word.indexOf(String.fromCharCode(i), startPosition)) !== -1) {
				let letter = document.getElementById(letterPosition);
				letter.innerHTML = word.charAt(letterPosition);
				startPosition = letterPosition + 1;
			}
			if (word.includes(String.fromCharCode(i)) === false) {
				drawHangman(clicksNumber);
				++clicksNumber;
			}
			let foundLetter = 0;
			for (let i = 0; i < word.length; ++i) {
				let finalMessage = document.getElementById("l1");
				if (document.getElementById(i).innerHTML === word.charAt(i)) {
					++foundLetter;
				}
				if (foundLetter === word.length && finalMessage.innerHTML === "") {
					finalMessage.innerHTML = "You win!";
					let message = document.getElementById("alphabetButtons");
					message.innerHTML = "Game over";
					message.style.backgroundColor = "red";
				}
			}

		};
	}
}

function gallows() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(50, 200);
	ctx.lineTo(150, 200);
	ctx.moveTo(100, 200);
	ctx.lineTo(100, 50);
	ctx.lineTo(150, 50);
	ctx.lineTo(150, 80);
	ctx.stroke();
}

function drawHangman(clickNumber) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	let finalMessage = document.getElementById("l1");
	if (clickNumber === 1) {
		ctx.moveTo(165, 96);
		ctx.arc(150, 96, 16, 0, 2 * Math.PI);
	} else if (clickNumber === 2) {
		ctx.moveTo(150, 112);
		ctx.lineTo(150, 150);
	} else if (clickNumber === 3) {
		ctx.moveTo(150, 125);
		ctx.lineTo(130, 135);
	} else if (clickNumber === 4) {
		ctx.moveTo(150, 125);
		ctx.lineTo(170, 135);
	} else if (clickNumber === 5) {
		ctx.moveTo(150, 150);
		ctx.lineTo(170, 170);
	} else if (clickNumber === 6 && finalMessage.innerHTML === "") {
		ctx.moveTo(150, 150);
		ctx.lineTo(130, 170);
		let message = document.getElementById("alphabetButtons");
		message.innerHTML = "Game over";
		message.style.backgroundColor = "red";
		finalMessage.innerHTML = "You lost!"
	}
	ctx.stroke();
}
