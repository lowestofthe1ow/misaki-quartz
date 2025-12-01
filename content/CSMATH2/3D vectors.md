---
target-deck: CSMATH2::3D vectors
tags: [CSMATH2]
title: 3D vectors
---

## Vectors in 3D space

A vector in **3-dimensional space** is the $3 \times 1$ matrix:

$$
\vec{A} = \begin{bmatrix}
a_1 \\
a_2 \\
a_3
\end{bmatrix}
$$

Where $a_1$, $a_2$, and $a_3$ are the **components** of the vector. Concepts tied to 2D vectors extend naturally into 3D space, i.e.

- The **zero vector** is given by $\begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$.
- The [[2D_vectors#Vector magnitude|magnitude]] is given by $||\vec{A}|| = \sqrt{a_1^2 + a_2^2 + a_3^2}$.
- [[2D_vectors#Vector addition|Vector addition]], [[2D_vectors#Scalar multiplication|scalar multiplication]], and [[Matrices_(CSMATH2)#Equal matrices|checking for equality]] are still performed component-wise.
- A [[2D_vectors#Vector|vector connecting two points]] $P(a_1, a_2, a_3)$ (the tail) and $Q(b_1, b_2, b_3)$ (the head) is given by $\vec{PQ} = \begin{bmatrix}b_1 - a_1 \\ b_2 - a_2 \\ b_3 - a_3 \end{bmatrix}$.

Three-dimensional vectors may also be expressed as a linear combination of [[2D_vectors#Basis vectors|basis vectors]]:

$$
\boldsymbol{i} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix},\
\boldsymbol{j} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix},\
\boldsymbol{k} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}
$$

$$
\vec{A} = a_1\boldsymbol{i} + a_2\boldsymbol{j} + a_3\boldsymbol{k}
$$
<!--ID: 1719854516484-->

### Direction angles

The **direction angles** of a nonzero vector in 3D space are the the three angles $\alpha$, $\beta$, and $\gamma$ that have the **smallest, non-negative radian measures** from the $x$-, $y$-, and $z$-axes, respectively, to the position representation of the vector:

![[direction_3d.png]]

$\alpha$, $\beta$, and $\gamma$ may be seen as:

![[direction_3d_angles.png]]

Thus, by the identity $cos = \frac{\text{adj}}{\text{hyp}}$:

$$
\cos\alpha = \frac{a_1}{||\vec{A}||}, \
\cos\beta = \frac{a_2}{||\vec{A}||}, \
\cos\gamma = \frac{a_3}{||\vec{A}||}
$$

These are known as the **direction cosines** of $\vec{A}$. Note that:

$$
\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1
$$

>[!info] Note that when scaling $\vec{A}$ by some nonzero scalar $c$, $c\vec{A}$ will have the same direction as $\vec{A}$ if $c > 0$; it will have the opposite direction otherwise.
<!--ID: 1719854516491-->

### 3D unit vectors

If $\vec{A}$ is a nonzero vector in space with direction angles $\alpha$, $\beta$, and $\gamma$, then:

$$
\vec{A} = ||\vec{A}||(\cos\alpha \ \boldsymbol{i} + \cos\beta \ \boldsymbol{j} + \cos\gamma \ \boldsymbol{k})
$$

Where $\cos\alpha \ \boldsymbol{i} + \cos\beta \ \boldsymbol{j} + \cos\gamma \ \boldsymbol{k}$ is the **unit vector** having the same direction as $\vec{A}$. This unit vector may be expressed equivalently as:

$$
\vec{u} = \frac{a_1}{||\vec{A}||} \boldsymbol{i} + \frac{a_2}{||\vec{A}||} \boldsymbol{j} + \frac{a_3}{||\vec{A}||} \ \boldsymbol{k}
$$
<!--ID: 1719854516499-->
