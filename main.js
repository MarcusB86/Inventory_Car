const removeButtons = document.querySelectorAll('.supply__remove-button');

removeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        
        const sneakerContainer = btn.parentElement.parentElement;

        sneakerContainer.remove();
    });
});

const availabilityButtons = document.querySelectorAll('.supply__availability-button');

availabilityButtons.forEach(function(button) {
    button.addEventListener('click', function() {
       
        const availabilityAmount = button.nextElementSibling;

        
        if (availabilityAmount.textContent === "0") {
           
            availabilityAmount.textContent = "1";
            button.textContent = "Available";
        } else {
            
            availabilityAmount.textContent = "0"; 
            button.textContent = "Out of Stock";
        }
    });
});


