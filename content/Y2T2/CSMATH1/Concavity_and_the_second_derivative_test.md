---
target-deck: CSMATH1::Extrema graphs::Concavity and the second derivative test
tags: CSMATH1
title: Concavity and the second derivative test
---

## Concavity

![[concavity.png]]
The graph of a function $f$ concaves **upward** at the point $(c,f(c))$ if $f'(c)$ exists and there is an **open interval** $I$ containing $c$ such that all function values of $x \neq c$ is **above** the tangent line to $(c,f(c))$. It concaves **downward** if these values are **below** the tangent line to $(c, f(c))$.
<!--ID: 1711041031777-->

### Second derivative and concavity

Let $f$ be a function that is differentiable on some open interval containing $c$.
- If $f''(c)>0$, the graph **concaves upward** at $(c, f(c))$.
>[!info] The **slope** of the tangent line to the graph is **increasing**.
- If $f''(c)<0$, the graph **concaves downward** at $(c, f(c))$.
>[!info] The **slope** of the tangent line to the graph is **decreasing**.
<!--ID: 1711041031783-->

### Points of inflection

The point $(c, f(c))$ is a **point of inflection** if the graph has a tangent line there, and there exists an open interval $I$ containing $c$ such that:
- $f''(x)<0$ if $x<c$, and $f''(x)>0$ if $x>c$, or:
>[!info] The **slope** of the tangent line is **decreasing** to the left of $c$, after which the function **changes concavity** at $c$, after which the slope of the tangent line begins **increasing** (to the right of $c$).
- $f''(x)>0$ if $x<c$, and $f''(x)<0$ if $x>c$
>[!info] The **slope** of the tangent line is **increasing** to the left of $c$, after which the function **changes concavity** at $c$, after which the slope of the tangent line begins **decreasing** (to the right of $c$).
- Note that the second derivative describes the **rate of change of the slope**.
>[!important] Inflection points are points where the graph of a function changes concavity.
<!--ID: 1711041031788-->

## The second derivative test

Let $c$ be a critical value of the function f such that $f'(c)=0$, and let $f''(x)$ exist for all values of $x$ near $c$.
1. If $f''(c)<0$, then $f$ has a **relative maximum** at $c$.
2. If $f''(c)>0$, then $f$ has a **relative minimum** at $c$.
<!--ID: 1711041031794-->
