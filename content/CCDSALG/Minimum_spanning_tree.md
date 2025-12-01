---
target-deck: CCDSALG::Minimum spanning tree
tags: [CCDSALG]
title: Minimum spanning tree
---

## Spanning tree

A **spanning tree** is an acyclic graph (a [[Trees|tree]]) that connects all vertices in a given graph.
<!--ID: 1723125358944-->

### Minimum spanning tree

Let $G = (V, E)$, and that for all edges $(u, v) \in E$, the function $w(u, v)$ specifies the weight of each edge. The **minimum spanning tree** is a spanning tree whose **total weight is minimized**.

There are two common algorithms for determining an MST: **Prim's algorithm** and **Kruskal's algorithm**.
<!--ID: 1723125358948-->

#### Prim's algorithm

Starting at an arbitrary root $r$, **Prim's algorithm** grows the minimum spanning tree through a greedy algorithm. We repeatedly find the minimum-weight edge that connects to a vertex not yet found in the graph until all vertices are found.

>[!info] Given two edges with the same weight, prioritize the edge that connects to a vertex with a lower value.
<!--ID: 1723125358952-->

#### Kruskal's algorithm

**Kruskal's algorithm** creates a minimum spanning tree as follows:

1. Sort the graph edges by weight.
2. Loop through the edges of the graph, in ascending sorted order by their weight. For each edge:
	1. Test whether adding the edge to the current forest would create a [[Graphs#Cycle|cycle]].
	2. If not, add the edge to a forest. At the end of the algorithm, this forest will have merged into the minimum spanning tree for the graph if the graph is connected.
<!--ID: 1723125358954-->
