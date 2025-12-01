## Register

- Is in the processor
- No need to declare, can refer to by name
- 18 registers including the flags.
	- For 64-bit:
		- RAX-RDX
		- R8-R15
		- RSI, RDI, RBP
		- RSP, RIP (cannot be used)
		- RFLAGS
	- Can be seen as 64-bit, 32-bit, 16-bit, or 8-bit
		- R - 64-bit
		- E - 32-bit
		- No prefix - 16-bit
		- H - 8-bit, upper
		- L - 8-bit, lower
		- For numbered registers: R8, R8D, R8W, R8B for 64-bit, 32-bit, ...

### Flags

- Carry - 1 if carry-out in operatio
- Zero - If result is zero
- Sign - Based on MSb, sign
- Overflow - Overflow if result in arithmetic operation is "incorrect"
- Parity - 1 if even number of 1s
- Auxiliary (half carry) - carry from lower nibble to upper nibble