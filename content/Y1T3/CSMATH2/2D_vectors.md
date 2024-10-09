---
target-deck: CSMATH2::2D vectors
tags: CSMATH2
title: 2D vectors
---

## Vector

Consider the $2 \times 1$ [[Matrices_(CSMATH2)|matrix]]:

$$
\mathbf{X} = \begin{bmatrix}
a \\
b
\end{bmatrix}
$$

$\mathbf{X}$ is referred to as a **two-dimensional vector**, where the real numbers $x$ and $y$ are referred to as its **components**. Vectors may be represented with a directed line segment from an initial point $P(x_1,y_1)$ to the terminal point $Q(x_2,y_2)$, denoted by $\vec{PQ}$; $P$ is known as the **tail** while $Q$ is known  as the **head**.

![[headtail.png]]

The tail is usually the origin $(0,0)$, with the head being at $(a,b)$.

>[!info] Two vectors are said to be **equal** if their respective components are equal.

<!--ID: 1719854516507-->

### Vector magnitude

The **magnitude** of a vector, denoted by $||\vec{A}||$ is the **length** of any of its representations. Let $\vec{A} = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$. Then the magnitude is the distance from $(0,0)$ (the tail) to $(a_1,a_2)$ (the head):

$$
||\vec{A}|| = \sqrt{a_1^2 + a_2^2}
$$

<!--ID: 1719854516515-->

### Vector direction

The **direction** of a vector (if and only if it is nonzero) is the direction of any of its representations. The direction is expressed as an angle $\theta$ measured from the **positive** $x$-axis, **counterclockwise**, toward the position representation of the vector:

![[direction.png]]

Thus, given $\vec{A} = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$:

$$
\begin{align*}
a_1 &= ||\vec{A}||\cos{\theta} \\
a_2 &= ||\vec{A}||\sin{\theta}
\end{align*}
$$

<!--ID: 1719854516525-->

### Vector addition

The **sum** of two vectors is given by adding corresponding components:

$$
\begin{bmatrix}
u_1 \\
u_2
\end{bmatrix} + \begin{bmatrix}
v_1 \\
v_2
\end{bmatrix} = \begin{bmatrix}
u_1 + v_1 \\
u_2 + v_2
\end{bmatrix}
$$

<!--ID: 1719854516533-->

### Negative of a vector and vector subtraction

If $\vec{A} = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$, then the **negative** of $\vec{A}$ is given by:

$$
-\vec{A} = \begin{bmatrix}
-a_1 \\
-a_2
\end{bmatrix}
$$

<!--ID: 1719854516540-->

### Scalar multiplication

The product of a scalar and a vector is the vector formed by multiplying each component of the original vector by the scalar:

$$
c\begin{bmatrix}
a_1 \\
a_2
\end{bmatrix} = \begin{bmatrix}
ca_1 \\
ca_2
\end{bmatrix}
$$

<!--ID: 1719854516548-->

### Basis vectors

Given $\vec{A} = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$, observe that $\vec{A} = a_1 \begin{bmatrix} 1 \\ 0 \end{bmatrix} + a_2 \begin{bmatrix} 0 \\ 1 \end{bmatrix}$. Thus $\vec{A}$ can be expressed as a **linear combination** of two vectors:

$$
\boldsymbol{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix},\
\boldsymbol{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
$$

$$
\vec{A} = a_1\boldsymbol{i} + a_2\boldsymbol{j}
$$

$\boldsymbol{i}$ and $\boldsymbol{j}$ are referred to as **basis vectors**. Since $\vec{A} = a_1\boldsymbol{i} + a_2\boldsymbol{j}$ and the components may be obtained as:

$$
\begin{align*}
a_1 &= ||\vec{A}||\cos{\theta} \\
a_2 &= ||\vec{A}||\sin{\theta}
\end{align*}
$$

It follows that:

$$
\begin{align*}
\vec{A} &= ||\vec{A}||\cos{\theta}\boldsymbol{i} + ||\vec{A}||\sin{\theta}\boldsymbol{j} \\
\vec{A} &= ||\vec{A}||(\cos{\theta}\boldsymbol{i} + \sin{\theta}\boldsymbol{j})
\end{align*}
$$

Here $\cos{\theta}\boldsymbol{i} + \sin{\theta}\boldsymbol{j}$ is known as a **unit vector** (as it has a magnitude of $\sqrt{\cos^2\theta + \sin^2\theta} = 1$). It may be denoted as $\vec{u}$.

<!--ID: 1719854516556-->
