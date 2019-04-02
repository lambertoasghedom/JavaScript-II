// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'xbox'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
  /* basically...
    - 'cb' is now function (arr) {...}
    - 'arr' is now the items array passed into the first parameter 'arr'
    - which returns function(items.length)
  */
}

getLength(items, function (arr) {
  console.log(arr);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items)
}

last(items, function () {
  console.log(items[3]);
});



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

const add = function (x, y) {
  return x + y;
}

console.log(sumNums(4, 2, add));



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const product = function (x, y) {
  return x * y;
}

console.log(multiplyNums(4, 2, product));


function contains(item, list, cb) {
  console.log(item, list)
  // contains checks if an item is present inside of the given array/list.
  return cb(item, list);
  // Pass true to the callback if it is, otherwise pass false.
}

contains('xbox', items, function () {
  if (items.includes('xbox')) {
    console.log('true') ;
  } else {
    console.log ('false');
  }
});



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}