---
target-deck: CSMATH2::Linear transformations
tags: [CSMATH2]
title: Linear transformations
---

## Linear transformations

Let $V$ and $W$ be vector spaces. A linear transformation $L$ of $V$ onto $W$ assigns a unique vector $L(X)$ in $W$ for each $X$ in $V$. This is denoted as:

$$
L: V \to W
$$
<!--ID: 1722692642114-->

### Linearity

Linear transformations are **linear**, meaning:

$$
\forall X, Y \in V, L(X+Y) = L(X) + L(Y)
$$
<!--ID: 1722692642121-->

### Homogeneity

Linear transformations are **homogenous**, meaning:

$$
\forall c \in \mathbb{R}, X \in V, \ cL(X) = L(cX)
$$

>[!info] Note that $L: V \to W, \ 0L(X) = L(0X) = L(0_V) = 0_W$
<!--ID: 1722692642125-->

### Bases and linear transformations

Let $S = \{X_1, X_2, \dots, X_n\}$ be a basis for $V$. Then:

$$
\forall X \in V, \ L(X) \in \text{span } \{L(X_1), L(X_2), \dots, L(X_n)\}
$$
<!--ID: 1722692642129-->

### One-to-one transformations

A linear transformation is **one-to-one** or [[Functions#Injection|injective]] if and only if:

$$
\forall X_1, X_2 \in V, \ L(X_1) = L(X_2) \to X_1 \neq X_2
$$
<!--ID: 1722692642133-->

## Kernel

Let $L: V \to W$ be a linear transformation. The **kernel** of $L$ is given by:

$$
\ker L = \{X \in V \ | \  L(X) = 0_W\}
$$

In other words, where $L(X) = AX$ with $A$ as an $m \times n$ matrix, $\ker L$ is the solution space of the [[Linear_systems_and_Cramer's_rule#Homogenous system|homogenous system]] $AX = 0$.

>[!info] The dimension of $\ker L$ is known as the **nullity** of $L$.
<!--ID: 1722692642138-->

## Range

Let $L: V \to W$ be a linear transformation. The **range** of $L$ is given by:

$$
\text{range } L = \{Y \in W \ | \ \exists X \ L(X) = Y\}
$$

In other words, where $L(X) = AX$ with $A$ as an $m \times n$ matrix, $\text{range } L$ is the [[Rowspace,_columnspace,_and_rank#Row and columnspace|column space]] of $L$. Furthermore, $L$ is **onto** or [[Functions#Surjection|surjective]] if $\text{range } L = W$.
<!--ID: 1722692642142-->

## Dimension of the kernel and range

Let $L: V \to W$ be a linear transformation. Then:

$$
\dim(\ker L) + \dim(\text{range } L) = \dim V
$$

If $\dim V = \dim W$, then $L$ is [[Functions#Injection|injective]] if and only if it is [[Functions#Surjection|surjective]]. That is, either $L$ is [[Functions#Bijection|bijective]] or it is neither injective nor surjective.

Let $L$ be represented as $L(X) = AX$. Then $L$ is bijective if and only if $A$ is invertible. Note that $\dim(\text{range } L) = \text{rank } A$.
<!--ID: 1722692642147-->
