// choosing a pivot: 'Choose either a random index for the pivot, the middle index of the partition, or (especially for longer partitions) the median of the first, middle and last element of the partition for the pivot'
// let pivotIndex = Math.floor((leftIndex + rightIndex) / 2);

const stableQuicksort = (collection) => {
  _quicksortHelper(collection, 0, collection.length - 1);
  return collection;
};

const _quicksortHelper = (collection, leftIndex, rightIndex) => {
  if(leftIndex < rightIndex){
    let partitionIndex = _partition(collection, leftIndex, rightIndex);

    _quicksortHelper(collection, leftIndex, partitionIndex - 1);
    _quicksortHelper(collection, partitionIndex + 1, rightIndex);
  }
};

const _partition = (collection, leftIndex, rightIndex) => {
  let pivotIndex = rightIndex;
  let indexOfFirstHigher = leftIndex;

  for(let i = leftIndex; i < rightIndex; i++){
    if(collection[i] < collection[pivotIndex]){ //if the item at 'i' is less than the item in the pivot index we want to move the element at 'i' below the element at indexOfFirstHigher (i.e. elements that are greater than the element at pivotIndex)
      _swap_values(collection, i, indexOfFirstHigher);
      indexOfFirstHigher++;
    }
  }
  _swap_values(collection, pivotIndex, indexOfFirstHigher);
  return indexOfFirstHigher;
};

const _swap_values = (collection, index1, index2) => {
  let tempValue = collection[index1];
  collection[index1] = collection[index2];
  collection[index2] = tempValue;
};

module.exports = stableQuicksort;
