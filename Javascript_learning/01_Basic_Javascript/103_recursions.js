function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n-1) + arr[n-1];
    }
    // Only change code above this line
  }

// result = sum([1], 0);
// result = sum([2, 3, 4], 1);
result = sum([2, 3, 4, 5], 3)

console.log(result);