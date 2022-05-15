input.onButtonPressed(Button.A, function () {
    BIRD.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    BIRD.change(LedSpriteProperty.Y, 1)
})
let BIRD: game.LedSprite = null
let obstacles: number[] = []
