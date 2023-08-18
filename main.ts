basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    }
})
