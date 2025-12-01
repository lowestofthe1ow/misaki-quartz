---
target-deck: CEDISP1::Frequency response of FIR filters
tags: [CEDISP1]
title: Frequency response of FIR filters
---

## Frequency response of FIR filters

A continuous sinusoidal signal of the form

$$
x(t) = Ae^{j\phi}e^{j\omega t}
$$

may be sampled at a normalized radian frequency $\hat{\omega} = \omega T_s$ (where $T_s$ is the sampling period) to produce $x[n] = x(nT_s)$:

$$
x[n] = Ae^{j\phi}e^{j\hat{\omega}n}
$$

If $x[n]$ is fed as the input to a FIR filter, we get:

$$
\begin{align*}
y[n] &= \sum_{k=0}^M b_k Ae^{j\phi}e^{j\hat{\omega}(n - k)} \\
&= \sum_{k=0}^M b_k Ae^{j\phi}e^{j\hat{\omega}n}e^{-j\hat{\omega}k} \\
&= \left( \sum_{k=0}^M b_k e^{-j\hat{\omega}k} \right) Ae^{j\phi}e^{j\hat{\omega}n} \\
&= \left( \sum_{k=0}^M b_k e^{-j\hat{\omega}k} \right) x[n] \\
&= \mathcal{H}(e^{j\hat{\omega}}) x[n]
\end{align*}
$$

$\mathcal{H}(\hat{\omega})$ is known as the **frequency response** of the filter.

$$
\mathcal{H}(e^{j\hat{\omega}}) = \sum_{k=0}^M b_k e^{-j\hat{\omega}k} = \sum_{k=0}^M h[n] e^{-j\hat{\omega}k}
$$

>[!error] The expression $y[n] = \mathcal{H}(e^{j\hat{\omega}}) x[n]$ applies if and only if $x[n]$ is exactly of the form $Ae^{j\phi}e^{j\hat{\omega}n}$. Otherwise, it is **completely meaningless**.

The fact that $\mathcal{H}(e^{j\hat{\omega}})$ is a complex exponential implies that when the input signal to an LTI FIR filter is a complex exponential signal, then the output is also a complex exponential signal of the **same frequency** but with a different complex amplitude.

Note also that there exists a **unique relationship** between the impulse response $h[n]$ and the frequency response $\mathcal{H}(e^{j\hat{\omega}})$, i.e., one can go back-and-forth between the impulse response (time-domain) and the frequency response (frequency-domain). We can express this relationship with the observation that **the frequency response of a FIR filter is the discrete-time Fourier transform of its impulse response**.
<!--ID: 1743863524407-->

### Frequency response of a sum of sinusoids

If the input signal consists of many complex exponential signals, then the frequency response can be applied to find the output due to each component separately, and the results added to find the total output. This is known as **superposition**
<!--ID: 1743863524413-->
