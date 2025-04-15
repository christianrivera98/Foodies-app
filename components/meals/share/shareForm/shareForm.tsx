"use client";

import ImagePicker from "../imagePicker/imagePicker";
import { PickerProps } from "../imagePicker/types";

export default function ShareForm({ label }: PickerProps) {
  return (
    <>
      <div className="">
        <p className="flex flex-col gap-1">
          <label className="text-[18px]" htmlFor="name">
            Your name
          </label>
          <input
            className="p-2 border-1 rounded-[4px] focus:border-persimmon outline-none placeholder:text-[12px]"
            placeholder="Write your name here..."
            type="text"
            id="name"
            name="name"
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
            id="email"
            name="email"
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
      <ImagePicker label={label} name="image" />
      <p className="flex justify-center items-center gap-1 mt-[10px] ">
        <button
          className="bg-papaya-whip w-[200px] p-[10px] text-[20px] text-barn-red rounded-xl hover:bg-barn-red hover:text-papaya-whip cursor-pointer transition hover:scale-105 active:scale-95"
          type="submit"
        >
          Share Meal
        </button>
      </p>
    </>
  );
}
