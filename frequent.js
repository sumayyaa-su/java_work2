let arr = [2, 4, 6, 2, 4, 6, 6];

let frequency = {};

for (let i = 0; i < arr.length; i++) {
  if (frequency[arr[i]]) {
    frequency[arr[i]]++;
  } else {
    frequency[arr[i]] = 1;
  }
}

console.log(frequency);

