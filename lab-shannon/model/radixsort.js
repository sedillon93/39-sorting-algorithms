// enqueue all elements based on LSD (rightmost)
// dequeue all elements into array again in increasing order
// enqueue again based on next LSD (1 element to the left of the end)
// dequeue all elements into array again in increasing order
// repeat until you've gone through the same number of times as the length of the number with the greatest number of digits

const radixSort = (collection) => {
  let buckets = [[],[],[],[],[],[],[],[],[],[]];

  for(let i = 0; i < collection.length; i++){
    let lastDigit = collection[i] % 10;  // get the last digit of the element
    buckets[lastDigit].push(collection[i]);  // put the number in the bucket corresponding to its last digit
  }
};

module.exports = radixSort;
