---
target-deck: CE-MATH::Differential equations
tags: [CE-MATH]
title: Differential equations
---

## Differential equation

A **differential equation** is an equation that defines a relationship between a function and one or multiple derivatives of that function.

$$
\frac{d^2}{dt^2} y(t) + 2\frac{d}{dt} y(t) + 3y(t) = 4
$$

Alternatively:

$$
y''(t) + 2y'(t) + 3y(t) = 4
$$
<!--ID: 1732202497514-->

### Solution to a differential equation

The **solution** to a differential equation provides an implicit or explicit **relationship** between the dependent and independent variables **without** containing any derivatives. Substituting a solution to the differential equation reduces it to an identity.

<!--ID: 1732202497521-->

#### Implicit solution

An **implicit** solution follows the form $f(x,y) = 0$. This means the solution is not expressed in terms of only one variable, but with both.

<!--ID: 1732202497528-->

#### Explicit solution

An **explicit** solution with respect to $y$ follows the form $y = f(x)$. This means that the dependent variable $y$ can always be obtained as a function of $x$.

<!--ID: 1732202497532-->

#### Complete solution

A **complete** solution has a number of arbitrary constants equal to the order of the differential equation.

<!--ID: 1732202497538-->

#### General solution

A **general** solution contains at least **one** arbitrary constant. It need not be equal to the order as in a complete solution.

<!--ID: 1732202497542-->

#### Particular solution

A **particular** solution contains no arbitrary constants, as they are specified by the existence of **initial** and **boundary** conditions. These conditions specify the values of $y$ at a given value of $x$ (for example, $y(0)=5$). To arrive at a particular solution:

1. Solve for the **general** solution
2. Substitute the **boundary conditions** for the problem (e.g., $x = 0$ when $y = 5$)
3. Solve for the value of the arbitrary constant
<!--ID: 1732202497545-->

### Order and degree

The **order** of a differential equation is the highest derivative that occurs in them. For example, an equation whose highest derivative is a second-order derivative would be classified as a second-order differential equation. The **degree** is the highest power of the highest differential. For example, the following differential equation:

$$
\left ( \frac{d^2x}{dt^2} \right )^3 + 2 \left ( \frac{dx}{dt} \right )^5 = 7
$$

is a **second-order** differential equation of degree **three**.

<!--ID: 1733233618271-->
