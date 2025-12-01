---
target-deck: CCPROG3::UML
tags: [CCPROG3]
title: UML
---

## Unified Modeling Language

The **Unified Modeling Language** (UML) is a way of **visually** representing a system that can be **directly translated** to object-oriented languages.
<!--ID: 1722921418658-->

### Class diagram

The UML class diagram can serve as a blueprint for the implementation of a class.

![[class_diagram.png]]

The top section contains the **class name**, the middle contains its **attributes**, while the bottom section contains its **methods**.
<!--ID: 1722921418662-->

#### Access modifier symbols

| Modifier | Symbol |
|---|---|
| Public | `+` |
| Private | `-` |
| Protected | `#` |
| Package-private | `~` |
| Derived | `/` |
| Static | Underline |

>[!info] Constants may be written as `ALL_CAPS`
<!--ID: 1722921418664-->

#### Attributes

```
<access> <name> : <data type> (= <default value>)
```
<!--ID: 1722921418666-->

#### Methods

```
<access> <name>(<parameter name> : <data type>, ...) : <return type>
```

>[!warning] [[Encapsulation,_classes,_and_objects#Constructors|Constructors]] have no return type.
<!--ID: 1722921418669-->
