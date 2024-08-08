---
target-deck: CCDSALG::Graph traversals
tags: CCDSALG
title: Graph traversals
---

## Breadth-first search

*See also*: [[Tree_traversals_and_walks#Breadth-first search]]

A **breadth-first search** algorithm systematically explores the edges of $G$ to discover every vertex reachable from a **source** $s$, searching **wide** whenever possible.

![[bfs_graph.png]]

<!--ID: 1723125358980-->

## Depth-first search

*See also*: [[Tree_traversals_and_walks#Depth-first search]]

A **depth-first search** algorithm searches **deeper** in the graph wherever possible. It explores edges out of the most recently discovered vertex $v$ that still has unexplored edges leaving it; once all $v$'s edges have been explored, the search backtracks to explore edges leaving the vertex from which $v$ was discovered.

![[dfs_graph.png]]

<!--ID: 1723125358982-->
