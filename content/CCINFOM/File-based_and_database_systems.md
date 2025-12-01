---
target-deck: CCINFOM::File-based and database systems
tags: [CCINFOM]
title: File-based and database systems
draft: false
---

## File-based systems

Application software communicates with **files** (text and binary). Only one type of record is stored in one file. The application is coded with data management functions. However, the programmer must be aware of:

- File location
- File type (text or binary)
- File operations (write or read)
- The file's data structure
- Creating procedures to manipulate the data in the file

> [!error] File based systems find difficulty in relating data to other data.
<!--ID: 1726155954481-->

### Issues with file-based systems

File-based systems face the challenge of having data become **isolated**, leading to redundancy and inconsistencies. It is also difficult to relate data to other data while maintaining its security. Adding new fields to the file structure may also result in needing to rewrite all existing programs, making it difficult to share data between applications.
<!--ID: 1733233618427-->

## Database systems

A **database system** comprises the following components:

- A **database**
- A database management system (**DBMS**)
- A [[Fundamentals_of_data_and_information#Database applications|database application]]

```
┌────────┐     ┌────┐     ┌────────────────────┐
│Database│◄───►│DBMS│◄───►│Database application│
└────────┘     └────┘     └────────────────────┘
```

The database application is no longer aware of how data is stored as a collection of files; only the DBMS knows. The application is also coded with **data management functions** that include collection, storage, processing, distribution, and presentation.

While the database system encompasses all three components, the term **database server** is used to refer only to the database and the database management system. Note that the database server may be on a different machine from that of the database application.

> [!info] When interacting with the database, we do not see the **physical** representation of the data storage, only its **logical** representation, known as a **data model**

>[!info] Searching and sorting the results, including checking for duplicate data, is done by the DBMS, not the programmer.
<!--ID: 1726155954485-->

## When to use file-based systems

There will always be a place for systems that use files as a way to store data:

- when data is **unstructured** (pictures, movies, documents, etc.)
- when the application involves the uploading of such files
- when there are no complex requirements concerning data security, relations, and manipulation
<!--ID: 1733233618435-->
