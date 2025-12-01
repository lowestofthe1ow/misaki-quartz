---
target-deck: CCPROG1::Conditional statements
tags: [CCPROG1]
title: Conditional statements
---

## The `if` statement

The if statement allows a program to choose between two alternatives by testing the value of an expression. In its simplest form, the if statement has the form:

```c
if (expression)
	statement
```

The `statement` is executed when the condition specified by `expression` has a **nonzero** value, which is interpreted as **true**:

```c
if (x == 10)
	printf("x is equal to %d", x);
```

The above code will execute `printf()` if the [[Operator_types,_precedence,_and_associativity#Equality operators||equality operation]] `x == 10` evaluates to a nonzero value; in this case, the expression will evaluate to `1` if `x` has a value of `10` and `0` otherwise. In other words, the `printf()` will execute if `x` has a value of `10`.

Furthermore, multiple statements may be executed following an `if` if wrapped in braces (`{}`), like so:

```c
if (x == 10) {
	x++;
	printf("x + 1 is equal to %d", x);
}
```
<!--ID: 1698127442133-->

### The `else` clause

An `if` statement may have an `else` clause:

```c
if (expression)
	statement
else
	statement
```

The statement that follows `else` will be executed if the `expression` in `if` has a value of `0`:

```c
if (i > j)
	max = i;
else
	max = j;
```

`else` statements belong to the **nearest** `if` statement that has not yet been paired with an `else`. Thus, to avoid ambiguity, statements such as:

```c
if (y != 0)
	if (x != 0)
		result = x / y;
else
	printf("Error: y is equal to 0\n");
```

—which would result in the `else` being a part of `if (x != 0)` rather than `if (y != 0)` as the indentation would suggest, the statements may be wrapped around braces:

```c
if (y != 0) {
	if (x != 0)
		result = x / y;
} else
	printf("Error: y is equal to 0\n");
```
<!--ID: 1698127442141-->

## The `switch` statement

A `switch` statement of the form:

```c
switch (expression) {
	case constant_expression:
		statements
	case constant_expression:
		statements
		...
	case constant_expression:
		statements
	default:
		statements
}
```

`expression` must be an [[CCICOMP/Data_representation#Integers|integer]] (or [[CCICOMP/Data_representation#Characters|character]], which is [[Character_representation|treated by C as an integer]]) expression. [[CCICOMP/Data_representation#Floating-point numbers|Floating-point numbers]] and [[CCICOMP/Data_representation#String|strings]] cannot be used with `switch`.

`constant_expression` are expressions that **cannot** contain variables or function calls. After each `case` label, one can put any number of statements that do not need to be wrapped in braces. Furthermore, several `case` labels may precede the same set of statements:

```c
switch (grade) {
	case 4: case 3: case 2: case 1:
		printf("Passing");
		break;
	case 0:
		printf("Failing");
		break;
	default: 
		printf("Illegal grade");
		break;
} 
```

The `break` statement causes the program to "break" out of the `switch` statement and pass control to the next statement after `switch`. Without `break`, control instead passes from the successful `case` and into every proceeding `case`:

```c
switch (grade) {
	case 4: printf("Excellent");
	case 3: printf("Good");
	case 2: printf("Average");
	case 1: printf("Poor");
	case 0: printf("Failing");
	default: printf("Illegal grade");
}
```

The above code, given a value of `3` for `grade`, will output:

```
GoodAveragePoorFailingIllegal grade
```

This is known as **falling through**.

> Duplicate `case` labels are not allowed. The order of the labels do not matter, and the `default` case (which is executed when no match is found), does not need to be last.
<!--ID: 1698127442146-->
