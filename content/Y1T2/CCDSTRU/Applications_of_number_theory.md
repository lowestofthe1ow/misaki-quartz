---
target-deck: CCDSTRU::Number theory::Applications of number theory
tags: CCDSTRU
title: Applications of number theory
---

## Hashing functions

A **hashing function** $h$ assigns a record given a **key** $k$ to the **memory location** $h(k)$. One of the most common hashing functions is as follows, given $m$ possible available memory locations:
$$
h(k) = k \text{ \bf{mod} } m
$$
The above hashing function fulfills two criteria: first, it is **fast**; we only need to compute $k \text{ \bf{mod} } m$. Second, it is [[Functions#Surjection|surjective]], meaning all available memory locations can be accessed.
<!--ID: 1712747722114-->

### Collision

Although a hashing function is [[Functions#Surjection|surjective]], it is **not** [[Functions#Injection|injective]]. This means that it is possible for $h(k_1)=h(k_2)$ even when $k_1 \neq k_2$. This occurs when $k_1 \equiv k_2 (\text{mod } m)$, i.e., when they are [[Division_and_modular_arithmetic#Modular arithmetic|congruent]] $\text{mod } m$.
<!--ID: 1712747722119-->

### Linear probing functions

A **linear probing function**, such as:
$$
h(k,i)=h(k)+i\text{ \bf{mod} }m
$$
—helps avoid collisions when assigning memory locations to keys with the hashing function $h(k)$. It searches for the **first available location** after $h(k)$.
<!--ID: 1712747722122-->

## Pseudorandom numbers

**Pseudorandom numbers** are numbers generated by systematic methods that mimic properties of truly randomly chosen numbers. A common method of generating these numbers is the **linear congruential method**, which [[Sums_and_sequences#Recurrence relations|recursively]] produces a [[Sums_and_sequences#Sequences|sequence]] of pseudorandom numbers given a **modulus** $m$, **multiplier** $a$, **increment** $c$, and **seed** $x_0$:
$$
\begin{align*}
x_{n} &= (ax_{n-1} + c) \text{ \bf{mod} } m \\
\leftrightarrow x_{n+1} &= (ax_{n} + c) \text{ \bf{mod} } m \\
\end{align*}
$$
>[!info] The seed $x_0$ is the **base case**.
<!--ID: 1712747722126-->

### Example: Pseudorandom sequence given $m = 9$, $a = 7$, $c = 4$, $x_0 = 3$

$$
\begin{align*}
x_{n} &= (ax_{n-1} + c) \text{ \bf{mod} } m \\\\
x_1 &= 7(3) + 4 \text{ \bf{mod} } 9 &= 7 \\
x_2 &= 7(7) + 4 \text{ \bf{mod} } 9 &= 8 \\
x_3 &= 7(8) + 4 \text{ \bf{mod} } 9 &= 6 \\
x_4 &= 7(6) + 4 \text{ \bf{mod} } 9 &= 1 \\
x_5 &= 7(1) + 4 \text{ \bf{mod} } 9 &= 2 \\
x_6 &= 7(2) + 4 \text{ \bf{mod} } 9 &= 0 \\
x_7 &= 7(0) + 4 \text{ \bf{mod} } 9 &= 4 \\
x_8 &= 7(4) + 4 \text{ \bf{mod} } 9 &= 5 \\
x_9 &= 7(5) + 4 \text{ \bf{mod} } 9 &= 3 \\
\end{align*}
$$
The above hashing function thus generates the sequence $\{3,7,8,6,1,2,0,4,5,3,\dots\}$, which contains nine distinct numbers before repeating.
<!--ID: 1712747722130-->

## Caesar cipher

The **Caesar cipher** is an example of **encryption**, where each letter in a message is shifted forward **three letters forward** in the alphabet. Mathematically:
$$
f(p) = (p+3)\text{ \bf{mod} }26
$$
The function $f$ replaces the letter represented by $p$ with the letter represented by $(p+3)\text{ \bf{mod} }26$. For instance:
```
EVEN IF YOU PERSONALLY ARE SO DISSATISFIED WITH LIFE THAT YOU WANT THE WORLD TO END, SURELY THE CRUEL REALITY IS THAT IT WILL CONTINUE ON, UNCHANGING
```
—is encoded as:
```
HYHQ LI BRX SHUVRQDOOB DUH VR GLVVDWLVILHG ZLWK OLIH WKDW BRX ZDQW WKH ZRUOG WR HQG, VXUHOB WKH FUXHO UHDOLWB LV WKDW LW ZLOO FRQWLQXH RQ, XQFKDQJLQJ
```
<!--ID: 1712747722133-->

### Decoding the Caesar cipher

To decode the Caesar cipher, the **inverse function** $f^{-1}$ is used:
$$
f^{-1}(p) = (p-3)\text{ \bf{mod} }26
$$
The above function shifts each letter in a message **three letters backward**. For instance:
```
DOO WKH EHWWHU IRU VRPHRQH SHUIHFWOB FRQWHQW, OLNH PH
```
—is decoded as:
```
ALL THE BETTER FOR SOMEONE PERFECTLY CONTENT, LIKE ME
```
<!--ID: 1712747722137-->

### Shift ciphers

The Caesar cipher can be generalized into:
$$
f(p) = (p+k)\text{ \bf{mod} }26
$$
The integer $k$ is referred to as a **key**. The function shifts each letter in the message **$k$ letters forward**.
<!--ID: 1712747722140-->