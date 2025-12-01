---
target-deck: CCPROG3::Class relationships
tags: [CCPROG3]
title: Class relationships
---

## Association

![[association.png]]

If a class uses/receives a class in any of its methods, then there is an **association** relationship between those two classes. Objects maintain their own life cycle; the destruction of one does not cause the destruction of the other.
<!--ID: 1722921404974-->

### Directed association

One class "uses" another, so the association is **directed**. The accepting object does not directly modify the properties of the parameter object.
<!--ID: 1722921404978-->

### Bidirectional association

A two-way association, i.e., it is **bidirectional**. Instances of both classes can perform the associative action to each other; classes must possess methods that enable the performance of their actions.
<!--ID: 1722921404980-->

### Reflexive association

Association is **reflexive** if it exists between separate instances of the same class or to the same instance of a class itself. A class must have a method that accepts instances of itself as a parameter.
<!--ID: 1722921404982-->

## Aggregation

![[aggregation.png]]

**Aggregation** is a more specific kind of association. Like association, the objects still have their own life cycles; unlike association, aggregation demands that one be the “**whole**” class and the other be the “**part**”
<!--ID: 1722921404985-->

## Composition

![[composition.png]]

**Composition** is a special, more specific kind of aggregation. Like aggregation, the classes exhibit a **part-whole** relationship. However, the life cycle of the part class is **dependent** on that of the whole class. Destroying the whole also destroys the part.

>[!info] The part instance is usually created only by the whole.
<!--ID: 1722921404987-->

## Inheritance

![[inheritance.png]]

**Inheritance** is an **is-a** relationship where a subclass **inherits** all attributes and methods from a superclass.
<!--ID: 1722921404989-->

## Multiplicity

![[multiplicity.png]]

Multiplicity defines the **number** of objects expected to participate in a relationship.

| Notation | Multiplicity |
|---|---|
| `1` | Exactly 1 |
| `0...1` | Zero or 1 |
| `*` | Zero or more |
| `n...m` | `n` to `m` (`m` can be wildcard `*`) |

>[!info] Multiplicity may be written into the attributes, like `Item[*]`. If no multiplicity is specified, it is safe to assume there's only one instance.
<!--ID: 1723000304238-->
