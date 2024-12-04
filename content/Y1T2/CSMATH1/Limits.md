---
target-deck: CSMATH1::Limits
tags: [CSMATH1]
title: Limits
---

## Informal definition of a limit

Let $f(x)$ be defined on an open interval containing $a$, except possibly at $a$ itself. If $f(x)$ gets arbitrarily close to $L$ for all $x$ sufficiently close to $a$, we say that $f(x)$ approaches the limit $L$ as $x$ approaches $a$, and we write:

$$
\lim_{x \to a} f(x) = L
$$

>[!warning] A function may fail to have a limit at a point in its domain.

<!--ID: 1706696346779-->

## Formal ($\epsilon$-$\delta$) definition of a limit

Let $f(x)$ be a function defined at every number in some open interval containing $a$, except possibly at the number $a$ itself.

$$
\lim_{x \to a} f(x) = L
$$

—if and only if...

$$
\text{Given any } \epsilon > 0 \text{, however small, there exists a } \delta > 0 \text{ such that:}
$$

$$
0 < |x - a| < \delta \to |f(x) - L| < \epsilon
$$
<!--ID: 1706696346782-->

### Show that $\lim_{x \to 3} f(x) = 1$ given $f(x)=2x-5$

We must show that:

$$
0 < |x - 3| < \delta \to |(2x-5) - 1| < \epsilon
$$

Or, equivalently:

$$
\begin{align*}
0 < |x - 3| < \delta \to 2|x-3| < \epsilon \\
\equiv 0 < |x - 3| < \delta \to |x-3| < \frac{\epsilon}{2}
\end{align*}
$$

Given $\delta = \frac{\epsilon}{2} \equiv 2 \delta = \epsilon$:

$$
\begin{align*}
0 < |x - 3| < \delta \to 2|x-3| < 2 \delta \\
\equiv 0 < |x - 3| < \delta \to 2|x-3| < 2 \frac{\epsilon}{2} \\
\equiv 0 < |x - 3| < \delta \to 2|x-3| < \epsilon \\
\therefore \lim_{x \to 3} f(x) = 1
\end{align*}
$$
<!--ID: 1706696346787-->

### Show that $\lim_{x \to 2} f(x) = 4$ given $f(x)=x^2$

We must show that:

$$
0 < |x - 2| < \delta \to |x^2 - 4| < \epsilon
$$

Or, equivalently:

$$
0 < |x - 2| < \delta \to |x+2||x-2| < \epsilon
$$
<!--ID: 1706696346790-->

## Limit theorems

<!--ID: 1716721003581-->

### Limit of a linear function (1)

If $m$ and $b$ are constants, then

$$
\lim_{x\to a} mx+b=ma+b
$$
<!--ID: 1706696346793-->

### Limit of a constant (2)

If $c$ is a constant

$$
\lim_{x\to a} c=c
$$
<!--ID: 1706696346796-->

### Limit of the identity function (3)

$$
\lim_{x\to a} x=a
$$
<!--ID: 1706696346799-->

### Limit of the sum and difference of $n$ functions (4, 5)

$$
\begin{align*}
\lim_{x\to a} f_1(x)=L_1,\>\lim_{x\to a} f_2(x)=L_2,\>...,\>\lim_{x\to a} f_n(x)=L_n\\
\to \lim_{x\to a} [f_1(x)\pm f_2(x)\pm...\pm f_n(x)]=L_1\pm L_2\pm...\pm L_3
\end{align*}
$$
<!--ID: 1706696346804-->

### Limit of the product of $n$ functions (6, 7)

$$
\begin{align*}
\lim_{x\to a} f_1(x)=L_1,\>\lim_{x\to a} f_2(x)=L_2,\>...,\>\lim_{x\to a} f_n(x)=L_n\\
\to \lim_{x\to a} [f_1(x)f_2(x)...f_n(x)]=L_1L_2...L_3
\end{align*}
$$
<!--ID: 1706696346808-->

### Limit of the $n$th power of a function (8)

$$
\begin{align*}
[\lim_{x\to a} f(x)=L] \land (n\in \mathbb{Z}^+) \\
\to \lim_{x\to a} [f(x)]^n=L^n
\end{align*}
$$
<!--ID: 1706696346811-->

### Limit of the quotient of two functions (9)

$$
\begin{align*}
[\lim_{x\to a} f(x)=L] \land [\lim_{x\to a} f(x)=L] \land (M \neq 0) \\
\to \lim_{x\to a} \frac{f(x)}{g(x)}=\frac{L}{M}
\end{align*}
$$
<!--ID: 1706696346816-->

### Limit of the $n$th root of a function (8)

$$
\begin{align*}
[\lim_{x\to a} f(x)=L] \land (n\in \mathbb{Z}^+) \land (n\in 2\mathbb{Z}^+ \to L > 0)\\
\to \lim_{x\to a} \sqrt[n]{f(x)}=\sqrt[n]{L}
\end{align*}
$$
<!--ID: 1706696346820-->

## One-sided limits

<!--ID: 1716721003584-->

### Right-hand limit

$$
\lim_{x \to a^+} f(x) = L
$$

—if and only if...

$$
\text{Given any } \epsilon > 0 \text{, however small, there exists a } \delta > 0 \text{ such that:}
$$

$$
0 < x - a < \delta \to |f(x) - L| < \epsilon
$$
<!--ID: 1706696346824-->

### Left-hand limit

$$
\lim_{x \to a^-} f(x) = L
$$

—if and only if...

$$
\text{Given any } \epsilon > 0 \text{, however small, there exists a } \delta > 0 \text{ such that:}
$$

$$
0 < a - x < \delta \to |f(x) - L| < \epsilon
$$
<!--ID: 1706696346827-->

### Two-sided limit

$$
\lim_{x \to a} f(x) \text{ exists and is equal to } L \leftrightarrow \lim_{x \to a^+} f(x) \text{ and } \lim_{x \to a^-} f(x) \text{ both exist and are equal to } L.
$$
<!--ID: 1706696346830-->
