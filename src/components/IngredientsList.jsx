


export default function IngredientsList(props) {

    // Map over the ingredients array to create <li> elements for each ingredient
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                
                {/* If more than 3 ingredients, show the "Get a recipe" option */}
                {props.ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section>
    )
}