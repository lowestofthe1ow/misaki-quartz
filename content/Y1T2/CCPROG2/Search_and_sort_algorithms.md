---
target-deck: CCPROG2::Search and sort algorithms
tags: CCPROG2
title: Search and sort algorithms
---

## Selection sort

1. Start a `for` loop that counts `i` from `0` and stops at `len - 1`
2. In each iteration, `min = i`
3. Start a nested `for` loop that counts `j` from `i + 1` and stops at `len`
4. If element pointed to by `arr[j]` is greater than `min`, set `min` to `j`
5. If `min` changed (optional), swap `arr[i]` and `arr[min]`

```c
void selectionSort(int * arr, int len) {
		int i, j, min, temp;
		// 1.
        for (i = 0; i < len - 1; i++) {
		        // 2
                min = i;
                // 3
                for (j = i + 1; j < len; j++)
                        // 4
                        if (arr[min] > arr[j])
                                min = j;
                // 5
                temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
        }
}
```

<!--ID: 1708438973781-->

## Binary search

1. Select the lowest and the highest index in the array
2. Set middle to the average of lowest and highest
3. Check `guess`:
	1. If it is equal to `target`, return it
	2. If it is greater than `target`, set `high` to less than `guess`
	3. Otherwise, set `low` to higher than `guess`
4. Repeat until `low` is greater than `high`

```c
int binarySearch(int * arr, int target, int len) {
        int low = 0, high = len - 1, guess;
        while (low <= high) {
                guess = (low + high) / 2;
                if (arr[guess] == target)
                        return guess;
                else if (arr[guess] > target)
                        high = guess - 1;
                else if (arr[guess] < target)
                        low = guess + 1;
        }
        return -1;
}
```

<!--ID: 1708438973787-->
