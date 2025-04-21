"use client";

import ImagePicker from "../imagePicker/imagePicker";
import { shareMeal } from "@/lib/actions/meals";
import { useActionState } from "react";
import ShareFormSubmitted from "../../meals-form-submitted";

export default function ShareForm() {

  const [state, formAction] = useActionState(shareMeal, {message:''});
  return (
    <form
          className="flex flex-col p-[40px] w-[800px] border-4 border-papaya-whip border-dashed rounded-[50px] mt-[100px]"
          action={formAction}
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
      <ImagePicker label='Pick an image' name="image" />
      {state?.message && <p className="text-red-600">{state.message}</p>}
      <p className="flex justify-center items-center gap-1 mt-[10px] ">
        <ShareFormSubmitted/>
      </p>
    </form>
  );
}
