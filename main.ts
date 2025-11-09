let interruptor = 0
basic.forever(function () {
    interruptor = pins.digitalReadPin(DigitalPin.P1)
    if (interruptor == 0) {
        serial.writeValue("cajita cerrada ", 0)
        music.stopAllSounds()
    } else {
        serial.writeValue("Cajita abierta ", 1)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(10000)
})
