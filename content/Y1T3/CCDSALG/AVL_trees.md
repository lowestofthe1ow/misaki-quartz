---
target-deck: CCDSALG::AVL_trees
tags: [CCDSALG]
title: AVL trees
---

## AVL tree

An **AVL tree** is a [[Binary_search_tree|binary search tree]] that is **height-balanced**. In other words, for each node `x`, the [[Trees#Height of a tree|heights]] of the left and right subtrees of `x` differ by **at most 1**.

<!--ID: 1723125359056-->

### AVL insert

To insert a node into an AVL,

1. [[Binary_search_tree#`Tree-Insert(T, z)`|Insert]] a node as you would in a BST.
2. Travel upwards to the root node and check if each node is height-balanced (check if the heights of its left and right subtrees differ by at most 1).
3. **If it is not balanced**:
	1. Label the node with an imbalance $1$.
	2. Travel downwards **toward** the inserted node. Label the first two nodes encountered $2$ and $3$.
	3. Take the [[Tree_traversals_and_walks#In-order tree walk|in-order traversal]] of these three nodes.
	4. The middle value becomes the new root of the subtree (parent to the other two nodes).
	5. Rearrange the subtrees.
<!--ID: 1723125359059-->

### AVL delete

To delete a node from an AVL,

1. [[Binary_search_tree#`Tree-Delete(T, z)`|Delete]] a node as you would in BST.
2. Check if the tree is balanced and perform rotation if it is not. This is the same as in [[AVL_trees#AVL insert|insertion]], but we travel downwards toward the leaf with the **longest simple path from the current node** instead of a newly-inserted node.
<!--ID: 1723125359061-->
