## Naive Bayes classification

$$
\hat{y} = \underset{C \in \{c_1, \dots c_n \}} {\operatorname{argmax}} \ P(C) \prod_{i=1}^{n} P(x_i | C)
$$

- $P(C)$ is the percentage frequency (probability) of a category
- $P(x_i | C)$ is the percentage frequency (probability) of an item **within** a category
- RFP
	- R: Ranking (based on frequency)
	- P: Probability (based on frequency divided by total)
	- F: Frequency

**Evaluation**:
- TP: Correctly classified as Cn
- FP: Not Cn mistakenly classified as Cn
- FN: Cn mistakenly classified as Not Cn
- **Precision** (of a category): TP / (TP + FP) for that category
- **Recall** (of a category): TP (TP + FN) for that category
- **Accuracy** (of a classifier): All TPs / total

## Other metrics

- **Clustering**: Silhouette and purity
- **Machine translation**: BLEU
- **Data association**: Support and confidence

