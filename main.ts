bluetooth.onBluetoothConnected(function () {
    bluetooth.startButtonService()
    bluetooth.startIOPinService()
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
    }
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `)
    if (control.eventValue() == 1) {
    	
    } else if (control.eventValue() == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            . # . # .
            `)
    } else if (control.eventValue() == 5) {
        basic.showString("NO")
    } else if (control.eventValue() == 7) {
        basic.showString("NO")
    } else if (control.eventValue() == 9) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (control.eventValue() == 11) {
        basic.showString("2")
    } else if (control.eventValue() == 13) {
        basic.showString("3")
    } else if (control.eventValue() == 15) {
        basic.showLeds(`
            # # # . .
            . # . # #
            . # # # .
            . # . . .
            # . # . .
            `)
        control.waitMicros(4)
        basic.showLeds(`
            # # . . .
            # . # # .
            # # # . .
            # . . . .
            # # . . .
            `)
        control.waitMicros(4)
        basic.showLeds(`
            # . . . .
            . # # . #
            # # . . .
            . . . . .
            # . . . .
            `)
        control.waitMicros(4)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            `)
        control.waitMicros(4)
        basic.showLeds(`
            . # # # .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        control.waitMicros(4)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let lastValue = 0
lastValue = 0
music.setVolume(140)
basic.showString("Hello!")
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
bluetooth.startLEDService()
control.waitMicros(48)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
