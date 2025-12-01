---
target-deck: CSADPRG::Abstract data types
tags: [CSADPRG]
title: Abstract data types
---

## Abstraction

An **abstraction** is a view or representation of an entity that includes only the most significant attributes. Abstractions remove irrelevant information while highlighting important information. **Data abstraction** aids in reducing complexity, as in process abstraction with subprograms.
<!--ID: 1733291718395-->

### Abstract data types

An **abstract data type** is an enclosure that includes:

- The data **representation** of a specific data type. This is hidden from the program units that use the type, so the **only** direct operations possible on those objects are those provided in the type’s definition.
- The **subprograms** that provide operations for that type. The declarations of the type and the protocols of the operations on objects of the type, which provide the type’s interface (which is **not** dependent on its representation), are contained in a single syntactic unit.

Instances of an abstract data type are referred to as **objects**.

>[!warning] All built-in data types are abstract data types, but are rarely referred to as such.
<!--ID: 1733291718403-->

#### User-defined abstract data types

A **user-defined abstract data type** must have the same characteristics as built-in abstract data types. They allow program units to declare variables of a type (and declare a set of operations for manipulating them) but hide the inner representations of that data type.
<!--ID: 1733291718407-->

#### Accessor methods

**Accessor methods**, such as getters and setters, allow the programmer to modify an object's data within the constraints specified in the type's definition.
<!--ID: 1733291718410-->

#### Access modifiers

**Access modifiers**, such as `public` and `private`, also provide levels of access to data (some languages even disallow public access, such as Ruby). These are crucial in hiding information about the type's implementation.
<!--ID: 1733291718412-->

##### Friend functions

**Friend functions** in C++ provide access to private members between unrelated classes.
<!--ID: 1733291718415-->

#### Constructors

**Constructors** initialize the data members of instances, even allocating space in the case of heap-dynamic parts of the object. They are implicitly called when an instance of an object is created (but may also be called explicitly in languages such as C++).
<!--ID: 1733291718419-->

#### Destructors

**Destructors** clean up after an object instance is destroyed, usually to reclaim storage on the heap.
<!--ID: 1733291718422-->

## Encapsulation

**Encapsulation** is the grouping of subprograms that are logically related into a single unit that can be individually compiled. Examples include C's header files, C++'s implementation files, and C#'s assembly files.
<!--ID: 1733291718426-->

### Named encapsulation

**Named encapsulation** refers to C++'s (and C#'s) namespaces, Java and Ada's packages, or Ruby's modules.
<!--ID: 1733291718429-->
