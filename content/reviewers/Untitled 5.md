## CSARCH1 LE2 Reviewer

**Problem 1.** Design a logic circuit that outputs 1 if the four-bit binary value represented by the inputs $A$, $B$, $C$, and $D$ is divisible by 3, and outputs 0 otherwise. Designate $F$ to be the output variable.

1. Find the Boolean functions for $F$ in $\prod M$ notation.
2. Simplify $F$ in **product-of-sums** form using a Karnaugh map.
3. Suppose we are concerned only with input values of 0 to 9, and can freely **disregard** the outputs for all other inputs. Further simplify $F$ in **sum-of-products** form using a Karnaugh map.

**Problem 2.** Design a logic circuit that converts a decimal digit in $8$, $4$, $-2$, $-1$ code to its equivalent binary representation. Designate $A$, $B$, $C$, and $D$ to be the input variables, and $W$, $X$, $Y$, and $Z$ to be the output variables.

1. Find the Boolean functions for $W$, $X$, $Y$, and $Z$ in $\sum m$ notation. Find also the indices for which the output is irrelevant ("don't-care" indices).
2. Simplify each of the Boolean functions in **sum-of-products** form using Karnaugh maps with don't-care conditions.
3. Implement the Boolean function for $Y$ using the **fewest** number of **NAND** gates (and no other gates, excluding inverters). How many NAND gates were needed?
4. Implement the Boolean function for $X$ using an $8 \times 1$ multiplexer using $B$, $C$, and $D$ as selectors. List down all 8 inputs in order.

**Problem 3.** An $8 \times 1$ multiplexer outputs some Boolean function $F$. Designate $B$, $C$, and $D$ as selectors ($S_2$, $S_1$, and $S_0$, respectively) and $A$ as the input, connected as follows:

$$
\begin{align*}
I_0=I_2=I_4=I_6=0 && I_1=I_3=1 && I_5=I_7=\overline{A}
\end{align*}
$$

1. Find $F$ in $\prod M$ notation.
2. Implement $F$ using the **fewest** number of **NOR** gates (and no other gates, excluding inverters). How many NOR gates were needed?
3. Implement $F$ using a $4 \times 16$ positive-output, positive-enable decoder connected to an external OR gate. Which output wires were connected to the gate?
4. Implement $F$ using only $2 \times 4$ positive-output, negative-enable decoders and a **single** NOR gate. Show the circuit schematic.

**Problem 4.** Consider the following implementation of an 8-bit adder that makes use of both ripple addition and a carry lookahead circuit.

![[Pasted image 20250306004120.png]]

1. Find the time required for each of the output **sum** bits ($S_0, S_1, \dots, S_7$).
2. Find the time required for each of the output **carry** bits ($C_1, C_2, \dots, C_8$).
3. Find the total time required for the circuit to output the complete result (that is, all sum bits and the final carry $C_8$).
4. Find the total number of gates used in the circuit.

![[kotone_icon.png|50]]![[hiro_icon.png|50]]![[sena_icon.png|50]]![[lilja_icon.png|50]]
<!--ID: 1743401725710-->
