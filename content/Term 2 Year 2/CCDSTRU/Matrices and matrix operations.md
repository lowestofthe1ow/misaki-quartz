---
target-deck: CCDSTRU::Matrices and matrix operations
tags: CCDSTRU
---

## Matrix

A matrix is a rectangular array of numbers. A matrix with $m$ rows and $n$ columns is called an $m \times n$ matrix. **Boldface** uppercase letters will be used to represent matrices.
$$
\mathbf{A} = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
. & . & & . \\
. & . & & . \\
. & . & & . \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{bmatrix}
$$
The $(i,j)$th element or **entry** of $\mathbf{A}$ is the element $a_{ij}$, i.e., the number in the $i$th row and $j$th column of $\mathbf{A}$. A convenient shorthand notation for expressing the matrix $\mathbf{A}$ is to write $\mathbf{A} = [a_{ij}]$, which indicates that $\mathbf{A}$ is the matrix whose $(i,j)$th element is equal to $a_{ij}$.
>[!warning] Unlike most [[Arrays#Multidimensional array|array types]] in many programming languages, the counting for rows and for columns **start at 1**.
<!--ID: 1712722536462-->


### Square

A matrix with the **same** number of rows and columns.
$$
\mathbf{S} = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$
<!--ID: 1712722536465-->


### Equal matrices

Two matrices with the same number of rows and columns, with the corresponding entries in each position being equal.
$$
\mathbf{A} = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix} = \mathbf{B}
$$
<!--ID: 1712722536469-->


## Matrix arithmetic

### Matrix addition

Let $\mathbf{A}=[a_{ij}]$ and $\mathbf{B}=[b_{ij}]$ be $m \times n$ matrices. The **sum** of $\mathbf{A}$ and $\mathbf{B}$ is denoted by $\mathbf{A}+\mathbf{B}=[a_{ij}+b_{ij}]$:
$$
\begin{bmatrix}
1 & 0 & -1 \\
2 & 2 & -3 \\
3 & 4 & 0
\end{bmatrix} + \begin{bmatrix}
3 & 4 & -1 \\
1 & -3 & 0 \\
-1 & 1 & 2
\end{bmatrix} = \begin{bmatrix}
4 & 4 & -2 \\
3 & -1 & -3 \\
2 & 5 & 2
\end{bmatrix}
$$
<!--ID: 1712722536472-->


### Matrix multiplication

Let $\mathbf{A}$ be an $m \times k$ matrix and $\mathbf{B}$ be a $k \times n$ matrix. The **product** $\mathbf{AB}$ of $\mathbf{A}$ and $\mathbf{B}$ is the $m \times n$ matrix such that its $(i,j)$th element is the **dot product** of the $i$th row of the first matrix and the $j$th column of the second matrix, i.e.:
$$
c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\dots+a_{ik}b_{kj}
$$
![[Matrix Multiplication.png]]
Note that matrix multiplication is associative, but **not** commutative, i.e.:
$$
\mathbf{AB} \neq \mathbf{BA}
$$
>[!error] The product of two matrices is defined **only if the number of columns in the first matrix equals the number of rows in the second matrix.** In other words, each row of the first matrix and each column of the second matrix **must have the same length**.
<!--ID: 1712722536475-->
