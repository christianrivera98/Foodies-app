"use server";

import { writeFile } from "fs/promises";
import path from "path";
import { db } from "../meals";
import slugify from "slugify";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData: FormData): Promise<{success?: string, error?: string}> {
  
    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;
    const instructions = formData.get("instructions") as string;
    const image = formData.get("image") as File;
    const creator = formData.get("creator") as string;
    const creator_email = formData.get("creator_email") as string;

    if (!title || !summary || !instructions || !image || !creator || !creator_email || !creator_email.includes("@") || image.size === 0) {
      return { error: "Please fill in all fields correctly." };
    }
try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const fileName = `${Date.now()}-${image.name}`;
    const imagePath = path.join(process.cwd(), "public", "images", fileName);
    await writeFile(imagePath, buffer);

    const slug = slugify(`${title}-${Date.now()}`, { lower: true });

    const stmt = db.prepare(`
      INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(slug, title, `/images/${fileName}`, summary, instructions, creator, creator_email);
    revalidatePath('/pages/meals')
    return { success: "Your meal has been shared successfully!" };
    
    
  } catch (error) {
    console.error("Error sharing meal:", error);
    return { error: "An error occurred while sharing your meal." }
  }
}