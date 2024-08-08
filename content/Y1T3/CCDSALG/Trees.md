---
target-deck: CCDSALG::Trees
tags: CCDSALG
title: Trees
draft: true
---

## Tree

A **free tree** or **tree** is a **connected**, **acyclic**, and **undirected** graph.

<!--ID: 1723125334945-->

### Forest

A forest is **undirected**, **acyclic**, and possibly **disconnected**.

>[!warning] A graph that contains a cycle is neither a tree nor a graph.

<!--ID: 1723125334947-->

### Rooted tree

A rooted tree is a tree that contains a **root node**.

![[trees.png]]

<!--ID: 1723125334950-->

#### Properties of a rooted tree

<!--ID: 1723125334954-->

##### Depth of $x$

The length of the simple path from the root node to a node $x$.

<!--ID: 1723125334957-->

##### Height of $x$

The number of edges on the longest simple downward path from $x$ to a leaf

<!--ID: 1723125334959-->

##### Height of a tree

The height of its root node.

<!--ID: 1723125334962-->

##### Degree of $x$

The number of children of $x$.

<!--ID: 1723125334965-->

##### Degree of a tree

The maximum degree of all nodes in the tree.

<!--ID: 1723125334968-->

##### Weight of a tree

The number of leaf nodes in a tree.

<!--ID: 1723125334971-->

##### Level of a tree

Consists of all the nodes at a given depth.

<!--ID: 1723125334973-->

##### Ordered tree

An **ordered tree** is a rooted tree in which the children of each node are ordered.

<!--ID: 1723125334976-->

#### Binary tree

A **binary tree** is a structure defined on a finite set of nodes that either contains no nodes (**empty** or **null tree**, denoted as `NIL`), or, recursively, is composed of three [[Set_operations#Intersection|disjoint]] sets of nodes: a **root** node and two binary subtrees known as the left subtree and the right subtree.

The left and right subtrees are the children of a given node. If a child is missing then that subtree is `NIL`.

>[!warning] All binary trees are ordered trees, but not all ordered trees are binary trees.

<!--ID: 1723125334978-->

##### Positional tree

A **positional tree** has children labeled with distinct positive integers

<!--ID: 1723125334982-->

##### Full binary tree

In a **full binary tree**, each node is either a **leaf** or has a **degree 2**.

<!--ID: 1723125334985-->

##### Complete $k$-ary tree

In a complete $k$-ary tree, all leaves have the same depth and all internal nodes have degree $k$. 

<!--ID: 1723125334988-->

###### Number of leaves in a complete $k$-ary tree of height $h$

$$
n = k^h
$$

<!--ID: 1723125334990-->

###### Height of a complete $k$-ary tree with $n$ leaves

$$
h = log_k n
$$

<!--ID: 1723125334993-->

###### Number of nodes in a complete $k$-ary tree with height $h$

$$
\sum_{j=0}^h k^j = \frac{k^{h+1} - 1}{k - 1}
$$

<!--ID: 1723125334995-->
