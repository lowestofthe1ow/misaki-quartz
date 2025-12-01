---
target-deck: CCDSALG::Graphs
tags: [CCDSALG]
title: Graphs
---

## Graph

A **graph** is a pair $G = (V, E)$ where $V$ is a set of vertices and $E$ is a set of edges that connect pairs of distinct vertices. For instance, the graph:

![[CCDSALG/src/graph.png]]

—is given by:

$$
\begin{align*}
V &= \{1, 2, 3, 4, 5, 6\} \\
E &= \{(1,2), (1,3), (3,4), (4,6), (5,6)\}
\end{align*}
$$
<!--ID: 1723125359010-->

### Undirected graphs

Given any two nodes $x$, $y$ in a graph, an **undirected graph** is one where an edge or connection between $x$ and $y$ is treated the same as one between $y$ and $x$. Note that self-loops are **not** allowed.
<!--ID: 1723125359012-->

#### Incident on

The edge $(u,v)$ is **incident on** vertices $u$ and $v$.
<!--ID: 1723125359014-->

#### Adjacent

If $<u,v>$ is an edge, then the vertex $v$ is **adjacent** to $u$ **but not conversely**.
<!--ID: 1723125359017-->

#### Degree of a vertex

The **degree** of a vertex is the number of edges incident on it.
<!--ID: 1723125359020-->

#### Complete graph

A **complete graph** is a graph in which every pair of vertices is adjacent. A complete graph has the following number of edges:

$$
\max|E| = \frac{|V|(|V| - 1)}{2}
$$
<!--ID: 1723125359023-->

### Directed graphs

Given any two nodes $x$, $y$ in a graph, a **directed graph** (or **digraph**) is one where an edge or connection between $x$ and $y$ is **not** treated the same as one between $y$ and $x$. For instance, the following graph:

![[directed_graph.png]]

—is represented as follows. Note the $<>$ brackets.

$$
\begin{align*}
V &= \{1, 2, 3, 4, 5, 6\} \\
E &= \{<1,2>, <1,3>, <3,1>, <3,2>, <2,6>, <4,5>, <5,1>, <6,6>\}
\end{align*}
$$

>[!info] Self-loops are **allowed**.
<!--ID: 1723125359027-->

#### Incident to/from

The edge $<u,v>$ is **incident from** (leaves) vertex $u$ and **incident to** (enters) vertex $v$.
<!--ID: 1723125359031-->

#### Adjacent

If $<u,v>$ is an edge, then the vertex $v$ is **adjacent** to $u$ **but not conversely**.
<!--ID: 1728399222445-->

#### Outand in-degree of a vertex

The **out-degree** of a vertex is the number of edges **leaving** it. The **in-degree** of a vertex is the number of edges **entering** it. The **degree** of a vertex is the sum of its out-degree and its in-degree.
<!--ID: 1723125359035-->

#### Complete graph

A **complete graph** is a graph in which every pair of vertices is adjacent. A complete digraph has the following number of edges, assuming no self-loops:

$$
\max|E| = |V|(|V| - 1)
$$
<!--ID: 1728399222451-->

### Weighted graphs

A weighted graph is a graph whose edges have associated **weights**:

$$
w : E \to \mathbb{R}
$$
<!--ID: 1723125359038-->

### Subgraph

A graph $G_1$ is a **subgraph** of a graph $G_2$ if the edges of $G_1$ are a [[Set_theory#Subset|subset]] of the edges of $G_2$ and the vertices of $G_1$ are a subset of the edges of $G_2$.
<!--ID: 1723125359040-->

### Path

A **path** is a sequence of vertices connected by edges. The **length** of the path is the number of edges involved. A simple path is one whose edges are distinct.
<!--ID: 1723125359043-->

### Cycle

A **cycle** is a path that starts and ends in the same vertex.
<!--ID: 1723125359045-->

### Connected graph

A graph is **connected** if every pair of vertices has a path between them. Note that this is different from [[Graphs#Complete graph|complete graphs]].
<!--ID: 1723125359048-->

### Sparse and dense graphs

A graph is **sparse** if the number of edges $|E|$ is much less than the square of the number of vertices, $|V|^2$. It is **dense** if these numbers are closer to each other.
<!--ID: 1723125359050-->

### Graph representation

Graphs may be represented as an **adjacency list** or **adjacency matrix**.
<!--ID: 1723125359053-->
