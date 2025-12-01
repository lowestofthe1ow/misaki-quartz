---
target-deck: CCICOMP::Data representation::Floating-point representation
tags: [CCICOMP]
title: Floating-point representation
---

*See also*: [[CCICOMP/Data_representation|Data representation]]

## IEEE Single Precision

![[Floating-point_representation_-_IEEE_Single_Precision.png]]

Normalized form: $\pm1.M\times2^{E'-127}$

1. Represent the number in binary

```
-6.0625d = -110.0001b
```

2. Get the normalized form: $\pm1.M\times2^{E'-127}$

```
Normalized form: -1.100001*2^2
```

3. Identify $S$ (1 bit), $E'$ (8 bits), and $M$ (23 bits), then represent as needed by padding zeros to the right.

```
S  = 1
E' = 2 + 127 = 129 = 1000 0001
M  = 100001 + trailing zeroes = 100 0010 0000 0000 0000 0000
```

Representation in binary:

```
SEEE EEEE EMMM MMMM MMMM MMMM MMMM MMMM
1100 0000 1100 0010 0000 0000 0000 0000
```

Representation in hexadecimal:

```
1100 0000 1100 0010 0000 0000 0000 0000
   C    0    C    2    0    0    0    0
= COC2 0000h
```
<!--ID: 1696942838690-->

## IEEE Double Precision

![[Floating-point_representation_-_IEEE_Double_Precision.png]]

Normalized form: $\pm1.M\times2^{E'-1023}$

1. Represent the number in binary

```
9.625d = 1001.101b
```

2. Get the normalized form: $\pm1.M\times2^{E'-1023}$

```
Normalized form: 1.001101*2^3
```

3. Identify $S$ (1 bit), $E'$ (11 bits), and $M$ (52 bits), then represent as needed by padding zeros to the right.

```
S  = 0
E' = 2 + 1023 = 1026 = 100 0000 0010
M  = 001101 + trailing zeroes
```

Representation in binary:

```
SEEE EEEE EEEE MMMM MMMM MMMM .... MMMM
0100 0000 0010 0011 0100 0000 .... 0000
```

Representation in hexadecimal:

```
0100 0000 0010 0011 0100 0000 .... 0000
   4    0    2    3    4    0 ....    0
= 4023 4000 0000 0000
```
<!--ID: 1696942838697-->
