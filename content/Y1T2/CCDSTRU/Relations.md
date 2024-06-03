---
target-deck: CCDSTRU::Relations
tags: CCDSTRU
title: Relations
---

## Binary relation

A **binary relation** between $A$ and $B$ is a subset of $A \times B$.

<!--ID: 1710859393538-->

## Relations on a set

A **relation on a set** $A$ is a subset of $A \times A$.

>[!important] $A \times A$ has $n^2$ elements. A set with $m$ elements has $2^m$ subsets. Thus a set has $2^{n^2}$ possible relations.

<!--ID: 1710859393542-->

### Reflexivity

A relation $R$ on a set $A$ is **reflexive** if:

$$
\text{Let } u: \text{elements in } A
$$

$$
\forall x ((x,x) \in R)
$$

<!--ID: 1710859393546-->

### Symmetry

A relation $R$ on a set $A$ is **symmetric** if:

$$
\text{Let } u: \text{elements in } A
$$

$$
\forall x \forall y ((x,y) \in R \to (y,x) \in R)
$$

<!--ID: 1710859393550-->

### Antisymmetry

A relation $R$ on a set $A$ is **antisymmetric** if:

$$
\text{Let } u: \text{elements in } A
$$

$$
\forall x \forall y (((x,y) \in R \land (y,x) \in R) \to x=y)
$$

<!--ID: 1710859393554-->

### Transitivity

A relation $R$ on a set $A$ is **transitive** if:

$$
\text{Let } u: \text{elements in } A
$$

$$
\forall x \forall y \forall z (((x,y) \in R \land (y,z) \in R) \to (x,z) \in R)
$$

<!--ID: 1710859393558-->
