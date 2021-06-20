const divContainer = document.getElementById('create-divs');
const numberInput = document.getElementById('numberInput');

// remove divs when clicking reset
document.getElementById('reset').addEventListener('click', function() {
    divContainer.innerHTML = '';
    
});


//when clickin the input, find value and add it to the 'my number'
numberInput.addEventListener('click', () =>{

    let numValue = numberInput.value;
    const makeDivs = 'Number ' +  numValue;
    divContainer.innerHTML += `<div>${makeDivs}</div>`
})
