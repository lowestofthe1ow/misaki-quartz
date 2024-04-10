---
target-deck: CCDSTRU::Predicate logic
tags:
  - CCDSTRU
---

## Predicate logic

Predicate logic is a more powerful type of logic that allows us to reason and explore object relationships
<!--ID: 1707320148754-->


### Predicates

Given the statement
$$
x \text{ is greater than } 5
$$
where the **variable** is the subject of the statement ($x$), the **predicate** refers to the **property** that the variable can have ("greater than 5").
<!--ID: 1707320148763-->


### Propositional functions

$$
\text{Let } P(x) = x \text{ is greater than } 5
$$
$P(x)$ is [[Propositional logic#Proposition|not a proposition]] but will be once $x$ has a **value**, e.g:
$$
\begin{align*}
P(4) = F \\
P(10) = T
\end{align*}
$$
$P(x_1, x_2, ..., x_n)$ is therefore the value of the propositional function $P$ at the $n$-tuple $(x_1, x_2, ..., x_n)$ (a.k.a. **$n$-ary predicate** or **$n$-place predicate**).
>[!warning] Convention:
>**Uppercase letters** for propositional functions, and **lowercase letters** for propositions.
<!--ID: 1707320148767-->


#### Converting propositional functions into propositions

A propositional function whose variables do not have specific values is **not a proposition**. There are two ways wherein we can convert propositional functions into propositions:
1. Value assignment, e.g., $P(5)$, $P(-1)$
2. Quantification
<!--ID: 1707320148772-->


### Quantification

Quantification expresses the extent to which the predicate is true over a range of elements. The use of English words **some**, **all**, **none** are used in quantification.
<!--ID: 1707320148776-->


#### Universal quantification

Expresses that the predicate is true for all elements in a given domain. English words used to express such are **all**, **every**, and **each**.
The universal quantification of $P(x)$ is the statement "$P(x)$ is true for all values of $x$ in the domain," or:
$$
\begin{align*}
\forall xP(x) \\
\equiv P(x_1) \land P(x_2) \land ... \land P(x_n)
\end{align*}
$$
where $x_1, x_2, ..., x_n$ are all the elements in the domain.
>[!warning] An element for which $P(x)$ is false is called a **counterexample**.
<!--ID: 1707320148782-->


#### Existential quantification

Expresses that the predicate is true for at least one of the elements in a given domain. English words used to express such are **some**, **at least one**, and **there exists**.
The existential quantification of $P(x)$ is the statement "$P(x)$ is true for at least one value of $x$ in the domain," or:
$$
\begin{align*}
\exists xP(x) \\
\equiv P(x_1) \lor P(x_2) \lor ... \lor P(x_n)
\end{align*}
$$
where $x_1, x_2, ..., x_n$ are all the elements in the domain.
<!--ID: 1707320148787-->


#### Nested quantifiers

Two quantifiers are nested if one is within the scope of the other.
For instance, $\forall x \exists y(x+y=0)$ is translated as "For all $x$, there exists $y$ such that $x + y = 0$"
Given that the domain for $x$ is $\{1, 2, 3, 4\}$ and the domain for $y$ is $\{a, b, c,  d\}$:
![[Nested Quantifiers.png]]
<!--ID: 1707552668467-->

#### Negating quantifiers

|Negation|Equivalent statement|
|---|---|
|$\neg \exists xP(x)$|$\forall x \neg P(x)$|
|$\neg \forall xP(x)$|$\exists x \neg P(x)$</table>|
$$
$$
The rules for negations for quantifiers are called [[Equivalences#De Morgan's|De Morgan’s laws]] for quantifiers.
<!--ID: 1707668696826-->
