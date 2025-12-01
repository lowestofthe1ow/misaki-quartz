SAHF: Copies the contents of the register AH into the RFLAGS register, e.g. `MOV AH, 0xFF` followed by `SAHF` will set all flags to 1. Does not modify reserved bits.

POPFQ: Pops from the stack and stores it into the RFLAGS register, similar to SAHF. Similarly, does not modify reserved bits.

LAHF: The inverse of SAHF; loads status flags into the register AH. Note that this preserves the reserved bits in RFLAGS.

PUSHFQ: The inverse of POPFQ; pushes a copy of RFLAGS onto the stack. Does NOT copy the VM and RF flags, which are instead cleared in the copy of RFLAGS pushed to the stack (but are not modified in the actual RFLAGS).

CLC/STC/CMC: Clears, sets, and complements (inverts) the carry flag, respectively.
