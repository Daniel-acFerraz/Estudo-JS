/*======================================
Testing map()
======================================*/
const numbers = [1, 4, 5, 9, 14, 23]

const doubledNumbers = numbers.map(function(elem) {
    return elem * 2
})
//console.log(doubledNumbers)

//another way
function doubleNumbers(num) {
    return num * 2
}
//console.log(numbers.map(doubleNumbers))

//another way
//console.log(numbers.map(num => num*2))

/*========= another-example ==========*/
const fahrenheit = [0, 32, 45, 75, 80, 120]

function convertToCelsius(F) {
    return Math.round((F - 32) * 5/9)
}
//console.log(fahrenheit.map(convertToCelsius))

//another way

const celsius = fahrenheit.map(F => Math.round((F - 32) * 5/9))
//console.log(celsius)





/*======================================
Testing filter()
======================================*/
const someOtherNumbers = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

const filteredArray = someOtherNumbers.filter(repeatedNumbersOff)

function repeatedNumbersOff (elem, index, arr) {
    return arr.indexOf(elem) === index
}
//console.log(filteredArray)

//another way

//console.log(someOtherNumbers.filter((elem, index, arr) => arr.indexOf(elem) === index))





/*======================================
Testing reduce()
======================================*/