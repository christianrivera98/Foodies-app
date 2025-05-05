"use client";

import ImagePicker from "../imagePicker/imagePicker";
import { shareMeal } from "@/lib/actions/actions";
import ShareFormSubmitted from "../../meals-form-submitted";
import { useRef, useState, useTransition } from "react";
import { redirect } from "next/navigation";

export default function ShareForm() {
  const [error, setError] = useState<string | null>(null);
  const [, transition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setError(null);
    transition(async () => {
      const result = await shareMeal(formData);
      if (result.error) {
        setError(result.error);
      } else if (result.success) {
        sessionStorage.setItem("success", result.success);
        setTimeout(() => redirect("/meals"), 1000);
      }
    });
  }
  return (
    <form
      ref={formRef}
      className="flex flex-col p-[40px] w-[800px] border-4 border-papaya-whip border-dashed rounded-[50px] mt-[100px]"
      action={handleSubmit}
    >
      <div className="">
        <p className="flex flex-col gap-1">
          <label className="text-[18px]" htmlFor="name">
            Your name
          </label>
          <input
            className="p-2 border-1 rounded-[4px] focus:border-persimmon outline-none placeholder:text-[12px]"
            placeholder="Write your name here..."
            type="text"
            id="creator"
            name="creator"
            required
          />
        </p>
        <p className="flex flex-col gap-1 mt-[10px]">
          <label className="text-[18px]" htmlFor="email">
            Your email
          </label>
          <input
            className="p-2 border-1 rounded-[4px] focus:border-persimmon outline-none placeholder:text-[12px]"
            placeholder="Write your email here..."
            type="email"
            id="creator_email"
            name="creator_email"
            required
          />
        </p>
      </div>
      <p className="flex flex-col gap-1 mt-[10px]">
        <label className="text-[18px]" htmlFor="title">
          Title
        </label>
        <input
          className="p-2 border-1 rounded-[4px] focus:border-persimmon outline-none placeholder:text-[12px]"
          placeholder="Write the name of your meal..."
          type="text"
          id="title"
          name="title"
          required
        />
      </p>
      <p className="flex flex-col gap-1 mt-[10px]">
        <label className="text-[18px]" htmlFor="summary">
          Short Summary
        </label>
        <input
          className="p-2 border-1 rounded-[4px] focus:border-persimmon outline-none placeholder:text-[12px]"
          placeholder="Tell us a little bit about your recipe..."
          type="text"
          id="summary"
          name="summary"
          required
        />
      </p>
      <p className="flex flex-col gap-1 mt-[10px]">
        <label className="text-[18px]" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="p-2 border-1 rounded-[4px] focus:border-persimmon outline-none placeholder:text-[12px]"
          placeholder="How do we prepare it? "
          id="instructions"
          name="instructions"
          rows={10}
          required
        ></textarea>
      </p>

      <ImagePicker label="Pick an image" name="image" />
      {error && (
        <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-red-100 text-red-800 p-2 rounded">
          {error}
        </div>
      )}
      <p className="flex justify-center items-center gap-1 mt-[10px] ">
        <ShareFormSubmitted />
      </p>
    </form>
  );
}
