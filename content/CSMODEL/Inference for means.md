---
target-deck: CSMODEL::Inference for means
tags:
  - CSMODEL
title: Inference for means
---

## Inference for means

<!--ID: 1749037685090-->
### Mean of the sampling distribution for means

- The center or "mean" of the sampling distribution (a normal distribution by CLT) for means is the population mean $\mu$.

<!--ID: 1749037685101-->
### Spread of the sampling distribution for means

- The spread or "standard deviation" of the sampling distribution (a normal distribution by CLT) is referred to as the **standard error**: $$\text{SE}=\frac{\sigma}{\sqrt{n}}$$

<!--ID: 1749037685108-->
## $T$-distribution

- The $T$-distribution is more effective in approximating the sampling distribution for means, especially when the sample size is small
- The curve has slightly thicker tails.

<!--ID: 1749037685116-->
### $T$-score

- The **$T$-score**, similar to the $Z$-score, determines how far an observation is from the mean. $$T\text{-score}=\frac{x - \bar{x}}{\text{SE}}$$

<!--ID: 1749037685124-->
### Degrees of freedom

- The **degrees of freedom** controls the shape of the curve. This is usually taken as one less than the sample size, i.e., $n - 1$.

<!--ID: 1749037685129-->
### Confidence intervals

- To construct a confidence interval at some confidence level, e.g., $95\%$, get the $T$-score under which $95\%$ of the data falls (use a $T$-table) and multiply by the standard error. $$\hat{x} \pm \text{SE} \times T\text{-score}$$
- Similarly with the normal distribution, when the sampling is repeated many times, this confidence interval will contain the true population mean $95\%$ of the time.

<!--ID: 1749037685139-->
## Hypothesis testing for one-sample means

1. State the null hypothesis $H_0$ and the alternative hypothesis $H_1$, e.g. $$\begin{align*}H_0: \mu &= 93.29 \\ H_A: \mu &\neq 93.29 \\\end{align*}$$
2. Construct the sampling distribution for the case that $H_0$ is true (i.e., assume $H_0$ is true)
3. Find the $T$-score for the observed point estimate: $$T\text{-score} = \frac{x - \bar{x}}{\text{SE}} = \frac{x - \bar{x}}{\displaystyle \frac{s}{\sqrt{N}}}$$ and calculate the probability of obtaining a value that is at least that far away from the mean. This probability is known as the **$p$-value**, and can be found on a $T$-table.
4. If the $p$-value is less than a specified **significance level**, **reject** $H_0$. Otherwise, accept $H_0$.

<!--ID: 1749037685147-->
### Hypothesis testing for paired observations

1. Take the difference of each paired observation and find the mean $\mu_D$.
2. Set up the hypotheses as $$\begin{align*}H_0: \mu_d &= 0 \\ H_A: \mu_d &\neq 0 \\\end{align*}$$
3. Proceed with the same steps as with a hypothesis test for a one-sample mean.

<!--ID: 1749037685151-->
### Hypothesis testing for unpaired observations

1. Take the difference of the means of the two categories.
2. Set up the hypotheses as $$\begin{align*}H_0: \mu_d &= 0 \\ H_A: \mu_d &\neq 0 \\\end{align*}$$
3. Set standard error as $$\text{SE} = \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$$
4. Set $df$ to the lower sample size minus 1.
5. Proceed with the same steps as with a hypothesis test for a one-sample mean.

<!--ID: 1749037685160-->
## Hypothesis test for multiple means

1. Set up the hypotheses as $$\begin{align*}H_0&: \mu_1 = \mu_2 = \dots = \mu_n \\ H_A&: \text{At least one of the means varies} \end{align*}$$
2. Find $df_1$ and $df_2$ $$\begin{align*}df_1 &= k - 1 \\ df_2 &= n - k\end{align*}$$
	- $k$ is the number of groups
	- $n$ is the total sample size across *all* groups
3. Compute for the $F$-statistic $$F = \frac{\text{MSG}}{\text{MSE}}$$
	- $\text{MSG}$ is the *mean square between groups* $$\text{MSG} = \frac{\text{SSG}}{df_1} \ \ \text{where SSG} = \sum_{i=1}^k{n_i (\bar{x_i} - \bar{x})^2}$$
	- $\text{MSE}$ is the *variability within each group* $$\text{MSE} = \frac{\text{SST} - \text{SSG}}{df_2} \ \ \text{where SST} = \sum_{i=1}^n{(\bar{x} - \bar{x_i})^2}$$
4. Find the $p$-value based on the $F$-statistic and test for significance.
5. If one mean varies from the others, identify which group by comparing all means pairwise to check for a significant difference.
	- Use a modified confidence level $\alpha^*$ for each test: $$\alpha^* = \frac{\alpha}{K}$$where $K$ is the number of comparisons made. This is known as a **Bonferroni** correction, made to account for increased chances of encountering a Type I error.
<!--ID: 1749037685167-->
