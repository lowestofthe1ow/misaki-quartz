---
target-deck: CCDSTRU::Sums and sequences
tags: CCDSTRU
---

## Sequences

A **sequence** is a function from a subset of the set of integers (finite or infinite).
The notation ${a_n}$ is used to describe a sequence, and $a_n$ is the $n$th term in the sequence.

### Geometric progression

A **geometric progression** is a sequence of the form:
$$
a, ar, ar^2, ... ar^n, ...
$$
Where the initial term $a$ and the common ratio $r$ are both real numbers

### Arithmetic progression

An **arithmetic progression** is a sequence of the form:
$$
a, a+d, a+2d, ..., a+nd, ...
$$
Where the initial term $a$ and the common difference $d$ are both real numbers

### Recurrence relations

A recurrence relation for the sequence ${a_n}$ is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence.
A sequence that satisfies the recurrence relation is called a **solution**.

### Summation notation

The sum of the terms $a_m, a_{m+1}, a_{m+2}, ..., a_n$ may be written as:
$$
\sum_{j=m}^n a_j
$$

#### $\sum_{j=m}^n 1$

$$
\sum_{j=m}^n 1 = n - m + 1
$$

#### $\sum_{j=0}^n r^j$

$$
\sum_{j=0}^n r^j = \frac{r^{n+1}-1}{r-1}
$$

#### $\sum_{j=0}^n j$

$$
\sum_{j=0}^n j = \frac{n(n+1)}{2}
$$

#### $\sum_{j=0}^n j^2$

$$
\sum_{j=0}^n j^2 = \frac{n(n+1)(2n+1)}{6}
$$

#### $\sum_{j=0}^n j^3$

$$
\sum_{j=0}^n j^3 = \frac{n^2(n+1)^2}{4}
$$