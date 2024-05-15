---
target-deck: CCDSTRU::Set theory
tags: CCDSTRU
title: Set theory
---

## Set

A **set** is an unordered collection of objects, called **elements** or **members**:
$a \in A$ denotes that $a$ is an element of set $A$.
$a \notin A$ denotes that $a$ is not an element of set $A$.
>[!warning] Convention
>Uppercase letters are used to name sets, while lowercase letters are used to indicate elements of a set.
<!--ID: 1707668710661-->

### Roster method

A way of describing a set involving listing all the members of a set, when possible. All members of the set are listed between braces.
$$
\begin{align*}
& V = \{a, e, i, o, u\} \\
& A = \{1, 2, 3,\ldots \} \\
& B = \{2, 4, 6, \ldots, 20\}
\end{align*}
$$
<!--ID: 1707668710668-->

### Set builder

Characterizing all elements in the set by stating the property or properties they must have to be members.
$$
\begin{align*}
& V = \{x|x \text{ is a vowel}\} \\
& A = \{x|x \in \mathbb{Z}^+\} \\
& B = \{x \in \mathbb{Z}^+|x\mod{2} = 0 \land x \leq 20\}
\end{align*}
$$
>[!info] Note that the third example specifies the set of positive integers as the **universe**.
<!--ID: 1707668710672-->

### Venn diagrams

In Venn diagrams, the universal set $U$, which contains all the objects under consideration, is represented by a **rectangle**. Inside this rectangle, circles or other geometrical figures are used to represent sets. Sometimes, points are used to represent the particular elements of the set.
![[venn_diagram.png]]
<!--ID: 1707668710677-->

### Important sets

|Symbol|Description|Contents|
|---|---|---|
|$\mathbb{N}$|The set of natural numbers|$\{0, 1, 2, 3, \ldots\}$|
|$\mathbb{Z}$|The set of integers|$\{\dots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$|
|$\mathbb{Z}^+$|The set of positive integers|$\{1, 2, 3,\ldots\}$|
|$\mathbb{Z}^-$|The set of negative integers|$\{\dots, -3, -2, -1\}$|
|$\mathbb{Q}$|The set of rational numbers|$\{\frac{p}{q} \| p \in \mathbb{Z} \land q \in \mathbb{Z} \land q \neq 0$\}
|$\mathbb{C}$|The set of complex numbers| </table>|
$$
$$
>[!warning] There is no general agreement whether 0 is included in $\mathbb{N}$.
<!--ID: 1707668710682-->

#### Null set

A set that contains no elements is called an **empty set** or **null set**, denoted by $\emptyset$ or $\{\}$.
<!--ID: 1707668710687-->

#### Singleton set

A set that contains exactly one element is called a **singleton set**.
>[!warning] Note that $\emptyset \neq \{\emptyset\}$. $\emptyset$ is a null set, while $\{\emptyset\}$ is a singleton set containing $\emptyset$.
<!--ID: 1707668710690-->

### Cardinality

The number of **distinct** elements in a set $S$ is known as the cardinality of $S$ or $|S|$
<!--ID: 1707668710694-->

### Equal sets

Two sets $A$ and $B$ are equal if and only if they have the same elements.
$$
A = B \leftrightarrow \forall x (x \in A \leftrightarrow x \in B)
$$
>[!warning] The order of elements and the number of times each element occurs in the set do not matter.
<!--ID: 1707668710699-->

### Subset

Set $A$ is a **subset** of set $B$ if and only if every element of $A$ is also in $B$.
$$
A \subseteq B \leftrightarrow \forall x(x \in A \to x \in B)
$$
<!--ID: 1707668710702-->

#### Proper subset

Set $A$ is a **proper subset** of set $B$ if and only if every element of $A$ is also in $B$, but $A \neq B$; i.e., there exists an element of $B$ that is not in $A$.
$$
A \subset B \leftrightarrow \forall x(x \in A \to x \in B) \land \exists x(x \in B \land x \notin A)
$$
<!--ID: 1707668710706-->

### Power set

The **power set** of $S$ is the set of all subsets of $S$, denoted by $\mathcal{P}(S)$.
Let $A = \{1, 2, 3\}$:
$$
\mathcal{P}(A) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}
$$
>[!info] Note that **$|\mathcal{P}(S)| = 2^{|S|}$**.
<!--ID: 1707668710711-->
