---
target-deck: CSMATH1::Extrema graphs::Increasing and decreasing functions and the first derivative test
tags: [CSMATH1]
title: Increasing and decreasing functions and the first derivative test
---

## Increasing and decreasing functions

A function $f$ defined on an interval is **increasing** on that interval if and only if $x_1 < x_2 \to f(x_1) < f(x_2)$ where $x_1$ and $x_2$ are any numbers in the interval. It is **decreasing** on that interval if and only if $x_1 > x_2 \to f(x_1) > f(x_2)$.

>[!important] If a function is either increasing or decreasing on an interval, then it is said to be **monotonic** on the interval.

<!--ID: 1710954136349-->

### Derivatives and monotonic functions (6)

1. If $f'(x) > 0$ for all $x \in (a,b)$, then $f$ is **increasing** on $[a,b]$.
2. If $f'(x) < 0$ for all $x \in (a,b)$, then $f$ is **decreasing** on $[a,b]$.
<!--ID: 1710954136355-->

#### Determine the intervals on which the function $f(x) = x^2-4$ is increasing or decreasing

|Interval|$f'(x)$|Conclusion|
|---|---|---|
|$x<0$|$-$|$f(x)$ is decreasing|
|$x=0$|$0$|$f(x)$ is changing directions|
|$x>0$|$+$|$f(x)$ is increasing|

The function $f$ is continuous **everywhere**.

$$
f'(x)=2x
$$

$f'(x)$ exists for all values of $x$. Investigate critical points by setting $f'(x)=0$:

$$
2x = 0 \equiv x = 0
$$

Thus, investigate the intervals $(-\inf, 0]$ and $[0, +\inf)$ (see above)

<!--ID: 1710954136358-->

## The first derivative test

![[first_derivative_test.png]]

Let $c$ be a [[Extrema_over_a_closed_interval#Critical numbers|critical number]] of a function $f$ continuous on the open interval $(a,b)$.

- If $f'(x)>0$ for all $x$ in some open interval $(d,c)$ and $f'(x)<0$ for all $x$ in some open interval $(c,e)$ where $d,e \in (a,b)$, then $f$ has a **relative maximum** at $c$.

>[!info] $f$ is **increasing** until it reaches the point $c$, after which it **changes direction** and begins **decreasing**.

- If $f'(x)<0$ for all $x$ in some open interval $(d,c)$ and $f'(x)>0$ for all $x$ in some open interval $(c,e)$ where $d,e \in (a,b)$, then $f$ has a **relative minimum** at $c$.

>[!info] $f$ is **decreasing** until it reaches the point $c$, after which it **changes direction** and begins **increasing**.

- Otherwise, $f$ has **neither** a **relative maximum** nor **relative minimum** at $c$.

>[!warning] Note that the above **applies** even when $f'(c)$ **does not exist**.

<!--ID: 1711041022327-->

### Finding relative extrema of a function $f(x)$

1. Find $f'(x)$
2. Identify the critical numbers of $f$
3. Apply the first derivative test
<!--ID: 1711041022331-->

### Plot the graph of $f(x)=x^3-9x^2+15x-5$ and determine its relative extrema

Compute $f'(x)$ and find all of the critical numbers of $f$:

$$
\begin{align*}
f'(x) &= x^3-9x^2+15x-5 \\
0 &= 3(x-5)(x-1) \\
\therefore x &= 5 \\
x &= 1
\end{align*}
$$

Perform the first derivative test:

![[first_derivative_test_example.png]]

Graph the function:

![[first_derivative_test_graph.png]]

<!--ID: 1711041022336-->
