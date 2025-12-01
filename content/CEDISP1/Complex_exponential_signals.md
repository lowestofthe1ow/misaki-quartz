---
target-deck: CEDISP1::Complex exponential signals
tags: [CEDISP1]
title: Complex exponential signals
---

## Complex exponential signal

Recall that the general formula for a sinusoid is given by:

$$
A\cos(\omega t + \phi)
$$

This is the real part of some complex number, given as follows:

$$
\begin{align*}
Ae^{j(\omega t + \phi)} &= A\cos(\omega t + \phi) + Aj\sin(\omega t + \phi) \\
\Re\{Ae^{j(\omega t + \phi)}\} &= A\cos(\omega t + \phi)
\end{align*}
$$

Thus the function:

$$
z(t) = Ae^{j(\omega t + \phi)}
$$

Can be used as an **alternative representation** of the sinusoid. This is known as the **complex exponential signal**.
<!--ID: 1738378824158-->

### Complex amplitude

Notice that the complex exponential signal can also be expressed as follows:

$$
z(t) = Ae^{j(\omega t + \phi)} = Ae^{j(\omega t + \phi)} = Ae^{j\omega t}e^{j\phi}
= \boxed{Xe^{j\omega t}}
$$

Here $X = e^{j\phi}$ is known as the **complex amplitude**. It is also known as a **phasor** (as it represents the *phase shift* of the signal).
<!--ID: 1738378824161-->

## Inverse Euler's formulas

The **inverse Euler's formulas** allow us to write the cosine function in terms of complex exponentials:

$$
\begin{align*}
\cos \theta = \frac{e^{j\theta} + e^{-j \theta}}{2} &&
\sin \theta = \frac{e^{j\theta} - e^{-j \theta}}{2j}
\end{align*}
$$

The cosine signal $x(t) = A\cos(\omega t + \phi)$ can then be expressed as the sum of a positive and negative-frequency complex exponential signal:

$$
\begin{align*}
A\cos(\omega t + \phi)
&= A\frac{e^{j(\omega t + \phi)}+e^{-j(\omega t + \phi)}}{2} \\
&= \frac{X}{2}e^{j\omega t} + \frac{X^*}{2}e^{-j\omega t}
\end{align*}
$$

Where $X = Ae^{j\phi}$ and $X^* = Ae^{-j\phi}$.
<!--ID: 1739323216633-->

## Phasor addition

A simple case of the adding two or more sinusoidal signals is when all the signals have the same frequency. A sum of cosine signals of differing amplitudes and phase shifts but with the same frequency can be reduced to a **single** cosine signal of the same frequency.

Given two signals $x_1(t)$ and $x_2(t)$:

1. Represent $x_1(t)$ and $x_2(t)$ by their phasors:

$$
\begin{align*}
X_1 = A_1 e^{j\phi_1} && X_2 = A_2 e^{j\phi_2}
\end{align*}
$$

2. Convert both phasors to rectangular form.
3. Add via complex addition.
4. Convert the result back to polar form to obtain $X_3$. This is the phasor for the result.

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.
<!--ID: 1739323216642-->
