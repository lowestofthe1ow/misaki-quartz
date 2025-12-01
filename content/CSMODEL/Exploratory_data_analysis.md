---
target-deck: CSMODEL::Exploratory data analysis
tags: [CSMODEL]
title: Exploratory data analysis
---

## Data analysis

Data analysis involves the **summarization** of data.
<!--ID: 1747739754878-->

### Descriptive data analysis

**Descriptive** data analysis involves reporting the data summaries **without** interpretation.
<!--ID: 1747739754880-->

### Exploratory data analysis

**Exploratory** data analysis is when an analysis (that both summarizes **and** interprets) does **not** quantify whether the discoveries are likely to hold in a new sample.
<!--ID: 1747739754881-->

#### Investigate

Get a first look of the data
<!--ID: 1747739754883-->

#### Understand

Understand the data and its properties
<!--ID: 1747739754885-->

#### Hypothesize

Form hypotheses and ask more questions
<!--ID: 1747739754887-->

#### Statistics

Central tendency and dispersion — **numerical summaries**
<!--ID: 1747739754888-->

#### Data cleaning

**By this stage of analysis, we should already be done with representation, data cleaning, and with data processing**
<!--ID: 1747739754890-->

#### Visualization

Scatterplot, dot plot, histogram, box plot
<!--ID: 1747739754893-->

## EDA checklist

- Different **information** available in the data
- **Range** of values of each variable
- **Distributions** of different variables
- Presence of **outliers**
- **Comparisons** between different **variables**
- **Comparisons** between **groups** of observations
- **Testing** of personal assumption about the data

**I**nformation, **R**ange, **D**istributions, **T**esting, **O**utliers, **V**ariables, **G**roups
"*I really didn't try out video games*"
<!--ID: 1747739754895-->

### Regarding the format/metadata

- What does each observation represent?
- What does each variable represent?
- Is each row an individual record?
- Are there duplicates?
- Are there missing data?
- What is the unit of measure for each variable?
<!--ID: 1747739754897-->

### Regarding the method of collection

- Is the dataset a **population** or a **sample**?
- Are there possible biases?
- Is the data collection consistent across all observations?
- Is it grouped?
- Is it simulated?
<!--ID: 1747739754899-->

### Regarding previous processing involved

- Normalization
- Discretization (binning)
- Interpolation (imputation)
- Truncation (removal)
<!--ID: 1747739754901-->

### Regarding the data

- Describe each variable in the dataset
	- Summary statistics, frequency tables, histograms
- Describe the relationships between variables
	- Scatter plots, correlation tables, etc.
<!--ID: 1747739754903-->

### Regarding variables

- Measures of central tendency
	- Mean, median, mode, trimmed mean
- Measures of dispersion
	- Range, IQR, standard deviation
- What does the distribution look like
	- Symmetric, positively/negatively skewed
<!--ID: 1747739754905-->

### Regarding relationships between variables

- Is there a relationship between two variables?
	- Measures of correlation (Pearson, Spearman)
	- Scatter plot, correlation tables
- `pandas` library `corr()` function
<!--ID: 1747739754907-->

### Regarding outliers and anomalies

- Are there outliers? Errors/anomalies in encoding?
- Are there needed preprocessing steps to visualize and process the data properly?
- **Keep outliers, delete anomalies** (...usually)
<!--ID: 1747739754908-->

## Summary statistics
<!--ID: 1747739754910-->

### Measures of central tendency

Mean, median, and mode
<!--ID: 1747739754912-->

#### Mean

Used for continuous and discrete **numeric** data (i.e., no categorical data). Susceptible to outliers.
<!--ID: 1747739754914-->

#### Trimmed mean

Remove the top and bottom $N\%$ data to weaken effect by outliers.
<!--ID: 1747739754915-->

#### Mode

Calculated for numerical and **categorical** data. May not reflect the center of the distribution well. Continuous numerical data may not even have a mode.
<!--ID: 1747739754917-->

### Measure of dispersion
<!--ID: 1747739754919-->

#### Range

Difference between `max()` and `min()`
<!--ID: 1747739754921-->

#### Interquartile range

Difference between median of the upper half and the median of the lower half ($Q_3 - Q_1$). Attempts to eliminate outliers
<!--ID: 1747739754923-->

#### Variance and standard deviation

Standard deviation is the square root of the variance. While these are based on every item of the distribution, it may be easily impacted by outliers and extreme values.
<!--ID: 1747739754925-->

### Pearson correlation

Assesses the linear relationship between two variables. Three requirements:

1. Data is measured using interval or ratio scales. It should **not** be ordinal.
2. The variables are assumed to have a **linear** relationship.
3. Assumes a **normal** distribution.

>[!warning] Use Spearman correlation if any of these requirements are not met.
<!--ID: 1747739754927-->

### Spearman correlation

Assesses the monotonic relationship between two variables. Same as Pearson correlation, but uses data **ranks** instead of actual values (1 is assigned to the highest value in the data set).

Use by default if your data is **ordinal**. Spearman correlation does not require the variables to have a linear relationship nor does it require that the data be normally distributed.
<!--ID: 1747739754929-->
