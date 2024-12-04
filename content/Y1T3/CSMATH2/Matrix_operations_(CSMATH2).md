---
target-deck: CSMATH2::Matrix operations
tags: [CSMATH2]
title: Matrix operations (CSMATH2)
---

## Matrix addition

Given the $m \times n$ matrices $\mathbf{A}$ and $\mathbf{B}$:

$$
\mathbf{A}+\mathbf{B}=[a_{ij}+b_{ij}]
$$

>[!info] In other words, matrix addition is performed **component-wise**.

<!--ID: 1715778362699-->

### Properties of matrix addition

Matrix addition is **commutative** and **associative**. Furthermore, there exists a matrix $\mathbf{O}$ such that $\mathbf{A} + \mathbf{O} = \mathbf{a}$; $\mathbf{O}$ is a **zero matrix** and is called the **additive identity** for matrix addition:

$$
\mathbf{O} = \begin{bmatrix}
0 & 0 & \dots & 0 \\
0 & 0 & & \vdots \\
\vdots & & \ddots & \vdots \\
0 & \dots & \dots & 0
\end{bmatrix}
$$

There also exists a matrix $-\mathbf{A}$ such that $\mathbf{A} + (-\mathbf{A}) = \mathbf{O}$, called the **additive inverse** or **negative** of $\mathbf{A}$:

$$
\mathbf{A} = [a_{ij}] \to -\mathbf{A} = [-a_{ij}]
$$
<!--ID: 1716720911156-->

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

### Properties of matrix multiplication

Matrix multiplication is **not commutative** (i.e., it is not necessarily the case that $\mathbf{AB} = \mathbf{BA}$). It is, however, **associative**:

$$
(\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC})
$$

—and **distributive**:

$$
\begin{align*}
\mathbf{A}(\mathbf{B} + \mathbf{C}) &= \mathbf{AB} + \mathbf{AC} \\
(\mathbf{A} + \mathbf{B})\mathbf{C} &= \mathbf{AC} + \mathbf{BC}
\end{align*}
$$
<!--ID: 1716720911161-->

## Scalar multiplication

Given the $m \times n$ matrix $\mathbf{A}$ and the real number $r$, the **scalar multiple** of $\mathbf{A}$ by $r$ is the $m \times n$ matrix $\mathbf{B}$ such that:

$$
B = [b_{ij} = ra_{ij}]
$$

>[!info] In other words, like addition, scalar multiplication is performed **component-wise**.

<!--ID: 1715778362712-->

### Properties of scalar multiplication

As it is done component-wise, scalar multiplication is **commutative** and **associative**. It is also **distributive**:

$$
\begin{align*}
(r+s)\mathbf{A} &= r\mathbf{A} + s\mathbf{A} \\
r(\mathbf{A} + \mathbf{B}) &= r\mathbf{A} + r\mathbf{B}
\end{align*}
$$
<!--ID: 1716720911164-->

## Transposition

The transpose of a matrix $\mathbf{A}$ is obtained by interchanging the rows and columns of $\mathbf{A}$. The following properties hold:

$$
\begin{align*}
(\mathbf{AB})^T &= \mathbf{B}^T\mathbf{A}^T \\
(\mathbf{A}^T)^T &= \mathbf{A} \\
(\mathbf{A} + \mathbf{B})^T &= \mathbf{A}^T + \mathbf{B}^T \\
(r\mathbf{A})^T &= r(\mathbf{A}^T)
\end{align*}
$$
<!--ID: 1715778362717-->

### Symmetric matrix

A matrix $\mathbf{A}$ is **symmetric** if and only if $\mathbf{A}^T = \mathbf{A}$:

$$
\mathbf{A} = [a_ij = a_ji]
$$

>[!info] A symmetric matrix can be said to be "symmetric along the main diagonal."

<!--ID: 1716720911167-->

#### Skew symmetric

A matrix $\mathbf{A}$ is **skew symmetric** if and only if $\mathbf{A}^T = -\mathbf{A}$.

<!--ID: 1716720911171-->
