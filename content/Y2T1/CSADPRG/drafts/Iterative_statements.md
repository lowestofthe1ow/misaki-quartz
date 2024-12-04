---
target-deck: CSADPRG::Iterative statements
tags: [CSADPRG]
title: Iterative statements
draft: true
---

## Iterative statements

**Iterative statements** cause statements to be executed zero ([[Y1T1/CCPROG1/Iterative_statements#The `while` statement|while loops]]), one, or more times ([[Y1T1/CCPROG1/Iterative_statements#The `do` statement|do-while loops]]) The primary categories are defined by how designers answered two basic design questions:

- How is the iteration **controlled**?
- **Where** should the control mechanism appear in the loop statement?

The primary possibilities for iteration control are **logical**, **counting**, or a combination of the two. The main choices for the location of the control mechanism are the top of the loop or the bottom of the loop.

<!--ID: 1728275348069-->

### Logical

**Logical iterative statements** are usually denoted by `while`. They are controlled by a Boolean expression (hence "logical"). Although logical iterative statements are more general than counter-controlled loops, they are not necessarily more commonly used.

<!--ID: 1733291718494-->

### Counter-controlled

**Counter-controlled iterative statements** are usually denoted by `for`. Because counter-controlled loops are more complex, their design is usually more demanding.
<!--ID: 1728275348073-->

### Location of control mechanism

The location of the control mechanism dictates when the loop tests for a condition; see [[Y1T1/CCPROG1/Iterative_statements#The `while` statement|while loops]] (known as **pre-test**) vs [[Y1T1/CCPROG1/Iterative_statements#The `do` statement|do-while loops]] (known as **post-test**)

<!--ID: 1728275348080-->

### Body

The body of an iterative statement refers to all of the statements contained under it.

<!--ID: 1728275348084-->

### Loop variable

*See also*: [[Y1T1/CCPROG1/Iterative_statements|Iterative statements]]

In early versions of C (pre-C99), the definition of the loop variable must be outside of the `for` statement

```c
/* C99 */
for (int i = 0; i < 5; i++) {
    /* Loop body */
}
```

The **initial value** is `0`, the **terminal value** is `5`, and the **step size** is `1` (increment). These are referred to as the loop parameters.

>[!tip] Counter-controlled loops are sometimes supported by machine instructions designed for that purpose. Unfortunately, machine architecture can outlive the prevailing approaches to programming at the time of the architecture design.

>[!info] Notes
>- Only the initial value is evaluated exactly once.
>- There is no explicit loop variable and no loop parameters (All of the expressions of C’s for are optional but this can result is code that is syntactically correct yet semantically incorrect).
>- All involved variables can be changed in the loop body.
>- The expressions are evaluated in the order stated previously.
>- Although it can create havoc, it is legal to branch into a C for loop body (comma operator).

<!--ID: 1728275348088-->

## Python's `for` loop

```python
for loop_variable in object:
...
[else:
...
]
```

Python's `for` loop iterates over some `object`. Counting loops are usually implemented through array slices and the `range` function (with parameters start, **stop**, and step)

<!--ID: 1728275348095-->

## Counter-controlled loops in functional languages

Counter-controlled loops in functional languages may be implemented [[Recurrences|recursively]].

```f#
let rec forLoop loopBody reps =
if reps <= 0 then
()
else
loopBody()
forLoop loopBody, (reps - 1);;
```

<!--ID: 1728275348098-->

## Logically controlled loops

- Should the control be pretest or posttest?
- Should the logically controlled loop be a special form of a counting loop or a separate statement?
<!--ID: 1728275348102-->

## User-located loop control

- Should the conditional mechanism be an integral part of the exit?
- Should only one loop body be exited, or can enclosing loops also be exited?

`break` breaks control out of an enclosing switch or loop

`continue` breaks control out of the current iteration of a loop and proceeds to the next

<!--ID: 1728275348106-->

## Iteration based on data structures

Controlled by number of elements

Calls an iterator function to get the next element in the structure

Example: C tree traversal (pointers; `traverse()` is the iterator)

```c
for (ptr = root; ptr == null; ptr = traverse(ptr)) {
. . .
}
```

<!--ID: 1728275348111-->
