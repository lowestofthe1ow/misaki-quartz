---
target-deck: CSMATH2::Matrices
tags: [CSMATH2]
title: Matrices (CSMATH2)
---

*See also*: [[Matrices_and_matrix_operations|Matrices and matrix operations]]

## Matrix

A **matrix** is a rectangular array of $mn$ real or complex numbers arrange in $m$ rows an $n$ columns. It is expressed in terms of the $i,j$th element:

$$
\mathbf{A} = [a_{ij}] = \begin{bmatrix}
a_{11} & \dots & a_{1j} & \dots & a_{1n} \\
\vdots & \ddots & \vdots & & \vdots \\
a_{i1} & \dots & a_{ij} & \dots & a_{in} \\
\vdots & & \vdots & \ddots & \vdots \\
a_{m1} & \dots & a_{mj} & \dots & a_{mn}
\end{bmatrix}
$$
<!--ID: 1715778336801-->

### Square matrix

If $m=n$, then $\mathbf{A}$ is a **square matrix** of order $n$.

$$
\mathbf{A} = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{bmatrix}
$$

The vector consisting of elements $a_{ij}$ where $i=j$ is known as the **main diagonal**:

$$
\mathbf{a} = \begin{bmatrix}
a_{11} & a_{22} & \dots & a_{mn}
\end{bmatrix}
$$
<!--ID: 1715778336812-->

#### Triangular matrix

The square matrix $\mathbf{A}$ is **upper triangular** if $a_{ij}=0$ for $i>j$; i.e., all elements **below** the main diagonal are zero. It is instead **lower triangular** if $a_{ij}=0$ for $i<j$; i.e., all elements **above** the main diagonal are zero.

$$
\mathbf{U} = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
0 & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & a_{mn}
\end{bmatrix}
$$
<!--ID: 1715778336816-->

##### Diagonal matrix

The triangular matrix $\mathbf{A}$ is **diagonal** if all entries off the main diagonal are zero.

$$
\mathbf{D} = \begin{bmatrix}
a_{11} & 0 & \dots & 0 \\
0 & a_{22} & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & a_{mn}
\end{bmatrix}
$$
<!--ID: 1715778336820-->

###### Scalar matrix

The diagonal matrix $\mathbf{A}$ is a **scalar** matrix if all entries on the main diagonal are **equal**.

$$
\mathbf{S} = \begin{bmatrix}
c & 0 & \dots & 0 \\
0 & c & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & c
\end{bmatrix}
$$

Where $c$ is a constant.
<!--ID: 1715778336824-->

### Equal matrices

Two matrices are **equal** if and only if they are of the same **size** and are equal **component-wise**.
<!--ID: 1715778336828-->
