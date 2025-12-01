ALL shift and rotate instructions have `count` capped at 5 bits for 32 bit and 6 bits for 64 bit.

For example, if you try to shift RAX 69420 times, it will cap at 63 times (`0b111111`)

---

SHL/SAL: Add 0 to least significant bit

SHR: Add 0 to most significant bit

SAR: Duplicate the most significant bit

SHLD/SHRD: Shift DESTINATION:SOURCE as a continuous bit stream, but the source is not modified, e.g.:

```
MOV AX, 0xABCD
MOV BX, 0x1234
SHRD BX, AX, 4
```

...will leave AX unmodified as `0xABCD` but BX will be `0xD123`

There is no SARD instruction

In all cases, bit shifted out goes to the carry flag

---

ROL/ROR: Shift left, but instead of adding 0, the bit shifted out is rotated back into the other end

Using ROL/ROR on an 8-bit register 8 times will return the thing to the original

Carry bit gets a copy of the rotated bit

RCL/RCR: Rotate through carry. The carry is part of the rotation (CF:DESTINATION is treated as one continuous bit stream). Bit pushed out goes to carry flag, then carry flag goes to other end of the destination.

Using RCL/RCR on an 8-bit register 9 times (+1 because you go through carry) will return the thing to the original