---
target-deck: CE-MATH::Differential equations::Exact differential equations
tags: [CE-MATH]
title: Exact differential equations
---

## Exact differential equations

Recall that given a multivariable function $I=f(x,y)$, its [total derivative](https://byjus.com/maths/total-derivative/) is given by:

$$
\frac{\partial I}{\partial x} dx + \frac{\partial I}{\partial y} dy 
$$

>[!info] We also denote the partial derivative $\frac{\partial I}{\partial x}$ as $I_x$.

This form of the total derivative is the form taken by an **exact differential equation.** Thus, where $M$ and $N$ are functions of $x$ and $y$, a differential equation of the form:

$$
Mdx + Ndy = 0
$$

is said to be exact if there exists a function $I(x,y)$ whose partial derivative with respect to $x$ is $M$ and whose partial derivative with respect to $y$ is $N$:

$$
\begin{align*}
\frac{\partial I}{\partial x} = M &&
\frac{\partial I}{\partial y} = N
\end{align*}
$$

By performing another partial differentiation, we obtain:

$$
\begin{align*}
\frac{\partial M}{\partial y} = \frac{\partial^2 I}{\partial x \partial y} && &&
\frac{\partial N}{\partial x} = \frac{\partial^2 I}{\partial y \partial x} \\
&& \therefore \boxed{\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}}
\end{align*}
$$

This is known as the **test for exactness**. The equation is exact if and only if this condition is fulfilled.

<!--ID: 1733233618233-->

### Finding $I(x,y)$ and solving the exact DE

 We know from the definition of the partial derivative that we can obtain $I(x, y)$ as follows:

$$
I(x, y) = \int{M \ dx} + g(y)
$$

where $g(y)$ is the function of $y$ that was treated as a constant and lost in the process of obtaining the partial derivative of $M$. From here we perform another partial differentiation, this time with respect to $y$:

$$
\frac{\partial I}{\partial y} = N =
\frac{\partial \int{M \ dx}}{\partial y} + \frac{dg}{dy}
$$

From here it becomes possible to solve for $\frac{dg}{dy}$ and, by integration, $g(y)$, which allows us to complete the equation for $I(x,y)$. The general solution, then, is expressed in the form $I(x,y) = C$.

>[!tip] Summary of how to solve an exact DE through $\int{M \ dx}$
>1. Integrate $\int{M \ dx}$.
>2. Take its partial derivative with respect to $y$, i.e. $\frac{\partial}{\partial y} \left ( \int{M \ dx} \right )$.
>3. Find $\frac{dg}{dy}$ by subtracting the previous result from $N$.
>4. Integrate to find $g(y)$.
>5. Combine with $\int{M \ dx}$ to obtain $I(x, y)$.

<!--ID: 1733233618241-->

#### Solving through $\int{N \ dy}$

It is also possible to begin working with $\int{N \ dy}$ and obtain the equation for $I(x,y)$ as follows:

$$
I(x, y) = \int{N \ dy} + h(x)
$$

Similarly to the first case, we designate $h(x)$ as the function of $x$ lost during the partial differentiation process. It can be obtained similarly.

>[!tip] Summary of how to solve an exact DE through $\int{N \ dy}$
>1. Integrate $\int{N \ dy}$.
>2. Take its partial derivative with respect to $x$, i.e. $\frac{\partial}{\partial x} \left ( \int{N \ dy} \right )$.
>3. Find $\frac{dh}{dx}$ by subtracting the previous result from $M$.
>4. Integrate to find $h(x)$.
>5. Combine with $\int{N \ dy}$ to obtain $I(x, y)$.

<!--ID: 1733233618250-->

### Making a non-exact DE exact

If a differential equation of the form

$$
Mdx + Ndy = 0
$$

**fails** the test for exactness, that is:

$$
\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}
$$

then there exists an **integrating factor** we can multiply to both $M$ and $N$ such that the resulting differential equation is exact. We denote this integrating factor $u$. From here, there are three possible cases:

1. $u$ is a function of $x$ (that is, $u = u(x)$). In other words, $u$ has no variable other than $x$.
2. $u$ is a function of $y$.
3. $u$ is a function of both $x$ and $y$. Specifically, $u = x^m y^n$, where $m$ and $n$ are constants.

<!--ID: 1733233618258-->

#### The case when $u = u(x)$

Consider the case where the integrating factor $u$ is a function of $x$.

$$
\begin{align*}
\frac{\partial uM}{\partial y} &= \frac{\partial u N}{\partial x} \\
u\frac{\partial M}{\partial y} &= N \frac{du}{dx} + u \frac{\partial N}{\partial x} && \text{$u$ is treated as a constant in LHS} \\
u(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}) &= N \frac{du}{dx} \\
\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N}
&= \frac{\frac{du}{dx}}{u} \\
\int{\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N}} \ dx
&= \int{\frac{\frac{du}{dx}}{u}} \ dx
&& \text {integrate both sides} \\
&= \ln{|u|} \\
\therefore \Aboxed{u &= e^{\int{\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N}} \ dx}}
\end{align*}
$$

This is the integrating factor used to construct an exact differential equation **if and only if $u$ is strictly a function of only $x$.** From there we proceed as with other exact differential equations.

#### The case when $u = u(y)$

When $u$ is a function of $y$:

$$
u = e^{\int{\frac{- \left ( \frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} \right )}{N}} \ dy}
$$

The proof logic is similar to that of the $u(x)$ case.

#### The case when $u = x^m y^n$

When $u = x^m y^n$, we identify the constants $m$ and $n$ as follows:

$$
\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} = \frac{mN}{x} - \frac{nM}{y}
$$
