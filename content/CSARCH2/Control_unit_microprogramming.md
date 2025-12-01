## Control unit and microprogramming

### Processing unit

- The *processing unit* is a subsystem of the Von Neumann architecture that executes program instructions and is often called the *central processing unit* (CPU).
- The term *central* is not as appropriate in the present as it was before since today’s computers include several processing units. The term “processor” can be used instead.

### Von Neumann architecture

- The *Von Neumann architecture* is a *stored-program architecture*; program and data are stored in the main memory (not in the CPU)
- Instructions are *fetched*, *decoded*, and *executed* sequentially (or at least they appear to be).

### Bus

- The CPU communicates externally via a *bus*, or a set of parallel wires or lines.
- Address bus:

CPU communicates externally via a bus

• Bus – set of parallel wires or lines

Three types of bus:

• Address bus: used to select the desired memory or I/O devices by providing a unique address that corresponds to one of the memory or I/O devices; UNI-DIRECTIONAL (from CPU to external).

If a CPU has an x-bit address bus, it can theoretically access 2^x memory locations, but this is usually less in actuality.

• Data bus: used to transfer data to and from the memory or I/O devices; BI-DIRECTIONAL

If a processor has an x-bit data bus, it can transfer x bits of data at a time

• Control bus: used to carry control signals to the memory or I/O devices; BI-DIRECTIONAL

Common bus clock: is used to coordinate activities in a system bus.

The time interval from one clock pulse to the next is called a bus cycle.

Bus cycle time is the inverse of the bus clock rate.

if the bus clock rate is 400MHz, the bus cycle time is: 2.5ns

Bus capacity or data transfer rate is data transfer unit times the clock rate

The bus capacity of a parallel bus with 64-bit data lines and a 400MHz clock rate is: 3.2Gbytes/sec

Single-bus CPU architecture

Program Counter (PC): stores the address of the next instruction to execute.

Instruction Register (IR): stores the instruction currently being executed.

Control Unit (CU): generates the control signals needed to direct the operation of the different components of the CPU

Memory Address Register (MAR): holds the ADDRESS of the memory location to be accessed.

Memory Data Register (MDR): holds the DATA to be stored or retrieved from memory.

CPU registers R0 to R(n-1) are general purpose. Equivalent to EAX, etc.

TEMP register is transparent to the programmer and only used internally by the processor

Arithmetic and Logic Unit (ALU): performs specified operations on the data.

Y register: used to hold a second operand for binary ALU operations.

Z register: used to hold the result of an ALU operation.

Multiplexer (MUX): selects either the output of register Y or a constant value 4 as input A of the ALU. The constant 4 is used to increment the program counter.

Gating signals

Data flow within the CPU is controlled by gating signals.

Only one component may output to the bus at any instant, but more than one component can "listen" to the bus.

Gating signals are identified by the register name and a subscript denoting the direction of the data flow, e.g. RAXin will mean RAX gets data from the bus, while RAXout means that the contents of RAX will be copied onto the bus.

The content of Y and the bus are ALWAYS VISIBLE to the ALU.

The output of the ALU is gated to the Z register.

The content of IR is always visible to the control unit.

In some instances, data is included in the instruction passed to the IR.

- IR_address_fieldout (IRAFout): Used as an address for a memory access
- IR_data_fieldout (IRDFout): Used as immediate data for an operation

All CPU instructions, with few exceptions, can be decomposed into a combination of 4 basic operations:

• Register Transfer: Copying from a source register to a destination register

• ALU Operation: Involves an ALU operation on the data. For binary operations, one operand must be placed in the Y register first. For unary operations, write data to bus, tell ALU what to perform, then store output in Z.

• Memory Fetch: Requires data to be read from memory; place an address into MAR, send a READ signal, wait for MFC signal when the data is ready, then get data from MDR.

• Memory Store: Requires data to be written to memory; place an address into MAR, place data into MDR, send a WRITE signal, wait for MFC signal when the writing is complete.

WMFC is not necessarily on the same line. Arrival of the MFC indicates that both the MAR and MDR may already be changed. Hence, the WMFC may be placed at a later line if neither the MAR nor the MDR are require at that time. Moreover, placing of information in the MDR may precede that of the MAR.

Fetch phase: The fetch phase is the same for all instructions:

PCout, MARin, READ, SELECT 4, ADD, Zin

Zout, PCin, WMFC

MDRout, IRin

Execution phase: Depends on the instruction; MICROPROGRAMMING

Microprogramming for MOV EAX, EBX

EBXout, EAXin, END

Microprogramming for ADD EAX, EBX

EAXout, Yin

EBXout, SELECT Y, ADD, Zin

Zout, EAXin, END

Microprogramming for INC EAX

EAXout, SET CARRY-IN, ADD, Zin

Zout, EAXin, END

Microprogramming for MOV EAX, [EBX]

EBXout, MARin, READ, WMFC

MDRout, EAXin, END

Microprogramming for MOV [EAX], EBX

EBXout, MDRin,

EAXout, MARin, WRITE, WMFC, END

Microprogramming for MOV EAX, 0x12345678

IRDFout, EAXin, END

Microprogramming for MOV EAX, [ALPHA]

IRAFout, MARin, READ, WMFC

MDRout, EAXin, END

Microprogramming for MOV EAX, [ESI]

ESIout, MARin, READ, WMFC

MDRout, EAXin, END

Microprogramming for MOV EAX, [ALPHA+ESI]

ESIout, Yin

IRAFout, SELECT Y, ADD, Zin

Zout, MARin, READ, WMFC

MDRout, EAXin, END

Microprogramming for MOV EAX, [ALPHA+ESI+EBX]

EBXout, Yin

ESIout, SELECT Y, ADD, Zin

Zout, Yin

IRAFout, SELECT Y, ADD, Zin

Zout, MARin, READ, WMFC

MDRout, EAXin, END

Microprogramming for `MOV EAX, [ALPHA+ESI*4]`

ESIout, SELECT 4, MUL, Zin

Zout, Yin

IRAFout, SELECT Y, ADD, Zin

Zout, MARin, READ, WMFC

MDRout, EAXin, END

Microprogramming for `MOV EAX, [ALPHA+EBX+ESI*4]`

ESIout, SELECT 4, MUL, Zin

Zout, Yin

EBXout, SELECT Y, ADD, Zin

Zout, Yin

IRAFout, SELECT Y, ADD, Zin

Zout, MARin, READ, WMFC

MDRout, EAXin

Microprogramming for ADD EAX, [ALPHA+ESI]

ESIout, Yin

IRAFout, SELECT Y, ADD, Zin

Zout, MARin, READ, WMFC

MDRout, Yin

EAXout, SELECT Y, ADD, Zin

Zout, EAXin, END

Microprogramming for IMUL dword [ESI]

ESIout, MARin, READ, WMFC

MDRout, Yin

EAXout, SELECT Y, MUL, Zin

Zout, EAXin, EDXin, END

Microprogramming for `LEA EAX, [ALPHA + ESI*4]`

ESIout, SELECT 4, MUL, Zin

Zout, Yin

IRAFout, SELECT Y, ADD, Zin

Zout, EAXin, END

Microprogramming for absolute branching - JMP L1 (L1 is the address)

IRAFout, PCin, END

Microprogramming for relative branching - JMP L1 (L1 is the offset)

IRDFout, Yin

PCout, SELECT Y, ADD, Zin

Zout, PCin, END

Microprogramming for conditional relative branching - JMP L1

If (CF == 0) then END, IRDFout, Yin

PCout, SELECT Y, ADD, Zin

Zout, PCin, END

CALL L1

PCout, MDRin

SPout, SELECT 4, SUB, Zin

Zout, SELECT 4, SUB, Zin

Zout, SPin, MARin, WRITE, WMFC

IRAFout, PCin, END
