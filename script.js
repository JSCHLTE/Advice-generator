const adviceNumberAppend = document.getElementById("adviceNumber");
const adviceTextAppend = document.getElementById("adviceText");
const dice = document.getElementById("diceImg");
const URL = "https://api.adviceslip.com/advice";

dice.addEventListener("click", doThings);

async function doThings() {
	try {
		const response = await fetch(URL);
		if (response.ok) {
			const user = await response.json();
			adviceNumberAppend.innerText = `Advice #${user.slip.id}`;
			adviceTextAppend.innerText = `"${user.slip.advice}"`;
		} else {
			alert("API fetch failed.");
		}
	} catch (e) {
		console.error(e);
	}
}

doThings();
