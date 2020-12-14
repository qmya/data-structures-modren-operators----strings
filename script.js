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
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Toronto, Ontario',
  mainIndex: 2,
  starterIndex: 1,
});
//Destructuring objects we use {}
//we will write the exact name as in the object
//no need to skip any element
let { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

//Assigning new name to the object elements
let {
  name: restaurantName,
  openingHours: restaurantOpeningHours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, restaurantOpeningHours);

//default values
const { menu = [], starterMenu = (starter = []) } = restaurant;
console.log(menu, starterMenu);

//Mutating variable
let f = 111;
let g = 999;
const obj = { f: 23, g: 27, h: 14 };
({ f, g } = obj);
console.log({ f, g });

//Without Destructuring array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//With destructuring array
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
const [i, , [d, r]] = nested;
console.log(i, d, r);

//nested objects destructuring
console.log(openingHours);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//Spread operators
const arrayA = [7, 8, 9];
const newArr = [arrayA[0], arrayA[1], arrayA[2], 10, 11, 12];
console.log(newArr);
//Doing the same process here with spread operator

const newArrUsingSpreadOperator = [...arrayA, 10, 11, 12];
console.log(newArrUsingSpreadOperator);
console.log(...newArrUsingSpreadOperator); //If you want to make the elements of array seperate you can also do like this

//lets add a new food item to menu of resturant object
const newMenuAdding = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenuAdding);
console.log(...newMenuAdding);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Joining two arrays or more
//we can use the same technique
//Create a menu which contain the main menu and the starter menu

const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenu);
console.log(...newMenu);

//Spread operator works on all so called iterables
//What is iterable?
//Iterable: arrays , strings , sets but not objects
// It means we can use Iterables on strings too
const str = 'Qandeel';
console.log(...str);
const letters = [...str, '', "'s"];
console.log(letters);
console.log(...letters);
