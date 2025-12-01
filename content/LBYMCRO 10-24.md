- Circuit will allow the HC11 to run continuously in Expanded Mode
	- MODB=1, MODA=1; The levels captured are those that were present part of a clock cycle before the RESET' pin rose
- 74LS373: Octal transparent latch
	-  The flip-flops appear transparent to the data (data changes asynchronously) when LE=1. When LE is LOW, the data that meets the setup times is latched
- 74HC245: Bus transceiver
	- When the DIR pin is set to HIGH, data flows from bus A to bus B. When it is set to LOW, data flows from bus B to bus A.
	- DIR=0
	- Data flows if OE=0, otherwise high impedance
	- B=01111110=7E; opcode for JMP instruction
	- In circuit, OE=0 if R/W'=1 (read) and E=1
- The R/W signal indexpandedicates the direction of data — high for read cycles, low for write cycles
- Reset is used to force the microcontroller unit (MCU) to assume a set of initial conditions and to begin executing instructions from a predetermined starting address

1. RESET signal; load reset vector into address bus
2. AS=1; reset vector is latched in LS373
3. R/W'=1, HC245 is enabled, load $7E into data bus --- JMP (EXT)
4. HC11 looks for operand to JMP instruction