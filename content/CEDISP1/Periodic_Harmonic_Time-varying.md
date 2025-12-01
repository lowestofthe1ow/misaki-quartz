---
target-deck: CEDISP1::Periodic/harmonic signals and time-varying frequencies
tags: [CEDISP1]
title: Periodic/harmonic signals and time-varying frequencies
---

## Harmonic frequencies

Consider the following sum of sinusoids:

$$
x(t) = A_0 + \sum_{k=1}^N {A_k \cos(2\pi kf_0 t + \phi_k)}
$$

$x(t)$ is the **sum** of sinusoids whose frequencies are all integer multiples of some value $f_0$. These components can then be said to be **harmonically related**, as the frequency of the $k$th sinusoid component is given by:

$$f_k = kf_0$$

$f_0$ is then called the **fundamental frequency**.

>[!info] $f_0$ itself does not need to be an integer. However, all other frequencies in the spectrum **must** be integer multiples of $f_0$.

The sum of harmonically related signals is **periodic** at the fundamental frequency, i.e., the **fundamental period** is given by:

$$T_0 = \frac{1}{f_0}$$
<!--ID: 1743401725744-->

### Finding the fundamental frequency $f_0$

Consider the following spectrum:

![[spectrum.png|500]]

The fundamental frequency $f_0$ can be found by finding the greatest common divisor of the spectrum frequencies. In this case, $\text{GCD}(100, 250) = 50$, thus $f_0 = 50 \text{ Hz}$.
<!--ID: 1743401725746-->

## Time-varying frequencies and the time-frequency spectrum

Waveforms of the form:

$$
\begin{align*}
x(t) &= A_0 + \sum_{k = 1}^N A_k \cos(\omega_kt + \phi_k) \\
&= A_0 + \sum_{k = 1}^N A_k \cos(2\pi f_kt + \phi_k)
\end{align*}
$$

make the assumption that the frequency remains **constant** with time. However, in cases such as:

$$
\cos(\omega t^2) = \cos[(\omega t)t]
$$

the frequency is instead a function of time. Such waveforms are said to have **time-varying frequencies** and may be visually represented with a **spectrogram**.
<!--ID: 1743401725749-->

### Stepped frequency

A simple example of a signal with time-varying frequencies is a waveform whose frequency holds for a short duration before *stepping* to a higher or lower frequency. Consider the C-major scale:

| Note   | Frequency (Hz) |
|--------|----------------|
| C4     | 262            |
| D4     | 294            |
| E4     | 330            |
| F4     | 349            |
| G4     | 392            |
| A4     | 440            |
| B4     | 494            |
| C5     | 523            |

Playing each note on this scale in **succession** would result in a time-frequency diagram similar to the following:

![[time_freq.png|500]]

A frequency of $262 \text{ Hz}$ is synthesized for the first 200 milliseconds, followed by $294 \text{ Hz}$ and so on. Note how this appears on a spectrogram and how this notation is similar to musical notation:

![[spec_music.png|500]]
<!--ID: 1743401725751-->

### Frequency modulation and chirp signals

In addition to the case of stepped signals, the frequency may also change **continuously** with time (i.e., not stepped, or **phase modulation**), e.g.:

$$
x(t) = \cos(2\pi f_c t + v(t))
$$

Consider the case of the **chirp signal**, which has a **quadratic** phase:

$$
\begin{align*}
x(t) &= A\cos(\alpha t^2 + 2\pi f_0t + \phi) \\
&= A\cos(\psi(t))
\end{align*}
$$

Note that the input angle to the cosine function is itself a quadratic function of $t$, $\psi(t)$. Recall that the frequency is the time derivative of this input angle. In other words, we can define **instantaneous frequency** to be, in the above example:

$$
\begin{align*}
\omega(t) &= \frac{\text{d}}{\text{d}t} \psi(t) \\
&= \frac{\text{d}}{\text{d}t} (\alpha t^2 + 2\pi f_0t + \phi) \\
&= 2\alpha t + 2\pi f_0
\end{align*}
$$
<!--ID: 1743401725753-->

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.
