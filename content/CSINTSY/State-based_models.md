---
target-deck: CSINTSY::State-based models
tags:
  - CSINTSY
title: State-based models
---

## State-based models

<!--ID: 1750164579943-->
### State space model

- The **state space** provides a number of possible solutions to a given problem.
- **Graphically represents the problem domain**.
- Applies widely in games and experts systems.

<!--ID: 1750164579945-->
#### Problem space

- The **problem space** is the problem domain where the knowledge is represented
- The **solution** for the problem can be searched for in the space.
- Knowledge is represented **graphically**.

<!--ID: 1750164579947-->
## Searching

<!--ID: 1750164579949-->
### Blind search

- **Blind search** algorithms (a.k.a. uninformed search algorithms) search through all the problem spaces for the solution
- Guarantees the solution if the solution exists in the problem space
- Slow as it will go through all available solutions

<!--ID: 1750164579951-->
#### Backtracking

- **Backtracking** is a blind search algorithm that searches every possible combination.
- Also known as **brute force** or **exhaustive** search
- "If the current solution is not suitable, backtrack and try other solutions until all possible solutions have been explored"
	- Uses **recursion** and is often used to solve problems with multiple solutions, but for which the optimal solution cannot be determined
- Traverses using a depth-first approach.

- **Algorithm**:
	1. Start at the root (initial state)
	2. Make a choice and move to the next state
	3. **Test constraints**.
		1. If valid, continue deeper (recursive)
		2. Otherwise, go back and try a different path
	4. Repeat until solution is found or all possibilities explored
	5. **Return all possible solutions!**

<!--ID: 1750164579953-->
#### Breadth-first search

- **Breadth-first search** *systematically* searches for a solution along all nodes on one level of a problem space before considering nodes at the next level.
- **If any solution exists,** BFS is **guaranteed** to find the **shortest path**.
- BFS will never get "trapped" exploring a "blind alley" unlike DFS.
- Requires excess memory as all nodes are expanded at any given level.
- **Time and space complexity are exponential**.

<!--ID: 1750164579956-->
##### BFS: Time/space complexity and when to use

- BFS has a time and space complexity of $O(b^d)$.
- Use if space is not an issue
- Use if we want the closest answer to the root

<!--ID: 1750164579958-->
#### Depth-first search

- Depth-first search looks for a solution along each branch of a problem space to its full vertical length, before proceeding in some defined order from left to right.
- DFS requires less memory than DFS because only nodes on the current path are "expanded"
- DFS may even find a solution without exploring much of the solution space (if you get lucky)
- However, DFS may go deeper and deeper into the search space without finding anything and get lost. This is known as a **blind alley**.

<!--ID: 1750164579960-->
##### DFS: Time/space complexity and when to use

- DFS has a time complexity of $O(b^d)$ and a space complexity of $O(d)$
- Use if you don't care if the answer is close to the starting vertex
- Use if the tree or graph is not very large

<!--ID: 1750164579961-->
#### Uniform cost search

- **Uniform cost search** uses the lowest cumulative cost to find a path from the source to the destination
- The "frontier" is stored in a **priority queue**.

1. Insert the root into the priority queue
2. While the queue is not empty:
	1. Dequeue the maximum priority element from the queue (if same priority, pick first path alphabetically)
	2. If the path leads to the goal state, return the path and exit
	3. Otherwise, insert all the children of the dequeued node, with the cumulative costs as their priority values.

<!--ID: 1750164579963-->
#### Iterative deepening depth first search

- **Iterative deepening depth first search** hybridizes BFS and DFS.
	- Also known as **depth limited DFS**
- Performs a DFS up to a fixed "limited depth", then increment this depth limit by iterating the BFS procedure.

<!--ID: 1750164579965-->
##### ID-DFS: Time/space complexity and when to use

- DFS has a time complexity of $O(b^d)$ and a space complexity of $O(bd)$.
- Use if you want a BFS but don't have enough memory, and a somewhat slower performance is accepted

<!--ID: 1750164579967-->
### Heuristic search

- **Heuristic search** algorithms attempt to use a rule of thumb (a *heuristic*) that hints at how close a state is to the goal. This helps it select which state to explore first
- Fast as it will not explore everything in the problem space
- May miss the solution even if it exists in the problem space.
- Applies when:
	- The search space is large.
	- No other available search techniques.
	- The problem may not have an exact solution.
	- A problem may have an exact solution, but the searching is too complex or computational cost of finding is a constraint.
	- There exists an admissible heuristic.

<!--ID: 1750164579969-->
#### Greedy best first search

- Attempts to find the most promising path from a given starting point to a goal
- Expands the path with the lowest **estimated cost to the goal** cost.
	- This estimate is the **heuristic function** $h(n)$.
	- **Always choose the one with the smallest heuristic**
	- May find the shortest path but is not always optimal

<!--ID: 1750164579971-->
#### A-star search

- Uses the heuristic function $h(n)$ along with the cost to reach the node $n$ from the start state $g(n)$.
	- Thus, it combines UCS and GBFS.
	- **UCS** is the special case where $h(n)$ is the same for all nodes $n$
	- **GBFS** is the special case where $g(n)$ is the same for all nodes $n$
		- GBFS will devolve into BFS or DFS if $h(n) = 0$ for all $n$
- **Choose the path with the lowest** $f(n) = h(n) + g(n)$
	- This is known as the **fitness number**

<!--ID: 1750164579973-->
#### Admissible heuristic

- A heuristic is **admissible** if it **never overestimates** the true optimal cost from a node to the goal.
- A-star search is guaranteed to return an optimal solution **if and only if the heuristic is admissible**.
<!--ID: 1750164579975-->
