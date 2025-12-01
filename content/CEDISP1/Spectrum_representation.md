---
target-deck: CEDISP1::Spectrum representation
tags: [CEDISP1]
title: Spectrum representation
---

## The spectrum of a sum of sinusoids

Consider the problem of adding $N$ sinusoids, each with independent amplitudes, phases, and frequencies to form a single signal. We represent this mathematically as:

$$
\begin{align*}
x(t) &= A_0 + \sum_{k = 1}^N A_k \cos(\omega_kt + \phi_k) \\
&= A_0 + \sum_{k = 1}^N A_k \cos(2\pi f_kt + \phi_k)
\end{align*}
$$

Where $A_0$ is some constant component added to the signal (where the frequency is zero) and $A_k$, $f_k$, and $\phi_k$ are the amplitudes, frequencies (in Hertz), and phase shifts for each component signal. Note that we can represent each component signal as a complex exponential:

$$
x(t) = A_0 + \sum_{k = 1}^N \Re \left \{ X_k e^{j2\pi f_kt} \right \}
$$

By the inverse Euler's formula, each signal then decomposes into a positive and negative-frequency complex exponential:

$$
x(t) = A_0 + \sum_{k = 1}^N \left \{ 
	\frac{X_k}{2} e^{j2\pi f_kt} + \frac{X_k^*}{2} e^{-j2\pi f_kt}
\right \}
$$

The **spectrum of a sum of sinusoids** is then the following set of pairs:

$$
\left \{
	\left ( X_0, 0 \right ),
	\left ( \frac{1}{2} X_1, f_1 \right ),
	\left ( \frac{1}{2} X_1^*, -f_1 \right ),
	\left ( \frac{1}{2} X_2, f_2 \right ),
	\left ( \frac{1}{2} X_2^*, -f_2 \right ),
	\dots
\right \}
$$
<!--ID: 1739323216610-->

### Finding the spectrum representation

To find the spectrum representation of a sum of $N$ sinusoids:

1. Express each component signal in terms of its phasor representation.
2. Apply the inverse Euler's formula to "split" each signal into a positive and negative frequency.
3. Identify the complex phasors at each frequency $f_k$ and sketch a plot.

**Example**. Find the spectrum representation of the signal

$$
x(t) = 10 + 14\cos \left(
	200\pi t - \frac{\pi}{3}
\right) + 8\cos \left(
	500\pi t + \frac{\pi}{2}
\right)
$$

Observe this signal has three components: a constant component $10$, and two sinusoids of different frequencies. We convert each sinusoid to their phasor representations:

$$
\begin{align*}
x(t) &= 10 + \Re \left\{
	14e^{j(200\pi-\frac{\pi}{3})} + 8e^{j(500\pi + \frac{\pi}{2})}
\right\} \\
&= 10 + \Re \left\{
	14e^{-\frac{j\pi}{3}} e^{200\pi j} + 8e^{\frac{j\pi}{2}} e^{500\pi j}
\right\} \\
&= 10 + \Re \left\{
	X_1 e^{200\pi j} + X_2 e^{500\pi j}
\right\} \\
\end{align*}
$$

We then use the inverse Euler's formula to decompose each component into a pair of conjugate phasors:

$$
x(t) = 10 + \Re \left\{
	\frac{X_1}{2} e^{200\pi j} + \frac{X_1^*}{2} e^{-200\pi j} +
	
	\frac{X_2}{2} e^{500\pi j} + \frac{X_2^*}{2} e^{-500\pi j}
\right\}
$$

We then record the complex amplitudes at the frequencies shown (in Hz, so we convert by $f = \frac{\omega}{2\pi}$):

| Frequency | Complex amplitude                                                                            |
| --------- | -------------------------------------------------------------------------------------------- |
| -250      | $$ \frac{X_2^*}{2} = \left( \frac{8e^{\frac{j\pi}{2}}}{2} \right)^* = 4e^{-\frac{j\pi}{2}}$$ |
| -100      | $$ \frac{X_1^*}{2} = 7e^{\frac{j\pi}{3}}$$                                                   |
| 0         | 10 (**constant** component)                                                                  |
| 100       | $$ \frac{X_1}{2} = 7e^{-\frac{j\pi}{3}}$$                                                    |
| 250       | $$ \frac{X_2}{2} = 4e^{\frac{j\pi}{2}}$$                                                     |

This is plotted graphically as follows:

![[spectrum.png|500]]

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.
<!--ID: 1739323216620-->
