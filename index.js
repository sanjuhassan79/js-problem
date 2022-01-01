let vaxTrail = [
    {
        "name": "Mark",
        "age": 20,
        "temperature": 97
    },
    {
        "name": "Anderson",
        "age": 30,
        "temperature": 98
    },
    {
        "name": "Zark",
        "age": 31,
        "temperature": 99
    },
    {
        "name": "Tark",
        "age": 41,
        "temperature": 98
    },
    {
        "name": "Dark",
        "age": 24,
        "temperature": 100
    }
]

let a = [];
let b = [];
let c = [];
let d = [];


// console.log('test > ', array_test)

let checkTemp = (element) => {
    if (element.temperature < 100) {
        checkAge(element)
    }
    else {
        d.push(element)
    }
}

let checkAge = (element) => {
    if (element.age > 19 && element.age < 31) {
        a.push(element)
    }
    else if (element.age > 30 && element.age < 41) {
        b.push(element)
    }
    else if (element.age > 40 && element.age < 51) {
        c.push(element)
    }
}

vaxTrail.forEach(element => checkTemp(element));

console.log('final answer a :', a)
console.log('final answer b :', b)
console.log('final answer c :', c)
console.log('final answer d :', d)