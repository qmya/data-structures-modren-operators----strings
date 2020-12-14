'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
//Without Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//With destructuring
const [x, y, z] = arr;
console.log(x, y, z);

//Destructing in the above object and its array
const [first,second] = restaurant.categories;
console.log(first, second);

//if you wat to skip the second element 
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

//reversing an array
[main, secondary] = [secondary,main];
console.log(main, secondary);





//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
