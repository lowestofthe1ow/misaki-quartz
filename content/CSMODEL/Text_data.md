## Text data modelling

### Preprocessing

- **Goal**: Extract individual components from natural language text while at the same time removing the irrelevant parts
- Remove irrelevant characters
- **Tokenize**: Split text into individual words
- Remove irrelevant words
- Combine related words (e.g. common alternative spellings)
- **Stemming**: Extract the root words by simply cutting off parts of the words
	- May result in strange outputs
- **Lemmatization**: Alternative to stemming; use a dictionary instead of blindly cutting off
- Remove **stopwords** (words that do not add value to the meaning of a text)
- Use parts-of-speech (**POS**) triggers
	- e.g.: `the waiter cleared the plates`:
		- `the`: Determiner
		- `waiter`, `plates`: Noun
		- `cleared`: Verb

### Data modelling

- After preprocessing, each observation in the dataset may look like a list of words associated with some information
- Apply the appropriate data modelling approach to represent the observations

#### Word embeddings

- Mathematical way to represent a word in the document. Can be **frequency** or **prediction**-based.
- **Naive word embedding**: Create a dictionary containing the words in the document. Each word can then be represented as a one-hot encoded vector.

*Frequency-based*:
- **Count vector**: Represent the frequency of each word in the document
- **TF-IDF**: Measures the **significance** of each word in the document. $$w_{i, j} = tf_{i, j} \times \log \left ( \frac{N}{df_i} \right )$$
	- $tf_{i, j}$ is the number of occurrences of $i$ in $j$
	- $N$ is the total number of documents
	- $df_i$ is the number of documents containing $i$

*Prediction-based*:
- **Word vectors**: Attempt to represent a word's meaning or idea through a numerical vector. Generally, each element represents a certain property.


#### Inferring relationships between words

- Generally: if certain words appear in close proximity to each other frequently, then they might be related in a way.
- **$N$-grams**: For each word, use a "moving window" of looking into the *next* words in the documents
- **Skip-gram**: Look both ways; consider both the previous and next words
- **Dependency parsing**: Represent relationships between words using graphs