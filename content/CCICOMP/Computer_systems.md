---
target-deck: CCICOMP::Computer systems
tags: [CCICOMP]
draft: true
title: Computer systems
---

## Computer system

Comprises software and hardware to process data into information
<!--ID: 1697898015774-->

### Software

Includes application software and system software
<!--ID: 1697898015779-->

### Hardware

Includes processor, storage, and input/output devices. As storage capacity increases, the access speed decreases; in order of fastest to slowest:

1. Registry
2. Cache
3. Main memory
4. Secondary storage
<!--ID: 1697898015785-->

## Machine cycle

For every instruction, a processor repeats a set of four basic operations, which comprise a machine cycle:

1. Fetch
2. Decode (Decoder)
3. Execute (ALU)
4. Store (Control Unit)
<!--ID: 1697898015795-->

### Fetching

Fetching is the process of obtaining a program instruction or data item from main memory.
<!--ID: 1701426980214-->

### Decoding

Decoding refers to the process of translating the instruction into signals the computer can execute.
<!--ID: 1701426980220-->

### Executing

Executing is the process of carrying out the commands.
<!--ID: 1701426980225-->

### Storing

Storing means writing the results back to the memory
<!--ID: 1701426980229-->

### Pipelining

|Stage/cycle|1|2|3|4|5|6|7|8|
|---|---|---|---|---|---|---|---|---|
|S1 (Fetch)|I1||||I2||||
|S2 (Decode)||I1||||I2|||
|S3 (Execute)|||I1||||I2||
|S4 (Store)||||I1||||I2|

Attempts to keep every part of the processor busy with some instruction by dividing incoming instructions into a series of sequential steps performed by different processor units with different parts of instructions processed in parallel.
<!--ID: 1697898015803-->

## System clock

The system clock is crucial for the processor, relying on a small quartz crystal circuit to control the timing of all computer operations. The system clock generates regular electronic pulses, or ticks, setting the operating pace of components within the system unit. Each tick is equivalent to a clock cycle. Modern processors are superscalar, capable of executing more than one instruction per clock cycle.
<!--ID: 1701426980233-->

### Clock rate

The pace of the system clock, known as the clock speed, is measured by the number of ticks per second. Current processors can reach clock speeds in the gigahertz (billions of cycles per second) range. The faster the clock speed, the more instructions the processor can execute per second.
<!--ID: 1697898015810-->
