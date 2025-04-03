const Database = require('better-sqlite3');

const db = new Database('meals.db', { readonly: true });

function getMeals() {
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}

module.exports = { getMeals };