# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @oaya/lotide`

**Require it:**

`const _ = require('@oaya/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)` : asserts the two arrays are equivalent

- `assertEqual(actual, expected)` : assert the two values are equivalent

- `assertObjectsEqual(actual, expected)` : assert the two object values are equivalent

- `countLetter(string)` : count number of charactors and return with the charactor and value as a object

- `countOnly(array, object)` : takes an array and an object, returns new object that contains the count array elements are in object

- `eqArrays(arr1, arr2)` : takes two array and compare them.

- `eqObjects(actual, expected)` : compare two objects are equal or not

- `findKey(obj, callback)` : check callback function condition and find the object and return the Key of the object

- `findKeyByValue(obj, value)` : find the object Key by given value in the object and return Key

- `flatten(array)` : takes an array and if there are nested array take the array out and return as a single array

- `head(arr)` : takes an array and return the first element of the array

- `letterPositions(sentence)` : takes an string and return object with letter positions

- `map(array ,callback)` : takes array and return a new array with values with callback condition applied to each value

- `middle(array)` : takes array and return the middle of the value of array

- `tail(array)` : takes array and reutn the value of without the first element

- `takeUntil(array ,callback)` : takes an array and apply the callback condition to each element. when the condition become falsethy place the element in to new array when become truthy, stop excuteing and return the new array.

- `without(source, itemToRemove) ` : takes two array and remove the item from the first array that match with second array and return the the remainning element in the new array.
