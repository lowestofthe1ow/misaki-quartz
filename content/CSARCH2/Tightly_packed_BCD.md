1. Label the 10 bits from `p` to `y`.
2. Bits `r`, `u`, and `y` are the least significant bits of each nibble in the packed decimal representation.
3. Bit `v` is `1` iff any of the digits is a major digit.
4. Bits `w` and `x` mark which digits are major digits.
	- `00` means the first digit (least significant digit) is major.
	- `01` means the middle digit is major.
	- `10` means the last digit (most significant digit) is major.
	- `11` means there are multiple major digits.
	- If there are no major digits, simply copy the corresponding bits in the least significant digit.
5. Bits `pq` and `st` will take the middle two bits of the minor digits. The middle digit will take priority for the `st` slot.
	- If there is only one minor digit, `st` will index the location of this minor digit. `pq` will take its middle two bits.
		- `00` means the least significant digit is minor.
		- `01` means the middle digit is minor.
		- `10` means the most significant digit is minor.
	- If all digits are major, `pq` is `00` and `st` is `11`.


111 0011111111
![[DPD.png]]