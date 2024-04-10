---
target-deck: CCDSTRU::Number theory::Prime numbers, GCD, and LCM
tags: CCDSTRU
---

## Prime number

A number $p \in \mathbb{Z}^+$ where $p > 1$ is **prime** if the only factors of $p$ are $1$ and $p$. A number $p \in \mathbb{Z}^+$ where $p > 1$ that is **not** prime is referred to as **composite**.
<!--ID: 1712722536433-->


### Fundamental theorem of arithmetic

Every positive integer greater than 1 can be written **uniquely** as a **prime** or as the **product of two or more primes** where the factors are written in order of nondecreasing size, e.g.:
$$
100=2\times2\times5\times5
$$
>[!info] If $n$ is a **composite** integer, then $n$ has a **prime** [[Division and modular arithmetic#Division|divisor]] less than or equal to $\sqrt{n}$.
<!--ID: 1712722536439-->


## Greatest common divisor

Let $a,b \in \mathbb{Z}$ and $a,b \neq 0$. The largest integer $d$ such that $d$ [[Division and modular arithmetic#Division|divides]] both $a$ and $b$ (i.e., $d \mid a$ and $d \mid b$) is called the **greatest common divisor** of $a$ and $b$, denoted by:
$$
\text{gcd}(a,b)
$$
$\text{gcd}(a,b)$ **exists** because $0 < |\{d|(d \mid a) \land (d \mid b)\}| < \infty$. In other words, **there is always at least one divisor** common to $a$ and $b$ and the set of all such divisors is **finite**.
>[!info] **Relatively prime** and **pairwise relatively prime**
>- $a$ and $b$ are **relatively prime** if $\text{gcd}(a,b)=1$.
>- The set of integers $\{a_1, a_2, \dots, a_n\}$ are **pairwise relatively prime** if $\forall i \forall j (\text{gcd}(a_i, a_j) = 1)$ where $1 \leq i < j \leq n$. In other words, **every possible pair of integers in the list is relatively prime.**
<!--ID: 1712722536443-->


## Least common multiple

Let $a,b \in \mathbb{Z}^+$. The **least common multiple** of $a$ and $b$ is the smallest $m \in \mathbb{Z}^+$ such that both $a$ and $b$ divide $m$ (i.e., $a \mid m$ and $b \mid m$), denoted by:
$$
\text{lcm}(a,b)
$$
$\text{lcm}(a,b)$ **exists** because $|\{m|(a \mid m) \land (b \mid m)\}| > 0$ and every nonempty set of positive integers has a **least element**.
<!--ID: 1712722536445-->


## Relationship between $\text{gcd}(a,b)$ and $\text{lcm}(a,b)$
$$
ab=\text{gcd}(a,b)\times\text{lcm}(a,b)
$$
<!--ID: 1712722536450-->


## Identifying $\text{gcd}(a,b)$ and $\text{lcm}(a,b)$ with prime representations

Let $a,b \in \mathbb{Z}^+$ and $p_j$ be a prime number ($1 \leq j \leq n$). By the fundamental theorem of arithmetic:
$$
a=p_1^{a_1} p_2^{a_2} \dots p_n^{a_n}
$$
and
$$
b=p_1^{b_1} p_2^{b_2} \dots p_n^{b_n}
$$
—where each exponent, denoted by $a_1, a_2, \dots, a_n$ and $b_1, b_2, \dots, b_n$ is a nonnegative integer. The greatest common factor of $a$ and $b$ can be obtained by obtaining the product of all prime factors (including those occurring more than once) **common** to both $a$ and $b$. This means that any given prime factor can only occur at **most** $\text{min}(a_n, b_n)$ times:
$$
\text{gcd}(a,b)=p_1^{\text{min}(a_1,b_1)}, p_1^{\text{min}(a_2,b_2)}, \dots, p_1^{\text{min}(a_n,b_n)}
$$
The least common multiple of $a$ and $b$ can be found in a similar manner, except that any given prime must occur at **least** $\text{max}(a_n, b_n)$ times:
$$
\text{lcm}(a,b)=p_1^{\text{max}(a_1,b_1)}, p_1^{\text{max}(a_2,b_2)}, \dots, p_1^{\text{max}(a_n,b_n)}
$$
<!--ID: 1712722536454-->


## Euclidean algorithm

From the [[Division and modular arithmetic#Division algorithm|division algorithm]], let $a,b,q,r \in \mathbb{Z}$:
$$
\begin{align*}
a &= dq+r \\
\text{gcd}(a,d) &= \text{gcd}(d,r)
\end{align*}
$$
When repeatedly applying the division algorithm with $d$ as the new dividend and $r$ as the new divisor, eventually some remainder $r_n = 0$ occurs. It follows that:
$$
\text{gcd}(r_n,0)=r_n
$$
>[!info] The Euclidean algorithm is **recursive**, with the **base case** being that $r=0$.
<!--ID: 1712722536458-->
