const ingedients = document.getElementById('search');




function search(){

    
   
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingedients.value}`)
    .then(response => response.json())
    .then(data => {
        const recipesContainer = document.getElementById('RecipesContainer');
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