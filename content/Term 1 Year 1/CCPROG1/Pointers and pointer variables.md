---
target-deck: CCPROG1::Pointers and pointer variables
tags: CCPROG1
---

![[09 - Writing Functions.pdf]]

## Pointer variables

Holds a memory address where a value may be stored.
Written as a data type followed by an `*`, i.e.
```c
float* pVal; // Pointer 
```
![[Pointer.png]]
<!--ID: 1695827832792-->

### Referencing

**Referencing** is taking the address of an existing variable using the **reference operator** `&`. In the example:
```c
int  dVal;
int* pVal;
pVal = &dVal;
```
`pVal` *references* `dVal`, i.e., takes its address and sets it as its value.
<!--ID: 1695827832796-->

### Dereferencing

**Dereferencing** is retrieving the value from a memory address that is pointed to by a pointer using the **dereference operator** `*`. In the example:
```c
int* pVal;
int  dVal;
dVal = *pVal;
```
`dVal` **dereferences** `pVal`, i.e., retrieves the value from the memory address it points to.
The value stored at the address of the pointer must be a value of the **same** [[Data representation#Data types|type]] as the type of variable the pointer "points" to.
<!--ID: 1695827832802-->

### Errors and crashes

#### Invalid dereferencing

- [[#Dereferencing]] an **uninitialized** pointer can cause a crash.
- Dereferencing with an **invalid** [[Data representation#Data types|type]] cast will have the potential to cause a crash.
- Dereferencing a pointer to a variable that was dynamically allocated and was subsequently de-allocated can cause a crash
- Dereferencing a pointer to a variable that has since gone out of scope can also cause a crash.
<!--ID: 1695827832806-->

#### Invalid referencing

Invalid [[#Referencing]] is more likely to cause a [[Problem analysis, logic formulation and flowcharting#Compile-time errors|compiler error]] than [[Problem analysis, logic formulation and flowcharting#Run-time errors|run-time crashes]].
<!--ID: 1695827832810-->