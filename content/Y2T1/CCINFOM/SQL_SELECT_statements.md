---
target-deck: CCINFOM::SQL SELECT statements
tags: [CCINFOM]
title: SQL SELECT statements
---

## `SELECT` statements

A `SELECT` statement **queries** tables, applies logical manipulation, and returns a result. At its most basic form, it is written as follows:

```sql
SELECT column_name1, column_name2, ..., column_nameN FROM table_name;
```

For instance, the following query returns the `first_name` and `last_name` attributes of every row in the table `employees`:

```sql
SELECT first_name, last_name FROM employees;
```

<!--ID: 1728391428978-->

### Wildcards

It is possible to use an **asterisk** (`*`) instead of explicitly naming column names. This will return all attributes in the specified table. For instance:

```sql
SELECT * FROM employees;
```

will return all attributes of all rows from the table `employees`. It is, however, generally better to explicitly name the attributes you need.

<!--ID: 1728391428996-->

### Aliases (`AS`)

The `AS` keyword can be used to define an alias for an attribute, "renaming" it in the query result. For instance, the following query returns the column `first_name` renamed as `name` in the query result:

```sql
SELECT first_name AS name FROM employees;
```

<!--ID: 1728391429007-->

### `WHERE` clause

The `WHERE` clause specifies a logical expression that **filters** the rows returned by the `SELECT`-`FROM` query. The following query returns the `first_name` attributes of all rows in the `employees` table for which the `last_name` value is `Tobisawa`:

```sql
SELECT first_name FROM employees WHERE last_name = "Tobisawa";
```

>[!warning] MySQL evaluates logical expressions to three possible values: `TRUE`, `FALSE`, and `NULL`.
>Note that this means an expression not being `FALSE` does **not** necessarily mean it is `TRUE`. The `WHERE` clause **strictly** only returns rows where the expression is `TRUE`.

<!--ID: 1728391429016-->

### `GROUP BY` clause

The `GROUP BY` clause arranges the returned rows into groups based on its attributes. Consider the following table named `student_grades:

|`id`|`term`|`gpa`|
|---|---|---|
|1000|1|4|
|1000|2|3.5|
|1000|3|3|
|1001|1|3|
|1001|2|3.5|
|1001|3|3.5|
|1002|1|3|
|1002|2|3|
|1002|3|2.5|

The following query will aggregate the returned rows based on the `id` attribute:

```sql
SELECT id FROM student_grades GROUP BY id;
```

This will return all distinct `id` values from the table:

|`id`|
|---|
|1000|
|1001|
|1002|

>[!error] Note that in this case you **cannot** include other attributes in the `SELECT` query.
>For instance, `SELECT id, gpa FROM ...` will **not** work. This is because MySQL does not yet know how you want to **aggregate** the individual values of `gpa` per group (more on this later)

<!--ID: 1728391429027-->

#### Aggregate functions

**Aggregate functions** can be used when using `GROUP BY` statements to return a value based on the individual values within each group. For example, it is possible to fetch the average `gpa` of each student `id` with the following query:

```sql
SELECT id, AVG(gpa) AS average_gpa FROM student_grades GROUP BY id;
```

This query groups together the rows from `student_grades` based on their `id` and then aggregates all `gpa` values in each group with `AVG()`:

|id|gpa|
|---|---|
|1000|3.5|
|1001|3.3333333333333335|
|1002|2.8333333333333335|

>[!info] You may use aggregate functions without grouping the rows first.
>For instance, `SELECT AVG(gpa) FROM student_grades;` will return the average of **all** values of `gpa` across all rows (i.e., the entire table is treated as a single "group").

<!--ID: 1728391429035-->

##### `AVG()`

The `AVG(column_name)` aggregate function returns the average of all non-`NULL` values under `column_name`.

<!--ID: 1728391429045-->

##### `COUNT()`

The `COUNT(column_name)` aggregate function returns the number of non-`NULL` entries under `column_name` (not necessarily distinct).

>[!info] A wildcard (`*`) may be used instead of a column name to count all rows in the group.
>This will include all rows, regardless of their contents.

<!--ID: 1728391429054-->

##### `MIN()`

The `MIN(column_name)` aggregate function returns the minimum non-`NULL` value under `column name`.

<!--ID: 1728391429064-->

##### `MAX()`

The `MAX(column_name)` aggregate function returns the maximum non-`NULL` value under `column name`.

<!--ID: 1728391429072-->

##### `SUM()`

The `SUM(column_name)` aggregate function returns the sum of all non-`NULL` values under `column name`.

<!--ID: 1728391429081-->

#### `HAVING` clause

The `HAVING` clause is similar to `WHERE`, except it filters **groups** instead of **rows**. Because of this, it is possible to use this clause in conjunction with aggregate functions. For instance, to get the students who have a `gpa` of at least `3`:

```sql
SELECT id, AVG(gpa) FROM student_grades GROUP BY id HAVING AVG(gpa) > 3;
```

This will return:

|id|gpa|
|---|---|
|1000|3.5|
|1001|3.3333333333333335|

<!--ID: 1728391429090-->
