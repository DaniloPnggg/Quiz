const questions = [
    {
        question: `Quem é o vocalista do opeth?`,
        answers: [
            {text: `Mikael Akerfeldt`, correct: true},
            {text: `Ian Curtis`, correct: false},
            {text: `Thom Yorke`, correct: false},
            {text: `James Labrie`, correct: false},
        ]
    },
    {
        question: `Qual foi o primeiro nome da banda Joy Division?`,
        answers: [
            {text: `Twin Heads`, correct: false},
            {text: `New Order`, correct: false},
            {text: `Warsaw`, correct: true},
            {text: `Twenty For Hours`, correct: false}
        ]
    },
    {
        question: `Qual é o álbum de estreia do Dream Theater?`,
        answers: [
            {text: `Images and Words`, correct: false},
            {text: `Awake`, correct: false},
            {text: `When Dream and Day Unite`, correct: true},
            {text: `Metropolis Pt. 2: Scenes from a Memory`, correct: false}
        ]
    },
    {
        question: `Em que ano foi lançado o álbum "Blackwater Park" do Opeth?`,
        answers: [
            {text: `1998`, correct: false},
            {text: `2001`, correct: true},
            {text: `2003`, correct: false},
            {text: `2005`, correct: false}
        ]
    },
    {
        question: `Qual das bandas abaixo foi uma das pioneiras do metal progressivo?`,
        answers: [
            {text: `Queensrÿche`, correct: true},
            {text: `Haken`, correct: false},
            {text: `Ayreon`, correct: false},
            {text: `Death`, correct: false}
        ]
    },
    {
        question: `Qual é o álbum mais vendido do Metallica?`,
        answers: [
            {text: `Master of Puppets`, correct: false},
            {text: `Ride the Lightning`, correct: false},
            {text: `...And Justice for All`, correct: false},
            {text: `Metallica (The Black Album)`, correct: true}
        ]
    },
    {
        question: `Qual destes álbuns do Opeth é mais voltado para o rock progressivo do que para o Death Metal?`,
        answers: [
            {text: `Still life`, correct: false},
            {text: `Ghost Reveries`, correct: false},
            {text: `Heritage`, correct: true},
            {text: `My Arms, Your Hearse`, correct: false},
            {text: `Deliverance to Damnation KKKKKKKKK`, correct: false},
        ]
    },
    {
        question: `Qual banda é considerada a criadora do gênero metal?`,
        answers: [
            {text: `Led Zeppelin`, correct: false},
            {text: `Deep Purple`, correct: false},
            {text: `Black Sabbath`, correct: true},
            {text: `Iron Maiden`, correct: false}
        ]
    },
    {
        question: `Qual álbum do Opeth é conhecido por sua combinação de death metal e rock progressivo e foi lançado em 2001?`,
        answers: [
            {text: `Blackwater Park`, correct: true},
            {text: `Deliverance`, correct: false},
            {text: `to damnation KKKKKKKKKK`, correct: false},
            {text: `Still life`, correct: false}
        ]
    },
    {
        question: `Qual é o nome do tecladista original do Dream Theater, que deixou a banda após o álbum "Images and Words"?`,
        answers: [
            {text: `Kevin Moore`, correct: true},
            {text: `Derek Sherinian`, correct: false},
            {text: `Jordan Rudess`, correct: false},
            {text: `Richard Barbieri`, correct: false}
        ]
    },
    {
        question: `Qual é o álbum conceitual do Yes lançado em 1972, que é amplamente considerado um marco do rock progressivo?`,
        answers: [
            {text: `Tales from Topographic Oceans`, correct: false},
            {text: `Fragile`, correct: false},
            {text: `The Yes Album`, correct: false},
            {text: `Close to the Edge`, correct: true}
        ]
    }, {
        question: `Qual é o nome do álbum de 1976 do Rush, que é um álbum conceitual inspirado em ficção científica?`,
        answers: [
            {text: `2112`, correct: true},
            {text: `Hemispheres`, correct: false},
            {text: `Caress of Steel`, correct: false},
            {text: `Fly by Night`, correct: false}
        ]
    },
    {
        question: `Em qual álbum do Opeth a banda começou a incorporar elementos de folk, jazz e rock clássico em sua música, marcando uma mudança significativa em seu estilo?`,
        answers: [
            {text: `Heritage`, correct: true},
            {text: `Ghost Reveries`, correct: false},
            {text: `Watershed`, correct: false},
            {text: `Sorceress`, correct: false}
        ]
    },
    {
        question: `Qual é o nome da suíte épica do Dream Theater, dividida em oito partes e presente no álbum "Metropolis Pt. 2: Scenes from a Memory"?`,
        answers: [
            {text: `The Dance of Eternity`, correct: false},
            {text: `Finally Free`, correct: false},
            {text: `Overture 1928`, correct: false},
            {text: `The Spirit Carries On`, correct: true}
        ]
    },
    {
        question: `Qual membro original do Yes também tocou com a banda Asia?`,
        answers: [
            {text: `Steve Howe`, correct: true},
            {text: `Chris Squire`, correct: false},
            {text: `Jon Anderson`, correct: false},
            {text: `Rick Wakeman`, correct: false}
        ]
    },
    {
        question: `Qual álbum do Opeth é um álbum duplo, onde um disco é predominantemente acústico e o outro é elétrico, lançado em 2002?`,
        answers: [
            {text: `Deliverance & Damnation`, correct: true},
            {text: `My Arms, Your Hearse`, correct: false},
            {text: `Morningrise`, correct: false},
            {text: `Blackwater Park`, correct: false}
        ]
    },
    {
        question: `Qual é o álbum de estreia do Pink Floyd que marcou o início do rock progressivo psicodélico em 1967?`,
        answers: [
            {text: `The Piper at the Gates of Dawn`, correct: true},
            {text: `Meddle`, correct: false},
            {text: `Dark Side of the Moon`, correct: false},
            {text: `Wish You Were Here`, correct: false}
        ]
    },
    {
        question: `Qual é o álbum conceitual do Genesis, lançado em 1974, que é considerado um dos mais importantes do rock progressivo?`,
        answers: [
            {text: `Selling England by the Pound`, correct: false},
            {text: `The Lamb Lies Down on Broadway`, correct: true},
            {text: `Foxtrot`, correct: false},
            {text: `Nursery Cryme`, correct: false}
        ]
    },
    {
        question: `Qual banda de rock progressivo é conhecida por seu álbum de estreia autointitulado lançado em 1969, que incluía a faixa épica "21st Century Schizoid Man"?`,
        answers: [
            {text: `King Crimson`, correct: true},
            {text: `Emerson, Lake & Palmer`, correct: false},
            {text: `Gentle Giant`, correct: false},
            {text: `Camel`, correct: false}
        ]
    },
    {
        question: `Qual é o álbum duplo do The Who, lançado em 1969, que é um marco do rock conceitual?`,
        answers: [
            {text: `Quadrophenia`, correct: false},
            {text: `Tommy`, correct: true},
            {text: `The Who Sell Out`, correct: false},
            {text: `Who's Next`, correct: false}
        ]
    },
    {
        question: `Qual banda de rock progressivo lançou o álbum "Leftoverture" em 1976, contendo o sucesso "Carry on Wayward Son"?`,
        answers: [
            {text: `Kansas`, correct: true},
            {text: `Asia`, correct: false},
            {text: `Marillion`, correct: false},
            {text: `Renaissance`, correct: false}
        ]
    },

    // Perguntas sobre rock em geral
    {
        question: `Qual é o nome do álbum de estreia dos Beatles, lançado em 1963?`,
        answers: [
            {text: `Please Please Me`, correct: true},
            {text: `With the Beatles`, correct: false},
            {text: `A Hard Day's Night`, correct: false},
            {text: `Help!`, correct: false}
        ]
    },
    {
        question: `Qual banda lançou o álbum "Led Zeppelin IV" em 1971, que inclui a famosa faixa "Stairway to Heaven"?`,
        answers: [
            {text: `Led Zeppelin`, correct: true},
            {text: `The Rolling Stones`, correct: false},
            {text: `The Who`, correct: false},
            {text: `Black Sabbath`, correct: false}
        ]
    },
    {
        question: `Qual é o nome do guitarrista que se tornou famoso com a banda The Jimi Hendrix Experience?`,
        answers: [
            {text: `Jimi Hendrix`, correct: true},
            {text: `Eric Clapton`, correct: false},
            {text: `Jimmy Page`, correct: false},
            {text: `Jeff Beck`, correct: false}
        ]
    },
    {
        question: `Qual álbum do Queen, lançado em 1975, apresenta a épica canção "Bohemian Rhapsody"?`,
        answers: [
            {text: `A Night at the Opera`, correct: true},
            {text: `Sheer Heart Attack`, correct: false},
            {text: `News of the World`, correct: false},
            {text: `The Game`, correct: false}
        ]
    },
    {
        question: `Qual é o nome do álbum de estreia do The Rolling Stones, lançado em 1964?`,
        answers: [
            {text: `The Rolling Stones`, correct: true},
            {text: `12 X 5`, correct: false},
            {text: `Out of Our Heads`, correct: false},
            {text: `Aftermath`, correct: false}
        ]
    }

]

const questionElement = document.getElementById(`question`)
const answerButtons = document.getElementById(`answer-buttons`)
const nextButton = document.getElementById(`next-btn`)

let currentQuestionindex = 0
let score = 0

function showQuestionAndAnswer() {
    resetState()
    const currentQuestion = questions[currentQuestionindex]
    const questionNo = currentQuestionindex + 1
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement(`button`)
        button.innerText = answer.text
        button.classList.add(`btn`)
        answerButtons.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener(`click`, selectedAnswer)

    })

}

function startQuiz() {
    currentQuestionindex = 0
    score = 0
    showQuestionAndAnswer()
    nextButton.innerText = `Next`
}

function selectedAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === `true`

    if (isCorrect) {
        selectedBtn.classList.add(`correct`)
        score++
    } else {
        selectedBtn.classList.add(`incorrect`)
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true

        if (button.dataset.correct === `true`) {
            button.classList.add(`correct`)
        }
    })
        nextButton.style.display = `block`
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showScore() {
    resetState()
    questionElement.innerText = `You score ${score} out of ${questions.length}`
    nextButton.innerText = `Play Again`
    nextButton.style.display = `block`
}

function nextButtonFn() {
    currentQuestionindex++
    if (currentQuestionindex < questions.length) {
        showQuestionAndAnswer()
    } else {
        showScore()
    }
}

nextButton.addEventListener(`click`, () => {
    if (currentQuestionindex < questions.length) {
        nextButtonFn()
    } else {
        startQuiz()
    }
})

startQuiz()
