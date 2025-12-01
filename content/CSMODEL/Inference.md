---
target-deck: CSMODEL::Inference
tags:
  - CSMODEL
title: Inference
---

## Probability distribution

- Represents the probabilities of different possible outcomes for an experiment.
- Repeat the experiment multiple times and record the number of times each outcome occurs.
	- Probability of all outcomes *should* sum to 100.
<!--ID: 1749037685197-->
### Normal distribution

- Ubiquitous distribution seen throughout statistics
- Unimodal "bell curve"
- Completely characterized by its:
	- **Mean** $\mu$ (the center of the distribution)
	- **Standard deviation** $\sigma$ (the spread of the distribution)
<!--ID: 1749037685205-->
#### $Z$-score

- Standardized measure of how far a data point is away from the mean. $$Z = \frac{x - \mu}{\sigma}$$
- The $z$-distribution is a normal distribution with a mean of 0 and a standard deviation of 1.
- Representing the values in a normal distribution as $z$-scores will transform it into a $z$-distribution
<!--ID: 1749037685209-->
#### Percentile

- Area under the curve that lies below (to the left) of a given data point.
<!--ID: 1749037685218-->
## Point estimate

- An estimate of a population parameter obtained by **sampling**.
- e.g. if some population proportion statistic $p$ cannot be computed directly, we calculate the proportion in a smaller sample, $\hat{p}$.
	- $\hat{p}$ is a **point estimate** of $p$.
<!--ID: 1749037685223-->
### Central Limit Theorem (CLT)

- If you repeatedly sample a population, you will get a different point estimate each time.
- The **central limit theorem** states that the sampling distribution of the point estimate of certain statistics (e.g., proportion, mean) will tend to be **normally** distributed *if*:
	1. Observations are **independent**
	2. Sample size is large enough (usually $n \geq 30$; can go lower if population is already normally distributed)
- This holds even if the original data is not normally distributed
<!--ID: 1749037685232-->
#### Mean of the sampling distribution for proportions

- The center or "mean" of the sampling distribution (a normal distribution by CLT) for proportions is the population proportion $p$.
<!--ID: 1749037685239-->
#### Spread of the sampling distribution for proportions

- The spread or "standard deviation" of the sampling distribution (a normal distribution by CLT) is referred to as the **standard error**: $$\text{SE}=\sqrt{\frac{p(1 - p)}{n}}$$

>[!warning] Ok but how about other statistics
>- The above formula for the standard error is a special case of $$\text{SE} = \frac{\sigma}{\sqrt{n}}$$ where $\sigma = \sqrt{p(1 - p)}$
>- This only makes sense for proportions.
>- [I sure hope StackExchange isn't lying to me](https://stats.stackexchange.com/a/545261)
<!--ID: 1749037685247-->
## Confidence intervals

- Reporting a single value is insufficient as it is difficult to hit the actual population statistic from a single point estimate.
- Example: In the December 2019 SWS survey, the satisfaction rating of President Rodrigo Duterte was reported as $82 \pm 3\%$ with a $95\%$ confidence level.
	- We are "95% confident" that the true population satisfaction rating lies within the interval $$79\% \leq p \leq 85\%$$
	- If the sampling is repeated many times, this interval would contain the true value 95% of the time.
<!--ID: 1749037685256-->
### Constructing a confidence interval

- Multiply the standard error by the $Z$-score associated with the confidence level; e.g., for a $95\%$ confidence level: $$\hat{p} \pm 1.96 \times \text{SE}$$
	- A $Z$-score of $1.96$ is used because $95\%$ of the data lies within $1.96$ standard deviations from the mean.
<!--ID: 1749037685264-->
## Hypothesis testing

- Hypothesis testing confirms if the hypotheses are true in a statistically significant way.

1. State the null hypothesis $H_0$ and the alternative hypothesis $H_1$
2. Construct the sampling distribution for the case that $H_0$ is true (i.e., assume $H_0$ is true)
3. Find the $Z$-score for the observed point estimate and calculate the probability of obtaining a value that is at least that far away from the mean. This probability is known as the **$p$-value**.
4. If the $p$-value is less than a specified **significance level**, **reject** $H_0$. Otherwise, accept $H_0$.
<!--ID: 1749037685273-->
### Type 1 error

- $H_0$ is true, but is interpreted as false
<!--ID: 1749037685282-->
### Type 2 error

- $H_0$ is false, but is interpreted as true
<!--ID: 1749037685290-->
