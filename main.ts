let list: number[] = []
input.onButtonPressed(Button.A, function () {
    BIRD.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    BIRD.change(LedSpriteProperty.Y, 1)
})
let ticks = 0
let BIRD: game.LedSprite = null
BIRD = game.createSprite(0, 2)
BIRD.set(LedSpriteProperty.Blink, 300)
let obstacles: game.LedSprite[] = []
let emptyObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
for (let value of list) {
	
}
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, 1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == BIRD.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == BIRD.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
