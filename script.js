var number = 1

document.addEventListener('keydown', function(e) {
    
        if(e.keyCode > 64 && e.keyCode < 91) {
            document.getElementById('input'+number).value = e.key
            number = number+1
            console.log("+ current square " + number)
        }

        if(e.key.match('Backspace')) {
            number = number-1
            if(number == 0) {
                number = 1
            }
            document.getElementById('input'+number).value = ''
            console.log("- current square " + number)
        }

});



/*
function moveFocus(from, to) {
    var length = from.value.length;
    
    document.addEventListener('keydown', function(e) {
        if(e.code == 'Backspace') {
            from.value = ''
        }
    });

    if(length == 1) {
        document.getElementById(to).focus();
    }
    
}
*/