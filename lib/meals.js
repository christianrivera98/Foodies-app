import Database from 'better-sqlite3';

export const db = new Database('meals.db');

// Obtener todas las comidas
export function getMeals() {
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}

// Obtener una comida por su slug
export function getMeal(slug) {
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);

  if (!meal) {
    throw new Error(`No meal found for slug: ${slug}`);
  }

  return meal;
}
