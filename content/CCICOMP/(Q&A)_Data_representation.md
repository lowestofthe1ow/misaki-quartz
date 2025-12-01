---
target-deck: CCICOMP::Data representation::Q&A cards
tags: [CCICOMP]
title: (Q&A) Data representation
---

*See also*: [[CCICOMP/Data_representation|Data representation]]

## Represent $+24$ in 6-bit sign-and-magnitude

```
  0   1   1   0   0   0
  +  16   8   4   2   1
```
<!--ID: 1696773990159-->

## Represent $+24$ in 6-bit one's complement

```
  0   1   1   0   0   0
  +  16   8   4   2   1
```
<!--ID: 1696773990163-->

## Represent $+24$ in 6-bit two's complement

```
  0   1   1   0   0   0
  +  16   8   4   2   1
```
<!--ID: 1696773990169-->

## Represent $-30$ in 8-bit sign-and-magnitude

```
  1   0   0   1   1   1   1   0
  -  64  32  16   8   4   2   1
```
<!--ID: 1696773990173-->

## Represent $-30$ in 8-bit one's complement

```
  0   0   0   1   1   1   1   0
  1   1   1   0   0   0   0   1
  -  64  32  16   8   4   2   1
```
<!--ID: 1696773990176-->

## Represent $-30$ in 8-bit two's complement

```
  0   0   0   1   1   1   1   0
  1   1   1   0   0   0   1   0
  -  64  32  16   8   4   2   1
```
<!--ID: 1696773990179-->

## Compute the range for 10-bit sign-and-magnitude

$$
-(2^{n-1}) + 1, 2^{n-1} - 1
$$

$$
-(2^9) + 1, 2^9 - 1
$$

$$
-511, +511
$$
<!--ID: 1696773990183-->

## Compute the range for 10-bit one's complement

$$
-(2^{n-1}) + 1, 2^{n-1} - 1
$$

$$
-(2^9) + 1, 2^9 - 1
$$

$$
-511, +511
$$
<!--ID: 1696773990187-->

## Compute the range for 10-bit two's complement

$$
-(2^{n-1}), 2^{n-1} - 1
$$

$$
-(2^9), 2^9 - 1
$$

$$
-512, +511
$$
<!--ID: 1696773990191-->

## What is the normalized form for IEEE SP?

$$
\pm1.M\times2^{E'-127}
$$
<!--ID: 1697030404033-->

## What is the normalized form for IEEE DP?

$$
\pm1.M\times2^{E'-1023}
$$
<!--ID: 1697030404041-->

## What is the bit distribution for IEEE SP?

|Symbol|Component|Bit size|
|---|---|---|
|S|Sign bit|1 bit|
|E'|Exponent|8 bits|
|M|Mantissa|23 bits|

*Example*:

```
SEEE EEEE EMMM MMMM MMMM MMMM MMMM MMMM
Hex:
HHHH HHHH
```
<!--ID: 1697030404046-->

## What is the bit distribution for IEEE DP?

|Symbol|Component|Bit size|
|---|---|---|
|S|Sign bit|1 bit|
|E'|Exponent|11 bits|
|M|Mantissa|52 bits|

*Example*:

```
SEEE EEEE EEEE MMMM MMMM MMMM .... MMMM
Hex:
HHHH HHHH HHHH HHHH
```
<!--ID: 1697030404051-->
