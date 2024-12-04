---
target-deck: CCINFOM::Fundamentals of data and information
tags: [CCINFOM]
title: Fundamentals of data and information
draft: false
---

## Data

**Data** is the quantities, characters, or symbols on which operations are performed by a computer, i.e., raw facts without context. It is the quantities, characters, or symbols on which operations are performed by a computer, being stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media.
<!--ID: 1726155954378-->

## Information

Information is **data with context**; it is data **as** processed, stored, or transmitted by a computer. Transforming data into information involves providing context to raw facts, but does **not** necessarily mean the computations through which this is done can **change** the values of the data.

>[!tip] This process also does not include data validation.

<!--ID: 1726155954382-->

## Knowledge

**Knowledge** is a set of information and facts on a specific subject. Knowledge is extracted from information by asking the following questions:

- How is it tied to the **results**?
- Are there any **patterns**?
- What is **relevant** to the problem?
- How does it **affect** the system?
- What is the **best** way to use it?
- How can we add more **value** to it?
<!--ID: 1726155954386-->

## Database applications

A **database application** collects data and transforms it to information. It should be able to provide its users of what they need or want to know about the data (that is, it should contextualize it).

```
                                                  
 ┌──────────┐     ┌───────────┐     ┌───────────┐ 
 │Input data├────►│Database   ├────►│Information│ 
 └──────────┘     │application│     └───────────┘ 
                  └───────────┘                   
                                                  
```

<!--ID: 1726155954391-->

### Applications development

Creating a computer program or a set of program to perform a task.

<!--ID: 1726155954395-->

### Database application anatomy

<!--ID: 1726155954398-->

#### Single monolithic application

A **single monolithic application** is the most basic form of a database application. The **data-based** application handles **all** of the following:

- Input
- Output
- Computations
- Validation
- Implementation of rules
- Report generation
- **R**eading, **u**pdating, and **d**eletion of data
<!--ID: 1726155954402-->

#### Client-server

The **client-server anatomy** is often used in desktop-based database applications. Unlike monolithic applications, reading, updating, and deletion of data is offloaded to a **database server**.

<!--ID: 1726483836081-->

#### 3-tier architecture

**3-tier architecture** is often used in web-based database applications. It offloads input and output to a separate tier as follows:

| **Human interaction** | **Processing**          | **Database server**                 |
| --------------------- | ----------------------- | ----------------------------------- |
| Input                 | Computations            | Reading, updating, deletion of data |
| Output                | Validation              |                                     |
|                       | Implementation of rules |                                     |
|                       | Report generation       |                                     |

<!--ID: 1726483836086-->

## Dimensions of quality information

We consider the following **dimensions of quality information** when examining how information is structured and presented:

$$
\begin{align*}
\text{Accessible} && \text{Accurate} &&\text{Complete} &&\text{Economical} \\
\text{Flexible} && \text{Relevant} && \text{Reliable} && \text{Secure} \\
&& \text{Simple} && \text{Timely} && \text{Verifiable} \\
\end{align*}
$$
<!--ID: 1726155954406-->

### Accessible

Can the information be easily obtained? Information should be easily accessible by authorized users so they can obtain it in the right format and at the right time to meet their needs.

<!--ID: 1726155954410-->

### Accurate

Is the information error-free? An example would be **testing** a formula multiple times to ensure that the results of the computations match the expected results. In some cases, inaccurate information is generated because inaccurate data is fed into the transformation process.

<!--ID: 1726155954414-->

### Complete

Are all necessary details presented? Information should contain all the important facts. For example, an application must have all appropriate columns properly arranged and sorted for viewing.

<!--ID: 1726155954418-->

### Economical

Is there a balance between value of information of cost of production? Information should be relatively economical to generate and use.

<!--ID: 1726155954421-->

### Flexible

Is the information workable with others? This occurs when a database is designed such that it can serve the data requirements of **several** applications that will be developed.

<!--ID: 1726155954424-->

### Relevant

Does the information address the user's needs? Information should be relevant to the decision maker. For example, a database application may display data as reference for the user based on what the user will need to effectively make a decision.

<!--ID: 1726155954429-->

### Reliable

Can the information be trusted (reliability of the collection method or source of the information, i.e. context)? For instance, using a QR code scanner instead of collecting data through keyboard entry better ensures the integrity of the collected data.

<!--ID: 1726155954432-->

### Secure

Is the information protected? Information should be secured from access by unauthorized users.

<!--ID: 1726155954435-->

### Simple

Does the information have a functional representation? Information should be simple and not overly complex, as sophisticated information is not always needed.

<!--ID: 1726155954439-->

### Timely

Is the information up to date? Information must be delivered when it is needed. For instance, customers can **immediately** see the summary of their orders and the amount they need to pay.

<!--ID: 1726155954442-->

### Verifiable

Can the information be verified? It must be possible to check if the information is correct. For instance, a user may be allowed to check the history of their unpaid dues in order to verify that the total is correct.

<!--ID: 1726155954447-->
