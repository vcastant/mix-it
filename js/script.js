
const url= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const $drink=$('#drink');

const $get_drink = $('#get_drink');

$get_drink.on('click', getDrinks);

function getDrinks (event){
	$.ajax(url)
	.then (function(data){
		console.log (data) 
		drinkList = data;
        render ()
	}, function(error){
		console.log ('error',error)
	})
}

function render () {
	$drink.text('drink name ' + drinkList.drinks[0].strDrink);

}
/*
previous code

const get_drink_btn = document.getElementById('get_drink');
const drink_container = document.getElementById('drink');

get_drink_btn.addEventListener('click', (event) => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createDrink(res.drink[0]);
		});
});

const createDrink = (drink) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 15
	for (let i = 1; i <= 15; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}

	const newInnerHTML = `
        <div class="row">
            <div class="columns five">
                <img src="${drink.strDrinkThumb}" alt="Drink Image">
                ${drink.strAlcoholic ? `<p><strong>Category:</strong> ${drink.strAlcoholic}</p>` : ''}
                ${drink.strGlass ? `<p><strong>Area:</strong> ${drink.strGlass}</p>` : ''}
                <h5>Ingredients:</h5>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="columns seven">
                <h4>${drink.strdrink}</h4>
                <p>${drink.strInstructions}</p>
            </div>`
}

*/