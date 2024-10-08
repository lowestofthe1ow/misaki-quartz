---
target-deck: CSADPRG::Unconditional branching and guarded commands
tags: CSADPRG
title: Unconditional branching and guarded commands
draft: true
---

## Unconditional branching

`goto` transfers control to a specified place in the program

`goto` is powerful (all other control structures can be simulated/built with `goto` and a selector), dangerous (makes program difficult to read)

<!--ID: 1728275348114-->

## Guarded commands

```
if i = 0 -> sum := sum + i
[] i > j -> sum := sum + j
[] j > i -> sum := sum + k
fi
```

If i = 0 and j > i, this statement chooses **nondeterministically** (as it shouldn't matter which is chosen) between the first and third assignment statements. 

<!--ID: 1728275348117-->

## Loop guarded command

**Evaluate all Boolean expressions**
If more than one is true, **nondeterministically choose one then loop again**
If all are false, terminate.

sequence, selection, and pretest logical loops express computation

legitimate uses of goto with restricted brnach statements

no consensus on the precise set of control statements

<!--ID: 1728275348121-->
