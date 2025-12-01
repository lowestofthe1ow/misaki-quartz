---
target-deck: CSMATH2::Minors, cofactors, and adjoints
tags: [CSMATH2]
title: Minors, cofactors, and adjoints
---

## Minor

Let $\mathbf{A} = [a_{ij}]$ be an $n \times n$ matrix:

$$
\mathbf{A} = \begin{bmatrix}
a_{11} & \dots & a_{1j} & \dots & a_{1n} \\
\vdots & \ddots & \vdots & & \vdots \\
a_{i1} & \dots & a_{ij} & \dots & a_{in} \\
\vdots & & \vdots & \ddots & \vdots \\
a_{n1} & \dots & a_{nj} & \dots & a_{nn}
\end{bmatrix}
$$

Given, for example, the matrix:

$$
\mathbf{A} = \begin{bmatrix}
3 & -1 & 2 \\
4 & 5 & 6 \\
7 & 1 & 2
\end{bmatrix}
$$

Let $M_{ij}$ be the $(n-1) \times (n-1)$ submatrix of $A$ obtained by deleting the $i$th row and $j$th column of $A$. For instance:

$$
\mathbf{M}_{12} = \begin{bmatrix}
4 & 6 \\
7 & 2
\end{bmatrix}
$$

The [[Determinants#Determinant|determinant]] of $M_{ij}$ is known as the **minor** of $a_{ij}$.
<!--ID: 1717416538911-->

## Cofactor

The **cofactor** $A_{ij}$ of $a_{ij}$ is defined as its **minor** multiplied by $1$ if $i$ and $j$ are both even or both odd, or by $-1$ otherwise. Thus:

$$
A_{ij} = (-1)^{i+j}|M_{ij}|
$$
<!--ID: 1717416538917-->

## Cofactor expansion

Let $\mathbf{A} = [a_{ij}]$ be an $n \times n$ matrix. The determinant of $\mathbf{A}$ can be obtained through a **cofactor expansion** about its $i$th row, which is the sum of each element in the row multiplied by its respective cofactor:

$$
|\mathbf{A}| = \sum_{j=1}^n a_{ij}A_{ij}
$$

In other words:

$$
|\mathbf{A}| = a_{i1}A_{i1} + a_{i2}A_{i2} + \dots + a_{in}A_{in}
$$

A cofactor expansion may also be performed about the $j$th column of $\mathbf{A}$:

$$
|\mathbf{A}| = \sum_{i=1}^n a_{ij}A_{ij}
$$

Equivalently:

$$
|\mathbf{A}| = a_{1j}A_{1j} + a_{2j}A_{2j} + \dots + a_{nj}A_{nj}
$$

>[!info] If elements of a row (or column) are multiplied with cofactors of any other row (or column), then their sum is zero.

$$
\begin{align*}
\sum_{i=1}^n a_{ij}A_{kj} &= 0 & i \neq k \\
\sum_{i=1}^n a_{ij}A_{ik} &= 0 & j \neq k \\
\end{align*}
$$
<!--ID: 1717416538921-->

## Adjoint of a matrix

The **adjoint** of the $n \times n$ matrix $\mathbf{A}$ is the $n \times n$ matrix whose $(i,j)$ entry is the cofactor $A_{ji}$ (note the interchanged row and column) of $a_{ji}$:

$$
\text{adj } \mathbf{A} = \begin{bmatrix}
A_{11} & A_{21} & \dots & A_{n1} \\ 
A_{12} & A_{22} & \dots & A_{n2} \\ 
\vdots & \vdots & \ddots & \vdots \\
A_{1n} & A_{2n} & \dots & A_{nn}
\end{bmatrix}
$$

>[!warning] Note that the adjoint of a matrix is the [[Matrix_operations_(CSMATH2)#Transposition|transpose]] of the cofactor matrix of $\mathbf{A}$.
<!--ID: 1717416538924-->

### Adjoints, determinants, and the inverse

If $\mathbf{A}$ is an $n \times n$ matrix, then:

$$
\mathbf{A}(\text{adj }\mathbf{A}) = (\text{adj }\mathbf{A})\mathbf{A} = |\mathbf{A}|I_n
$$

It follows that, if $|\mathbf{A}| \neq 0$, then:

$$
\mathbf{A}^{-1} = \frac{1}{|\mathbf{A}|}(\text{adj }\mathbf{A})
$$
<!--ID: 1717416538927-->
