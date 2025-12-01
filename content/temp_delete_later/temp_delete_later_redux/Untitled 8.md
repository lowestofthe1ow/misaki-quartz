## Fetch-and-execute

1. Fetch data from memory cell whose address is currently in the program counter (PC), then put the data into instruction register (IR)
2. Add 1 to PC
3. Decode command in IR and execute it
4. Go back to step 1

## Three-bus architecture

- Execution is internal to the microprocessor
- Address bus
	- Selects a particular memory cell
	- **Unidirectional**: CPU to Memory/IO
	- Dictates the number of accessible memory cells and I/O devices
- Data bus
	- **Bidirectional**
	- Carries the contents of a selected memory cell or I/O to/from the CPU
	- Dictates the size that a CPU can process
- Control bus
	- Carries a signal to memory or I/O to read or write data