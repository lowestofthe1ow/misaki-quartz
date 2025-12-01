---
target-deck: CCICOMP::Data representation::Boolean, logic gates, and bitwise operations
tags: [CCICOMP]
title: Boolean, logic gates, and bitwise operations
---

*See also*: [[CCICOMP/Data_representation|Data representation]]

## Logic operations

| Operation | Input  | Symbol                             | Output                |
| --------- | ------ | ---------------------------------- | --------------------- |
| Buffer    | $A$    | ![[Logic_operations_-_Buffer.png]] | $A$                   |
| NOT       | $A$    | ![[Logic_operations_-_NOT.png]]    | $\bar{A}$             |
| AND       | $A, B$ | ![[Logic_operations_-_AND.png]]    | $AB$                  |
| OR        | $A, B$ | ![[Logic_operations_-_OR.png]]     | $A+B$                 |
| NAND      | $A, B$ | ![[Logic_operations_-_NAND.png]]   | $\bar{AB}$            |
| XOR       | $A, B$ | ![[Logic_operations_-_XOR.png]]    | $\bar{A}B + A\bar{B}$ |

Logic operations based on Boolean algebra may be used on Boolean data to produce a result of either **true** (`1`) or **false** (`0`). They form the basis of logic gates - circuits serving as basic building blocks of CPU that can perform a processing function on a single binary electrical signal, or bit.
<!--ID: 1697040470260-->

### NOT operation

|A|Y|
|---|---|
|0|1|
|1|0|

A **NOT** operation negates the input expression and is also referred to as an **inverter**.

Written as $Y=A'$ or $Y=\bar{A}$.
<!--ID: 1697027598861-->

### AND operation

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

The **AND** operation is also known as an “**all or nothing**” gate since it will only output a true condition if all its inputs are true.

Written as $Y=AB$.
<!--ID: 1697027598867-->

### OR operation

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

The **OR** operation is often referred to as an “**any or all**” gate. It outputs a true condition if at least one of its conditions is true.

Written as $Y=A+B$.
<!--ID: 1697027598873-->

### XOR operation

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|

The **XOR** operation is also known as **exclusive-OR**. It outputs a true condition if the input variables have an odd number of binary 1’s (**odd function**).

Written as $Y=A \oplus B$, or [[Boolean,_logic_gates,_and_bitwise_operations#Boolean functions|represented]] in terms of [[Boolean,_logic_gates,_and_bitwise_operations#AND operation|AND]], [[Boolean,_logic_gates,_and_bitwise_operations#OR operation|OR]], and [[Boolean,_logic_gates,_and_bitwise_operations#NOT operation|NOT]] as $Y=A'B + AB'$.
<!--ID: 1697027598879-->

## Bitwise operations

On computers, logic operators are often implemented as bitwise operations which perform logic operations on individual bits of a bit string.
<!--ID: 1697027598885-->

### Bitwise NOT

A [[Boolean,_logic_gates,_and_bitwise_operations#NOT operation|NOT]] operation flips individual bits (e.g. for getting [[Integer_representation#One's complement|one's]] and [[Integer_representation#Two's complement|two's complement]]):

```
NOT 1111 0011b
  = 0000 1100b
```
<!--ID: 1697027598889-->

### Bitwise AND

An [[Boolean,_logic_gates,_and_bitwise_operations#AND operation|AND]] operation checks each pair of bits and returns 1 for that pair if both are true. This is used for checking if a number is odd, e.g.:

```
    0010 0011b
AND 0000 0001b
  = 0000 0001b (true; odd)
```
<!--ID: 1697027598892-->

## Boolean functions

A Boolean function is an expression formed with binary variables, binary or unary operators, parentheses, and an equal sign. The result of the function can be either 0 or 1, e.g.:

$$
F = \bar{X}\bar{Y}Z + X\bar{Y}\bar{Z} + \bar{X}YZ + X\bar{Y}Z
$$

Complex binary operations can be expressed as Boolean functions which can later be used as basis to design the processing circuits of a CPU.
<!--ID: 1697027598897-->

### Single-bit adder

|A|B|Sum|Carry|
|---|---|---|---|
|0|0|0|0|
|0|1|1|0|
|1|0|1|0|
|1|1|0|1|

Given that single-bit binary addition works as shown above, the **sum** may be represented as $A'B+AB'$ ("'NOT **A**' AND '**B**'" OR "'**A**' AND 'NOT **B**'"), while the **carry** may be represented as $AB$ (**A** AND **B**).
<!--ID: 1697027598902-->
