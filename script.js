var number = 0
var rowNumber = 1
var word = "iodin"
var answer = ["i","o","d","i","n"]
var userAnswer = []

document.addEventListener('keydown', function(e) {

    if(e.keyCode > 64 && e.keyCode < 91) {
        if(userAnswer.length == 5) {
            return
        }
        document.getElementById('row' + rowNumber).getElementsByClassName('userinput')[number].value = e.key
        number = number + 1
        userAnswer.push(e.key)
    }

    if(e.key.match('Backspace')) {
        number = number - 1
        if(number == -1) {
            number = 0
        }
        document.getElementById('row' + rowNumber).getElementsByClassName('userinput')[number].value = ''
        userAnswer.splice(-1,1)
    }

    if(e.key.match('Enter')) {
        checkAns()
    }
});

function checkAns() {
    var square = document.getElementById('row' + rowNumber).querySelectorAll('.word-squares')

    if(userAnswer.length != 5) {
        return
    }

    for(let i = 0; i < answer.length; i++) {
        if(userAnswer[i] == answer[i]) {
            answer[i] = " "
            square[i].style.backgroundColor = "green"
        }
    }
    console.log("before yellow " + answer)

    for(let i = 0; i < answer.length; i++) {
        if(answer.includes(userAnswer[i])) {
            var a = answer.indexOf(userAnswer[i])
            if(square[i].style.backgroundColor != "green") {
                answer[a] = " "
                square[i].style.backgroundColor = "yellow"   
            }
        }
    }
    
    console.log("after yellow " + answer)
    userAnswer = []
    answer = []
    number = 0
    rowNumber = rowNumber + 1
    generateAnswer()
}

function generateAnswer() {
    answer = word.split('')
}