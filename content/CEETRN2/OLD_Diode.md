---
target-deck: CEETRN2::Diodes_old
tags:
  - CEETRN2
title: Diodes_old
draft: true
---

## Diode

- A **semiconductor diode** is a that allows electricity to flow in one direction.
- Constructed by joining a $p$-type and an $n$-type semiconductor material.
- Body is made of epoxy as encapsulation plastic (not necessarily as impervious as glass or ceramic) but is much easier to produce
- Designed to dissipate a certain amount of power; a larger body provides a bigger surface area that allows the diode to better radiate heat and dissipate more power
<!--ID: 1747739754931-->

### Voltage vs. current plot of a diode

For a silicon diode:

![[Pasted image 20250508081939.png|500]]

<!--ID: 1747739754933-->

### Forward-bias region

- The **forward-bias region** is the region where the diode acts as a good conductor. In an actual diode, this occurs starting at some $V_d$ such that: $$V_d > 0$$ Ideally, however, it occurs when $$V_d = 0$$
- Electricity is flowing *in the direction of the diode symbol*.
- Only if the polarity of the voltage across the diode appears to be `+ >| -`.
<!--ID: 1747739754935-->

#### Forward-bias curve

- *Exponential* curve: $$i = I_s (e^\frac{V}{nV_T} - 1)$$
	- $I_s$ is the *saturation current* or *scale current*, which is directly proportional to the cross-sectional area of the diode.
		- The saturation current is around $10^{-15} A$ (*femtoamperes*)
	- $V_T$ is the *thermal voltage* and is given by $$V_T = \frac{kT}{q}$$
		- $k$ is Boltzmann's constant ($1.38 \times 10^{-23} \displaystyle \frac{J}{K}$ )
		- $q$ is the magnitude of electronic charge ($\displaystyle 1.6 \times 10^{-19} C$)
		- $T$ is the absolute temperature in Kelvin
		- At room temperature (around $25 \degree C$), we get approximately $V_T = 26 mV$
- The *cut-in* or *on-voltage* voltage is the voltage below which the current is negligible (around $0.5V$ for silicon diodes)
- $V_f = 0.7V$ is a useful approximation for **silicon** diodes.
<!--ID: 1748159584298-->

### Reverse-bias region

- The region where the diode acts as an open circuit: $$V_d < 0$$
- The polarity of the voltage across the diode appears to be `- >| +`.
- The reverse-bias current is *not* exactly zero. It instead increases approximately linearly with the voltage through the diode, but is *close enough to zero* that it may usually be ignored.
- Current is *theoretically* the negative of the saturation current: $$i = -I_s$$
	- Real diodes will usually have a much larger leakage
<!--ID: 1747739754936-->

### Breakdown region

- Occurs at the Zener voltage $V_z$ where the diode begins conducting again
- Diodes where the Zener voltage is designed into the device are called *Zener diodes*
	- Zener diodes are available specifically at 4.7V, 5.1V, 7.8V, 8.2V, etc.
- In ideal conditions, $V_z = -\infty$
- The Zener voltage is typically $100V$ for standard silicon diodes (not always)

![[Pasted image 20250508082557.png|500]]

<!--ID: 1747739754938-->

## Other diode materials

- *Germanium*: $V_f = 0.3V$ (begins conducting early, but does not conduct as well as silicon)
	- The current leakage is significantly greater than in silicon (reverse current is in the microampere range)
<!--ID: 1747739754940-->

## Diode equivalent resistance

>[!warning] Not clear if we use $I_D$ or simply $i$ as notation for the current through the diode.

- *DC* or *static* resistance refers to the resistance at the operating point. $$r_D = \frac{V_D}{I_D}$$
![[Pasted image 20250515075048.png]]
<!--ID: 1747739754941-->

## Model I: Ideal diodes

- Act as switches
<!--ID: 1747739754943-->

## Model II:

![[Pasted image 20250515080330.png]]

<!--ID: 1747739754945-->

## Model III:

![[Pasted image 20250515081116.png]]

- A **piecewise linear approximation** approximates the characteristics of a diode by using straight-line segments.
	- This does not result in an exact duplication of the actual characteristics, **especially in the knee region**

![[Pasted image 20250525121335.png]]

![[Pasted image 20250525120915.png|350]]

Always do a sanity check if current values make sense

If, for example, the current in one branch exceeds the total current out of that branch,

The voltage must therefore be lower than the assumed 0.7V

Because it is lower than 0.7V, the diode can be treated as if it were shorted out

<!--ID: 1747739754949-->
