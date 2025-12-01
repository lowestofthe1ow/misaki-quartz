---
target-deck: CSARCH1::Complements
tags: [CSARCH1]
title: Complements
---

## Complements

**Complements** are used in digital computers for logic manipulation and to simplify the subtraction operation. For a given base-$r$ system, there are two types of complements:

1. The diminished radix complement ($r - 1$'s complement)
2. The radix complement ($r$'s complement).
<!--ID: 1738398842333-->

### Diminished radix complement

For a number $N$ in base $r$ having $n$ digits, the **diminished radix complement** is defined as:

$$
(r^n - 1) - n
$$
<!--ID: 1738398842336-->

### Radix complement

For a number $N$ in base $r$ having $n$ digits, the **radix complement** is defined as:

$$
r^n - N
$$

This is best obtained by adding $1$ to the diminished radix complement.
<!--ID: 1738398842338-->

## Subtraction with complements

Two unsigned numbers $M$ and $N$ in base $r$ can be subtracted ($M - N$) as follows:

1. Find the $r$'s complement of $N$ and add it to $M$.
2. If $M \geq N$, the result will produce an **end carry** which should be discarded. What is left is the result.
3. If instead $M \leq N$, the result will **not** produce an end carry. Taking the $r$'s complement of this result will yield some number $x$ such that $M - N = -x$.
<!--ID: 1738398842340-->
