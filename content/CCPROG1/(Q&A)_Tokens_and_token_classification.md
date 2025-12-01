---
target-deck: CCPROG1::Tokens and token classification::Q&A cards
tags: [CCPROG1]
title: (Q&A) Tokens and token classification
---

*See also*: [[Tokens_and_token_classification|Tokens and token classification]]

## What is a variable?

A [[Tokens_and_token_classification#Variables|variable]] is an entity that is used to store data. It is the name that the programmer uses to indicate what space in the memory he wants to access. For this space to be accessed, it should be reserved first. Reserving a memory space and giving it a name is called a variable declaration. The type of data (data type) to be stored in the memory will indicate how much space is going to be reserved. Each variable has a name, an associated physical memory space (in RAM), a data type, a value, a scope, and a lifetime.
<!--ID: 1694694364061-->

## What is a data type?

A [[CCICOMP/Data_representation#Data types|data type]] specifies information regarding how data is stored in a variable.
<!--ID: 1694694364064-->

## Can I use any name for the variables?

Yes, as long as you follow the [[Tokens_and_token_classification#Identifiers|naming conventions]], and do not use the [[Tokens_and_token_classification#Keywords|reserved words]] in C. It is recommended, however, as a good programming practice, for you to use a name that is descriptive or suggestive, and follow some coding standards.
<!--ID: 1694694364067-->

## What is the value of the variable initially?

By default, the value of a variable is garbage, i.e., there is something stored in that memory space but that something unknown. Using variables with garbage values will cause [[Problem_analysis,_logic_formulation_and_flowcharting#Logical errors|logical errors]].
<!--ID: 1694694364071-->

## What will happen if I assigned a value whose data type is different from the data type of the receiving variable?

The value will be converted. In general, [[Float_and_integer_operations|one that requires smaller memory will fit into the variable with a larger space]]. The opposite will result to loss of information (which could cause a logical error). The basic rules of data type conversion are as follows:

- **_int_** to **_float/double_**: value will be converted to a floating-point value
- _**float/double**_ to _**int**_: the fractional part is dropped or **_truncated_**
- _**char**_ to **_int/float/double_:** the char value (based on ASCII character set) will be converted automatically to int/float/double with no problem
- **_int_** to **_char_**: if the int value is within the possible range of char values (0 – 255) then that value is assigned and converted to the ASCII character equivalent; otherwise, the value assigned could be unpredictable
- **_float/double_** to _**char**_: the fractional part will be discarded and with the whole number part, the same rule as int to char will be applied
<!--ID: 1694694364074-->
