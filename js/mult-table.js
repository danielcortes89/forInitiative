let howMany =  confirm('Wanna do 20?')

if(howMany){
    alert('You got it')
    twentySameRandomQuestions(1,5, 'mult')
// -MAKE ten objects (string, number and index) and push to container array

    appendToDom(container)
} else {
    alert('10 it is')
    tenSameRandomQuestions(1,5, 'mult')
// -MAKE ten objects (string, number and index) and push to container array

    appendToDom(container)
}

// - make DOM for each question and push it into DOM and Make submit

// 2 - MAKE A LOOP TO  CALL FUNCTION THEN PUSH TO CONTAINER

// let multiplicand = 1;
// let multiplier = 1;
// let index = 0;
// let numofTables = 2;
// let numOfCycles = (numofTables * 12) + 1;
//
// for(let i = 1;  i < numOfCycles; i++){
//
//
//     ++multiplier;
//     ++index;
//     if(multiplier > 12){
//         ++multiplicand;
//         multiplier = 1;
//     }
//
// }


