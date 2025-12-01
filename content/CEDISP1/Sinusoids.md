---
target-deck: CEDISP1::Sinusoids
tags: [CEDISP1]
title: Sinusoids
---

## Sinusoids

**Sinusoids** are a general class of signals commonly referred to as **cosine signals** (or, equivalently, **sine signals**). The general formula for a sinusoid is:

$$
x(t) = A \cos ( \omega t + \phi )
$$

This is known as the **phase shift form**. $\omega$ is the (radian) **frequency**, $A$ is the **amplitude**, and $\phi$ is the **phase**. The argument for the cosine function is a function in terms of time $t$.
<!--ID: 1736586933780-->

### Amplitude

The **amplitude** is a scaling factor that determines how vertically large the cosine signal will be. A signal of the form $A \cos(\omega t + \phi)$ will oscillate between $+A$ and $-A$.
<!--ID: 1736586933782-->

### Phase

The **phase** $\phi$, measured in radians, shifts the input to the cosine function by some amount. Note that the sine function is a special case of the cosine function phase shifted by $\frac{pi}{2}$.

$$
\sin(x) = \cos(x - \frac{\pi}{2})
$$

Note that this shift is **not** equivalent to a time shift. Also, since the cosine (and sine) functions are periodic with period $2\pi$, adding $2\pi$ to the input of the function does not change the signal, i.e. $\cos(x) = \cos(x + 2\pi)$.
<!--ID: 1736586933784-->

#### Time shift

A **time shift** shifts the graph of the function by adding or subtracting to the time input $t$. Replacing $t$ with $t - n$ shifts the graph $n$ units to the right. ($t + n$ shifts it to the left instead). As such, the following signal has a peak at $t = t_m$:

$$
A \cos(\omega (t - t_m))
$$
<!--ID: 1736586933786-->

#### Phase-time shift conversion

A time shift can be converted to a phase shift as follows:

$$
\phi = -\omega t_m
$$
<!--ID: 1736586933788-->

### Radian frequency

The **radian frequency** $\omega$ is measured in **radians per second**:

$$
\omega = 2 \pi f
$$

where $f$ is the number of cycles per second, measured in **hertz**.
<!--ID: 1736586933791-->

#### Period

The **period** $T$ is measured as the reciprocal of the number of cycles per second, i.e.:

$$
T = \frac{1}{f} = \frac{2\pi}{\omega}
$$
<!--ID: 1736586933794-->

## Constructing a sinusoid formula from its plot

The sinusoid equation describing a signal given its plot can be obtained as follows:

1. Measure the period $T$ and find $\omega = \frac{2 \pi}{T}$
2. Measure the time $t_m$ at which a peak occurs to calculate the phase $\phi = -\omega t_m$
3. Measure the height of the positive peak $A$
<!--ID: 1736586933796-->

## Attenuation

**Attenuation** refers to the exponential decay of a signal's amplitude:

$$
Ae^{-\frac{t}{\alpha}} \cos(\omega t + \phi)
$$
<!--ID: 1736586933798-->

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.
