---
target-deck: CE-MATH::Laplace transform
tags: [CE-MATH]
title: Laplace transform
---

## Laplace transform

The **Laplace transform** of a function $f(t)$ is given by:

$$
\mathcal{L}\{f(t)\} = \int_0^\infty {e^{-st} f(t) \ dt}
$$

where $s$ is some real or complex parameter known as the **complex frequency** or the **Laplace operator**. Note that the integration with respect to $t$ on the right-hand side means that the final function is **strictly in terms of $s$** (that is, $\mathcal{L}\{f(t)\}$ is a function of $s$).

This means that the Laplace transform provides a way to solve differential equations by converting them into algebraic equations in terms of the variable $s$[^1].

>[!info] The Laplace transform for a function can be denoted in various (equivalent) ways:
>$$
>\begin{align*}
>\mathcal{L}\{f(t)\} && L\{f(t)\} &&
>\mathcal{L}(f) && Lf &&
>\bar{f}(s) && f(s)
>\end{align*}
>$$

### Linearity of a Laplace transform

A Laplace transform is **linear**, that is, given a constant $k$:

$$
\mathcal{L}\{kf(t)\} = k\mathcal{L}\{f(t)\}
$$

Likewise, given constants $a$ and $b$:

$$
\mathcal{L}\{af(t) + bg(t)\} = a\mathcal{L}\{f(t)\} + b\mathcal{L}\{g(t)\}
$$

### Laplace transforms of elementary functions

#### $f(t) = 1$

$$
\begin{align*}
\mathcal{L}\{1\} &= \int_0^\infty{e^{-st}(1) \ dt} \\
&= \left [ \frac{e^{-st}}{-s} \right ]_0^\infty \\
&= -\frac{1}{s} (0 - 1)
&& e^{-st} \text{ tends to } 0 \text{ as it goes to infinity} \\
&= \boxed{\frac{1}{s}}
\end{align*}
$$

#### $f(t) = k$

Given $f(t) = k$ where $k$ is some constant, we invoke linearity to show that:

$$
\mathcal{L} \{ k \} = k\mathcal{L} \{ 1 \} 
= k \left ( \frac{1}{s} \right )
= \boxed{\frac{k}{s}}
$$

#### $f(t) = e^{at}$

Given that $a \in \mathbb{R}$ is a real constant and that $a \neq 0$:

$$
\begin{align*}
\mathcal{L}\{1\} &= \int_0^\infty{e^{-st}(e^{at}) \ dt} \\
&= \left [ \frac{e^{-(s - a)t}}{-(s-a)} \right ]_0^\infty \\
&= -\frac{1}{-(s-a)} (0 - 1)
&& e^{-st} \text{ tends to } 0 \text{ as it goes to infinity} \\
&= \boxed{\frac{1}{s-a}}
\end{align*}
$$

#### $f(t) = \cos{at}$

We perform an integration by parts twice (or, more simply Euler's cosine identity) to arrive at[^2]:

$$
\begin{align*}
\mathcal{L}\{\cos{at}\} &= \int_0^\infty e^{-st} \cos{at} \ dt \\
&= \boxed{\frac{s}{s^2 + a^2}}
\end{align*}
$$

#### $f(t) = t$

We again perform an integration by parts to arrive at[^3]:

$$
\begin{align*}
\mathcal{L}\{t\} &= \int_0^\infty e^{-st} t \ dt \\
&= \boxed{\frac{1}{s^2}}
\end{align*}
$$

### Laplace transforms of derivatives

### First derivative

The Laplace transform of the first derivative $f'(x)$ of $f(x)$ is given by:

$$
\mathcal{L}\{f'(t)\} = \int_0^\infty {e^{-st} f'(t) \ dt}
$$

We can integrate by parts with $u = e^{-st}$ and $v = f(t)$ to arrive at:

$$
\boxed{\mathcal{L}\{f'(t)\} = s \mathcal{L}\{f(t)\} - f(0)}
$$

### Second derivative

The formula for the Laplace transform of the second derivative $f''(x)$ takes on a similar form and may also be obtained by an integration by parts:

$$
\boxed{\mathcal{L}\{f''(t)\} = s^2 \mathcal{L}\{f(t)\} - sf(0) - f'(0)}
$$

Note how this is a quadratic expression in terms of $s$ rather than a linear one as was the case with the transform of the first derivative.

## Inverse Laplace transform

The inverse function of the Laplace transform, known as an **inverse Laplace transform**, will revert the transform (that is, given a transformed function $\mathcal{L}\{f(t)\}$, the inverse transform will yield the original function $f(t)$).

This may be useful when solving differential equations:

1. Take the Laplace transform of both sides of the equation.
2. Substitute the given initial conditions.
3. Solve for $\mathcal{L}\{y\}$
4. Determine $y$.

[^1]: In this way, the Laplace transform can be seen as a continuous analog to a [power series](https://en.wikipedia.org/wiki/Power_series). An explanation for this intuition can be found [here](https://www.youtube.com/watch?v=zvbdoSeGAgI) and [here](https://www.youtube.com/watch?v=hqOboV2jgVo).
[^2]: A complete proof for $\mathcal{L}\{\cos{at}\}$ can be found [here](https://proofwiki.org/wiki/Laplace_Transform_of_Cosine).
[^3]: A complete proof for $\mathcal{L}\{t\}$ can be found [here](https://proofwiki.org/wiki/Laplace_Transform_of_Identity_Mapping).
