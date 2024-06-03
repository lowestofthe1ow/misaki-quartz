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

### `for` loop

`for` loops iterating from $i$ to $j$ execute the conditional statement $j - i + 2$ times (returning **true** $j - i + 1$ times and **false** exactly once). The loop body is then executed $j - i + 1$ times.

```
for j = 1 to 4
	print(j) 
```

<!--ID: 1717429724881-->
