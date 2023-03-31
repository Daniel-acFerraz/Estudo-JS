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

const reducedNumbers = someOtherNumbers.reduce((numAnterior, numAtual) => numAnterior + numAtual, 0)
//console.log(reducedNumbers)

//another way

const rocket = [
    {country: 'Russia', launches: 32},
    {country: 'Eua', launches: 23},
    {country: 'China', launches: 21}, 
    {country: 'Japan', launches: 13}
]

const totalLaunches = rocket.reduce((totalLancamentos, countries) => totalLancamentos + countries.launches, 0)
//console.log(totalLaunches)





/*======================================
Testing every()
======================================*/

//testando se todos os numeros do array são maiores que 10
//every retorna um valor booleano
const anotherArray = [12, 5, 8, 130, 44]

//console.log(anotherArray.every(elem => elem > 10))

//another way
//consultar se todas as pessoas são maiores de idade
const galera = [
    {id: 12, name: "Frederico", age: 8},
    {id: 47, name: "Francisca", age: 7},
    {id: 77, name: "Ramon", age: 48},
    {id: 85, name: "Zenon", age: 52}
]

//console.log(galera.every(pessoa => pessoa.age >= 18))





/*======================================
Testing some()
======================================*/

//some() é a mesma coisa que o every, porem basta 1 elemento atender os parametros ao invés de todos 





/*======================================
Testing find()
======================================*/
//retorna O PRIMEIRO valor dentro do array que satisfaça o teste

const pizzas = [
    'mussarela',
    'calabresa',
    'portuguesa',
    'marguerita'
]

const foundPizza = pizzas.find( pizza => pizza.startsWith('m'))
//console.log(foundPizza)

//another way

const fruits = [
    {name: 'jaca', quantity: 2},
    {name: 'banana', quantity: 0},
    {name: 'cereja', quantity: 5}
]

const foundFruit = fruits.find(fruit => fruit.name === "cereja")
//console.log(foundFruit)





/*======================================
Testing includes()
======================================*/
//testar se o array inclui o numero 2
//console.log([1, 2, 5].includes( 2 ))

//another way
//testar se tal pessoa esta no grupo

const people = ['Adamastor', 'Joana', 'Mauricio', 'Lalau']

//console.log(people.includes('Lalau'))

//another way

const myPeople = [
    {id: 11, name: 'Adamastor', age: 23, group: 'editor'},
    {id: 47, name: 'Joana', age: 28, group: 'user'},
    {id: 85, name: 'Mauricio', age: 34, group: 'editor'},
    {id: 97, name: 'Lalau', age: 74, group: 'admin'},
]

const filteredUsers = myPeople.filter(p => p.name.includes("au"))
//console.log(filteredUsers)





/*==============================================================================
API REAL!!!
==============================================================================*/

async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')

    return response.json()
}

//getPeople().then(data => console.log(data))

//somente mulheres

getPeople().then(data => {
    const people = data.results

    //console.log(people.filter(p => p.gender === "female"))
})

//
getPeople().then(data => {
    const result = data.results.filter(p => p.dob.age >= 30)
    const people = []

    for( let p of result) {
        people.push({
            "Nome": `${p.name.first} ${p.name.last}`,
            "Sexo": `${p.gender}`,
            "Idade": `${p.dob.age}`
        })
    }
    console.log(people)
    console.table(people)
})

