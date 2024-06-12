---
target-deck: CCDSALG::Recurrences
tags: CCDSALG
title: Recurrences
---

## Recurrence

A **recurrence** is used to describe the running time of a recursive algorithm. A general form of recurrence is an equality or inequality that describes a function over integers or reals using the function itself. It [[Sums_and_sequences#Recurrence relations|contains more than one case]], depending on the argument: the **base** and the **recursive** cases.

```c
int factorial(int n) {
	if (n == 0)
		return 1;

	return n * factorial(n-1);
}
```

The above algorithm has the following time complexity:

$$
T(n) = \begin{cases}
a & n = 0 \\
T(n-1)+b & n > 0
\end{cases}
$$

<!--ID: 1718172259534-->
