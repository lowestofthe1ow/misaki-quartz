---
target-deck: CCDSTRU::Rules of inference
tags: [CCDSTRU]
title: Rules of inference
---

## Argument

An argument in propositional logic is a sequence of propositions.

<!--ID: 1706696346835-->

### Premises

All statements in an argument except the last.

<!--ID: 1706696346838-->

### Conclusion

The final argument in the list.

<!--ID: 1706696346840-->

## Rules of inference

<!--ID: 1716721003591-->

### Conjunction

$$
\begin{align*}
& p \\
& q \\
& \therefore p \land q
\end{align*}
$$
<!--ID: 1706696346843-->

### Simplification

$$
\begin{align*}
& p \land q \\
& \therefore p
\end{align*}
$$
<!--ID: 1706696346846-->

### Addition

$$
\begin{align*}
& p \\
& \therefore p \lor q
\end{align*}
$$
<!--ID: 1706696346849-->

### Resolution

$$
\begin{align*}
& p \lor q \\
& \neg p \lor r \\
& \therefore q \lor r
\end{align*}
$$
<!--ID: 1706696346854-->

### Hypothetical syllogism

$$
\begin{align*}
& p \to q \\
& q \to r \\
& \therefore p \to r
\end{align*}
$$
<!--ID: 1706696346857-->

### Modus ponens

$$
\begin{align*}
& p \\
& p \to q \\
& \therefore q
\end{align*}
$$
<!--ID: 1706696346860-->

### Disjunctive syllogism

$$
\begin{align*}
& p \lor q\\
& \neg p \\
& \therefore q
\end{align*}
$$
<!--ID: 1706696346862-->

### Modus tollens

$$
\begin{align*}
& \neg q \\
& p \to q \\
& \therefore \neg p
\end{align*}
$$
<!--ID: 1706696346865-->

## Rules of inference for quantified statements

<!--ID: 1716721003595-->

### Universal instantiation

$$
\begin{align*}
& \forall x P(x) \\
& \therefore P(c) \text{ where } c \in u
\end{align*}
$$
<!--ID: 1707552668477-->

### Existential instantiation

$$
\begin{align*}
& \exists x P(x) \\
& \therefore P(c) \text{ for some element } c \text{ where } c \in u
\end{align*}
$$

Usually we have no knowledge of what $c$ is, only that it exists. Because it exists, we may give it a name ($c$) and continue our argument.

<!--ID: 1707552668484-->

### Universal generalization

$$
\begin{align*}
& P(c) \text{ for an arbitrary } c \text{ where } c \in u \\
& \therefore \forall x P(x)
\end{align*}
$$

>[!warning] $c$ must be an **arbitrary**, not a **specific** element of the domain. We have no control over c and cannot make any other assumptions about c other than it comes from the domain

<!--ID: 1707552668490-->

### Existential generalization

$$
\begin{align*}
& P(c) \text{ for some element } c \text{ where } c \in u \\
& \therefore \exists x P(x)
\end{align*}
$$

If we know one element $c$ in the domain for which $P(c)$ is true, then we know that $\exists x P(x)$ is true.

<!--ID: 1707552668495-->
