---
target-deck: CSMATH2::Dot product and projection
tags: [CSMATH2]
title: Dot product and projection
---

## Dot product

The **dot product** of two vectors $\vec{A}$ and $\vec{B}$, denoted by $\vec{A} \cdot \vec{B}$, is defined as the sum of the products of their corresponding elements.

$$
\mathbf{a} = \begin{bmatrix}
a_{1} \\
a_{2} \\
\vdots \\
a_{n}
\end{bmatrix} \cdot \mathbf{b} = \begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{n}
\end{bmatrix} = \sum_{i = 1}^{n} a_ib_i
= a_1b_1 + a_2b_2 + \dots + a_nb_n
$$

A [geometric interpretation](https://www.youtube.com/watch?v=LyGKycYT2v0&t=84s) for 2D vectors $\vec{v}$ and $\vec{w}$ is that the dot product is equal to the length of $\vec{w}$ multiplied by the projected length of $\vec{v}$ onto $\vec{w}$:

![[dot_product.png]]

>[!info] Note that $i \cdot i = j \cdot j = k \cdot k = 1$. Similarly, $i \cdot j = j \cdot k = i \cdot k = 0$.
<!--ID: 1719854516391-->

### Properties of the dot product

The dot product is:

- **Commutative**
- **Distributive** over [[2D_vectors#Vector addition|vector addition]], i.e., $\vec{A} \cdot (\vec{B} + \vec{C}) = \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C}$
- **Associative** (including with [[2D_vectors#Scalar multiplication|scalar multiplication]])

Furthermore:

- $0 \cdot \vec{A} = 0$
- $\vec{A} \cdot \vec{A} = ||\vec{A}||^2$
<!--ID: 1719854516402-->

### Dot product and angle between vectors

If $0 \leq \theta \leq \pi$ is the angle between two nonzero vectors, then:

$$
\vec{A} \cdot \vec{B} = ||\vec{A}|| \ ||\vec{B}||\cos \theta
$$

If $\theta = 0$ or $\theta = \pi$, then the two vectors are **parallel**. Similarly, the two vectors are **orthogonal** (perpendicular, in the case of 2D vectors) if and only if their dot product is **zero**.

>[!info] Note that the zero vector is both parallel and orthogonal to any vector.
<!--ID: 1719854516416-->

## Projection
<!--ID: 1719854516437-->

### Scalar projection

The **scalar projection** of a vector of $\vec{B}$ onto $\vec{A}$ is given by:

$$
||\vec{B}|| \cos \theta
$$

Here, $\theta$ is the angle between $\vec{A}$ and $\vec{B}$. Because we know that:

$$
\vec{A} \cdot \vec{B} = ||\vec{A}|| \ ||\vec{B}||\cos \theta
$$

—the scalar projection of $\vec{B}$ onto $\vec{A}$ is thus also equivalent to:

$$
\frac{\vec{A} \cdot \vec{B}}{||\vec{A}||} = ||\vec{B}||\cos \theta
$$

This is consistent with the geometric interpretation of the [[Dot_product_and_projection#Dot product|dot product]] above.
<!--ID: 1719854516458-->

### Vector projection

The vector projection of $\vec{B}$ onto $\vec{A}$ is the vector whose magnitude is the scalar projection of $\vec{B}$ onto $\vec{A}$ and whose direction is the same as $\vec{A}$.

Observe how the unit vector whose direction is the same as $\vec{A}$ is given by:

$$
\frac{\vec{A}}{||\vec{A}||}
$$

The vector projection of $\vec{B}$ onto $\vec{A}$ can thus be obtained by scaling this unit vector by the scalar projection of $\vec{B}$ onto $\vec{A}$:

$$
\frac{\vec{A} \cdot \vec{B}}{||\vec{A}||}(\frac{\vec{A}}{||\vec{A}||}) = (\frac{\vec{A} \cdot \vec{B}}{||\vec{A}||^2})\vec{A}
$$
<!--ID: 1719854516473-->
