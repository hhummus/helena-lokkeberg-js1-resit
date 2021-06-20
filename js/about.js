// fetch the paragraphs and div
const div = document.getElementById('div');
const getParagraphs = document.getElementsByTagName('p');

text = '';

//reverse the array
for (let i = getParagraphs.length - 1; i >= 0; i--) {
	console.log(getParagraphs[i]);

	// putting my reversed paragraphs in the empty text string
	text += getParagraphs[i] + `<br/>`;
}

//display in HTML
div.innerHTML = text;

// I have tried textContent, innerText, `${getParagraphs[i]}` and more.
// I get the object HTML paragraph Element each time.
// What can I do to display the actual paragraphs, in the consol I can see that they are reversed.
