---
target-deck: CSMATH2::Linear combinations, linear independence, and span
tags: [CSMATH2]
title: Linear combinations, linear independence, and span
---

## Linear combinations

A vector $X$ in a vector space $V$ is a linear combination of the vectors $X_1, X_2, \dots, X_k \in V$ if it can be written as:

$$
X = c_1X_1 + c_2X_2 + \dots + c_kX_k, \ c_1, c_2, \dots, c_k \in \mathbb{R}
$$
<!--ID: 1721102633391-->

### Spanning set

Let $S$ be a set ${X_1, X_2, \dots, X_k}$ of $k$ vectors in a vector space $V$. $S$ **spans** $V$ if all vectors in $V$ are linear combinations of the vectors in $S$.

>[!info] For example, $i$, $j$, and $k$ span the vector space $\mathbb{R}^3$.

<!--ID: 1721102633395-->

### Linear independence

Let $S$ be a set ${X_1, X_2, \dots, X_k}$ of $k$ vectors in a vector space $V$. $S$ is **linearly independent** if and only if:

$$
c_1X_1 + c_2X_2 + \dots + c_kX_k = 0 \to c_1 = c_2 = \dots = c_k = 0
$$

In other words, a set of vectors is linearly **dependent** if there exist constants $c_1, c_2, \dots, c_k$ that are **not all zero** such that $c_1X_1 + c_2X_2 + \dots + c_kX_k = 0$.

>[!info] $S$ is linearly dependent if one of its vectors is a linear combination of the rest.

<!--ID: 1721102633398-->
