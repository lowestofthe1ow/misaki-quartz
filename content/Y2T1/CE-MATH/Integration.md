---
target-deck: CE-MATH::Integration
tags: CE-MATH
title: Integration
---

## Integration

Integration **reverses** the process of [[Derivatives#The derivative of a function|differentiation]], i.e., it is the process of "returning" from $f'(x)$ to $f(x)$. For instance, the integral of $4x$ is $2x^2$. 

The following notation:

$$
\int{4x \ dx}
$$

means "**the integral of $4x$ with respect to $x$**." In other words:

$$
\int{f(x) \ dx} = F(x)
$$

means that:

$$
F'(x) = f(x)
$$

<!--ID: 1726484074440-->

### Arbitrary constant $c$

$\frac{d}{dx} (2x^2) = 4x$. Thus $\int{4x \ dx = 2x^2}$. However, $\frac{d}{dx} (2x^2 + 7) = 4x$. Thus $\int{4x \ dx = 2x^2 + 7}$ is still true.

Because differentiation is not [[Functions#Bijection|a one-to-one correspondence]] (for a function $f(x)$ there are **infinitely many** functions $F(x)$ such that $F'(x) = f(x)$, because the constant term is removed in differentiation), an **arbitrary constant of integration $c$** is added to allow for the possible presence of a constant:

$$
\int{4x \ dx} = 2x^2 + c
$$

>[!info] $\int{f(x) \ dx} = F(x) + c$ can thus be said to represent a **family** of functions, where there exists one antiderivative of $f(x)$ **for each possible value of $c$**.

<!--ID: 1726484074443-->

### General solution of integrals of the form $ax^n$

$$
\int{ax^n \ dx} = \frac{ax^{n+1}}{n+1} + c
$$

The above holds when $n \in \mathbb{R}, n \neq -1$.

$$
\int{3x^4 \ dx} = \frac{3x^{4+1}}{4 + 1} = \frac{3}{5}x^5 + c
$$

<!--ID: 1726484074447-->

### Integral of a constant

The [[#General solution of integrals of the form $ax n$|general solution]] applies, with $n = 0$:

$$
\int{8 \ dx} = 8x + c
$$

<!--ID: 1726484074451-->

### Integral of a sum of terms

The integral of a sum of terms can be broken down as the sum of the integrals of each term. This is sometimes referred to as **linearity**:

$$
\int{(3x + 2x^2 - 5) \ dx} = \int{3x \ dx} + \int{2x^2 \ dx} + \int{5 \ dx}
$$

<!--ID: 1726484074454-->

### Trigonometric integrals

<!--ID: 1726484074458-->
<!-- TODO: Some of these may be inaccurate -->

#### $\int{\cos{ax} \ dx}$

$$
\int{\cos{ax} \ dx} = \frac{1}{a}\sin{ax} + c
$$

<!--ID: 1726484074461-->

#### $\int{\sin{ax} \ dx}$

$$
\int{\sin{ax} \ dx} = -\frac{1}{a}\cos{ax} + c
$$

<!--ID: 1726484074465-->

#### $\int{\sec^2{ax} \ dx}$

$$
\int{\sec^2{ax} \ dx} = \frac{1}{a}\tan{ax} + c
$$

<!--ID: 1726484074468-->

#### $\int{\csc^2{ax \ dx}}$

$$
\int{\csc^2{ax \ dx}} = -\frac{1}{a}\cot{ax} + c
$$

<!--ID: 1726484074472-->

#### $\int{\csc{ax} \cot{ax} \ dx}$

$$
\int{\csc{ax} \cot{ax} \ dx} = -\frac{1}{a} \csc{ax} + c
$$

<!--ID: 1726484074476-->

#### $\int{\sec{ax} \tan{ax} \ dx}$

$$
\int{\sec{ax} \tan{ax} \ dx} = \frac{1}{a} \sec{ax} + c
$$

<!--ID: 1726484074479-->

### $\int{e^{ax} \ dx}$

$$
\int{e^{ax} \ dx} = \frac{1}{a} e^{ax} + c
$$

<!--ID: 1726484074482-->

### $\int{\frac{1}{x} \ dx}$

This is a special case used instead of the [[#General solution of integrals of the form $ax n$|general solution]] when $n = 1$:

$$
\int{\frac{1}{x} \ dx = \ln{x} + c}
$$

<!--ID: 1726484074485-->

## Integration by algebraic substitution

Following from the **chain rule of differentiation**, if $u = g(x)$ then:

$$
\int{f(g(x)) g'(x) \ dx} = \int{f(u) \ du}
$$

Note how $g'(x) = \frac{du}{dx}$ or, equivalently, $du = g'(x) \ dx$. This manipulation of $du$ and $dx$ is permissible here. For instance, consider the indefinite integral:

$$
\int{x^3 cos(x^4 + 2) \ dx}
$$

We perform the substitution $u = x^4 + 2$. Thus $\frac{du}{dx} = 4x^3$; equivalently, $dx = \frac{du}{4x^3}$:

$$
\begin{align*}
&= \int{x^3 cos(u) \ \frac{du}{4x^3}} \\
&= \int{cos(u) \ \frac{du}{4}} \\
&= \frac{1}{4} \int{cos(u) \ du} \\
&= \frac{1}{4} sin(u) \\
&= \frac{1}{4} sin(x^4 + 2) + c
\end{align*}
$$

Note how we rewrite the expression in terms of the original variable, $x$.

<!--ID: 1727924287948-->
