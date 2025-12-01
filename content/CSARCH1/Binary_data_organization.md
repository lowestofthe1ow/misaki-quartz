---
target-deck: CSARCH1::Binary data organization
tags: [CSARCH1]
title: Binary data organization
---

## Binary data organization
<!--ID: 1738398842344-->

### Bit

A **bit** is 2 cells: 0 or 1.
<!--ID: 1738398842347-->

### Crumb

A **crumb** is 2 bits. It is largely a defunct term and is rarely used.
<!--ID: 1738398842349-->

### Nibble

A **nibble** is 4 bits or **one hex digit**. It is also one BCD digit.
<!--ID: 1738398842350-->

### Byte

A **byte** is 8 bits and is the smallest addressable data unit in most computer architectures.
<!--ID: 1738398842352-->

#### $2^x$ vs $10^y$

SI prefixes (e.g. kilo-, abbreviated as KB) use a decimal base ($10^x$, so a kilobyte is $10^3$ bytes). Its binary prefix counterpart (e.g. kibi-, abbreviated as KiB) instead uses a binary base ($2^y$). Note that $y = \frac{10x}{3}$.

>[!important] Binary prefixes are generally only used when referring to memory capacity.
<!--ID: 1738398842354-->

### Half Word

A **half word** is 16 bits. The definition of a word is architecture-dependent.
<!--ID: 1738398842356-->

### Word

A **word** is 32 bits. A 32-bit architecture considers 1 word as 32 bits.
<!--ID: 1738398842359-->

## Bit significance

Consider the 8 bits forming a byte numbered as follows:

```
Bit | 7 6 5 4 3 2 1 0
      ^MSb          ^LSb
```

Bit **7** is the **most significant bit** (MSb; note the lowercase b) while bit **0** is the **least significant bit** (LSb).

>[!important] The concept of significance can be extended to other units of binary data, such as nibbles and bytes. In the case of the latter, we use the notation MSB for the most significant byte (note capitalization) and LSB for the least.
<!--ID: 1738398842364-->

## Endianness

**Endianness** refers to the convention used to interpret the order of bytes when storing multi-byte values in computer memory.
<!--ID: 1738398842367-->

### Little endian

Following the **little endian** byte ordering system, the **least significant byte** is stored at the **first** (lowest) memory address, followed by the other bytes in ascending significance.
<!--ID: 1738398842369-->

### Big endian

Following the **big endian** byte ordering system, the **most significant byte** is stored at the **first** (lowest) memory address, followed by the other bytes in descending significance.
<!--ID: 1738398842371-->
