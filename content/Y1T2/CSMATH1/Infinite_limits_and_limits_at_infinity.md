---
target-deck: CSMATH1::Limits::Limits at infinity
tags: CSMATH1
title: Infinite limits and limits at infinity
---

## Infinite limit theorems

<!--ID: 1716721003559-->

### $\frac{1}{x^r}$ where $r \in \mathbb{Z}$ (17)

<!--ID: 1716721003563-->

#### $\lim_{x \to 0^+} \frac{1}{x^r}$

$$
\lim_{x \to 0^+} \frac{1}{x^r} = +\infty
$$

<!--ID: 1706793211587-->

#### $\lim_{x \to 0^-} \frac{1}{x^r}$

$$
\lim_{x \to 0^+} \frac{1}{x^r} = \left\{\begin{array}{lr}
-\infty, & \text{if } r \text{ is odd} \\
+\infty, & \text{if } r \text{ is even} 
\end{array}\right.
$$

<!--ID: 1706793211594-->

### $\frac{g(x)}{f(x)}$ where $a \in \mathbb{R} \land \lim_{x \to a} f(x)=0 \land \lim_{x \to a} g(x)=c \neq0$ (18)

<!--ID: 1716721003567-->

#### $c > 0 \land f(x) \to 0$ through positive values of $f(x)$ (18i)

$$
\lim_{x \to a} \frac{g(x)}{f(x)} = +\infty
$$

<!--ID: 1706696346761-->

#### $c > 0 \land f(x) \to 0$ through negative values of $f(x)$ (18ii)

$$
\lim_{x \to a} \frac{g(x)}{f(x)} = -\infty
$$

<!--ID: 1706696346767-->

#### $c < 0 \land f(x) \to 0$ through positive values of $f(x)$ (18iii)

$$
\lim_{x \to a} \frac{g(x)}{f(x)} = -\infty
$$

<!--ID: 1706696346771-->

#### $c < 0 \land f(x) \to 0$ through negative values of $f(x)$ (18iv)

$$
\lim_{x \to a} \frac{g(x)}{f(x)} = +\infty
$$

<!--ID: 1706696346775-->

### Theorems concerning operations between infinite limits and constant limits

<!--ID: 1716721003571-->

#### Addition of infinite limit and constant limit (19)

$$
\begin{align*}
\lim_{x \to a} f(x) = +\infty \land \lim_{x \to a} g(x) = c \\
\lim_{x \to a} [f(x) + g(x)] = + \infty
\end{align*}
$$

Likewise,

$$
\begin{align*}
\lim_{x \to a} f(x) = -\infty \land \lim_{x \to a} g(x) = c \\
\lim_{x \to a} [f(x) + g(x)] = -\infty
\end{align*}
$$

<!--ID: 1706792001180-->

#### Multiplication of infinite limit and constant limit (20, 21)

$$
\begin{align*}
\lim_{x \to a} f(x) = +\infty \land \lim_{x \to a} g(x) = c \\
c > 0 \to \lim_{x \to a} [f(x)g(x)] = + \infty \\
c < 0 \to \lim_{x \to a} [f(x)g(x)] = - \infty
\end{align*}
$$

Likewise,

$$
\begin{align*}
\lim_{x \to a} f(x) = -\infty \land \lim_{x \to a} g(x) = c \\
c > 0 \to \lim_{x \to a} [f(x)g(x)] = - \infty \\
c < 0 \to \lim_{x \to a} [f(x)g(x)] = + \infty
\end{align*}
$$

<!--ID: 1706793211597-->

## Vertical asymptotes

The line $x = a$ is a **vertical asymptote** of the graph of the function $f$ if at least one of the following is true:

$$
\begin{align*}
\lim_{x \to a^+} f(x) = +\infty \\
\lim_{x \to a^+} f(x) = -\infty \\
\lim_{x \to a^-} f(x) = +\infty \\
\lim_{x \to a^-} f(x) = -\infty
\end{align*}
$$

<!--ID: 1706793211601-->

## Limits at infinity theorems

<!--ID: 1716721003576-->

### $\lim_{x \to +\infty} \frac{1}{x^r}$ (22)

$$
r \in \mathbb{Z} \to \lim_{x \to +\infty} \frac{1}{x^r} = 0 = \lim_{x \to -\infty} \frac{1}{x^r}
$$

<!--ID: 1706793211604-->

## Horizontal asymptote

The line $y = b$ is a **horizontal aymptote** of the graph of the function $f$ if at least one of the following statements is true:

$$
\begin{align*}
\lim_{x \to +\infty} f(x) = b \land \exists N (x > N \to f(x) \neq b)
\lim_{x \to -\infty} f(x) = b \land \exists N (x > N \to f(x) \neq b)
\end{align*}
$$

<!--ID: 1706793211609-->
