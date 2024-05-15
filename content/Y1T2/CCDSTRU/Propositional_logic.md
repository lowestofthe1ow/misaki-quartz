---
target-deck: CCDSTRU::Propositional logic
tags: CCDSTRU
title: Propositional logic
---

## Proposition

A proposition is a declarative sentence that is either **true** or **false**, but not both.
All the following declarative sentences are propositions; propositions 1 and 3 are true, whereas 2 and 4 are false. 
1. Washington, D.C., is the capital of the United States of America.E
2. Toronto is the capital of Canada.
3. 1 + 1 = 2.
4. 2 + 2 = 3.
<!--ID: 1706459585174-->

### Propositional variables

We use letters to denote propositional variables (or sentential variables), that is, variables that represent propositions, just as letters are used to denote numerical variables.
>[!warning] When declaring propositional variables, use simple (atomic) propositions. Avoid operators in declarations.
<!--ID: 1706459585178-->

### Truth value

The truth value of a proposition is true, denoted by T, if it is a **true proposition**, and false, denoted by F, if it is a **false proposition**.
<!--ID: 1706459585182-->

### Compound propositions

Formed from existing propositions using logical operators
<!--ID: 1706459585185-->

## Logical operators

Operators that take existing propositions to form compound propositions
<!--ID: 1706459585189-->

### Truth table

A table consisting of $n$ input columns, an output column, and $x^n$ rows, where $x$ is the number of possible values (**true** or **false** means 2 values) and $n$ is the number of variables
<!--ID: 1706459585193-->

### Negation (NOT)

- $\neg p$ (read as "not $p$")
- Unary operator (takes only one operand)
- $\neg p$ is translated as "It is not the case that $p$"
- *Example*:
	- $p$: "I sleep early"
	- $\neg p$: "I do not sleep early"
<!--ID: 1706459585197-->

#### Negation truth table

|$p$|$\neg p$|
|---|---|
|T|F|
|F|T|
<!--ID: 1706459585202-->

### Conjunction (AND)

- $p \land q$ (read as "$p$ and $q$")
- Binary operator (takes two operands)
- True if and only if $p$ and $q$ are both true
- *Example*:
	- $p$: "I will sleep early tonight"
	- $q$: "I will eat breakfast tomorrow morning"
	- $p \land q$: "I will sleep early tonight and eat breakfast tomorrow morning"
<!--ID: 1706459585205-->

#### Conjunction truth table

|$p$|$q$|$p \land q$|
|---|---|---|
|T|T|T|
|T|F|F|
|F|T|F|
|F|F|F|
<!--ID: 1706459585209-->

### Disjunction (Inclusive OR)

- $p \lor q$ (read as "$p$ or $q$")
- Binary operator (takes two operands)
- True if at least one operand is true
- *Example*:
	- $p$: "I wake up early"
	- $q$: "I am late for class"
	- $p \lor q$: "I wake up early or I am late for class"
<!--ID: 1706459585213-->

#### Disjunction truth table

|$p$|$q$|$p \lor q$|
|---|---|---|
|T|T|T|
|T|F|T|
|F|T|T|
|F|F|F|
<!--ID: 1706459585216-->

### Exclusive or (XOR)

- $p \oplus q$ (read as "$p$ xor $q$")
- Binary operator (takes two operands)
- True if either $p$ or $q$ is true, but not both (i.e., $p$ and $q$ must have different truth values)
- *Example*:
	- $p$: "The steak comes with soup"
	- $q$: "The steak comes with dessert"
	- $p \oplus q$: "The steak comes with soup or dessert, but not both"
>[!warning] Assume inclusive or unless stated otherwise.
<!--ID: 1706459585220-->

#### Exclusive or truth table

|$p$|$q$|$p \oplus q$|
|---|---|---|
|T|T|F|
|T|F|T|
|F|T|T|
|F|F|F|
<!--ID: 1706459585224-->

### Implication (conditional)

- $p \to q$ (read as "$p$ implies $q$", or "if $p$ then $q$")
- $p$ is the **premise**, $q$ is the **consequence**
	- If the premise happened, then so will the consequence.
- In other words:
	- $p$ is **sufficient** for $q$
	- $q$ is **necessary** for $p$
	- $q$ whenever $p$
<!--ID: 1706459585227-->

#### Implication truth table

|$p$|$q$|$p \to q$|
|---|---|---|
|T|T|T|
|T|F|F|
|F|T|T|
|F|F|T|
<!--ID: 1706459585231-->

#### Converse

- The converse of $p \to q$ is $q \to p$
- Equivalent to the inverse
<!--ID: 1706459585234-->

#### Inverse

- The inverse of $p \to q$ is $\neg p \to \neg q$
- Equivalent to the converse
<!--ID: 1706459585237-->

#### Contrapositive

- The contrapositive of $p \to q$ is $\neg q \to \neg p$
- Equivalent to the original statement
<!--ID: 1706459585241-->

### Biconditional (IFF)

- $p \leftrightarrow q$ (read as "$p$ if and only if $q$" or "$p$ is sufficient and necessary for $q$")
- True if $p \to q$ and $q \to p$ are both true (i.e., $p$ and $q$ have the same truth value)
<!--ID: 1706459585244-->

#### Biconditional truth table

|$p$|$q$|$p \to q$|
|---|---|---|
|T|T|T|
|T|F|F|
|F|T|F|
|F|F|T|
<!--ID: 1706459633917-->

