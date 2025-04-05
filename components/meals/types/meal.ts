export interface Meals {
    id:string;
    title:string;
    slug:string;
    image:string;
    creator:string;
    summary:string;
    
}
export interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
export type mealItemProp = Omit <Meals,'id'>
export interface mealsProps  {
    meals: Meals[]
}