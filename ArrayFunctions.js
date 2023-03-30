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