// --- Recipe Data Array ---
// This contains the details for the featured recipes shown on the home page.
const defaultRecipes = [
    {
        id: 1,
        title: "Cold Watermelon Crush",
        category: "fruit",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Fresh-Watermelon-Juice-Recipe-500x375.jpg",
        ingredients: ["Watermelon", "Lime", "Mint", "Pinch of Black Salt"],
        instructions: "Blend fresh watermelon cubes until smooth. Strain for a clear juice. Stir in lime juice and black salt. Garnish with fresh mint leaves."
    },
    {
        id: 2,
        title: "Classic Orange Squeeze",
        category: "fruit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pRR5s5Gcf5DVi3lPX6yy16Sm-GF0mNGhIQ&s",
        ingredients: ["4 Large Juicy Oranges", "Crushed Ice"],
        instructions: "Slice oranges in half. Use a manual or electric citrus juicer to extract the juice. Serve chilled over crushed ice."
    },
    {
        id: 3,
        title: "Vitality Carrot Cleanse",
        category: "vegetable",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/10/carrot-juice-1200x628-facebook-1200x628.jpg",
        ingredients: ["5 Large Carrots", "1/2 inch Ginger", "1 tsp Lemon juice"],
        instructions: "Wash and peel carrots. Run them through a juicer along with the ginger. Add lemon juice and stir."
    },
    {
        id: 55,
        title: "Deep Beetroot Detox",
        category: "detox",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBr2ncdCHfPT3I7cWa-UYM8kSL9vd0FQg_A&s",
        ingredients: ["1 Medium Beetroot", "2 Carrots", "1 Green Apple", "1/2 Lemon"],
        instructions: "Peel the beetroot. Juice all ingredients together. The apple balances the earthy beet flavor."
    }
];

// --- Modal Functionality ---
// This function is triggered when a user clicks "View Ingredients" or "See Ingredients".
window.openRecipeModal = (id) => {
    // 1. Find the recipe object in the data array using the provided ID.
    const recipe = defaultRecipes.find(r => r.id === id);
    if (!recipe) return;

    // 2. Update the HTML elements inside the Modal with the recipe data.
    document.getElementById('modalTitle').innerText = recipe.title;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalCategory').innerText = recipe.category.toUpperCase();
    
    // 3. Convert the ingredients array into a list of <li> elements.
    document.getElementById('modalIngredients').innerHTML = recipe.ingredients
        .map(ing => `<li>${ing}</li>`).join('');
        
    // 4. Update the instructions text.
    document.getElementById('modalInstructions').innerText = recipe.instructions;

    // 5. Initialize and show the Bootstrap Modal.
    const modalElement = document.getElementById('recipeModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// --- Form Submission & Validation Logic ---
function setupFormValidation() {
    // 1. Get the form element by its ID
    const form = document.getElementById('submissionForm');
    
    // Safety check: only run this if the form exists on the current page
    if (!form) return;

    // 2. Listen for the 'submit' event
    form.addEventListener('submit', (e) => {
        // Prevent the page from refreshing automatically
        e.preventDefault();

        // 3. Check if all required fields are filled correctly
        if (!form.checkValidity()) {
            e.stopPropagation();
            // Add Bootstrap validation styles (red borders)
            form.classList.add('was-validated');
        } else {
            // 4. If the form is valid, capture the data into a new object
            const newRecipe = {
                id: Date.now(), // Generate a unique ID using current timestamp
                title: document.getElementById('recipeTitle').value,
                category: document.getElementById('recipeCategory').value,
                image: document.getElementById('recipeImage').value,
                time: "10-15 mins", // Standard time for new submissions
                // Split ingredients by new lines and remove empty lines
                ingredients: document.getElementById('recipeIngredients').value.split('\n').filter(i => i.trim() !== ""),
                instructions: document.getElementById('recipeInstructions').value
            };

            // 5. Save to Browser's Local Storage
            // Get existing user recipes or start with an empty array
            const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
            // Add the new recipe to the list
            userRecipes.push(newRecipe);
            // Save the updated list back to storage
            localStorage.setItem('userRecipes', JSON.stringify(userRecipes));

            // 6. Show the Success Popup (Modal)
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            // 7. Reset the form for the next entry
            form.reset();
            form.classList.remove('was-validated');
        }
    });
}

// --- Page Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Run the form setup when the page finishes loading
    setupFormValidation();
});
