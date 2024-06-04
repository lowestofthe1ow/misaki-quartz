---
target-deck: CSMATH2::Gauss-Jordan reduction and Gaussian elimination
tags: CSMATH2
title: Gauss-Jordan reduction and Gaussian elimination
---

## Gauss-Jordan reduction method for solving $AX=B$

1. Form the [[Linear_systems_and_Cramer's_rule#Augmented matrix|augmented matrix]] $[\mathbf{A}|\mathbf{B}]$.
2. Reduce the matrix to [[REF_RREF_and_row_equivalence#Reduced row echelon form|RREF]] with elementary row operations.
3. For each nonzero row in the resulting matrix in RREF, solve the corresponding equations for the unknown.

If the reduced augmented matrix includes a row of zeroes followed by a final trailing nonzero value, then there are **no solutions** to the system and it is considered **inconsistent**:

$$
\begin{bmatrix}
0 & 0 & 0 & 0 & | & 1
\end{bmatrix}
$$

If it instead contains a row of all zeroes, then there are **infinitely many solutions** to the system:

$$
\begin{bmatrix}
0 & 0 & 0 & 0 & | & 0
\end{bmatrix}
$$

<!--ID: 1717416476389-->

## Gaussian elimination

1. Form the [[Linear_systems_and_Cramer's_rule#Augmented matrix|augmented matrix]] $[\mathbf{A}|\mathbf{B}]$.
2. Reduce the matrix to [[REF_RREF_and_row_equivalence#Row echelon form|REF]] with elementary row operations.
3. Perform **back substitution** to solve the system.
<!--ID: 1717416476394-->

### Back substitution

Consider the following matrix in REF, with the variables $x$, $y$, $z$, and $w$ (from left to right):

$$
\begin{bmatrix}
1 & 1 & 2 & -5 & | & 3 \\
0 & 1 & 5 & -13 & | & 17 \\
0 & 0 & 1 & -2 & | & 3 \\
0 & 0 & 0 & 0 & | & 0
\end{bmatrix}
$$

**Back substitution** is performed starting at the last row. In this case, the last row consisting entirely of zeroes implies that the variable $w$ is **free** and that there are **infinitely many solutions**:

$$
0 = 0
$$

As the term implies, solve each row in terms of the previous row going upwards or backwards:

$$
\begin{align*}
&z - 2w = 3 \\
&\equiv \boxed{z = 3 + 2w} \\ \\

&y + 5z - 13w = 17 \\
&\equiv y = 17 - 5z + 13w \\
&\equiv y = 17 - 5(3+2w) + 13w \\
&\equiv y = 17 - 15 - 10w + 13w \\
&\equiv \boxed{y = 3w + 2} \\ \\

&x + y + 2z -5w = 3 \\
&\equiv x = 3 - y - 2z + 5w \\
&\equiv x = 3 - (3w + 2) - 2(3 + 2w) + 5w \\
&\equiv \boxed{x = -2w - 5}
\end{align*}
$$

<!--ID: 1717416476397-->
