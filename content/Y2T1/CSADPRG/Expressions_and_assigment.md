---
target-deck: CSADPRG::Expressions and assignment
tags: [CSADPRG]
title: Expressions and assignment
---

## Arithmetic expressions

One of the primary goals of the first high-level languages was the **automatic evaluation** of **arithmetic expressions**; as such, most conventions were inherited from mathematics. These expressions consist of:

- Operators (unary, binary, or ternary)
- Operands
- Parentheses
- Function calls

>[!info] Most programming languages use **infix** notation, where the operators are between operands. However, others such as LISP implement **prefix** notation expressions.

<!--ID: 1733233618065-->

### Operator precedence

**Operator precedence** defines the order in which adjacent operators of **different** precedence levels are evaluated (e.g. `+` and `*`). This follows from the mathematical concept of placing operators in a specific hierarchy, or PEMDAS.

The typical precedence order is:

1. Exponentiation (highest)
2. Multiplication, division
3. Addition, subtraction (lowest)
<!--ID: 1733233618073-->

### Operator associativity

**Operator associativity** defines the order in which adjacent operators of the **same** precedence levels are evaluated. When there are two adjacent operators, an operator may have either **left** or **right** associativity (which dictates whether the left or right operator is evaluated first).

Associativity is typically **left-to-right**, save for the **exponentiation** operator (which is typically right-to-left).

>[!warning] **Parentheses** override precedence and associativity rules.
>A programming language could also simply force the usage of parentheses instead of defining precedence and associativity. However, that would make writing more tedious.

>[!info] Notes on specific programming languages
>- **APL** only implements left-to-right associativity
>- **Ruby** implements all arithmetic, relational, and assignment operators are implemented as **methods** (that is, `a + b` calls the `+` method of `a` passing `b` as a parameter)
>- **LISP** assigns subprograms to perform all arithmetic and logic operators.

<!--ID: 1733233618082-->

### Function side effects

**Function side effects** occur when a function changes either a value referenced by one of its parameters or a global variable. Consider the expression:

```
a + fun(a)
```

The final value of the expression depends on whether the call to `fun(a)` modifies the value of `a`.

>[!info] Function side effects are not present in mathematics and functional programming languages

<!--ID: 1733233618090-->

### Overloading

**Overloading** refers to multiple uses of an operator. They are generally viewed to be acceptable as long as it does not hinder readability or reliability.

```python
x = 2.0 + 3.0         
<!--ID: 1733233618098-->
# Arithmetic addition
x = "Hello" + "World" # String concatenation
```

>[!warning] Overloading can be detrimental to readability as errors may go undetected at compile time.

Some languages allow the programmer to manually overload certain symbols; however, this would mean that nothing prevents a user from defining `+` to mean multiplication, for instance.

<!--ID: 1733233618107-->

### Type conversions

**Type conversions** may either be **narrowing** (unsafe) or **widening** (unsafe). The "narrowing" or "widening" being referred to is the capability of the data type to store data; an `int`, for example, cannot store all the data of a `float`. Casting an `int` to a float would then be **widening**, while vice versa would be **narrowing**.
<!--ID: 1733233618115-->

#### Coercion

**Coercion** is an **implicit** type conversion initiated by the compiler or runtime system. They usually occur in **mixed-mode expressions**, which combine operands of different types.
<!--ID: 1733233618123-->

#### Casting

**Casting** is an **explicit** type conversion that allows programmers to "force" a conversion of types.
<!--ID: 1733233618131-->

#### Errors

**Errors** are typically critical in nature and may require that the program be completely stopped. Errors that may be caught and recovered from are referred to as **exceptions**, which occur typically occur during runtime.
<!--ID: 1733233618139-->

## Relational expressions

**Relational expressions** have two operands and one relational operator. Usually results in a Boolean value, except when it is not supported (as in C); in this case, they usually return an integer. Relational operators always have lower precedence than arithmetic operators.
<!--ID: 1733233618147-->

#### Boolean expressions

**Boolean expressions** consist of Boolean variables, constants, relational expressions, and Boolean operators (usually `AND`, `OR`, or `NOT`).
<!--ID: 1733233618155-->

### Short-circuit evaluation

**Short-circuit evaluation** occurs when the result is determined **without** evaluating the entire expression. This is usually the case when the final result can already be inferred from a portion of the expression, such as when multiplying by zero or having a false argument in an `AND` expression.

>[!info] Arithmetic shortcuts are hard to detect during execution.

<!--ID: 1733233618163-->

## Assignment statement

An **assignment statement** changes the bindings of values to variables

.

<!--ID: 1733233618171-->
