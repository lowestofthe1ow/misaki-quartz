---
target-deck: CCPROG1::Problem analysis, logic formulation and flowcharting
tags: CCPROG1
title: Problem analysis, logic formulation and flowcharting
---

## Programming

**Programming** is the process and art of making a program. A **program** is a set of instructions that directs a computer. The _**program development life cycle**_ is a set of steps or phases that are used to develop a program in any programming language. Generally, the _**program development life cycle**_ contains 5 phases, which are as follows: 1. problem analysis; 2. algorithm or flowchart design; 3. implementation or coding; 4. running, testing, and debugging; and 5. documentation and maintenance. Figure 2.1 shows a diagram of a cyclical program development life cycle.
<!--ID: 1694694364008-->

## Program planning and development

<!--ID: 1716721003461-->

### Problem analysis

The first step in program development is analyzing the problem. In general, computer programs try to solve a specific real-world problem. The initial task of a programmer is to identify and understand the problem. Since the computer is an input-output machine, one of the main tasks is identifying the input and output of the program, while considering all the information needed to solve the problem, and then coming up with the specific steps to transform the input into the desired output. **During this phase, we also consider if there are any constraints or conditions present, and how they influence or affect the problem-solving process.**

<!--ID: 1694694364012-->

### Algorithm design / Setting up algorithms to solve problems

After the problem has been clearly defined, a list or sequence of steps to solve the given problem must be formulated. This sequence of steps is called an _**algorithm**_.

An _**algorithm**_ can be described in many ways. A natural language such as Filipino, English, or Chinese can be used but we must be very careful that the algorithm should be written in a logical and clear manner. Graphical forms or notations such as **_flowcharts_** can be used, an improvement of the former, but is more sophisticated. It is important to note that in whatsoever manner an algorithm is written, it still cannot be executed on a computer simply because it cannot be completely understood by the machine.

<!--ID: 1694694364016-->

### Coding / Implementation

After having set up the algorithm, the next step is to convert this list of instructions into code, a language that the computer can understand and execute, and this process is called coding.

Our code must be written in a specific programming language. This code can easily be converted by a compiler and assembler to machine code or machine language that a computer can understand. In our case, we will be utilizing the C programming language. This code or list of instructions written in a specific programming language is what we call a **program**.

<!--ID: 1694694364021-->

### Encoding

Involves entering code into a computer.

<!--ID: 1694694364024-->

### Running, testing, and debugging

<!--ID: 1716721003466-->

#### Compilation

Involves the conversion of source code to machine code. A successful compilation generates an executable file. This can be done through a terminal with `gcc` in Windows:

```
gcc -Wall -std=c99 [source filename] -o [output filename]
```

<!--ID: 1694694364028-->

#### Running

Involves executing the compiled program.

<!--ID: 1694694364032-->

#### Testing

Testing is verifying that our program is correct and is free of any errors. It is the art of preparing different sets of sample input data that will be used on our program. It involves checking whether code matches and allows for the discovery of bugs through test sets and cases; bugs can stem from **syntax** or **logical** errors and may occur at **compile-time** or **run-time**.

<!--ID: 1694694364035-->

##### Syntactical errors

_**Syntactical errors**_ result from failure to follow the syntax of the language. _**Syntax**_ refers to the grammatical rules of the language defining its legal constructs. Examples of which are unrecognized instructions, missing punctuation marks, and misspelled names.

<!--ID: 1694694364040-->

##### Logical errors

_**Logical errors**_ are hard to identify. What is erroneous here are the outputs seen onscreen which did not conform to or match the expected results. Such errors arise during the formulation of the algorithm or in the coding of the program that implements the algorithm due to the wrong analysis or perhaps wrong approach of the programmer as he tackles the problem given.

<!--ID: 1694694364044-->

##### Compile-time errors

_**Compile-time errors**_ halt the [[Problem_analysis,_logic_formulation_and_flowcharting#Compilation|compilation]] of the program. Program codes are translated completely so long as their _**syntax**_ is correct. Once a **_syntax error_** is encountered during compilation, this is considered to be a compile-time error.

<!--ID: 1694694364047-->

##### Run-time errors

Errors that appear during the program's execution are called _**run-time errors**_. Once a program starts running, it means that the program is already free of syntax errors and compilation has successfully finished. However, it may still have logical errors that may cause the abnormal termination of the program. An example would be dividing a certain number by zero. Another would be the program that is caught in an endless loop that cannot be stopped using the usual user input and has to be terminated through external means to end the process. Some endless loops can also cause resources, like the RAM, to be exhausted which would eventually lead to an abnormal termination of the program.

<!--ID: 1694694364050-->

#### Documentation / Maintenance

Internal documentation via code [[Tokens_and_token_classification#Comments|comments]] can produce a technical manual for developers. Eventually, a user manual detailing how to use the program on the user's end is created.

<!--ID: 1694694364052-->

##### User's manual

Software usually comes with a **user's manual** and it contains information on the software and hardware requirements, installation procedures, and step-by-step instructions on how to use the system. This type of documentation is used by the user of the program.

<!--ID: 1694694364055-->

##### Technical manual

The _**technical manual**_ is a printed copy of the information regarding how the program was designed and how it was created. Issues involved in choosing the data type or data structure, as well as the algorithm for the solution, are also included. On the other hand, the _**internal documentation**_ has the same information but these are stored within the program themselves, through the use of **_comments_**.

<!--ID: 1694694364058-->
