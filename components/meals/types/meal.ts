export interface mealItemProp  {
    title:string,
    slug:string,
    image:string,
    creator:string,
    summary:string
}

type Meals = {
    id:string
}
export interface mealsProps  {
    meals: Meals[]
}