---
target-deck: CSADPRG::History of programming languages
tags: CSADPRG
title: History of programming languages
draft: true
---

### Plankalkul

First **high-level language** (but was never implemented); used advanced data structures like [[Floating-point_representation|floating-point]], [[Arrays|arrays]], and records (structs in C-like languages). It also supported **invariants**, similar to Java's assertions.

<!--ID: 1726482340420-->

### Assembly

Low-level programming language that is the **closest** to machine language.

<!--ID: 1726482340423-->

### Pseudocode

This term was used to describe **Short Code** and **Speedcoding**, different from how the word is used today. Machine code had poor readability and modifiability (due to using absolute addressing) and was generally tedious to use, which led to the development of these somewhat higher-level languages.

<!--ID: 1726482340425-->

#### Shortcode

Developed by John Mauchly in 1949 for the BINAC computer and later transferred to the UNIVAC I (the **first commercial electronic computer**)

<!--ID: 1726482340427-->

#### Speedcoding

Developed by John Backus for the IBM 701 for use as a virtual three-address floating-point calculator

<!--ID: 1726830845624-->

### Autocode

First **compiled high-level language** (was actually implemented, unlike Plankalkul). Ran on minicomputers **Sirius** and **Pegasus** by Ferranti

<!--ID: 1726482340429-->

### FORTRAN

This is the **oldest** language still in use.

<!--ID: 1726482340431-->

#### "Formula translation"

What did FORTRAN stand for (from what was the name derived)?

<!--ID: 1726830845652-->

#### FORTRAN 0

This version of FORTRAN was not implemented.

<!--ID: 1726830845672-->

#### FORTRAN 1

Designed for the IBM 704. Machine efficiency was most important at this point (high cost of computers vs. programmers). Forever changed the way computers are used:

- introduced variable names up to 6 characters
- user defined subroutines
- no separate compilation
- `if` statement
- `do` loop statement
- formatted 1/0
- no data typing statements
- compiler released in April 1957 after 18 years of effort
- programs larger than 400 lines rarely compiled
- code was very fast
- widely used
<!--ID: 1726482340433-->

#### FORTRAN 2

This version of FORTRAN introduced independent compilation and fixed bugs.

<!--ID: 1726830845689-->

#### FORTRAN IV

This version of FORTRAN introduced explicit declaration, logical selection statements, subprogram names as parameters, and later the ANSI standard.

<!--ID: 1726830845699-->

#### FORTRAN 77

This version of FORTRAN introduced character string handling, logical loops, and `if`-`then`-`else`.

<!--ID: 1726830845707-->

#### FORTRAN 90

This version of FORTRAN introduced modules, dynamic arrays, pointers, recursion, the `case` statement, and parameter type checking.

<!--ID: 1726830845716-->

### LISP

Designed at MIT by John McCarthy for use in AI research, which needed a language that could process data as lists and perform symbolic computation. This language only has two data types: atoms and lists; syntax is based on lambda calculus. It pioneered **functional programming** (no need for variables or assignment with control being done through recursion and conditionals).

<!--ID: 1726482340435-->

#### COMMON LISP and Scheme

Two dialects of LISP are:

<!--ID: 1726830845725-->

#### ML, Miranda, and Haskell

Languages related to LISP

<!--ID: 1726830845734-->

#### List processing language

What does LISP stand for?

<!--ID: 1726830845744-->

### ALGOL

Was the first to adopt the **Backus normal form** and was meant to be **universal** (portable). It was made to be close to mathematical notation, describe algorithms, and be translatable into machine code

<!--ID: 1726831525092-->

#### Algorithm language

What does ALGOL stand for?

<!--ID: 1726830845756-->

#### ALGOL 58

This was the first version of ALGOL, introducing the following:

- Concept of type was formalized
- Names could have any length
- Arrays could have any number of subscripts
- Parameters were separated by mode (in & out)
- Subscripts were placed in brackets
- Compound statements (`begin` and `end`)
- Semicolon as a statement separator
- Assignment operator was `:=`
- `if` had an `else-if` clause

Was ultimately never widely used especially in the U.S. primarily due to a lack of support from IBM

<!--ID: 1726482340438-->

#### ALGOL 60

This version of ALGOL introduced:

- Block structure (local scope)
- Pass-by-value and pass-by-name
- Recursion
- Stack-dynamic arrays (variable length)
- Was the first machine-independent language and served as the foundation for imperative languages
- **Did not have input/output**
<!--ID: 1726830845767-->

### COBOL

Based on FLOW-MATIC, this language was designed to look like simple English (easy to use), broadening the base of computer users. It would have failed had it not been required by the Department of Defense

- First macro facility in a high-level language
- Hierarchical data structures (records)
- Nested selection statements
- Long names (up to 30 characters), with hyphens
- Data division
- Variables are defined in detail

>[!info] It was during its development that Grace Hopper coined the term "bug" (information security)

<!--ID: 1726482340441-->

#### Common Business Oriented Language

What does COBOL stand for?

<!--ID: 1726830845775-->

### BASIC

Designed by John Kemeny and Thomas Kurtz at Dartmouth. A dialect by Microsoft was its first marketable product. It was made easy to learn and use for non-science students; "pleasant and friendly"

**User time is more important than user time**
<!--ID: 1726482340443-->

### PL/1

- 2 high-quality compilers (paid)
- Developed by IBM and SHARE
- Failed to replace COBOL
- First unit-level concurrency
- First exception handling
- Switch-selectable recursion
- First pointer data type
- First array cross sections
<!--ID: 1726482340445-->

### Dynamic languages

This term was used to refer to the languages APL and SNOBOL.

<!--ID: 1726830845785-->

#### APL

- Designed as a hardware description language at IBM
- Expressive but hard to read
<!--ID: 1726482340447-->

##### A Programming Language (named after a book)

What does APL stand for?

<!--ID: 1726831525097-->

#### SNOBOL

Designed as a string manipulation language at Bell Labs; introduced powerful operators for string pattern matching

<!--ID: 1726482340450-->

##### String Oriented and Symbolic Language

What does SNOBOL stand for?

<!--ID: 1726830845794-->

### SIMULA 67

- Designed for system simulation
- Introduced coroutines implemented in classes (the basis for data abstraction)
<!--ID: 1726482340452-->

### ALGOL 68

This version of ALGOL continued from ALGOL 60, but was not a superset of that language. Based on the concept of **orthogonality**, it introduced user-defined data structures, reference types, and flex arrays (dynamic arrays). It was used even less than ALGOL 60.

<!--ID: 1726482340455-->

### PASCAL

Used by Apple; designed by Niklaus Wirth after leaving the ALGOL 68 committee. Named after Blaise Pascal, it was designed for teaching structured programming (nothing really new was introduced)

<!--ID: 1726482340457-->

### C

Designed for systems programming by Dennis Richie at Bell Labs; evolved primarily from B but also ALGOL 68. **Poor type checking**, initially spread through UNIX

<!--ID: 1726482340459-->

#### NB

What was C's original name?

<!--ID: 1726830845803-->

### Prolog

Based on formal logic, was **non-procedural**; summarized as an **intelligent database system** that processed the truth of a query.

<!--ID: 1726482340461-->

### Ada

First large-scale design effort, includes packages for data abstraction, exception handling, generic program units, and concurrency.

<!--ID: 1726482340463-->

#### Ada Lovelace

Namesake of the Ada programming language; "the first programmer" for Charles Babbage's Analytical Engine.

<!--ID: 1726830845812-->

#### Bernoulli numbers

What did Lovelace's algorithm compute?

<!--ID: 1726830845820-->

#### Ada 95

Supported OOP through type derivation; improved control mechanisms for concurrency and more flexible libraries

<!--ID: 1726830845828-->

### Smalltalk

Developed at Xerox-PARC (Palo Alto Research Center); **first full implementation of a pure object-oriented language** Introduced live coding "on-the-fly" and pioneered the GUI.

<!--ID: 1726482340464-->

### C++

Developed at Bell Labs by Bjarne Stroustrup, evolving from C and SIMULA 67. Facilities for object-oriented programming were added to C with exception handling. Supports both procedural and OO programming, leading to a large and complex language.

<!--ID: 1726482340467-->

### Java

Developed at Sun Microsystems (later acquired by Oracle) in the early 1990's; based on C++ but supports only OOP. Has references, but not pointers. Designed for embedded consumer electronic devices.

<!--ID: 1726482340469-->

### Perl

Developed by Larry Wall; originally a combination of sh and awk. **Always compiled to an intermediate language before being executed**; applicable to a wide variety of areas.

**Variables are statically typed** and **implicitly declared**; powerful but dangerous (scalar type stores both strings and numbers, for instance)
<!--ID: 1726482340471-->

### Ruby

Highly influenced by Perl

<!--ID: 1726482340474-->

### JavaScript

Originally developed by Brendan Eich at Netscape for dynamic web design. **Related only to Java through similar syntax**, but otherwise is commonly used in browsers and web programming (dynamic HTML documents).

<!--ID: 1726482340476-->

#### Mocha and LiveScript

What were JavaScript's previous names?

<!--ID: 1726830845836-->
