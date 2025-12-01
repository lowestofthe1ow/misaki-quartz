---
target-deck: CSARCH2::Unicode
tags:
  - CSARCH2
title: Unicode
---

## Character representation
<!--ID: 1750164579879-->

### Unicode
<!--ID: 1750164579881-->

#### UTF-8

- **UTF-8** is a **variable-length** encoding that can represent characters with 1 to 4 bytes.
	- 1 byte (an 8-bit unit) is also called an **octet**

1. Determine the number of bits in the code point.
2. If the code point can be represented in **one** byte, the MSb of this byte is `0`.
	- Otherwise, put a `1` for every byte needed to represent the full code point, followed by a `0`, e.g. the most significant bits for a code point that needs **two** bytes to be represented would be `110`.
3. All other bytes will start with `10`. Fill in the remaining bits with the binary representation of the code point.
4. Pad zeroes to the left if necessary.

![[Unicode.png]]
<!--ID: 1750164579883-->

### UTF-16

- **UTF-16** is a variable length encoding with either 1 or 2 16-bit code units called **wydes**.

1. `U+0000` to `U+FFFF` may be represented as-is (they only require one wyde).
2. Otherwise, subtract `0x10000` from the code point.
3. Add `0xD800` to the ten most significant bits in the result to obtain the first wyde (the **high surrogate**).
4. Add `0xDC00` to the ten least significant bits in the result to obtain the second wyde (the **low surrogate**).
<!--ID: 1750164579885-->

### UTF-32

- **UTF-32** uses a fixed 32-bit encoding for each code unit (e.g. just use the binary representation with padded zeroes where necessary).
<!--ID: 1750164579886-->
