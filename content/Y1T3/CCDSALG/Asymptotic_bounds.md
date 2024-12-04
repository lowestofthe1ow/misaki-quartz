---
target-deck: CCDSALG::Asymptotic bounds
tags: [CCDSALG]
title: Asymptotic bounds
---

## Order of growth

**Order of growth** is a way to characterize the algorithm’s efficiency. It refers to how the running time of an algorithm increases as the size of the input approaches **infinity**. This is referred to as **asymptotic growth**.
<!--ID: 1718172269128-->

### $O$-notation

$O$-notation characterizes an **asymptotically loose upper bound** of a function. It indicates that a function grows **no faster than a certain rate**. For instance, for the function:

$$
f(n) = 6n^3 + 2n^2 + 3n + 8
$$

$f(n)$ can be said to be $O(n^3)$—its **leading term** but without the coefficient—as it grows no faster than $n^3$. The function is also $O(n^4)$, $O(n^5)$, and so on, as it also grows no faster than $n^4$ and $n^5$, respectively. In other words, the function is $O(n^c), c \geq 3$.

>[!info] $O(n^3)$ here is referred to as the **asymptotically tight upper bound**.

Formally we write that for a given function $g(n)$:

$$
O(g(n)) = \{f(n)\text{ | }\exists c > 0, n_0 > 0 \text{ such that } 0 \leq f(n) \leq cg(n), \forall n \geq n_0\}
$$

In other words, a function $f(n)$ is $O(g(n))$ if there exists a positive constant $c$ such that $f(n) \leq cg(n)$ for **sufficiently large** $n$. Here "sufficiently large" means **for all $n$ larger than some arbitrary $n_0$**.

>[!faq] We say that $f(n)$ is $O(g(n))$ if $f(n) \in O(g(n))$, as $O$-notation is defined in terms of [[Set_theory|sets]]; it is, however, more common to express this as $f(n) = O(g(n))$.

<!--ID: 1718172269133-->

#### Example: proving that $6n^3 + 2n^2 + 3n + 8 = O(n^3)$

A function is $O(g(n))$ if the following condition is met:

$$
\exists c > 0, n_0 > 0 \text{ such that } 0 \leq f(n) \leq cg(n), \forall n \geq n_0
$$

Choose $n_0 = 1$. It must be shown that there exists $c > 0$ such that:

$$
\begin{align*}
6n^3 + 2n^2 + 3n + 8 &\leq cn^3, &\forall n \geq 1 \\
6 + 2 + 3 + 8 &\leq c \\
19 &\leq c
\end{align*}
$$

The inequality holds when $c = 19$. Thus $6n^3 + 2n^2 + 3n + 8 = O(n^3)$.

<!--ID: 1718172269136-->

#### $o$-notation

The bound $2n^2 = O(n^2)$ is asymptotically tight; the bound $2n = O(n^2)$ is **not**. $o$-notation denotes an upper bound that is **not asymptotically tight**, i.e. $6n^3 + 2n^2 + 3n + 8$ is $o(n^c), c > 3$. Formally, it is defined similarly to $O$-notation (the difference is boxed for clarity):

$$
O(g(n)) = \{f(n)\text{ | }\exists c > 0, n_0 > 0 \text{ such that } 0 \leq f(n) \boxed{<} cg(n), \forall n \geq n_0\}
$$

Equivalently:

$$
o(g(n)) = O(g(n)) - \Theta(g(n))
$$
<!--ID: 1718172269138-->

### $\Omega$-notation

$\Omega$-notation characterizes an **asymptotically loose lower bound** of a function. It indicates that a function grows **at least as fast as certain rate**. For instance, for the function:

$$
f(n) = 6n^3 + 2n^2 + 3n + 8
$$

$f(n)$ is said to be $\Omega(n^3)$, as it grows at least as fast as $n^3$. By definition, it is also $\Omega(n^2)$ and $\Omega(n)$, i.e. it is $\Omega(n^c), c \leq 3$. Formally, it is defined similarly to $O$-notation (the difference is boxed for clarity):

$$
O(g(n)) = \{f(n)\text{ | }\exists c > 0, n_0 > 0 \text{ such that } 0 \leq \boxed{cg(n) \leq f(n)}, \forall n \geq n_0\}
$$

Equivalently:

$$
\omega(g(n)) = \Omega(g(n)) - \Theta(g(n))
$$
<!--ID: 1718172269141-->

#### $\omega$-notation

Similarly to $o$-notation, $\omega$-notation characterizes a lower bound that is **not asymptotically tight**, i.e. $6n^3 + 2n^2 + 3n + 8$ is $o(n^c), c < 3$. Formally, it is defined similarly to $o$-notation (the difference is boxed for clarity):

$$
O(g(n)) = \{f(n)\text{ | }\exists c > 0, n_0 > 0 \text{ such that } 0 \leq \boxed{cg(n) < f(n)}, \forall n \geq n_0\}
$$
<!--ID: 1718172269143-->

### $\Theta$-notation

$\Theta$-notation characterizes a **tight bound** on the asymptotic behavior of a function. It shows that a function grows at **precisely** a certain rate, based on its highest-order term; it describes the **average-case running time**.

A function is $\Theta(g(n))$ if and only if it is both $O(g(n))$ and $\Omega(g(n))$:

$$
\Theta(g(n)) \leftrightarrow O(g(n)) \land \Omega(g(n))
$$

It is thus the [[Set_operations#Intersection|intersection]] of $O(g(n))$ and $\Omega(g(n))$:

$$
\Theta(g(n)) = O(g(n)) \cap \Omega(g(n))
$$
<!--ID: 1718172269146-->

## Growth rate functions

| Time Complexity | Name | Description |
|---|---|---|
| $O(1)$ | Constant | Time requirement is independent of input size |
| $O(\log_2 n)$ | Logarithmic | Time requirement increases slowly as the input size increases |
| $O(n)$ | Linear | Time requirement increases directly proportional with the input size increases |
| $O(n \log_2 n)$ | Linear-logarithmic | Time requirement increases more rapidly than linear time requirement |
| $O(n^2)$ | Quadratic | Time requirement increases rapidly with the input size |
| $O(n^3)$ | Cubic | Time requirement increases more rapidly than quadratic time requirement |
| $O(2^n)$ | Exponential | Time requirement increases too rapidly to be practical |

<!--ID: 1718172269148-->
