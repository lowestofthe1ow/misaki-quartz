## Machine learning

- Application of statistical, mathematical, and numerical techniques to derive some form of knowledge from data
- The mathematical formulas (rules) used to obtain a desired output are sometimes called an **AI model**
- **Training** is the process of determining these rules.
- The input data is known as the **training** data.
- **Inference** refers to the model's ability to generate the correct output for other inputs not necessarily in the training data.

### Supervised learning

- The dataset is a collection of $N$ labeled examples: $$\{ (\mathbf{x}_i, y_i) \}_{i=1}^N$$ where $\mathbf{x}_i$ is a **feature vector** and $y_i$ is a **label**
- A **feature vector** is a vector where each entry contains a value --- known as a **feature** --- that describes the example (e.g. $\{\text{age}, \text{height}, \text{weight}\}$)
- A **label** is a descriptor of the feature vector and can either be discrete or continuous.
	- Discrete labels are an element from a finite set of classes (e.g. red, blue, green)
	- Continuous labels are a real number (e.g. $2.002\text{kg}$)
- The model should take an unlabeled feature vector as an input and deduce a label for it.

#### Classification

- **Classification** is the problem of automatically assigning a label to an unlabeled example
- Can be **binomial**/binary (two classes --- like a "yes" or "no" question) or **multiclass**

#### Regression

- **Regression** is the problem of predicting a real-valued label for an example

### Semi-supervised learning

- The dataset is a collection of labeled and unlabeled examples, but the quantity of unlabeled examples is usually much higher than labeled examples
- Otherwise accomplishes the same goal as supervised learning

### Unsupervised learning

- The dataset is a collection of $N$ unlabeled examples: $$\{ \mathbf{x}_i \}_{i=1}^N$$
- The model should take an unlabeled feature vector as an input and transform it either into another vector or into a value that can be used to solve a practical problem.
- Examples: clustering, outlier detection, dimensionality reduction ("removing" features)

## Feature engineering

- **Feature engineering** is the process of using domain knowledge to identify features.
- The *process* of extracting these features is referred to as **feature extraction**
- The difference between standard machine learning and **deep** learning is that:
	- In standard machine learning, feature extraction and classification are distinct steps
	- In deep learning, feature extraction is done by the model *during* the classification phase

## Model metrics

### Accuracy

- Measured as a tradeoff between false accepts and false rejects
- Identify an **operating point** of false accepts and false rejects per unit of time

### Efficiency

#### Latency

- The model must be **fast enough** to keep up with the speech input and be responsive to the end user
- Tradeoff between speed and power efficiency (TinyML models must run on small processors)

#### Energy

- The model must be energy-efficient to run always-on on battery-operated devices

#### FLOPS

- Machine learning models often use **multiply-and-accumulate** (MAC) operations (e.g. in convolution operations) --- *sum of products* $$\sum_{i = 0}^N {w_i x_i}$$
- One MAC operation is two **FL**oating-point **OP**erations (FLOP)
- **FLOPS** is a measure of efficiency in floating-point operations per **S**econd.

#### Memory usage

- Machine learning models must be resource-aware
- Obviously better to use less compute and less memory --- use **quantization**

#### Model size

- The size of a model, measured in bytes, is given by $$\text{Model size} = \text{\# of parameters} \times \text{Bit width}$$

#### Activations

- **Activations** refer to "intermediate values" during the processing of an AI model --- analogous to scratch work on paper when performing computations
- For edge computing, activations are the main bottleneck during training and inference.
