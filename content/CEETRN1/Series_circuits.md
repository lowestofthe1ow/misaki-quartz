---
target-deck: CEETRN1::Series circuits
tags: [CEETRN1]
title: Series circuits
draft: true
---

## Series circuits

Two elements are in **series** if they have only one terminal in common and the common point between the two elements is **not** connected to another current-carrying element. A circuit where all the elements are in series is called a **series circuit**.

>[!important] In a series circuit, the **current** flowing through every series component is **equal**. The total **resistance** is the sum of the resistances of each element.
<!--ID: 1738378824165-->

### Voltage sources in series

Voltage sources can be connected in series. The net voltage is determined simply by summing the sources with the same polarity and subtracting the total of the sources with the opposite “pressure.” The net polarity is the polarity of the larger sum.
<!--ID: 1739323216536-->

### Kirchhoff's Voltage Law (KVL)

Kirchhoff’s voltage law (KVL) states that the algebraic sum of the potential rises and drops around a **closed loop** (or path) is zero.

$$
\sum V = 0
$$

Equivalently, the applied voltage of a series circuit equals the **sum of the voltage drops** across the series elements.

$$
\sum V_\text{rises} = \sum V_\text{drops}
$$

>[!important] Concentrate on the polarities of the voltage rise or drop rather than on the type of element. Do **not** treat a voltage drop across a resistive element differently from a voltage drop across a source.
<!--ID: 1738378824176-->

### Voltage division rule

In a series circuit, the voltage across the resistive elements will divide as the magnitude of the resistance levels. A method known as the **voltage division rule** allows us to identify voltage levels without first finding the current:

$$
V_x = \frac{R_xE}{R_T}
$$

Where $V_x$ is the voltage across a resistance $R_x$ in a series circuit with a total resistance of $R_T$, and $E$ is the total impressed voltage in the circuit. The voltage division rule actually follows from Ohm's law:

$$
V_x = IR_x = \frac{E}{R_T} R_x
$$
<!--ID: 1739323216547-->
