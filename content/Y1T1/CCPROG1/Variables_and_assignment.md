---
target-deck: CCPROG1::Variables and assignment
tags: [CCPROG1]
title: Variables and assignment
---

## Variables

Variables are entities that can store a value that can be changed during the execution of a program. They have accessible memory addresses and as such can be used as the left operand in an assignment operation. These can be of different [[Data_representation#Data types|types of data]]. They can store constant values/literals or some type of structured data, which can contain one or more values or data.

<!--ID: 1694694364092-->

### Declaration

Variables are usually **declared** before the start of the program code. The variable declarations tell the C compiler what type of data will be stored in each variable and how that data will be represented in memory. Variables must be declared before they are used. The syntax for declaring variables are as follows:

```
<data type> <variable or variable list>
```

For instance, a variable `num` with type `int` will be declared as follows:

```c
int num;
```

A series of variables of the same type can be declared at the same time. To do this, the variables are separated by commas:

```c
int num1, num2;
float flo1, flo2;
```

Although the following example shows that multiple variables in one declaration statement are possible, **it is still best to declare one variable per declaration statement for readability.**

<!--ID: 1698042781744-->

#### Initialization

Variables that do not have a default value and have not been assigned one are said to be **uninitialized**. A variable may be initialized by [[Operator_types,_precedence,_and_associativity#Assignment operators|assigning]] it a value during its declaration:

```c
int num = 1;
```

Several initializations (for variables of the same type) may be performed in one statement, separated by commas:

```c
int num1 = 1, num2 = 2, num3 = 3;
```

> Attempting to access the value of an uninitialized variable will result in **garbage** (unpredictable) values.

<!--ID: 1698042781753-->

### Assignment

Once a variable has been declared, it can be [[Operator_types,_precedence,_and_associativity#Assignment operators|assigned]] a value.

<!--ID: 1698042781760-->

### Data type ranges

|**Data type**|**Range**|
|---|---|
|`int`|-2147483648 to +2147483647|
|`long`|-2147483648 to +2147483647|
|`float`|3.4e-38 to 3.4e38|
|`double`|1.7e-308 to 1.7e308|

[[Data_representation#Data types|Data types]] in C store values within specific ranges. The type affects how the variable is stored and what operations can be performed on the variable.

At the moment, the data types that we consider are [[Data_representation#Integers|integers]], [[Data_representation#Floating-point numbers|floating-point numbers]], and [[Data_representation#Characters|characters]].

The keywords `int` or `long` are used to define the integer data type:

```c
int x = 1;
```

On the other hand, `float` and `double` are used to define floating-point numbers or double-precision numbers (the difference is in the range of numbers it can accommodate):

```c
float x = 1.0;
double y = 1.0;
```

A **character** data type is denoted by the keyword `char`. It requires one byte of memory space and the range of values is from `0` to `255` encoded in [[Character_representation#ASCII|ASCII]].

```c
char x = 'a';
```

The amount of memory space required to store an `int`, a `float`, and `double` are platform-dependent (i.e., depends on the machine and the software). The table shown above is for Linux systems.

<!--ID: 1694694364095-->
