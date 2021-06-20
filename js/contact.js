//get references for form elements
const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const subject = document.getElementById('subject');
const subjectError = document.getElementById('subjectError');
const message = document.getElementById('message');
const messageError = document.getElementById('messageError');
const btnsubmit = document.getElementById('submit');

// event listener on form upon submitting
form.addEventListener('submit', (e) => {
	// running a function when clicking submit on form
	checkInputs();

	// preventing form from sending if any errors are present
	if (
		firstNameError.innerHTML.length ||
		lastNameError.innerHTML.length ||
		emailError.innerHTML.length ||
		subjectError.innerHTML.length ||
		messageError.innerHTML.length > 5
	) {
		e.preventDefault();
	}
});

// function that checks if input is correct
function checkInputs() {
	let regex = /^\S+@\S+\.\S+$/;

	if (firstName.value === '' || firstName.value === null) {
		firstNameError.classList.add('form-error');
        firstNameError.innerHTML = 'Please enter your name';
	} else {
		firstNameError.innerHTML = '';
	}

	if (lastName.value < 3) {
		lastNameError.classList.add('form-error');
		lastNameError.innerHTML = 'Please enter your last name';
	} else {
		lastNameError.innerHTML = '';
	}

	if (!email === regex || email.value === '') {
		emailError.classList.add('form-error');
		emailError.innerHTML = 'Please add a valid email';
	} else {
		emailError.innerHTML = '';
	}

	if (subject.value.length < 7) {
		subjectError.classList.add('form-error');
		subjectError.innerHTML = 'Subject must be minimum 7 characters long';
	} else {
		subjectError.innerHTML = '';
	}

	if (message.value.length < 15) {
		messageError.classList.add('form-error');
		messageError.innerHTML = 'Message must be minimum 15 characters long';
	} else {
		messageError.innerHTML = '';
	}
}
