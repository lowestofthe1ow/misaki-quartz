---
target-deck: CCICOMP::Data representation::Integer representation
tags: CCICOMP
title: Integer representation
---

*See also*: [[Data_representation]]

## Sign and magnitude

- Leftmost bit is used as a **sign bit**, i.e., `1` if negative and `0` if positive
- Fixed number of bits $n$; values range from $-(2^{n-1}) + 1$ to $2^{n-1} - 1$
```
___ ___ ___ ___ ___ ___ ___ ___   .
+/-  64  32  16   8   4   2   1 radix
```
<!--ID: 1696773990133-->

## One's complement

**If the integer is positive**:
1. Represent the number in binary using $n$ bits
2. Check the most significant bit
	- If `0`, the number can be represented
	- If `1`, the number is out of range and must be represented with $n+1$ bits instead
```
  0   0   1   0   1   0   1   0
  +  64  32  16   8   4   2   1
= +42
```
**If the integer is negative**:
1. Represent the number in binary using $n$ bits
2. Flip all bits, i.e., change `0` to `1` and vice versa
3. Check the most significant bit
	- If `1`, the number can be represented
	- If `0`, the number is out of range and must be represented with $n+1$ bits instead
```
  1   1   0   1   0   1   0   1
  -  64  32  16   8   4   2   1
= -42
```
- Fixed number of bits $n$; values range from $-(2^{n-1}) + 1$ to $2^{n-1} - 1$
<!--ID: 1696773990140-->

### Binary arithmetic with the one's complement

- Addition of two positive integers is the same as normal binary addition.
- Subtraction involves addition with the [[Integer_representation#One's complement|one's complement]] representation of negative numbers
<!--ID: 1696773990145-->

## Two's complement

**If the integer is positive**, follow the same procedure as the [[Integer_representation#One's complement|one's complement]] and [[Integer_representation#Sign and magnitude|sign and magnitude]] representations:
1. Represent the number in binary using $n$ bits
2. Check the most significant bit
	- If `0`, the number can be represented
	- If `1`, the number is out of range and must be represented with $n+1$ bits instead
```
  0   0   1   0   1   0   1   0
  +  64  32  16   8   4   2   1
= +42
```
**If the integer is negative**:
1. Represent the number in binary using $n$ bits
2. From **right to left**:
	1. Copy all `0`'s until the first occurrence of `1`, then copy `1`
	2. Flip all remaining bits, i.e., change `0` to `1` and vice versa
	**OR**
	1. Flip all bits, i.e., change `0` to `1` and vice versa
	2. Add `1`
1. Check the most significant bit
	- If `1`, the number can be represented
	- If `0`, the number is out of range and must be represented with $n+1$ bits instead
```
  0   0   1   1   1   1   0   0   # Initial binary representation
  1   1   0   0   0   0   1   1   # Flip each bit
  1   1   0   0   0   1   0   0   # Add 1
  -  64  32  16   8   4   2   1   
```
<!--ID: 1696773990151-->