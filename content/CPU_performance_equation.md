## CPU performance equation

All computers follow a clock running at a constant rate. The total CPU time is therefore: $$\text{CPU time} = \text{CPU clock cycles per program} \times \text{Clock cycle time}$$

The clock **cycle time** is the reciprocal of the clock **rate**. Therefore: $$\text{CPU time} = \frac{\text{CPU clock cycles per program}}{\text{Clock rate}}$$

We can also measure how many **clock cycles** occur **per instruction**: $$\text{Cycles per instruction} = \frac{\text{CPU clock cycles per program}}{\text{Instruction count per program}}$$

Rearranging, we get: $$ \text{CPU clock cycles per program} = \text{Cycles per instruction} \times \text{Instruction count per program}$$

Substituting into the previous equation, we get: $$\text{CPU Time} = \frac{\text{Cycles per instruction} \times \text{Instruction count per program}}{\text{Clock rate}}$$

Which again is equivalent to: $$\text{CPU Time} = \text{Cycles per instruction} \times \text{Instruction count per program} \times \text{Clock cycle time}$$

We can rewrite this as (honestly just remember this): $$\text{CPU time} = \frac{\text{seconds}}{\text{program}} = \underbrace{\frac{\text{instructions}}{\text{program}}}_\text{IC} \times \underbrace{\frac{\text{cycles}}{\text{instruction}}}_\text{CPI} \times \underbrace{\frac{\text{seconds}}{\text{cycle}}}_\text{Clock cycle time}$$

In other words: $$\text{CPU time} = \text{IC} \times \text{CPI} \times \text{Clock cycle time}$$

- ***Abbreviation notes***:
	- IC: "Instruction count"
	- CPI: "Cycles per instruction"
	- CCT: "Clock cycle time"

### Total CPU clock cycles

- The total CPU clock cycles can also be calculated in terms of:
	- $\text{IC}_i$: The number of times an instruction $i$ is executed (basically "instruction count for instruction $i$")
	- $\text{CPI}_i$: The average number of clock cycles for instruction $i$
- For all instructions $i = 1 \dots n$: $$\text{Total CPU clock cycles} = \sum_{i = 1}^n \text{CPI}_i \times \text{IC}_i$$

### Overall CPI

- The overall CPI of a program can be thought of as the weighted average of the CPI of each instruction, based on how **frequent** that instruction is executed in the program: $$\text{CPI} = \sum_{i = 1}^n \text{CPI}_i \times \frac{\text{IC}_i}{\text{IC}_\text{total}}$$

---

Go read the actual slides lmao

![[ちひゃ.png|100]]
