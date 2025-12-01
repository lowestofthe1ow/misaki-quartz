## Bipolar junction transistors

- The transistor is a three-layer semiconductor device
	- Two $n$- and one $p$-type layer ($npn$ transistor)
	- Two $p$ and one $n$-type layer ($pnp$ transistor)
	- Operation of both types are the same, but electrons and holes switch roles
	- One $p$-$n$ junction is reverse-biased, while the other is forward-biased.
- Three terminals:
	- Collector ($C$)
	- Emitter ($E$)
	- Base ($B$)
	- By KCL: $I_E = I_B + I_C$

### BJT operation

Intuitively:

1. Apply a **reverse-bias voltage** on the $CB$ junction. The $CB$ junction is therefore "off".
2. Apply a small forward-bias voltage on the $EB$ junction. This forces the breakdown region of the $CB$ junction to occur earlier, "activating" it.
3. This will cause a large current between the collector and the emitter
4. By KCL, the current at the emitter is the sum of the current at the collector and the base
	- Current gain ($\beta$) is usually around 100, meaning for every 1 unit of current flowing at the base, 100 units of current will flow at the collector

## Configurations

- The arrow in the graphic symbol defines the direction of emitter current (conventional flow) through the device
- Common base and common emitter configurations are used for voltage amplification
- Common collector is used for current amplification
- All configurations provide some sort of **power** gain/amplification

### Characteristic curve

- Plots collector-emitter voltage (horizontal) against collector current (vertical)
- As input voltage increases, both axes increase
- Once input voltage > 0.7V, collector current plateaus and stays approximately constant
	- If and only if operating at the plateau, $I_C = \beta I_B$
	- Different plateaus for different base currents
- PNP transistors "flip" the voltage polarities and current directions, so characteristic curve for those is flipped as well.

## Load line analysis

 - When the transistor is placed on a network, the network only has certain values of the output current and output voltage that it can "support"
 - Points of operation are intersections on curves
 - $I_C$ = $\beta I_B$ true only if the load line intersects the curve at the plateau
	 - Otherwise, this is saturation

## Limits of operation

- Specify $I_{C_\text{max}}$ and $BV_{CEO}$
- Plot curve for maximum dissipation $$P_{C_\text{max}} = V_{CE}I_C$$

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
