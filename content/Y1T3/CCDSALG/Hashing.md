---
target-deck: CCDSALG::Hashing
tags: CCDSALG
title: Hashing
---

## Hash table

A **hash table** is an effective data structure for implementing **dictionaries**. Searching for an element in a hash table is $\Theta(n)$ in the worst case and $O(1)$ on average.

<!--ID: 1723125358957-->

### Load factor

The **load factor** $\alpha$ of a hash table $T$ with $m$ slots storing $n$ elements is given by:

$$
\alpha = \frac{n}{m}
$$

<!--ID: 1723125358959-->

### Direct addressing

**Direct addressing** is possible if we can allocate an array that contains a position for every possible key; it is thus useful when the universe of possible keys is reasonably small.
<!--ID: 1723125358962-->

#### Direct-address table

A **direct-address table** is an array denoted by `T[0...m-1]`.

<!--ID: 1723125358965-->

#### Slot

A **slot** in a direct-address table is a position that corresponds to a key. The element with key $k$ is referred to by "slot $k$".

<!--ID: 1723125358968-->

### Hash function

An element $k$ **goes to** slot $h(k)$, where $h$ is known as a **hash function**. Where $\mathcal{U}$ is the universe of all possible keys:

$$
h : \mathcal{U} \to \{0, 1, \dots, m-1\}, \ m < |\mathcal{U}|
$$

In other words, the function $h$ maps a key from $\mathcal{U}$ to a slot in the hash table. This slot is known as the **home address** of $k$.

>[!info] A key $k$ **hashes to** the slot $h(k)$. $h(k)$ is the **hash value** of the key $k$.

>[!tip] For **direct addressing**, we usually use $h(k) = k$

<!--ID: 1723125358971-->

#### Static hashing

**Static hashing** uses a single, fixed hash function. There are two standard approaches: the **division** and **multiplication** methods.
<!--ID: 1723125358973-->

##### Division method

The **division method**, also known as the [[Division_and_modular_arithmetic#Modular arithmetic|modulo]] method, maps a key $k$ into one of the $m$ slots in the hash table by taking the remainder of $k$ divided by $m$, i.e.:

$$
h(k) = k \mod m
$$

This method works well when $m$ is a prime **not too close to an exact power of 2**. If $m$ is not prime, set $n$ to the closest prime $\leq m$ to minimize collision.

<!--ID: 1723125358975-->

##### Multiplication method

Given a key $k$ and some constant $A$ in the range $0 < A < 1$:

$$
h(k) = \lfloor m(kA \mod 1) \rfloor
$$

The operation $\mod 1$ takes the **fractional part** of $kA$.

>[!info] The value of $m$ is not critical.

<!--ID: 1723125358978-->
