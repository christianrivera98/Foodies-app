import HoverToolTip from "@/components/animations/hoverToolTip";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { SlugProps } from "./types";

export default function MealDetailsPage({ params }: SlugProps) {
  const meal = getMeal(params.slug);
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[80rem] h-full p-[100px] mt-[50px] bg-linear-to-bl from-barn-red via-fire-brick to-black rounded-3xl shadow-xl shadow-papaya-whip/5">
          <header className="flex gap-[60px]">
            <div className="relative w-[20rem] h-[20rem]">
              <Image
                src={meal.image}
                alt={meal.title}
                fill
                className="rounded-2xl shadow-xl shadow-black"
              ></Image>
            </div>
            <div>
              <h1 className="text-[60px] font-semibold">{meal.title}</h1>
              <p className="text-[20px]">
                by{" "}
                <HoverToolTip name={meal.creator} email={meal.creator_email} />
              </p>
              <p className="w-[450px] mt-[30px] text-2xl text-justify">{meal.summary}</p>
            </div>
          </header>
          <main className="mt-[50px] bg-papaya-whip/60 p-4 rounded-2xl text-black">
            <h2 className="font-bold text-[20px]">Instructions:</h2>
            <p
              className="flex flex-col  w-[900px] text-justify text-[16px]"
              dangerouslySetInnerHTML={{ __html: meal.instructions }}
            />
          </main>
        </div>
      </div>

      
    </>
  );
}
