Output voltage of gate minus input voltage of receiver for both high and low - How to get noise immunity
Output current of transmitter divided by input current of receiver for both high and low. Take worst-case scenario - How to get maximum number of receivers that a transmitter can drive
Output capacitive load limit divided by capacitive input - Maximum number of receivers a device can load based on capacitive load


$4800 until $4800 + 2048 - 1 = $4FFF: SRAM
$F000 until $F000 + 4096 - 1 = $FFFF: EPROM

$4800 = 0100 1000 0000 0000
$4FFF = 0100 1111 1111 1111
to select:
A14 = A11 = 1
A15 = A13 = A12 = 0
tama design sa pic

$F000 = 1111 0000 0000 0000
$FFFF = 1111 1111 1111 1111
to select: A15...12 = 1111, tama yung design sa pic