![cf](https://i.imgur.com/7v5ASc8.png) 39: Sorting Algorithms
======

# Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

# Requirements  
## Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.json** -- with all dependencies and dev-dependencies 
* **src/** -- containing the front end code

# Feature Tasks 
Pick two of the following feature tasks:

## 1 - Implement a Stable version of Quicksort
__This is a fairly common interview question__

The Quicksort implementation covered in class was not stable. Research and implement a stable version of the algorithm. 

## 2 - Mutate MergeSort's input array

The Merge-sort implementation covered in class didn't mutate the input array (it creates an output array). Implement a version of Mergesort that mutates the input array.

## 3 - Implement Radix Sort
__This is a fairly common interview question__

Research and implement [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort).

_This is an interesting problem since Radix Sort uses a different logic than the 'Divide and Conquer' approach covered in class_

## 4 - Implement Heap Sort

Research and implement [Heapsort](https://en.wikipedia.org/wiki/Heapsort).

*The implementation can be either stable or unstable*

## 5 - Implement a Quicksort/Insertion Sort Hybrid

Modify the quicksort implementation to use insertion sort if the length of the sorting set is less than 10 elements. 

## 6 - Implement Quicksort with Three-way partition 

The Quicksort implementation covered in class divided an array into two areas
*  Elements smaller than the pivot
*  Elements greater or equal than the pivot

Research and implement a version of Quicksort that divides the array into three areas:
* Elements smaller than the pivot
* Elements equal to the pivot
* Elements greater than the pivot

## Stretch Goals
Implement the remaining feature tasks

##  Documentation  
Write a description of the project in your README.md