---
target-deck: CE-MATH::Numerical integration
tags: CE-MATH
title: Numerical integration
---

## Trapezoidal rule

We can approximate the area under a curve by joining the values of $f(x)$ at regular intervals with straight lines. As more trapezoids are used, the approximated area approaches the true area under the curve.

![[trapezoidal_rule.gif]]

This approximate area is given by:

$$
\int_a^b{y \ dx} = (\text{width of each interval})[\frac{1}{2}(\text{first} + \text{last values of } f(x))] + (\text{sum of remaining ordinates})
$$

<!--ID: 1727924325597-->

### Example: Evaluate $\int_1^3{\frac{2}{\sqrt{x}} \ dx}$ with the trapezoidal rule

We evaluate the function at **four** regular intervals of width $0.5$:

|$x$|$\frac{2}{\sqrt{x}}$|
|---|---|
|$1$|$2.0000$|
|$1.5$|$1.6330$|
|$2$|$1.4142$|
|$2.5$|$1.2649$|
|$3$|$1.1547$|

>[!tip] The intervals in this case are: $(1, 1.5)$, $(1.5, 2)$, $(2, 2.5)$, and $(2.5, 3)$

Approximating the integral using the trapezoidal rule:

$$
\begin{align*}
\int_a^b{y \ dx} &\approx (0.5)[\frac{1}{2}(2.0000 + 1.1547)] + (1.6330 + 1.4142 + 1.2649) \\
&\approx 2.945
\end{align*}
$$

<!--ID: 1727924325604-->

## Simpson's rule

Simpson's rule is similar to the trapezoidal rule, but instead of joining $f(x)$ with straight lines, it uses **parabolas**. Note that unlike the trapezoidal rule, the area must be divided into an **even number of intervals** with a **regular width** (this is because we evaluate two intervals at a time, as in the animation below):

![[simpsons_rule.gif]]

This approximate area is given by:

$$
\begin{align*}
\int_a^b{y \ dx} &\approx \frac{1}{3}(\text{width of each interval})[(\text{first} + \text{last values of } f(x)) \\
&+ 4(\text{sum of even values}) + 2(\text{sum of remaining odd values})]
\end{align*}
$$

<!--ID: 1727924325609-->

### Example: Evaluate $\int_1^3{\frac{2}{\sqrt{x}} \ dx}$ with Simpson's rule

We evaluate the function at **four** regular intervals of width $0.5$:

|$x$|$\frac{2}{\sqrt{x}}$|
|---|---|
|$1$|$2.0000$|
|$1.5$|$1.6330$|
|$2$|$1.4142$|
|$2.5$|$1.2649$|
|$3$|$1.1547$|

Approximating the integral using Simpson's rule:

$$
\begin{align*}
\int_a^b{y \ dx} &\approx \frac{1}{3}(0.5)[(2 + 1.1547) + 4(1.6330 + 1.2649) + 2(1.4142)] \\
&\approx 2.929
\end{align*}
$$

<!--ID: 1727924325613-->
