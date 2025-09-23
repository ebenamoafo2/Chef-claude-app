import { useState } from 'react'
import ClaudeRecipe from '../components/ClaudeRecipe'
import IngredientsList from '../components/IngredientsList'


export default function Main() {
    // State to store the list of ingredients
    const [ingredients, setIngredients] = useState([])

    // State to control whether the recipe is shown
    const [recipeShown, setRecipeShown] = useState(false)
    
    // Toggles the visibility of the recipe
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    // Handles form submission to add a new ingredient
    function handleSubmit(formData) {
        // Get the input value from the form using its "name" attribute
        const newIngredient = formData.get("ingredient")

        // Update the state by adding the new ingredient to the existing list
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
            {/* Only show the ingredients list if there are ingredients */}
            { ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}  
                    toggleRecipeShown={toggleRecipeShown}
                /> 
            }
            {/* Show the recipe if recipeShown is true */}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}