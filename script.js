/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
console.log("Challenge1");
// Challenge Name: Buggy Code (Part 1)
// Challenge Difficulty: Very Easy
function Cube(a) {
  return a * a * a;
}
console.log(Cube(3));
console.log(Cube(5));
console.log(Cube(10));

console.log("Challenge2");
// Challenge Name: Is it Time for Milk and Cookies?
// Challenge Difficulty: Easy
function timeForMilkAndCookies(year, month, day) {
  if (year > 0 && month == 11 && day == 24) {
    return true;
  } else {
    return false;
  }
}
console.log(timeForMilkAndCookies(2013, 11, 24));
console.log(timeForMilkAndCookies(2013, 0, 23));
console.log(timeForMilkAndCookies(3000, 11, 24));
console.log(timeForMilkAndCookies(0, 11, 24));

console.log("Challenge3");
// Challenge Name: Find the Second Largest Number
// Challenge Difficulty: Medium
function max(a) {
  var FirstLargest = a[0];
  var SecondLargest = a[1];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > FirstLargest) {
      SecondLargest = FirstLargest;
      FirstLargest = a[i];
    } else if (a[i] > SecondLargest && a[i] < FirstLargest) {
      SecondLargest = a[i];
    }
  }
  return SecondLargest;
}

console.log(max([10, 40, 30, 20, 50]));
console.log(max([25, 143, 89, 13, 105]));
console.log(max([54, 23, 11, 17, 10]));
console.log(max([18, 2]));

console.log("Challenge4");
// Challenge Name: Seven Boom!
// Challenge Difficulty: Hard
function Seven(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].toString().includes("7")) {
      return "Boom!";
    }
  }

  return "There's no Seven in the array";
}

console.log(Seven([1, 2, 3, 4, 5, 6, 7]));
console.log(Seven([8, 6, 33, 100]));
console.log(Seven([2, 55, 60, 97, 86]));
