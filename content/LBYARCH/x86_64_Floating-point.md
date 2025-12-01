In x86-64, there are no "floating-point registers" per se, instead we have SIMD packed registers (referred to as XMM registers).

SIMD stands for "single instruction, multiple data"

Each XMM register is 128 bits, which can fit 4 packed single-precision floating point values or 2 packed double-precision floating-point values.

XMM registers are technically able to handle floats, doubles, and integers.

XMM registers can also be used as scalar single precision registers, where only the least significant 32 (for single-precision) or 64 bits (for double-precision) are used, using a scalar load instruction.

There are 16 XMM registers: XMM0 up to XMM15

Floating-point values are declared in memory (`section .data`). Single-precision will use a `dd` declaration, as they use 32 bits. Double precision will use `dq`.

---

In the following cases, the XMM registers are treated as scalars.

MOVSS: "Move scalar single precision", e.g. `MOVSS XMM1, [var1]`

MOVSD: "Move scalar double precision", e.g. `MOVSD XMM1, [var1]`

All SS instructions accept an XMM register as the destination. For the source, they accept an XMM register or mem32.

SD instructions accept an XMM register as the destination, then either an XMM register or mem64 as the source.

ADDSS/VADDSS/ADDSD/VADDSD: Works the same as ADD, just with XMM registers.

VADDSS (and later all the other instructions prefixed with V) is a three-operand version that has the following format:

```
VADDSS dst, src1, src2
; dst <- src1 + src2
```

SUBSS/VSUBSS/SUBSD/VSUBSD: Works the same as SUB, just with XMM registers.

MULSS/VMULSS/MULSD/VMULSD: Works the same as MUL, but without the merging of registers like with RDX:RAX.

DIVSS/VDIVSS/DIVSD/VDIVSD: Works the same as MUL, but without having to deal with the remainder.

---

RCPSS: "Reciprocal of scalar single-precision." Stores the reciprocal of the source in the destination.

There is no RCPSD instruction.

SQRTSS/SQRTSD: Stores the square root of the source in the destination.

RSQRTSS: Stores the reciprocal of the square root of the source in the destination.

There is no RSQRTSD instruction.

MAXSS/MAXSD: Stores max(source, destination) into the destination.

VMAXSS/VMAXSD: Three-operand version. Stores max(source1, source2) into the destination.

MINSS/MINSD: Stores min(source, destination) into the destination.

VMINSS/VMINSD: Three-operand version. Stores min(source1, source2) into the destination.

UCOMISS: "Unordered compare scalar single precision".

- If source1 > source2, ZF:PF:CF = 000
- If source1 < source2, ZF:PF:CF = 001
- If source1 = source1, ZF:PF:CF = 100
- If source1 or source2 is NaN, ZF:PF:CF = 111

CVTSS2SI/CVTSD2SI: "Convert single-/double-precision scalar to double-word integer", e.g. `CVTSS2SI EAX, XMM1` Rounds to nearest, ties to even. Destination register must be able to contain the source data, which is either an XMM register, mem32 (for single), or mem64 (for double)

CVTSI2SS/CVTSI2SD: "Convert double-word integer to single-/double-precision scalar", e.g. `CVTI2SS XMM1, RAX`