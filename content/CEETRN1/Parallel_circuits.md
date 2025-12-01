---
target-deck: CEETRN1::Parallel circuits
tags: [CEETRN1]
title: Parallel circuits
---

## Parallel circuits

Two elements, branches, or networks are in **parallel** if they have **two points** in common. In a **parallel circuit**, there are many paths for electricity to follow. Even if one light goes out, the circuit remains on as there is still a loop formed between the battery and the other lights.

>[!important] In a parallel circuit, the voltage across every parallel component is equal.

The total resistance of parallel resistors is always less than the value of the smallest resistor. Specifically:

$$
\frac{1}{R_T} = \frac{1}{R} + \frac{1}{R} + \dots + \frac{1}{R}
$$
<!--ID: 1738378824170-->

## Voltage sources in parallel

Voltage sources may be placed in parallel if they have the same voltage rating to increase the output current.

![[Pasted image 20250211134038.png|500]]
<!--ID: 1739323216515-->

## Current sources in parallel

Current sources may be placed in parallel, resulting in a net current equal to the sum of the currents (taking direction into account).

![[Pasted image 20250213210714.png|500]]

In the above figure, the net current is $10 A - 6 A = 4 A$, following the direction of the stronger current.
<!--ID: 1739714911634-->

### Kirchhoff's Current Law (KCL)

Kirchhoff's Current Law (KCL) states that the algebraic sum of the currents entering and leaving an area, system, or junction is zero. Equivalently, the sum of the currents entering a junction must equal the sum of the currents leaving it:

$$
\sum I_\text{entering} = \sum I_\text{leaving}
$$
<!--ID: 1738378824181-->

### Current division rule

The **current division rule** determines how the current entering parallel branches will split itself between each branch.

- For two parallel elements of equal value, the current will divide **equally**.
- For parallel elements of different values, the current will split with a ratio equal to the **inverse** of their resistor values.

Mathematically:

$$
I_x = \frac{R_T}{R_x} I
$$

Where $I_x$ is the current across the resistance $R_x$ in a parallel circuit with a total resistance of $R_T$ and an entering current of $I$.

>[!important] Remember that current **seeks the path of least resistance**.
<!--ID: 1739323216524-->
