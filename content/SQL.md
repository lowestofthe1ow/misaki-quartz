This is a list I had saved from when I took CCINFOM. I'm not sure if this is 100% going to be the same as what will appear on your writing exam but it should roughly line up.

- SELECT
	- FROM
	- WHERE
		- EXISTS
		- LIKE
	- AS
	- DISTINCT
- ORDER BY
	- ASC (default)
	- DESC
- GROUP BY
- HAVING
	- COUNT
	- AVG
	- MIN
	- MAX
	- SUM
- DATETIME()
	- INTERVAL
	- TIMESTAMPDIFF
- NOW()
	- YEAR()
	- MONTH()
	- DAY()
- CONCAT()
- LENGTH
- SUBSTRING
- IS NOT NULL
- JOIN
	- ON
	- LEFT
	- RIGHT
	- CROSS (same as JOIN without ON)
- AND
- OR
- BETWEEN
- LIMIT
- EXISTS
- ANY
- ALL
- CASE
- NULLIF
- IFNULL

---

**Main reference**: I. Ben-Gan, _T-SQL fundamentals_, Fourth edition. New York: Pearson Education, Inc., 2023. (**Warning**: This is technically for T-SQL, not MySQL, which may have syntax differences)
## Query processing order

1. **FROM**: Query the table
2. **WHERE**: Filter the table
3. **GROUP BY**: Group by a column
4. **HAVING**: Filter *groups*
5. **SELECT**: Return specific columns
6. **ORDER BY**: Sort the rows

- This order is the same as actual SQL syntax, but SELECT is **always written first**, even if it isn't actually processed until later
- SQL attempts to follow English sentence structure
- It's useful to view SQL queries as **transforming** or manipulating the input table obtained from the FROM clause step-by-step

### FROM clause

- First "phase" in processing
- Allows you to select a table --- think of it like "loading" a starting table for use with the rest of the query
- The table can be **modified** with a **JOIN** clause before it is passed to the next phase.

### WHERE clause

- Second "phase"
- By this point, you have a raw table from the FROM clause.
- WHERE will *filter* the rows returned based on a logical expression. Only the rows for which this expression is TRUE will be passed to the next phase.

### GROUP BY clause

- Third "phase"
- By this point, your input table will have been filtered.
- GROUP by will produce a "group" for each distinct combination of your specified columns.
- **Example**: GROUP BY age_range, year_level;
	- Will group your table based on all possible combinations of age_range and year_level
- **The "rows" passed to the next phase will be the "groups"**. Information about rows within these groups are maintained internally but are by this point abstracted away from the user.

### HAVING clause

- Fourth "phase"
- Pretty much the same as WHERE, but instead of filtering **rows**, this phase will filter **groups**
- This phase is where you can start using **aggregate functions**, which basically measure the characteristics per group:
	- **COUNT**: How many occurrences of some value in a column
	- **AVG**: Average of values for some column
	- **MIN**: Minimum of values for some column
	- **MAX**: Maximum of values for some column
	- **SUM**: Sum of values for some column

### SELECT clause

- Lets you select columns from your table to return in the output
- Can remove duplicate rows with SELECT DISTINCT
- Can also use aggregate functions

### ORDER BY clause

- Sort rows by some columns ascending or descending
- Default: Ascending

---

## Sample exercises

Some of these exercises are taken from [here](https://datamastery.gitlab.io/exercises/sakila-queries.html).

1. Return a count of **distinct** last names of actors.
2. Return a list of last names that appear more than once.
3. Return the actor that has appeared in the most films.
4. Return a list of average running time of films by category.
5. Return a list of **all language names** and the duration of the longest film in the *Sci-Fi* category with that language as its "original language".

---

## Answers

1. Return a count of **distinct** last names of actors.

```sql
SELECT COUNT(DISTINCT last_name) FROM actor;
```

2. Return a list of last names that appear more than once.

```sql
SELECT last_name 
    FROM actor
    GROUP BY last_name
    HAVING COUNT(*) > 1;
```

3. Return the actor that has appeared in the most films.

```sql
SELECT a.actor_id, a.first_name, a.last_name, 
    COUNT(a.actor_id) AS film_count
    FROM actor a JOIN film_actor fa ON a.actor_id = fa.actor_id
    GROUP BY a.actor_id
    ORDER BY film_count DESC
    LIMIT 1;
```

4. Return a list of average running time of films by category.

```sql
SELECT c.name, AVG(f.length)
    FROM film f 
        JOIN film_category fc ON fc.film_id = f.film_id
        JOIN category c ON c.category_id = fc.category_id
    GROUP BY c.category_id
    ORDER BY AVG(f.length) DESC;
```

5. Return a list of **all language names** and the duration of the longest film in the *Sci-Fi* category with that language as its "original language".

```sql
SELECT l.name, MAX(f.length)
    FROM language l
        LEFT JOIN film f ON l.language_id = f.language_id
        LEFT JOIN film_category fc ON f.film_id = fc.film_id
        LEFT JOIN category c ON fc.category_id = c.category_id
	        AND c.name = 'Sci-Fi'
    GROUP BY l.language_id;
```