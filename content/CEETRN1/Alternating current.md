---
target-deck: CEETRN1::Alternating current
tags: [CEETRN1]
title: Alternating current
---

## Root mean square voltage ($V_\text{RMS}$) for sinusoids

$$
V_\text{RMS} = \frac{1}{\sqrt{2}} V_\text{P} \text{ for sinusoidal waves}
$$

Note that the root mean square voltage is the square root of the mean of the squares of all voltage values across the waveform.
<!--ID: 1743401725675-->

## Root mean square voltage ($V_\text{RMS}$) for square waves

$$
V_\text{RMS} = V_\text{P} = V_\text{average} \text{ for square waves}
$$
<!--ID: 1743401725682-->

## Capacitance

Capacitance is the ratio of the charge stored on a capacitor's plate to the voltage across the two plates.

$$C=\frac{q}{v}$$
<!--ID: 1743401725684-->

## Energy in a capacitor

$$w = \frac{1}{2}Cv^2$$

Note that $w$ is in joules.
<!--ID: 1743401725686-->

## Energy in an inductor

$$w = \frac{1}{2}Li^2$$

Note that $w$ is in joules.
<!--ID: 1744033630075-->

## In DC analysis, capacitors act as...

Open circuits. In other words, voltage charges up a capacitor until it is full, at which point it blocks all current.
<!--ID: 1744033630078-->

## In DC analysis, inductors act as...

Short circuits. As inductors receive voltage, they allow more and more current to pass through.
<!--ID: 1744033630081-->

## In capacitors, current ... voltage by 90 degrees

Leads
<!--ID: 1744033630083-->

## In inductors, current ... voltage by 90 degrees

Lags
<!--ID: 1744033630086-->

## Inductance is ... component across the ... axis

Positive, imaginary
<!--ID: 1744033630104-->

## Capacitance is ... component across the ... axis

Negative, imaginary
<!--ID: 1744033630107-->

## Resistance is ... component

Real
<!--ID: 1744033630109-->

## Capacitors in parallel

The equivalent capacitance of capacitors in parallel is the sum of the individual capacitances.

$$C_\text{eq} = C_1 + C_2 + \dots + C_N$$
<!--ID: 1743401725688-->

## Capacitors in series

The equivalent capacitance of capacitors in parallel is the reciprocal of the sum of the reciprocals of the individual capacitances.

$$C_\text{eq} = \frac{1}{\displaystyle \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_N}}$$

Capacitors in series also have the **same** charge.
<!--ID: 1743401725690-->

## Current-voltage relationship for a capacitor

Recall that current is the time derivative of charge. Then:

$$q = Cv \to i = C \frac{\text{d}v}{\text{d}t}$$

>[!warning] This equation assumes that current flows into the positive end.
<!--ID: 1743401725691-->

## Current-voltage relationship for an inductor

The voltage across an inductor is proportional to the rate of change of the current through it:

$$v = L \frac{\text{d}i}{\text{d}t}$$

>[!warning] This equation assumes that current flows into the positive end.
<!--ID: 1743401725693-->

## Inductors in series/parallel

The formulas for inductors in series or in parallel are identical to those for resistors.
<!--ID: 1743401725695-->

## Capacitive reactance

The effect of a capacitor on the current in an AC circuit is called the capacitive reactance.

$$X_C = \frac{1}{2 \pi f C}$$

Reactance is in **ohms**. Ohm's law is usable with RMS voltage and current:

$$V_\text{RMS} = I_\text{RMS} X_C$$
<!--ID: 1743401725697-->

## Inductive reactance

The effective resistance of a coil in an AC circuit is called the inductive reactance.

$$X_L = 2 \pi f L$$

Ohm's law is usable with RMS voltage and current.
<!--ID: 1743401725699-->

## Impedance for series RLC

$$Z = \sqrt{R^2 + (X_L - X_C)^2}$$
<!--ID: 1743401725701-->

## Impedance for parallel RLC

$$Z = \frac{1}{\displaystyle \sqrt{
	\left( \frac{1}{R} \right)^2 +
	\left( \frac{1}{X_L} - \frac{1}{X_C} \right)^2
}}
$$
<!--ID: 1743401725702-->

## Power factor of a circuit

$$\cos(\phi)$$
<!--ID: 1744033630112-->

## Apparent power

$$ P = IV $$
<!--ID: 1744033630115-->

## $\cos(\phi)$ represents the ...

Ratio of resistive load to the total/apparent
<!--ID: 1744033630117-->

## $\sin(\phi)$ represents the ...

Ratio of imaginary (inductive/capacitive) load to the total/apparent

Reactive power is apparent power scaled by $\sin(\phi)$.
<!--ID: 1744033630120-->

## The reciprocal of resistance is ...

Conductance
<!--ID: 1744033630123-->

## The reciprocal of reactance is ...

Susceptance
<!--ID: 1744033630125-->

## The reciprocal of impedance is ...

Admittance
<!--ID: 1744033630128-->

## Mutual inductance

$$L_M = k\sqrt{L_1L_2}$$

where $k$ is the coupling coefficient
<!--ID: 1744033630130-->

## Turns ratio

The ratio of the number of turns in the primary to the secondary.

$$\frac{N_P}{N_S}$$
<!--ID: 1744033630133-->

## Voltage ratio

Equal to turns ratio
<!--ID: 1744033630136-->

## Current ratio

Inverse of turns ratio
<!--ID: 1744033630138-->

## Transformer efficiency

Ratio of power out to power in

$$
\frac{P_\text{out}}{P_\text{in}} \times 100%
$$
<!--ID: 1744033630140-->

## Delta to wye (outside to inside)

$$R_{\text{number}} = \frac{\text{adjacent} \times \text{adjacent}}{\text{sum of all}}$$

Note A and 1, B and 2, etc. are on opposite "sides"
<!--ID: 1744033630143-->

## Wye to delta (inside to outside)

$$R_{\text{letter}} = \frac{R_1R_2 + R_2R_3 + R_3R_1}{\text{opposite}}$$

Note A and 1, B and 2, etc. are on opposite "sides"
<!--ID: 1744035055635-->

## Potentiometers

- Can be a variable resistor or voltage divider
- 3 terminals (1, 2, 3)
- Resistor between 1 and 2 + Resistor between 2 and 3 = Rating of potentiometer
<!--ID: 1744033630147-->

## Lowpass filter

Source series with resistor, parallel with capacitor

$$f_\text{cutoff} = \frac{1}{2\pi RC}$$
<!--ID: 1744033630150-->

## Highpass filter

Source parallel with resistor, series with capacitor
<!--ID: 1744033630153-->

## Bandpass filter

Cascade highpass then lowpass, cutoff for highpass > cutoff for lowpass
<!--ID: 1744033630155-->

## Filter order

Cascade more filters
<!--ID: 1744033630158-->

## Diode

Forces current to flow in one direction only. Functions as closed or open circuits in DC
<!--ID: 1744033630161-->

## Rectifier

Use diodes to remove negative half of current waveform, then use capacitors to flatten. Output voltage is the voltage through the capacitor.
<!--ID: 1744033630164-->
