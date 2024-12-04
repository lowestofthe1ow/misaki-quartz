---
target-deck: CSADPRG::Subprograms
tags: [CSADPRG]
title: Subprograms
---

## Subprograms

Programming languages support **subprograms**, which are a reusable section of code with a single entry point. Subprograms halt the execution of the calling program, only returning control when the execution of the subprogram terminates.

>[!info] Note that **process abstraction** is one of the fundamental abstraction facilities in a programming language.
>Subprograms enable this by hiding the statements in a given process (the implementation details are abstracted away from the programmer).

<!--ID: 1733233617927-->

### Definition

A **subprogram definition** describes the interface to and the possible actions of a subprogram.

<!--ID: 1733233617936-->

#### Parameter profile

A **parameter profile** is the number, order, and types of a subprogram's formal parameters. It is also sometimes known as a **signature**.

<!--ID: 1733233617944-->

#### Protocol

A subprogram's **protocol** is the parameter profile plus the return type (if it is a function).

<!--ID: 1733233617952-->

#### Subprogram declaration

A **subprogram declaration** includes the protocol, but not the body of the subprogram (also known as **prototypes**).

<!--ID: 1733233617960-->

### Subprogram call

A **subprogram call** is an explicit request to execute a subprogram. A subprogram that is currently executing is known as **active**.

<!--ID: 1733233617968-->

### Subprogram header

A **subprogram header** specifies that the syntactic unit is a subprogram, providing its name if it is not anonymous. It may also specify a list of **parameters** (values passed to the subprogram).

```c
void myFunction(parameters) ...
```

<!--ID: 1733233617975-->

### Subprogram body

The **subprogram body** defines the **actions** of the subprogram. It is composed of the statements that are executed when the subprogram is called.

<!--ID: 1733233617983-->

### Parameters

Parameters are arguments (data) passed to a subprogram.

<!--ID: 1733233617991-->

#### Formal parameters

**Formal parameters** are found in the header and are usually thought of as **dummy variables** used in the subprogram.
<!--ID: 1733233617999-->

#### Actual parameters

**Actual parameters** are the actual values used in the call to a subprogram.
<!--ID: 1733233618007-->

#### Keyword parameters

**Keyword parameters** include the name of the formal parameter and the actual parameter. Once a keyword parameter occurs in a call to a subprogram, all parameters after must be keyword parameters as well (i.e. they can no longer be positional).
<!--ID: 1733233618016-->

#### Positional parameters

**Positional parameters** distinguish the parameters by their **position**.
<!--ID: 1733233618023-->

### Closure

**Closure** refers to a nested subprogram and its referencing environment.
<!--ID: 1733233618031-->

## Procedures

**Procedures** are a subcategory of subprograms that do not directly return a value. However, procedures may still produce results through non-formal parameter values that are still visible outside of the scope of the procedure or through formal parameters that allow for data transfer.
<!--ID: 1733233618039-->

## Functions

**Functions** resemble procedures but are semantically modeled after mathematical functions in that they return a value (the output). If it is a faithful model, then the function would ideally have **no** side effects and produce a value only through its return value.

The **value** produced by a function'

<!--ID: 1733233618048-->

## Parameter passing

**Parameter passing** refers to how parameters are transmitted and from the called subprograms. They may receive data from the corresponding actual parameter (**in** mode), transmit data **to** the actual parameter (**out** mode), or do both (**inout** mode).

>[!info] Languages such as Perl have actual parameters placed in a predefined array named `@_`. Python and Ruby, being object-oriented, treat all data values as objects and thus assign the actual parameter to the formal parameter ("pass by assignment").

<!--ID: 1733233618057-->

### Value

In **pass by value**, the value of the actual parameter **initializes** the formal parameter. Pass by value is fast for linkage cost and access time for scalar values; however, additional storage must be allocated for copies. It may be large depending on the size of the parameter.

Pass by value is an implementation model for **in-mode** parameters.

>[!info] Programming language implementations
>- C and Java strictly implement pass by value, but pass by reference is **simulated** with pointers (in C's case) or reference types (in Java's case).
>- C# implements pass by value by default, but implements pass by reference with `ref`.

<!--ID: 1733291718432-->
<!--ID: 1733291718435-->

### Result

In **pass by result**, the formal parameter still acts as a variable local to the function. However, right before control is passed back to the caller, the value of this local variable is assigned back to the actual parameter in the caller (which **must** be a variable, not a literal).

Pass by result is an implementation model for **out-mode** parameters.

>[!warning] Passing by result can result in actual parameter collisions.
>This usually occurs when the same actual parameter is passed more than once to the function.

>[!info] Programming language implementations
>- C# allows for out-mode parameters.

<!--ID: 1733291718438-->

<!--ID: 1733291718440-->

### Value-result

**Pass by value-result** is a **combination** of pass by value and pass by result. It is sometimes also known as **pass by copy**. Here, the value of the actual parameter initializes the formal parameter (the local copy), as in pass by value. When control is returned to the caller, the value of the formal parameter is copied back into the actual parameter in the caller, as in pass by result.

Pass by value-result is an implementation model for **inout-mode** parameters.

<!--ID: 1733291718443-->

### Reference

**Pass by reference** transmits an **access path** to the subprogram. In other words, the subprogram gains direct access to the memory cell bound to a variable, even when it would be out of its scope. This optimizes time and space, but may result in slower accesses.

Pass by reference is an implementation model for **inout-mode** parameters.

>[!info] Programming language implementations
>- C#'s `ref` keyword can specify pass by reference.
>- PHP can specify pass by reference in the actual or formal parameter.

<!--ID: 1733291718446-->

### Name

**Pass by name** textually substitutes all occurrences of the formal parameter in the subprogram with the actual parameter. The formal parameter is bound to an **access method** at the beginning of the subprogram call; it is not bound to a value until it is assigned or referenced.

Pass by reference is an implementation model for **inout-mode** parameters.

>[!warning] Pass by name is difficult to read and understand and is thus not part of any widely used programming language.

<!--ID: 1733291718449-->

### Multi-dimensional arrays

C-like languages may require that **multi-dimensional arrays** passed as parameters be passed in a way that allows the compiler to build the mapping function for that array.

<!--ID: 1733291718452-->

## Subprograms passed as parameters

Subprograms passed as parameters must resolve the referencing environment for the subprogram. Binding may be **shallow**, **deep**, or **ad-hoc**.

<!--ID: 1733291718455-->

### Shallow binding

**Shallow binding** means that the referencing environment for a nested subprogram is within the scope of the subprogram that **executes** it.

>[!info] Shallow binding is more natural in **dynamically-scoped** languages.

<!--ID: 1733291718458-->

### Deep binding

**Deep binding** means that the referencing environment for a nested subprogram is within the scope of the subprogram that **declared** it

>[!info] Deep binding is more natural in **statically-scoped** languages.

<!--ID: 1733291718460-->

### Ad-hoc binding

**Ad-hoc binding** means that the referencing environment for a nested subprogram is within the scope of the subprogram that **passed** it (that is, the subprogram that called the subprogram that accepts it as a parameter).

<!--ID: 1733291718463-->

## Indirect subprogram calls

An **indirect subprogram call** occurs when the subprogram to be called is **not** known until runtime. In languages such as C and C++, this is usually implemented as **function pointers** typed according to their return type and parameter types.

<!--ID: 1733291718466-->

## Generic subprograms

Parameter type restrictions may restrict the programmer and cause repetitive code. **Generic subprograms** address this by ensuring subprograms are **polymorphic**, meaning they take parameters of different types on different calls (e.g. the same sorting algorithm may be performed on an integer or floating-point array).

<!--ID: 1733291718469-->

### Ad-hoc polymorphism

**Ad-hoc polymorphism** is the use of the same name for different behaviors (as in overloaded subprograms).

<!--ID: 1733291718472-->

### Subtype polymorphism

Usually present in object-oriented languages as it is related to the concept of subclasses and inheritance. **Subtype polymorphism** means that variables of some type T can access any object of type T or of any type derived from T.

<!--ID: 1733291718474-->

### Parametric polymorphism

**Parametric polymorphism** refers to generic parameters used in type expressions and are a compile-time substitute for dynamic binding (e.g. a `Box<Integer>` in Java).

<!--ID: 1733291718478-->

## Template functions

**Template functions** in C++ are function definitions that may include the template parameters (a class identifier and a type identifier). They are instantiated **implicitly** either when the function is named in a call or when its address is taken (as a function pointer).

```cpp
// This template function
template <class Type>
Type max(Type first, Type second) {
	return first > second ? first : second;
}

// ...may be instantiated as:
int max(int first, int second) {
	return first > second ? first : second;
}
```

<!--ID: 1733291718481-->

## Generic methods

**Generic methods** in Java are methods that introduce their own type parameters. The name of a generic class is specified by a name followed by one or more type variables. It is possible to add **bounds** to such methods, or restrictions on the classes that can be passed as generic parameters

<!--ID: 1733291718483-->

## Coroutine

A **coroutine** is a subprogram that may have **multiple** entry points controlled by the coroutines themselves. Coroutines have a more equal relationship than that of a caller and a called subprogram as they can maintain their status between activations.

>[!info] The invocation of a coroutine is called a **resume** rather than a call.

<!--ID: 1733291718486-->
