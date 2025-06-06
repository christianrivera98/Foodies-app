import Link from "next/link";
import { getMeals } from "@/lib/meals";
import MealGrid from "@/components/meals/meals-grid";
import ClientFlash from "@/components/meals/clientFlash";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
    <ClientFlash/>
      <header className="mt-[100px] ml-[100px]">
        <h1 className="font-bold text-[80px] tracking-[2px] mb-[50px]">
          Delicious meals, created <span>by you</span>
        </h1>
        <p className="font-light text-[32px] tracking-[1px] mb-4">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <Link href="/meals/share">
          <button className="p-2 font-medium text-[24px] rounded-xl tracking-[1px] cursor-pointer bg-barn-red text-papaya-whip">
            Share Your Favorite Recipe
          </button>
        </Link>
      </header>
      <main className="flex justify-center items-center mt-[60px]">
        <MealGrid meals={meals} />
      </main>
    </>
  );
}