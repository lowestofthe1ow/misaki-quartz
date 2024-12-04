---
target-deck: CSMATH2::Determinants
tags: [CSMATH2]
title: Determinants
---

## Permutations

Let $S = \{1, 2, ... n\}$. An arrangement $j_1j_2...j_n$ of the elements of $S$ is called a **permutation** of $S$. Note that there are **$n!$** possible permutations of $S$.

<!--ID: 1717416468081-->

### Inversion

A permutation of $S$ is said to have an **inversion** when a larger integer precedes a smaller integer. A permutation is called **even** if it has an even number of permutations. Otherwise, it is called **odd**. For instance, the permutation:

$$
321
$$

—has 3 inversions: $32$, $21$, and $31$. It is therefore **odd**.

<!--ID: 1717416468088-->

## Determinant

The determinant of the $n \times n$ matrix $\mathbf{A}$, denoted by $|\mathbf{A}|$ is given by:

$$
|\mathbf{A}| = \sum (\pm) a_{1j_1}a_{2j_2}\dots a_{nj_n}
$$

The summation iterates over **all permutations** $j_1 j_2 \dots j_n$ of $S = \{1, 2, ... n\}$ where the sign is taken as positive if the permutation is even, and negative if it is odd.

<!--ID: 1717416468094-->

### Effects of elementary row operations on determinants

If a matrix $\mathbf{B}$ is [[REF_RREF_and_row_equivalence#Elementary row operations|obtained]] from matrix $\mathbf{A}$ by:

1. Interchanging two rows (or column), then: $|\mathbf{B}| = -|\mathbf{A}|$
2. Multiplying a row (or column) by $c \neq 0$, then: $|\mathbf{B}| = c|\mathbf{A}|$
3. Adding a scalar multiple of a row to another row, then: $|\mathbf{B}| = |\mathbf{A}|$
<!--ID: 1717416468099-->

### Determinant of a transpose

The determinant of a matrix and its transpose are equal:

$$
|\mathbf{A}| = |\mathbf{A}^T|
$$
<!--ID: 1717416468104-->

### Determinants of matrices with two equal rows or a zero row

$|\mathbf{A}| = 0$ if and only if there exists a row or column that consists entirely of zeroes.

>[!info] By performing an elementary row operation, this implies that matrices with two equal rows also have a determinant of zero.

<!--ID: 1717416468109-->

### Determinant of a triangular matrix

If a matrix $\mathbf{A}$ is [[Matrices_(CSMATH2)#Triangular matrix|upper or lower triangular]], then:

$$
|\mathbf{A}| = a_{11}a_{22}\dots a_{nn}
$$
<!--ID: 1717416468114-->

### Determinant of the product of two matrices

The determinant of the product of two matrices is the product of their determinants:

$$
|\mathbf{A}\mathbf{B}| = |\mathbf{A}||\mathbf{B}|
$$
<!--ID: 1717416468120-->

## Determinants and inverses

If and only if $\mathbf{A}$ is [[Inverse_of_a_matrix|nonsingular]], then $\mathbf{A}$ has a nonzero determinant and:

$$
|\mathbf{A}^{-1}| = \frac{1}{|\mathbf{A}|}
$$
<!--ID: 1717416468124-->
