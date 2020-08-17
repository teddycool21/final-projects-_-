radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("T")
    } else {
        if (receivedNumber == 2) {
            basic.showString("E")
        } else {
            basic.showString("A")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Tsunami is here!")
    Detector = 1
    radio.sendNumber(Detector)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
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
