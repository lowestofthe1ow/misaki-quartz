---
target-deck: CE-MATH::Fourier series
tags: [CE-MATH]
title: Fourier series
---

## Periodic functions

A function $f(x)$ is said to be **periodic** if there exists some $T > 0$ such that:

$$
f(x + T) = f(x)
$$

for **all** values of $x$ within the domain of $f$. Here $T$ is known as the **period** of the function. For example, the function $\sin{x}$ is periodic with period $2\pi$ because:

$$
\sin{x} = \sin{(x + 2\pi)} = \sin{(x + 4\pi)} = \dots
$$

## Fourier series

A **Fourier series** is an expansion of a periodic function into some infinite sum of trigonometric functions. It usually takes the form:

$$
f(x) = a_0 + \sum_{n=1}^{\infty}{(a_n \cos{nx} + b_n \sin{nx})}
$$

where $a_0$, $a_n$, and $b_n$ are a set of constants known as the **Fourier series coefficients**.

>[!info] Why do we extract $a_0$ from the summation?
>Consider the starting term of the summation when we begin at $n=0$:
>
>$$
> a_0 \cos{0x} + b_n \sin{0x}
> $$
>
> Note that $\cos{0} = 1$ and $\sin{0} = 0$. The expression then simplifies to just $a_0$, which is why we extract it from the summation and begin at $n=1$ instead.

### Fourier series coefficients

The **Fourier series coefficients** may be obtained as follows:

$$
\begin{align*}
a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} {f(x) \ dx} &&
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} {f(x) \cos{nx} \ dx} &&
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} {f(x) \sin{nx} \ dx} &&
\end{align*}
$$

for the range $-\pi$ to $\pi$[^1].

>[!info] Note that $a_0$ is the **mean value** of the waveform.

### The phase-amplitude form

Consider a trigonometric expression of the form $a \sin{x} + b \cos{x}$. It may be transformed as follows[^2]:

$$
\begin{align*}
a \sin{x} + b \cos{x} = c\sin{(x + \alpha)} && c = \sqrt{a^2 + b^2}
\end{align*}
$$

In this form, $c$ is known as the **amplitude** (as the expression is for a sinusoidal wave), and $\alpha$ is known as the **phase angle**. Note that the Fourier series terms are in this same form (that is, each term is the sum of a sine and a cosine expression). Thus, we can express the entire series in the form:

$$
f(x) = a_0 + \sum_{n=1}^{\infty}{c_n \sin{(nx + \alpha_n)}}
$$

The amplitudes $c_n$ is likewise given by:

$$
c_n = \sqrt{a_n^2 + b_n^2}
$$

Recall that $\tan{\alpha} = \frac{b}{a}$ from the definition of the tangent. The phase angles $\alpha_n$ are therefore are given by:

$$
\alpha_n = \arctan{\frac{b_n}{a_n}}
$$

### The Fourier sum at a point of discontinuity

Consider the waveform:

![[discontinuity.png|400]]

Clearly $x=\frac{\pi}{2}$ is a point of discontinuity as the function is not precisely defined at that point. However, it is possible to calculate the sum of the Fourier series at this point; it is given by the **mean** of the function's two limits (from the left and from the right) as it approaches the point of discontinuity.

In this case, the limiting value of $f(x)$ as it approaches $x=\frac{\pi}{2}$ is $-3$ from the left and $8$ from the right. Thus, the sum of the Fourier series at $x = \frac{\pi}{2}$ is given by:

$$
\frac{8 + (-3)}{2} = \frac{5}{2}
$$

### Fourier series of odd and even functions

A function $f(x)$ is **even** if $f(-x) = f(x)$ for all values of $x$ in its domain. The graphs of such functions will be symmetrical about the $y$-axis. Examples of such functions are quadratic polynomial functions and the **cosine** function.

![[even.png|600]]

$f(x)$ is instead **odd** if $f(-x) = -f(x)$ for all values of $x$ in its domain. Examples include the **cubic** polynomial function and the **sine** function.

![[odd.png|600]]

The Fourier series of an **even** periodic function with period $2\pi$ will contain only **cosine terms** (and potentially a constant term). This is because the total area under a curve for the sine terms is zeroed out.

Likewise, the Fourier series of an **odd** periodic function with period $2\pi$ will only contain **sine terms** (and potentially a constant term).

[^1]: The proof for each is outside the scope of the course (they rely on the sine and cosine functions being [orthogonal](https://en.wikipedia.org/wiki/Orthogonal_functions)), but an intuitive explanation is available [here](https://www.youtube.com/watch?v=vA9dfINW4Rg).
[^2]: A proof is available [here](https://en.wikibooks.org/wiki/Trigonometry/Simplifying_a_sin(x)_%2B_b_cos(x)).
