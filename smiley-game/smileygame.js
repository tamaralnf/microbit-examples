let sprite = game.createSprite(2, 4)
let x = 2
let y = 4
let misses = 0
game.setScore(0)

basic.forever(() => {
    let rand = Math.random(4)
    let dot = game.createSprite(rand, 0)

    for (let i = 0; i < 4; i++) {
        basic.pause(200)
        dot.changeYBy(1)
    }

    if (sprite.isTouching(dot)) {
        misses = 0
        game.addScore(1)
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
    } else {
        misses++
    }

    basic.pause(100)
    dot.delete()

    if (misses >= 3) {
        game.gameOver()
    }
})

input.onButtonPressed(Button.A, () => {
    if (x > 0) {
        sprite.changeXBy(-1)
        x--
    }
})

input.onButtonPressed(Button.B, () => {
    if (x < 4) {
        sprite.changeXBy(1)
        x++
    }
})
