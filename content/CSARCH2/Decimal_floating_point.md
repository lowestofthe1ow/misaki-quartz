---
target-deck: CSARCH2::Decimal floating point
tags:
  - CSARCH2
title: Decimal floating point
---

## IEEE-754/2008 single-precision decimal floating point

- 1 bit sign
- 5 bit combination
- 6 bit exponent continuation
- 20 bit coefficient continuation

1. Normalize to 7 whole digits where LSD is nonzero
2. Get E' = Exponent + 101 and express in 8-bit binary
3. Express MSD in packed decimal
	- If MSD is a minor digit:
		- Combination bits: `EEDDD` where:
			- `EE` are the two MSb of E'
			- `DDD` are three LSb of the packed decimal form of the MSD
	- If MSD is a major digit:
		- Combination bits: `11EED` where:
			- `EE` are the two MSb of E'
			- `D` is `0` for 8 or `1` for 9
4. Exponent continuation comprises the 6 remaining bits of E'
5. Coefficient continuation will be the 6 remaining digits of the normalized form, in **densely packed decimal**.

<!--ID: 1750755845476-->
### Infinity

- Infinity is represented by a combination field of `1110`

<!--ID: 1750755845479-->
### NaN

- NaN is represented by a combination field of `11111`

<!--ID: 1750755845481-->
## IEEE-754/2008 double-precision decimal floating point

- 1 bit sign
- 5 bit combination
- 8 bit exponent continuation
- 50 bit coefficient continuation

1. Normalize to 16 whole digits where LSD is nonzero
2. Get E' = Exponent + 398 and express in 10-bit binary
3. Same procedure as single-precision
<!--ID: 1750755845483-->
