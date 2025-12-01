---
target-deck: CSARCH2::Floating point data
tags: [CSARCH2]
title: Floating point data
---

## IEEE-754 standard

![[ieee754.png]]

The IEEE-754 format is a 32-bit representation (64-bit for double precision) that requires the following:

- 1 bit for the *sign* $S$ (zero-positive)
- 8 bits for the exponent in excess-127 notation $E'$ (11-bit excess-1023 for double precision)
	- The end values $0$ and $255$ represent special values.
	- This means the exponent $E$ is in the range $-126 \leq E \leq 127$
- 23 bits for the *significand* or *mantissa* $M$ (52 bits for double precision)

The value represented is given by $$\pm 1.M \times 2^{E' - 127}$$

>[!info] The signed exponent uses excess-127 notation (that is, we add 127 to the value of the exponent) as this allows one to use integer comparisons to compare floating-point numbers of the same sign.

>[!info] A number is said to be **normalized** or normal if the radix point is to the right of the first significant digit. In this case, a number is normal if the whole part of the mantissa is 1.
<!--ID: 1747739754852-->

### Special cases

The end values $0$ and $255$ of the excess-127 exponent $E'$ represent **special cases**.

Single-precision positive infinity follows the pattern `0x7F800000`. Negative infinity follows the pattern `0xFF800000`.

Double-precision positive infinity follows the pattern `0x7FF0000000000000`. Negative infinity follows the pattern `0xFFF0000000000000`.

| Sign Bit   | E’         | Significand                | Value        |
| ---------- | ---------- | -------------------------- | ------------ |
| `0`        | `00000000` | `000000000000000000000000` | $+0$         |
| `1`        | `00000000` | `000000000000000000000000` | $-0$         |
| `0` or `1` | `00000000` | ≠ `0`                      | Denormalized |
| `0`        | `11111111` | `000000000000000000000000` | $+\infty$    |
| `1`        | `11111111` | `000000000000000000000000` | $-\infty$    |
| `x`        | `11111111` | `01xxxxxxxxxxxxxxxxxxxxxx` | `sNaN`       |
| `x`        | `11111111` | `1xxxxxxxxxxxxxxxxxxxxxxx` | `qNaN`       |
<!--ID: 1747739754858-->

#### Zero (signed)

The value $0$ is represented when the mantissa fraction $M$ and the excess-127 exponent $E'$ are both zero. This zero is signed depending on the value of the sign bit $S$.
<!--ID: 1747739754860-->

#### Infinity (signed)

The value $\infty$ (the result of dividing a normal number by zero) is represented when $E'=255$ and $M=0$. The sign depends on the value of $S$.
<!--ID: 1747739754863-->

#### Denormal numbers

**Denormal** numbers are numbers smaller than the smallest normal number (i.e., their value is represented by $\pm0.M \times 2^{-126}$). They are represented when $E' = 0$ but $M \neq 0$.

To represent a denormal number, fix exponent to $-126$ (that is, $E'=0$) and denormalize the significand as necessary
<!--ID: 1747739754864-->

#### Not-a-number (NaN)

**NaN** is the result of performing an invalid operation such as dividing zero by zero, and is represented when $E'=255$ and $M \neq 0$. **The sign bit is ignored.**
<!--ID: 1747739754866-->

##### Quiet NaN (qNaN)

Most significant bit of the significand is 1. Quiet NaNs are more or less produced by normal operations without a proper numerical result, and can be propagated to allow the program to proceed somewhat normally.
<!--ID: 1747739754868-->

##### Signaling NaN

Most significant crumb of the significand is 01. Used to *signal* an invalid operation (floating point exceptions)
<!--ID: 1747739754869-->
