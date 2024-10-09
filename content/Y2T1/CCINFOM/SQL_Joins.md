---
target-deck: CCINFOM::SQL Joins
tags: CCINFOM
title: SQL Joins
---

## Joins

A `JOIN` operator works with **two** input tables. They are usually used to link two tables together based on an attribute.

### Inner join

An **inner join**, specified by the `INNER JOIN` (or the equivalent `JOIN`) keyword, matches rows matched between two tables based on a **join condition**. For instance, consider the following tables `students` and `students_playstyles`:

|`id`|`first_name`|`last_name`|
|---|---|---|
|1000|Hinata|Masaya|
|1001|Asuka|Kurashina|
|1002|Misaki|Tobisawa|
|1003|Mashiro|Arisaka|
|1004|Rika|Ichinose|
|1005|Madoka|Aoyagi|

|`student_id`|`playstyle`|
|---|---|
|1000|All-rounder|
|1001|All-rounder|
|1002|Fighter|
|1003|Speeder|
|1004|Speeder|

The following query will perform an inner join on the two tables:

```sql
SELECT students.id, first_name, last_name, playstyle 
FROM students 
    JOIN students_playstyles 
    ON students.id = students_playstyles.student_id;
```

Note how the join condition is **comparing** the `id` column from the `students` table with the `student_id` column from the `student_playstyles` column (in this case, it checks if they are **equal**). This will return the following result:

|`id`|`first_name`|`last_name`|`playstyle`|
|---|---|---|---|
|1000|Hinata|Masaya|All-rounder|
|1001|Asuka|Kurashina|All-rounder|
|1002|Misaki|Tobisawa|Fighter|
|1003|Mashiro|Arisaka|Speeder|
|1004|Rika|Ichinose|Speeder|

The row containing the `id` of `1005` in the `students` table was not included in the final result because inner joins **only return rows that meet the `ON` condition**. There was no record with a `student_id` of `1005` in the `students_playstyles` table, so this row could not be matched with anything and was excluded from the result.

### Outer joins

**Outer joins** behave similarly to inner joins, but a **table** is **preserved** in the final result. In other words, all rows on one table will remain in the final result, even if they are not matched with a row on the other table (instead it will be assigned values of `NULL`). `LEFT JOIN` preserves the **first** table, while `RIGHT JOIN` will preserve the **second**.  For instance, replacing the previous query with a `LEFT JOIN` will yield:

```sql
SELECT students.id, first_name, last_name, playstyle 
FROM students 
    LEFT JOIN students_playstyles 
    ON students.id = students_playstyles.student_id;
```

|`id`|`first_name`|`last_name`|`playstyle`|
|---|---|---|---|
|1000|Hinata|Masaya|All-rounder|
|1001|Asuka|Kurashina|All-rounder|
|1002|Misaki|Tobisawa|Fighter|
|1003|Mashiro|Arisaka|Speeder|
|1004|Rika|Ichinose|Speeder|
|1005|Madoka|Aoyagi|`NULL`|

Note how this time the row containing the `id` of `1005` in the `students` table was included, except with a `playstyle` attribute of `NULL` (since it could not be matched with an entry in the `students_playstyles` table).
