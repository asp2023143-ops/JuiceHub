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
// Array to hold the combined list of default and user-added recipes
let recipes = []; 

// --- Load Recipes ---
// This function loads the recipes into the 'recipes' array
function loadRecipes() {
    // 1. Get user-submitted recipes from the browser's Local Storage
    const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
    
    // 2. Get the list of IDs of default recipes the user has deleted
    const deletedDefaultIds = JSON.parse(localStorage.getItem('deletedDefaultIds')) || [];

    // 3. Filter out the default recipes that have been marked as deleted
    const filteredDefaults = defaultRecipes.filter(r => !deletedDefaultIds.includes(r.id));
    
    // 4. Combine the remaining default recipes and user recipes
    recipes = [...filteredDefaults, ...userRecipes];
}

// Initial load
loadRecipes();

// --- Display Recipes ---
// This function renders the recipe cards onto the HTML page
function displayRecipes(recipeList) {
    const grid = document.getElementById('recipeGrid');
    if (!grid) return;
    
    // Clear any existing HTML inside the grid
    grid.innerHTML = ''; 

    // If there are no recipes to show, display a friendly message
    if (recipeList.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><h3>No recipes found.</h3><p>Try a different search or category!</p></div>';
        return;
    }

    // Loop through the list and create an HTML card for each recipe
    recipeList.forEach(recipe => {
        const card = `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="recipe-card card h-100">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <span class="recipe-tag">${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text text-truncate">${recipe.instructions}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <button class="btn btn-outline-success rounded-pill px-3" onclick="openRecipeModal(${recipe.id})">
                                Ingredients
                            </button>
                            <button class="btn btn-delete-sm" onclick="deleteRecipe(${recipe.id})" title="Delete Recipe">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Append the newly created card to the grid
        grid.innerHTML += card;
    });
}

// --- Setup Filters ---
// This handles the category buttons (All, Fruit, Smoothies, etc.)
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            // Remove the 'active' styling from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add 'active' styling to the clicked button
            btn.classList.add('active');

            // Get the category from the button's data attribute
            const category = btn.getAttribute('data-category');
            
            // If 'all' is clicked, show everything. Otherwise, filter the list.
            if (category === 'all') {
                displayRecipes(recipes);
            } else {
                const filtered = recipes.filter(r => r.category === category);
                displayRecipes(filtered);
            }
        };
    });
}

// --- Setup Search ---
// This handles the live search bar functionality
function setupSearch() {
    const searchInput = document.getElementById('recipeSearch');
    if (!searchInput) return;

    // Listen to every keystroke in the search bar
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase(); // Get the typed text

        // Filter recipes based on title, ingredients, or category matching the typed text
        const searched = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
            recipe.category.toLowerCase().includes(query)
        );

        // Display the search results
        displayRecipes(searched);
    });
}

// --- Delete Recipe ---
// This function removes a recipe when the trash can icon is clicked
window.deleteRecipe = (id) => {
    // Show a browser confirmation popup before deleting
    if (confirm("Are you sure you want to delete this recipe?")) {
        
        // 1. Check if the recipe exists in the user's custom recipes
        let userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
        const originalUserCount = userRecipes.length;
        userRecipes = userRecipes.filter(r => r.id !== id);

        // If it was a user recipe, save the updated user recipes list
        if (userRecipes.length < originalUserCount) {
            localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
        } else {
            // 2. If it wasn't a user recipe, it must be a default recipe. 
            // Save its ID to the deleted list so it doesn't show up again.
            let deletedDefaultIds = JSON.parse(localStorage.getItem('deletedDefaultIds')) || [];
            if (!deletedDefaultIds.includes(id)) {
                deletedDefaultIds.push(id);
                localStorage.setItem('deletedDefaultIds', JSON.stringify(deletedDefaultIds));
            }
        }

        // 3. Reload the master recipe list
        loadRecipes();
        
        // 4. Update the screen while remembering the currently active filter
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-category');

        if (activeFilter === 'all') {
            displayRecipes(recipes);
        } else {
            displayRecipes(recipes.filter(r => r.category === activeFilter));
        }
    }
}

// --- Page Initialization ---
// This event triggers when the HTML document has completely loaded
document.addEventListener('DOMContentLoaded', () => {
    const recipeGrid = document.getElementById('recipeGrid');

    // Only run these functions if we are on recipes.html (which has #recipeGrid)
    if (recipeGrid) {
        displayRecipes(recipes);
        setupFilters();
        setupSearch();
    }
});
