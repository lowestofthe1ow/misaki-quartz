---
target-deck: CSMATH2::Rowspace, columnspace, and rank
tags: [CSMATH2]
title: Rowspace, columnspace, and rank
---

## Row and columnspace

Given an $m \times n$ matrix $\mathbf{A}$:

- The **rows** of $\mathbf{A}$ [[Linear_combinations,_linear_independence,_and_span#Spanning set|span]] a [[Vector_spaces_and_subspaces#Subspace|subspace]] of $\mathbb{R}^n$, called its **rowspace**.
- The **columns** of $\mathbf{A}$ likewise span a subspace of of $\mathbb{R}^m$ (note that it has $m$ columns), called its **columnspace**.

Given $V = \text{span } S$, if $\mathbf{A}$ is the matrix with the vectors in $S$ as its rows, then the **nonzero rows** of $\mathbf{A}$ written in [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]] will form a **basis** for $V$. $V$ is the rowspace of $\mathbf{A}$.

>[!info] The rowspace of matrices that are [[REF_RREF_and_row_equivalence#Row equivalence|row equivalent]] are equal.

The basis found this way has the property such that all vectors $X = \begin{bmatrix}a_1 \\ a_2 \\ \vdots \\ a_n\end{bmatrix} \in V$ may be written as some linear combination of the basis using only $a_1, a_2, \dots, a_n$ as constants.

<!--ID: 1721102612896-->

## Rank

The **row rank** of a matrix $\mathbf{A}$ is the [[Basis_and_dimension#Dimension of a vector space|dimension]] of its rowspace. It is equivalent to the number of **nonzero rows** in the [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]] of $\mathbf{A}$ (as these rows form a basis for the rowspace). On the other hand, the **column rank** is the dimension of its columnspace. This is equivalent to the row rank of the [[Matrix_operations_(CSMATH2)#Transposition|transpose]] of $\mathbf{A}$.

Note that the row rank and column rank are **always equal**; they are thus simply referred to as the **rank** of $\mathbf{A}$, denoted as $\text{rank } \mathbf{A}$.

>[!warning] Although the row rank and column rank are always equal, the rowspace and columnspace are not.

<!--ID: 1721102612900-->

### Rank and invertible matrices

*See also*: [The invertible matrix theorem](https://en.wikipedia.org/wiki/Invertible_matrix#The_invertible_matrix_theorem)

An $n \times n$ matrix $\mathbf{A}$ is [[Inverse_of_a_matrix|invertible]] if and only if $\text{rank } \mathbf{A} = n$. Equivalently:

- $\text{rank } \mathbf{A} = n \leftrightarrow |\mathbf{A}| \neq 0$
- The set of vectors $S$ formed from the rows of $\mathbf{A}$ is [[Linear_combinations,_linear_independence,_and_span#Linear independence|linearly indepedent]] if and only if $|\mathbf{A}| \neq 0$
- The homogenous system $\mathbf{AX} = 0$ has a [[Linear_systems_and_Cramer's_rule#Nontrivial solution|nontrivial solution]] (infinitely many) if and only if $\text{rank } \mathbf{A} < n$ (there are rows consisting entirely of zeroes in the RREF and there is thus a free variable).
<!--ID: 1721102612903-->
