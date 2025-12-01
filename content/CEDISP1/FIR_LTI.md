---
target-deck: CEDISP1::FIR filters and LTI systems
tags: [CEDISP1]
title: FIR filters and LTI systems
---

## Running average

Given a discrete-time sequence $x[n]$, an $n$-point **running average** filter averages $n$ consecutive numbers. For instance, a 3-point running average filter can be expressed as:

$$
y[n] = \frac{1}{3}\left(x[n] + x[n+1] + x[n+2]\right)
$$

The above uses values in a "sliding window" including the present value $x[n]$, as well as two "future" values $x[n+1]$ and $x[n+2]$. Consider also the following:

$$
y[n] = \frac{1}{3}\left(x[n] + x[n-1] + x[n-2]\right)
$$

Here the sliding window uses only values from the present and the "past." This is known as **causal filtering**.
<!--ID: 1743863524417-->

## Finite impulse response filter

The causal running average filter can be generalized to a "weighted average" filter of the form

$$
y[n] = \sum_{k=0}^M b_k x[n-k]
$$

Here the "weights" are $b_k$ for $k= 0, 1, 2, \dots, M$. For instance, the causal 3-point running average is the case where $M=2$ and $b_k = \displaystyle \frac{1}{3}$ for $k=0,1,2$. This more general form is known as a **finite impulse response** (FIR) filter.
<!--ID: 1743863524420-->

### Filter order

The filter **order** $M$ is one less than the number of coefficients $L$ (that is, the length of the filter).

$$
L = M + 1 \iff M = L - 1
$$
<!--ID: 1743863524423-->

### Unit impulse response

Consider the unit impulse function given by

$$
\delta[n] = \begin{cases}
1 & n = 0 \\
0 & n \neq 0
\end{cases}
$$

If this impulse is fed as the input to a FIR filter, we get:

$$
h[n] = \sum_{k=0}^M b_k \delta[n-k]
$$

Observe that, by definition, $\delta[n-k]$ is **nonzero** if and only if $n=k$, in which case it is 1. In all other cases, it evaluates to 0. This means that the entire summation expression evaluates only to a single term, which is $b_k$ for $k = n$.

In other words, $\delta[n]$ **reads out** the coefficients $b_k$. The result of this is a sequence $h[n]$ containing values of $b_k$, known as the **unit impulse response**. Thus we can also write the general form of a FIR filter as follows:

$$
h[n] = \sum_{k=0}^M h[k] x[n-k]
$$
<!--ID: 1743863524426-->

### Convolution

*See also*: [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA)

The summation operation:

$$
h[n] = \sum_{k=0}^M h[k] x[n-k]
$$

may also be expressed as a **convolution** between two sequences $h[n]$ and $x[n]$, written as:

$$
y[n] = h[n] \circledast x[n]
$$

In other words, the general FIR filter may also be expressed as a convolution between the input sequence and the filter's impulse response.
<!--ID: 1743863524428-->

## Block diagrams

Three basic operations are required to implement a FIR filter:

1. **Delay** (to obtain delayed versions $x[n-k]$ of the input $x[n]$)
2. **Multiplication** (for multiplying the delayed input signal by the filter coefficients)
3. **Addition** (for performing the summation)

These operations are often presented as **block diagrams**. For instance, the third-order FIR filter can be constructed as follows:

![[Pasted image 20250405104121.png|400]]
<!--ID: 1743863524431-->

## Time-invariance

Consider a filter that transforms some input $x[n]$ to an output $y[n]$, denoted as follows:

$$
x[n] \mapsto y[n]
$$

A filter is considered **time-invariant** if a delay in the input will delay the output by the same amount, that is:

$$
x[n - n_0] \mapsto y[n - n_0] \ \forall n_0 \in \mathbb{Z}
$$

Visually, in the following block diagram:

![[Pasted image 20250405104832.png|400]]

$w[n]$ must equal $y[n - n_0]$.
<!--ID: 1743863524434-->

## Linearity

Consider two inputs to a filter $x_1$ and $x_2$ such that:

$$
\begin{align*}
x_1[n] &\mapsto y_1[n] \\
x_2[n] &\mapsto y_2[n]
\end{align*}
$$

The filter is considered **linear** if any linear combination of $x_1$ and $x_2$ maps to the corresponding linear combination of $y_1$ and $y_2$, that is:

$$
x[n] = Ax_1[n] + Bx_2[n] \ \ \ \ \mapsto \ \ \ \ y[n] = Ay_1[n] + By_2[n] \ \ \ \ \forall A,B \in \mathbb{Z}
$$

Visually, in the following block diagram:

![[Pasted image 20250405105558.png|400]]

$w[n]$ must equal $y[n]$.
<!--ID: 1743863524437-->

## Linear time-invariant (LTI) filters

An **LTI filter**, as the name implies, is both linear and time-invariant. LTI filters are completely characterized by their impulse response and can thus always be expressed as a convolution. Some properties of convolution (and thus LTI systems) include:

1. **Commutativity**
2. **Associativity**
3. **Distributivity over addition**
4. **Identity element** (i.e., $x_1[n] \circledast \delta[n] = x_1[n]$)
<!--ID: 1743863524440-->

### Cascading LTI systems

By the commutative property of convolution, LTI systems in cascade may be implemented in any order (or, by associativity, replaced by a single equivalent LTI system).

![[Pasted image 20250405110208.png|400]]

---

**References**

McClellan, J. H., Schafer, R. W., & Yoder, M. A. (2016). _DSP first_ (2nd ed.). Pearson Education.
<!--ID: 1743863524443-->
