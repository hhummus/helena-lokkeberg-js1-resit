async function fetchjokes() {
	// fetching api
	let response = await fetch('https://official-joke-api.appspot.com/random_joke');
	let jokes = await response.json();

	// getting the div for setup and punchline
	let setupDiv = document.querySelector('.setup');
	let punchlineDiv = document.querySelector('.punchline');
	let headerElement = document.querySelector('h2');
	let titleHead = document.querySelector('title');

	// fetching the setup, punchlines & type
	let setup = jokes.setup;
	let punchline = jokes.punchline;
	let type = jokes.type;

	//placing them in their corresponding div
	setupDiv.innerText = `${setup}`;
	punchlineDiv.innerText = `${punchline}`;
	headerElement.innerText = `${type} Joke`;

	//changing title metatag to setup property
	titleHead.innerText = `${setup}`;
}

fetchjokes();
