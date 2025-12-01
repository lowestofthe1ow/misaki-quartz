---
target-deck: CEDISP1::Complex numbers
tags: [CEDISP1]
title: Complex numbers
---

## Complex numbers

A complex number may be represented as follows, given that $j = \sqrt{-1}$

$$
x + jy
$$

Where $x = \Re\{x + jy\}$ is known as the **real part** while $y = \Im\{x + jy\}$ is known as the **imaginary part**. This representation is known as its rectangular or **Cartesian** representation.
<!--ID: 1736586933766-->

### The complex plane

The **imaginary axis** is visualized as perpendicular to the real number line. This produces a plane known as the **complex plane**. Multiplying a number by $j$ results in a 90-degree counterclockwise rotation on this plane.
<!--ID: 1736586933769-->

### Polar form

As a complex number $x + jy$ can be represented as a **vector** on the complex plane with coordinates $x$ and $y$, it may also be described using the **magnitude** $r$ and **angle** $\theta$ of this vector.

A Cartesian representation can be converted to its respective polar form as follows:

$$
\begin{align*}
& r = \sqrt{x^2 + y^2} & \theta = \arctan \left ( \frac{y}{x} \right )
\end{align*}
$$

It follows that:

$$
\begin{align*}
& x = r \cos{\theta} & y = r \sin{\theta}
\end{align*}
$$
<!--ID: 1736586933771-->

### Euler's formula

The exponential function $e^{j \theta}$ is periodic with period $2\pi j$. Graphically, the output of this function is [bound to a unit circle](https://en.wikipedia.org/wiki/Euler%27s_formula#Using_power_series) centered on the origin of the complex plane[^1]. This means that $e^{j \theta}$ can be said to represent some complex number whose vector representation has a magnitude $r = 1$ and whose angle is given by $\theta$:

$$
e^{j \theta} = \cos \theta + j \sin \theta
$$

This is known as **Euler's formula**. One may slightly generalize this formula to create a representation for any possible vector:

$$
re^{j \theta} = r\cos \theta + jr \sin \theta
$$
<!--ID: 1736586933773-->

## Complex operations

Operations may be performed on either form of complex numbers. However, the Cartesian form is better suited for addition and subtraction, while the polar form is more suited for multiplication and division

| Operation      | Cartesian           | Polar                      |
| -------------- | ------------------- | -------------------------- |
| Addition       | Vector addition     | Convert to Cartesian first |
| Multiplication | Polynomial algebra  | Add exponents              |
| Division       | Complex conjugation | Subtract exponents         |
<!--ID: 1736586933776-->

### Complex addition

**Complex addition** is ordinary vector addition and is usually best performed with the Cartesian representation.
<!--ID: 1736785711518-->

### Complex multiplication and division

**Complex multiplication and division** may be done algebraically with the Cartesian form but is best done with the polar form, which allows one to simply add the angles together. Complex multiplication and division **scale and rotate** a complex number.
<!--ID: 1736785711521-->

### Complex conjugation

Given the Cartesian representation of a complex number:

$$
x + jy
$$

its **complex conjugate** is given by:

$$
x - jy
$$

This has the effect of **flipping** its vector representation vertically about the real axis on the complex plane. The equivalent for polar representations is therefore to flip the sign of its angle:

$$
re^{j \theta} \to re^{-j \theta}
$$

The notation for the complex conjugate of some complex number $z$ is $z^*$. Note also that:

$$
\begin{align*}
\frac{z + z^*}{2} = \Re\{z\} && \frac{z - z^*}{2j} = \Im\{z\} && zz^* = r
\end{align*}
$$

These equivalences follow from the fact that $z^*$ simply flips the sign of the imaginary part.
<!--ID: 1736586933777-->

## Roots of unity

The **roots of unity** for some integer $n \geq 1$ is the set of (complex) solutions for $z^n = 1$. These solutions comprise $n$ evenly-spaced vectors lying on the unit circle.
<!--ID: 1736785711523-->

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.

[^1]: See [here](https://www.youtube.com/watch?v=ZxYOEwM6Wbk) for an introduction to the intuition behind Euler's formula.
