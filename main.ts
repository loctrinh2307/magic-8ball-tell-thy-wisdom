input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(0, 5)
    if (randomNumber == 1) {
        basic.showString("YES")
    } else if (randomNumber == 2) {
        basic.showString("NO")
    } else if (randomNumber == 3) {
        basic.showString("TRY AGAIN")
    } else if (randomNumber == 4) {
        basic.showString("DEFINATELY")
    } else if (randomNumber == 5) {
        basic.showString("DON'T COUNT ON IT")
    } else {
        basic.showString("I DON'T KNOW")
    }
    basic.showNumber(8)
})
let randomNumber = 0
basic.showString("ASK A QUESTION")
basic.showNumber(8)
