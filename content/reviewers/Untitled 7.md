## CSARCH1 LE3 Reviewer

**I. Concept questions.**

1. **True or false.** A latch is *level-sensitive* while a flip-flop is *edge-sensitive*.
2. **True or false.** Flip-flops have only one output.
3. **True or false.** If the inputs to an $SR$ flip-flop are both $0$, then the next state $Q(t+1)$ cannot be determined.
4. Let one of the inputs to an $SR$ flip-flop be $S=0$. If the current state $Q(t)$ is $0$, what must be the value of the input $R$ so that $Q(t+1) = 1$ (if possible)?
5. Give the state equation $Q(t+1)$ for a $JK$ flip-flop.
6. Suppose that the two input wires of a $JK$ flip-flop are connected to the same input (that is, $J = K$) in order to emulate a different type of flip-flop. What type of flip-flop is being emulated in this scenario?
7. What is the difference between a Mealy and a Moore finite-state machine?

**II. Problems.**

**Problem 1.** Consider a hypothetical "$HS$ flip-flop" that *toggles* the state $Q(t)$ whenever $H=1$. When $HS = 00$, the next state $Q(t+1)$ is *reset* regardless of the current state. When $HS = 01$, $Q(t+1) = Q(t)$.

1. Construct the truth table, characteristic table, and excitation table for the $HS$ flip-flop.
2. Find the state equation for $Q(t+1)$ in terms of $H$, $S$, and $Q(t)$.
3. Implement the $HS$ flip-flop using a $JK$ flip-flop. Find the expressions for the inputs to the $JK$ flip-flop in terms of $H$ and $S$ in sum-of-products form.

**Problem 2.** Two external inputs, $A$ and $B$, are connected to an AND gate. The output of this AND gate is connected to the $J$ input of a $JK$ flip-flop. The $K$ input to this flip-flop is given by $A + B$.

1. Find the state equation for $Q(t+1)$ in terms of $A$, $B$, and $Q(t)$.
2. Which combination of inputs $AB$, if any, will *set* the next state $Q(t+1)$?
3. Suppose that the $JK$ flip-flop is replaced with an $SR$ flip-flop. Which combination of inputs $AB$ will result in an indeterminate next state $Q(t+1)$?

**Problem 3.** Design a sequential circuit that takes in a sequence of input bits and checks if each bit is preceded by three consecutive zeroes. For each bit, the circuit must output $1$ if this condition is met; otherwise it must output $0$. For instance, for the input $10001111$, the output must be $00001000$.

**Problem 4.** Design a sequential circuit that takes in two input bit sequences and checks if each pair, when added together, will propagate or generate a carry. For each pair, the circuit will output $PG=00$ if the pair will neither propagate nor generate a carry, $PG=01$ if the
<!--ID: 1743401725707-->
