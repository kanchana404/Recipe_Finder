const ingedients = document.getElementById('search');




function search(){

    
   
   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingedients.value}`)
    .then(response => response.json())
    .then(data => console.log(data))

}