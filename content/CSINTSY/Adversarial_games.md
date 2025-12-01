---
target-deck: CSINTSY::Adversarial games
tags: [CSINTSY]
title: Adversarial games
---

## Adversarial games

- There exist real-world problems where the agent is not the only one making decisions, e.g. turn-based board games.
- There is an **opponent** that makes an action at certain points, often trying to prevent you from reaching your goal.
- This presents challenges:
	- We cannot completely predict the opponent's behavior, so we cannot plan a clear path to the goal
	- Decision must be made quickly, usually within a time limit

<!--ID: 1750164579977-->
### Game tree

- A **game tree** models the possible choices that can be made by either player throughout the game
- Similar to a search tree
- Each node represents a decision point for either player
- Each path from the root to a leaf is a unique run of the game

<!--ID: 1750164579980-->
#### Depth

- **Depth** refers to the number of turns since the start state

| Depth | Turn       |
| ----- | ---------- |
| 0     | 1st player |
| 1     | 2nd player |
| 2     | 1st player |
| 3     | 2nd player |
| ...   | ...        |

<!--ID: 1750164579983-->
#### Ply

- **Ply** refers to a single cycle of all players' turns

| Depth | Ply     | Turn       |
| ----- | ------- | ---------- |
| 0     | 1 ply ┌ | 1st player |
| 1     | 1 ply └ | 2nd player |
| 2     | 1 ply ┌ | 1st player |
| 3     | 1 ply └ | 2nd player |
| ...   |         | ...        |

<!--ID: 1750164579985-->
## 2-player zero-sum game

- A **2-player zero-sum game** is played between 2 players where one player's gain is equivalent to the other player's loss.
- **If one person wins, the other person loses by the same degree**
- Examples:
	- Tic-tac-toe
	- Chess
	- Checkers

<!--ID: 1750164579987-->
### Zero-sum game formulation

- $\text{Players} = \{\text{agent}, \text{opp}\}$
- $s_\text{start}$: The **start state**
- $\text{Actions}(s)$: The possible actions from a state $s$
- $\text{Succ}(s, a)$: The successor function; resulting state when choosing an action $a$ from a state $s$
- $\text{IsEnd}(s)$: True iff $s$ is an end state (game is finished)
- $\text{Utility}(s)$: Agent's utility at an end state $s$ (i.e., the expected value of an end state $s$)
- $\text{Player}(s)$: Whose turn it is at state $s$ (agent or opponent)

<!--ID: 1750164579989-->
### Policy

- How the opponent behaves at a given action point is described by a mathematical model known as **policy**.
- $\pi_\text{opp}(s, a)$ represents the **probability** of the opponent choosing a specific action $a$ in state $s$.

<!--ID: 1750164579992-->
#### "Dumb" opponent

- The opponent picks a random move with equal probability, e.g. $$\pi_\text{opp}(s, a) = \frac{1}{2} \text{ for } a \in \text{Actions}(s)$$

<!--ID: 1750164579994-->
#### Stochastic opponent

- The opponent picks a move based on some probability distribution, e.g. $$\pi_\text{opp}(s, a) \in [0, 1]$$

<!--ID: 1750164579996-->
#### Expectimax

- The **expectimax** search function will attempt to pick the **best** move for the agent assuming a **stochastic** opponent policy
- Each state is assigned a value representing how good that state is for the agent
	- Therefore, the value has to be computed recursively from the bottom of the tree upwards

<!--ID: 1750164579998-->
##### Expected value for expectimax

- The expected value of a state $s$ is given by $V_\text{eval}(s)$.

- **If $s$ is an end state** (i.e. $\text{IsEnd}(s)$): $$V_\text{eval}(s) = \text{Utility}(s)$$
- If $s$ is the agent's turn (i.e. $\text{Player}(s) = \text{agent}$): $$V_\text{eval}(s) = \text{max}(V_\text{eval}(\text{Succ}(s,a)), \forall a \in \text{Actions}(s))$$
	- In other words, the expected value of a state on the agent's turn is the maximum of the values of all possible successors from it, calculated recursively

- If $s$ is the opponent's turn (i.e. $\text{Player}(s) = \text{opp}$): $$V_\text{eval}(s) = \sum_{a \in \text{Actions}(s)} (\pi_\text{opp}(s, a))(V_\text{eval}(\text{Succ}(s,a))$$
	- In other words, the expected value of a state on the opponent's turn is a **weighted average** of all possible successors from it.
	- The weights are the probability of the opponent selecting that action.

<!--ID: 1750164580001-->
#### Minimax

- The **minimax** search function will attempt to pick the best move for the agent assuming an **optimally smart** opponent (rather than one that selects an action based on some probability distribution, as with expectimax)
- Otherwise similar to expectimax

<!--ID: 1750164580003-->
##### Expected value for minimax

- For the cases where $s$ is an end state and for where $s$ is the agent's turn, identical to expectimax

- If $s$ is the opponent's turn (i.e. $\text{Player}(s) = \text{opp}$): $$V_\text{eval}(s) = \text{min}(V_\text{eval}(\text{Succ}(s,a)), \forall a \in \text{Actions}(s))$$
	- In other words, the expected value of a state on the opponent's turn is the **smallest** of the values assigned to all possible successor states, calculated recursively.

<!--ID: 1750164580005-->
##### Characteristics of minimax

- **Complete** if the game tree is finite
- **Optimal** iff the opponent also behaves optimally
- Time complexity: $O(b^d)$; space complexity: $O(bD)$
	- **Depth-first search**

>[!warning] Minimax is **infeasible** for large $b$.
> Checkers: $b \approx 6.4$
> Chess: $b \approx 35$
> Go: $b \approx 250$

<!--ID: 1750164580007-->
##### Minimax algorithm

- Finds the optimal strategy (or just the best first move) for max (agent)
	- The optimal strategy is a solution tree
- **Brute-force approach**:
	1. Generate the **entire** game tree
	2. Apply the utility function to the leaves (their **value**)
	3. Back-up values from leaves towards the root:
		1. Agent turns compute the max of their child values
		2. Opponent turns compute the min of their child values
	4. Upon reaching the root: choose max value and the corresponding move

<!--ID: 1750164580009-->
## Optimizing the minimax algorithm

- There are three main ways to further optimize the minimax algorithm.
	- Knowledge about the domain can be used to **prune redundant states**
	- Depth-limited search with **evaluation functions**
	- **Alpha-beta pruning**

<!--ID: 1750164580011-->
### Pruning redundant states

- Prune redundant states based on the rules of the game
	- Example: Tic-tac-toe can be modeled as only having 3 initial moves instead of 9: center, edge, and corner.

<!--ID: 1750164580013-->
### Depth-limited search

- For game trees that are too deep, set a limit to the depth to be explored.
- States are assigned a value based on an **evaluation function**

<!--ID: 1750164580015-->
#### Evaluation function

- An **evaluation function** is an estimation of how good the state is for the agent
- Used in place of the utility function on the leaves.
- Based on domain knowledge about the game, e.g., the total value of the remaining pieces.

<!--ID: 1750164580017-->
### Alpha-beta pruning

- Don't explore a branch if we're sure a better path already exists, which may significantly shrink the search space
- **Does not affect the result of minimax**
- Entire subtrees can be pruned
- Good move ordering influences the performance gains of pruning
- Ordering moves from best to worst generally results in better pruning

1. Initialize alpha to $-\infty$ and beta to $\infty$
2. Perform the minimax algorithm, but:
	1. When expanding a branch from a node, pass down the alpha and beta values to the child node.
	2. For every node on the MAX turn (agent's turn), update alpha to highest value found along the MAX path.
	3. For every node on the MIN turn (opponent's turn), update beta to the lowest value found along the MIN path.
	4. If at any point alpha is greater than or equal to beta, **prune** the next branch in the search.
<!--ID: 1750164580019-->
