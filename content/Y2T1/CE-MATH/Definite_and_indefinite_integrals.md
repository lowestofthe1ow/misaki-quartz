---
target-deck: CE-MATH::Definite and indefinite integrals
tags: [CE-MATH]
title: Definite and indefinite integrals
---

## Indefinite integrals

*See also*: [[Integration#Integration]]

Integrals containing an [[Integration#Arbitrary constant $c$|arbitrary constant]] $c$ in their results are called **indefinite integrals**, as their precise value cannot be determined without further information.

<!--ID: 1726484074492-->

## Definite integrals

**Definite integrals** are those in which **limits** are applied. Thus, unlike indefinite integrals, definite integrals have a **numeric value**. The following expression:

$$
\int_1^3{x^2 \ dx}
$$

refers to the value of the integral of $x^2$ as $x$ increases from $1$ to $3$. $1$ is known as the **lower bound** while $3$ is known as the **upper bound**. This value is given by the value of $\int{x^2 \ dx}$ when $x = 1$ subtracted from its value when $x = 3$, written as $[\frac{x^3}{3} + c]^3_1$.

$$
\int_1^3{x^2 \ dx} = [\frac{x^3}{3} + c]^3_1 = (\frac{3^3}{3} + c) - (\frac{1^3}{3} + c) = \frac{26}{3}
$$

>[!info] Note that the $c$ term is always cancelled out.

<!--ID: 1726484074496-->

#### Areas under and between curves

*See also*: [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral)

![[area_curve.png|500]]

The total area of the shaded region in the above image is given by:

$$
\int_a^b{f(x) \ dx} - \int_b^c{f(x) \ dx} + \int_c^d{f(x) \ dx}
$$

Note that the second term is negative as it is below the $x$-axis. Thus to find the area of the region below a function, first analyze where the function crosses the $x$-axis, i.e., the values of $x$ for which $f(x) = 0$.

<!--ID: 1726484074499-->
