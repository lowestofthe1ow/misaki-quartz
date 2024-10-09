---
target-deck: CCPROG1::Iterative statements
tags: CCPROG1
title: Iterative statements
---

## Loops

**Loops** are statements  whose job is to repeatedly execute some other statement (the loop body). In C, every loop has a **controlling expression**. Each time the loop body is executed (an **iteration** of the loop), the controlling expression is evaluated; if the expression is true—has a value that’s not zero— the loop continues to execute.

> C provides 3 iterative statements: [[Y1T1/CCPROG1/Iterative_statements#The while statement|while]], [[Y1T1/CCPROG1/Iterative_statements#The do statement|do]], and [[Y1T1/CCPROG1/Iterative_statements#The for statement|for]].

<!--ID: 1701570318029-->

### The `while` statement

![[While.png]]

Of all the ways to set up loops in C, the while statement is the simplest and most fundamental. The while statement has the form

```c
while (expression)
	statement
```

When a `while` statement is executed, the controlling expression is evaluated first. If its value is nonzero (true), the loop body is executed and the expression is tested again. The process continues in this fashion—first **testing** the controlling expression, then **executing** the loop body—until the controlling expression eventually has the value zero. The following example uses a `while` statement to compute the smallest power of 2 that is greater than or equal to a number `n`, in this case 3:

```c
n = 3;
i = 1;
while (i < n)
	i = i * 2;
```

> The following trace shows what happens when the `while` statement is executed:
> `n = 3;` — `n` is now equal to 3
> `i = 1;` — `i` is now equal to 1
> Is `i < n`? — Yes; continue
> `i = i * 2` — `i` is now equal to 2
> Is `i < n`? — Yes; continue
> `i = i * 2` — `i` is now equal to 4
> Is `i < n`? — No; **exit from the loop**

<!--ID: 1701570318035-->

#### Infinite loops

A `while` statement won't terminate if the controlling expression **always** has a nonzero value.

```c
while (1) ...
```

A `while` statement of this form will execute forever unless its body contains a statement that transfers control out of the loop or calls a function that causes the program to terminate.

<!--ID: 1701570318039-->

### The `do` statement

![[Do-while.png]]

The `do` statement is essentially a [[Y1T1/CCPROG1/Iterative_statements#The while statement|while statement]] whose controlling expression is tested **after** each execution of the loop body. It has the form:

```c
do statement while (expression);
```

The following example prints down from 10 to 1:

```c
i = 10;
do {
	printf("T minus %d and counting\n", i);
	--i;
} while (i > 0);
```

The loop body is first executed, after which the condition is tested (as opposed to `while` loops, which test a condition before executing the body). This means that the body of a `do` statement is always executed **at least once**; the body of a `while` statement is **skipped entirely** if the controlling expression is 0 initially.

<!--ID: 1701570318044-->

### The `for` statement

![[For.png]]

The `for` statement is ideal for loops that have a “counting” variable and has the following form:

```c
  // initialization; condition;   update
for (expression1;    expression2; expression3)
	statement
```

In the following example:

```c
for (i = 10; i > 0; i--)
	printf("T minus %d and counting\n", i);
```

The variable `i` is first **initialized** to 10; it is then tested against the **condition** `i > 0`. If the condition is true, the loop body is executed, then the **update** of decrementing `i` is performed.

<!--ID: 1728399222475-->
<!--The following trace shows what happens when the `for` statement is executed:
 `i = 10` — `i` is initialized to 10
 Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 10 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 9 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 8 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 7 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 6 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 5 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 4 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 3 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 2 and counting`
`i--` — `i` is decremented
Is `i > 0`? — Yes; continue
`printf(...);` — `T minus 1 and counting`
`i--` — `i` is decremented
Is `i > 0`? — No; **exit from the loop**-->
<!--ID: 1701570318049-->
