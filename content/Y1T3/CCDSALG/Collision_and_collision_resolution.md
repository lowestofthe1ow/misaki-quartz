---
target-deck: CCDSALG::Collision and collision resolution
tags: CCDSALG
title: Collision and collision resolution
---

## Collision and collision resolution

A **collision** occurs when two keys [[Hashing#Hash function|hash]] to the same slot. Collisions must be **resolved** through different collision resolution techniques:

- Separate chaining
- Linear probing
- Quadratic probing
- Double hashing

Good collision resolution methods must:

- Minimize clustering
- Always find empty slots, if it exists
- Generate a different probe sequence when a collision happens (avoid secondary clustering)
- Fast ($O(1)$ time complexity)
<!--ID: 1723125358985-->

### Chaining (close addressing)

Each slot points to a linked list. All keys that hash to the same slot are added to the linked list at that slot. The [[Hashing#Load factor|load factor]] of this hash table is calculated with $m$ set to the number of linked lists, i.e., the load factor is the average length of the linked lists.

![[chaining.png]]

>[!info] Chaining is a **close addressing system** as the address of any given key is **fixed**.

<!--ID: 1723125358987-->

### Open addressing

**Open addressing systems** do not use storage outside of the hash table itself. All elements occupy slots in the hash table; it is thus possible to **fill up** the hash table such that no further insertions can be made (thus the [[Hashing#Load factor|load factor]] can never exceed 1). Addresses given to a key are thus **not fixed**.
<!--ID: 1723125358989-->

#### Probing

Open addressing systems attempt to insert new elements into a first-choice location; if this fails, it attempts to place it into a second-choice location, and so on until an empty location is found. This is known as **probing**.

<!--ID: 1723125358992-->

##### Probe sequence

The **probe sequence** for a hash function is given by:

$$
h(k,0), \ h(k,1), \ h(k,2), \ \dots, \ h(k,m-1)
$$

<!--ID: 1723125358994-->

##### Linear probing

The second-choice location is simply **offset** from the first-choice location, and so on:

$$
h(k,j) = (h(k) + j) \mod m, \ j = 0, 1, 2, \dots, m-1
$$

>[!info] The $\mod m$ operation ensures the offset "wraps around" the hash table.

>[!warning] Linear probing is prone to **primary clustering**, as inserted elements "cluster" near their home address after a collision

<!--ID: 1723125358998-->

##### Quadratic probing

Similar to linear probing, but the offset is squared.

$$
h(k,j) = (h(k) + j^2) \mod m, \ j = 0, 1, 2, \dots, m-1
$$

>[!warning] Quadratic probing lessens primary clustering, but still suffers from **secondary clustering** as inserted elements may still "cluster", albeit further away from their home address.

<!--ID: 1723125359001-->

##### Double hashing

Similar to linear probing, but calculated from two **auxiliary hash functions** $h_1$ and $h_2$ where the offset is multiplied to $h_2$.

$$
h(k, j) = (h_1(k) + jh_2(k)) \mod m
$$

>[!info] $h_2(k)$ must be relatively prime with the hash table size $m$ for best results. This may be achieved through:
>1. Having $m$ be a power of 2 and designing $h_2$ to always produce an odd number.
>2. Having $m$ be prime and designing $h_2$ to produce $0 < x < m$.

<!--ID: 1723125359004-->

### Rehashing

**Rehashing** is resizing the hash table and relocating its elements. The new hash table is twice the size of the current table, with the hash function updating with the new value of $m$. Each key is then reinserted.

>[!info] Rehashing is done when the [[Hashing#Load factor|load factor]] of the hash table exceeds $0.5$ for open addressing and $1$ for closed addressing **when performing an insert operation**.

<!--ID: 1723125359006-->
