---
target-deck: CSMATH2::Reduced row echelon form
tags: CSMATH2
title: REF, RREF, and row equivalence
---

## Elementary row operations

An **elementary row operation** on an $m \times n$ matrix is any one of the following operations:

1. **Interchanging** two rows.
2. **Multiplying** a row by $c \neq 0$.
3. Adding a scalar multiple of a row to another row (adding $d$ times row $r$ to row $s$)

>[!info] Note that these operations correspond to manipulations applied to a [[Linear_systems_and_Cramer's_rule|linear system]].

<!--ID: 1716723207875-->

### Row equivalence

A matrix $\mathbf{A}$ is said to be **equivalent** to matrix $\mathbf{B}$ if $\mathbf{B}$ may be obtained by applying a **finite** sequence of elementary row operations to $\mathbf{A}$. Being an equivalence [[Relations|relation]], row equivalence is:

- [[Relations#Reflexivity|Reflexive]]: Every matrix is row equivalent to itself.
- [[Relations#Symmetry|Symmetric]]: If $\mathbf{A}$ is row equivalent to $\mathbf{B}$ then $\mathbf{B}$ is row equivalent to $\mathbf{A}$
- [[Relations#Transitivity|Transitive]]: If $\mathbf{A}$ is row equivalent to $\mathbf{B}$ and $\mathbf{B}$ is row equivalent to $\mathbf{C}$, then $\mathbf{A}$ is row equivalent to $\mathbf{C}$

>[!info] Given the linear systems $\mathbf{AX} = \mathbf{B}$ and $\mathbf{CX} = \mathbf{D}$, if the augmented matrices $[\mathbf{A}|\mathbf{B}]$ and $[\mathbf{C}|\mathbf{D}]$ are row equivalent, then the two systems have exactly the same solutions.

<!--ID: 1716723207888-->

## Reduced row echelon form

An $m \times n$ matrix is in **reduced row echelon form** (RREF) when it satisfies the following:

1. All rows consisting entirely of **zeroes** are at the bottom of the matrix.
2. The first nonzero entry in each row is $1$. This is called the **leading entry** of that row.
3. Given two consecutive rows $i$ and $i+1$ that do not consist entirely of zeroes, the leading entry of row $i+1$ is to the **right** of that of row $i$ (i.e., the leading entries are in an ["echelon" formation](https://en.wikipedia.org/wiki/Echelon_formation)).
4. If a column contains a leading entry of some row, all other entries in that column are **zero** (thus somewhat resembling a [[Matrices_(CSMATH2)#Diagonal matrix|diagonal matrix]]).

$$
\mathbf{A} = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 2 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Every nonzero $m \times n$ matrix is row equivalent to a **unique** matrix in RREF.

<!--ID: 1716723207894-->

### Reducing a matrix into RREF

1. Identify or perform elementary operations to produce a leftmost leading $1$ for some row $r$.
2. Perform elementary operations **with respect to row $r$** on each other row such that all elements in the column containing $r$'s leading entry are **zero** (or only those below that leading entry, for REF.
3. Repeat for each other row ensuring rows consisting of zeroes are at the bottom of the matrix.
<!--ID: 1716723207898-->

## Row echelon form

An $m \times n$ matrix is in **row echelon form** (REF) when it satisfies the first three conditions of being in RREF. In other words, it fails the following condition:

> If a column contains a leading entry of some row, all other entries in that column are zero.

$$
\mathbf{A} = \begin{bmatrix}
 1 & \mathbf{3} & 0 & 4 & 5 \\
 0 & \mathbf{1} & 2 & -1 & 0 \\
 0 & \mathbf{0} & 0 & 1 & 1
\end{bmatrix}
$$

<!--ID: 1716954963582-->
