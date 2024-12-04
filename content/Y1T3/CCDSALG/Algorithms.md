---
target-deck: CCDSALG::Algorithms
tags: [CCDSALG]
title: Algorithms
---

## Algorithm

An **algorithm** is any well-defined computational procedure that takes value/s as **input** and produces some value/s as **output** in a **finite** amount of time. It is thus a sequence of computational steps that **transform** the input into the output.

<!--ID: 1715778343597-->

### Computational problem

The statement of the problem specifies in **general** terms the desired input/output relationship for problem instances. An **instance** of the problem consists of the input needed to compute a solution to the problem.

<!--ID: 1715778343602-->

## Analyzing algorithms

**Analyzing** an algorithm involves studying its **behavior** and predicting its **performance**. This is useful to assess an algorithm without implementing it and to compare different algorithms to determine the best one for the purpose. Specifically, it answers the following questions:
- What happens as the input size gets larger?
- How much resources (**time** and **memory**) are used?

>[!warning] It is not possible to predict the exact behavior of an algorithm. There are too many factors. Analysis is just an approximation; it is **not perfect**.

<!--ID: 1715778343605-->

### A posteriori analysis

**A posteriori analysis** is an empirical analysis of an algorithm where the program is implemented using a programming language and executed on an actual machine.
<!--ID: 1715778343609-->

### A priori analysis

**A priori analysis** is a theoretical analysis of an algorithm. The program is analyzed with the following assumptions:
- Algorithms are implemented as computer programs running on a generic **one-processor**, **random-access machine** model
- Instructions are executed **one at a time** (sequentially)
- Instructions take a **constant** amount of time
- The RAM model contains instructions commonly found in real computers
<!--ID: 1717416446709-->

## Order of growth

The **order** or **rate** of growth of an algorithm is an approximation of the time required by the algorithm **as the input size increases**. The order of growth usually only considers the leading term of the running time, e.g. **$an^2$**$+bn+c$.

<!--ID: 1717416446720-->

### Input size

Input size refers to the **number of items** in the input, usually denoted as $n$.

<!--ID: 1717416446725-->

### Running time

Running time refers to the **number of instructions** or data accesses executed. Denoted usually as $T(n)$, it is the sum of the running times of each statement executed.

<!--ID: 1717416446729-->
