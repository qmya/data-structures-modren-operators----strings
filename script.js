'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//Destructuring objects we use {}
//we will write the exact name as in the object 
//no need to skip any element
let { name, categories, openingHours } = restaurant;
console.log( name, categories, openingHours );

//Assigning new name to the object elements
let {name: restaurantName, openingHours:restaurantOpeningHours, categories: tags} = restaurant;
console.log(restaurantName, tags, restaurantOpeningHours );








//Without Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//With destructuring
const [x, y, z] = arr;
console.log(x, y, z);

//Destructing in the above object and its array
const [first, second] = restaurant.categories;
console.log(first, second);

//if you wat to skip the second element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//reversing an array
[main, secondary] = [secondary, main];
console.log(main, secondary);

//getting an array
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
[starter, mainCourse] = [mainCourse, starter];
console.log(starter, mainCourse);

//Lets take it to another level
//Nested array
const nested = [2, 4, [5, 6]];
//using destructuring assignments
const [firstArr, , secondArr] = nested;
console.log([firstArr, secondArr]);

//do the first third whole array
const [i, ,[d,r]] = nested;
console.log(i,d,r);

// //adding default values 
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

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
