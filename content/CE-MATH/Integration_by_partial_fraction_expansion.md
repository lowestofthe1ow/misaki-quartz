---
target-deck: CE-MATH::Integration by partial fraction expansion
tags: [CE-MATH]
title: Integration by partial fraction expansion
---

## Integration by partial fractions

*See also*: [Partial fraction expansion](https://lpsa.swarthmore.edu/BackGround/PartialFraction/PartialFraction.html)

Functional fractions can be resolved into simpler fractions (i.e., partial fractions) such that these partial fractions can be integrated.
<!--ID: 1727924325626-->

### Partial fraction expansion for unique linear factors

For functional fractions $\frac{f(x)}{g(x)}$ where $g(x)$ is expressible as some product of linear functions $(x+a)(x+b) \dots (x+z)$, where $a \neq b \neq \dots \neq z$ (i.e., the factors are **unique**):

$$
\frac{f(x)}{(x+a)(x+b) \dots (x+z)} = \frac{A}{x+a} + \frac{B}{x+b} + \dots + \frac{Z}{x+z}
$$

for some constants $A, B, \dots Z \in \mathbb{R}$.
<!--ID: 1727924325630-->

#### "Cover-up" method for identifying constants $A, B, \dots Z$

*See also*: [Cover-up method](https://lpsa.swarthmore.edu/BackGround/PartialFraction/PartialFraction.html#cover-up)

In the case where $a, b, \dots z$ are all **unique**, there exists an efficient way to identify $A, B, \dots Z$ for its partial fraction expansion.

For instance, to find $A$, we multiply both sides of the equation by $x+a$, leaving:

$$
\frac{f(x)}{(x+b) \dots (x+z)} = A + \frac{B(x+a)}{x+b} + \dots + \frac{Z(x+a)}{x+z}
$$

We let $x = -a$. Then the other terms become zero:

$$
\frac{f(-a)}{(-a+b) \dots (-a+z)} = A
$$

This allows us to evaluate the value of $A$. This may be extended to the other terms as well.
<!--ID: 1727924325634-->

### Partial fraction expansion for repeated linear factors

On the other hand, if the factors are not unique (some are repeating, e.g. $(x + a)^2$):

$$
\frac{f(x)}{(x + a)^n} =
\frac{A}{x+a} + \frac{B}{(x+a)^2} + \dots + \frac{Z}{(x+a)^n}
$$

for some constants $n, A, B, \dots Z \in \mathbb{R}$.
<!--ID: 1727924325637-->

#### Forming a system of linear equations for $A, B, \dots Z$

This method of identifying $A, B, \dots Z$ in the partial fraction expansion works for both unique and repeated linear factors. Consider the case:

$$
\frac{f(x)}{(x + a)^2} =
\frac{A}{x+a} + \frac{B}{(x+a)^2}
$$

where $f(x)$ is a linear function. Multiplying both sides by $(x + a)^2$ yields:

$$
\begin{align*}
f(x) &= A(x+a) + B \\
&= Ax + Aa + B
\end{align*}
$$

Because both sides of the equation are linear polynomials, we can conclude that $A$ is equal to the coefficient of the linear term of $f(x)$, while $Aa + B$ is equal to the constant term of $f(x)$.
<!--ID: 1727924325640-->
