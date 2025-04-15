'use client';
import { PickerProps } from "@/components/meals/share/imagePicker/types";
import ShareForm from "@/components/meals/share/shareForm/shareForm";
import { shareMeal } from "@/lib/actions/meals";

export default function Share({ label }: PickerProps) {
  return (
    <>
      <header className="w-fit mt-[80px] ml-[100px]">
        <h1 className="font-bold text-[60px]">
          Share your{" "}
          <span className="bg-gradient-to-r from-barn-red to-fire-brick bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="overline text-right text-[20px]">
          Or any other meal you{" "}
          <span className="bg-gradient-to-r from-persimmon to-[#e85d04] bg-clip-text text-transparent">
            feel
          </span>{" "}
          needs sharing!
        </p>
      </header>
      <main className="flex justify-center items-center ">
        <form
          className="flex flex-col p-[40px] w-[800px] border-4 border-papaya-whip border-dashed rounded-[50px] mt-[100px]"
          action={shareMeal}
        >
          <ShareForm label={label} name="image" />
        </form>
      </main>
    </>
  );
}
