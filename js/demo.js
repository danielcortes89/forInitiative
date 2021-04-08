const mathQuestions = [
    {
        id: 1,
        body: "what is the pythagorean theorem?",
        options: [
            {
                id: 1,
                text: "a + b = c",
                letterValue: "a"
            },
            {
                id: 2,
                text: "a^2 + b^2 = c^2",
                letterValue: "b"
            },
            {
                id: 3,
                text: "2a + 2b = 2c",
                letterValue: "c"
            },
        ],
        answer: "b",
        usedIn: [
            'sdkfjsdkf', 'sdfsdfsdfsd', 'sdfsdfsdfdf'
        ]
    }, {
        id: 2,
        body: "Timmy has three basketballs......?",
        options: [
            {
                id: 4,
                text: "2 basketball",
                letterValue: "a"
            },
            {
                id: 5,
                text: "2 baskteballs and one softball",
                letterValue: "b"
            },
            {
                id: 6,
                text: "None of the above.",
                letterValue: "c"
            },
        ],
        answer: "c",
        usedIn: [
            'sdfsdfsdfsd', 'sdfsdfsdfdf'
        ]
    }
]

const questionsForQuiz = mathQuestions.filter(question => question.usedIn.contains('id of quiz we are looking for.'))