const Database = require('better-sqlite3');

export const db = new Database('meals.db', { readonly: true });

export function getMeals() {
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}

export function getMeal(slug) {
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  return meal;
}
