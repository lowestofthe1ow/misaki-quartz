---
target-deck: GEMATMW::Fibonacci sequence and the golden ratio
tags: GEMATMW
draft: true
title: Fibonacci sequence and the golden ratio
---

## Fibonacci sequence

The Fibonacci sequence is agiven by:

$$
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
$$

> [!info]+ Each term, except the first two which are both $1$, is obtained by adding the previous two terms

<!--ID: 1704717194411-->

1. Choose any term in the sequence and square it

1. Multiply the terms on both sides of the chosen number
2. Subtract the smaller result from the larger result

13 -> 13^2 = 169 -> 8 * 21 = 168 -> 169 - 168 = 1

1. Choose any term in the sequence and square it
2. Multiply the terms 2 positions away from the chosen number
3. Subtract the smaller result from the larger result

13 -> 13^2 = 169 -> 5 * 34 = 170 -> 170 - 169 = 1

1. Choose any term in the sequence and square it
2. Multiply the terms 3 positions away from the chosen number
3. Subtract the smaller result from the larger result

13 -> 13^2 = 169 -> 3 * 55 = 165 -> 169 - 165 = 4

A golden rectangle is defined to be a rectangle whose length (L) and width ( HI) satisfy the following proportion:

$$
\frac{L}{W}=\frac{L+W}{L}
$$

The ratio $\frac{L}{W}$ is called the Golden Ratio

$$
Let \frac{L}{W}=\phi
$$

Then, from the proportion of the golden rectangle, we have

$$
\phi=1+\frac{1}{\phi}
$$

$$
\phi^2=\phi+1
$$

Therefore:

$$
\phi=\frac{1\pm\sqrt{1+4}}{2}=\frac{1\pm\sqrt{5}}{2}
$$

Notably:

$$
\lim_{n\to\infty}\frac{F_{n+1}}{F_n}=\frac{1\pm\sqrt{5}}{2}
$$