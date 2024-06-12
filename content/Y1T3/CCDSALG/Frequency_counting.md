---
target-deck: CCDSALG::Frequency counting
tags: CCDSALG
title: Frequency counting
---

## Frequency count

**Frequency count** refers to the number of **statements** or steps needed to complete a given task.
<!--ID: 1717429724870-->

### Assignment statements

**Assignment statements** have a count of $1$ for each statement.
<!--ID: 1717429724874-->

### Conditional statements

**Conditional statements** have a count of $1$ plus the count of the **worst case block**:

$$
1 + max(count(\text{if block}), count(\text{else block}))
$$

For example, the following has a count of $1+3=4$:

```
if expression
	statement 1 ┐ If block
	statement 2 ┘ 
else
	statement 1 ┐ Else block
	statement 2 | 
	statement 3 ┘
```

<!--ID: 1717429724878-->

### `for` and `while` loops

Loops iterating from $i$ to $j$ execute the conditional statement $j - i + 2$ times (returning **true** $j - i + 1$ times and **false** exactly once). The loop body is then executed $j - i + 1$ times. The following has a count of $4 - 1 + 2 + 4 - 1 + 1 = 9$:

```
for j = 1 to 4
	print(j) 
```

>[!warning] Note that conditions using `<=` or `>=` instead of `<` or `>` will typically execute **one more time** due to the equality case returning true.

<!--ID: 1717429724881-->

#### Nested loops

Nested loops are simply counted as part of the statement executed within the outer loop. For instance:

```
for j = 1 to n
	for k = 2 to n
		print(j, k) 
```

The inner loop is part of the body of the outer loop, meaning that the **entire** inner loop it is executed $n - 1 + 1 = n$ times. The inner loop statement, executed $n - 1 + 2 = n + 1$ times, is thus executed a **total** (accounting for the outer loop) of $n(n+1)$ times. The inner loop **body** is likewise executed $n(n) = n^2$ times.

<!--ID: 1718172207425-->

### `do`-`while` loops

`do`-`while` loops are slightly different in that the condition is executed **the same number of times** as the body:

```
x = 1
do
	x = x + 1
while x <= 4
```

The `do` clause of the loop is executed $4 - 1 + 1 = 4$ times. The `while` condition is checked the same number of times.

<!--ID: 1718172207434-->
