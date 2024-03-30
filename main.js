const form = document.getElementById('addSneakerForm');
const inventory = document.getElementById('sneakerInventory');
const resetButton = document.getElementById('clear');

// function to check availability
function ifAvailable(button) {
    button.textContent = button.textContent === 'Available' ? 'Not Available' : 'Available';
}

// function for availability button
function availabilityClick(event) {
    const button = event.target;
    ifAvailable(button);
}

// function for remove button 
function removeButtonClick(event) {
    const sneakerElement = event.target.closest('.supply__sneaker');
    if (sneakerElement) {
        sneakerElement.remove();
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // get form values
    const name =event.target.name.value;
    const brand =event.target.brand.value;
    const url =event.target.url.value;
    const price =event.target.price.value;
    const inStock =event.target.inStock.value;
    const amount =event.target.amount.value;

    // checkfor at least three fields are filled
    let filledField = 0;
    if (name !== '') filledField++;
    if (brand !== '') filledField++;
    if (url !== '') filledField++;
    if (price !== '') filledField++;
    if (inStock !== '') filledField++;
    if (amount !== '') filledField++;

    //  display error message if less than 3
    if (filledField < 3) {
        alert('Please fill in at least three of the fields.');
        return;
    }

    //new sneaker element
    const sneakerElement = document.createElement('div');
    sneakerElement.classList.add('supply__sneaker');
    sneakerElement.innerHTML = `
        <img class="supply__sneaker-image" src="${url}" alt="${name}">
        <div>
            <h2 class="supply__sneaker-name">${name}</h2>
            <hr>
            <h3 class="supply__sneaker-brand">${brand}</h3>
            <span class="supply__sneaker-price">${price}</span>
            <br>
            <button class="supply__availability-button">${inStock === '1' ? 'Available' : 'Not Available'}</button>
            <button class="supply__availability-amount">${amount}</button>
            <br>
            <button class="supply__remove-button">Remove</button>
        </div>
    `;

    //listener for availability button
    const availabilityButton = sneakerElement.querySelector('.supply__availability-button');
    availabilityButton.addEventListener('click', availabilityClick);

    // event listener for remove button
    const removeButton = sneakerElement.querySelector('.supply__remove-button');
    removeButton.addEventListener('click', removeButtonClick);

    // add new sneaker to the top inventory
    inventory.prepend(sneakerElement);

    // reset form
    form.reset();
});

//event listeners for all availability buttons
const availabilityButtons = document.querySelectorAll('.supply__availability-button');
availabilityButtons.forEach(button => {
    button.addEventListener('click', availabilityClick);
});

// event listeners all for remove buttons
const removeButtons = document.querySelectorAll('.supply__remove-button');
removeButtons.forEach(button => {
    button.addEventListener('click', removeButtonClick);
});

// event listener for the reset button
resetButton.addEventListener('click', function() {
    form.reset();
});