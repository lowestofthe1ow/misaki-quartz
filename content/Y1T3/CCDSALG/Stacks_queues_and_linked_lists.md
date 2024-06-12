---
target-deck: CCDSALG::Stacks, queues, and linked lists
tags: CCDSALG
title: Stacks, queues, and linked lists
---

## Arrays

*See also*: [[Arrays]]

Arrays are **contiguous** sequences of bytes in memory. The **index** of the first element typically depends on the programming language and may be `0`, `1`, or user-defined. Most programming languages require that each element be of the same **type** (i.e. homogenous).

RAM access ensures that a computer can access **all** memory locations in the same amount of time, regardless of the index.

<!--ID: 1718172243941-->

## Linked lists

In a **linked list**, objects (referred to as **nodes**) are arranged in a **linear order**. Each node contains **keys** (data) and a **pointer** to the next node in the list. **Singly**-linked lists' nodes only have one pointer to the next node, while **doubly**-linked lists' nodes have two pointers—one to the next node and another to the previous node.

Linked lists have the advantages of being flexible and dynamic, but may not be efficient in all operations (add, insert, delete, search, etc.).

![[linked_lists.png]]

<!--ID: 1718172243945-->

## Stacks

**Stacks** are a dynamic, ordered list that implements a **last-in, first-out** (LIFO) policy. Elements are inserted and removed to and from the **top** of the stack (the most recently inserted element)
<!--ID: 1718172243948-->

### Push

A **push** operation on a stack adds an element to its top position.

```
 [4] <- Push an element to this position.
[3]
[2]
[1]
```

<!--ID: 1718172243950-->

### Pop

A **pop** operation on a stack **removes** its topmost element. Pop functions typically return the element removed from the stack.

```
    [3] <- Pop this element and return it.
[2]
[1]
```

<!--ID: 1718172243953-->

### Empty and full stacks

An **empty stack** is one with no elements. Attempting to pop from an empty stack results in an **underflow**. Likewise, a stack whose capacity has been filled is referred to as **full**, and attempting to push to such a stack results in an **overflow**.

<!--ID: 1718172243955-->

## Queues

**Queues** are a data structure similar to stacks, but follow a **first-in, first-out** (FIFO) policy. The element deleted by a remove operation is always the one that has been in the list for the longest time.
<!--ID: 1718172243958-->

### Enqueue

Enqueue adds an element to the **back** of a queue.

```
[1][2][3] [4]
          ^ Enqueue a new element here.
```

<!--ID: 1718172243961-->

### Dequeue

Dequeue **removes** an element from the **front** of a queue.

```
   [2][3]
[1] < Dequeue this element.
```

<!--ID: 1718172243964-->
