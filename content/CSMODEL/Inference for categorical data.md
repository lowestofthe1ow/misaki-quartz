---
target-deck: CSMODEL::Inference for categorical data
tags:
  - CSMODEL
title: Inference for categorical data
---

## Chi-squared distribution

- The **chi-squared** distribution is the expected distribution of the chi-squared statistic ($\chi^2$) when samples are taken repeatedly from a population.

<!--ID: 1749037685176-->
### Test of goodness of fit

- A **test of goodness of fit** determines whether a sample is representative of the general population.

1. Ensure the data is split into some categories.
2. Obtain a reference for the *expected ratios* between these categories and use them to find expected numbers for each category.
3. Use the chi-squared test **if** each observation is independent and each expected count is at least 5: $$\chi^2 = \sum_{i = 1}^k {\frac{(\text{observed}_i - \text{expected}_i)^2}{\text{expected}_i}}$$
4. Construct a chi-squared distribution with $df$ set to the number of groups minus 1. This is the expected sampling distribution of the chi-squared statistic if random samples are taken for $df+1$ groups.
5. Find the probability of observing a value as extreme as the calculated $\chi^2$ (i.e., find a $p$-value based on the $\chi^2$ value).
6. Test for significance based on the $p$-value.

<!--ID: 1749037685183-->
### Test for independence

1. Ensure the data is split into some groups.
2. The expected ratios between the groups should be based on the total across all groups.
3. Perform the same steps as with the goodness-of-fit test.
<!--ID: 1749037685190-->
