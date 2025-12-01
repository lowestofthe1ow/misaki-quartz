---
target-deck: CCINFOM::Data modeling and database design
tags: [CCINFOM]
title: Data modeling and database design
---

## Data model

A **data model** is a representation or an **abstraction** of a complex, real-world data structure. Data may be modeled with entities, characteristics, relations, constraints, transformations, and other constructs.
<!--ID: 1732202497553-->

### Entity

An **entity** is anything about which data is collected and stored. Each entity must be **unique** and **distinct**.
<!--ID: 1732202497557-->

### Attribute

An **attribute** is some characteristic of an entity. An employee can have an ID, a name, and contact details, for instance.
<!--ID: 1732202497560-->

### Relation

A **relation** is an association between entities. We make sense of data by associating them with other data. For example, an employee can belong to a department.
<!--ID: 1732202497564-->

#### One-to-one

> A retail company’s management structure may require that each of its stores be managed by a single employee. In turn, each store manager, who is an employee, manages only a single store.

This is a **one-to-one** relation.
<!--ID: 1732202497568-->

#### One-to-many

> A painter paints many different paintings, but each one of them is painted by only one painter.

This is a **one-to-many** relation.
<!--ID: 1732202497572-->

#### Many-to-many

> An employee may learn many job skills, and each job skill may be learned by many employees.

This is a **many-to-many** relation.
<!--ID: 1732202497575-->

### Constraint

A **constraint** is a restriction placed on the data. For instance, a student's GPA must be between 0.00 and 4.00. A constraint may be inherent (implicit), schema-based (explicit), or application-based (semantic).
<!--ID: 1732202497579-->

## Database modeling tiers

![[modeling_tiers.png]]
<!--ID: 1732202497583-->

### Conceptual

The **conceptual** tier of database modeling:

- Describes the structure of the data without specifying physical storage and retrieval methods
- User-specified business rules
- Example: **Entity relationship modeling**
<!--ID: 1732202497586-->

### Logical

The **logical** tier of database modeling:

- Logical schema
- **Technology-dependent** representation of the data
- Hierarchical, network, or relational architecture
<!--ID: 1732202497590-->

### Physical

The **physical** tier of database modeling:

- Internal storage structure and access strategies (**RAID**)
- Transforming the logical schema into a database language
<!--ID: 1732202497593-->

## Database design
<!--ID: 1732202497596-->

### Structures

- What data will be stored
- Where logically connected data will be stored to form records
- How records will be related to each other to form "truths" that must be stored
- How records must be structured to minimize redundancies
<!--ID: 1732202497599-->

### Rules

- Integrity of data
- Integrity of records
- Integrity of relationships
<!--ID: 1732202497602-->

## Business rules

**Business rules** are a description of a policy, procedure, or principle within an organization. They describe the main characteristics of data through their view, and is used to define entities, attributes, relationships, and constraints.
<!--ID: 1732202497606-->

### Database-oriented

- How data is grouped
- How tables are related to each other
- Range of valid values (domains) for each data
- Column constraints
<!--ID: 1732202497609-->

### Application-oriented

- Data entry validation checks to complement the DB constraints
- How processes are conducted in the software
- Methods for accessing data in the database
<!--ID: 1732202497612-->

## Transaction design
<!--ID: 1732202497615-->

### Transaction

A **transaction** is a series of actions carried out by a single user or program that accesses or changes the content of the database. A transaction may be a **retrieval**, an **update**, or **mixed**.

A transaction has the following characteristics:

- Data to be used
- Operations to be performed
- Output
- Relevance (to the user)
- Expected rate of usage
<!--ID: 1732202497619-->

## User views

![[user_views.png]]

A **user view** is a view of part or all of the contents of a database specified to facilitate a particular purpose or user activity.
<!--ID: 1732202497624-->
