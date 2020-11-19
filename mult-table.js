let table = [
    {
        question: '1 x 1 : ',
        answer: 1,
        id: 0
    }, {
        question: '1 x 2 : ',
        answer: 2,
        id: 1
    }, {
        question: '1 x 3 : ',
        answer: 3,
        id: 2
    }, {
        question: '1 x 4 : ',
        answer: 4,
        id: 3
    }, {
        question: '1 x 5 : ',
        answer: 5,
        id: 4
    }, {
        question: '1 x 6 : ',
        answer: 6,
        id: 5
    }, {
        question: '1 x 7 : ',
        answer: 7,
        id: 6
    }, {
        question: '1 x 8 : ',
        answer: 8,
        id: 7
    }, {
        question: '1 x 9 : ',
        answer: 9,
        id: 8
    }, {
        question: '1 x 10 : ',
        answer: 10,
        id: 9
    }, {
        question: '1 x 11 : ',
        answer: 11,
        id: 10
    }, {
        question: '1 x 2 : ',
        answer: 12,
        id: 11
    }, // STARTING 2s
    {
        question: '2 x 1 : ',
        answer: 2,
        id: 12
    }, {
        question: '2 x 2 : ',
        answer: 4,
        id: 13
    }, {
        question: '2 x 3 : ',
        answer: 6,
        id: 14
    }, {
        question: '2 x 4 : ',
        answer: 8,
        id: 15
    }, {
        question: '2 x 5 : ',
        answer: 10,
        id: 16
    }, {
        question: '2 x 6 : ',
        answer: 12,
        id: 17
    }, {
        question: '2 x 7 : ',
        answer: 14,
        id: 18
    }, {
        question: '2 x 8 : ',
        answer: 16,
        id: 19
    }, {
        question: '2 x 9 : ',
        answer: 18,
        id: 20
    }, {
        question: '2 x 10 : ',
        answer: 20,
        id: 21
    }, {
        question: '2 x 11 : ',
        answer: 21,
        id: 22
    }, {
        question: '2 x 12 : ',
        answer: 24,
        id: 23
    }, // STARTING 3
]

// GOALS:
// 1 - Make function to create question object.
// 2 - Make loop to call function then push to container

// 1- MAKE FUNCTION TO CREATE QUESTION OBJECT

const makeMultiplicationQuestion = (multiplicand, multiplier, index) => {
    let question = `${multiplicand} * ${multiplier} : `;
    let answer = multiplicand * multiplier;
    return {
        question,
        answer,
        index
    }
}

const makeAdditionQuestion = (first, second, index) => {
    let question = `${first} + ${second} : `;
    let answer = first + second;
    return {
        question,
        answer,
        index
    }
}

const makeSubtractionQuestion = (minuend, subtrahend, index) => {
    let question = `${minuend} - ${subtrahend} : `;
    let answer = minuend - subtrahend;
    return {
        question,
        answer,
        index
    }
}

// console.log(makeAdditionQuestion(5,6, 1))

// 2 - MAKE A LOOP TO  CALL FUNCTION THEN PUSH TO CONTAINER

let container = []

let multiplicand = 1;
let multiplier = 1;
let index = 0;
let numofTables = 2;
let numOfCycles = (numofTables * 12) + 1;

for(let i = 1;  i < numOfCycles; i++){
    // container.push(makeMultiplicationQuestion(multiplicand, multiplier, index))
    container.push(makeSubtractionQuestion(multiplicand, multiplier, index))

    ++multiplier;
    ++index;
    if(multiplier > 12){
        ++multiplicand;
        multiplier = 1;
    }

}
console.log(container)



