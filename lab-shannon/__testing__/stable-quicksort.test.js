let generateCollection = (n) => {
  let collection = [];
  for (let i = 0; i < n; i++){
    collection.push(Math.floor(Math.random() * 25));
  }
  return collection;
}
