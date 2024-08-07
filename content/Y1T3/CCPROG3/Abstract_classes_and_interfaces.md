---
target-deck: CCPROG3::Abstract classes and interfaces
tags: CCPROG3
title: Abstract classes and interfaces
---

## Abstraction

[[Encapsulation,_classes,_and_objects#Abstraction|Abstraction]] is the process of **hiding** certain details and showing only essential information to the user.

<!--ID: 1723000334396-->

### Abstract classes

**Abstract classes** provide common functionality across a set of related classes, while allowing default method implementations. They **cannot** be [[Encapsulation,_classes,_and_objects#Objects|instantiated]] and can only act as a superclass to a non-abstract classes.

Abstract classes may have abstract and concrete methods, unlike non-abstract classes that can only have concrete methods. Non-abstract classes that extend an abstract class **must** implement all of the abstract methods; abstract classes thus help "force" classes to have certain methods and conform to a design.

>[!warning] In Java, a class can only have **one** direct superclass.

```java
public abstract class Animal {
    public Animal() {
    /* Constructor body here */
    }
    
    /* Abstract methhod that must be implemented by subclass */
    abstract public void makeSound();
    
    public void doSomething() {
    /* Method body here */
    }
}
```

<!--ID: 1723000334399-->

### Interfaces

**Interfaces** are very similar to abstract classes, but only contain **method declarations with no implementation** (total abstraction). The sole purpose of an interface is to ensure that an implementing class has specific methods (like an abstract class with **only** abstract methods) and ensure **common behavior**.

```java
public interface Killable {
    /* Must be implemented by implementing class */
    public void die();
}

public class Monster implements Killable {
    public void die() {
    /* Method body here */
    }
}
```

>[!info] Classes can implement multiple interfaces:
>`public class Monster implements Killable, Healable { ... }`

<!--ID: 1723000334403-->
