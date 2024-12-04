---
target-deck: CSMATH2::Linear systems and Cramer's rule
tags: [CSMATH2]
title: Linear systems and Cramer's rule
---

## Linear equation

$$
y = ax + b \text{ where } a,b \in \mathbb{R}
$$

The above is a **linear equation** in **two** variables. $x = x_1, y = y_1$ is a **solution** if and only if $y_1 = ax_1 + b$. It may be generalized into a linear equation in $n$ equations:

$$
b = a_1x_1 + a_2x_2 + \dots + a_nx_n \text{ where } b,a_1,a_2,\dots,a_n \in \mathbb{R}
$$
<!--ID: 1716721003531-->

### System of linear equations

A system of linear equations is a set of equations involving the **same** variables. a system of $m$ equations in $n$ unknowns would have the following form:

$$
\begin{align*}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m \\
\end{align*}
$$

Such a system may be solved by means of [elimination](https://math.libretexts.org/Courses/Monroe_Community_College/MTH_098_Elementary_Algebra/5%3A_Systems_of_Linear_Equations/5.3%3A_Solve_Systems_of_Equations_by_Elimination).

<!--ID: 1716721003535-->

#### Augmented matrix

An **augmented matrix** $[\mathbf{A}|\mathbf{B}]$ is given by:

$$
\mathbf{A}|\mathbf{B} = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & | & b_m
\end{bmatrix}
$$
<!--ID: 1716954963595-->

#### Linear systems as matrices

Consider the matrices:

$$
\mathbf{A} = \begin{bmatrix}
a_{11} & \dots & a_{1j} & \dots & a_{1n} \\
\vdots & \ddots & \vdots & & \vdots \\
a_{i1} & \dots & a_{ij} & \dots & a_{in} \\
\vdots & & \vdots & \ddots & \vdots \\
a_{m1} & \dots & a_{mj} & \dots & a_{mn}
\end{bmatrix}
\mathbf{X} = \begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
\mathbf{B} = \begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_m
\end{bmatrix}
$$

A linear system of $m$ equations in $n$ unknowns can thus be written as:

$$
\mathbf{AX} = \mathbf{B}
$$

Where $\mathbf{A}$ is known as the **coefficient matrix**. The system can also be expressed as the augmented matrix:

$$
\mathbf{A}|\mathbf{B}
$$

>[!info] Note that where $\mathbf{A}$ is an $m \times n$ matrix, $\mathbf{X}$ is an $n \times 1$ matrix while $\mathbf{B}$ is an $m \times 1$ matrix.

<!--ID: 1716721003538-->

### Homogenous system

A **homogenous system** is a system for which $x_1 = x_2 = x_3 = \dots = 0$ is a solution:

$$
\begin{align*}
x + y + z + w &= 0 \\
x + w &= 0 \\ 
x + 2y + z &= 0 \\
\end{align*}
$$
<!--ID: 1717429724846-->

#### Trivial solution

A **trivial solution** to a homogenous system is a solution where all variables are zero: $x_1 = x_2 = x_3 = \dots = 0$.

<!--ID: 1717429724852-->

#### Nontrivial solution

A **nontrivial solution** to a homogenous system is a solution that is not trivial. A homogenous system $\mathbf{AX}=\mathbf{O}$ has a nontrivial solution if and only if $\mathbf{A}$ is [[Inverse_of_a_matrix#Inverse of a matrix|singular (not invertible)]].

<!--ID: 1717429724856-->

## Cramer's rule

Given the [[Inverse_of_a_matrix|invertible]] $n \times n$ matrix $\mathbf{A}$, the [[Linear_systems_and_Cramer's_rule|linear system]] represented by $\mathbf{AX} = \mathbf{B}$ has a **unique** solution.

$$
\begin{align*}
\mathbf{AX} &= \mathbf{B} \\
(\mathbf{A}^{-1}\mathbf{A})\mathbf{X} &= \mathbf{A}^{-1}\mathbf{B} \\
\mathbf{X} &= \mathbf{A}^{-1}\mathbf{B}
\end{align*}
$$

This solution can be expressed as follows:

$$
\mathbf{X} = \begin{bmatrix}
\frac{|\mathbf{A}_1|}{|\mathbf{A}|} \\
\frac{|\mathbf{A}_2|}{|\mathbf{A}|} \\
\vdots \\
\frac{|\mathbf{A}_n|}{|\mathbf{A}|} \\
\end{bmatrix}
$$

$\mathbf{A}_i$ is the matrix obtained by replacing the $i$th column of $\mathbf{A}$ by $\mathbf{B}$, e.g.:

$$
\mathbf{A}_1 = \begin{bmatrix}
b_1 & a_{12} & \dots & a_{1n} \\
b_2 & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
b_n & a_{n2} & \dots & a_{nn} \\
\end{bmatrix}
$$
<!--ID: 1717429724860-->
