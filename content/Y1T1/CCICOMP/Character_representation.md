---
target-deck: CCICOMP::Data representation::Characters
tags: [CCICOMP]
title: Character representation
---

## Character representation

Character data cannot be represented directly in a computer because computers process only bits; such data is represented indirectly by defining a table that assigns a numeric value to each character.

<!--ID: 1697035867295-->

### Coding methods

Characters use table-based substitution of one set of symbols or values.

All coding methods share these important characteristics:

- All users must use the same coding and decoding methods.
- The coded values must be capable of being stored or transmitted.
- A coding method represents a tradeoff among compactness, number of representable characters, and standardization.
<!--ID: 1697035867301-->

#### American Standard Code for Information Interchange (ASCII)

- 7-bit encoding format, with 1 bit for parity. Coding table has at least 128 available characters.
- Newer computers may use all 8-bits, resulting in an additional 128 characters used by manufacturers to define multinational or graphical characters
- Supported by a majority of operating systems
<!--ID: 1697035867306-->

#### Unicode

- Coding table that uses 16-bit or 32-bit codes to represent characters
- Created to extend the range limit of 8-bit coding methods to represent characters of different languages (e.g. Chinese, Arabic, Japanese, etc.)
- Currently, [[Character_representation#American Standard Code for Information Interchange (ASCII)|ASCII]] is designated as a subset of Unicode.
<!--ID: 1697035867311-->

### Device control

When text is printed or displayed on an output device such as a monitor or printer, it’s often formatted in a particular way (e.g. lines and paragraphs). Coding methods define device control codes used for text formatting by placing them immediately before or after the characters they modify.

<!--ID: 1697035867317-->

#### Carriage return (CR)

Moves the print head or insertion point to the beginning of a line.

<!--ID: 1697035867322-->

#### Line feed (LF)

Moves the print head or insertion point down one line.

<!--ID: 1697035867325-->

## Operations on characters

Characters are usually handled similarly to unsigned integers by the CPU. Thus, integer instructions (add, copy, compare equal) often have similar effect to unsigned integers and characters. However, nonequality comparisons compare the characters numeric codes and hence are dependent on their **collating sequence**, e.g.:

```
'A' != 'a'
'a' > 'b'
```

<!--ID: 1697035867328-->
