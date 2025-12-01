---
target-deck: CCPROG3::Encapsulation, classes, and objects
tags: [CCPROG3]
title: Encapsulation, classes, and objects
---

## Encapsulation

**Encapsulation** refers to the bundling of data and actions withing a class without need to be exposed to other classes. It is one of the core principles of [[The_object-oriented_paradigm#Object-oriented programming|object-oriented programming]]. Other objects must not be able to directly read or edit data stored in other objects. Good design must ask if data or behavior should be used by another class.
<!--ID: 1716721003542-->

### Classes

**Classes** are the main encapsulating structure in Java. They serve as a **blueprint** for objects by defining their **properties** (attributes) and **methods** (behavior).

Java is known as **primarily object-oriented** as you are forced to create solutions using classes even if the solution is procedural in nature.

>[!info] **Packages** also act as a form of encapsulation.
<!--ID: 1722921376218-->

#### Class declaration

In Java, classes are declared as follows:

| Access modifier | Abstract/final | Class name | Inheritance | Implementation |
|---|---|---|---|---|
| `public` | `abstract` | `class ClassName` | `extends ParentName` | `implements Interfacename` |
| `private` | `final` | | | |

```java
public final class Book extends Item implements Sellable {
	/* Class body goes here */
}
```
<!--ID: 1722921376225-->

##### `public` class

A class declared `public` is visible to **all classes** of any package.
<!--ID: 1722921376228-->

##### `private` class

A class cannot be declared `private` unless it is an inner class. `private` classes can only be accessed by their **outer class**.
<!--ID: 1722921376231-->

##### No access modifier (default)

A class with no modifier is only visible within its own **package**.

>[!info] This access modifier is also known as **package-private**.
<!--ID: 1722921376234-->

### Objects

An **object** or instance is an executable copy of a class. They contain a copy of their class's properties and methods. Objects are **instantiated** with the `new` keyword:

```java
Owl owl1 = new Owl("red");
Owl owl2 = new Owl("blue");
```

>[!info] Some entities are better serving as containers for data, while other entities might have behavior to model.
<!--ID: 1722921376236-->

#### `private` methods/variables

Methods or variables declared `private` are only accessible within the class.
<!--ID: 1722921376239-->

#### `protected` methods/variables

Unlike classes, methods or variables can be declared `protected`. Such methods or variables can only be accessed by **subclasses** of the class within any package.
<!--ID: 1722921376241-->

#### Accessor methods

Most properties or variables should be kept **private** to a class. **Accessor methods** (getters/setters) should be used; **getters** return the variable while **setters** set its value.

Allow the class to protect its **own** data.
<!--ID: 1716721003547-->

#### Constructors

A **constructor** is a special method called during instantiation.

```java
public class Person {
    private String name;
    private int age;

	/* Constructor */
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

If no constructor is provided, a **default, no-parameter** constructor is used:

```java
public Person() {

}
```
<!--ID: 1722921376243-->

## Abstraction

Abstraction is the result of encapsulation. Hiding information leads to hiding the complexities regarding an object.
<!--ID: 1716721003551-->
