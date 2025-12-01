**Coordinates and Lines**
- The Coordinate Plane
- Distance Formula and Midpoint Formula
- Lines (inclinations and slope of a line, forms of equations of a line, parallel and perpendicular lines)
- Distance from a Point to a Line

**Functions and Their Graphs**
- Functions (domain, range, graph, vertical line test, increasing/decreasing functions)
- Evaluating Functions
- Types of Functions (linear and constant, absolute value, quadratic, polynomial, rational, root)
- Operations on Functions
- Piecewise-defined Functions
- One-to-one Functions and the Horizontal Line Test
- Inverse Functions

## Coordinate plane

- The **coordinate plane** consists of a horizontal axis and a vertical axis.
- The horizontal axis in the coordinate plane is called the **x-axis**.
- The vertical axis is called the **y-axis**.
- The point at which the two axes intersect is called the **origin**.
- Points in the plane are identified by an **ordered pair** $(x, y)$, where the first value is known as the **x-coordinate** and the second value is known as the **y-coordinate**.

>[!question] If $a = 4$ and $b = -10$, which point is in the **third quadrant**?
>
> **A.** $(-a, b)$
> **B.** $(a, -b)$
> **C.** $(a, b)$
> **D.** $(-a, -b)$
<!--ID: 1729181159978-->

## Distance formula

- The **distance formula** gives the distance between two points and is derived from the **Pythagorean theorem**.

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

>[!question] Find the distances between the following points:
>
> 1. $(8, 7)$ and $(3, 4)$
> 2. $R(20, 21)$ and the origin

>[!question] Does it matter which point you use as $(x_1, y_1)$ and $(x_2, y_2)$?
<!--ID: 1729181159981-->

## Midpoint formula

- The **midpoint formula** gives the **midpoint** between two points.
- The midpoint is the **average** of the corresponding $x$- and $y$-coordinates of both points.

$$
(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2})
$$

>[!question] Find the midpoint of $(8, 7)$ and $(3, 4)$.
<!--ID: 1729181159983-->

## Lines

- A **line** can be seen as a series of points.
- They can usually be expressed as an **equation** that relates a $y$-coordinate to every $x$-coordinate in the line.
<!--ID: 1729181159986-->

### Slope of a line

- The **slope** of a line indicates its steepness.
- The slope is expressed as the **rise** divided by the **run** between any two points on the line (the change in $x$-coordinate divided by the change in $y$-coordinate).

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

>[!question] Does it matter which point you use as $(x_1, y_1)$ and $(x_2, y_2)$?

>[!question] Find the slope of the line that passes through the points $(17, 20)$ and $(32, 50)$.
<!--ID: 1729181159989-->

### Equation of a line

- The **standard form** of the equation for a line is as follows:

$$
Ax + By = C
$$

- This can be rewritten into the **general form** by equating to $0$:

$$
Ax + By + C = 0
$$

- Perhaps the most useful form is the **slope-intercept** form, which exposes the slope $m$ of the line and its $y$-intercept $b$. This is done by **isolating $y$**:

$$
y = mx + b
$$

- Similarly, the **point-slope** form can be used to construct the equation of a line given a slope and a point $(x_1, y_1)$:

$$
y - y_1 = m(x - x_1)
$$

>[!question] What is the slope and $y$-intercept of the line given by $3x + 3y = 9$?
<!--ID: 1729181159992-->

### Parallel and perpendicular lines

- Two lines are **parallel** if they have the same slope:

$$
m_1 = m_2
$$

- Two lines are **perpendicular** if the slope of one line is the **negative reciprocal** of the other:

$$
m_1 = -\frac{1}{m_2}
$$

>[!question] Give a line perpendicular to $3x + 3y = 9$.

>[!question] Let $f(x)$ be parallel to $3x - 2y = 4$. Find linear function $g(x)$ that intersects $(5, 5)$ and is perpendicular to $f(x)$.
<!--ID: 1729181159994-->

## Distance from a point to a line

- The distance from a point $(x_1, y_1)$ to a line is given by the length of the line segment which joins the point to the line and is perpendicular to the line:

$$
\frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}
$$

>[!question] Given $y = 4x + 5$ and $y = 3x - 2$, is point $P(2, 4)$ closer in proximity to the first line or the second?
>
> **A.** P is closer to the first line
> **B.** P is closer to the first line
> **C.** P is equally close to both
<!--ID: 1729181159997-->

## Functions

- A function assigns an **output** to an **input**. It can be seen as "transforming" the input into the output. It is usually denoted in the form $f(x)$.
- The set of all valid inputs is known as the **domain**. The set of all valid outputs is the **range**.
- All inputs **must** map to a **only one** output. For instance, you cannot have a function such that $f(2) = 5$ and $f(2) = 6$ are both true.

>[!question] Is $f(x) = \pm\sqrt{x}$ a function? Why or why not?
<!--ID: 1729181160000-->

### Domain

- When finding the domain of a function, we exclude values that result in the function being **undefined**.
- The domain of all **polynomial functions** is the set of all real numbers.

>[!question] What is the domain of $f(x) = \frac{1}{x}$?
<!--ID: 1729181160002-->

### Range

- The **range** of a function is the set of all possible outputs of the function.
- More on algebraically finding the range later.

> [!question] What is the range of the following function? (Assume these are the only possible values in the function.)
>
> |$x$|$f(x)$|
> |---|---|
> |3|5|
> |9|10|
> |17|2|
> |28|9|
<!--ID: 1729181160006-->

### Graphing functions

- We can graph functions by using a **table of values**. Plot each point individually, then connect them.

>[!question] Sketch the graph of $f(x) = x^2 + 1$.
<!--ID: 1729181160010-->

### Vertical line test

- Recall that a function must map input values to only one output value.
- On a graph, this means that **a vertical line must never intersect more than one point at a time** anywhere on the graph. Otherwise, the graph is not a depicting a function.
<!--ID: 1729181160013-->

### Increasing and decreasing functions

- A function is **increasing** on an interval if it increases as we go to the **right** on that interval.
- It is instead **decreasing** if it decreases as we go right on the interval.

>[!question] Identify the intervals on which the following function is increasing and decreasing:
>
> ![[func.png]]
<!--ID: 1729181160017-->

### Evaluating functions

- Functions are **evaluated** by supplying it with an **input value**.
- When we want to evaluate a function at, for instance, $x = 2$, we write $f(2)$.

>[!question] Let $f(x) = 3x^2 + 3x + 9$. Find $f(4)$.
<!--ID: 1729181160022-->

### Types of functions

- Absolute value, polynomial, rational, root
- **Polynomial functions** have a **degree**.
<!--ID: 1729181160025-->

### Operations on functions

- **Addition**. $(f + g)(x) = f(x) + g(x)$
- **Subtraction**. $(f - g)(x) = f(x) - g(x)$
- **Multiplication**. $(f \cdot g)(x) = f(x) \cdot g(x)$
- **Division**. $(\frac{f}{g})(x) = \frac{f(x)}{g(x)}$
- **Composition**. $(f \circ g)(x) = f(g(x))$

>[!question] How is the domain and range affected by performing operations on functions?

> [!question] Let:
>
> $$
> \begin{align*}
> f(x) &= x^2 \\
> g(x) &= x + 2 \\
> h(x) &= (f \circ g) (x) \\
> \end{align*}
> $$
>
> Find $(h \cdot g) (x)$.
<!--ID: 1729181160029-->

### Piecewise-defined functions

- A **piecewise-defined function**, as the name implies, is defined "per piece."
- The domain is divided into intervals over which the function may be defined differently.

$$
f(x) = \begin{cases}
x^2 & \text{if } x < 2 \\
x & \text{if } x \geq 2
\end{cases}
$$

> [!question] What is the domain of the following piecewise-defined function?
>
> $$
> f(x) = \begin{cases}
> -x & \text{if } x < 0 \\
> x & \text{if } x > 0
> \end{cases}
> $$
<!--ID: 1729181160031-->

## One-to-one functions

- Recall that a function must map input values to only one output value.
- It is not allowed for one input to map to two outputs, but it is fine for two different inputs to map to the same output.
- Functions where no two inputs map to the same output are called **one-to-one** functions.
- Sometimes known as **injective** functions
<!--ID: 1729181160034-->

### Horizontal line test

- Similar to the vertical line test, the **horizontal line test** checks for any "duplicate" input values. It is used to determine if a function is one-to-one.
- On a graph, this means that **a horizontal line must never intersect more than one point at a time** anywhere on the graph. Otherwise, the graph is not a depicting a one-to-one function.
<!--ID: 1729181160038-->

### Inverse functions

- Recall that we can view functions as a transformation of an input to an output.
- The **inverse** of a function "undoes" this transformation (i.e., it "returns" the output to the input).
- Only **one-to-one functions** can have an inverse function. The inverse of a non-one-to-one function will only be a relation.
- The inverse of a function can be found by swapping all instances of $x$ and $y = f(x)$ in the function, then isolating $y$.

>[!question] Find the inverse of $f(x) = 9x + 7$.

>[!question] Does $f(x) = x^2$ have an inverse function?
<!--ID: 1729181160040-->
