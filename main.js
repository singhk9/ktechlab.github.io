// Simple recipe button alert
function viewRecipe(recipeName) {
    alert("You clicked to view: " + recipeName + "\n(This is a placeholder for the full recipe page!)");
}

// Optional: Handle contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
});
