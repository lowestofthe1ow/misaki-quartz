---
target-deck: CSADPRG::Unconditional branching and guarded commands
tags: [CSADPRG]
title: Unconditional branching and guarded commands
draft: true
---

## Unconditional branching

The `goto` statement transfers control to a specified place in the program. This is known as **unconditional branching**

>[!warning] `goto` is powerful (all other control structures can be simulated/built with `goto` and a selector), dangerous (makes program difficult to read and maintain)
>Readability is best when the execution is from top to bottom.
<!--ID: 1728275348114-->

## Guarded commands

```
if i = 0 -> sum := sum + i
[] i > j -> sum := sum + j
[] j > i -> sum := sum + k
fi
```

If i = 0 and j > i, **guarded commands** choose **nondeterministically** (as it shouldn't matter which is chosen) between the first and third assignment statements.
<!--ID: 1728275348117-->

## Loop guarded command

Loop guarded commands specify Boolean expressions to evaluate. If more than one is true, the command will **nondeterministically** choose one (as in guarded commands) and then loop again. If all are instead **false**, the loop terminates.
<!--ID: 1728275348121-->
