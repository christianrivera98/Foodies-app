const Database = require('better-sqlite3');

const db = new Database('meals.db', { readonly: true });

function getMeals() {
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}

function getMeal(slug) {
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  return meal;
}

module.exports = { getMeals, getMeal };