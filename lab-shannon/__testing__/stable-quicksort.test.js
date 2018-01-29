const testingFunctions = require('./testingfunctions.js');
const stableQuicksort = require('../model/quicksort');

describe(`stable quicksort`, () => {
  test(`empty array`, () => {
    let collection = testingFunctions.generateCollection(0);
    expect(stableQuicksort(collection)).toEqual([]);
  });
  test(`single element array`, () => {
    let collection = testingFunctions.generateCollection(1);
    expect(stableQuicksort(collection)).toEqual(collection);
  });
  test(`small array`, () => {
    let collection = testingFunctions.generateCollection(5);
    expect(stableQuicksort(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
  });
  test(`medium array`, () => {
    let collection = testingFunctions.generateCollection(100);
    expect(stableQuicksort(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
  });
  test(`large array`, () => {
    let collection = testingFunctions.generateCollection(5000);
    expect(stableQuicksort(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
  });
});
