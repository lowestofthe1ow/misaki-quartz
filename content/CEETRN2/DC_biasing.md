## DC Biasing

- Applying a DC voltage to establish a fixed level of current and voltage.
- Involves designing the biasing circuit (choosing appropriate resistors and supply voltages) so that when the circuit is powered on, the BJT naturally settles at a desired $I_C$ and $V_{CE}$ (for an $npn$ common-collector configuration)
- In other words, we establish a $Q$-point. This point lies on the characteristic curve of a transistor and must lie within its operating limits
	- $I_C$ and $V_{CE}$ are its "coordinates"
- For a BJT to be biased in its active operating region:
	- The BE junction must be forward-biased
		- 0.6 V to 0.7 V forward-bias voltage
	- The BC junction must be reverse-biased

### Cutoff region

- $I_B \leq 0$
- Both junctions are reverse-biased
- Transistor is "off" and acts like an open.

### Saturation region

- $V_{CE} \leq V_{{CE}_\text{sat}}$
- Both junctions are forward-biased
- Transistor is "fully on" and is conducting current at max capacity
