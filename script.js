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
                header.textContent = 'No recipes found for the entered ingredient.';
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
                
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-warning');
                button.style.color = 'white';
                button.innerHTML = '<b>Tutorial</b>';
                
                button.addEventListener('click', () => {
                    const tutorialLink = `https://www.youtube.com/results?search_query=how+to+make+${meal.strMeal.replace(/ /g, '+')}`;
                    window.open(tutorialLink, '_blank');
                });
                
                containerDiv.appendChild(image);
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(document.createElement('br'));
                containerDiv.appendChild(mealName);
                containerDiv.appendChild(button);
                
                mealDiv.appendChild(containerDiv);
                
                recipesContainer.appendChild(mealDiv);
            });
        });
}
