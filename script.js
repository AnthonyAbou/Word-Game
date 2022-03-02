var number = 0
var rowNumber = 1
var word = "iodin"
var answer = ["i","o","d","i","n"]
var userAnswer = []

document.addEventListener('keydown',keyFunction)
function keyFunction(e) {
    var square = document.getElementById('row' + rowNumber).getElementsByClassName('userinput')

    if(e.keyCode > 64 && e.keyCode < 91) {
        if(userAnswer.length == 5) {
            return
        }
        square[number].value = e.key
        number = number + 1
        userAnswer.push(e.key)
        console.log(userAnswer)
    }

    if(e.key.match('Backspace')) {
        number = number - 1
        if(number == -1) {
            number = 0
        }
        square[number].value = ''
        userAnswer.splice(-1,1)
    }

    if(e.key.match('Enter')) {
        checkAns()
    }
}

function checkAns() {
    var square = document.getElementById('row' + rowNumber).querySelectorAll('.word-squares')

    if(userAnswer.length != 5) {
        return
    }

    if(answer.toString() === userAnswer.toString().toLowerCase()) {
        document.removeEventListener('keydown', keyFunction)
    }

    for(let i = 0; i < answer.length; i++) {
        if(userAnswer[i].toLowerCase() == answer[i]) {
            answer[i] = " "
            square[i].style.backgroundColor = "green"
        }
    }

    for(let i = 0; i < answer.length; i++) {
        if(answer.includes(userAnswer[i])) {
            var a = answer.indexOf(userAnswer[i])
            if(square[i].style.backgroundColor != "green") {
                answer[a] = " "
                square[i].style.backgroundColor = '#ebe117' 
            }
        }
    }
    
    userAnswer = []
    answer = []
    number = 0
    rowNumber = rowNumber + 1
    generateAnswer()
}

function generateAnswer() {
    answer = word.split('')
}