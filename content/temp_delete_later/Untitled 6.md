## Question 3

**LLOVIT**, Benn Erico B.
**MARQUESES**, Lorenz Bernard B.
**SILVA**, Paulo Grane Gabriel C.

A program with $1 \times 10^6$ (one million) instructions is divided into:

| Instruction class | Percentage | Instruction count | CPI |
| ----------------- | ---------- | ----------------- | --- |
| A                 | 10%        | 100,000           | 1   |
| B                 | 20%        | 200,000           | 2   |
| C                 | 50%        | 500,000           | 3   |
| D                 | 20%        | 200,000           | 3   |

Clock rate is 2.5GHz.

### Total clock cycles

| Instruction class | IC        | CPI | Total clock cycles ($\text{IC} \times \text{CPI}$) |
| ----------------- | --------- | --- | -------------------------------------------------- |
| A                 | 100,000   | 1   | 100,000                                            |
| B                 | 200,000   | 2   | 400,000                                            |
| C                 | 500,000   | 3   | 1,500,000                                          |
| D                 | 200,000   | 3   | 600,000                                            |
| **Total**         | 1,000,000 | -   | 2,600,000 $= 2.6 \times 10^6$                      |

There are thus a total of **$2.6 \times 10^6$** clock cycles.

### Overall CPI

The overall CPI of a program can be thought of as the weighted average of the CPI of each instruction, based on how frequent that instruction is executed in the program. $$\text{CPI} = \sum_{i = 1}^n \text{CPI}_i \times \frac{\text{IC}_i}{\text{IC}_\text{total}}$$

This gives:

| Instruction class | Percentage | CPI | CPI $\times$ percentage |
| ----------------- | ---------- | --- | ----------------------- |
| A                 | 10%        | 1   | 0.1                     |
| B                 | 20%        | 2   | 0.4                     |
| C                 | 50%        | 3   | 1.5                     |
| D                 | 20%        | 3   | 0.6                     |
| **Total**         | 100%       | -   | 2.6                     |

The overall CPI is thus **2.6**

### Execution time

Clock cycle time is given by: $$\text{CCT} = \frac{1}{\text{Clock rate}}=\frac{1}{2.5\text{GHz}} = 0.4\text{ns}$$

CPU execution time is given by: $$\text{CPU time} = \text{IC} \times \text{CPI} \times \text{CCT} = (1 \times 10^6) \times 2.6 \times (4 \times 10^{-10}) = 0.00104$$

Alternatively: $$\text{CPU time} = \text{Total clock cycles} \times \text{CCT} = (2.6 \times 10^6) \times (4 \times 10^{-10}) = 0.00104$$

The CPU will take **1.04ms** to execute the program.
