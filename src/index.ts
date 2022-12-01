import { CalorieCounting } from "./calorie-counting/calorie-counting";

let calorieCounter: CalorieCounting = new CalorieCounting("input.txt");

console.log(calorieCounter.getMaxCalories(3));