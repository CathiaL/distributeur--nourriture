function nourrir () {
    servos.P0.setAngle(40)
    basic.pause(1000)
    servos.P0.setAngle(10)
    basic.pause(30000)
}
basic.forever(function () {
    basic.pause(86400000)
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # # #
        # . # # .
        . . . . .
        `)
    servos.P0.setAngle(0)
    basic.pause(1000)
    nourrir()
    nourrir()
    nourrir()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    servos.P0.stop()
})
