'use strict'
// 1
let ageTable = document.querySelector('#age-table');
console.log(ageTable);

// 2
// first way
let labels = ageTable.getElementsByTagName('label'); //HTML Collection
console.log(labels);

// second way
// let labelsNode = ageTable.querySelectorAll('label'); //Node list
// console.log(labelsNode);


// 3
// first way
// let firstId = ageTable.firstElementChild.firstElementChild.firstElementChild;
// console.log(firstId);

// second way
let firstId = ageTable.children[0].children[0].children[0];
console.log(firstId);

// thirdway
// find and first methodes in jQuery
// let firstId=$(ageTable).find('td').first();
// console.log(firstId);

// 4
let search = document.querySelector('[name="search"]');
console.log(search);

// 5
let firstInput = search.children[0].children[0];
console.log(firstInput);

// 6
let lastInput = search.lastElementChild;
console.log(lastInput);

