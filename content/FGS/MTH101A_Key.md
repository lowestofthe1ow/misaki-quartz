## Answer key

**I. True or false.**

1. **False**. It is undefined.
2. **False**. It is its *negative* reciprocal.
3. **True**.
4. **False**. An inverse function exists for a given function if and only if it is one-to-one.
5. **False**. $f(f^{-1}(x)) = f^{-1}(f(x)) = x$.
6. **False**. $\log_b{0}$ is **undefined** for all $b \neq 0$ (There is no non-zero base that can be raised to any power to produce zero!).
7. **True**.
8. **True**. Specifically, it is the case for the equation of an ellipse where $a = b$.
9. **False**.
10. **True**.
11. **False**. If that were the case, eccentricity would be $1$ (the eccentricity of a hyperbola is always greater than $1$).
12. **True**.
13. **False**. It is measured as the smallest acute angle to either side of the $x$-axis.
14. **False**. The cotangent function has the same range.
15. **False**. The secant, cosecant, tangent, and cotangent functions are not waves.

**II. Multiple choice.**

1. **B**. This cannot be true for functions in general, as they would then fail the vertical line test.
2. **C**. The shortest distance between a point and a line is given by the perpendicular line segment that joins them.
3. **A**. The cotangent function is positive for angles whose terminal sides lie on quadrants I and III. It is negative for quadrants II and IV.
4. **B**. The circle is a special case of the ellipse where $a = b$.

**III. Problem solving.**

**Problem 1.**

1. Break down the absolute value inequality into positive and negative cases.

$$
|4x - 2| \leq 10 \iff 4x - 2 \leq 10 \text{ and } -(4x - 2) \leq 10
$$

   Working with the positive case:

$$
4x - 2 \leq 10 \iff x \leq 3
$$

   Working with the negative case:

$$
\begin{align*}
-(4x - 2) &\leq 10 \\
-4x + 2 &\leq 10 \\
-4x &\leq 8 \\
x &\geq -2
\end{align*}
$$

   Merging the two:

$$
-2 \leq x \leq 3 \text{ or, in interval notation, } \boxed{[-2,3]}
$$

2. Break down the absolute value inequality into positive and negative cases.

$$
\begin{align*}
|x^2 + 4x + 4| > 0 \iff &x^2 + 4x + 4 > 0 \\
\text{or } &-(x^2 + 4x + 4) > 0
\end{align*}
$$

   Working with the positive case:

$$
\begin{align*}
x^2 + 4x + 4 &> 0 \\
(x + 2)^2 &> 0 \\
x + 2 &> 0 \\
x &> -2
\end{align*}
$$

   Working with the negative case:

$$
\begin{align*}
-(x^2 + 4x + 4) &> 0 \\
(x + 2)^2 &< 0 \\
x + 2 &< 0 \\
x &< -2
\end{align*}
$$

   Merging the two:

$$
x \neq 2 \text{ or, in interval notation, } \boxed{(-\infty, -2) \cup (-2, \infty)}
$$

3. Multiply both sides by the least common denominator of all terms:

$$
\begin{align*}
\frac{5}{9 - x} + \frac{3}{x + 9} + \frac{3x + 8}{x^2 - 81} &= 0 \\
\frac{5(x + 9)(x - 9)}{9 - x} + \frac{3(x + 9)(x - 9)}{x + 9} + \frac{(3x + 8)(x + 9)(x - 9)}{x^2 - 81} &= 0
\end{align*}
$$

This simplifies to:

$$
\begin{align*}
-5(x+9) + 3(x-9) + 3x + 8 &= 0 \\
-5x - 45 + 3x - 27 + 3x + 8 &= 0 \\
x - 64 &= 0 \\
\Aboxed{x &= \{ 64 \}}
\end{align*}
$$

4. Note that the second term can be simplified:

$$
\begin{align*}
\frac{8}{x + 3} - \frac{27}{9x + 81} &= \frac{x+3}{x^2 + 12x + 27} + \frac{5}{x + 9} \\
\frac{8}{x + 3} - \frac{3}{x + 9} &= \frac{x+3}{x^2 + 12x + 27} + \frac{5}{x + 9} \\
\end{align*}
$$

Multiply both sides by the least common denominator of all terms:

$$
\begin{align*}
\frac{8(x+3)(x+9)}{x + 3} - \frac{3(x+3)(x+9)}{x + 9} &= \frac{(x+3)(x+3)(x+9)}{x^2 + 12x + 27} + \frac{5(x+3)(x+9)}{x + 9} \\
8(x + 9) - 3(x + 3) &= x + 3 + 5(x + 3) \\
8x + 72 - 3x - 9 &= x + 3 + 5x + 15 \\
\Aboxed{x &= \{ 45 \}}
\end{align*}
$$

**Problem 2.**

The function will result in a zero denominator whenever $x - 4 = 0 \iff x = 4$. Thus the domain of the function is $\{x \in \mathbb{R} \ | \ x \neq 4\}$, or:

$$
\boxed{(-\infty, 4) \cup (4, \infty)}
$$

The range of the function is the domain of its inverse, if it exists. The inverse of the function is given by:

$$
\begin{align*}
x &= \frac{y + 9}{y - 4} \\
x(y - 4) &= y + 9 \\
xy - 4x &= y + 9 \\
xy - y &= 4x + 9 \\
y(x - 1) &= 4x + 9 \\
f^{-1}(x) = y &= \frac{4x + 9}{x - 1}
\end{align*}
$$

The domain of the inverse function is, similarly, $\{x \in \mathbb{R} \ | \ x \neq 1\}$. Thus the range of the original function is given by:

$$
\boxed{(-\infty, 1) \cup (1, \infty)}
$$

**Problem 3.**

The function will result in a zero denominator whenever $x + 10 = 0 \iff x = -10$. Because of $\sqrt(x^2 - 9)$, the function is also undefined whenever $x^2 - 9 < 0$, or:

$$
\begin{align*}
x^2 - 9 &< 0 \\
(x + 3)(x - 3) &< 0
\end{align*}
$$

$$
\boxed{-3 < x < 3}
$$

Thus the function is defined when $x \neq -10$ and $x \leq -3$ or $x \geq 3$. The domain of the function is given by:

$$
\boxed{(-\infty, -10) \cup (-10, -3] \cup [3, \infty]}
$$

**Problem 4.**

We claim that:

$$
\log_b{x} = \frac{log_a{x}}{log_a{b}}
$$

Let $\log_b{x} = y$. Then:

$$
x = b^y
$$

We take $\log_a$ of both sides:

$$
\begin{align*}
\log_a{x} &= \log_a{b^y} \\
\log_a{x} &= y\log_a{b} \\
y &= \frac{\log_a{x}}{\log_a{b}} \\
\Aboxed{\log_b{x} &= \frac{\log_a{x}}{\log_a{b}}} \ \blacksquare
\end{align*} 
$$

**Problem 5.**

Given the equation for an ellipse:

$$
\frac{(x-h)^2}{b^2} + \frac{(y-k)^2}{a^2} = 1
$$

The **center** is given by $(h, k)$. Thus the center of the given ellipse is:

$$
\boxed{(5, -2)}
$$

We know that $a = \sqrt{81} = 9$ and $b = \sqrt{49} = 7$. Thus $a > b$, meaning the ellipse is **horizontal**. The coordinates of the **vertices** are thus given by:

$$
(h \pm a, k) = \boxed{\{(14, -2), (-4, -2)\}}
$$

Let $c^2 = a^2 - b^2 \iff c = \sqrt{a^2 - b^2}$. Then:

$$
c = \sqrt{81 - 49} = \sqrt{32} = 4\sqrt{2}
$$

The coordinates of the **foci** are thus given by:

$$
(h \pm c, k) = \boxed{(5 \pm 4\sqrt{2}, -2)}
$$

**Problem 6.**

1. We know that $\theta$ lies on **Quadrant III** because $\pi < \theta < 2\pi$ and because $\cot{\theta}$ is positive. We also know that the magnitudes of the trigonometric functions of $\theta$ is equal to those of its reference angle. Thus, we can infer the values of the other trigonometric functions based on these facts.

$$
\begin{align*}
\sin{\theta} &= -\frac{4}{5} &
\cos{\theta} &= -\frac{3}{5} &
\tan{\theta} &= \frac{4}{3} \\
\csc{\theta} &= -\frac{5}{4} &
\sec{\theta} &= -\frac{5}{3} &
\cot{\theta} &= \frac{3}{4}
\end{align*}
$$

2. Likewise, we know that $\theta$ lies on **Quadrant I** because $0 < \theta < \pi$ and because $\sin{\theta}$ is positive. Thus, we can infer the values of the other trigonometric functions based on this fact and the reference angle (which in this case is simply the angle $\theta$ itself).

$$
\begin{align*}
\sin{\theta} &= \frac{4}{5} &
\cos{\theta} &= \frac{3}{5} &
\tan{\theta} &= \frac{4}{3} \\
\csc{\theta} &= \frac{5}{4} &
\sec{\theta} &= \frac{5}{3} &
\cot{\theta} &= \frac{3}{4}
\end{align*}
$$

**Problem 7**.

1.
$$
\begin{align*}
(1 - \cos^2{x})(1 + \cot^2{x})
&= (1 - \cos^2{x}) \left( 1 + \frac{\cos^2{x}}{\sin^2{x}} \right) \\
&= (1 - \cos^2{x}) \left( \frac{\sin^2{x}}{\sin^2{x}} + \frac{\cos^2{x}}{\sin^2{x}} \right) \\
&= (1 - \cos^2{x}) \left(\frac{\sin^2{x} + \cos^2{x}}{\sin^2{x}} \right) \\
&= (\sin^2{x}) \left( \frac{1}{\sin^2{x}} \right) \\
\Aboxed{&= 1} \ \blacksquare
\end{align*}
$$

2.
$$
\begin{align*}
\frac{\sec^2{\theta} - 1}{\sec^2{\theta}}
&= \frac{(\tan^2{\theta} + 1) - 1}{\sec^2{\theta}} \\
&= \frac{\tan^2{\theta}}{\sec^2{\theta}} \\
&= \tan^2(\theta) \cos^2{\theta} \\
&= \frac{\sin^2{\theta}}{\cos^2{\theta}} \cos^2{\theta} \\
\Aboxed{&= \sin^2{\theta}} \ \blacksquare
\end{align*}
$$
<!--ID: 1733233618485-->
