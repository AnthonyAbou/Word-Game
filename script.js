var number = 0
var rowNumber = 1
var answer = ["t","h","i","n","g"]
var userAnswer = []

document.addEventListener('keydown', function(e) {

    if(e.keyCode > 64 && e.keyCode < 91) {
        if(userAnswer.length == 5) {
            return
        }
        document.getElementById('row' + rowNumber).getElementsByClassName('userinput')[number].value = e.key
        number = number + 1
        userAnswer.push(e.key)
        console.log("+ current square " + number)
    }

    if(e.key.match('Backspace')) {
        number = number - 1
        if(number == -1) {
            number = 0
        }
        document.getElementById('row' + rowNumber).getElementsByClassName('userinput')[number].value = ''
        userAnswer.splice(-1,1)
        console.log("- current square " + number)
    }

    if(e.key.match('Enter')) {
        console.log(userAnswer)
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
            square[i].style.backgroundColor = "green"
        }
        else if(answer.includes(userAnswer[i])) {
            square[i].style.backgroundColor = "yellow"
        }
    }
    userAnswer = []
    number = 0
    rowNumber = rowNumber + 1
}