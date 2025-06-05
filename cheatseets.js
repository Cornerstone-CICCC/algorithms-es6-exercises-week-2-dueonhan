const arr = [1, 3, 2, 5, 4]

// filter
const filteredArr = arr.filter(item => item > 3)
console.log("filter", filteredArr)

// map
const mappedArr = arr.map(item => item * 2)
console.log("map", mappedArr)

// reduce
const reducedArr = arr.reduce((acc, item) => acc + item, 0)
console.log("reduce", reducedArr)

// find
const foundItem = arr.find(item => item === 3)
console.log("find", foundItem)

// every
const everyItem = arr.every(item => item > 0)
console.log("every", everyItem)

// some
const someItem = arr.some(item => item > 3)
console.log("some", someItem)

// sort
arr.sort()
console.log("sort", arr)

// reverse
const reversedArr = arr.reverse()
console.log("reverse", reversedArr)