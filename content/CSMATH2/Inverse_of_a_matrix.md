---
target-deck: CSMATH2::Inverse of a matrix
tags: [CSMATH2]
title: Inverse of a matrix
---

## Inverse of a matrix

A [[Matrices_(CSMATH2)#Square matrix|square matrix]] $\mathbf{A}$ is called **nonsingular** or **invertible** if there exists a square matrix $\mathbf{B}$ such that:

$$
\mathbf{AB} = \mathbf{BA} = I_n
$$

The inverse of a matrix is **unique** and is written as $\mathbf{A}^{-1}$. It may be calculated by [[Linear_systems_and_Cramer's_rule#Augmented matrix|augmenting]] the identity matrix $I_n$ to $\mathbf{A}$ and reducing it to [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]]; if the left-hand side of the augmented matrix becomes $I_n$, then $\mathbf{A}$ is invertible and the new right-hand side is $\mathbf{A}^{-1}$.
<!--ID: 1717416499656-->

### Invertible matrices and the identity matrix

If $\mathbf{A}$ is nonsingular, then it is row-equivalent to the identity matrix $I_n$. It then follows that $\mathbf{A}$ has $n$ **pivot positions** (i.e., its [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]] has exactly $n$ leading ones) and has **full rank** (i.e., its RREF has **no** rows consisting entirely of zeroes).
<!--ID: 1717429724864-->

### Invertible matrices and linear systems

If $\mathbf{A}$ is nonsingular, then the [[Linear_systems_and_Cramer's_rule|linear system]] $\mathbf{AX} = \mathbf{B}$ has the following **unique** solution:

$$
\begin{align*}
\mathbf{AX} &= \mathbf{B} \\
(\mathbf{A}^{-1}\mathbf{A})\mathbf{X} &= \mathbf{A}^{-1}\mathbf{B} \\
\mathbf{X} &= \mathbf{A}^{-1}\mathbf{B}
\end{align*}
$$

If $\mathbf{B} = \mathbf{O}$ (i.e., the system is [[Linear_systems_and_Cramer's_rule#Homogenous system|homogenous]]), then the system only has a single [[Linear_systems_and_Cramer's_rule#Trivial solution|trivial solution]]:

$$
\mathbf{X} = \mathbf{O}
$$
<!--ID: 1717567794666-->

### Determinant of an invertible matrix

If $\mathbf{A}$ is nonsingular, then $|\mathbf{A}| \neq 0$
<!--ID: 1717567794674-->

### Inverse of an inverse

If $\mathbf{A}$ is nonsingular, then $\mathbf{A}^{-1}$ is nonsingular and $(\mathbf{A}^{-1})^{-1}=\mathbf{A}$.
<!--ID: 1717416499660-->

### Inverse of a product matrix

If $\mathbf{A}$ and $\mathbf{B}$ are nonsingular, then $\mathbf{AB}$ is nonsingular and $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$
<!--ID: 1717416499664-->

### Inverse of a transpose and transpose of an inverse

If $\mathbf{A}$ is nonsingular, then $\mathbf{A}^T$ is nonsingular and $(\mathbf{A}^T)^{-1}=(\mathbf{A}^{-1})^T$.
<!--ID: 1717416499669-->
