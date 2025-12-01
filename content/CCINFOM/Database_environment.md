---
target-deck: CCINFOM::Database_environment
tags: [CCINFOM]
title: Database environment
---

## Database management system (DBMS)

A **database management system (DBMS)**:

- **Maintains** the database
- Ensures the **persistent storage** of data
- Facilitates **data manipulation** (CUD)
- Facilitates sharing of data
- Enforces rules against data duplication
- Enforces rules for referential integrity and data consistency
- Provides data security

>[!warning] Using a DBMS and databases is **expensive** and requires frequent updates and maintenance. A database administrator is required to maintain the database.
<!--ID: 1733233618280-->

### DBMS contents

The DBMS contains a **logical** (**not** physical) representation of the data inside the system. A language (e.g. SQL) processor operates on this logical representation to perform file operations on the database, which is usually physically a set of binary files.
<!--ID: 1733233618289-->

### ANSI-SPARC architecture

The ANSI-SPARC architecture is a three-level architecture comprised of the following:

1. The **external** level (the **user** views)
2. The **conceptual** level
3. The **internal** level

The DBMS is in charge of mapping each external view to its corresponding conceptual view, and likewise each conceptual view to its corresponding internal (physical; the actual data stored as files) view. Each user or application simply sees their own external view.
<!--ID: 1733233618298-->

#### Views

**Views** in the ANSI-SPARC architecture refer to logical, user-defined abstractions of data.
<!--ID: 1733233618306-->

## Database environment

The **database environment** contains the components that affect data management and the database itself:

- Hardware
- Software
- Data
- People
- Procedure

It explains how the machine and human components affect each other in terms of data management.
<!--ID: 1733233618327-->

### Hardware

**Hardware** involves physical devices involved in data management (servers and client devices).
<!--ID: 1733233618336-->

### Software

**Software** refers to the operating system, software tools, and applications developed that the DBMS and the database will be working with.
<!--ID: 1733233618344-->

### Data

**Data** refers to the data to be **managed** (created, updated, and deleted).
<!--ID: 1733233618352-->

### People

**People** refers to the different clients of the DBMS and the database. These are the various technical users who ensure that the database system is what the clients need.
<!--ID: 1733233618360-->

### Procedure

**Procedures** or **processes** refer to the set of tasks, functions, and processes that will affect data management. These tasks, on the client side, will affect data management; on the side of technical users, they ensure that the database system is what the clients need.
<!--ID: 1733233618368-->

## Technical users in the database environment

The **technical users** in the database environment are those that manage it:

- **Development**
	- Systems analyst
	- Database architects or designers
	- Application developer
- **Deployment**
	- Database administrator
	- System administrator
<!--ID: 1733233618377-->

### Systems analyst

The **systems analyst** identifies requirements that will be the basis of the database system, talking with the client to identify said requirements.
<!--ID: 1733233618385-->

### Database designer

The **database designer** translates the user requirements identified by the systems analyst and designs the database **schema** or **model**.
<!--ID: 1733233618393-->

### Database administrator

The **database administrator** implements the schema with SQL-DDL.
<!--ID: 1733233618401-->

### Database operator

The **database operator** writes SQL queries to generate **ad hoc reports**.
<!--ID: 1733233618409-->

### Database application developer

The **database application developer** develops the database application to be used by the user.
<!--ID: 1733233618417-->
