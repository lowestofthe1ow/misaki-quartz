---
target-deck: CSMATH2::Matrix of a linear transformation
tags: CSMATH2
title: Matrix of a linear transformation
---

## Matrix of a linear transformation

For all $X = \begin{bmatrix}x \\ y\end{bmatrix} \in \mathbb{R}^2$, $X$ may be [[2D_vectors#Basis vectors|written as a linear combination of basis vectors]]:

$$
X = x\begin{bmatrix}1 \\ 0\end{bmatrix} + y\begin{bmatrix}0 \\ 1\end{bmatrix}
$$

Take for example the linear transformation $L: \mathbb{R}^2 \to \mathbb{R}^3$ given by:

$$
L(\begin{bmatrix}x \\ y\end{bmatrix}) = \begin{bmatrix}
x+y \\
x-y \\
2x+3y \\
\end{bmatrix}
$$

Thus:

$$
\begin{align*}
L(X) &= L(x\begin{bmatrix}1 \\ 0\end{bmatrix} + y\begin{bmatrix}0 \\ 1\end{bmatrix}) \\
&= L(x\begin{bmatrix}1 \\ 0\end{bmatrix}) + L(y\begin{bmatrix}0 \\ 1\end{bmatrix}) \\
&= xL(\begin{bmatrix}1 \\ 0\end{bmatrix}) + yL(\begin{bmatrix}0 \\ 1\end{bmatrix}) \\
&= x\begin{bmatrix}1 \\ 1 \\ 2\end{bmatrix} + y\begin{bmatrix}1 \\ -1 \\ 3\end{bmatrix} \\
&= \begin{bmatrix}
1 & 1 \\
1 & -1 \\
2 & 3 \\
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}
\end{align*}
$$

Thus $L(X) = AX, A = \begin{bmatrix}1 & 1 \\1 & -1 \\2 & 3 \\\end{bmatrix}$. $A$ is referred to as the **matrix of the linear transformation**. 

<!--ID: 1722692623182-->

### Coordinate vectors

Let $V$ be an $n$-dimensional vector space with basis $S = \{X_1, \dots, X_n\}$. Then for all $X \in V$, $X = a_1X_1 + \dots + a_nX_n$. The vector $[X]_s = \begin{bmatrix}a_1 \\ \vdots \\ a_n\end{bmatrix}$ is known as the **coordinate vector** of $X$ with respect to $S$.

<!--ID: 1722692623186-->

### Matrix with respect to two bases

The matrix $A$ of a linear transformation $L: V \to W, \ L(X) = AX$ where $S$ and $T$ are bases for $V$ and $W$, respectively, is the matrix whose $j$th column is the coordinate vector of $L(X_j)$ with respect to $T$. $A$ is known as the **matrix** of $L$ with respect to $S$ and $T$.

Note that $[L(X)]_T = A[X]_S$. This is known as the **representation** of $L$ with respect to $S$ and $T$. 

<!--ID: 1722692623189-->
