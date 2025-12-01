1. **False**. It will oscillate between $+A$ and $-A$.
2. **False**. A direct shift in the input $t$ will still be multiplied by $\omega$.
3. We know that $A = 5$ and $t_m = 2$. Since three full cycles were completed in a second, the period is $T = \frac{1}{3}$, thus $\omega = 6\pi$. This gives the formula: $$5\cos(6\pi (t - 2)) = 5\cos(6\pi t - 12\pi) = 5\cos(6\pi t)$$
4. $B$
5. $4t_d$
6. $f = \frac{1}{4t_d}, \omega = \frac{\pi}{2t_d}$
7. $$B \sin \left( \frac{\pi}{2t_d}t-\frac{\pi}{2t_d}t_0+\frac{\pi}{2} \right)$$
8. A multiplication by $j^4$ causes a full rotation (note $j^4 = 1$). Since $j^9 = j^4 \times j^4 \times j$, the net effect is a rotation by $90 \deg$ or $\frac{\pi}{2}$ radians.
9. Recall that $\cos(A + B) = \Re\{e^{j(A + B)}\}$ from Euler's formula. From here we obtain:
   $$
   \begin{align*}
   \cos(A + B) &= \Re\{e^{j(A + B)}\} \\
   &= \Re\{e^{jA}e^{jB}\} \\
   &= \Re\{(\cos{A} + j\sin{A})(\cos{B} + j\sin{B})\} & \text{By Euler's formula} \\
   &= \cos{A}\cos{B} - \sin{A}\sin{B} & \text{Extract parts without } j \text{ in the product}
   \end{align*}
   $$
10. **Polar form**. Let $z = re^{j\theta}$ from which we get $z^* = re^{-j \theta}$. Thus $zz^* = r^2 e^{j \theta - j \theta} = r^2 e^0 = r^2$.
   **Cartesian form**. Let $z = x + jy$ from which we get $z^* = x - jy$ and $|z| = \sqrt{x^2 + y^2}$. Thus $zz^* = (x+jy)(x-jy) = x^2 - (-1)y^2 = x^2 + y^2$.
11. Let $z = e^{j\theta}$. We know that $e^{j \theta} = \cos{\theta} + j\sin{\theta}$. Thus:.
    $$
    \begin{align*}
    z^* &= \cos{\theta} - j\sin{\theta} \\
    &= \cos{\theta} + j(-\sin{\theta}) \\
    &= \cos{\theta} + j\sin(-\theta) & \text{From } \sin(-\theta) = -\sin{\theta} \\
    &= \cos{-\theta} + j\sin(-\theta) & \text{From } \cos(-\theta) = \cos{\theta} \\
    &= e^{-j\theta} & \text{By Euler's formula}
    \end{align*}
    $$
12. Let $z = x + jy$ from which we get $z^* = x - jy$. Thus $z + z^* = x + (jy - jy) = x$.
13. We know that $\theta = \frac{\pi}{6}$, so we must find $n$ such that $n\theta = \frac{\pi}{2}$. Thus $n=3$.
14. $-1$ is a root of unity only for even $n$ as $(-1)^n = 1$ only for even $n$. Likewise, $j$ is a root of unity only for $n$ that are multiples of $4$.
15. The roots of unity for some $n$ is given by $e^{\frac{2j\pi k}{n}}$ where $k = 0, 1, 2, \dots, n-1$. Thus the roots of unity for $n=7$ are:
    $$
    \left \{ 
    1, e^\frac{2\pi}{7}, e^\frac{j4\pi}{7}, e^\frac{j6\pi}{7}, e^\frac{j8\pi}{7}, e^\frac{j10\pi}{7}, e^\frac{j12\pi}{7}
    \right \}
    $$
16. The sum of the roots of unity for a given $n$ can be written as a geometric series:
    $$
    \sum_{k=0}^{n-1} r^k = \frac{1 - r^n}{1 - r}
    $$

    Let $r = e^{\frac{2j\pi k}{n}}$. Then $1 - r^n = 1 - e^{j2\pi} = 1 - 1 = 0$.

17. See problem #6. From this we know that multiplying some complex number by $z = e^{j \frac{\pi}{6}}$ will result in a multiplication by $\frac{\pi}{6}$ radians or 30 degrees.
18. $z = 4 - 4\sqrt{3}j$, thus $z^* = 4 + 4\sqrt{3}j$. Converting to polar form, $r = \sqrt{16 + 16(3)} = 8$ and $\theta = \arctan{\frac{4\sqrt{3}}{4}} = \frac{\pi}{3}$. Thus $z^* = 8e^{j\frac{\pi}{6}}$.
19. We know that $5 = \sqrt{4^2 + \Re \{h\}^2}$. Thus $\Re \{h\} = 3$. Because complex conjugation flips a complex number over the real axis, $\Re\{h\} = \Re\{h^*\} = 3$.
20. We solve through multiplication by the complex conjugate:
    $$
    \begin{align*}
    \frac{4+19j}{-5-2j} \times \frac{-5+2j}{-5+2j} &= \frac{(4+19j)(-5+2j)}{25 + 4} \\
    &= \frac{-20+8j-95j-38}{29} \\
    &= \frac{-58-87j}{29} \\
    &= -2-3j
    \end{align*}
    $$
21. The transformation from $m$ to $m^*$ does not scale the vector, so we know that $|s| = 1$. Furthermore, we know that $m$ is at an angle of $\arctan{\frac{5}{5\sqrt{3}}} = \frac{\pi}{6}$ and that $m^*$ is thus at an angle of $-\frac{\pi}{6}$. Thus $s$ must be at an angle of $\theta = \frac{\pi}{6} - (-\frac{\pi}{6}) = \frac{\pi}{3}$, from which we find that $s = e^{j\frac{\pi}{3}}$. By Euler's formula, the Cartesian representation for this complex number is given by $\cos{\frac{\pi}{3}} + j\sin{\frac{\pi}{3}}$. Thus $s = \frac{1}{2} + j\frac{\sqrt{3}}{2}$.
