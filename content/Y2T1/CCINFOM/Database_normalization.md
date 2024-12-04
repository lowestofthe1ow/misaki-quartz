---
target-deck: CCINFOM::Database normalization
tags: [CCINFOM]
title: Database normalization
---

## Normalization

**Normalization** is a process for correcting table structures to minimize data redundancies.
<!--ID: 1732202497628-->

### Normal forms

Normalization works through a series of stages called **normal forms**, such as first, second, and third normal forms. The third stage is usually the highest needed for most purposes.

<!--ID: 1732202497630-->

#### First normal form (1NF)

A table is in **first normal form (1NF)** if:

- All key attributes are defined
- Each row-column intersection contains only **one** value, not a set of values
- All attributes are functionally dependent on the primary key
<!--ID: 1732202497634-->

#### Second normal form (2NF)

A table is in **second normal form (2NF)** if:

- It is in 1NF
- It includes no **partial dependencies**
<!--ID: 1732202497637-->

##### Partial dependency

A **partial dependency** occurs when there is an attribute that is functionally dependent on only a subset of the primary key. Consider the following:

$$
\begin{align*}
\{A, B\} &\to \{C, D\} \\
B &\to C
\end{align*}
$$

Let $\{A, B\}$ be the primary key. Then $B \to C$ is a partial dependency because it $C$ can be determined with just one attribute of the primary key.

<!--ID: 1732202497640-->

#### Third normal form (3NF)

A table is in **third normal form (3NF)** if:

- It is in 2NF
- It includes no **transitive dependencies**
<!--ID: 1732202497644-->

##### Transitive dependency

A **transitive dependency** occurs when an attribute is functionally dependent on another attribute which is itself dependent on the primary key. Consider the following:

$$
\begin{align*}
X &\to Y \\ 
Y &\to Z
\end{align*}
$$

Let $X$ be the primary key. Then the dependency $X \to Z$ is a transitive dependency because $X$ determines $Z$ through $Y$.

>[!info] The dependency $Y \to Z$ will also be referred to as the transitive dependency, because it signals that one exists.

<!--ID: 1732202497648-->

### Higher-level normal forms

<!--ID: 1732202497651-->

#### Boyce-Codd normal form (BCNF)

A table is in **Boyce-Codd normal form (BCNF)** if every determinant in the table is a candidate key.

<!--ID: 1732202497654-->

#### Fourth normal form (4NF)

A table is in **fourth normal form (4NF)** if:

- It is in 3NF
- All attributes must be dependent on the primary key but are independent of each other
- No row may contain two or more multivalued facts about an entity
<!--ID: 1732202497657-->
