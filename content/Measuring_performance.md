## Measuring performance

- "$X$ is faster than $Y$" means that $n > 1$ for $$n = \frac{\text{Execution time of } X}{\text{Execution time of } Y}$$
- **"Large over small"**

### Arithmetic mean

- Arithmetic mean (average) **execution time** for all programs in a workload: $$\frac{\displaystyle \sum_{i = 1}^n \text{Time}_i}{n}$$
- Assumes **evenly distributed workload** for all programs
	- ***Analogy***: CEMICRO, CEPARCO, and CEMCLRN are all worth 3 units, so their effects on your GPA are evenly distributed. But LBYMCRO is only 1 unit, so it has a weaker effect on your GPA.

### Harmonic mean

- Harmonic mean of the **execution rates** for all programs in a workload
- This is equivalent to the reciprocal of the arithmetic mean of the reciprocals of the execution rates for all programs.
- Basically, the reciprocal of the arithmetic mean metric shown above: $$\overbrace{\frac{n}{\displaystyle \sum_{i = 1}^n \frac{1}{\text{Rate}_i}}}^\text{Harmonic mean of execution \textbf{rates}} = \overbrace{\frac{n}{\displaystyle \sum_{i = 1}^n \text{Time}_i}}^\text{Reciprocal of arithmetic mean of execution \textbf{times}}$$
- Again assumes **evenly distributed workload** for all programs

### Weighted arithmetic mean

- Variant of basic arithmetic mean for when programs have uneven/unequal workloads
- Assign a **weighting factor** to each program in the workload: $$\sum_{i = 1}^n \text{Weight}_i \times \text{Time}_i$$

#### Equal time weighting

- A form of weighting the programs based on their execution rates.
	1. Add all of the execution **rates** for all **programs** for a **single processor**: $$\sum_{j = 1}^n \text{Rate}_j = \sum_{j = 1}^n \frac{1}{\text{Time}_j}$$ This is your "total" execution rate to use as reference for the weighting.
	2. The $\text{Weight}_i$ for a program is given by the execution rate for that program divided by the "total" execution rate: $$\text{Weight}_i = \frac{\text{Rate}_i}{\displaystyle \sum_{j = 1}^n \text{Rate}_j} = \frac{\displaystyle \frac{1}{\text{Time}_i}}{\displaystyle \sum_{j = 1}^n \frac{1}{\text{Time}_j}} = \frac{1}{\text{Time}_i \times \displaystyle \sum_{j = 1}^n \frac{1}{\text{Time}_j}}$$ ***Intuition***: This is the proportion of the "total" execution rate that is contributed by the program. Pick whichever form is the easiest to remember

### Geometric mean

- Normalize the execution time based on a reference machine by dividing the execution times for each machine by that of the reference machine. For example:

| Computer             | A   | B   | C   |
| -------------------- | --- | --- | --- |
| Execution time (sec) | 1   | 10  | 20  |
| Normalize to **B**   | 0.1 | 1   | 2   |

- Get the geometric mean of the normalized execution times of each **program** for a computer: $$\sqrt[\displaystyle  n]{\prod_{i = 0}^n \text{Normalized Time}_i}$$

## Summary

- Arithmetic mean and harmonic mean only work when workload is distributed evenly among all the programs.
- Weighted arithmetic mean is biased towards the performance characteristics of extreme computers.
- Geometric mean can give a consistent comparison since the execution time is normalized to a reference computer.

---

Go read the actual slides lmao

![[ちひゃ.png|50]]
