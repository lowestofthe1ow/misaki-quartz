---
target-deck: CSADPRG::Names, bindings, and scopes
tags: CSADPRG
title: Names, bindings, and scopes
draft: true
---

## Names

A **name** is a string of characters that identify some entity.

>[!info] Not all variables have names. Some are **anonymous**.

<!--ID: 1727924287865-->

### Design issues

- Case sensitivity
- Name length
- Keywords and reserved words
<!--ID: 1727924287867-->

### Special words

Makes programs more readable; names actions to be performed. In most languages, they are classified as [[Tokens_and_token_classification#Keywords|reserved words]] (notable exception being Fortran)

<!--ID: 1727924287870-->

## Variable

**Variables** are an **abstraction** of computer memory cells or a collection of cells. They serve to replace absolute numeric memory addresses for data with names.
<!--ID: 1727924287873-->

### Variable attributes

Name, address, type, value, lifetime, scope

<!--ID: 1727924287876-->

### Address (l-value)

This is the memory address that the variable is associated with

A variable may have different addresses at different times in execution.

**We can have multiple addresses as the same variable**.
<!--ID: 1727924287879-->

### Type

Range of values that can be stored

<!--ID: 1727924287881-->

### Value (r-value)

The value stored at the address

<!--ID: 1727924287884-->

## Binding

**Binding** is the association between an attribute and an entity
<!--ID: 1727924287886-->

### Language design time

Bind operator symbols to operators and reserved words to actions

<!--ID: 1727924287889-->

### Language implementation time

Data type is bound to a range of values

Bind integer types to a range of values

<!--ID: 1727924287892-->

### Compile time

In Java, a variable is bound to a data type during compile time

<!--ID: 1727924287896-->

### Load time

<!--ID: 1727924287899-->

### Link time

<!--ID: 1727924287902-->

### Run time

Bind a nonstatic variable to a memory cell

![[Pasted image 20240918080325.png]]

<!--ID: 1727924287906-->

## Static type binding

<!--ID: 1727924287909-->

### Explicit declaration

<!--ID: 1727924287912-->

### Implicit declaration

**Default conventions**
<!--ID: 1727924287914-->

## Allocation

Getting a memory cell

<!--ID: 1727924287917-->

## Deallocation

Putting a memory cell back into the pool

<!--ID: 1727924287920-->

## Lifetime

The time wherein a variable is bound to a particular memory cell

<!--ID: 1727924287924-->

## Static variables 

Static variables are bound to memory before execution

<!--ID: 1727924287927-->

## Scope

The range of statements wherein a variable is **visible**.

<!--ID: 1727924287931-->
