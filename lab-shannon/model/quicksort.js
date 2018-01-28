// choose a pivot: 'Choose either a random index for the pivot, the middle index of the partition, or (especially for longer partitions) the median of the first, middle and last element of the partition for the pivot'

const stableQuicksort = (collection) => {}

const _quicksortHelper = (collection, leftIndex, rightIndex) => {
  while(leftIndex < rightIndex){
    let partitionIndex = _partition(collection, leftIndex, rightIndex);

    _quicksortHelper(items, leftIndex, partitionIndex - 1);
    _quicksortHelper(items, partitionIndex + 1, rightIndex);
  }
  // pick a pivot
  // sort into values < pivot on left & values > pivot on right
  // rinse and repeat
}
