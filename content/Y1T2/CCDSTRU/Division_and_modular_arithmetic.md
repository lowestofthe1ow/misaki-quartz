---
target-deck: CCDSTRU::Number theory::Division and modular arithmetic
tags: [CCDSTRU]
title: Division and modular arithmetic
---

## Division

If $a$ and $b$ are integers with $a \neq 0$, $a$ **divides** $b$ if there is an integer $c$ such that $b=ac$ (i.e., $\frac{b}{a}$ is an integer). When $a$ divides $b$ we say that $a$ is a **factor** or **divisor** of $b$, and that $b$ is a **multiple** of $a$:

$$
\exists c(c \in \mathbb{Z} \land b = ac) \to a \mid b
$$

Let $a$, $b$, and $c$ be integers where $a \neq 0$. Then:

$$
\begin{align*}
(a \mid b) \land (a \mid c) &\to a \mid (b+c) \\
a \mid b &\to \forall c(a \mid bc), c\in \mathbb{Z} \\
(a \mid b) \land (b \mid c) &\to a \mid c
\end{align*}
$$
<!--ID: 1712722536480-->

## Division algorithm

Let $a \in \mathbb{Z}$ and $d \in \mathbb{Z}^+$. Then there are unique $q,r \in \mathbb{Z}$ with $0 \leq r < d$ such that:

$$
a = dq+r
$$

$d$ is called the **divisor**, $a$ is called the **dividend**, $q$ is called the **quotient**, and $r$ is called the **remainder**. The below notation is used to express the quotient and remainder:

$$
\begin{align*}
q &= a \text{ \bf{div} } d \\
r &= a \text{ \bf{mod} } d \\
\end{align*}
$$

Both $a \text{ \bf{div} } d$ and $a \text{ \bf{mod} } d$ for a fixed $d$ are functions on the set of integers.

$$
\begin{align*}
a \text{ \bf{mod} } d &= a - d \lfloor\frac{a}{d}\rfloor \\
a \text{ \bf{div} } d &= \lfloor\frac{a}{d}\rfloor
\end{align*}
$$
<!--ID: 1712722536484-->

### Example: $-11$ divided by $3$

We have:

$$
-11 = 3(-4) + 1
$$

Hence:

$$
\begin{align*}
-4 &= -11 \text{ \bf{div} } 3 \\
1 &= -11 \text{ \bf{mod} } 3 \\
\end{align*}
$$

>[!warning] Note that the remainder **cannot** be negative.
>Consequently, the remainder is **not** $-2$, even though:
>
>$$
>-11 = 3(-3)-2
>$$
>
> Because $r=-2$ does not satisfy $0 \leq r < 3$. This differs from the [[Operator_types,_precedence,_and_associativity#Arithmetic operators|modulo operator]] present in many programming languages, which would in this case return `-2`.

<!--ID: 1712722536487-->

## Modular arithmetic

Let $a,b \in \mathbb{Z}$ and $m \in \mathbb{Z}^+$. $a$ is **congruent** to $b$ modulo $m$ if $m$ divides $a - b$. We use the notation:

$$
a \equiv b (\text{mod } m)
$$

To indicate that $a$ is congruent to $b$ modulo $m$. This is known as a **congruence** with $m$ as its **modulus**. Note that:

$$
\begin{align*}
& a \equiv b (\text{mod } m) \\
\leftrightarrow \text{ } & a \text{ \bf{mod} } m = b \text{ \bf{mod} } m \\
\leftrightarrow \text{ } & m \mid (a - b) \\
\leftrightarrow \text{ } & \exists k \in \mathbb{Z}(a = b + km)
\end{align*}
$$
<!--ID: 1712722536490-->

### Congruence classes

The set of all integers congruent to $a \text{ \bf{mod} } m$ where $a,m \in \mathbb{Z}$ is known as its **congruence class**. There are $m$ [[Set_operations#Intersection|pairwise disjoint]] equivalence classes modulo $m$ and the union of these classes is the set of all integers. The congruence class that any $a$ belongs to can be seen as "cyclic" over the set of integers. For instance, for $m=3$:

$$
\begin{align*}
\mathbb{Z} &= \{\dots, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, \dots\} \\\\
\text{Let } M_0 &= \{a \in \mathbb{Z} | a \text{ mod } 3 = 0\} \equiv \{\dots,0,3,6,9,\dots\} \\
M_1 &= \{a \in \mathbb{Z} | a \text{ mod } 3 = 1\} \equiv \{\dots,1,4,7,10,\dots\} \\
M_2 &= \{a \in \mathbb{Z} | a \text{ mod } 3 = 2\} \equiv \{\dots,2,5,8,11,\dots\} \\\\
M_0 \cup M_1 \cup M_2 &= \mathbb{Z}
\end{align*}
$$

>[!info] Modulo is typically used in programming to limit [[Arrays|array]] access to within the bounds (size) of the array.

<!--ID: 1712722536493-->

### Addition and congruence

Addition preserves congruence, i.e.:

$$
a + c \equiv b + d(\text{mod } m)
$$
<!--ID: 1712722536496-->

### Multiplication and congruence

Multiplication preserves congruence, i.e.:

$$
ac \equiv bd (\text{mod } m)
$$
<!--ID: 1712722536500-->
