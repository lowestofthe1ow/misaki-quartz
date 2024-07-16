---
target-deck: CSMATH2::Vector spaces and subspaces
tags: CSMATH2
title: Vector spaces and subspaces
---

## Vector space

A **real vector space** is some set of elements $\boldsymbol{V}$ with two operations $\bigoplus$ and $\bigodot$ defined such that they satisfy the following conditions:

1. **Closure** under $\bigoplus$
2. Closure under $\bigodot$
<!--ID: 1719926133362-->

### Closure under $\bigoplus$

A vector space is **closed** under $\bigoplus$, i.e., given $X, Y \in \boldsymbol{V}$, then  $X \bigoplus Y \in \boldsymbol{V}$ with the following properties:

|Property|Definition|
|---|---|
|Commutativity|$X \bigoplus Y = Y \bigoplus X$|
|Associativity|$(X \bigoplus Y) \bigoplus Z = X \bigoplus (Y \bigoplus Z)$|
|Zero property|There exists some unique $0 \in \boldsymbol{V}$ such that $X \bigoplus 0 = X$|
|Negation|There exists some $-X$ such that $X \bigoplus -X = 0$|

<!--ID: 1719926133367-->

### Closure under $\bigodot$

A vector space is **closed** under $\bigodot$, i.e., given $X \in \boldsymbol{V}, c \in \mathbb{R}$, then $c \bigodot X \in \boldsymbol{V}$ with the following properties:

|Property|Definition|
|---|---|
|Distributivity over $\bigoplus$|$c \bigodot (X \bigoplus Y) = (c \bigodot X) \bigoplus (c \bigodot Y)$|
|Distributivity over scalar addition ($+$)|$(c + d) \bigodot X = (c \bigodot X) \bigoplus (d \bigodot X)$|
|Associativity|$c \bigodot (d \bigodot X) = (cd) \bigodot X$|
|Identity|$1 \bigodot X = X$|

>[!info] Note that the following also hold true:
>- $0 \bigodot  X = 0, \ \forall X \in \boldsymbol{V}$
>- $c \bigodot 0 = 0, \ \forall c \in \mathbb{R}$
>- If $c \bigodot X = 0$, then $c = 0$ or $X = 0$.
>- $-1 \bigodot X = -X, \ \forall X \in \boldsymbol{V}$

<!--ID: 1719926133369-->

## Subspace

Let $V$ be a [[Vector_spaces_and_subspaces#Vector space|vector space]] and let $W$ be a non-empty [[Set_theory#Subset|subset]] of $V$. If $W$ is a vector space with respect to the operations ([[Vector_spaces_and_subspaces#Closure under $ bigoplus$|vector addition]] and [[Vector_spaces_and_subspaces#Closure under $ bigodot$|scalar multiplication]]) in $V$, then $W$ is called a **subspace** of $V$. In other words, $V$ must be:

- Closed under the operation of vector addition, i.e., for any $X, Y \in W$, it must be true that $X \bigoplus Y \in W$.
- Closed under the operation of scalar multiplication, i.e., for any $c \in \mathbb{R}$ and $X \in W$, it must be true that $c \bigodot X \in W$.

Note that the following are also true:

- $V$ is a subspace of itself.
- $W = \{0\}$ (a [[Set_theory#Singleton set|set with only the zero vector]]) is a subspace of $V$.
- Let $V = \mathbb{R}^3$ and $W = \{(x,y,0) : x, y \in \mathbb{R}\}$. $W$ is a subspace of $V$.
<!--ID: 1719926133372-->
