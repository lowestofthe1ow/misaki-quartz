---
target-deck: CE-MATH::Differential equations::Ordinary differential equations
tags: [CE-MATH]
title: Ordinary differential equations
---

## Variable separation

There exist differential equations of the form:

$$
\frac{dy}{dx} = f(x)
$$

Such equations may be solved by **direct integration**:

$$
y = \int{f(x) \ dx}
$$

Equations following a similar form, such as:

$$
\begin{align*}
\frac{dy}{dx} &= f(y) & \frac{dy}{dx} &= f(x) \cdot f(y)
\end{align*}
$$

May also be solved by **separating** the variables before directly integrating each side with respect to each. Such equations are said to be **variable-separable**.

<!--ID: 1733233618183-->

## Homogeneous first-order differential equations

Some differential equations are **not** variable-separable. A **homogeneous first-order** differential equation is one of the form:

$$
P\frac{dy}{dx} = Q \iff \frac{dy}{dx} = \frac{Q}{P} = f(x,y)
$$

where $P$ and $Q$ are functions of both $x$ and $y$ and are of the **same degree**[^1] throughout. This equation is said to be **homogeneous** in $y$ and $x$. We approach this type of equation by attempting to convert it into a form that is variable separable.

Working with the right hand side, substitute all instances of $y$ with:

$$
y = vx
$$

from which we know (from the product rule of differentiation) that:

$$
\frac{dy}{dx} = v + x \frac{dv}{dx} = \frac{Q}{P}
$$

This will result in an equation in which $x$ and $v$ are separable. The general solution can then be obtained by reverting the substitution (that is, $v =\frac{y}{x}$).

<!--ID: 1733233618192-->

## Linear first-order differential equations

An equation of the form:

$$
\frac{dy}{dx} + Py = Q
$$

where $P$ and $Q$ are functions of $x$, is known as a **linear first-order differential equation** (that is **not** homogeneous), since $y$ and its derivative is of the first order and first degree. We approach this equation by use of an **integrating factor**:

$$
e^{\int{P \ dx}}
$$

This factor is chosen specifically because:

$$
\frac{d}{dx} \left ( e^{\int{P \ dx}} \right ) = Pe^{\int{P \ dx}}
$$

which later allows us to use the product rule of differentiation. Multiplying both sides of the original equation by the integrating factor results in:

$$
\begin{align*}
e^{\int{P \ dx}} \frac{dy}{dx} + Pe^{\int{P \ dx}} y  &= e^{\int{P \ dx}} Q \\
\frac{d}{dx} \left ( ye^{\int{P \ dx}} \right ) &= e^{\int{P \ dx}} Q 
& \text{(by the product rule of differentiation)} \\
ye^{\int{P \ dx}} &= \int{e^{\int{P \ dx}} Q \ dx} \\
\iff y &= \frac{\int{e^{\int{P \ dx}} Q \ dx}}{e^{\int{P \ dx}}}
\end{align*}
$$
<!--ID: 1733233618201-->

## Linear second-order differential equations

A **linear second-order differential equation** is of the form[^2]:

$$
a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0
$$

Here we are interested in the case where $a$, $b$, and $c$ are **constant** coefficients. We begin by setting:

$$
y = e^{rx} \iff \frac{dy}{dx} = re^{rx} \iff \frac{d^2y}{dx^2} = r^2e^{rx}
$$

This results in a quadratic equation known as the **auxiliary equation**:

$$
\begin{align*}
ar^2e^{rx}+bre^{rx}+ce^{rx} &= 0 \\
ar^2 + br + c &= 0
\end{align*}
$$

The general solution in the case where the roots of the auxiliary equation $r = \alpha$ and $r = \beta$ are **real** and **distinct** (that is, $\alpha, \beta \in \mathbb{R}$ and $\alpha \neq \beta$) then simply requires a "linear combination" of $y = e^{rx}$:

$$
y = Ae^{\alpha x} + Be^{\beta x}
$$

where $A$ and $B$ are arbitrary constants determined by the boundary conditions. In the case where $\alpha = \beta$, (that is, in the case of [repeated roots](https://tutorial.math.lamar.edu/classes/de/repeatedroots.aspx)), however, note that the general solution is:

$$
y = (Ax + B)e^{\alpha x}
$$

In the case where $\alpha$ and $\beta$ are [complex](https://tutorial.math.lamar.edu/classes/de/complexroots.aspx), the general solution involves a case of Euler's formula:

$$
y = (A\cos{\beta x} + B\sin{\beta x})e^{\alpha x}
$$
<!--ID: 1733233618208-->

[^1]: This means the highest exponent in each term is equal. An equation is homogeneous if we can set $x = tx$ and $y = ty$ while being able to eliminate $t$ from the equation.
[^2]: When the right-hand sign is zero, the equation is referred to as homogeneous.
