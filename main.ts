basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
