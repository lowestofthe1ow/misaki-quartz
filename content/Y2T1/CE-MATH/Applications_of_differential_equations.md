---
target-deck: CE-MATH::Applications of differential equations
tags: [CE-MATH]
title: Applications of differential equations
---

## Growth and decay problems

**Problem**. The rate at which yeast cells multiply is proportional to the number present. If
the original number **doubles** in 2 hours, in how many hours will it triple?

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
e^0 C_4 = y_0 \iff C_4 = y_0
$$

## Cooling and heating problems

**Newton's law of cooling** states that the time rate of change in the temperature of a body is proportional to the temperature difference between the body and its surrounding medium.
