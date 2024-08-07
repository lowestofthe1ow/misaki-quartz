---
target-deck: CCPROG3::Java overview
tags: CCPROG3
title: Java overview
---

## Java

**Java** is an [[The_object-oriented_paradigm#Object-oriented programming|object-oriented programming language]], i.e., it supports most, if not all, concepts that make up an object-oriented environment. This is in contrast to **object-based** languages, which usually lack higher object-oriented concepts such as inheritance or polymorphism.

>[!info] Java is both **compiled** and **interpreted**.

<!--ID: 1718708857248-->

### Java Virtual Machine (JVM)

Upon compilation, Java source code is **compiled** into **Java bytecode** (via the `javac` command), which is the language used by the **Java Virtual Machine** (JVM). Java bytecode is then **interpreted** (via the `java` command), allowing Java programs to run cross-platform.

<!--ID: 1718708857252-->

#### Compilation

[[Software_development_tools_and_acquisition#Compilers|Compiled languages]] are compiled into an executable machine language program which can then usually be executed as an application native to an operating system. In the case of Java, this machine language is Java bytecode.

![[compiled_language.png]]

The following command compiles a `.java` source file into a `class` Java bytecode file:

```
javac <filename>.java
```

<!--ID: 1718708857254-->

#### Interpretation

[[Software_development_tools_and_acquisition#Interpreters|Interpreted languages]] are executed one line at a time through a fetch-execute-interpret cycle. This is how the JVM processes Java bytecode.

![[interpreted_language.png]]

`.class` files are executed using the following command:

```
java <filename>
```

<!--ID: 1718708857256-->

### Java classes

A Java application consists of one or more Java [[The_object-oriented_paradigm#Classes|classes]]. A class is declared as follows:

```java
public class MyApp {
/* Class body */
}
```

`public` is an access modifier. It is followed by the `class` keyword and the name of the class. The class body is surrounded by a pair of braces (`{}`).

>[!tip] It is standard practice to write class names in camel case, starting with an uppercase letter. Constants should be written in all-uppercase snake case, with everything else written in lowercase camel case.

<!--ID: 1718708857258-->

#### The `main` method

A Java application can have **at most one** `main()` method, whose signature is:

```java
public static void main (String[] args)
```

As `main()` is a **static** method, it is not tied to instances of the class in which it is contained. Rather, it is called by the runtime system upon program execution.

<!--ID: 1718708857261-->

### Java types and variables

Java is a **strongly-typed** language, meaning the **type** of every variable and expression must be **known** at compile time. There are two categories of types in Java: **primitive** and **reference**.

```java
int nVal;
double dGrade;
char cAnswer, cType;
boolean bStop = false;
```

<!--ID: 1718708857263-->

#### Primitive types

A **primitive type** directly stores a value. Examples include `boolean`, `byte`, `char`, `int`, `long`, `float`, `double`.

<!--ID: 1718708857265-->

#### Reference types

A **reference type** holds a reference to an object in memory, making them analogous to [[Pointers_and_pointer_variables|pointers]]. Examples include `String` and `JFrame`

>[!info] User-defined [[#Java classes|classes]] (e.g. `MyApp`) can be used as types.

<!--ID: 1718708857268-->

### Java output

[[Formatted_input_and_output|Outputting to the terminal]] is done using the following:

```java
System.out.print(/* Expression */);
System.out.println(/* Expression */);
```

`print()` prints the passed value to the terminal. `println()` does the same, but appends a **newline character** at the end. Any expression that evaluates to a literal can be used as a parameter.

>[!info] `System.out` is known as an **output stream**.

<!--ID: 1718708857270-->

### Java input and `Scanner`

The [`Scanner`](https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html) class is a **reference data type**. It is first **imported** from the `java.util` package as follows:

```java
import java.util.Scanner;

public class MyApp {
	/* Class body */
}
```

A `Scanner` can then be instantiated using the `new` keyword. The constructor for `Scanner` requires that we pass an **input stream**; in this case we pass `System.in` to get input from the terminal:

```java
Scanner sc = new Scanner(System.in);
```

Methods such as `nextDouble()` can then be used to get input from the terminal. For example, the following gets a **double** value inputted by the user and stores it in `dRadius`.

```java
dRadius = sc.nextDouble();
```

>[!warning] It is good practice to **close** an input stream when done using it, to avoid a resource leak using `sc.close()`. **Do not** do this if you still plan to use the stream afterward.

<!--ID: 1718708857274-->
