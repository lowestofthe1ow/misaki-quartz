## Amplification in the AC domain

- Transistor can be employed as an amplifying device
- Output sinusoidal signal is greater than the input
- **Output AC power is greater than the input**
	- This is possible because of the applied DC power
	- DC power is "exchanged" to the AC domain to allow for establishing a higher output AC power
	- Conversion efficiency: Ratio of AC output power to DC input power
- The superposition theorem is applicable for the DC and AC components of a BJT network.
	- One can make a complete DC analysis before considering the AC output.

## BJT transistor modeling

- Constructing a combination of circuit elements that best approximates the behavior of the device under specific operating conditions.

### AC equivalent of a transistor network

1. Replace all DC sources with a short circuit
2. Replace all capacitors with a short circuit
3. Remove all elements bypassed by the short circuits
4. Redraw the network

### Common-emitter $r_e$ transistor model

- Uses a diode and a current source to represent the  behavior of the transistor
	- Diode can be replaced with a resistor $r_e$
- Sensitive to DC level
- Output voltage will be 180 degrees out of phase with the input
	- As the input signal rises, I_B and I_C increase
	- Therefore V_RC increases by Ohm's Law
	- Voltage at the collector (output) must be going down by KVL
	-  