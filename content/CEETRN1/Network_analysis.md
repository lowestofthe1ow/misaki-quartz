## Network analysis
<!--ID: 1743401725720-->

### Node

A **node** is a point at which two or more elements are commonly connected.
<!--ID: 1743401725722-->

### Path

A **path** is a set of elements that may be traversed in order without passing through the same node twice.
<!--ID: 1743401725724-->

### Branch

A **branch** is a single path, containing a simple element connecting a node to any other node.
<!--ID: 1743401725726-->

### Loop

A **loop** is a closed path starting at a node that eventually returns to the starting node.
<!--ID: 1743401725728-->

#### Mesh

A **mesh** is a loop that does not contain any other loops within it.
<!--ID: 1743401725730-->

## Superposition theorem

The **superposition theorem** states that, in any linear circuit containing multiple independent sources, the current or voltage at any point in the circuit is given as the algebraic **sum** of the contributions of each source. Consider the circuit:

![[Pasted image 20250219175223.png|400]]

The output voltage $V_\text{out}$ can be found as the algebraic sum of the contributions of $V_1$ and $V_2$ taken separately, denoted as $V_\text{out}'$ and $V_\text{out}''$ below:

![[Pasted image 20250219175243.png|600]]

The process is summarized as follows:

1. For each **independent** voltage and current source $V_n$ or $I_n$:
	1. Replace all other independent **voltage** sources with a **short** circuit.
	2. Replace all other independent **current** sources with an **open** circuit
	3. Calculate the contribution of $V_n$ or $I_n$ to the desired output
2. Algebraically sum each of the calculated individual contributions from each source
<!--ID: 1743401725732-->

## Mesh analysis

In **mesh analysis**, a fictitious current is assigned to each mesh in the circuit. Then, we construct a KVL equation for each mesh using these assigned currents, then solve the system of equations formed. Consider the following circuit:

![[Pasted image 20250219180437.png|600]]

Around mesh 1 (the left mesh), we write:

$$
\begin{align*}
I_1R_1 + (I_1 - I_2)R_x - V_A &= 0 \\
I_1R_1 + I_1R_x - I_2R_x &= V_A
\end{align*}
$$

Around mesh 2:

$$
\begin{align*}
(I_2 - I_1)R_x + I_2R_2 + V_B &= 0 \\
I_2R_x - I_1R_x + I_2R_2 &= -V_B
\end{align*}
$$

It is then possible to solve for $I_1$ and $I_2$, then solve for the voltages at each resistor (e.g., $V_x = (I_1 - I_2)R_x$).
<!--ID: 1743401725734-->
