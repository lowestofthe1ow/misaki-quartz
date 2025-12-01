## Amdahl's Law

- The performance improvement to be gained from using a faster instruction/mode of execution is **limited** by how **frequently** that faster mode can even be used in the first place --- "make common case fast."
- Computed with two values: **Fraction Enhanced** (FE) and **Speedup Enhanced** (SE).
	- FE is the fraction of the original program/machine that can take advantage of the enhancement and is always $\leq 1$. 
		- ***Example***: If program can be improved by upgrading an algorithm that takes up  20% of its runtime, then $\text{FE} = 0.2$.
	- SE is the improvement gained by the enhanced execution mode and is always $> 1$.
		- ***Example***: If the upgraded algorithm doubles in speed, then SE = 2.
- Amdahl's law can be written as: $$\text{ET}_\text{new} = \text{ET}_\text{old} \times \left [ (1 - \text{FE}) + \frac{\text{FE}}{\text{SE}} \right ]$$

### Overall speedup

- Overall speedup is the ratio of the old to the new: $$\text{Speedup} = \frac{\text{ET}_\text{old}}{\text{ET}_\text{new}}$$
	- Again, **"large over small"**
- This may also be expressed as: $$\text{Speedup} = \left [ (1 - \text{FE}) + \frac{\text{FE}}{\text{SE}} \right ] ^{-1}$$ by substitution into Amdahl's Law shown above.


---

Go read the actual slides lmao

![[ちひゃ.png|100]]
