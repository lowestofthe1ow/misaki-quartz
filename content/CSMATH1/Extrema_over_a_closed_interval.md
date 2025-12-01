---
target-deck: CSMATH1::Extrema graphs::Extrema over a closed interval
tags: [CSMATH1]
title: Extrema over a closed interval
---

## Absolute extreme values

$f(c)$ is the:

- **Absolute maximum** value of $f$ on an interval if $f(c)>f(x)$ for all $x$ in the interval.
- **Absolute minimum** value of $f$ on an interval if $f(c)<f(x)$ for all $x$ in the interval.
<!--ID: 1710954159154-->

## Local extreme values

$f(c)$ is a:

- **Local maximum** value of $f$ if $f(c) \geq f(x)$ when $x$ is near $c$.
- **Local minimum** value of $f$ if $f(c) \leq f(x)$ when $x$ is near $c$.

>[!important] "near $c$" means "on some **open** interval containing $c$".
<!--ID: 1710954159161-->

## Derivative at a relative extremum (Fermat's Theorem; 1)

If $f(x)$ exists for all $x$ in $(a,b)$ and $f$ has a relative extremum at $c$, where $a<c<b$, then if $f'(c)$ exists, $f'(c)=0$.

>[!warning] The [[Propositional_logic#Converse|converse]] of this statement are **not true in general**. Also note that $f'(c)$ may not exist even if $f$ has a relative extremum at $c$.
<!--ID: 1710954159166-->

### Critical numbers

If $c$ is a number in the domain of the function $f$ and $f'(c)=0$ or $f'(c)$ does not exist, then $c$ is a critical number of $f$. It follows that it is a necessary condition for a function to have a relative extremum at a number $c$ is for $c$ to be a critical number. In other words, if $f$ has a local maximum or minimum at $c$, then $c$ is a critical number of $f$.
<!--ID: 1710954159172-->

## Extreme Value Theorem (2)

If $f(x)$ is [[Continuity#Continuity at a closed interval|continuous on a closed interval]] $[a,b]$, then $f$ attains an absolute maximum $f(c)$ and an absolute minimum $f(d)$ at some $c,d \in [a,b]$.

>[!important] An absolute extremum of a function continuous on a closed interval must either be a relative extremum or an endpoint of the interval.
<!--ID: 1710954159177-->

### Absolute extrema on a closed interval

To find the **absolute extreme values** of a function $f$ that is continuous on a closed interval $[a,b]$:

1. Find the function values at the critical numbers of $f$ in $(a,b)$.
2. Find the values of $f(a)$ and $f(b)$.
3. The largest of these values is the **absolute maximum**; the smallest is the **absolute minimum**.
<!--ID: 1710954159181-->

### Applications involving absolute extrema on a closed interval (optimization)

1. Draw a diagram
2. Assign a symbol to the quantity $Q$ being maximized or minimized
3. Express $Q$ in terms of **one variable** $x$.
4. From Extreme Value Theorem, find a closed interval on which the function $Q(x)$ is continuous.
5. Find the absolute extrema on the closed interval.
<!--ID: 1710954159185-->
