radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("T")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
        while (receivedNumber == 1) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(200)
        }
    } else {
        if (receivedNumber == 2) {
            basic.showString("E")
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
            while (receivedNumber == 2) {
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(500)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(500)
            }
        } else {
            basic.showString("A")
            music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
            while (receivedNumber == 3) {
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(1000)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(1000)
            }
        }
    }
})
input.onGesture(Gesture.EightG, function () {
    radio.sendString("Tsunami and Earthquake are here!")
    Detector = 3
    radio.sendNumber(Detector)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendString("Tsunami is here!")
    Detector = 1
    radio.sendNumber(Detector)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
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
