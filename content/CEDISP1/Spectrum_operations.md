---
target-deck: CEDISP1::Spectrum operations
tags: [CEDISP1]
title: Spectrum operations
---

## Operations on the spectrum
<!--ID: 1739323216560-->

### Scaling

Multiplying a signal $x(t)$ by a scale factor multiplies all of the complex amplitudes in its spectrum representation by the same factor:

$$
\gamma x(t) = \gamma \sum_{k = -M}^M a_k e^{j2\pi f_k t}
= \sum_{k = -M}^M (\gamma a_k) e^{j2\pi f_k t}
$$
<!--ID: 1739323216570-->

### Adding a constant

Adding a constant to a signal changes the complex amplitude at $f =0$ (and nowhere else). Because the amplitude is real-valued at $f=0$, this constant is simply added to $a_0$:

$$
x(t) + c = \left( \sum_{f_k \neq 0} {a_k e^{j2\pi f_kt}} \right)
+ a_0 + c 
$$

The new amplitude at $f = 0$ is thus $a_0 + c$.
<!--ID: 1739323216580-->

### Adding two signals

Consider the following spectrum plots for (a) the signal $x_1(t)$, (b) the signal $x_2(t)$, and (c) their sum $x_1(t) + x_2(t)$.

![[addition.png|500]]

Frequencies in $x_1(t)$ that are not in $x_2(t)$ (and vice versa) are simply included in the sum with no change to the complex amplitudes at those frequencies. However, for frequencies that appear in both addend signals, the corresponding complex amplitudes must be added with phasor addition, e.g. for the frequency $f = 0$:

$$
3 + 3e^{j \pi} = 3(e^{j\pi} + 1) = 0
$$
<!--ID: 1739323216590-->

### Time-shifting

Time-shifting a signal $x(t)$ to produce a new signal $x(t - t_0)$ will result in a **phase change** in the complex amplitudes of the spectrum. Each component is then multiplied by the complex exponential:

$$
e^{-j 2\pi f_k t_0}
$$

We write this as:

$$
\begin{align*}
x(t) &= \sum_{k = -M}^M a_k e^{j2\pi f_k t} \\
x(t - t_0) &= \sum_{k = -M}^M \left( a_k e^{-j2\pi f_k t_0} \right) e^{j2\pi f_k t}
\end{align*}
$$
<!--ID: 1739323216600-->

### Differentiating

Differentiating a signal $x(t)$ to produce a new signal $\frac{d}{dt}$ will multiply each complex amplitude in the spectrum by:

$$
j2\pi f_k
$$

This is because the differentiation rule for $e^x$ holds, even when $x$ is imaginary:

$$
\frac{d}{dx} e^x = xe^x
$$
<!--ID: 1739714911665-->

### Frequency-shifting

If you multiply a signal by a sinusoid or a complex exponential of the form:

$$
Ae^{j\phi}e^{j2\pi f_c t}
$$

the frequencies in the spectrum are changed as follows:

- Each frequency $f_k$ is shifted to the right by $f_c$. In other words, each frequency $f_k$ becomes $f_k + f_c$ instead.
- Each complex amplitude is multiplied by $Ae^{j\phi}$.

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.
<!--ID: 1739714911671-->
