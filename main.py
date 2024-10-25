def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

list2: List[number] = []
# Join the array into a string and set it to output.value
def Kombinieren(input2: List[str], output):
    output.value = input2.join(', ')

def on_forever():
    pass
basic.forever(on_forever)
