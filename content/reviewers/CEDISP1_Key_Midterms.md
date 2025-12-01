**I. Sinusoids**.

1. **False**. It will oscillate between $+A$ and $-A$.
2. **False**. A direct shift in the input $t$ will still be multiplied by $\omega$.
3. We know that $A = 5$ and $t_m = 2$. Since three full cycles were completed in a second, the period is $T = \frac{1}{3}$, thus $\omega = 6\pi$. This gives the formula: $$5\cos(6\pi (t - 2)) = 5\cos(6\pi t - 12\pi) = 5\cos(6\pi t)$$
4. $B$
5. $4t_d$
6. $$f = \frac{1}{4t_d}, \ \omega = \frac{\pi}{2t_d}$$
7. $$B \sin \left( \frac{\pi}{2t_d}t-\frac{\pi}{2t_d}t_0+\frac{\pi}{2} \right)$$

**II. Complex numbers and Euler's formula.**

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
10. Let $z = re^{j\theta}$ from which we get $z^* = re^{-j \theta}$. Thus $zz^* = r^2 e^{j \theta - j \theta} = r^2 e^0 = r^2$.
11. Let $z = e^{j\theta}$.
    $$
    \begin{align*}
    z &= \cos{\theta} + j\sin{\theta} & \text{By Euler's formula} \\
    z^* &= \cos{\theta} - j\sin{\theta} & \text{By definition of the complex conjugate} \\
    z + z^* &= \cos{\theta} + j\sin{\theta} + \cos{\theta} - j\sin{\theta} \\
    &= 2\cos{\theta} \\
    \therefore \cos{\theta} &= \frac{z + z^*}{2}
    \end{align*}
    $$

    The proof for $\sin{\theta}$ follows the same process.

12. We know that $\theta = \frac{\pi}{6}$, so we must find $n$ such that $n\theta = \frac{\pi}{2}$. Thus $n=3$.
13. $-1$ is a root of unity only for even $n$ as $(-1)^n = 1$ only for even $n$. Likewise, $j$ is a root of unity only for $n$ that are multiples of $4$.
14. The roots of unity for some $n$ is given by $e^{\frac{2j\pi k}{n}}$ where $k = 0, 1, 2, \dots, n-1$. Thus the roots of unity for $n=7$ are:
    $$
    \left \{ 
    1, e^\frac{j2\pi}{7}, e^\frac{j4\pi}{7}, e^\frac{j6\pi}{7}, e^\frac{j8\pi}{7}, e^\frac{j10\pi}{7}, e^\frac{j12\pi}{7}
    \right \}
    $$
15. The sum of the roots of unity for a given $n$ can be written as a geometric series:
    $$
    \sum_{k=0}^{n-1} r^k = \frac{1 - r^n}{1 - r}
    $$

    Let $r = e^{\frac{2j\pi}{n}}$. Then $1 - r^n = 1 - e^{j2\pi} = 1 - 1 = 0$.

16. Multiplying some complex number by $z = e^{j \frac{\pi}{6}}$ will result in a rotation by $\frac{\pi}{6}$ radians or 30 degrees.
17. $z = 4 - 4\sqrt{3}j$, thus $z^* = 4 + 4\sqrt{3}j$. Converting to polar form, $r = \sqrt{16 + 16(3)} = 8$ and $\theta = \arctan{\frac{4\sqrt{3}}{4}} = \frac{\pi}{3}$. Thus $z^* = 8e^{j\frac{\pi}{3}}$.
18. We know that $5 = \sqrt{4^2 + \Re \{h\}^2}$. Thus $\Re \{h\} = 3$. Because complex conjugation flips a complex number over the real axis, $\Re\{h\} = \Re\{h^*\} = 3$.
19. We solve through multiplication by the complex conjugate:
    $$
    \begin{align*}
    \frac{4+19j}{-5-2j} \times \frac{-5+2j}{-5+2j} &= \frac{(4+19j)(-5+2j)}{25 + 4} \\
    &= \frac{-20+8j-95j-38}{29} \\
    &= \frac{-58-87j}{29} \\
    &= -2-3j
    \end{align*}
    $$
20. The transformation from $m$ to $m^*$ does not scale the vector, so we know that $|s| = 1$. Furthermore, we know that $m$ is at an angle of $\arctan{\frac{5}{5\sqrt{3}}} = \frac{\pi}{6}$ and that $m^*$ is thus at an angle of $-\frac{\pi}{6}$. Thus $s$ must be at an angle of $\theta = \frac{\pi}{6} - (-\frac{\pi}{6}) = \frac{\pi}{3}$, from which we find that $s = e^{j\frac{\pi}{3}}$. By Euler's formula, the Cartesian representation for this complex number is given by $\cos{\frac{\pi}{3}} + j\sin{\frac{\pi}{3}}$. Thus $s = \frac{1}{2} + j\frac{\sqrt{3}}{2}$.

**III. Complex exponentials and phasor addition.**

21. $$1.5867\cos\left(10x-\frac{\pi}{24}\right)$$
22. $$\sqrt{65}\cos\left(20x+0.5281\right)$$
23. $$2.1752\cos\left(5x+0.3078\right)$$
24. $$2.588\cos\left(\omega t-\frac{\pi}{4}\right)$$
25. $$x(t) = \Re\{ Xe^{j\frac{\pi}{2t_d}t} \} \text{ where } X = Be^{-j\frac{\pi}{2t_d}t_0}$$
26. $$x(t) = \left( \frac{B}{2} e^{-j\frac{\pi}{2t_d}t_0}\right) e^{j\frac{\pi}{2t_d}t} + \left( \frac{B}{2} e^{j\frac{\pi}{2t_d}t_0} \right) e^{-j\frac{\pi}{2t_d}t}$$
27. $$X_\text{shifted} = Be^{-j\frac{\pi}{2t_d}(t_0 + c)}$$

**IV. Spectrum representation.**

28. There are **four** components in the spectrum:

| Frequency ($f_k$) in Hz | Complex amplitude ($X_k$)          |
| ----------------------- | ---------------------------------- |
| -150                    | $$e^{j\frac{\pi}{3}}$$             |
| -100                    | $$\frac{3}{2}e^{-j\frac{\pi}{4}}$$ |
| 100                     | $$\frac{3}{2}e^{j\frac{\pi}{4}}$$  |
| 150                     | $$e^{-j\frac{\pi}{3}}$$            |

29. There are **six** components in the spectrum:

| Frequency ($f_k$) in Hz | Complex amplitude ($X_k$)          |
| ----------------------- | ---------------------------------- |
| -200                    | $$\frac{3}{2}e^{-j\frac{\pi}{8}}$$ |
| -125                    | $$e^{-j\frac{5\pi}{6}}$$           |
| -50                     | $$2e^{-j\frac{\pi}{6}}$$           |
| 50                      | $$2e^{j\frac{\pi}{6}}$$            |
| 125                     | $$e^{j\frac{5\pi}{6}}$$            |
| 200                     | $$\frac{3}{2}e^{j\frac{\pi}{8}}$$  |

30. The first and second terms combine as they have the same frequency. There are then four components in the spectrum. Note the complex amplitudes for $f=-75$ and $f=75$ may be simplified with phasor addition.

| Frequency ($f_k$) in Hz | Complex amplitude ($X_k$)                                            |
| ----------------------- | -------------------------------------------------------------------- |
| -150                    | $$2e^{-j\frac{\pi}{6}}$$                                             |
| -75                     | $$\frac{5}{2} e^{-j\frac{\pi}{3}} + \frac{3}{2} e^{j\frac{\pi}{4}}$$ |
| 75                      | $$\frac{5}{2} e^{j\frac{\pi}{3}} + \frac{3}{2} e^{-j\frac{\pi}{4}}$$ |
| 150                     | $$2e^{j\frac{\pi}{6}}$$                                              |

31. An extra row is added to the table for $f=0$, where the amplitude is $c$ (a real-valued constant)
32. Every complex amplitude is multiplied by $\gamma$
33. Every complex amplitude is multiplied by $e^{-j \omega_k t_0}$, where $w_k$ is the radial frequency of that component.
