let x = 2
let y = 2
let bob = game.createSprite(x, y)

    input.onButtonPressed(Button.A, () => {
        if (y != 0) {
            bob.changeYBy(-1)
            y -= 1
        } else {
            bob.changeYBy(4)
            y = 4
        }
    })

    input.onButtonPressed(Button.B, () => {
        if (x != 0) {
            bob.changeXBy(-1)
            x -= 1
        } else {
            bob.changeXBy(4)
            x = 4
        }
    })
