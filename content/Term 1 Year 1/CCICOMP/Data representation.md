---
target-deck: CCICOMP::Data representation
tags: CCICOMP
---

![[CCICOMP 3.3 Data Representation - Integers.pdf]]

Computer systems represent data electrically and process it with electrical switches with 2 states (on / off) that express [[Introduction to number systems#Binary number system|binary data]]. Computers deal with all sorts of non-numeric data (e.g. strings, images, video), but they are internally still represented by a set of binary numeric values.

## Factors for representation

### Data size and Range

Data size describes the number of bits ([[Introduction to number systems#Binary number system|from "binary digit"]]) used to represent a numeric value which directly affects the range of values that can be represented. **Smaller size indicates a smaller range**. 
<!--ID: 1695735170747-->

### Accuracy

**Accuracy** or **precision** of representation increases with the number of data bits used. Some calculations can generate quantities too large or too small to be contained in a machine’s finite circuitry (e.g. `1 / 3` = `1.3333…`), meaning it must be stored as an approximate finite value. More bits leads to less error but consumes more space.
<!--ID: 1695735170756-->

## Data types

A data type specifies:
- the kind of values that can be assumed by a variable of that type
- the [[Tokens and token classification#Data type ranges|range]] of values that can be assumed by a variable of that type
- the amount of memory (in bytes) needed by a variable to store a value of that type
Includes **integers**, **floating-point numbers**, **characters**, **strings**
<!--ID: 1695735170760-->

### Integers

- Represents numerical **integers**, i.e., the number zero, a positive natural number or a negative integer with a minus sign.
- Typically represented as **fixed-point**, i.e., with a **finite** amount of decimal precision.
	- This means, as opposed to [[#Floating-point numbers|floating-point numbers]], the radix point is fixed in its position to the right of the least significant bit.
<!--ID: 1695735170763-->

#### Unsigned integers

- Positive integers only
- Fixed number of bits $n$; values range from 0 to $2^n - 1$
```
___ ___ ___ ___ ___ ___ ___ ___   .
128  64  32  16   8   4   2   1 radix
```
<!--ID: 1695813839293-->

#### Signed integers

- Positive or negative integers
- Different representations using $n$ bits
	- [[Integer representation#Sign and magnitude|Sign and magnitude]]
	- [[Integer representation#One's complement|One's complement]]
	- [[Integer representation#Two's complement|Two's complement]]
<!--ID: 1695735170767-->

### Floating-point numbers

- "Floating" or moving radix point
- Single-precision (32-bit)
- Double precision (64-bit)
<!--ID: 1695735170771-->

### Characters

- English and many other languages use alphabetic letters, numerals, punctuation marks, and a variety of other special-purpose symbols, such as $ and &. (each symbol is a character).
- Encoded through various [[Character representation#Coding methods|coding methods]].
<!--ID: 1695735170774-->

### String

- Series of characters, stored in C as an array of [[#Characters|characters]]. For instance, the string `Hello!` encoded using [[Character representation#American Standard Code for Information Interchange (ASCII)|ASCII]] is stored as `48 65 6C 6C 6F 21`.
<!--ID: 1695735170778-->

### Boolean

- True or false, expressed as 0 (**false**) or 1 (**true**)
- When the processing function is a comparison operation, the output signal represents a Boolean result which is often used by other instructions as input (e.g. a conditional branch in a program).
- The Boolean data type requires only a single bit for representation, but to simplify processor design and implementation, most CPU designers use an integer coding format to represent Boolean values.
	- Corresponding integer value of zero is processed as **false**
	- **Any** nonzero value is processed as **true**
<!--ID: 1695735170781-->

## Binary representation

- Positional number system used by computers to represent any form of data
- Uses radix or base 2 (0 = off, 1 = on)
- Binary numbers represented as on/off electrical signals can be transported reliably between computer systems and their components
- Binary numbers represented as electrical signals can be processed by two-state electrical devices that are easy to design and fabricate
- Correspond directly with **Boolean logic** – a form of logic that evaluates sequences of statements as ‘**true**’ or ‘**false**’
<!--ID: 1695735170784-->