---
target-deck: CSMATH1
tags:
title: Derivatives
---

## The secant line

Let $P$ be a **fixed** point on a curve and let $Q$ be a nearby **movable** point on that curve. The line through $P$ and $Q$ is a **secant line**:

![[tangent_line.png]]

Let $P(x_1, f(x_1))$ and $Q(x_2, f(x_2))$, and $\Delta x = x_2 - x_1$. The **secant line** $PQ$ has the following slope:

$$
m_{PQ} = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{f(x_2) - f(x_1)}{\Delta x}
$$

Since $f(x_2) = f(x + \Delta x)$:

$$
m_{PQ} = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x}
$$

The slope of the secant line can be referred to as the **average rate of change between the points $P$ and $Q$ on the curve**.

<!--ID: 1709742068190-->

## The tangent line

The **tangent** line at $P$ is thus the [[Limits|limiting position]] of the secant line as $Q$ moves toward (approaches) $P$ along the curve. This is equivalent to allowing $\Delta x$ to approach 0. In other words, the **slope of the tangent line** is given by the limit:

$$
m_{P} = \lim_{\Delta x \to 0} \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x}
$$

if it [[Limits#Two-sided limit|exists]]. If, [[Infinite_limits_and_limits_at_infinity|instead]]:

$$
\lim_{\Delta x \to 0^+} \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x} = +\infty \text{ or } -\infty
$$

and:

$$
\lim_{\Delta x \to 0^-} \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x} = +\infty \text{ or } -\infty
$$

then the tangent line is given by the vertical line:

$$
x = x_1
$$

>[!info] Normal lines
>The **normal line** to a graph at a given point is the line **perpendicular** (slope $=-\frac{1}{m}$) at that point.

<!--ID: 1709742068204-->

## The derivative of a function

The derivative of the function $f$ is the function $f'$ such that its value at a number $x$ in the domain of $f$ is given by:

$$
f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

if this limit exists. In other words, if this limit exists, then $f'(x)$ gives **the slope of the line tangent to $f(x)$ at $x$**. Note that this is equivalent to:

$$
f'(x) = \lim_{x \to x_1} \frac{f(x) - f(x_1)}{x - x_1}
$$

<!--ID: 1709742068213-->

### Differentiability

The process of computing the derivative is known as **differentiation**. A function is **differentiable** at $x$ if it has a derivative at $x$. It is differentiable on an open interval **if it is differentiable at every number** in the open interval.

<!--ID: 1709742068222-->

#### Differentiability and continuity (1)

If a function is differentiable at $x$, then it is continuous at $x$. The function fails to be differentiable at $x$ if:

1. The function is [[Continuity#Removable and essential discontinuities|discontinuous]] at $x$.
2. The function is continuous at $x$ but the graph has a **vertical tangent line** at $x$
3. The function is continuous at $x$ but the graph has no tangent line at $c$.
<!--ID: 1709742068230-->

### One-sided derivatives

A function $f$ defined on an open interval containing $x_1$ is differentiable if and only if $f'_+ (x_1)$ and $f'_- (x_1)$ both exist and are equal.

<!--ID: 1709742068236-->

#### Derivative from the right

If the function $f$ is defined at $x$, then the derivative from the right of $f$ at $x$, denoted by $f'_+ (x_1)$, is defined by:

$$
f'_+ (x_1) = \lim_{\Delta x \to 0^+} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

if the limit exists.

<!--ID: 1709742068241-->

#### Derivative from the left

If the function $f$ is defined at $x$, then the derivative from the left of $f$ at $x$, denoted by $f'_+ (x_1)$, is defined by:

$$
f'_- (x_1) = \lim_{\Delta x \to 0^-} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

if the limit exists.

<!--ID: 1709742068245-->
