import Image from "next/image";
import { mealItemProp } from "./types/meal";
import Link from "next/link";
export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: mealItemProp) {
  return (
    <article className="flex flex-col justify-between w-[30rem] h-[32rem] rounded-[20px] bg-linear-65 from-barn-red to-fire-brick shadow-black shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
      <header>
        <div className="relative w-full h-[20rem]">
          <Image src={image} alt={title} fill className="object-cover"></Image>
        </div>
        <div className="p-2">
          <h2 className="text-[26px] font-bold tracking-[1px]">{title}</h2>
          <p className="text-sm font-light">by {creator}</p>
        </div>
      </header>
      <div className="p-2">
        <p className="text-[16px]">{summary}</p>
        <div className="flex justify-end m-[20px]">
          <Link className="text-persimmon underline hover:scale-105 duration-200" href={`/pages/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
