---
target-deck: CCDSALG::Sorting algorithms
tags: [CCDSALG]
title: Sorting algorithms
---

## Sorting algorithms

A **sorting algorithm** rearranges a [[Sums_and_sequences#Sequences|sequence]] of $n$ numbers ($a_1,a_2,a_3,...,a_n$), typically stored in an [[Arrays|array]], such that the data is in **nondecreasing** order:

$$
a_1' \leq a_2' \leq a_3' \leq ... \leq a_n'
$$

>[!info] A sorting algorithm is known as **in-place** if **no** additional array storage is used.
<!--ID: 1718172232843-->

### Bubble sort

**Bubble sort** passes sequentially over a list, comparing each value to the one immediately after it. If the first value is greater than the second, their positions are switched. This results in a [[Asymptotic_bounds|time complexity]] of $O(n^2)$.

The [following](https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort#C) is an implementation of bubble sort in C:

```c
void bubble_sort (int *a, int n) {
	int i, t, j = n, s = 1;
	while (s) {
		s = 0;
		for (i = 1; i < j; i++) {
			if (a[i] < a[i - 1]) {
				t = a[i];
				a[i] = a[i - 1];
				a[i - 1] = t;
				s = 1;
			}
		}
		j--;
	}
}
```
<!--ID: 1718172232847-->

### Insertion sort

**Insertion sort** is an $O(n^2)$ sorting algorithm which moves elements one at a time into the correct position. The algorithm consists of inserting one element at a time into the previously sorted part of the array, moving higher ranked elements up as necessary. In the first iteration of the algorithm, the **first** element of the array is considered to be the sorted part.

The [following](https://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort#C) is an implementation of insertion sort in C:

```c
void insertion_sort(int *a, const size_t n) {
	for(size_t i = 1; i < n; ++i) {
		int key = a[i];
		size_t j = i;
		while( (j > 0) && (key < a[j - 1]) ) {
			a[j] = a[j - 1];
			--j;
		}
		a[j] = key;
	}
}
```
<!--ID: 1718172232851-->

### Selection sort

*See also*: [[Search_and_sort_algorithms#Selection sort|Search and sort algorithms#Selection sort]]

**Selection sort** is an $O(n^2)$ sorting algorithm that finds the smallest element in the array and swapping it with the element in the first position and doing the same for each succeeding element in the array.

The [following](https://rosettacode.org/wiki/Sorting_algorithms/Selection_sort#C) is an implementation of selection sort in C:

```c
void selection_sort (int *a, int n) {
	int i, j, m, t;
	for (i = 0; i < n; i++) {
		for (j = i, m = i; j < n; j++) {
			if (a[j] < a[m]) {
				m = j;
			}
		}
		t = a[i];
		a[i] = a[m];
		a[m] = t;
	}
}
```
<!--ID: 1718172232854-->

### Merge sort

**Merge sort** is a **divide-and-conquer** $O(n \log n)$ sorting algorithm that works as follows:

1. Divide the unsorted list into $n$ sublists, each containing one element (a list of one element is considered sorted).
2. Repeatedly sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

A visual representation of the algorithm would be:

[[merge_sort.gif]]

The [following](https://rosettacode.org/wiki/Sorting_algorithms/Merge_sort#C) is an implementation of merge sort in C:

```c
void merge (int *a, int n, int m) {
	int i, j, k;
	int *x = malloc(n * sizeof (int));
	for (i = 0, j = m, k = 0; k < n; k++) {
		x[k] = j == n	   ? a[i++]
			 : i == m	   ? a[j++]
			 : a[j] < a[i] ? a[j++]
			 :			     a[i++];
	}
	for (i = 0; i < n; i++) {
		a[i] = x[i];
	}
	free(x);
}

void merge_sort (int *a, int n) {
	if (n < 2)
		return;
	int m = n / 2;
	merge_sort(a, m);
	merge_sort(a + m, n - m);
	merge(a, n, m);
}
```
<!--ID: 1718172232856-->
