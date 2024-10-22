---
target-deck: CSADPRG::Binding times
tags: CSADPRG
title: Binding times
---

## Binding

**Binding** is an association between an attribute and an entity, such as binding a variable to its type or value and binding a symbol (operator) to a specific operation.
<!--ID: 1729181159860-->

### Language design time

Properties bound at **language design time** refers to properties that were defined during the creation or design of a programming language:

> [!info] This includes:
>
> - Binding operator symbols to operations (assuming there are **no** overloaded operations for it; in such cases it occurs during compile time instead)
> - Reserved words
> - Defining the size of certain data types in bytes in specific programming languages (e.g. Java)

<!--ID: 1729181159863-->

### Language implementation time

Properties bound at **language implementation time** refers to properties that were defined during the implementation of the compiler or interpreter

> [!info] This includes:
>
> - The size of certain data types (e.g. integers) in some programming languages (e.g. C) may be determined by the compiler instead of being strictly specified in the language's design.

<!--ID: 1729181159865-->

### Compile time

Properties bound at **compile time** refers to properties defined during compilation or translation. For statically-typed languages, this includes names and types.

<!--ID: 1729181159867-->

### Link time

**Link time** occurs when the linker determines the addresses of external functions (i.e., when linking imported libraries).
<!--ID: 1729181159870-->

### Load time

**Load time** occurs when the **loader** loads the program into memory, binding variables to regions of memory (absolute addresses).
<!--ID: 1729181159873-->

### Run time

Properties bound at **run time** refers to properties defined during the execution of the program.

>[!info] This includes:
>
> - Binding non-static variables
> - Binding data types for dynamically-typed languages
> - Binding variables to memory cells in specific languages, such as Java.

<!--ID: 1729181159875-->
