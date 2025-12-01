---
target-deck: CE-MATH::Numerical methods for differential equations
tags: [CE-MATH]
title: Numerical methods for differential equations
---

## Euler's method

Consider the following differential equation:

$$
\frac{dy}{dx} = f(x, y)
$$

Such equations are usually solved analytically through separating variables or other methods. However, a numeric estimate for a given value of $y$ can be obtained as a linear extrapolation based on a previous value:

$$
y_{i+1} = y_i + \phi h
$$

Here we obtain the next value $y_{i + 1}$ by incrementing the current value $y_i$ by a step size (the $x$ distance between the two points) times a slope. This slope, known as the **increment function**, is the slope of the line tangent to the graph of $y$ at the current point, i.e.

$$
\phi = \frac{dy}{dx} = f(x, y)
$$

This is known as **Euler's method**.
<!--ID: 1733233618217-->

## Classical fourth-order Runge-Kutta method

The **classical fourth-order Runge-Kutta method** provides a higher degree of accuracy than Euler's method. Its method of approximation is near-identical to Euler's:

$$
y_{i+1} = y_i + \phi h
$$

However, unlike Euler's method, which simply uses the slope of the line tangent to $y_i$ as its increment function, the fourth-order Runge-Kutta increment function is given as follows:

$$
\phi = \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)
$$

which can be described as a **weighted average** of slopes. Specifically, we "chain" the extrapolations:

$$
\begin{align*}
k_1 &= f(x_i, y_i) \\
k_2 &= f(x_i + \frac{1}{2}h, y_i + \frac{1}{2}k_1h) \\
k_3 &= f(x_i + \frac{1}{2}h, y_i + \frac{1}{2}k_2h) \\
k_2 &= f(x_i + h, y_i + k_3h)
\end{align*}
$$
<!--ID: 1733233618225-->
