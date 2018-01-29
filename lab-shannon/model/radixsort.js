// enqueue all elements based on LSD (rightmost)
// dequeue all elements into array again in increasing order
// enqueue again based on next LSD (1 element to the left of the end)
// dequeue all elements into array again in increasing order
// repeat until you've gone through the same number of times as the length of the number with the greatest number of digits

const radixSort = (collection) => {
  let buckets = [[],[],[],[],[],[],[],[],[],[]];
  let mod = 10;
  let divisor = 1;
  let maxDigits = Math.max(...collection).toString().length;

  if(collection.length < 2){
    return collection;
  }

  for(let i = 0; i < maxDigits; i++, mod *= 10, divisor *= 10){
    for(let j = 0; j < collection.length; j++){
      let digit = Math.floor((collection[i] % (mod)) / divisor);  // get the next LSD of the element
      buckets[digit].push(collection[j]);  // put the number in the bucket corresponding to its LSD
    }
    // dequeue all of the elements from smallest to greatest
    let position = 0;
    for(let k = 0; k < buckets.length; k++){
      while(buckets[k].length > 0){
        collection[position] = (buckets[k].shift());
        position++;
      }
    }
  }
  return collection;
};

module.exports = radixSort;
