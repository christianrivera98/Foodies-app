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
  

 
    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;
    const instructions = formData.get("instructions") as string;
    const image=  formData.get("image") as File;
    const creator =  formData.get("creator") as string;
    const creator_email =  formData.get("creator_email") as string;
  

  if (!title || !summary || !instructions || !image || !creator || !creator_email || !creator_email.includes('@') || image.size === 0){
    return {message: 'Please complete all fields correctly.'}
  }
    
  const buffer = Buffer.from(await image.arrayBuffer());
  const fileName = `${Date.now()}-${image.name}`;
  const imagePath = path.join(process.cwd(), 'public', 'images', fileName);
  await writeFile(imagePath, buffer);

  const slug = slugify(title, {lower: true});
  
  const stmt = db.prepare(`
      INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
   stmt.run(slug, title,`/images/${fileName}`, summary, instructions, creator, creator_email);
   return {message:'Successfully registered meal.'} 
}

