// tenSameRandomQuestions(1,5, 'division')
//
// appendToDom(container)

let howMany =  confirm('Wanna do 20?')

if(howMany){
    alert('You got it')
    twentySameRandomQuestions(1,5, 'division')
// -MAKE ten objects (string, number and index) and push to container array

    appendToDom(container)
} else {
    alert('10 it is')
    tenSameRandomQuestions(1,5, 'division')
// -MAKE ten objects (string, number and index) and push to container array

    appendToDom(container)
}