---
target-deck: CSADPRG::Programming domains and evaluation criteria
tags: [CSADPRG]
title: Programming domains and evaluation criteria
draft: true
---

## Scientific applications

Early languages were mostly translations of **scientific formulae**. These languages utilized simple data structures and sequences and needed to be able to handle intense floating-point computations especially compared to Assembly.

**Fortran**, from "**Formula Translating System**," is an example of a scientific application.
<!--ID: 1726155954308-->

## Business applications

Business applications are used for developing programs for business transactions. **COBOL** is a well-known example.
<!--ID: 1726155954313-->

## Artificial intelligence

Logic programming. Driven by symbolic vs. arithmetic computation and linked lists vs. arrays. **Lisp**, **Prolog**, **C**, and **Scheme** are well-known examples.
<!--ID: 1726155954316-->

## Systems programming

Create operating systems/systems being used by a device or machine
<!--ID: 1726155954319-->

## Web software

This domain was driven by the need for dynamic Web content; computation was mixed with content presentation (e.g., embedding JavaScript within HTML). Examples include **Javascript** and **PHP**.
<!--ID: 1726830845858-->

### Scripting languages

Used initially for creating applications, now used primarily over the Internet (web-based applications)
<!--ID: 1726155954325-->

## Computer architecture

Imperative programming languages take after **von Neumann architecture**.
<!--ID: 1726830845866-->

## Language evolution criteria

![[language_evaluation_criteria.png]]
<!--ID: 1726155954328-->

### Readability

Simplicity, orthogonality, data types, and syntax design

A large number of constructs is **difficult to learn**.
<!--ID: 1726155954332-->

#### Overall simplicity
<!--ID: 1729181159878-->

#### Orthogonality

Small sets of primitive constructs can be combined in a relatively small number of ways

Every possible combination is **legal and meaningful**.
<!--ID: 1726155954336-->

#### Data types

Adequate facilities for defining data types and data structures
<!--ID: 1726155954339-->

#### Syntax design

Special words (`while`, `class`, `for`) are important in forming compound statements, statement groups in control constructs

Use of special words as names for program variables is bad
<!--ID: 1726155954344-->

#### Form and meaning

Appearance of statement indicates its purpose

Semantics should follow directly from syntax

Violated by two language constructs
<!--ID: 1726155954347-->

### Writability

Simplicity, orthogonality, abstraction, expressivity
<!--ID: 1726155954351-->

### Reliability

The program can perform to its specifications under all conditions

- Type checking
- Exception handling
- Aliasing (distinct names that can access the same memory cell)
<!--ID: 1726155954354-->

## Language design tradeoffs
<!--ID: 1729181320369-->

### Reliability vs cost of execution

![[language_categories.png]]
<!--ID: 1729181320374-->
