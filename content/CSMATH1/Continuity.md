---
target-deck: CSMATH1::Continuity
tags: [CSMATH1]
title: Continuity
---

## Continuity

The function $f$ is said to be **continuous** at the number $a$ if and only if the following three conditions are satisfied:

1. $f(a)$ exists;
2. $\lim_{x \to a} f(x)$ [[Limits#Two-sided limit|exists]];
3. $\lim_{x \to a} f(x) = f(a)$

>[!warning] If one of these conditions fails to hold at $a$, the function is said to be **discontinuous**.
<!--ID: 1707819157587-->

### Removable and essential discontinuities

If a function $f$ is discontinuous at $a$ but $\lim_{x \to a} f(x)$ exists, then either $f(a)$ does not exist or $\lim_{x \to a} f(x) \neq f(a)$. This means that $f$ has a **removable discontinuity** at $a$.

A discontinuity that is **not** removable is called an **essential discontinuity**.

>[!info] A removable discontinuity can also be called a point at which the function is discontinuous but one at which the function can be **redefined** such that the function is continuous.
<!--ID: 1707819157593-->

#### Infinite discontinuity

An **infinite discontinuity** is a type of **essential discontinuity** since the limit at the point does not exist; the value of $x$ [[Infinite_limits_and_limits_at_infinity#Infinite limit theorems|increases or decreases without bound]]. For instance, the function:

$$
f(x) = \frac{1}{x^2}
$$

—is discontinuous at $x=0$, as $\lim_{x \to 0} f(x) = \infty$ and therefore does not exist.
<!--ID: 1707819157598-->

#### Jump discontinuity

An **infinite discontinuity** is a type of **essential discontinuity** since the limit at the point does not exist; $\lim_{x \to a^+} f(x) \neq \lim_{x \to a^-} f(x)$. For instance, the function:

$$
f(x) = \left\{\begin{array}{lr}
1, & \text{if } x \geq 0 \\
-1, & \text{if } r < 0 
\end{array}\right.
$$

—is discontinuous at $x=0$, as $\lim_{x \to 0^+} f(x) \neq \lim_{x \to 0^-} f(x)$ and therefore does not exist.
<!--ID: 1707819157604-->

### Continuity on an open interval

A function is said to be continuous on an open interval if and only if it is continuous at **every number in the open interval**.
<!--ID: 1707819157609-->

### Right-hand continuity

A function is said to be continuous from the right at the number $a$ if and only if the following three conditions are satisfied:

1. $f(a)$ exists;
2. $\lim_{x \to a^+} f(x)$ [[Limits#Right-hand limit|exists]];
3. $\lim_{x \to a^+} f(x) = f(a)$

>[!info] In general, a function $f$ is right-continuous at a point $x=c$ if $\lim_{x \to c^+} f(x) = f(c)$.
<!--ID: 1707819157614-->

### Left-hand continuity

A function is said to be continuous from the left at the number $a$ if and only if the following three conditions are satisfied:

1. $f(a)$ exists;
2. $\lim_{x \to a^-} f(x)$ [[Limits#Left-hand limit|exists]];
3. $\lim_{x \to a^-} f(x) = f(a)$

>[!info] In general, a function $f$ is left-continuous at a point $x=c$ if $\lim_{x \to c^-} f(x) = f(c)$.
<!--ID: 1707819157617-->

### Continuity at a closed interval

A function whose domain includes the closed interval $[a, b]$ is said to be continuous on $[a, b]$ if and only if it is:

1. Continuous on the open interval $(a, b)$;
2. Continuous from the right at $a$;
3. Continuous from the left at $b$.
<!--ID: 1707819157622-->

### Continuity on a half-open interval

 1. A function whose domain includes the interval half-open interval to the right $[a, b)$ is continuous on $[a, b)$ if it is continuous on the open interval $(a, b)$ and continuous from the right at $a$.
 2. A function whose domain includes the interval half-open interval to the left $(a, b]$ is continuous on $(a, b]$ if it is continuous on the open interval $(a, b)$ and continuous from the left at $b$.
<!--ID: 1707819157626-->
