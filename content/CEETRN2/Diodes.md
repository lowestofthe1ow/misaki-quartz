---
target-deck: CEETRN2::Diodes
tags: [CEETRN2]
title: Diodes
---

## Semiconductors

### n-type crystal

- Silicon doped with phosphorus
- Electron majority carriers (negative charge)

### p-type crystal

- Silicon doped with aluminum
- Hole majority carriers

## Diode

- Conducts electricity in one direction
- Two-terminal device
- Usually silicon
- Semiconductor
- Consists of a p-type material and an n-type material joined together
- "Electrons in n-type material flow to holes in p type material"

### Biasing

- **Biasing** refers to the application of an external voltage across the diode.

#### No applied bias

- Applied bias $= 0V$
- Current is zero
- Diode is said to not be in an "operating condition"

#### Reverse-bias conditions

- Applied bias $< 0V$
- Depletion region is widened
- Current is zero **ideally**
	- In reality, there is some leakage current caused by the flow of minority carriers into the deletion region
	- This is known as the **reverse saturation current** $I_s$

### Forward-bias conditions

- Applied bias $> 0V$
- Depletion region is made more narrow
- Once the applied bias exceeds the "cut-in voltage," current increases exponentially
	- Beyond this point, diode switches to a low-resistance state
	- Voltage across the diode does not significantly increase past the cut-in voltage
	- Usually about $0.7V$ for silicon diodes

#### Shockley's equation

$$I_D = I_S \left( e^{\frac{V_D}{n V_T}} - 1 \right)$$

- Relates characteristics of a diode
	- $I_s$ is the reverse saturation current
	- $V_D$ is the applied forward-bias voltage
	- $n$ is an ideality factor, $1 < n < 2$. We assume $n = 1$.
	- $V_T$ is the thermal voltage

- When no applied bias:
	- $I_D = 0$
- When applied bias is negative (reverse-bias)
	- $I_D \approx -I_s$
- When applied bias is sufficiently large:
	- Current increases exponentially
	- $-1$ term becomes negligible
	- $I_D \approx I_S \left( e^{\frac{V_D}{n V_T}} \right)$

##### Thermal voltage

$$V_T = \frac{kT_K}{q}$$

- Represents the "voltage equivalent" of a temperature
	- $k$ is Boltzmann's constant
	- $T$ is the absolute temperature in Kelvin
	- $q$ is the magnitude of an electronic charge
	- $V_T$ is generally assumed to be around $25 mV$ for room temperature

### Breakdown region

- Analogy: One-way water dam is overwhelmed and a large current breaks through
- Upon exceeding a "limit" voltage in the reverse-bias region, the diode begins conducting current.
- Applied bias $< V_{zk}$

### Ideal vs. actual diode characteristics

![[diode_characteristics.png|400]]

### Diode equivalent resistance

#### DC or static resistance

- A DC voltage is applied to a diode
- Defined as a $Q$-point on the characteristic curve
	- $Q$ is from "quiescent" - "still" or "unvarying" point
- Ohm's Law: $$R_D = \frac{V_D}{I_D}$$

#### AC or dynamic resistance

- AC voltage applied to the diode
- Small changes in applied voltage will move the operating point up and down around the $Q$-point (DC operating point)
- Tangent line at the $Q$-point: $$r_d = \frac{\Delta V_d}{\Delta I_d}$$

#### Average AC resistance

- AC voltage applied to the diode
- Applied voltage signal is *large* enough that the operating point *broadly* moves up and down around the $Q$-point
- Secant line between the limits of operation: $$r_{av} = \frac{\Delta V_d}{\Delta I_d} \rvert_\text{pt. to pt.} $$

### Diode equivalent circuits

#### Model I: Ideal diodes

![[ideal_diode.png|500]]

- The diode is a closed circuit (a **wire**) in the forward-bias direction and an **open** circuit in the reverse-bias direction.
- For an ideal diode to conduct, the voltage at its anode (VA​) must be **greater than or equal to** the voltage at its cathode (VK​).

#### Model II: Constant voltage-drop

![[constant_voltage_drop.png|600]]

- The entire diode device is an open circuit in the reverse-bias direction.
- In the forward-bias direction, the ideal diode in the model behaves as a closed wire.
	- The voltage source goes *against* the current $I_D$ and thus causes a constant voltage **drop** of $V_K$ (usually $0.7V$).

#### Model III: Piecewise linear approximation

- The entire diode device is an open circuit in the reverse-bias direction.
- In the forward-bias direction, the ideal diode in the model behaves as a closed wire.
	- The voltage source behaves like in Model II.
	- The added resistor models the resistance $r_{av}$ of the diode.

![[piecewise.png|540]]

## Load-line analysis

- The diode's characteristic curve plots the applied voltage ($V_D$, horizontal axis) against the current through the diode ($I_D$, vertical axis).
- When the diode is placed on a network, the network only has certain values of $I_D$ and $V_D$ that it can provide the diode.
	- By Ohm's Law and KVL
	- This is plotted as a straight **load line** on the graph with the characteristic curve
	- The $Q$-point of the diode is the intersection of the load line with the curve.
		- Intuition: The $Q$ point represents the values of $V_D$ and $I_D$ that the diode has when operating in the circuit, hence "operating point"

![[load_line_analysis.png|550]]

## Wave-shaping circuits

### Half-wave rectifier

![[half_wave_rect.png|300]]

### Full-wave bridge rectifier

![[Pasted image 20250709211852.png|300]]

### Full-wave center-tapped transformer rectifier

![[Pasted image 20250709211918.png|350]]

### Clippers

![[Pasted image 20250709212036.png|600]]

### Clampers

![[Pasted image 20250709212059.png]]

### Voltage doubler

![[Pasted image 20250709212205.png|400]]

### Voltage tripler/quadrupler

![[Pasted image 20250709212232.png|400]]

## Other types of diodes

### Light-emitting diodes (LED)

- Give off visible light when **forward**-biased ("electroluminescence")
- Color is associated with doping material
	- Red has a forward voltage of around 1.6 to 1.7 V
	- Blue is the highest-energy color (highest forward voltage)
	- White LED usually created by taking a blue or UV LED and combining with phosphor material

### Varactor diodes

- "Variable reactance"
- Optimizes junction capacitance
- Often used for electronic tuning applications in FM radios and television
- Also known as voltage-variable capacitance diodes

### Schottky diode

- Minimizes junction capacitance
- Quickly able to switch between conducting and nonconducting states
- Also referred to as "hot-carrier" diodes
- Forward-bias voltage of about 0.2V despite being made of silicon
- The only type of diode fast enough to rectify very high frequencies
	- Used to construct small transformers

### Current regulator diode

- Constant current source
- Very high forward resistance (from 250k to about 20M)

### Tunnel diodes

- Operated at very high frequencies
- $pn$ junction is heavily doped
- Exhibits "negative resistance" when forward-biased due to quantum tunneling

### PIN diodes

- Also operated at very high frequencies
- The $p$-type material is separated from the $n$-type material by a layer of **intrinsic**, or very lightly doped silicon.
- The name "PIN" comes from $p$, *i*ntrinsic, $n$.

### Step-recovery diodes

- Very fast switching times, but require more power
- Primarily used in communication circuits above 1 GHz
- Less doping at $pn$ junction

## Troubleshooting diode circuits

- Diode defects:
	- Anode-cathode short
	- Anode-cathode open
	- Low front-to-back ratio (slightly or severely conducting in reverse bias)
	- Out of tolerance parameters (too low or high forward voltage, etc.)
- Tests that can performed on diodes to check for their operation are:
	- Voltage measurements.
	- Ohmmeter tests.
	- Diode testers.
- Rectifier diode defects fall into one of two classes:
	- Power supply is defective, but no visible damage and no fuses are blown.
	- The rectifier circuit shows damage or a fuse is blown
