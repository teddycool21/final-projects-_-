radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("Tsunami is here!")
        while (!(input.buttonIsPressed(Button.AB))) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(200)
        }
    } else {
        if (receivedNumber == 2) {
            basic.showString("Earthquake is here!")
            while (!(input.buttonIsPressed(Button.AB))) {
                music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(500)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(500)
            }
        } else {
            basic.showString("Tsunami and Earthquake are here!")
            while (!(input.buttonIsPressed(Button.AB))) {
                music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(1000)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(1000)
            }
        }
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.clearScreen()
})
input.onGesture(Gesture.EightG, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Tsunami is here!")
    Detector = 1
    radio.sendNumber(Detector)
})
input.onGesture(Gesture.FreeFall, function () {
	
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Tsunami and Earthquake are here!")
    Detector = 3
    radio.sendNumber(Detector)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Earthquake is here!")
    Detector = 2
    radio.sendNumber(Detector)
})
let Detector = 0
radio.setGroup(100)
radio.setTransmitPower(1)
Detector = 0
basic.forever(function () {
	
})
