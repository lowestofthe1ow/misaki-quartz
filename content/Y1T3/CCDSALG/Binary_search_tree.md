---
target-deck: CCDSALG::Binary search tree
tags: CCDSALG
title: Binary search tree
---

## Binary search tree

A **binary search tree** is a [[Trees#Binary tree|binary tree]] that satisfies the **binary search tree property**:

- Let $x$ be a node in a binary search tree. If $y$ is a node in the **left** subtree of $x$, then $y.key \leq x.key$. If $y$ is a node in the **right** subtree of $x$, then $y.key \geq x.key$.
<!--ID: 1723125359066-->

### `Tree-Minimum(x)` and `Tree-Maximum(x)`

The functions `Tree-Minimum(x)` and `Tree-Maximum(x)` return pointers to the minimum (or maximum) element in the subtree rooted at the node $x$. For instance, given the tree:

![[tree_minmax.png]]

`Tree-Minimum(A)` returns the node with key `1`.

<!--ID: 1723125359068-->

### `Tree-Successor(x)`

The function `Tree-Successor(x)` returns the smallest key greater than `x.key`. This is equivalent to getting [[#`Tree-Minimum(x)` and `Tree-Maximum(x)`|the minimum node]] of the right subtree of `x`.

<!--ID: 1723125359071-->

### `Tree-Predecessor(x)`

The function `Tree-Predecessor(x)` returns the largest key less than `x.key`. This is equivalent to getting [[#`Tree-Minimum(x)` and `Tree-Maximum(x)`|the maximum node]] of the left subtree of `x`.

<!--ID: 1723125359073-->

### `Tree-Insert(T, z)`

The function `Tree-Insert(T, z)` inserts a node with key `z` into the BST `T` in a way that **preserves** the [[Binary_search_tree#Binary search tree|binary search tree property]]

```
Tree-Insert (T, z)
    x = T.root
    y = NIL
    while x != NIL
        y = x
        if z.key < x.key
            x = x.left
        else x = x.right
    z.p = y
    if y == NIL
        T.root = z
    else if z.key < y.key
        y.left = z
    else y.right = z
```

![[bst_insertion.png]]

<!--ID: 1723125359076-->

### `Tree-Delete(T, z)`

The function `Tree-Delete(T, z)` deletes a node `z` from the BST `T`. The function differs when handling nodes with zero, one, or two children.

<!--ID: 1723125359078-->

#### Deleting a node with no children

A node `z` with no children is simply removed.

<!--ID: 1723125359081-->

#### Deleting a node with one child

A node `z` with one child is removed. Its remaining child `y` takes its place as the child of the parent of `z` (The connection from `z` to its parent is "transferred" to `y`).

<!--ID: 1723125359085-->

#### Deleting a node with two children

Let `y` be the [[Binary_search_tree#`Tree-Successor(x)`|successor]] node of `z`. `y` is deleted, and `z.key` is replaced with `y.key`.

>[!error] Note that the address of `z` remains the same and is itself not deleted. It only receives the value of the key at its successor node.
>Say, for example, `z` has two children and `Tree-Successor(z) = y.key`, and `z` is at address `ABCD0000` while `y` is at address `ABCD0001`. "Deleting" `z` has the actual effect of deleting `y` and passing its key to `z`. That node stays at the address `ABCD0000`.

<!--ID: 1723125359088-->
