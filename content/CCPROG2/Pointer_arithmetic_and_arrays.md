---
target-deck: CCPROG2::Pointer arithmetic and arrays
tags: [CCPROG2]
title: Pointer arithmetic and arrays
---

## Array indexing

To access a particular element of an array, we write the array name followed by an integer value in square brackets. Array elements are always numbered starting from **0**, so the elements of an array of length $n$ are indexed from 0 to $n - 1$:

![[arrays.png]]

>[!info] Expressions of the form `a[i]` are [[Tokens_and_token_classification#Identifiers|lvalues]] and can be used the same way as ordinary variables.
<!--ID: 1708357755042-->

### Pointer arithmetic and dereference notation

Adding an integer `j` to a pointer `p` yields a pointer to the element `j` places after the one that `p` points to. More precisely, if `p` points to the array element `a[i]`, then `p + j` points to `a[i + j]`. Likewise, `p - j` points to `a[i - j]`.

On the other hand, when one pointer is subtracted from another, the result is the **distance** (measured in array elements) between the pointers; i.e. if `p` points to `a[i]` and `q` points to `a[j]`, then `p - q` points to `i - j`

>[!warning] Performing arithmetic on a pointer that doesn’t point to an array element causes undefined behavior. Furthermore, the effect of subtracting one pointer from another is **undefined** unless both point to elements of the **same** array. You cannot add two pointers.
<!--ID: 1708357755046-->

### Comparing pointers

We can compare pointers using the [[Operator_types,_precedence,_and_associativity#Relational operators|relational operators]] (`<`, `<=`, `>`, `>=`) and the [[Operator_types,_precedence,_and_associativity#Equality operators|equality operators]] (`==` and `!=`). Using the relational operators to compare two pointers is meaningful only when both point to elements of the same array. The outcome of the comparison depends on the relative positions of the two elements in the array.
<!--ID: 1708357755049-->

### Array names as pointers

The [[Tokens_and_token_classification#Identifiers|name]] of an array can be used as a **pointer to the first element** in the array. In general, `a + i` is the same as `&a[i]` (both represent a **pointer** to element `i` of `a`) and `(a+i)` is equivalent to `a[i]` (both represent element `i` **itself**).

>[!warning] Note that it is not possible to assign array names a new value.
<!--ID: 1708357755053-->

### Array arguments

When passed to a function, an array name is **always treated as a pointer** (i.e. it **decays** to a pointer, losing information about the array's size and type. This means that:

- An array used as an argument **is not protected against change**; the original variable is modified since no copy is made of the array itself
- The time required to pass an array to a function doesn’t depend on the size of the array
- An array parameter can be declared as a pointer if desired

>[!warning] Array **variables** cannot be declared as a pointer.
> `int a[10]` causes the compiler to set aside space for 10 integers, while `int *a` only allocates space for a single pointer variable. The latter is **not** an array.
<!--ID: 1708357755057-->
