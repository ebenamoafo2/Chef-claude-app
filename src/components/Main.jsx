import { useState } from 'react'



export default function Main() {

    const [ingredients, setIngredients] = useState([])

    // Map over the ingredients array to create <li> elements for each ingredient
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

     // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault() //Stop page reload
        const formData = new FormData(event.currentTarget)

        // Get the value of the input with name="ingredient"
        const newIngredient = formData.get("ingredient")

        // Update state: add the new ingredient to the array
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}