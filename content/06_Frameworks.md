Fundamentals, Data Handling, Developer Interface, and Execution & Abstraction - Modern machine learning frameworks operate through the integration of four key layers:

Fundamentals - ML framework layer that establishes the model's structure, enabling automatic differentiation and optimization
Computational graph - Core concept for fundamentals layer

Data handling - ML framework layer that manages numerical data, memory usage, and data movement between different hardware.
Specialized data structures - Core concept for data handling layer

Developer interface - ML framework layer that provides user-facing tools, defining how developers interact with the framework (e.g., imperative vs. symbolic).
Programming & execution models - Core concept for developer interface layer

Execution & abstraction - ML framework layer that converts high-level model code into efficient, hardware-executable operations and manages resources.
Core operations - Core concept for execution & abstraction layer

Computational graph - bridges the gap between high-level model descriptions and low-level hardware execution representing a machine learning model as a directed acyclic graph (DAG) where nodes represent operations and edges represent data flow.

Layers and tensors - Two key abstractions in ML
Layers - Abstraction in ML that represents computational units that perform operations such as convolution, pooling, etc. Transforms input to output tensors.
Tensors - Abstraction in ML that represents immutable mathematical objects that hold and transmit numerical values
Activations - As additional abstraction, this part of a neural network can be represented as nodes in the computational graph.

Automatic differentiation - ML computational graphs optimize for this, in order to make gradient-based optimization more efficient

Neural network diagrams - Visualize the architecture and flow of data through nodes and layers, providing an intuitive understanding of the model’s structure.

Computational graphs - Provide a low-level representation of the underlying mathematical operations and data dependencies required to implement and train these networks.

Static graphs - Refers to the "define-then-run" execution model used by TensorFlow. Clear separation between definition of operations and their execution

Definition phase - In a static graph, refers to the phase where each mathematical operation, variable, and data flow connection is explicitly declared and added to the graph structure.

Run phase - In a static graph, refers to the phase where the framework constructs an internal representation of all operations and their dependencies, which will be executed in a subsequent phase.

Allows for identifying opportunities for eliminating unnecessary intermediate results, calculating and optimizing memory requirements in advance - What is the main advantage of static graphs?

Dynamic graphs - Refers to the "define-by-run" execution model used by PyTorch. Each operation is defined, executed, and completed before moving on to the next.

Scenarios that require conditional execution / dynamic control flow / immediate feedback during development - What is the main advantage of dynamic graphs?

Memory fragmentation - Refers to the inefficient use of memory caused by small unused gaps between allocated blocks

They benefit from their predefined structure by calculating memory requirements in advance, optimizing allocation through memory reuse - What are the system consequences of using static graphs on memory management?

They allow for detailed pre-execution analysis, enabling efficient mapping of operations to devices while minimizing communication overhead - What are the system consequences of using static graphs on device placement?

They allocate memory dynamically as operations are executed, resulting in higher memory overhead and fragmentation - What are the system consequences of using dynamic graphs on memory management?

They handle device placement at runtime and can adapt to changing conditions such as hardware availability or workload demands - What are the system consequences of using dynamic graphs on device placement?

Device placement - The process of assigning operations to hardware resources such as CPUs, GPUs, or specialized ASICS like TPUs

Specialized hardware, where performance gains can be significant - Static graphs are best for what kind of hardware?

Automatic differentiation - Refers to calculating derivatives of functions implemented as computer programs at the ELEMENTARY function level

Forward mode automatic differentiation - A mode of automatic differentiation that computes both values and derivatives simultaneously throughout the computational graph. Every intermediate variable is augmented with its derivative — "dual number".

Dual tracking - Refers to the mechanism by which forward-mode AD transforms each basic operation to handle both value and derivative that get propagated forward 

Computational work is doubled; once for value, once for derivative - What is the computational performance characteristic of forward-mode AD?

O(1) memory usage; the original value, a single derivative value, and temporary results - What are the memory requirements of forward-mode AD?

Few inputs, many outputs; best when we need to understand how small changes in inputs can affect a network's behavior - In what situation does forward-mode AD shine best?

Full neural networks - In what situation is forward-mode AD NOT the best option?

Reverse mode automatic differentiation - A mode of automatic differentiation that does a forward pass (computes and stores values) and a backward pass (compute the gradient)

Reverse-mode AD handles all paths in a single backward pass - When a variable can influence the output through different paths, how does reverse-mode AD differ from forward-mode?





Data structures - Where computational graphs specify the logical flow of operations, these determine how operations actually access and manipulate data in memory.

Provide containers for numerical data and manage how it is stored and moved across memory spaces/devices - Two main purposes of data structures



Tensor - Refers to a mathematical object that generalizes scalars, vectors, and matrices to higher dimensions.

Scalar - Zero-dimensional tensor, single value
Vector - 1-dimensional tensor, sequence
Matrix - 2-dimensional tensor, rows and columns


Still arranged linearly, tensors are just abstractions - Tensors are multidimensional data. How are they stored in memory?

Stride patterns - Allow for mapping multidimensional tensor indices to linear memory addresses



float32 - What tensor type/precision is standard to balance precision and efficiency?
float16 - What tensor type/precision is used for efficient mobile development?
int8 - What tensor type/precision is used for fast inference on specialized hardware?
float32 - What tensor type/precision is used for training?

Mixed-precision training - Refers to combining float32 (for critical accumulations) with lower precision (most computations) for training

Device placement - Tensors must move efficiently between devices while maintaining computational coherency. This is known as:




Dataset Structures - handle the critical task of transforming raw input data into a format suitable for machine learning computations.

Parameter Structures - store the numerical values that define a machine learning model.

Execution Structures - coordinate how computations are performed on hardware work closely with computational graphs, determining how data flows through the system and how memory is allocated for intermediate results.



Symbolic, imperative - Two main PROGRAMMING models

Symbolic programming - Programming model that abstracts representations of computations first then executes them later. Enables global optimizations and is efficient for deployment scenarios
Static - With what type of computational graphs is symbolic programming aligned?


Imperative programming - Programming model that executes operations immediately as they are encountered. More intuitive and easy to use, but limited optimization
Dynamic - With what type of computational graphs is symbolic programming aligned?




Immediate - System implementation considerations for IMPERATIVE programming, EXECUTION
High - System implementation considerations for SYMBOLIC programming, OPTIMIZATION
Limited - System implementation considerations for IMPERATIVE programming, OPTIMIZATION
Efficient - System implementation considerations for SYMBOLIC programming, MEMORY MANAGEMENT
Less Efficient - System implementation considerations for IMPERATIVE programming, MEMORY MANAGEMENT
More difficult - System implementation considerations for SYMBOLIC programming, DEVELOPMENT & DEBUGGING
Easier - System implementation considerations for IMPERATIVE programming, DEVELOPMENT & DEBUGGING
Production deployment - SYMBOLIC programming, BEST FOR WHAT SITUATION?
Research and development - IMPERATIVE programming, BEST FOR WHAT SITUATION?


Eager execution, graph execution, JIT compilation - Three main EXECUTION models

Eager execution - Execution model where operations are executions are executed immediately as they are called in the code


Graph execution - Execution model where a developer first defines the entire computational graph and then executes it as a separate step

Just-in-time compilation - Execution model that is a kind of middle ground between eager and graph execution





Data parallelism and model parallelism - Two primary strategies for distributed execution
Data parallelism - allows multiple devices to train the same model on different subsets of data, ensuring faster convergence without increasing memory requirements.
Model parallelism - partitions the model itself across multiple devices, allowing the training of architectures too large to fit into a single device’s memory


---



Hardware, basic numerical, system-level - Three core categories of abstraction operations

Hardware operations - Core operations that handle compute kernel, memory abstraction, execution control. Provide foundation for executing computations across diverse computing platforms

Compute kernel management - Selecting and dispatching optimal implementations of mathematical operations for different hardware architectures
Memory system abstraction - Manage data movement through complex memory hierarchies
Execution control - Coordinates computation across multiple execution units/memory spaces

Basic numerical operations - Core operations that handle GEMM, BLAS, element-wise operations
General Matrix Multiply (GEMM) - C = AB + C
BLAS operation - AXPY (ax + y), GEMV (matrix-vector multiplication), various reduction operations
Element-wise operations - Basic arithmetic operations, transcendental functions

System-level operations - Core operations that handle scheduling, memory management, resource optimization
Operation scheduling - Refers to identifying  parallelization opportunities while respecting deendencies
Resource optimization - Integrates scheduling and memory decisions to maximize performance within system constraints
Gradient checkpointing - some intermediate results are discarded and recomputed rather than stored, trading computation time for memory savings.
Memory management - implements sophisticated strategies for allocating and deallocating memory resources across the computational graph.
Model parameters persist, intermediate results have lifetimes defined by the operation graph - When managing memory, which data in the training process are persistent and which are not?


APIs and abstractions - Must be intuitive enough for rapid development, flexible enough to support diverse use cases, and efficient enough to enable high-performance implementations.

Core libraries - Refer to essential building blocks for machine learning operations
Extensions and plugins - Refers to software that expand the capabilities of frameworks
Development tools - Refers to IDEs, debugging and profiling tools, version control, and deployment utilities



Hardware integration - GPU and TPU acceleration, distributed computing, edge deployment
GPU 
GPU and TPU acceleration - Hardware integration: Refers to integrating ML frameworks with hardware like NVIDIA GPUs (via CUDA) and Google TPUs to significantly speed up model training and inference.
Distributed Computing - Hardware integration: Refers to frameworks managing multi-device and multi-node setups by using strategies like data parallelism (replicating the model) and model parallelism (distributing parts of the model).
Edge Deployment - Hardware integration: Refers to lightweight versions of frameworks (e.g., TensorFlow Lite, PyTorch Mobile) optimizing models for resource-constrained devices, focusing on compression and efficiency.



Data Pipeline Integration - Software Slack: Refers to ML frameworks connecting with big data tools like Apache Spark to ensure a smooth flow of data from processing pipelines to ML training environments.
Workflow Consistency - Software Slack: Refers to containerization (e.g., Docker) and orchestration (e.g., Kubernetes) being used to maintain a consistent environment from development to production, making complex deployments scalable and manageable.
Enterprise System Integration - Software Slack: Refers to frameworks offering tools to connect with other business systems, such as TensorFlow Serving for deploying models into microservices architectures.


Serving - Deployment considerations: Refers to models being deployed using different serving strategies, such as **batch prediction** for offline tasks or **real-time serving** for immediate responses in applications.
Scaling - Deployment considerations: Refers to production systems being scaled using techniques like **horizontal scaling** (adding more servers), **caching** for frequent requests, and **load balancing**. Frameworks like TensorFlow Serving and TorchServe help manage this.
Monitoring - Deployment considerations: Refers to **continuous monitoring** and **logging** being essential, involving tracking model performance, detecting **concept drift** (when a model's performance degrades over time), and logging data for auditing. 

MLOps and CI/CD - Workflow orchestration: Refers to **MLOps** applying **DevOps** principles to machine learning, using **Continuous Integration/Continuous Deployment (CI/CD)** to automate the testing, validation, and deployment of models. 
Automated Retraining - Workflow orchestration: Refers to the process of automatically retraining models on new data, evaluating them, and updating the production version, which is a critical part of ML workflow orchestration.
Version Control - Workflow orchestration: Refers to reproducibility and collaboration being ensured by using specialized tools like **DVC** and **MLflow** to **version control** all ML assets, including data, models, and hyperparameters.

TensorFlow - is a machine learning library developed by the Google Brain team. The framework is designed for numerical computation using data flow graphs
PyTorch - developed by Facebook, is a popular machine learning framework known for its flexibility and
ease of use, favored by researchers. Uses a dynamic computational graph

JAX - developed by Google Research, is a high-performance numerical computing framework based on
functional programming principles. 
the transformation of functions, not just building graphs - Unlike TensorFlow and PyTorch, JAX's core concept is what?

Framework specialization - Refers to tailoring ML frameworks for different platforms, such as data centers, edge devices, and mobile platforms, to optimize performance and efficiency.

Interoperability - A problem solved by using the Open Neural Network Exchange (ONNX), a standardized model format that allows seamless conversion of models between frameworks.

Reverse-mode - What mode of automatic differentiation do frameworks primarily use to efficiently train models?
JAX - An example of a framework that supports forward-mode AD is:

Framework selection - Refers to the decision process for choosing an ML framework. Depends on three factors
Model requirements - Refers to the necessary operations and model architectures a framework must support.
Hardware constraints - Refers to the limits on memory and processing power that must be defined.
Software dependencies - Refers to the required operating system and runtime environments that must be specified.

Progressive Reduction - Refers to the number of supported operations and features being progressively reduced from TensorFlow to TensorFlow Lite and Micro to allow for deployment on increasingly resource-constrained devices.
Quantization - Refers to both Lite and Micro variants including native quantization, a crucial feature that reduces memory and computational requirements for efficient deployment.