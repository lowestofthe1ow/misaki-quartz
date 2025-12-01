## Clustering

- Clustering algorithms “define the structure” of a given set of points by grouping the points into some number of clusters using some notion of distance, such that:
	- Points from the same cluster are similar
	- Points from different clusters are dissimilar
- Clustering small datasets in two dimensions is easy. However, most datasets have at least hundreds of dimensions with at least thousands of data points.
	- Clustering high-dimensional spaces is different – most pairs of points are of the same distance.

### Distance formula

- Euclidean distance - Use if the data is represented as **points**.
- Cosine distance - Use if the data is represented as **vectors**: $$
\begin{align*}
	S_C (A, B) &= \cos(\theta) = \frac{A \cdot B}{||A|| \ ||B||} \\
	D_C (A, B) &= 1 - S_C (A, B)
\end{align*}
$$
- Jaccard distance - Use if the data is represented as sets: $$
\begin{align*}
	S_J (A, B) &= \frac{|A \cap B|}{|A \cup B|} \\
	D_J (A, B) &= 1 - S_J (A, B)
\end{align*}
$$

## Clustering methods

- Hierarchical - Agglomerative (bottom up) & Divisive (top down)
- Point-assignment - Maintains a set of clusters where points belong to the nearest cluster

### Hierarchical clustering

- Agglomerative - This assumes that each point is a cluster. Then, it repeatedly **combines** two nearest clusters into one.
	- Naively: for each iteration, compute pairwise distance between all pairs of clusters, then merge. $O(n^3)$ time complexity.
- Divisive - This assumes that the entire set of points is one cluster. Then, it recursively **splits** the cluster.

#### Representing clusters

- **Clustroid** - the point closest to all other points in the cluster.

#### Termination condition

1. Stop when you reach a predefined number of clusters
2. Stop when the next merge/split would create a cluster with low cohesion

### $k$-means algorithm

- Assumes Euclidean space (data represented as points)

1. Pick a number of clusters $k$
2. Initialize centroids by picking $k$ different points.
	- Pick one point at **random**, then pick $k - 1$ other points, each as far away as possible from the previous points.
3. For each other point, computer the distance from each centroid of each cluster. Assign each point to the nearest cluster in terms of its distance to that cluster's centroid
4. Update the centroid locations of each cluster
5. Repeat step 3 and 4 until convergence (points no longer move between clusters and centroids are stable).