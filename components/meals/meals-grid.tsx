import { mealsProps } from "./types/meal";


export default function MealGrid ({meals}: mealsProps){
    return <ul>
        {meals.map (meal => <li key={meal.id}>

        </li> )}
    </ul>
}