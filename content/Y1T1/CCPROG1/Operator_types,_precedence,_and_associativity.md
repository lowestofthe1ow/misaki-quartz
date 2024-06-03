---
target-deck: CCPROG1::Operator types, precedence, and associativity
tags: CCPROG1
title: Operator types, precedence, and associativity
---

*See also*: [[Tokens_and_token_classification]]

## Arithmetic operators

C has **arithmetic operators** that perform basic arithmetic operations. **Binary** operators require **two** operands. **Unary** operators require **one**. All binary operators accept integer or floating-point operands (with the exception of `%`, which only takes integers); if at least one operand is a `float`, [[Float_and_integer_operations|then so will be the result]]. Otherwise, the fractional part is truncated and the result is stored as an `int`. Note that the use of `0` as the right operand with `/` or `%` results in undefined behavior.

> In C99, if either operand in a division operation is negative, the result is truncated towards 0 (visually this appears as if the fractional part is simply deleted, i.e. `-9 / 7` results in `-1` rather than `-2`). On the other hand, the result of a modulo operation will take the sign of the **left** operand (hence `9 % 7` results in `-2`). This is because `(a/b) * b + a%b` should be `a`.

- **Unary operators**
	- `+` Unary plus
	- `-` Unary minus
- **Binary operators**
	- ***Additive***
		- `+` Addition
		- `-` Subtraction
	- ***Multiplicative***
		- `*` Multiplication
		- `/` Division
		- `%` Remainder (modulo)
<!--ID: 1694694364107-->

## Relational operators

|**Symbol**|**Meaning**|
|---|---|
|`<`|Less than|
|`>`|Greater than|
|`<=`|Less than or equal to|
|`>=`|Greater than or equal to|

Relational operators in C correspond to the $<$, $>$, $\le$, and $\ge$ operators in mathematics, evaluating to `0` if the expression is false or `1` if it is true. For instance, `10 < 11` evaluates to `1`, while `11 < 10` evaluates to `0`. These operators accept two integers or floating-point numbers as operands (it is thus a binary operator) and associate from left to right; i.e., the expression:

```c
i < j < k
```

—evaluates to:

```c
(i < j) < k
```

—where `i < j` can be `1` or `0`.

<!--ID: 1698043073732-->

### Equality operators

|**Symbol**|**Meaning**|
|---|---|
|`==`|Equal to|
|`!=`|Not equal to|

Equality operators, similar to `<`, `>`, `<=`, and `>=`, evaluate to `0` (false) or `1` (true) and associate from left to right. However, these operators have lower precedence; i.e., the expression:

```c
i < j == j < k
```

—evaluates to:

```c
(i < j) == (j < k)
```

<!--ID: 1698043073744-->

## Logical operators

|**Symbol**|**Meaning**|**Number of operands**|
|---|---|---|
|`!`|Logical NOT|Unary|
|`&&`|Logical AND|Binary|
|<code>\|\|</code>|Logical OR|Binary|

Like relational operators, logical operators produce `0` (false) or `1` (true) as a result. Additionally, however, their operands will be taken as false only if they have a value of 0. Non-zero values are taken as true. As such:

- `!x` will evaluate to `1` if and only if `x` has a value of `0`; otherwise, it will evaluate to `0`.
- `x && y` will evaluate to `1` if and only if `x` and `y` **both** have non-zero values; otherwise, it will evaluate to `0`.
- `x || y` will evaluate to `1` if and only if **either** `x` or `y` has a non-zero value; otherwise, it will evaluate to `0`.</ul>

$$
$$

> `&&` and `||` perform **short-circuit** evaluations of their operands. That is, these operators first evaluate the left operand, then the right operand. If the value of the expression can be deduced from the value of the left operand alone, then the right operand is **not** evaluated (i.e. it is ignored).

<!--ID: 1698043073754-->

## Assignment operators

The assignment operator `=` evaluates to the value of the right operand while storing (copying) this value to its left operand (this is known as a side effect). As such, it requires its left operand to be an **lvalue**, i.e., an object with an accessible memory address, such as a variable. For instance, the following:

```c
x = 2;
```

—is evaluated to (results in) `2` **while** updating the variable `x` to have the value `2`. The right operand in an assignment operation can be a constant, a variable, or a more complicated expression. As such, statements such as:

```c
x = y = 2;
```

—result in `y = 2` being evaluated to `2`which is then stored into `x` (the `=` operator associates from right to left). In other words, both `x` and `y` will now have the value `2`.

> Embedded assignments impact code readability and are discouraged.

<!--ID: 1694694364110-->

### Compound assignment

C provides "shortcut" assignment operators aside from `=` for using a variable's old value to compute its new value. These include `+=`, `-=`, `*=`, `/=`, and `%=`. For example, the statements:

```c
i = i + 2;
```

—and:

```c
i += 2;
```

—result in the same effect. Similarly to `=`, this operation evaluates to the new value of the variable (in this case `i + 2`) and has the side effect of updating the value of said variable.

<!--ID: 1694694364115-->

### Increment and decrement

The statements: 

```c
i = i + 1;
```

—and:

```c
i += 1;
```

—get the value of `i`, add it with `1`, and stores it again to `i`. As a result, if the initial value of `i` is `5`, after executing this statement, it will have the value of `6`. To simplify the increment statement, C allows us to use the increment and decrement operators. The increment operator `++` and the decrement operator `--` both take a single variable (whether integer or floating-point) as its operand:

```c
i++;
```

Furthermore, both `++` and `--` can be used as either **prefix** (e.g. `++i`) or **postfix** (e.g. `i++`) operators. The difference lies in evaluating them as operations: `++i` evaluates to the new value of `i` after the increment ("post-increment"), while `i++` evaluates to the old value ("pre-increment"). In both cases, the variable `i` is incremented by 1 as a side effect.

> The C standard does not specify an exact time for when the postfix `++` and `--` operators increment their operand—only that it is before the next statement is executed. This results in undefined behavior (i.e. unpredictable results) when performing operations such as `++i + i++` where `i` is modified and used in the same statement.

<!--ID: 1694694364113-->

## Operator precedence and associativity

| **Precedence** | **Name** | **Symbol(s)** | **Associativity** |
|---|---|---|---|
| 1 | Array subscripting | `[]` | Left |
| 1 | Function call | `()` | Left |
| 1 | Structure and union member | `. ->` | Left |
| 1 | Increment (postfix) | `++ --` | Left |
| 1 | Decrement (postfix) | `++ --` | Left |
| 2 | Increment (prefix) | `++ --` | Left |
| 2 | Decrement (prefix) | `++ --` | Left |
| 2 | Address | `&` | Right |
| 2 | Indirection | `*` | Right |
| 2 | Unary plus | `+` | Right |
| 2 | Unary minus | `-` | Right |
| 2 | Bitwise complement | `~` | Right |
| 2 | Logical negation | `!` | Right |
| 2 | Size | `sizeof` | Right |
| 3 | Cast | `()` | Right |
| 4 | Multiplicative | `* / %` | Left |
| 5 | Additive | `+ -` | Left |
| 6 | Bitwise shift | `<< >>` | Left |
| 7 | Relational | `< > <= >=` | Left |
| 8 | Equality | `== !=` | Left |
| 9 | Bitwise and | `&` | Left |
| 10 | Bitwise exclusive or | `^` | Left |
| 11 | Bitwise inclusive or | <code>\|</code> | Left |
| 12 | Logical and | `&&` | Left |
| 13 | Logical or | <code>\|\|</code> | Left |
| 14 | Conditional | `?:` | Right |
| 15 | Assignment | <code>= *= /= %= += -= <<= >>= &= ^= \|=</code> | Right |
| 16 | Comma | `,` | Left |

Evaluation of operators should follow a hierarchy of priorities. Evaluate expressions with higher priority operators first. Consider the expression `a ~ b ~ c`. If the operator `~` has left associativity, this expression would be interpreted as `(a ~ b) ~ c`. If the operator has right associativity, the expression would be interpreted as `a ~ (b ~ c)`.

> It can be easier to simplify the order of precedence as:
> 1. Postfix unary operators
> 2. Prefix unary operators (right to left)
> 3. Parentheses (cast)
> 4. Multiplication/division/modulo
> 5. Addition/subtraction
> 6. Relational operators
> 7. Equality
> 8. AND
> 9. OR
> 10. Assignment

<!--ID: 1697898015757-->