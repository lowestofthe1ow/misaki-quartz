---
target-deck: CSARCH1::Computer architecture and organization
tags: [CSARCH1]
title: Computer architecture and organization
---

## Computer architecture

**Computer architecture** involves **design** based on the following aspects:

- Instruction set architecture
- Organization/microarchitecture
- Hardware implementation
<!--ID: 1736785711513-->

### Instruction set architecture

- Attributes of a system visible to the programmer
- Boundary between software and hardware
- Reduced Instruction Set Computing (RISC) vs Complex Instruction Set Comuting (CISC)
<!--ID: 1738458942578-->

### Computer organization

**Computer organization** involves **implementation** and concerns itself with the following issues:

- Representation of data types (e.g. are integers 32or 64-bit)
- Class of ISA
- Instruction set (supporting MUL instruction)
- Memory addressing (byte size and endianness)
- Addressing modes (autoincrement addressing)
- Arithmetic unit
- Control signals
- Cache memory

It thus refers to the high-level aspects of a computer's design, such as the memory system, the memory interconnect, and the design of the internal processor.
<!--ID: 1736785711515-->

### Hardware

**Hardware** refers to the logic design (combinational/sequential circuit) and packaging technology of a computer.
<!--ID: 1738458942584-->

### Von Neumann architecture

Program and data are stored in the main memory, **not** in the CPU. Instructions on the main memory are **fetched**, **decoded**, and **executed** sequentially.

```
┌──────┐     ┌───┐     ┌───┐
│      │◄────┤   ├────►│   │
│Memory│◄───►│CPU│◄───►│I/O│
│      │◄───►│   │◄───►│   │
└──────┘     └───┘     └───┘
```
<!--ID: 1738458942586-->

## System

A **system** is any single or group of devices that together perform a mathematically definable transformation of or an operation on a given input to produce a specific output.
<!--ID: 1738458942588-->

### Analog system

- Continuous signal/variations
- "Approximate" measured result
- No fixed range
- Sinusoidal wave
- Example: human voice
<!--ID: 1738458942589-->

### Digital system

- Noncontinuous discrete-time signal
- "Exact" counted result
- Finite numbers
- Carries binary information (represented by 0 and 1, T and F, low and high, or on and off)
- Example: data in a computer
<!--ID: 1738458942591-->
