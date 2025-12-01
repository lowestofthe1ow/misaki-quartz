---
target-deck: CE-MATH::Applications of differential equations
tags: [CE-MATH]
title: Applications of differential equations
---

## Growth and decay problems

> **Problem**. The rate at which yeast cells multiply is proportional to the number present. If the original number **doubles** in 2 hours, in how many hours will it triple?

We know that the rate at which the cells multiple is **proportional** (that is, some constant multiple of) the number present:

$$
\frac{dy}{dt} = ky
$$

where $k$ is some constant and $y$ is the number of yeast cells present. $\frac{dy}{dt}$ represents the change in population per instant of time (its rate of growth). This equation is easily solved by variable separation:

$$
\begin{align*}
\int{\frac{1}{ky} \ dy} &= \int{dt} \\
\frac{1}{k} \ln{|y|} + C_1 &= t + C_2 \\
\ln{|y|} &= tk + C_3 && \text{where } C_3 = k(C_2 - C_1) \\
y &= e^{tk + C_3} \\
&= e^{tk} C_4 && \text{where } C_4 = e^{C_3}
\end{align*}
$$

For simplicity we denote the arbitrary constant $C_4$ as simply $C$. Given the boundary conditions of the problem $y(0) = y_0$ and $y(2) = 2y_0$ where $y_0$ is the initial population (that is, at $t = 0$):

$$
e^0 C = y_0 \iff C = y_0
$$
<!--ID: 1733395776207-->

## Cooling and heating problems

> **Problem.** A metal bar at a temperature of $100^\circ F$ is placed in a room at a constant temperature of $0^\circ F$. If after 20 minutes the temperature of the bar is $50^\circ F$, find an expression for the temperature of the bar at any time.

**Newton's law of cooling** states that the time rate of change in the temperature of a body is proportional to the temperature difference between the body and its surrounding medium. In other words, for some constant $k$ and constant environment temperature $T_{\text{air}}$:

$$
\frac{dT}{dt} = k(T - T_{\text{air}})
$$

This is a variable-separable differential equation that we can solve for the general solution:

$$
\begin{align*}
\int{\frac{1}{T - T_{\text{air}}} \ dT} &= k \int{dt} \\
\int{\frac{1}{u} \ du} &= k \int{dt} &&
\text{from } u = T - T_{\text{air}} \iff du = dT \\
\ln{|T - T_{\text{air}}|} &= kt + C &&
\text{merge constants} \\
T - T_{\text{air}} &= Ce^{kt} &&
\text{merge constants} \\
\end{align*}
$$

We substitute the initial conditions $t = 0 \to T = 100$ (noting that $T_{\text{air}} = 0$):

$$
100 = Ce^{0} \iff C = 100
$$

Which gives:

$$
T - T_{\text{air}} = 100e^{kt}
$$

To find $k$, we substitute the boundary conditions $t = 20 \to T = 50$:

$$
\begin{align*}
50 &= 100e^{20k} \\
\frac{1}{2} &= e^{20k} \\
20k &= \ln{\frac{1}{2}} \\
k &= \frac{1}{20} \ln{\frac{1}{2}}
\end{align*}
$$

This gives the particular solution:

$$
\boxed{T - T_\text{air} = 100e^{\frac{1}{20} \ln{\frac{1}{2}}}}
$$
<!--ID: 1733395776209-->

### Flow problems

> **Problem.** A tank initially holds $V_0 = 100 L$ of brine solution containing $1 kg$ of salt. At $t = 0$, another brine solution containing $1 kg$ of salt per liter is poured into a tank at a rate of $3 L$ per minute while the well-stirred mixture leaves the tank at the same rate. Find the amount of salt $s$ in the tank at any time $t$.

The total change in the amount of salt in the solution is equal to the rate at which salt enters it **minus** the salt at which salt leaves it. Note also the condition that **liquid** is poured into and leaves the tank at the same rate.

Thus, in this case, salt enters the solution at a rate of $1kg \times 3L$ per minute and leaves it at a rate of $\frac{3L}{100L}s$ per minute:

$$
\frac{ds}{dt} = 3(1) - \frac{3s}{100}
$$

This is a differential equation whose general solution we can obtain through a separation of variables:

$$
\begin{align*}
\frac{ds}{dt} &= 3 \left ( \frac{100 - s}{100} \right ) \\
\left ( \frac{100}{100 - s} \right ) ds &= 3 dt \\
100 \int{\frac{1}{100 - s} \ ds} &= 3 \int{dt} \\
-100 \int{\frac{1}{u} \ du} &= 3 \int{dt} &&
\text{from } u = 100 - s \iff ds = -du \\
-100\ln{|100 - s|} &= 3t + C &&
\text{merge constants} \\
\ln{|100 - s|} &= -\frac{3t}{100} + C &&
\text{merge constants} \\
100 - s &= Ce^{-\frac{3t}{100}}
\end{align*}
$$

We substitute the initial conditions $t = 0 \to s = 1$:

$$
99 = Ce^0 \iff C = 99
$$

Therefore the particular solution is given by:

$$
\boxed{s = 100 - 99e^{-\frac{3t}{100}}}
$$
<!--ID: 1733395776211-->

## Electric circuit problems
<!--ID: 1733395776212-->

### Kirchhoff's current law (KCL)

**Kirchhoff's current law**, also known as the principle of **conservation of charge**, shows that the total current entering a node in a circuit is exactly equal to the current leaving it. As no current is "lost" within the node, current that enters will have nowhere to go but leave it.

Consider the following example with $I_1$, $I_2$, and $I_3$ entering a node while $I_4$ and $I_5$ exit it.

$$
I_1 + I_2 + I_3 + (-I_4 + -I_5) = 0
$$

![[kcl.png|500]]
<!--ID: 1733395776214-->

### Kirchhoff's voltage law (KVL)

**Kirchhoff's current law**, also known as the principle of **conservation of energy**, shows that the sum of all the **electromagnetic forces** (EMF) and **voltage drops** within the same loop is equal to zero. Note that in the common case of the current around the loop being constant (that is, $\frac{di}{dt} = 0$), EMF is equal to zero.

Thus, KVL is often formulated as follows:

$$
V_1 + V_2 + \dots = 0
$$

Consider the following example:

![[kvl.png|500]]
<!--ID: 1733395776216-->

### RL circuits

> **Problem.** An RL circuit has an EMF of $5V$, a resistance of $50 \ohm$, an inductance of $1 H$, and **no** initial current. Find the current $I$ of the circuit at any time **t**.

An RL circuit is a circuit containing an inductor and a resistor. An **inductor** is a component that opposes changes in current. The voltage $V_L$ across an inductor is proportional to the rate of change of the current, that is:

$$
V_L = L \frac{dI}{dt}
$$

where $L$ is the constant **inductance** that defines the proportionality between the two. Now note that the EMF across the circuit is **not** zero (as is usually the case with RL circuit problems, as the current is not constant). Thus, by KVL:

$$
L \frac{dI}{dt} + V = \text{EMF}
$$

where $V$ is the sum of the voltage drops in the rest of the circuit (in this case, the resistor). By Ohm's law we can replace this with $IR$:

$$
L \frac{dI}{dt} + IR = \text{EMF}
$$

The above is a variable-separable differential equation. Plugging in the given values:

$$
1 \frac{dI}{dt} + I(50) = 5
$$

We solve for the general solution:

$$
\begin{align*}
\int{\frac{1}{5 - 50I} \ dI} &= \int {dt} \\
-\frac{1}{50} \int{\frac{1}{u} \ du} &= \int {dt}
&& \text{from } u = 5 - 50I \iff dI = -\frac{du}{50} \\
\ln{|5 - 50I|} &= -50t + C
&& \text{merge constants} \\
5 - 50I &= Ce^{-50t} \\
\Aboxed{I &= -\frac{Ce^{-50t} - 5}{50}}
\end{align*}
$$

We substitute the initial conditions $t = 0 \to I = 0$:

$$
0 = -\frac{C - 5}{50} \iff C = 5
$$

Thus the particular solution is given by:

$$
\begin{align*}
I &= -\frac{5e^{-50t} - 5}{50} \\
&= -\frac{5(e^{-50t} - 1)}{50} \\
&= \boxed{-\frac{e^{-50t} - 1}{10}}
\end{align*}
$$
<!--ID: 1733395776217-->
