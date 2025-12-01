---
target-deck: CCPROG2::C string library functions
tags: [CCPROG2]
title: C string library functions
---

Some programming languages provide operators that can copy strings, compare strings, concatenate strings, select substrings, and the like. C’s operators, in contrast, are essentially useless for working with strings. Strings are treated as arrays in C, so they’re restricted in the same ways as arrays

## The `string.h` library

C provides a rich set of functions for performing operations on strings, residing in the `<string.h>` header:

```c
#include <string.h>
```
<!--ID: 1708431865662-->

## `strcpy()`

The `strcpy()` function has the following prototype in `<string.h>`:

```c
char * strcpy(char *s1, const char *s2);
```

The function copies the string `s2` into the string `s1` (it copies the string pointed to by `s2` **including the null character** into the array pointed to by `s1`) and returns `s1`. The existence of `strcpy()` compensates for the fact that we can’t use the assignment operator to copy strings.

>[!warning] `strcpy()` has no way to check that the string pointed to by `str2` will actually fit in the array pointed to by `str1`.
>If `str1` points to an array of length $n$, then the copy will succeed only if the string that `str2` points to has no more than $n - 1$ characters. Otherwise, undefined behavior (buffer overflow) occurs; since `strcpy()` always copies up to the first null character, it will continue copying past the end of the array that `str1` points to.
<!--ID: 1708431865672-->

## `strlen()`

The `strlen()` function has the following prototype in `<string.h>`:

```c
size_t strlen(const char *s);
```

Like the `sizeof()` operator, `strlen()` returns a value of type `size_t`, which is an unsigned integer. The function returns the length of the string `s`: the number of characters up to, **but not including**, the first null character.

>[!warning] Unlike `sizeof()`, `strlen()` does not measure the length of the array itself. Instead, it returns the length of the **string** stored in the array.
<!--ID: 1708431865684-->

## `strcat()`

The `strcat()` function has the following prototype in `<string.h>`:

```c
char *strcat(char *s1, const char *s2);
```

`strcat()` appends the contents of the string `s2` to the **end** of string `s1` while returning `s1`. The first null character in `s2` is overwritten.

>[!warning] Like `strcpy()`, `strcat()` will only succeed if `s1` is long enough to accommodate the additional characters it will receive from `s2`
<!--ID: 1708431865693-->

## `strcmp()`

The `strcmp()` function has the following prototype in `<string.h>`:

```c
int strcmp(const char *s1, const char *s2);
```

`strcmp` compares the strings `s1` and `s2` lexicographically. It returns a number **less than 0** if `s1 < s2`, **greater than 0** if `s1 > s2`, and **0** if `s1 == s2`:

```c
if (strcmp(s1, s2) < 0) {...} // Is str1 < str2?
if (strcmp(s1, s2) == 0) {...} // Is str1 = str2?
if (strcmp(s1, s2) > 0) {...} // Is str1 > str2?
```

`s1` is said to be "less than" `s2` if:

- The first non-matching character has a lower value in `s1` than in `s2`
- All characters of `s1` match `s2`, but `s1` is shorter than `s2` (Comparison is made up to the first null character).
<!--ID: 1708431865702-->
