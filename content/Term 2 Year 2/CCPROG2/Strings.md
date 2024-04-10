---
target-deck: CCPROG2::Strings 
tags: CCPROG2
---

## String constants

String constants, otherwise referred to as **string literals**, refers to a sequence of characters enclosed within double quotes:
```c
"Hello World!"
```
String literals may contain the same [[Tokens and token classification#Character literals|escape sequences as character constants]]. For instance, the character `\n` in the string:
```c
"Candy\nIs dandy\nBut liquor\nIs quicker.\n  --Ogden Nash\n"
```
causes the cursor to advance to the next line:
```
Candy
Is dandy
But liquor
Is quicker.
  --Ogden Nash
<!--ID: 1708431888815-->


```
When used in functions such as `printf` and `scanf`, [[Formatted input and output|format specifiers]] are likewise legal.

### Storing string constants in memory

String constants are treated as **character** [[Arrays|arrays]]. However, given a string literal of length $n$ in a program, C will set aside $n + 1$ bytes of memory for the string. This extra character is used to store the [[Tokens and token classification#Character literals|null character]] (`\0`, with an ASCII value of **0**). which marks the **end** of the string. As such, `"Hello World!"` is actually stored as:
```c
{'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'}
```
When `"Hello World!` is pointed to by a `char *` pointer, such as as follows:
```c
char * greeting = "Hello World!"
```
This assignment does **not** copy the characters in `"Hello World!` to `greeting`; rather, `greeting` is actually a pointer to where the array `{'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'}` stored in **read-only memory**.
>[!warning] As they are stored in read-only memory, attempting to modify a string constant leads to **undefined behavior**.
<!--ID: 1708431888821-->


### String variables

While other programming languages have a separate data type for strings, C only allows us to emulate this functionality using **character arrays**. If, for example, we need to create a variable that stores a string of up to 80 characters, we can declare:
```c
char str[81];
```
where an extra element is allocated for the null terminator. Note that this method of assignment **creates a new character array** to which we can later place the contents of a string literal. As such, the following:
```c
char str[81] = "Hello World!";
```
is equivalent to:
```c
char str[81] = {'H', 'e', 'l', 'l', 'o', ' ',
				'W', 'o', 'r', 'l', 'd', '!', '\0'};
```
The remaining 68 characters (as space was allocated for 81 characters) [[Arrays#Initializing a one-dimensional array|are then assigned a value of 0]], which is equivalent to the null character `\0`. Like with arrays, the declaration may omit its length, such as:
```c
char str[] = "Hello World!"
```
In this case, the length is computed by the compiler.
>[!warning] Ensure that enough space is allocated for both the **string itself** and the **null character** that terminates it.
>If, for example, an array of length 5 attempts to store the string `"Hello"`, the **null character is dropped by the compiler**, rendering the array unusable as a string. However, attempting to store a string such as `"Hello!"` (which has 6 characters) to the same array is explicitly illegal. 
<!--ID: 1708431888834-->
