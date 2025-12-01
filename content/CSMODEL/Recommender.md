## Recommender systems

### Recommendation types

**Editorial** and hand-curated: Favorites from the editor, no input from the user
Simple aggregates - Does not depend on the current user but rather on the aggregate action of all users
Tailored recommendations: Depends on the actions of the current user

### Formal model

Suppose a set of items $S$ and a set of customers $C$. Then we define a **utility function**: $$u: C \times S \to R$$ where $R$ is the totally ordered set of ratings.

- $C \times S$ can be expressed as a **utility matrix**
	- How do we collect data in the utility matrix?
	- Can we infer the ratings of a specific user for an item based on their other ratings?
		- We can **explicitly** ask, but not all users leave ratings
		- We can **implicitly** learn ratings based on user actions, but this cannot learn low ratings.
	- Most people have not rated most items --- **cold start problem**: new items have no ratings and new users have no history
	- **Content-based** approach: Based on previous transactions of the current user
	- **Collaborative** approach: Based on ratings of users similar to the current user

### Content-based approach

1. Initialize a set $I$ composed of $n$ vectors representing the item profiles of the items rated by the user
	- Item profile: set of features for that item (e.g. movie title, actors, etc.) represented as a vector (usually Boolean one-hot encoding, can be with real numbers)
2. $I$ is essentially a matrix: columns represent items, rows represent the features for the items.
3. Consider a separate vector $U$ that contains the user's rating for each movie.
4. Normalize $U$ by subtracting the mean of $U$ from each value in $U$.
5. Each row (feature) is then **dotted** (dot product) with $U$ to obtain the user's weight for that item.
6. The final user profile is a vector containing the weights for each feature.
7. You can then match the user profile with item profiles using cosine similarity.

- Cons:
	- Finding the appropriate set of features is difficult
	- Never recommends items outside the user profile
	- **Cold-start problem** for new users

### Collaborative approach

**Rating predictions** for a user $x$ and an unrated item $i$:

1. Begin with a matrix. The columns are the items (e.g. movies), while each row represents a set of ratings for each movie for one user.

*User-user collaborative filtering*:
2. Normalize each row by subtracting the respective row means from each value in each row. (**Centralized** cosine similarity, a.k.a. Pearson correlation)
3. Compute the similarity of $x$ (its row on the matrix) with every other user and get the $k$ most similar users ($k$ is up to you).
4. To find the predicted rating $r_{xi}$ of the user $x$ for an item $i$:
	1. Add the ratings of the $k$ similar users **weighted by the similarity of $x$ to that user**.
	2. Divide this sum by the sum of $x$'s similarities to each of the $k$ similar users. $$r_{xi} = \frac{\sum_{y \in N} \ s_{xy} r_{yi}}{\sum_{y \in N} \ s_{xy}}$$

*Item-item collaborative filtering*:
2. Transpose the matrix. This way, we will find similar items first and base the predicted rating on ratings for similar items.
3. Perform the same steps as in user-user filtering.

- Cons:
	- Cold start problem
	- Sparsity (most users have not rated most items)
	- A new item cannot be recommended if it hasn't been rated yet