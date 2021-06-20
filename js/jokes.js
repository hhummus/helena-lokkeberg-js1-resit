async function getfivejokes() {
	//fetching the api
	let response = await fetch('https://official-joke-api.appspot.com/random_ten');
	let results = await response.json();
	console.log(results);
	//for loop to catch the first 5 jokes
	for (let i = 0; results.length; i++) {
		if (i === 5) {
			break;
		}

		const titleHead = document.querySelector('title');
		const rowResults = document.querySelector('.row');

		// third setup in title tag
		titleHead.innerHTML = `${results[2].setup}`;

		//placing each in their own card
		rowResults.innerHTML += `
								<div class="col-sm-6 col-md-4 col-lg-3">
								<div class="card">
									<div class="joke-detail">
										<h4 class="type">${results[i].type}</h4>
										<div class="setup">${results[i].setup}</div>
										<div class="punchline">${results[i].punchline}</div>
									</div>
								</div>
								</div>
									`;
	}
}

getfivejokes();
