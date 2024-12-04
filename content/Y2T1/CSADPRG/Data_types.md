---
target-deck: CSADPRG::Data types
tags: [CSADPRG]
title: Data types
---

## Data type

Determines the range of values that can be stored and the set of operations for these values.

<!--ID: 1729181159883-->

### User-defined types

**User-defined types** allow the user to define the values and operations associated with a type. Examples include **structures**, **unions**, and **classes**.

>[!info] User-defined types enable the user to create meaningful names (improving readability) and provide a centralized location to make changes that affect all variables of that type (improving modifiability).

<!--ID: 1729181159886-->

### Abstract data types

**Abstract data types** [[Abstract_classes_and_interfaces#Abstraction|abstracts]] (**hides**) the inner design of how a type works from the user. The user does not need to know the underlying mechanisms behind the type, only its concept-level characteristics and behavior.
<!--ID: 1729181159889-->

### Type system

A **type system** is a set of rules in a programming language that associate properties to types.

<!--ID: 1729181159891-->

### Descriptor

A **descriptor** is the collection of attributes of a variable usually stored in some region of memory.

<!--ID: 1729181159894-->

## Elementary/primitive types

**Not defined in terms of other data types**
<!--ID: 1729181159896-->

## Character/string types

**Characters** are stored as numeric encodings (e.g. ASCII, Unicode). **Strings** are sequences of characters. The following operations may usually be performed on strings:

- Assignment and copying
- Comparison (=, >, etc.)
- Catenation (i.e. joining of string literals)
- Substring reference (i.e. creating substring slices)
- Pattern matching
<!--ID: 1729181159899-->

## Enumeration types

**Enumeration types** provide a way of defining and grouping all possible values of that type into a collection, typically assigning them integer values.
<!--ID: 1729181159901-->

## Structured types

<!--ID: 1729181159904-->

### Array

An **array** is an aggregate of homogeneous data elements where each element is identified by a numerical **index**.

<!--ID: 1729181159906-->

#### Homogeneous

A homogeneous array is one where elements need to be of the same type.

<!--ID: 1729181159909-->

#### Heterogeneous

A heterogeneous array is one where elements need not be of the same type

<!--ID: 1729181159911-->

#### Rectangular

A rectangular array where arrays have the same number of elements

<!--ID: 1729181159913-->

#### Jagged

Multidimensional array where arrays do not need to have the same number of elements

<!--ID: 1729181159917-->

#### Associative

Unordered collection of data elements indexed by user-defined values called **keys**.

<!--ID: 1729181159920-->

### List

A **list** may be an implementation of arrays (as in Python) that includes **list comprehension** (applying a function on each element of the list). Lists were first supported by **Lisp**.

<!--ID: 1729181159923-->

### Record

A **record** (**structs** in C-like languages) is a possibly heterogeneous aggregate of data elements, where individual elements are identified by **names** (**keys**).

<!--ID: 1729181159927-->

### Tuple

A **tuple** is similar to a record, but with unnamed elements.

<!--ID: 1729181159929-->

### Union

**Union types** store differently-typed values at different times during execution despite using the **same memory space**.
<!--ID: 1729181159932-->

#### Discriminated union

**Discriminated unions** require type checking (e.g. ALGOL)
<!--ID: 1729181159935-->

#### Free union

**Free unions** allow complete freedom from type checking but are considered generally unsafe (e.g. C and C++)
<!--ID: 1729181159939-->

## Pointer and reference types

A [[Pointers_and_pointer_variables|pointer]] or **reference type** consists of **memory addresses** and a special **null** value.

<!--ID: 1729181159943-->
