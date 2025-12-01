---
target-deck: CCINFOM::Relational database model
tags: [CCINFOM]
title: Relational database model
---

## Relational database model

In a **relational database model**, data points related to each other are stored in a **table**. Tables are related by special fields known as **keys**. A relational database is usually managed by a **Relational Database Management System** (RDBMS)
<!--ID: 1732202497661-->

### Table

A relational **table** is a two-dimensional structure composed of rows and columns. Each **row** in a table is known as a tuple, representing a record (a single entity). Each **column** represents an attribute and has a distinct name.
<!--ID: 1732202497664-->

#### Decomposition

Table **decomposition** is splitting a table into multiple tables. The original table may be recreated through a `JOIN` query or a similar command.
<!--ID: 1732202497667-->

### Key

A **key** consists of one or more attributes that **determine** other attributes. The phrase "A determines B" indicates that, if you know the value of attribute A, then you can look up (hence "determine") the value of attribute B. In other words, B is **functionally dependent** on A.
<!--ID: 1732202497671-->

#### Functional dependence

An attribute B has a **functional dependence** on the attribute A if each value in column A determines **one and only one** value in column B.
<!--ID: 1732202497674-->

#### Composite key

It may take more than one attribute to define a functional dependence. A key that is composed of more than one attribute is known as a **composite key**.
<!--ID: 1732202497677-->

#### Superkey

A **superkey** is any key that **uniquely** identifies each row. All of a row's attributes are functionally dependent on the superkey.
<!--ID: 1732202497680-->

#### Candidate key

A **candidate key** is a **minimal** superkey, i.e., a superkey without any subsets that are themselves candidate keys.

>[!info] If B is functionally dependent on A but not on any other subset of A, then B is said to be **fully functionally dependent** on A. Thus the attributes in a row are all fully functionally dependent on a candidate key.
<!--ID: 1732202497684-->

#### Primary key

A **primary key** is a candidate key selected to uniquely identify a given entity in a table. It cannot contain `NULL` entries and is usually an auto-incremented ID field.
<!--ID: 1732202497687-->

#### Secondary key

A **secondary key** is an attribute used strictly for data retrieval.
<!--ID: 1732202497690-->

#### Foreign key

A **foreign key** is an attribute whose values match the primary key in a related table.
<!--ID: 1732202497694-->

#### Natural key

A **natural key** is a real-world identifier used to uniquely identify real-world objects.
<!--ID: 1732202497697-->

#### Surrogate key

A **surrogate key** is an artificially generated key (with no real-world meaning) used to simplify the identification of instances.
<!--ID: 1732202497700-->

### Relational integrity constraints
<!--ID: 1732202497704-->

#### Entity integrity

**Entity integrity** requires that all primary keys are unique, and that no part of the primary key is `NULL`.
<!--ID: 1732202497709-->

#### Referential integrity

**Referential integrity** requires that a foreign key:

- be `NULL`, as long as it is not part of its table's primary key, or
- match a candidate key value in the referenced table
<!--ID: 1732202497713-->
