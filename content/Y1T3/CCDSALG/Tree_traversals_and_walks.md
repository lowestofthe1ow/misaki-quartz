---
target-deck: CCDSALG::Tree traversals and walks
tags: CCDSALG
title: Tree traversals and walks
---

## Tree traversals

<!--ID: 1723125334919-->

### Breadth-first search

![[bfs.png]]

**Breadth-first search**, starting at the root, visits all nodes at a given [[Trees#Level of a tree|level]] before proceeding to the next level.
<!--ID: 1723125334926-->

### Depth-first search

![[dfs.png]]

**Depth-first search**, starting at the root, attempts to visit as "deep" in the tree as possible before proceeding to the next child.
<!--ID: 1723125334929-->

## Tree walks

**Tree walk** algorithms are recursively defined by visiting the root node of the tree, the root node of the left subtree, and the root node of the right subtree in a specific order.
- **In**-order traversals visit the left subtree, then the root, and then the right subtree.
- **Pre**-order traversals visit the root, then the left subtree, and then the right subtree.
- **Post**-order traversals visit the left subtree, then the right subtree, and then the root.
<!--ID: 1723125334933-->

### In-order tree walk

```
Inorder-Tree-Walk (x) :
    if x != nil :
        Inorder-Tree-Walk (x.left)
        print x.key
        Inorder-Tree-Walk (x.right)
```

<!--ID: 1723125334936-->

### Pre-order tree walk

```
Preorder-Tree-Walk (x) :
    if x != nil :
        print x.key
        Preorder-Tree-Walk (x.left)
        Preorder-Tree-Walk (x.right)
```

<!--ID: 1723125334939-->

### Post-order tree walk

```
Postorder-Tree-Walk (x) :
    if x != nil :
        Postorder-Tree-Walk (x.left)
        Postorder-Tree-Walk (x.right)
        print x.key
```

<!--ID: 1723125334942-->
