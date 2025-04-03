import Image from "next/image"
import { mealItemProp } from "./types/meal"
import Link from "next/link"
export default function MealItem ({ title, slug, image, summary, creator }: mealItemProp) {
    return(
        <article>
            <header>
                <div>
                    <Image src={image} alt={title} fill ></Image>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div>
                <p>{summary}</p>
            </div>
        </article>
    )
} 