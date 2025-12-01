Handshake signals - Logic signals that allow communication between CPU and peripherals
Polling - Technique where CPU waits for the peripheral when initiating data transfer. CPU regularly reads the handshake signal to see if its okay to start transferring data
Interrupts - Technique alternative to polling that allows the CPU to do other jobs while waiting for I/O
Interrupt Service Routine - Refers to the program that services the interrupt
IRQ', XIRQ' - Pins on the HC11 that accept interrupts
I bit - Global interrupt bit that controls all interrupt requests except for the XIRQ'
Vector address - Location where the programmer/designer stores the address of the ISR
IRQ' - An interrupt pin that can be "masked" through the I bit
XIRQ' - An interrupt pin that is non-maskable and has higher priority.
Off - What is the value of XIRQ' on reset? 
X-bit - Used to turn on the XIRQ'
No - Can the XIRQ' be turned off after turning on?
FFF4, FFF5 - Vector addresses for the XIRQ'
FFF2, FFF3 - Vector addresses for the IRQ'

$1000 to $103F - 64-byte register range that is reserved for built-in I/O on the HC11 

Parallel I/O - Allocates one bit for each data bit to be transmitted or received
Port A - Which HC11 port is half-output half-input?
4, 5, 6 - Which Port A pins are fixed to output?
0, 1, 2 - Which Port A pins are fixed to inputs?
3, 7 - Which Port A pins are bidirectional?
Port B - Which 8-bit port on the HC11 is fixed to output?
Port C - Which 8-bit port on the HC11 is bidirectional (programmable)?
Port B and C - Which ports on the HC11 serve as interfaces when in expanded mode?
Port D - Which 6-bit port on the HC11 is shared with the serial communications interface?
Port E - Which 8-bit port on the HC1 is shared with the ADC?

$1000 - Address for Port A
$1003 - Address for Port B
$1004 - Address for Port C
$1008 - Address for Port D
$100A - Address for Port E



Port B and C - Which ports can be configured for parallel I/O with handshake signals?

Simple strobe, full input, full output - Three modes of the Handshake I/O subsystem

STRA, STRB


PIOC - Parallel I/O Control


Simple strobe mode - HNDS = 0 in PIOC

Port B is strobed output
Port A is latched input

STAF

Interrupt circuit example notes

```
VECTOR EQU $FFF2

ISR  (Interrupt routine here...)

    ORG VECTOR
ADDR    DW ISR <-- Loads address of ISR into VECTOR
```

Quiz 1

CMOS - Type of device that has about zero current demand when not switching between logic levels
CPU voltage - Increasing this will increase clock speed
Temperature - Decreasing this will increase clock speed
Assembler directives - What do you call tokens like ORG and EQU
Special Test Mode - HC11 operating mode that is accessible only to the manufacturer
Termination - Removes bus reflection
 