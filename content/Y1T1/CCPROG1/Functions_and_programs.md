---
target-deck: CCPROG1::Functions and programs
tags: CCPROG1
title: Functions and programs
---

*See also*: [[(Q&A)_Functions_and_programs|FAQ]]

C programs are usually made up of different functions.

## Functions

A **_function_** is a group of instructions in C that performs a particular task, or as the name implies, performs a specific function. As such, functions are also called subprograms. All C programs have to have at least one function, the _**main()**_ function. This is the primary function in any C program and its statements are executed first.

Functions in C are similar to functions in mathematics, for example, consider the function $f(x)$:

$$
f(x) = x^2 + 1
$$

that implies that given the value of _**x**_ we can compute or evaluate using the formula to get the value of $f(x)$. For example in this case, if $x$ were 3 then $f(x)$ would be 10. In a way, $x$ is our input, and $f(x)$ yields some output. Note however for C functions there are cases when it does not evaluate to any value and is merely a collection of instructions. This is in some programming languages called a _**procedure**_.

<!--ID: 1695033971498-->

## Libraries

A **library** in C is a collection of different functions. The C standard libraries already provide numerous built-in or **predefined functions** that we can use in our programs. Alternatively, we can also create our own functions or **user-defined functions** and even create our own library. In this chapter, we look into how to write the _**main()**_ function, use pre-defined functions, and create our own functions.

<!--ID: 1695033971506-->

## C program structure

The basic structure of a simple C program is as follows:

- Preprocessor directives
- Function definitions
- Main function
<!--ID: 1695033971512-->

### Preprocessor directives

Preprocessor directives are commands that are done before compiling the program. They usually involve changing the source file before handing it over to the compiler. Common preprocessor directives are `#include` that is used to include header files and use libraries. Defining constants using `#define` is also one example of preprocessor directives. 

<!--ID: 1695813993897-->

### Function definitions

Functions definitions are the code of the functions written by the programmer. The main function is the main block of code in our program.

<!--ID: 1695813993906-->

### Main function

The main function is the main section or the main block of the entire program. It is the first part of the program to be executed. The other sections are optional but a C program must have one and only one `main()` to run.

The open brace (`{`) signifies the start of the program, while the (`}`) signifies the end of the program. Within the braces, variable declarations should be made. The statements enclosed within the braces are the instructions that form part of the `main()` function. The `int` beside `main()` is the return type of the function, in this case, the main returns an integer. The last line, `return 0;` transfers the control from your program back to your operating system. It returns the value zero (`0`) which means there were no errors and the program terminated correctly. In this example, we have a program that computes the area of a rectangle with the base having 10.5 units and the height with 5.0 units. Note that nothing will be shown on the screen since we have not used any input/output statements yet.

```c
int main()
{
	/* variable declaration */
	float fBase, fHeight;
	float fArea;
	
	/* statements */
	fBase = 10.5;
	fHeight = 5.0;
	fArea = fBase * fHeight;
	return 0;
}
```

<!--ID: 1695034069363-->

