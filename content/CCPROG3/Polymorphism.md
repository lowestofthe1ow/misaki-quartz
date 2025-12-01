---
target-deck: CCPROG3::Polymorphism
tags: [CCPROG3]
title: Polymorphism
---

## Polymorphism

Allows for an object to take on **different forms** and act differently depending on how its referenced. Different classes can share common interfaces or methods.
<!--ID: 1723000361299-->

### Method overloading

**Overloading** is polymorphism by having multiple methods/constructors with the same name but with different **signatures** (sequence of parameter types).

```java
public void add(float a, int  b) {
/* Method body here */
}

/* Valid overloading of add() */
public void add(int a, float b) {
/* Method body here */
}
```
<!--ID: 1723000361303-->

### Typecasting

Assuming that `getRealAge()` is defined in `Dog`, not `Pet`:

```java
public class Main {
    public static void main(String[] args) {
        Pet pet = new Dog("Munch", 5, "Lhasa Apso");
        Dog dog = new Dog("Guts", 6, "Bulldog");
        
        /* Typecast pet variable to Dog type */
        System.out.println("" + ((Dog) pet).getRealAge());
        System.out.println("" + dog.getRealAge());
    }
}
```

**Typecasting** allows is to treat the object stored in the `pet` variable as type `Dog`, which is a subclass of `Pet`. This allows us to access the subclass-specific method `getRealAge()`.
<!--ID: 1723000361306-->

### `instanceof` operator

The `instanceof` operator checks if a given object instance is of a given class (or is of a subclass of a class):

```java
Dog d = new Dog();
Pet p = new Pet();

System.out.println(d instanceof Dog); // true
System.out.println(d instanceof Pet); // true
System.out.println(p instanceof Dog); // false
System.out.println(p instanceof Pet); // true
```

>[!warning] Usage of `instanceof` may be a violation of object-oriented design as it increases dependency between classes.
>It is, however, useful when sorting out subclasses from a collection of their common superclass (e.g. finding `Dog`s from an `ArrayList` of `Pet`s).
<!--ID: 1723000361308-->

### Overriding

![[overriding.png]]

**Overriding** refers to the ability of a subclass to customize or completely replace the behavior or implementation of a superclass method without changing the **contract** (return type and method signature). A subclass can access the original method in the super class by invoking the `super` keyword.

>[!info] Overridden methods are usually identified by an `@Override` tag, but this is not required.
<!--ID: 1723000361312-->
