## Data representation

<!--ID: 1750738628373-->
### Data matrix

- A common representation of data
- Each **row** is one **observation** (record, instance) in the dataset
- Each **column** is a **variable**, a characteristic (feature) of each observation
	- Each variable has a **type** (e.g., numeric)

<!--ID: 1750738628375-->
## `pandas`

- `pandas` ("panel data") is a Python package designed for analysis of tabular data represented as vectors and matrices.

<!--ID: 1750738628377-->
### `DataFrame`

- Primary data structure in `pandas`, represents tabular data
- Two-dimensional (rows and columns)
- Size-mutable
- Potentially heterogeneous
- Contains labeled axes
- Arithmetic operations align to both row and column labes
- Can be thought of as a **dictionary**-like container for `Series` objects
	- i.e., a `DataFrame` is a combination of multiple `Series`

<!--ID: 1750738628379-->
### `Series`

- One-dimensional `ndarray` with axis labels.
- Labels do not need to be unique.
- The object supports both integer and label-based indexing.
- Applying an operation by a scalar performs the operation on each element
- Operations between `Series` align values based on their associated index values
	- The operands do not need to be of the same length.
	- Operation is performed **element-wise**

<!--ID: 1750738628381-->
### Basic operations on a `DataFrame`

- View dataset info
- Select columns
- Select rows
- Filter rows
- Sort rows
- Add new columns
- Aggregate data
- Group by variable(s)

<!--ID: 1750738628383-->
#### View dataset info

- Reveals information about the dataset, e.g., the variables and their types, the number of observations, missing values, etc.

<!--ID: 1750738628385-->
#### Select columns

- Can select one column as a `Series`
- Can select multiple columns as a separate `DataFrame`

<!--ID: 1750738628388-->
#### Select rows

- Select one row as a `Series`
	- Axis labels are the variable names in the source `DataFrame`

![[Pasted image 20250619204616.png|400]]

- Select multiple rows as a separate `DataFrame`

<!--ID: 1750738628390-->
#### Filter rows

<!--ID: 1750738628392-->
#### Sort rows

<!--ID: 1750738628394-->
#### Add new columns

<!--ID: 1750738628396-->
#### Aggregate data

- Aggregates entries in a column (e.g. get the average of all values in a column)

<!--ID: 1750738628398-->
#### Group by variable

- Groups rows by the unique values in a column (or combinations of unique values across multiple columns)
<!--ID: 1750738628400-->
