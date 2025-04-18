"use server";

import { writeFile } from "fs/promises";
import path from "path";
import { db } from "../meals";
import slugify from "slugify";

 interface MealData {
    title: string;
    summary: string;
    instructions: string;
    image: File | null;
    creator: string;
    creator_email: string;

};

type FormState = {
  message: string;
}

export async function shareMeal(prevState: FormState, formData: FormData): Promise<FormState> {
  

  const meal : MealData = {
     title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("creator") as string,
    creator_email: formData.get("creator_email") as string,
  };

  if (!meal.title || !meal.summary || !meal.instructions || !meal.image || !meal.creator || !meal.creator_email || !meal.creator_email.includes('@') || meal.image.size === 0){
    return {message: 'Please complete all fields correctly.'}
  }
    
  const buffer = Buffer.from(await meal.image.arrayBuffer());
  const fileName = `${Date.now()}-${meal.image}`;
  const imagePath = path.join(process.cwd(), 'public', 'images', fileName);
  await writeFile(imagePath, buffer);

  const slug = slugify
  
  const stmt = db.prepare(`
      INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
   stmt.run(slug, meal.title,`/images/${fileName}`, meal.summary, meal.instructions, meal.creator, meal.creator_email);
   return {message:'Successfully registered meal.'} 
}

