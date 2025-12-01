---
target-deck: CSARCH1::Binary coded decimal
tags: [CSARCH1]
title: Binary coded decimal
---

## Binary codes

Binary codes are an alternative way of representing numbers by **coding** each decimal digit separately.
<!--ID: 1738398842308-->

### Binary coded decimal (BCD)

Binary coded decimal (BCD) simply codes each decimal digit to its binary representation. It is also known as the 8-4-2-1 code.
<!--ID: 1738398842317-->

### Self-complementing codes

A **self complementing code** means that the binary code representation for any pair of decimal digits $x$ and $9 - x$ are complementary (i.e., add up to `1111`). For a **weighted** code to be self-complementary:

1. The weights must add up to 9
2. Digits 1 to 4 are representable[^1]

The only non-weighted self-complementing code is **excess-3**.
<!--ID: 1738398842321-->

#### 2-4-2-1

**2-4-2-1** is a **weighted, self-complementing** code that sets 2, 4, 2, 1 as weights for each bit instead of the standard 8-4-2-1.
<!--ID: 1738398842324-->

#### Excess-3

**Excess-3** is a non-weighted self-complementing code that simply shifts the binary representation of each digit by 3.
<!--ID: 1738398842327-->

#### 8-4-(-2)-(-1)

**8-4-(-2)-(-1)** is a weighted self-complementing code that uses weights of 8, 4, -2, and -1.
<!--ID: 1738398842330-->

[^1]: This is the [subset sum problem](https://en.wikipedia.org/wiki/Subset_sum_problem).
