---
target-deck: CSADPRG::scope
tags: CSADPRG
title: Scope
draft: true
---

## Scope

<!--ID: 1727784534521-->

### Declaration order

C89: All data declarations must appear at the beginning of a function

C99: Variable declarations can appear anywhere a statement can appear in a program unit

C

```c
int x; // Declaration occurs before use
x = 5; // X can be assigned a value now
```

JavaScript

```js
greet(); // Function hoisting (can call before declaration)

function greet() {
	console.log("Hello world!");
}
```

C#

```c#
{int x;
	{int x; // Illegal
	}
}
```

C99/C++

```cpp
void test() {
	// Declaration in for statement allowed in later versions
	for (int count = 0; count < 5; count++) {
	}
}
```

<!--ID: 1727784534530-->

### Global scope

Definitions outside functions; potentially visible to all functions if not overwritten.

All functions can refer to a global variable.

<!--ID: 1727784534534-->

#### Declaration vs definition

Declaration: type and name (`int x;`)

Definition: value (`int x = 5;`)

<!--ID: 1727784534539-->

#### C++ scope operator

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

### Dynamic scoping

- JavaScript black magic that allows scopes to be dynamically defined
- DIFFICULT TO READ
<!--ID: 1727784534549-->

## Lifetime

Where scope is spatial, lifetime is temporal. Scope refers to the locations in the program from which variables are accessible; lifetime refers to **when**, during execution, a variable is allocated memory. As long as a variable is not garbage-collected, it stays.

<!--ID: 1727784534554-->

## Referencing environment

All variables visible in the statement

<!--ID: 1727784534558-->
