const ingedients = document.getElementById('search');

console.log("Created By Kavitha Kanchana");
console.log("All write deserved");
console.log("https://github.com/kanchana404/");

function search() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingedients.value}`)
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.getElementById('RecipesContainer');

            // Clear previous search results
            recipesContainer.innerHTML = '';

            if (data.meals === null || data.meals.length === 0) {
                const header = document.createElement('h1');
                header.textContent = '"No recipes found for the entered ingredient.';
                recipesContainer.appendChild(header);

                setTimeout(() => {
                    location.reload();
                }, 2500); // Wait for 4 seconds before reloading
                return;
            }

            data.meals.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
                
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('container', 'text-center');
                containerDiv.id = 'box';
                
                const image = document.createElement('img');
                image.src = meal.strMealThumb;
                image.alt = meal.strMeal;
                
                const mealName = document.createElement('h2');
                mealName.textContent = meal.strMeal;
                
                const instructionsButton = document.createElement('button');
                instructionsButton.classList.add('btn', 'btn-dark');
                instructionsButton.style.color = 'white';
                instructionsButton.innerHTML = '<b>Instructions</b>';
                
                instructionsButton.addEventListener('click', () => {

                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                        .then(response => response.json())
                        .then(data => {
                            const instructions = data.meals[0].strInstructions;
                            Swal.fire({
                                title: meal.strMeal,
                                text: instructions,
                                imageUrl: meal.strMealThumb,
                                imageWidth: 400,
                                imageHeight: 300,
                                imageAlt: "Custom image"
                              });
                        });


                    
                });

                const tutorialButton = document.createElement('button');
                tutorialButton.classList.add('btn', 'btn-warning', 'ml-2');
                tutorialButton.style.color = 'white';
                tutorialButton.innerHTML = '<b>Tutorial</b>';
                
                tutorialButton.addEventListener('click', () => {
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                        .then(response => response.json())
                        .then(data => {
                            const tutorialLink = data.meals[0].strYoutube;
                            window.open(tutorialLink, '_blank');
                        });
                    const tutorialLink = tutorialLink;
                    window.open(tutorialLink, '_blank');
                });
                
                containerDiv.appendChild(image);
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(mealName);
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(instructionsButton);
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(tutorialButton);
                
                mealDiv.appendChild(containerDiv);
                
                recipesContainer.appendChild(mealDiv);
            });
        });
}
