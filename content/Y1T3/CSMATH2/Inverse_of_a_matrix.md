---
target-deck: CSMATH2::Inverse of a matrix
tags: CSMATH2
title: Inverse of a matrix
---

## Inverse of a matrix

A [[Matrices_(CSMATH2)#Square matrix|square matrix]] $\mathbf{A}$ is called **nonsingular** or **invertible** if there exists a square matrix $\mathbf{B}$ such that:

$$
\mathbf{AB} = \mathbf{BA} = I_n
$$

The inverse of a matrix is **unique** and is written as $\mathbf{A}^{-1}$.

>[!info] A square matrix $\mathbf{A}$ is nonsingular if and only if the linear system $\mathbf{AX} = \mathbf{O}$ has a unique solution for every $\mathbf{B}$.

<!--ID: 1717416499656-->

### Inverse of an inverse

If $\mathbf{A}$ is nonsingular, then $\mathbf{A}^{-1}$ is nonsingular and $(\mathbf{A}^{-1})^{-1}=\mathbf{A}$.

<!--ID: 1717416499660-->

### Inverse of a product matrix

If $\mathbf{A}$ and $\mathbf{B}$ are nonsingular, then $\mathbf{AB}$ is nonsingular and $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$

<!--ID: 1717416499664-->

### Inverse of a transpose and transpose of an inverse

If $\mathbf{A}$ is nonsingular, then $\mathbf{A}^T$ is nonsingular and $(\mathbf{A}^T)^{-1}=(\mathbf{A}^{-1})^T$.

<!--ID: 1717416499669-->

### Invertible matrices and the identity matrix

If $\mathbf{A}$ is nonsingular, then it is row-equivalent to the identity matrix $I_n$

<!--ID: 1717429724864-->
