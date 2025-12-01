---
target-deck: CEDISP1::Analog to digital conversion
tags: [CEDISP1]
title: Analog to digital conversion
---

## Sampling $x(t)$

An analog (*continuous-time*) signal $x(t)$ may be converted into a digital sequence $x[n]$ by recording values of $x(t)$ at equally-spaced time instants. In other words,

$$
x[n] = x(nT_s) \text{ for } -\infty < n < \infty
$$
<!--ID: 1743863524446-->

### Sampling rate $f_s$

The **sampling rate** $f_s$ refers to the number of samples taken per unit of time and is given as the inverse of the **sampling period** (the interval between samples).

$$
f(s) = \frac{1}{T_s}
$$

Uniform sampling occurs when, ideally, $\displaystyle x[n] = x(nT_s) = x(\frac{n}{f_s})$
<!--ID: 1743863524448-->

### Digital frequency $\hat{\omega}$

The **digital frequency** $\hat{\omega}$ is a dimensionless quantity given by:

$$
\hat{\omega} = \omega T_s = \frac{\omega}{f_s}
$$

This is also known as the **normalized radian frequency**.
<!--ID: 1743863524451-->

## Nyquist-Shannon sampling theorem

The Nyquist-Shannon sampling theorem states that a sinusoid can be reconstructed from its samples if we have at least two samples per period. Thus:

$$
f_s > 2f_\text{max}
$$

where $2f_\text{max}$ is known as the **Nyquist** rate.
<!--ID: 1743863524454-->

### Aliasing

**Aliasing** occurs when other frequencies give the same $\hat{\omega}$. This means it is impossible to recreate the original signal from which the samples were taken, as there may be multiple possible signals that the samples could have belonged to.
<!--ID: 1743863524456-->

### Folding

**Folding** is a type of aliasing that occurs from the evenness of the cosine function. In other words, folding produces aliases from the negative frequencies of cosine.
<!--ID: 1743863524459-->

## Digital-to-analog reconstruction

**Reconstruction** involves converting a digital sequence into a continuous-time function $x(t)$ through a "connect-the-dots" process known as **interpolation**.

$$
y(t) = \sum_{n = -\infty}^{\infty} y[n] p(t - nT_s)
$$

The above is a general expression for D-to-A conversion as a sum of shifted pulses weighted by the digital sequence $y[n]$.
<!--ID: 1743863524461-->
