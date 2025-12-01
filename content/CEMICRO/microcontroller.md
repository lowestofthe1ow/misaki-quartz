## Decoupling capacitor

- Capacitor placed in parallel with an entire IC
- Noise caused by other circuit elements is shunted through the capacitor
- 10μF electrolytic capacitor recommended
- Better stability and more reliable startup

## M68HC11

![[Pasted image 20250926074109.png]]

- CMOS (MOSFET) technology
- Clock can be any crystal rated up to the maximum of the chip (8 MHz crystal usually)

![[Pasted image 20250926074933.png]]
![[Pasted image 20250926075326.png]]

![[Pasted image 20250926080111.png]]

![[Pasted image 20250926080931.png]]

- DIP = Dual set of pins

![[Pasted image 20250926082153.png]]

## M68HC11 Addressing mode

- Complex instruction set computer (CISC)
- $ - hex
- @ - octal
- % - binary
- ' ' - single ASCII
- \# - immediate value

### Immediate addressing

- Loads a value (immediate argument) into a register 
- Uses the operand as the value put into the register

```
LDAA #22 <-- Loads decimal 22 into accumulator A
LDD #$1234 <-- Loads hex 1234 into accumulator D
```

### Extended addressing

- 16-bit effective address

```
LDAA $2E17 <-- Loads data from address 2E17 into accumulator A
STAA $2E17 <-- Stores the data from A into 2E17H
```

### Direct addressing

- ...8-bit effective address

```
LDAA $17 <-- same as extended addressing, assumes address is 0017
```


### Inherent addressing

- No address?
- Why the fuck is this called an addressing mode
- "In my book it's not" -- sir clem

```
CLRA <-- clears A
```


### Indexed addressing

- 8-bit offset address plus the X or Y register as the effective address

![[Pasted image 20250926084830.png]]

- Addition of offset and address is done internally (X or Y is not modified)

### Relative addressing

- Branch instruction
- +128/-127 from the branch instruction

```
BEQ HANG
```




![[Pasted image 20250926085557.png]]![[Pasted image 20250926085919.png]]