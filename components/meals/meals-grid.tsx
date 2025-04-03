import MealItem from "./mealsItem";
import { mealsProps } from "./types/meal";

export default function MealGrid ({meals}: mealsProps){
    return <ul className="grid grid-cols-3 gap-10">
        {meals.map (meal => <li  key={meal.id}>
            <MealItem {...meal}/>
        </li> )}
    </ul>
}