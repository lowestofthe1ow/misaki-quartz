---
target-deck: CSMATH2::Cross product
tags: [CSMATH2]
title: Cross product
---

## Cross product

Given two 3D vectors $\vec{A} = \begin{bmatrix}a_1 \\ a_2 \\ a_3\end{bmatrix}$ and $\vec{B} = \begin{bmatrix}b_1 \\ b_2 \\ b_3\end{bmatrix}$, the **cross product** of $\vec{A}$ and $\vec{B}$ is given by:

$$
\vec{A} \times \vec{B} = \begin{bmatrix}
a_2b_3 - a_3b_2 \\
a_3b_1 - a_1b_3 \\
a_1b_2 - a_2b_1
\end{bmatrix}
$$

A useful notational trick for computing the cross product involves constructing a $3 \times 3$ matrix and calculating its [[Determinants|determinant]]:

$$
\vec{A} \times \vec{B} = \begin{vmatrix}
\boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
= (a_2b_3 - a_3b_2)\boldsymbol{i} + (a_3b_1 - a_1b_3)\boldsymbol{j} + (a_1b_2 - a_2b_1)\boldsymbol{k}
$$
<!--ID: 1719854516325-->

### Properties of the cross product

The cross product has the following properties:

- $\vec{A} \times \vec{A} = 0$
- $0 \times \vec{A} = 0$
- $\vec{A} \times 0 = 0$
- $\boldsymbol{i} \times \boldsymbol{j} = \boldsymbol{k}, \ \boldsymbol{j} \times \boldsymbol{k} = \boldsymbol{i}, \ \boldsymbol{k} \times \boldsymbol{i} = \boldsymbol{j}$
- **Anticommutativity**, i.e. $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$
- **Distributivity** over [[2D_vectors#Vector addition|vector addition]]
- $(c\vec{A}) \times \vec{B} = \vec{A} \times (c\vec{B}) = c(\vec{A} \times \vec{B})$
<!--ID: 1719854516342-->

#### Scalar triple product

The **scalar triple product** is the [[Dot_product_and_projection#Dot product|dot product]] of a vector with the cross product of two other vectors:

$$
\vec{A} \cdot \vec{B} \times \vec{C} = \vec{A} \times \vec{B} \cdot \vec{C}
$$

A circular shift in the operands does not change the scalar triple product:

$$
\vec{A} \cdot \vec{B} \times \vec{C} = \vec{B} \cdot \vec{C} \times \vec{A} = \vec{C} \cdot \vec{A} \times \vec{B}
$$

Swapping instead will negate the output, for instance:

$$
\vec{A} \cdot \vec{B} \times \vec{C} = -(\vec{B} \cdot \vec{A} \times \vec{C})
$$

The scalar triple product is also equal to the [[Determinants#determinant|determinant]] of the $3 \times 3$ matrix with the three vectors as its rows or columns:

$$
\vec{A} \cdot \vec{B} \times \vec{C} = \begin{vmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{vmatrix}
$$
<!--ID: 1719854516353-->

#### Vector triple product

The **vector triple product** is the cross product of one vector with the cross product of another two:

$$
\vec{A} \times (\vec{B} \times \vec{C}) = (\vec{A} \cdot \vec{C})\vec{B} - (\vec{A} \cdot \vec{B})\vec{C}
$$
<!--ID: 1719854516361-->

### Geometric interpretation of the cross product

The **magnitude** of the cross product may be interpreted as the area of the parallelogram enclosed by the two vectors, i.e.:

$$
||\vec{A} \times \vec{B}|| = ||\vec{A}|| \ ||\vec{B}|| \sin \theta
$$

![[cross_product.png]]

It follows that the two vectors are **parallel** if and only if their cross product is **zero** (i.e., $\theta = 0$)

<!--ID: 1719854516372-->

#### Volume of a parallelepiped

The volume of a parallelepiped enclosed by three vectors is thus the area of the parallelogram base enclosed by two of the vectors (i.e., $||\vec{A} \times \vec{B}||$) multiplied by the height of the parallelepiped.

This height may be obtained as the [[Dot_product_and_projection#Scalar projection|scalar projection]] of the third vector onto the vector orthogonal to $\vec{A}$ and $\vec{B}$. Thus, in the figure below:

![[parallelepiped.png]]

The volume is given by:

$$
||\vec{A} \times \vec{B}|| \ ||\vec{C}|| \cos \theta
$$

Note that the vector orthogonal to $\vec{A}$ and $\vec{B}$ is simply the cross product of those two vectors. Thus:

$$
\begin{align*}
||\vec{A} \times \vec{B}|| \frac{\vec{A} \times \vec{B} \cdot \vec{C}}{||\vec{A} \times \vec{B}||} \\
= \vec{A} \times \vec{B} \cdot \vec{C}
\end{align*}
$$

The volume is thus given by $|\vec{A} \times \vec{B} \cdot \vec{C}|$ (the absolute value needed to ignore the sign of the cross product). This is equivalent to the scalar triple product of the three vectors.

<!--ID: 1719854516380-->
