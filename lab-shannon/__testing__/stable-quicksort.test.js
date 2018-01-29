const testingFunctions = require('./testingfunctions.js');
const stableQuicksort = require('../model/quicksort');

describe(`stable quicksort`, () => {
  test(`empty array`, () => {
    let collection = testingFunctions.generateCollection(0);
    expect(stableQuicksort(collection)).toEqual([]);
    expect(testingFunctions.isSorted(stableQuicksort(collection))).toBeTruthy();
  });
  test(`single element array`, () => {
    let collection = testingFunctions.generateCollection(1);
    expect(stableQuicksort(collection)).toEqual(collection);
    expect(testingFunctions.isSorted(stableQuicksort(collection))).toBeTruthy();
  });
  test(`small array`, () => {
    let collection = testingFunctions.generateCollection(5);
    expect(stableQuicksort(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
    expect(testingFunctions.isSorted(stableQuicksort(collection))).toBeTruthy();
  });
  test(`medium array`, () => {
    let collection = testingFunctions.generateCollection(100);
    expect(stableQuicksort(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
    expect(testingFunctions.isSorted(stableQuicksort(collection))).toBeTruthy();
  });
  test(`large array`, () => {
    let collection = testingFunctions.generateCollection(5000);
    expect(stableQuicksort(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
    expect(testingFunctions.isSorted(stableQuicksort(collection))).toBeTruthy();
  });
});
