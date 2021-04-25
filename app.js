const foodContainer = document.getElementById9('food-container');
const foodCard = document.getElementById('food-card');
const searchMeal = () => {
    const searchMeal = document.getElementById('meal-input').value;
    if (searchMeal.length > 1){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals));

    }else{
        const ur2 = `www.themealdb.com/api/json/v1/1/search.php?f=${searchMeal}`
        fetch(ur2)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
    }

};

const displayMeal = (meals) => {
    meals.forEach ((meal) => {
        const foodContainer =document.getElementById('food-container');
        foodContainer.innerHTML += `
        <div class="mealItem" data-id = "${meal.idMeal}">
        <img id ="food-img" src ="${meal.strMealThumb}">
        <h4> ${meal.strMeal}</h4>
        </div>

        `;
    })
    getFoodID();
};
function getFoodID(){
    document.querySelectorAll('.mealItem').forEach((element) => {
        element.addEventListener('click', function(e){
            const foodID = element.getAttribute('data-id');
        });
    });
}
function searchByID (id){
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        const ul = document.querySelector('#foodingredients ul');
        [...ul.children].forEach(children => children.remove());
        for (let i = 1; i <= 20; i++){
            const mealIngredient = data.meals[0][`strIngredients${i}`];
            if (mealIngredient ! == '' && mealIngredient! == null){
                ul.innerHTML +=`
                <li>${data.meals[0][`strIngredient${i}`]}</li>
                `;
            }
            )
        }
    })
};