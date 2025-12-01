---
target-deck: CSADPRG::Control statements
tags: [CSADPRG]
title: Control statements
---

## Control statements

A programming language that does not implement random access to sections of the program with `goto` only require two control statements: a **conditional** and a **loop**. However, readability and writability concerns mean that programming languages usually implement more control statements than these two.
<!--ID: 1733233617885-->

## Control structure

A **control structure** is a control statement and the statements whose execution it controls.
<!--ID: 1733233617895-->

### Selection statement

A **selection statement** is a means of choosing between execution paths. They may be **two-way** or **$n$-way** (multiple selection).
<!--ID: 1733233617903-->

#### Two-way selection statement

A **two-way selection statement** is usually implemented as an `if`-`else` statement. Here execution is controlled by a control expression (normally numeric or Boolean, depending on the language).

>[!info] `then` and `else` clauses can be single or compound statements.
<!--ID: 1733233617911-->

#### Multiple-selection statements

Multiple-selection statements allow selection from any number of statements or compound statements. They may be recreated as a chain of two-way selectors, but this hinders readability.

These control statements are usually implemented as a `switch`-`case` statement, which tests a control expression against each `case` to select an execution path.
<!--ID: 1733233617919-->
