---
target-deck: CE-MATH::Integration by parts
tags: [CE-MATH]
title: Integration by parts
---

## Integration by parts

Following from the **product rule of differentiation** given $u$ and $v$ two functions of $x$:

$$
\frac{d}{dx} (uv) = v \frac{du}{dx} + u \frac{dv}{dx}
$$

Rearranging:

$$
u \frac{dv}{dx} = \frac{d}{dx} (uv) - v \frac{du}{dx}
$$

Integrating both sides with respect to $x$:

$$
\int{u \frac{dv}{dx} \ dx} =
\int{\frac{d}{dx} (uv) \ dx} -
\int{v \frac{du}{dx} \ dx}
$$

Simplifying (similarly to [[Integration#Integration by algebraic substitution|algebraic substitution]], we treat $dx$ as something we can manipulate and "cancel out"):

$$
\int{u \ dv} = uv - \int{v \ du}
$$

>[!info] $\int{\frac{d}{dx} (uv) \ dx} = uv$ because we are integrating with respect to $x$.

The above form can be used to find the integral of a product of two functions.

<!--ID: 1727924325616-->

### Example: Finding $\int{3te^{2t} \ dt}$

We integrate by parts:

$$
\int{u \ dv} = uv - \int{v \ du}
$$

Select a $u$ and $dv$. In this case we choose $u = 3t$ and $dv = e^{2t} \ dt$. Thus, $\frac{du}{dt} = 3$. To find $v$:

$$
\begin{align*}
\frac{dv}{dt} &= e^{2t} \\
v &= \int{e^{2t} \ dt} \\
&= \frac{1}{2}e^{2t}
\end{align*}
$$

We make the substitution $du = 3dt$ to solve for $\int{3te^{2t} \ dt}$

$$
\begin{align*}
\int{3te^{2t} \ dt} =
\int{u \ dv} &= uv - \int{v \ du} \\
&= \frac{1}{2} 3te^{2t} - \int{v \ du} \\
&= \frac{3}{2} te^{2t} - \int{\frac{1}{2}e^{2t} \ 3dt} \\
&= \frac{3}{2} te^{2t} - \frac{3}{2}\int{e^{2t} \ dt} \\
&= \frac{3}{2} te^{2t} - \frac{3}{2} (\frac{1}{2}e^{2t}) \\
&= \boxed{\frac{3}{2} e^{2t}(t - \frac{1}{2}) + c}
\end{align*}
$$
<!--ID: 1727924325620-->
