## Time-series data

- Data is not usually independent. One data point is influenced by surrounding data.
- Data points are not identically distributed.
- Ordering matters.
- **Trend**: Data will increase/decrease generally over time
- **Seasonality**: Periodic fluctuations that repeat over time
- **Stationarity**: There is no trend nor seasonality in the time series.
	- Mean, variance, and autocorrelation remain constant over time.
	- **Properties do not depend on the time at which the series was observed**
	- No predictable long-term patterns.
	- Test with **Dickey-Fuller** method, which returns a $p$-value. If $p < 0.05$, then the time series is more or less stationary.
- **Autocorrelation**: Measures the similarity of a time series with a lagged version (can reveal seasonality)

### Pre-processing

- Tabular form
- Handle outliers
	- Outliers may be caused by errors or actual anomalies. **Be sure to consider why the outlier could have occurred**.
- Handle missing values
	- Imputation (get same values as nearest data point, linear interpolation, etc.)
- Making the data stationary
	- Differencing: Subtract each data point from the data point before it to stabilize the mean.
	- Residual modelling: Fitting a line or curve to model the time series, then using residuals as the new data points
	- Log transform: Applies a logarithm operation on each data point.

## Moving average

- Next observation is average of previous observations
- FIR filter
- Convolution

## Autoregressive model

- Predict the value of the time series at a given point based on previous values
- Use a regression model on the previous values of the same data. **Requires stationary data**.

## Autoregressive Moving Average (ARIMA)

1. Difference to remove trends in the data
2. When forecasting, bring back the trend after making the prediction
3. Combine MA and AR, where both AR and MA use a lag of 1 as a parameter.