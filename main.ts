input.onButtonPressed(Button.A, function () {
    Buchstabe_Zahl = (Buchstabe_Zahl >= 26) ? 1 : Buchstabe_Zahl + 1;
basic.showString("" + (Alphabet[Buchstabe_Zahl - 1]))
})
input.onButtonPressed(Button.AB, function () {
    if (Buchstabe_Zahl != null && Buchstabe_Zahl != 0) {
        Wort.push(convertToText(Alphabet[Buchstabe_Zahl - 1]))
    }
})
radio.onReceivedString(function (receivedString) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Buchstabe_Zahl = (Buchstabe_Zahl <= 1) ? 26 : Buchstabe_Zahl - 1;
basic.showString("" + (Alphabet[Buchstabe_Zahl - 1]))
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("" + (Wort.join('')))
    basic.pause(100)
    Wort = []
})
let Alphabet: string[] = []
let Buchstabe_Zahl: int8 = null
let Wort: string[] = []
for (let i = 65; i <= 90; i++) {
    Alphabet.push(String.fromCharCode(i));
}
