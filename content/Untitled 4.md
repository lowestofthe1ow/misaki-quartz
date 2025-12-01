Symbolic Programming vs
Imperative Programming

Execution
-Delayed. The entire computational graph is defined
before execution.
-Immediate. Each operation is executed as
it is called in the code.

Optimization
-High. Frameworks can analyze the whole graph for
global optimizations like memory reuse and operation
fusion.
-Limited. Optimizations are harder
because decisions must be made on the
fly.

Memory Management
-Efficient. Memory can be intelligently reused since the
framework has a complete view of the computation.
-Less Efficient. Memory is managed at
runtime, which can be less optimal.

Development & Debugging
-More difficult. Requires extra steps to inspect
intermediate values, which can slow down prototyping
(e.g., TensorFlow 1.x sessions).
-Easier. Provides immediate feedback,
allowing developers to inspect values and
shapes as the code runs.

Best For
-Production deployment where performance and
efficiency are critical.
-Research and development where
flexibility and rapid prototyping are key.
Modern Trend Hybrid approaches (e.g., TensorFlow 2.x, PyTorch with
TorchScript) combine the best of both.

Format the above as question-answer (or term-definition). Follow the following format, keep short:

