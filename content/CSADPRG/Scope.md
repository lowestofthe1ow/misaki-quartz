---
target-deck: CSADPRG::Scope
tags: [CSADPRG]
title: Scope
---

### Variable declaration and definition

**Declaration** refers to declaring the variable type and name (`int x;`), among other attributes. It usually does not cause storage allocation. **Definition** refers to specifying a value (`int x = 5;`), which causes storage allocation.
<!--ID: 1727784534539-->

## Scope

**Scope** refers to the range of statements wherein a variable is **visible** (i.e., it can be referenced within that statement).
<!--ID: 1727784534521-->

### Static scoping

A variable's **scope** may be determined prior to code execution. The scope of every variable is apparent just by examining the code. For instance, given the following function:

```js
function f1() {
	function f2() {
		console.log(x);
	}
	var x = 3;
	f2();
}
```

Calling `f1` will declare and initialize `x` in its scope. It is this declaration that the function `f2` will refer to when it calls `console.log(x)`, because `f2` exists within the scope of `f1`.
<!--ID: 1729181159947-->

#### Variable hiding

Consider the case where a variable is declared both in the current scope and the parent scope:

```js
function f1() {
	function f2() {
		var x = 7;
		console.log(x);
	}
	var x = 3;
	f2();
}
```

In this case, `f2` will access the `x` within its local scope; in effect, the `x` in `f1` is "hidden" from `f2`.
<!--ID: 1729181159950-->

##### C++ scope operator

The scope operator `::` breaks the concept of variable hiding by fetching the value of a variable outside of the current scope:

```cpp
#include <iostream>
using namespace std;
int x = 2;

int main()
{
	int x = 3;
	cout << ::x; // Prints 2 instead of 3 because of ::
	return 0;
}
```
<!--ID: 1727784534544-->

#### Blocks

A **block** is a section of code with its own local static scope. Particularly in C-based languages, blocks are treated similar to subprograms or functions.

```c
void f1() {
	int count;
	while (/* Condition */) {
		int count;
		count++;
	}
}
```

In the above example, the `count` in `f1` is hidden from the scope of the `while` loop body as it has its own local `count` variable.

> [!info] Variables within a block are usually **stack-dynamic**.
> Storage is allocated upon entry into the block, and is deallocated upon exit of the block.

> [!error] Note that declaration of local variables in nested code blocks is not allowed in some programming languages, such as C#:
>
> ```cs
> {int x;
> 	{int x; // Illegal in C#
> 	}
> }
> ```
<!--ID: 1729181159953-->

#### Declaration order

Certain programming languages require a specific order for declaring variables. For instance, the **C89** standard required that all declarations appear at the **beginning** of a function; it was not until C99 that they could appear anywhere a statement could appear.

```c
int x; // Declaration occurs before use
x = 5; // X can be assigned a value now
```
<!--ID: 1729181320378-->

#### Function hoisting

Certain programming languages allow function calls to appear even before the function's declaration. This is known as **function hoisting**.

```js
greet(); // Function hoisting

function greet() {
	console.log("Hello world!");
}
```
<!--ID: 1727784534530-->

#### Global scope

The **global scope** refers to definitions of variables outside functions. They are thus potentially visible to all functions if not overwritten in a local scope. They are typically declared outside of any function or through keywords such as C's `extern`.
<!--ID: 1727784534534-->

### Dynamic scoping

**Dynamic scoping** is based on the **calling sequence** of subprograms rather than their relationship within the code. Thus, unlike static scope, dynamic scope can only be determined at runtime. Consider the following function:

```js
function f1() {
	function f2() {
		var x = 7;
		f3();
	}
	function f3() {
		console.log(x);
	}
	var x = 3;
	f2();
}
```

`f1` defines `x` and initializes it to have a value of `3`. It then calls `f2`, which has a local variable `x`. `f2` then calls `f3`, which references `x` in its call to `console.log`. Here, the definition used for `x` is the one made in `f2` rather than in `f1`, as dynamic scoping follows the call sequence rather than the nesting in code. The output is thus `7`.
<!--ID: 1727784534549-->

## Lifetime

Where scope is spatial, **lifetime** is **temporal**. Scope refers to the locations in the program from which variables are accessible; lifetime refers to **when**, during execution, a variable is allocated memory. As long as a variable is not garbage-collected, it stays.
<!--ID: 1727784534554-->

## Referencing environment

The **referencing environment** comprises all variables visible at a given point in the program's execution.
<!--ID: 1727784534558-->

## Named constants

**Named constants** are variables that are bound to a value exactly **once**.
<!--ID: 1729181159957-->
