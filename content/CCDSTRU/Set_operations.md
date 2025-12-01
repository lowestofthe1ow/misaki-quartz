---
target-deck: CCDSTRU::Set theory::Set operations
tags: [CCDSTRU]
title: Set operations
---

## Cartesian product

The cartesian product of $A$ and $B$, denoted by $A \times B$, is the set of all ordered pairs $(a, b)$ such that $a \in A$ and $b \in B$.

$$
A \times B = \{(a, b) | a \in A \land b \in B\}
$$

Let $A = \{1, 2, 3\}$ and $B = \{a, b\}$:

$$
\begin{align*}
& A \times B = \{(1, a), (1, b), (2, a), (2, b), (3, a), (3, b)\} \\
& B \times A = \{(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)\}
\end{align*}
$$

>[!info] Note that:
>- $A \times B \neq B \times A$, unless $A = \emptyset$ or $B = \emptyset$ or $A = B$ (i.e. it is **not commutative**)
>- $(A \times B) \times C \neq A \times B \times C$ (i.e. it is **not associative**)
>- $|A \times B| = |A||B|$
>- $A^n$ denotes the cartesian product of $A$ with itself $n$ times.
<!--ID: 1707668768259-->

## Union

$A \cup B = \{x | x \in A \lor x \in B \}$

>[!info] Principle of inclusion-exclusion
> Note that $|A| + |B|$ counts each element that is in $A$ but not in $B$ or in $B$ but not in $A$ exactly **once**, and each element that is in both $A$ and $B$ exactly **twice**. Thus, if the number of elements that are in both $A$ and $B$ is subtracted from $|A| + |B|$, elements in $A \cap B$ will be counted only **once**. Hence, $|A \cup B| = |A| + |B| − |A \cap B|$.
<!--ID: 1707668768264-->

## Intersection

$A \cap B = \{x | x \in A \land x \in B \}$

>[!info] If $A \cap B = \emptyset$, $A$ and $B$ are **disjoint sets**.
<!--ID: 1707668768268-->

## Difference

$A - B = \{x | x \in A \land x \notin B \}$
<!--ID: 1707668768272-->

## Complement

$\bar{A} = \{ x \in \mathcal{U} | x \notin A \}$
<!--ID: 1707668768276-->
