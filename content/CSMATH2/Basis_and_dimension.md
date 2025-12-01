---
target-deck: CSMATH2::Basis and dimension
tags: [CSMATH2]
title: Basis and dimension
---

## Basis

A set of vectors $S$ in a vector space $V$ is a **basis** for $V$ if it [[Linear_combinations,_linear_independence,_and_span#Spanning set|spans]] $V$ and is [[Linear_combinations,_linear_independence,_and_span#Linear independence|linearly independent]]. Note that this means adding another vector to $S$ will make it linearly dependent, while removing a vector from $S$ will make it no longer span $V$.
<!--ID: 1721102597126-->

### Basis for spaces generated from span

Let $S = \{X_1, X_2, \dots, X_n\}$. Let $W$ be the vector space generated from the set of all linear combinations of $S$, i.e., $W = \text{span } S$. Then the following are all true:

- $S$ [[Linear_combinations,_linear_independence,_and_span#Spanning set|spans]] $W$.
- If $S$ is [[Linear_combinations,_linear_independence,_and_span#Linear independence|linearly independent]], then $S$ is a basis for $W$.
- If $S$ is linearly dependent, then some [[Set_theory#Proper subset|proper subset]] of $S$ is a basis for $W$.

Thus, some [[Set_theory#Subset|subset]] of $S$ is a basis for $W$.
<!--ID: 1721102597132-->

#### Finding a subset of $S$ that is a basis for $W = \text{span } S$

Let $S = \{X_1, X_2, \dots, X_n\}$. Then, to find a subset of $S$ that is a basis for $W = \text{span } S$:

1. Form the equation $c_1X_1 + c_2X_2 + \dots + c_nX_n = 0$, where $c_1, c_2, \dots, c_n \in \mathbb{R}$
2. Write this equation as an augmented matrix.
3. Reduce the augmented matrix in step 2 to [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]]. Note that [[REF_RREF_and_row_equivalence#Row echelon form|REF]] works for this as well.
4. The vectors in $S$ corresponding to the columns containing the leading $1$s form the basis for $W$.
<!--ID: 1721102597139-->

## Dimension of a vector space

The **dimension** of a vector space $V$, denoted as $\dim V$, is the [[Set_theory#Cardinality|cardinality]] (the number of distinct elements) of any given **basis** for $V$. Note that:

- A [[Linear_combinations,_linear_independence,_and_span#Linear independence|linearly independent]] set of vectors in $V$ can have **at most** $\dim V$ elements.
- A set of vectors that [[Linear_combinations,_linear_independence,_and_span#Spanning set|spans]] $V$ must have **at least** $\dim V$ elements.
- A basis for $V$, which is linearly independent and spans $V$, must therefore have exactly $\dim V$ elements.

>[!info] If $S$ is a linearly independent set of vectors in a finite-dimensional vector space $V$, then there exists a basis for $V$ that contains $S$. In other words, $S$ is a subset of some basis for $V$, as it only needs to be "completed" in order to span $V$.

Furthermore, let $S$ be a set of $n$ vectors in the $n$-dimensional vectors in $V$. Then:

- If $S$ is linearly independent, then it is a basis for $V$.
- If $S$ spans $V$, then it is a basis for $V$.
<!--ID: 1721102597143-->

## Finding a basis for the solution space of $AX = 0$

Given the [[Linear_systems_and_Cramer's_rule#Homogenous system|homogenous system]] $AX=0$, for instance:

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 \\
1 & 2 & 2 & 1 & 2 \\
2 & 4 & 3 & 3 & 3 \\
0 & 0 & 1 & -1 & -1
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0 \\
0
\end{bmatrix}
$$

We write this system as the [[Linear_systems_and_Cramer's_rule#Augmented matrix|augmented matrix]]:

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 & | & 0 \\
1 & 2 & 2 & 1 & 2 & | & 0 \\
2 & 4 & 3 & 3 & 3 & | & 0 \\
0 & 0 & 1 & -1 & -1 & | & 0
\end{bmatrix}
$$

Solving with [[Gauss-Jordan_reduction_and_Gaussian_elimination#Gauss-Jordan reduction method for solving $AX=B$|Gauss-Jordan reduction]] by reducing to [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]]:

$$
\begin{bmatrix}
1 & 2 & 0 & 3 & 0 & | & 0 \\
0 & 0 & 1 & -1 & 0 & | & 0 \\
0 & 0 & 0 & 0 & 1 & | & 0 \\
0 & 0 & 0 & 0 & 0 & | & 0
\end{bmatrix}
$$

This gives:

$$
\begin{align*}
x_1 + 2x_2 + 3x_4 &= 0 \equiv x_1 = -2x_2 - 3x_4\\
x_3 - x_4 &= 0 \equiv x_3 = x_4\\
x_5 &= 0
\end{align*}
$$

Note that this leaves $x_2$ and $x_4$ as free variables. Thus we let $x_2 = r$ and $x_4 = s$, where $r,s \in \mathbb{R}$. Thus:

$$
\begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5
\end{bmatrix} = \begin{bmatrix}
-2r - 3s \\
r \\
s \\
s \\
0
\end{bmatrix} = \begin{bmatrix}
-2r\\
r \\
0 \\
0 \\
0
\end{bmatrix} + \begin{bmatrix}
-3s \\
0 \\
s \\
s \\
0
\end{bmatrix}
$$

Every solution can thus be expressed as the following linear combination:

$$
r\begin{bmatrix}
-2\\
1 \\
0 \\
0 \\
0
\end{bmatrix} + s\begin{bmatrix}
-3 \\
0 \\
1 \\
1 \\
0
\end{bmatrix}
$$

Therefore, the set:

$$
\{\begin{bmatrix}
-2\\
1 \\
0 \\
0 \\
0
\end{bmatrix}, \begin{bmatrix}
-3 \\
0 \\
1 \\
1 \\
0
\end{bmatrix}\}
$$

[[Linear_combinations,_linear_independence,_and_span#Spanning set|spans]] the solution space of $AX = 0$ and is [[Linear_combinations,_linear_independence,_and_span#Linear independence|linearly independent]] as neither is a scalar multiple of the other. Thus it is a basis for the solution space.
<!--ID: 1721102597146-->
