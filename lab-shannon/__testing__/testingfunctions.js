export const generateCollection = (n) => {
  let collection = [];
  for (let i = 0; i < n; i++){
    collection.push(Math.floor(Math.random() * 25));
  }
  return collection;
}

export const isSorted = (collection) => {
  if (collection.length <= 1){
    return true;
  }else if(collection.length > 1){
    for (let i = 0; i < collection.length - 1; i++){
      if(collection[i] > collection[i+1]){
        return false;
      }
    }
    return true;
  }
}
