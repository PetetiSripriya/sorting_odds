// Sripriya Peteti


// In this file have written two functions. One with using sort() function another without using sorting function.

// With using the sort function
function sort_odd_numbers(arr) {
  const odd_numbers = arr.filter(num => num % 2 !== 0 && num !== 0);
  odd_numbers.sort((a, b) => a - b);

  let odd_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] !== 0) {
      arr[i] = odd_numbers[odd_index];
      odd_index++;
    }
  }

  return arr;
}



// Without using the sort function
function sort_odd_numbers(arr) {
  const odd_numbers = arr.filter(num => num % 2 !== 0 && num !== 0);
  for (let i = 0; i < odd_numbers.length - 1; i++) {
    for (let j = 0; j < odd_numbers.length - i - 1; j++) {
      if (odd_numbers[j] > odd_numbers[j + 1]) {
        const temp = odd_numbers[j];
        odd_numbers[j] = odd_numbers[j + 1];
        odd_numbers[j + 1] = temp;
      }
    }
  }

  let odd_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] !== 0) {
      arr[i] = odd_numbers[odd_index];
      odd_ndex++;
    }
  }

  return arr;
}





const sample_array = [4, 9, 0, 2, 7, 0, 3, 8, 5, 0, 1, 6];
console.log(sort_odd_numbers(sample_array));

