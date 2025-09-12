import { useState } from 'react'



export default function Main() {

    const [ingredients, setIngredients] = useState([])

    // Map over the ingredients array to create <li> elements for each ingredient
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

     // Function to handle form submission when a new ingredient is added
    function handleSubmit(formData) {
         // Get the input value from the form using its "name" attribute
        const newIngredient = formData.get("ingredient")

        //  Update the state by adding the new ingredient to the existing list
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            {/* Form to add a new ingredient */}
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {/* Only shown this section if there are ingredients */}
            { ingredients.length > 0 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                
                {/* If more than 3 ingredients, show the "Get a recipe" option */}
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section> : null }
        </main>
    )
} 