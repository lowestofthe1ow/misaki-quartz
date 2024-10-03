---
target-deck: CSNETWK::Introduction to networking
tags: CSNETWK
title: Introduction to networking
draft: true
---

## The Internet

The [[Internetworking#The Internet|Internet]] (note the capitalization) consists of billions of connected computing **devices**. It is referred to as a "network of networks."

The Internet can be seen as an **infrastructure** that provides services to applications, providing programming interfaces to distributed applications.

<!--ID: 1726155954247-->

### Hosts

**Hosts** are **end systems** within the network that run **network apps** at the Internet's **edge**.
<!--ID: 1726155954254-->

### Packet switches

**Packet switches** forward packets (chunks of data). This includes **routers** and **switches**.
<!--ID: 1726155954259-->

### Communication links

**Communication links** are the medium of communication within a network (e.g., fiber, copper, radio, satellite). The rate of transmission across this medium is known as the **bandwidth**.
<!--ID: 1726155954265-->

### Protocols

**Protocols** control the sending and receiving of messages (e.g., HTTP, streaming video, Skype, TCP, IP, WiFi, 4G, Ethernet). They define the:

- message format
- order of messages sent and received
- actions taken upon transmission and receipt

Protocols comprise three elements: the **source**, the **destination**, and the **channel**. All activity in the Internet that involves two or more communicating remote

entities is governed by a protocol.

<!--ID: 1726155954269-->

### Internet structure

<!--ID: 1726155954273-->

#### Network edge

**Network edges** refer to the [[#Hosts|hosts]], i.e., clients and servers (with the latter often being in data centers).
<!--ID: 1726155954278-->

#### Access networks, physical media

**Access networks** refer to wired or wireless communication links
<!--ID: 1726155954281-->

##### Cable-based access (FDM)

**Frequency Division Multiplexing** (FDM) refers to different channels transmitted in different frequency bands.
<!--ID: 1726155954284-->

##### Digital subscriber line (DSL)

**Digital subscriber lines** (DSL) use existing telephone lines (data over DSL phone line goes to the Internet)
<!--ID: 1726155954287-->

##### Wireless access networks

**Wireless access networks** connect end systems to a router via a base station, known as an **access point**.
https://en.wikipedia.org/wiki/IEEE_802.11
<!--ID: 1726155954291-->

###### Wireless local area networks (WLAN)

<!--ID: 1726155954296-->

###### Wide-area cellular access networks

Provided by mobile, cellular network operator

<!--ID: 1726155954300-->

#### Network core

**Network cores** are interconnected routers, so-called "networks of networks."
<!--ID: 1726155954303-->

