## Graph embeddings

- Graph embedding transforms graphs to a lower dimensional representation of the graph **while preserving its topology**.
- Graphs are turned into a format that machine learning algorithms can understand
- **Convert graphs, which are discrete, to a continuous vector space**

### DeepWalk

- Estimates the likelihood of encountering a node $v_n$ given all the previous nodes $v_0, v_1, \dots, v_{n-1}$ 

### Node2Vec

- Incorporates a search bias $\alpha$, parameterized by $p$ and $q$, which allows it to interpolate between BFS and DFS.

