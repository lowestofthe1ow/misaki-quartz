## Pandas functions

- df = pd.read_csv() - Loads data from CSV
- df.info() - Shows data frame info
- df.head(n) - Displays first n rows of dataset
- df.tail(n) - Displays last n rows of dataset
- df[colname] - Returns a column from a data frame as a Series
- df[[colname1, colname2]] - Returns multiple columns from the data frame as a separate DataFrame object
- df.value_counts() - Returns counts of unique values
- df.plot.bar() - Plots data frame as a vertical bar plot
- df.plot.barh() - Plots data frame as a horizontal bar plot
- df.hist('colname' bins=n) - Constructs a histogram with n bins based on a column of the data frame
- df[condition] - Returns a new DataFrame object containing only the rows where the boolean condition is true
- df[df[colname] == value] - Example of obtaining rows in a data frame where colname is a specific value
- df.agg(function, axis = 0) - Function can be min, max, mean, median, mode, etc. Aggregates the values in each column (if axis == 0) or each row (if axis == 1) based on this function. Returns a Series containing the aggregate value for each column
- df.agg({colname1: [function1, function2], colname2: [function1, function2]}) - Applies separate aggregate functions for each column. Returns a DataFrame.
- df.groupby(colname) - Returns a copy of the data frame that is "grouped" according to the unique values in the column specified
- df.sort_values(colname, ascending=False) - Sorts a data frame by a column, ascending or descending. Also accepts an array of columns (e.g. [colname1, colname2] will sort by those columns in that order)
- df.boxplot(colname1, by=colname2) - Creates a box plot of colname1 with the data grouped according to the values in colname2
- df.plot.scatter(x=colname1, y=colname2) - Creates a scatter plot with the x and y axes

- norm.ppf(confidence) - Gives the critical value (z-star) for a given confidence level
- chi2, p, dof, expected = chi2_contingency(table) - Performs a chi-squared test
<!--ID: 1750738628300-->
