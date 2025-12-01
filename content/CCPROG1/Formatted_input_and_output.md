---
target-deck: CCPROG1::Formatted input and output
tags: [CCPROG1]
title: Formatted input and output
---

## Conversion specifications

A conversion specification is a placeholder beginning with `%` that represents a value to be filled in during printing. The information that follows the `%` character specifies how the value is converted from its internal form (binary) to printed form (characters). Conversion specifications are usually of the form:

```c
%m.pX
```

—where `m` and `p` are integers and `X` is a letter. Both `m` and `p` are optional; if `p` is omitted, the period that separates `m` and `p` is also dropped.
<!--ID: 1698055025610-->

### Conversion specifier `X`

| Specifier | Meaning |
|------------|-------------------------------------------|
| `%c` | For character type |
| `%d` | For signed integer type |
| `%e` or `%E` | For scientific notation of floats |
| `%f` | For float type |
| `%g` or `%G` | For float type with fixed decimal or scientific notation, depending on size |
| `%i` | Unsigned integer |
| `%ld` or `%li` | Long |
| `%lf` | Double |
| `%Lf` | Long double |
| `%lu` | Unsigned int or unsigned long |
| `%lli` or `%lld` | Long long |
| `%llu` | Unsigned long long |
| `%o` | Octal representation |
| `%p` | Pointer |
| `%s` | String |
| `%u` | Unsigned int |
| `%x` or `%X` | Hexadecimal representation |
| `%n` | Prints nothing |
| `%%` | Prints % character|

The conversion specifier indicates which conversion should be applied to the value before it is printed.
<!--ID: 1698055025619-->

### Minimum field width `m`

The minimum field width `m` in the format `%m.pX` specifies the **minimum** number of characters to print. If the value to be printed requires fewer than m characters, the value is **right-justified** within the field (i.e., spaces are added preceding the value):

```c
int x = 10
printf("%4d", x);
```

—will output the following:

```
  10
```

Adding a `0` will indicate that zeroes will be added instead of spaces:

```c
int x = 10
printf("%04d", x);
```

—will output the following:

```
0010
```

> If `m` is negative, the output string will be **left-justified** within the field instead (i.e., spaces are added after the value).
<!--ID: 1698055025625-->

### Precision `p`

The behavior of `p` in the format `%m.pX` depends on the value of `X`. For `d` (decimal integers), `p` indicates the minimum number of digits to display (with leading zeros added if necessary). In this case, `p` is assumed to have a value of `1` by default.

```c
printf("%.4d", 123); // Outputs 0123
```

For `e` (scientific notation floating-point), and `f` (fixed decimal floating-point), `p` indicates how many digits should appear after the decimal point. This is assumed to be `6` by default; if it is `0`, the decimal point is not displayed. This **rounds off** rather than **truncates**.

```c
printf("%.1e\n", 339.10130); // Outputs 3.4e+02
printf("%.2f", 339.10130); // Outputs 339.10
```

For `g` (fixed decimal or scientific notation, depending on size), `p` indicates the maximum number of **significant digits** to be displayed. Unlike `f`, `g` will not display trailing zeros; if the value to be printed has no digits after the decimal point, `g` will not display the decimal point.

```c
printf("%.1g\n", 339.10130); // Outputs 3e+02 (Does not display decimal point)
printf("%.5g", 339.10130); // 339.1 (Does not display trailing zeros)
```
<!--ID: 1698055025629-->

## The `printf()` function

The `printf` function is designed to display the contents of a string, known as the format string, with values possibly inserted at specified points in the string:

```c
printf(string, expr1, expr2, ...);
```

The values to be printed can be constants, variables, or other expressions; there are no limits to how many can be printed by a single `printf()` call.
<!--ID: 1698055025634-->

### Format string

The format string `string` may contain ordinary [[Tokens_and_token_classification#Character literals|characters]] or [[Formatted_input_and_output#Conversion specifications|conversion specifications]]. Ordinary characters in a format string are printed exactly as they appear in the string while conversion specifications are replaced by the values to be printed:

```c
int i, j;
float x, y;
i = 10;
j = 20;
x = 43.2892;
y = 5527.0;
printf("i = %d, j = %d, x = %f, y = %f\n", i, j, x, y);
```

The above code produces the following output:

```
i = 10, j = 20, x = 43.289200, y = 5527.000000
```

The `%d` and `%f` specifiers are replaced with the values of `i`, `j`, `x`, and `y`.
<!--ID: 1698055025638-->

## The `scanf()` function

`scanf()` reads input according to a particular format; it is a “pattern-matching” function that tries to match up groups of input characters with conversion specifications. When called, it begins processing the information in the provided [[Formatted_input_and_output#Format string|format string]], starting from the left. For each [[Formatted_input_and_output#Conversion specifications|conversion specification]] it encounters in the string, it will try to locate an item of the appropriate type in the **input stream** (to which the user input via keyboard is "pushed" or stored), skipping whitespaces as necessary. It then reads the item, stopping when it encounters a character that cannot possibly belong to the item (as defined by the conversion specification) after which the statement **stops**, passing control to the next statement. This means all succeeding specifiers will be ignored:

```c
int x;
char y = '#', z;
scanf("%d %c", &x, &y);
scanf("%c", &z);
printf("\n\n%d, %c (%c was left in stream after the first scanf)", x, y, z);
return 0;
```

Given the input `2!?`, the above code produces the following output:

```
2, ! (? was left in stream after the first scanf)
```

Inputting `!?*` instead gives the following output, showing that the first `scanf()` ignored `y` and `%c` after it failed to match `%d`:

```
0, 
<!--ID: 1716721517562-->
# (! was left in stream after the first scanf)
```
<!--ID: 1698127416743-->
