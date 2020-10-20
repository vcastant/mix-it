const get_drink_btn = document.getElementById('get_drink');
const drink_container = document.getElementById('drink');

get_drink_btn.addEventListener('click', () => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createDrink(res.drink[0]);
		})
		.catch(e => {
			console.warn(e);
		});


    const createDrink = drink => {
	const ingredients = [];

	// Get all ingredients from the object. Up to 15
	for (let i = 1; i <= 15; i++) {
		if (drink[`strIngredient${i}`]) {
			ingredients.push(
				`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}`
			);
		} else {
			// Stop if there are no more ingredients
			break;
		}
	}

	const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${drink.strDrinkThumb}" alt=" Drink Image">
				${
					drink.strCategory
						? `<p><strong>Category:</strong> ${drink.strCategory}</p>`
						: ''
				}
				${drink.strAlcoholic ? `<p><strong>Alcoholic:</strong> ${meal.strAlcoholic}</p>` : ''}
				${drink.strGlass
						? `<p><strong>Glass:</strong> ${drink.strGlass}</p>`
						: ''
				}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${drink.strDrink}</h4>
				<p>${drink.strInstructions}</p>
			</div> :"}
	`;

	drink_container.innerHTML = newInnerHTML;
});