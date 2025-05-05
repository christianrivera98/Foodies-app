"use client";
import ShareForm from "@/components/meals/share/shareForm/shareForm";

export default function Share() {
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
        <ShareForm />
      </main>
    </>
  );
}
