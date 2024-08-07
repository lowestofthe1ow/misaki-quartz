---
target-deck: CCPROG3::Inheritance
tags: CCPROG3
title: Inheritance
---

## Inheritance

**Inheritance** is an **is-a** relationship where a **subclass** inherits all attributes and methods from a **superclass**.  Subclasses utilize superclasses as a foundation to build more complex logic.

```java
public class Dog extends Pet {
/* Class body here */
}
```

>[!info] `Object` is the superclass of all classes.

<!--ID: 1723000347424-->

### `super()` constructor

A subclass must call its superclass's [[Encapsulation,_classes,_and_objects#Constructors|constructor]] with the keyword `super()`. For instance, given the superclass:

```java
public class Pet {
    private String name;
    private int age;

    public Pet(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

An inheriting subclass must call `Pet(String, int)` as follows:

```java
public class Dog extends Pet {
    public Dog(String name, int age) {
        super(name, age);
    }
}
```

Omitting the `super()` call will prompt Java to look for a parameter-less constructor in `Pet`, which in this case does not exist (the default constructor `Pet()` has been replaced by `Pet(String, int)`).

>[!info] Calling `super()` on a non-extending class will call the `Object()` constructor, effectively doing nothing.

<!--ID: 1723000347428-->
