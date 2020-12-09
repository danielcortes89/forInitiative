let container = []

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

const makeDivisionQuestion = (dividend, divisor, index) => {
    let question = `${dividend} / ${divisor} : `;
    let answer = dividend / divisor;
    return {
        question,
        answer,
        index
    }
}

let functions = ['mult', 'divide', 'add', 'sub']

const twentySameRandomQuestions = (lowest, highest, operator) => {
    let range = highest - lowest
    for(let i = 0; i < 20; i++){
        let randomFirst = Math.floor(Math.random() * range ) + lowest
        let randomSecond = Math.floor(Math.random() * 12) + 1

        container.push(makeMultiplicationQuestion(randomFirst, randomSecond, i))
    }
}

const tenSameRandomQuestions = (lowest, highest, operator) => {
    let range = highest - lowest
    for(let i = 0; i < 10; i++){
        let randomFirst = Math.floor(Math.random() * range ) + lowest
        let randomSecond = Math.floor(Math.random() * 12) + 1

        container.push(makeMultiplicationQuestion(randomFirst, randomSecond, i))
    }
}

// twentySameRandomQuestions(1, 2);
tenSameRandomQuestions(1, 5)
console.log(container);

// 2 - MAKE A LOOP TO  CALL FUNCTION THEN PUSH TO CONTAINER

let multiplicand = 1;
let multiplier = 1;
let index = 0;
let numofTables = 2;
let numOfCycles = (numofTables * 12) + 1;

for(let i = 1;  i < numOfCycles; i++){
    // container.push(makeMultiplicationQuestion(multiplicand, multiplier, index))
    // container.push(makeDivisionQuestion(multiplicand, multiplier, index))

    ++multiplier;
    ++index;
    if(multiplier > 12){
        ++multiplicand;
        multiplier = 1;
    }

}
// console.log(container)

let makeQuestionDisplay = (question) => {
    let container = document.createElement("div")
    let head = document.createElement("h3")
    let input = document.createElement("input")

    // container.innerText = question.question
    head.innerText = question.question
    head.setAttribute("class", "question-display")
    input.setAttribute("type", "text")
    container.appendChild(head)
    container.appendChild(input)

    return container
}



