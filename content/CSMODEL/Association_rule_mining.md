## Association rule mining

<!--ID: 1750738628406-->
### Market basket model

- Describes a **many-to-many** relationship between two kinds of objects, e.g.:
	- **Goal**: Identify items frequently bought together *by sufficiently many customers*
	- **Approach**: Process sales data and find dependencies among items
- Assumptions: A large set of **items** and a large set of **baskets**
	- Each basket contains some **itemset**
	- The number of baskets is expected to be very large
	- **Goal**: Discover **association rules** showing that people who buy some itemset also tend to buy some other itemset.

<!--ID: 1750738628408-->
## Frequent itemset

- Let:
	- $I$ be some set of items
	- $S_\theta$ be the **support threshold**
		- Usually at least 10% of the total number of baskets
		- Higher percentage = more assurance that the item was bought by a significantly large number of customers
	- $S_I$ be the **support** of the set $I$
		- The number of baskets for which $I$ is a subset
		- Number of baskets containing the items in $I$
		- "**Frequency**"

1. Find the support for each individual item from the universe of all items.
2. Eliminate items below the preset support threshold
3. Find the support for each possible pair of items in the remaining set
4. Eliminate items below the preset support threshold
5. **Attempt to** find the support for each possible triple of items
	- Each triple is produced from two pairs that share a **common** element
6. Eliminate items below the preset support threshold
7. Repeat the above, increasing the number of items per iteration
8. If the next iteration does not contain anything (all 0), stop
9. Remaining sets are called **frequent itemsets**
10. Construct rules from frequent itemsets
	- e.g. from the set $\{1, 2, 3\}$, can construct $\{1\} \to \{2, 3\}$, etc. **Use all items**.
11. Find confidence for each rule 
12. Eliminate rules below the preset confidence threshold
13. Tabulate: $S$ is the support of the "left side" of the rule

<!--ID: 1750738628411-->
### Confidence

- The confidence $$C_{\{i_1, i_2, \dots, i_k\} \to j} = \frac{x}{y}$$ is the fraction of baskets containing $i_1, i_2, \dots, i_k$ that **also** contain $j$
	- $x$ is the number of baskets with $\{i_1, i_2, \dots, i_k, j\}$
	- $y$ is the number of baskets with $\{i_1, i_2, \dots, i_k\}$
	- "Probability of $j$ given $i_1, i_2, \dots, i_k$"

- $\{i_1, i_2, \dots, i_k\} \to j$ is called an **association rule**. An association rule is useful iff:
	- The **support** for $\{i_1, i_2, \dots, i_k\}$ is at least at the support threshold $S_\theta$
	- The **confidence** for the association rule is at least at the confidence threshold $C_\theta$
<!--ID: 1750738628413-->
