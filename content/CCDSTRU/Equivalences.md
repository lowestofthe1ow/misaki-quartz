---
target-deck: CCDSTRU::Propositional logic::Equivalences
tags: [CCDSTRU]
title: Equivalences
---

## Tautology

A compound proposition whose truth value is always true is called a **tautology** or a **fact**.
<!--ID: 1706459575489-->

## Contradiction

A compound proposition whose truth value is always false is called a **contradiction** or a **fallacy**.
<!--ID: 1706459575493-->

## Contingency

A compound proposition whose truth value is not a tautology nor a contradiction is called a **contingency**.
<!--ID: 1706459575498-->

## Logical equivalence rules
<!--ID: 1716721003606-->

### Identity

$p \land T \equiv p$

$p \lor F \equiv p$
<!--ID: 1706459575502-->

### Domination

$p \land F \equiv F$

$p \lor T \equiv T$
<!--ID: 1706459575505-->

### Negation

$p \land \neg p \equiv F$

$p \lor \neg p \equiv T$
<!--ID: 1706459575510-->

### Idempotence

$p \land p \equiv p$

$p \lor p \equiv p$
<!--ID: 1706459575516-->

### Involution

$\neg(\neg p) \equiv p$
<!--ID: 1706459575520-->

### De Morgan's

$\neg(p \land q) \equiv \neg p \lor \neg q$

$\neg(p \lor q) \equiv \neg p \land \neg q$
<!--ID: 1706459575525-->

### Commutative

$p \land q \equiv q \land p$

$p \lor q \equiv q \lor p$
<!--ID: 1706459575529-->

### Associative

$p \land (q \land r) \equiv (p \land q) \land r$

$p \lor (q \lor r) \equiv (p \lor q) \lor r$
<!--ID: 1706459575533-->

### Absorption

$p \land (p \lor q) \equiv p$

$p \lor (p \land q) \equiv p$
<!--ID: 1706459575536-->

### Material implication

$p \to q \equiv \neg p \lor q$
<!--ID: 1706459575541-->

### Material equivalence

$p \leftrightarrow q \equiv (p \to q) \land (q \to p)$

$p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q)$
<!--ID: 1706459575545-->
