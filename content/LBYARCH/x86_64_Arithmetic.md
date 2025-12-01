ADD: Adds the source to the destination and stores in the destination. If the source is an immediate value, it can only be up to sign-extended 32 bits. If the operation results in a carry out, carry flag is set to 1.

INC: Increments the destination (adds 1). Does NOT affect the carry flag.

Note that modifying EAX will modify the entirety of RAX. This applies to INC as well; incrementing EAX will increment the entirety of RAX.

SUB: Subtracts the source from the destination and stores in the destination. If destination < source, carry flag is set to 1.

DEC: Decrements the destination (subtracts 1). Does NOT affect the carry flag. 

NEG: Gets the 2's complement of the destination and stores it in-place. The carry flag is set to 0 if the operand is 0. It is set to 1 if the most significant nibble is 0x8.

IMUL: Signed multiplication. Has a one-operand, two-operand, and three-operand variant.
- One operand: `IMUL src` will multiply src with the A register and stored somewhere double its size. Carry and overflow flags are 0 if and only if the lower half is the "full" result.
	- If the source is 8-bit, it is multiplied with AL and the result is stored in AX.
	- If it is 16-bit, it is multiplied with AX. The result is stored in DX:AX as a contiguous bit stream.
	- If it is 32-bit, it is multiplied with EAX and stored in EDX:EAX.
	- If it is 64-bit, it is multiplied with RAX and stored in RDX:RAX.
- Two operand: `IMUL dst, src` will multiply the destination by the source, truncate it (only keep the low bits that can fit in the destination), then stores it in the destination. Carry and overflow flags are 0 if and only if the truncated result is the "full" result.
- Three operand: `IMUL dst, src1, src2` will multiply the two sources, truncate the result, and store it in the destination. Carry and overflow flags are 0 if and only if the truncated result is the "full" result.

MUL: Unsigned multiplication. Identical to the one-operand IMUL, except it is unsigned. Carry and overflow flags are 0 if and only if the upper half is 0.

IDIV/DIV: Signed or unsigned division. Stores in the "reverse" order as the one-operand IMUL/MUL; `DIV src64` will calculate RDX:RAX divided by the source and store the result in RAX. The upper half (e.g. RDX) will get the remainder.

When using IDIV or DIV, an arithmetic exception will occur if we try to divide by 0, or if the quotient is too large to fit into the register for some reason.