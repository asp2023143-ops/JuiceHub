// --- Recipe Data ---
const defaultRecipes = [
    {
        id: 1,
        title: "Cold Watermelon Crush",
        category: "fruit",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Fresh-Watermelon-Juice-Recipe-500x375.jpg",
        time: "5 mins",
        ingredients: ["Watermelon", "Lime", "Mint", "Pinch of Black Salt"],
        instructions: "Blend fresh watermelon cubes until smooth. Strain for a clear juice. Stir in lime juice and black salt. Garnish with fresh mint leaves."
    },
    {
        id: 2,
        title: "Classic Orange Squeeze",
        category: "fruit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pRR5s5Gcf5DVi3lPX6yy16Sm-GF0mNGhIQ&s",
        time: "5 mins",
        ingredients: ["4 Large Juicy Oranges", "Crushed Ice"],
        instructions: "Slice oranges in half. Use a manual or electric citrus juicer to extract the juice. Serve chilled over crushed ice."
    },
    {
        id: 3,
        title: "Vitality Carrot Cleanse",
        category: "vegetable",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/10/carrot-juice-1200x628-facebook-1200x628.jpg",
        time: "10 mins",
        ingredients: ["5 Large Carrots", "1/2 inch Ginger", "1 tsp Lemon juice"],
        instructions: "Wash and peel carrots. Run them through a juicer along with the ginger. Add lemon juice and stir."
    },
    {
        id: 4,
        title: "Hydrating Cucumber Cool",
        category: "vegetable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RXm5zHAzb_gPhRnJNi7Cl9BX2y5_6mxq6w&s",
        time: "5 mins",
        ingredients: ["2 Large Cucumbers", "1/2 Lime", "Small pinch of Sea Salt", "2 Mint leaves"],
        instructions: "Juice the cucumbers. Squeeze in the lime juice and add a pinch of salt. Garnish with mint and serve."
    },
    {
        id: 55,
        title: "Deep Beetroot Detox",
        category: "detox",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBr2ncdCHfPT3I7cWa-UYM8kSL9vd0FQg_A&s",
        time: "12 mins",
        ingredients: ["1 Medium Beetroot", "2 Carrots", "1 Green Apple", "1/2 Lemon"],
        instructions: "Peel the beetroot. Juice all ingredients together. The apple balances the earthy beet flavor."
    },
    {
        id: 6,
        title: "Fresh Mango Nectar",
        category: "fruit",
        image: "https://www.realsimple.com/thmb/Kldsl-2wgCKXH6eQzsOX-chnin8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/health-benefits-of-mango-juice-GettyImages-1147373774-f7ebf4e4c13f4f67a2420df3c4325a04.jpg",
        time: "10 mins",
        ingredients: ["2 Ripe Mangoes", "1/2 cup Water", "1 tbsp Lime juice", "1 tsp Honey"],
        instructions: "Peel and slice mangoes. Blend with water and lime juice until smooth. Sweeten with honey if needed."
    },
    {
        id: 7,
        title: "Creamy Banana Boost",
        category: "smoothie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_vdiXfuXSPfODUansVjz7U29ccbmJOF2RA&s",
        time: "5 mins",
        ingredients: ["2 Ripe Bananas", "1 cup Milk of choice", "1/4 cup Oats", "A pinch of Cinnamon"],
        instructions: "Place all ingredients in a blender. Blend until creamy and smooth. Top with an extra dash of cinnamon."
    },
    {
        id: 8,
        title: "Rainbow Mix Fruit",
        category: "fruit",
        image: "https://www.howewelive.com/wp-content/uploads/2015/04/rainbow-juice-5.jpg",
        time: "12 mins",
        ingredients: ["1 Apple", "1 Orange", "1 cup Pineapple", "1/2 cup Strawberries", "1 tbsp Lime juice"],
        instructions: "Juice all the fruits together. Stir in lime juice and serve immediately for maximum freshness."
    },
    {
        id: 9,
        title: "Perfect Avocado Silk",
        category: "smoothie",
        image: "https://t4.ftcdn.net/jpg/18/92/10/53/360_F_1892105325_oUsFuwHKbVm7ekJoTmigtHxGCgzZ3zZh.jpg",
        time: "8 mins",
        ingredients: ["1 Ripe Avocado", "1 cup Milk", "2 tbsp Condensed milk or Honey", "Ice cubes"],
        instructions: "Blend the avocado flesh with milk and sweetener until very smooth. Add ice and pulse for a chilled shake."
    },
    {
        id: 10,
        title: "Classic Mint Mojito",
        category: "detox",
        image: "https://thumbs.dreamstime.com/b/indulge-vibrant-flavors-classic-mojito-expertly-crafted-fresh-mint-leaves-bright-lime-juice-chilled-ice-373656004.jpg",
        time: "5 mins",
        ingredients: ["10 Fresh Mint leaves", "1 Lime", "2 tbsp Sugar or Syrup", "Soda water", "Crushed Ice"],
        instructions: "Muddle mint and lime wedges with sugar. Fill with crushed ice and top with soda water. Stir gently."
    },
    {
        id: 11,
        title: "Pineapple Ginger Cleanser",
        category: "detox",
        image: "https://thumbs.dreamstime.com/b/fresh-pineapple-turmeric-juice-raw-ingredients-stone-background-golden-yellow-detox-juice-turmeric-root-glass-390311440.jpg",
        time: "10 mins",
        ingredients: ["1/2 Fresh Pineapple", "2 inch Fresh Ginger", "1/2 Lemon", "1 cup Water"],
        instructions: "Peel and core pineapple. Juice with ginger and lemon. Dilute with water if needed. Serve chilled."
    },
    {
        id: 12,
        title: "Aloe Vera + Lime Drink",
        category: "detox",
        image: "https://thumbs.dreamstime.com/b/refreshing-aloe-vera-drink-lime-slices-soft-green-background-clear-glass-juice-leaves-concept-natural-refreshment-390282282.jpg",
        time: "8 mins",
        ingredients: ["2 tbsp Aloe Vera gel (fresh)", "1 Lime", "1 cup Water", "1 tsp Honey"],
        instructions: "Scoop fresh aloe gel. Blend with water, lime juice, and honey. Strain and serve immediately."
    },
    {
        id: 13,
        title: "Lemon Ginger Detox",
        category: "detox",
        image: "https://sc02.alicdn.com/kf/Hf44c43ccd1054b6f85741679c6caaf03f.png",
        time: "5 mins",
        ingredients: ["1 Lemon", "1 inch Ginger", "1 cup Warm water", "Pinch of Cayenne pepper"],
        instructions: "Squeeze lemon into water. Grate ginger and squeeze juice out. Add cayenne. Best consumed in the morning."
    },
    {
        id: 14,
        title: "Spinach (Green) Juice",
        category: "vegetable",
        image: "https://yummyindiankitchen.com/wp-content/uploads/2024/05/spinach-juice-recipe-homemade-and-fresh.jpg",
        time: "10 mins",
        ingredients: ["2 cups Fresh Spinach", "1 Cucumber", "1 Green Apple", "1/2 Lime"],
        instructions: "Wash spinach and cucumber. Juice all ingredients together. Squeeze lime at the end and stir."
    }
];

let recipes = [];

// Load recipes from default + localStorage
function loadRecipes() {
    const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
    const deletedDefaultIds = JSON.parse(localStorage.getItem('deletedDefaultIds')) || [];

    const filteredDefaults = defaultRecipes.filter(r => !deletedDefaultIds.includes(r.id));
    recipes = [...filteredDefaults, ...userRecipes];
}

loadRecipes();

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we are on
    const recipeGrid = document.getElementById('recipeGrid');

    if (recipeGrid) {
        displayRecipes(recipes);
        setupFilters();
        setupSearch();
    }

    setupFormValidation();
});

// --- Recipe Display Logic ---
function displayRecipes(recipeList) {
    const grid = document.getElementById('recipeGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (recipeList.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><h3>No recipes found.</h3><p>Try a different search or category!</p></div>';
        return;
    }

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
        grid.innerHTML += card;
    });
}

// --- Filter Logic ---
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                displayRecipes(recipes);
            } else {
                const filtered = recipes.filter(r => r.category === category);
                displayRecipes(filtered);
            }
        };
    });
}

// --- Search Logic ---
function setupSearch() {
    const searchInput = document.getElementById('recipeSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        const searched = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
            recipe.category.toLowerCase().includes(query)
        );

        displayRecipes(searched);
    });
}

// --- Modal Logic ---
window.openRecipeModal = (id) => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modalTitle').innerText = recipe.title;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalCategory').innerText = recipe.category.toUpperCase();
    document.getElementById('modalIngredients').innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    document.getElementById('modalInstructions').innerText = recipe.instructions;

    const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
    modal.show();
}

// --- Delete Logic ---
window.deleteRecipe = (id) => {
    if (confirm("Are you sure you want to delete this recipe?")) {
        // Try removing from userRecipes
        let userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
        const originalUserCount = userRecipes.length;
        userRecipes = userRecipes.filter(r => r.id !== id);

        if (userRecipes.length < originalUserCount) {
            localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
        } else {
            // If not in userRecipes, it's a default one. Track it as deleted.
            let deletedDefaultIds = JSON.parse(localStorage.getItem('deletedDefaultIds')) || [];
            if (!deletedDefaultIds.includes(id)) {
                deletedDefaultIds.push(id);
                localStorage.setItem('deletedDefaultIds', JSON.stringify(deletedDefaultIds));
            }
        }

        // Refresh data and UI
        loadRecipes();
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-category');

        if (activeFilter === 'all') {
            displayRecipes(recipes);
        } else {
            displayRecipes(recipes.filter(r => r.category === activeFilter));
        }
    }
}

// --- Form Validation ---
function setupFormValidation() {
    const forms = document.querySelectorAll('.js-validated-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                form.classList.add('was-validated');
            } else {
                e.preventDefault();
                
                const pageHref = window.location.href.toLowerCase();
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Success';

                const showMessageAndRedirect = (msg, redirectUrl, isError = false) => {
                    // Remove any existing alerts in the form first
                    const existingAlert = form.querySelector('.alert.mt-3.text-center');
                    if (existingAlert) existingAlert.remove();

                    const alertDiv = document.createElement('div');
                    alertDiv.className = `alert alert-${isError ? 'danger' : 'success'} mt-3 text-center fw-bold shadow-sm`;
                    alertDiv.style.fontSize = "1.1rem"; // Make it clearer
                    alertDiv.innerText = msg;
                    form.appendChild(alertDiv);
                    
                    if (!isError && submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Please wait...';
                    }
                    
                    if (redirectUrl && !isError) {
                        setTimeout(() => {
                            window.location.href = redirectUrl;
                        }, 3000); // Wait 3 seconds to let them read success message
                    } else {
                        // If it's an error or no redirect, re-enable button immediately.
                        // We DO NOT remove the alertDiv here so the error message stays clearly visible!
                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.innerHTML = originalBtnText;
                        }
                        if (!isError) {
                            form.reset();
                            form.classList.remove('was-validated');
                        }
                    }
                };

                if (pageHref.includes('login.html')) {
                    const formData = new FormData(form);
                    fetch('login.php', { method: 'POST', body: formData })
                        .then(res => res.text())
                        .then(text => {
                            if (text.includes('successful')) {
                                showMessageAndRedirect(text, 'index.html');
                            } else {
                                showMessageAndRedirect(text, null, true);
                            }
                        })
                        .catch(err => showMessageAndRedirect('Network error. Database might not be running.', null, true));
                } else if (pageHref.includes('register.html')) {
                    const formData = new FormData(form);
                    fetch('register.php', { method: 'POST', body: formData })
                        .then(res => res.text())
                        .then(text => {
                            if (text.includes('successful')) {
                                showMessageAndRedirect(text, 'login.html');
                            } else {
                                showMessageAndRedirect(text, null, true);
                            }
                        })
                        .catch(err => showMessageAndRedirect('Network error. Database might not be running.', null, true));
                } else if (pageHref.includes('contact.html')) {
                    const formData = new FormData(form);
                    fetch('contact.php', { method: 'POST', body: formData })
                        .then(res => res.text())
                        .then(text => {
                            if (text.includes('successfully')) {
                                showMessageAndRedirect(text, null);
                            } else {
                                showMessageAndRedirect(text, null, true);
                            }
                        })
                        .catch(err => showMessageAndRedirect('Network error. Database might not be running.', null, true));
                } else if (pageHref.includes('submit_recipe.html')) {
                    const formData = new FormData(form);
                    fetch('submit_recipe.php', { method: 'POST', body: formData })
                        .then(res => res.text())
                        .then(text => {
                            if (text.includes('successfully')) {
                                showMessageAndRedirect(text, 'index.html');
                            } else {
                                showMessageAndRedirect(text, null, true);
                            }
                        })
                        .catch(err => showMessageAndRedirect('Network error. Database might not be running.', null, true));
                } else {
                    const action = form.getAttribute('action');
                    if (action && action !== '#') {
                        showMessageAndRedirect('Form submitted successfully!', action);
                    } else {
                        showMessageAndRedirect('Form submitted successfully!', null);
                    }
                }
            }
        });
    });
}
