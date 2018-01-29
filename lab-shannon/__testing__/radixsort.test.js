const testingFunctions = require('./testingfunctions.js');
const radix = require('../model/radixsort');

describe(`stable quicksort`, () => {
  test(`empty array`, () => {
    let collection = testingFunctions.generateCollection(0);
    expect(radix(collection)).toEqual([]);
    expect(testingFunctions.isSorted(radix(collection))).toBeTruthy();
  });
  test(`single element array`, () => {
    let collection = testingFunctions.generateCollection(1);
    expect(radix(collection)).toEqual(collection);
    expect(testingFunctions.isSorted(radix(collection))).toBeTruthy();
  });
  test(`small array`, () => {
    let collection = testingFunctions.generateCollection(5);
    expect(radix(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
    expect(testingFunctions.isSorted(radix(collection))).toBeTruthy();
  });
  test(`medium array`, () => {
    let collection = testingFunctions.generateCollection(100);
    expect(radix(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
    expect(testingFunctions.isSorted(radix(collection))).toBeTruthy();
  });
  test(`large array`, () => {
    let collection = testingFunctions.generateCollection(10000);
    expect(radix(collection)).toEqual(collection.sort(function(a,b){return a - b;}));
    expect(testingFunctions.isSorted(radix(collection))).toBeTruthy();
  });
});
