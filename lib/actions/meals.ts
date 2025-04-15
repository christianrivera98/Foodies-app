"use server";

 interface MealData {
    title: string;
    summary: string;
    instructions: string;
    image: File | null;
    creator: string;
    creator_email: string;

};

export async function shareMeal(formData: FormData) {
  

  const meal : MealData = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("creator") as string,
    creator_email: formData.get("creator_email") as string,
  };
}
