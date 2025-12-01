## Multiplication

Before performing any multiplication, make sure both operands are the same length (sign-extend the shorter one as necessary)

### Pencil-and-paper multiplication

1. Represent both multiplicand m and multiplier n in 2's complement.
2. The first intermediate product has a length of m+n bits.
3. Succeeding intermediate products are shifted left.
4. If the multiplier is negative, add the 2’s complement of the multiplicand, sign-extended and shifted to sign-bit position

### Booth's/Extended Booth's algorithm

Perform the same steps as pen-and-paper, but replace multiplier with Booth's/Extended Booth's equivalent.

#### Booth's equivalent

1. Append 0 to LSb
2. Pair 2 bits starting at LSb
	- 00 → 0
	- 01 → +1
	- 10 → -1
	- 11 → 0

#### Extended Booth's equivalent

1. If odd number of bits, sign extend once
2. Append 0 to LSb side
3. Group 3 bits starting at LSB
	- 000 → 0
	- 001 → +1
	- 010 → +1
	- 011 → +2
	- 100 → -2
	- 101 → -1
	- 110 → -1
	- 111 → 0
<br /><br /><br /><br />

#### Sequential circuit binary multiplier

1. $A \leftarrow 0, Q_{-1} \leftarrow 0$
2. $M \leftarrow \text{multiplicand}, Q \leftarrow \text{multiplier}$
3. Check concatenated value of $Q_0 Q_{-1}$
	- If $Q_0 Q_{-1} = 01$, then $A \leftarrow A + M$
	- If $Q_0 Q_{-1} = 10$, then $A \leftarrow A - M$
	- Otherwise, do nothing
4. Arithmetic shift right $A Q_0 Q_{-1}$

## Division

### Restoring division

1. $Q \leftarrow \text{dividend}$.
2. $A \leftarrow 0$. $A$ should be 1 bit longer than $Q$.
3. $M \leftarrow \text{divisor}$. Sign extend $M$ to match the length of $A$.
4. For each bit in $Q$:
	1. Shift left $AQ$.
	2. $A \leftarrow A - M$
	3. Check sign bit of $A$:
		- If negative, undo step 2 ($A \leftarrow A + M$) and reset LSb of $Q$ ($Q_0 \leftarrow 0$)
		- If positive, set LSb of $Q$ ($Q_0 \leftarrow 1$)
5. Quotient will be in $Q$ while remainder will be in $A$. Adjust sign as needed.

### Non-restoring division

1. $Q \leftarrow \text{dividend}$.
2. $A \leftarrow 0$. $A$ should be 1 bit longer than $Q$.
3. $M \leftarrow \text{divisor}$. Sign extend $M$ to match the length of $A$.
4. For each bit in $Q$, check sign bit of $A$.
	- If negative ($A_n = 1$)
		1. Shift left $AQ$.
		2. $A \leftarrow A + M$
		3. $Q_0$ gets complement value of the MSb of $A$.
	- If positive ($A_n = 0$):
		1. Shift left $AQ$.
		2. $A \leftarrow A - M$
		3. $Q_0$ gets complement value of the MSb of $A$.
5. If final result in $A$ is negative, perform restoration ($A \leftarrow A + M$)
6. Quotient will be in $Q$ while remainder will be in $A$. Adjust sign as needed.
