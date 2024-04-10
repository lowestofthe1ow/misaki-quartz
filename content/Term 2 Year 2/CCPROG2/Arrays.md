---
target-deck: CCPROG2::Arrays
tags: CCPROG2
---

## Arrays

An **array** is a data structure containing a number of data values of the **same type**. These values, known as **elements**, can be individually selected by their position within the array.
<!--ID: 1708357755028-->

### One-dimensional array

The elements of a one-dimensional array are conceptually arranged one after another in a single **row**. To declare an array, we must specify the type of the array's elements and the number of elements, i.e., to declare an array `a` with 10 `int` elements, we would write:
```c
int a[10];
```
>[!warning] The elements of an array may be of any type; the length of the array can be specified by any (integer) [[Tokens and token classification#Numeric literals or numeric constants|constant expression]]
<!--ID: 1708357755034-->

#### Initializing a one-dimensional array

The most common form of an **array initializer** is a list of constant expressions enclosed in braces and separated by commas:
```c
int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
```
If the initializer  is **shorter** than the array, the remaining elements of the array are assigned `0`:
```c
int a[10] = {1, 2, 3, 4, 5, 6};
// Initial value of a is {1, 2, 3, 4, 5, 6, 0, 0, 0, 0}
int b[10] = {0};
// Initial value of b is {0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
```
If an initializer is present, then the length of the array may be omitted:
```c
int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
// Array is given a length of 10
```
The compiler uses the length of the initializer to determine how long the array is (it will still have a fixed number of elements).
<!--ID: 1708431852483-->


### Multidimensional array

An array may have any number of dimensions. The following declaration creates a two-dimensional array with 5 **rows** and 9 **columns**:
```c
int m[5][9];
```
C stores arrays in **row-major order**—which means it stores row 0 first, followed by row 1, and so forth—in a contiguous block of memory:
![[Multidimensional arrays.png]]
<!--ID: 1708357755038-->

#### Initializing a multi-dimensional array

We can create an initializer for a two-dimensional array by nesting one dimensional initializers. Likewise, we can create an initializer for a **three**-dimensional array by nesting **two**-dimensional initializers.
>[!warning] Omitting the initializer inner braces
>It is possible to omit the inner braces in the initializer for a multidimensional array; once the compiler has seen enough values to fill one row, it begins filling the next. However, this may be risky, as an extra or missing element will affect the rest of the initializer.
<!--ID: 1708431852494-->


## The `sizeof` operator

The `sizeof` operator can determine the [[Data representation#Data size and Range|size of its operand in bytes]]. For instance, if `a` is an array of 10 integers, then `sizeof(a)` evaluates to `40` if `sizeof(int)` is `4`:
$$
4 \text{ bytes} \times 10 \text{ elements} = 40 \text{ bytes}
$$
Thus, dividing the size of `a` (`sizeof(a)`, which is in bytes) by the size of one of the elements of `a` (`sizeof(a[0])`, which is also in bytes).
$$
10 \text{ elements} = \frac{40 \text{ bytes}}{4 \text{ bytes}}
$$
In this case, since `a` is an integer array, `sizeof(a[0]) == sizeof(int)`. The number in elements in `a` is thus `sizeof(a) / sizeof(a[0])`. Note, however, that the `sizeof` operator returns a value of type `size_t`, which is an [[Data representation#Unsigned integers|unsigned]] type. To avoid warnings, we can use a typecast that converts the expression `sizeof(a) / sizeof(a[0])` into a [[Data representation#Signed integers|signed]] integer:
```c
(int) (sizeof(a) / sizeof(a[0]))
// Evaluates to an integer number of elements in a
```
<!--ID: 1708431852499-->
