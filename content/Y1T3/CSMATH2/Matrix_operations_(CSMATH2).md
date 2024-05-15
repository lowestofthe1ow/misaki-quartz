---
target-deck: CSMATH2::Matrix operations
tags: CSMATH2
title: Matrix operations (CSMATH2)
---

## Matrix addition

Given the $m \times n$ matrices $\mathbf{A}$ and $\mathbf{B}$:
$$
\mathbf{A}+\mathbf{B}=[a_{ij}+b_{ij}]
$$
>[!info] In other words, matrix addition is performed **component-wise**.
<!--ID: 1715778362699-->

## Matrix multiplication

*See also*: [[Matrices_and_matrix_operations#Matrix multiplication|Matrix multiplication]]
Given the $m \times n$ matrices $\mathbf{A}$ and $\mathbf{B}$, each element $c_{ij}$ in the resulting matrix $\mathbf{C}$ is given by the **dot product** of the $i$th row of $\mathbf{A}$ and the $j$th column of $\mathbf{B}$.
![[matrix_multiplication.png]]
<!--ID: 1715778362704-->

### Dot product

The **dot product** of two $n$-vectors is the sum of the products of their corresponding elements:
$$
\mathbf{a} = \begin{bmatrix}
a_{1} \\
a_{2} \\
\vdots \\
a_{n}
\end{bmatrix} \cdot \mathbf{b} = \begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{n}
\end{bmatrix} = \sum_{i = 1}^{n} a_ib_i
$$
<!--ID: 1715778362708-->

## Scalar multiplication

Given the $m \times n$ matrix $\mathbf{A}$ and the real number $r$, the **scalar multiple** of $\mathbf{A}$ by $r$ is the $m \times n$ matrix $\mathbf{B}$ such that:
$$
B = [b_{ij} = ra_{ij}]
$$
>[!info] In other words, like addition, scalar multiplication is performed **component-wise**.
<!--ID: 1715778362712-->

## Transposition

The transpose of a matrix $\mathbf{A}$ is obtained by interchanging the rows and columns of $\mathbf{A}$.
<!--ID: 1715778362717-->
