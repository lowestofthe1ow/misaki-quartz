## Registers

Storage locations within the CPU that hold data and instructions being actively used.

## 64-bit Registers

RAX, RBX, RCX, RDX, R8-R15, RDI, RSI, RBP, RSP, RIP, RFLAGS

## 32-bit Registers

EAX, EBX, ECX, EDX, EDI, ESI, EBP, ESP, EIP, R8D-R15D, EFLAGS

## 16-bit registers

AX, BX, CX, DX, DI, SI, BP, SP, IP, R8W-R15W, FLAGS

## 8-bit registers

AH, AL, BH, BL, CH, CL, DH, DL, DIL, SIL, BPL, SPL, R8B-R15B

## (R)AX

Accumulator for operands and results data.

## (R)BX

Pointer to data in the data segment.

## (R)CX

Counter for string and loop operations.

## (R)DX

I/O pointer.

## Index Registers

(R)DI (Destination Index) and (R)SI (Source Index).

## (R)DI (Destination Index)

Usually used as a pointer to data in the data segment; also used as a pointer for string-based instructions.

## (R)SI (Source Index)

Usually used as a pointer to data in the data segment; also used as a pointer for string-based instructions.

## Pointer Registers

(R)SP (Stack Pointer), (R)BP (Base Pointer), and (R)IP (Instruction Pointer).

## (R)SP (Stack Pointer)

Always points to the top of the stack. Updated only when data is pushed onto or popped from the stack.

## (R)BP (Base Pointer)

Pointer to data in the stack segment.

## (R)IP (Instruction Pointer)

Pointer to instruction in the code segment (i.e., contains the address of the next instruction to be executed). Updated automatically by the processor. Do not modify the value at any time.

## RFLAGS

Contains 6 status flags, 1 control flag, and various system flags. The upper 32 bits of RFLAGS are reserved (bits 32-63). Bits 1, 3, 5, 15, and 22 are reserved.

## Status Flags

Indicate the conditions that are produced as a result of executing an arithmetic or logic instruction. Includes Carry Flag (CF), Parity Flag (PF), Auxiliary Carry Flag (AF), Zero Flag (ZF), Sign Flag (SF), and Overflow Flag (OF).

## Carry Flag (CF)

Bit 0 of RFLAGS. CF is set if there is a carry-out from the most significant bit (MSb) of the result or a borrow-in to the MSb of the result during the execution of an arithmetic instruction.

## Parity Flag (PF)

Bit 2 of RFLAGS. PF is set if the result produced has even parity (i.e., an even number of 1s). Only the least significant byte is tested.

## Auxiliary Carry Flag (AF)

Bit 4 of RFLAGS.

## Zero Flag (ZF)

Bit 6 of RFLAGS.

## Sign Flag (SF)

Bit 7 of RFLAGS.

## Overflow Flag (OF)

Bit 11 of RFLAGS.

## Direction Flag (DF)

Bit 10 of RFLAGS. The value of DF determines the direction in which string operations will occur. Setting the DF flag causes the string instructions to auto-decrement. Clearing the DF flag causes the string instructions to auto-increment.