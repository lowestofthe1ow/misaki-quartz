---
target-deck: CSNETWK::Introduction to networking
tags: [CSNETWK]
title: Introduction to networking
---

## The Internet

The [[Internetworking#The Internet|Internet]] (note the capitalization) consists of billions of connected computing **devices**. It is referred to as a "network of networks."

The Internet can be seen as an **infrastructure** that provides services to applications, providing programming interfaces to distributed applications. It consists of **hosts**, **packet switches**, and **communication links**.
<!--ID: 1726155954247-->

### Hosts

**Hosts** or **end systems** are devices connected to the network that run network **applications** at the Internet's **edge**. This includes desktop computers, Linux workstations, and more nontraditional devices such as TVs and gaming consoles.
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

Protocols comprise three elements: the **source**, the **destination**, and the **channel**. All activity in the Internet that involves two or more communicating remote entities is governed by a protocol.
<!--ID: 1726155954269-->

#### Internet standards

**Internet standards** are a tested specification adhered to by those who work with the internet. It is a formalized regulation that must be followed and is developed by organizations such as the IETF and IEEE.
<!--ID: 1729602614697-->

## Internet structure

Internet structure comprises the following: the **network edge**, **access networks** (physical media), and the **network core**
<!--ID: 1726155954273-->

### Network edge

**Network edges** refer to the [[#Hosts|hosts]], i.e., clients (users) and servers (in data centers).
<!--ID: 1726155954278-->

### Access networks

**Access networks** or physical media refer to wired or wireless communication links.
<!--ID: 1726155954281-->

#### Frequency Division Multiplexing (FDM)

For cable-based access, **Frequency Division Multiplexing (FDM)** is used for different channels to be transmitted over different frequency bands.
<!--ID: 1726155954284-->

#### Digital subscriber line (DSL)

**Digital subscriber lines (DSL)** use existing telephone lines (data over DSL phone line goes to the Internet) connected to a central **access multiplexer** (DSLAM). Through DSL, download speeds (24-52 Mbps) is **faster** than upload speed (3.5-16 Mbps).
<!--ID: 1726155954287-->

#### Wireless access networks

**Wireless access networks** connect end systems to a router via a base station, known as an **access point**. See [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11)
<!--ID: 1726155954291-->

##### Wireless local area networks (WLAN)

Wireless local area networks are usually within or around (~100 ft) of a building.
<!--ID: 1726155954296-->

##### Wide-area cellular access networks

Wide-area cellular access networks are provided by mobile, cellular network operator. It comprises a mix of wired and wireless link technologies, connecting a mix of switches and routers
<!--ID: 1726155954300-->

#### Enterprise networks

**Enterprise networks** are usually operated by companies, universities, etc.
<!--ID: 1729602614700-->

### Network core

The **network core** is a mesh of interconnected routers, a so-called "networks of networks." The network core has two key functions: **forwarding** and **routing**.
<!--ID: 1726155954303-->

#### Forwarding

**Forwarding** is a **local** action: it moves arriving packets from the router's input link to an appropriate router output link.
<!--ID: 1729602614704-->

#### Routing

**Routing** is a **global** action: it determines source-destination paths taken by packet routing algorithms.
<!--ID: 1729602614709-->

### Packet switching

**Packet switching** refers to the transmission of packets over a communication link at a rate equal to the full transmission rate of the link.
<!--ID: 1729602614712-->

#### Packet transmission delay

**Packet transmission delay** refers to the time needed to fully transmit an $L$-bit packet into a link. Given a transmission rate $R$, the packet transmission delay is calculated as follows:

$$
\frac{L}{R}
$$

This may occur from four sources: **processing**, **queueing**, **transmission**, and **propagation**.
<!--ID: 1729602614715-->

#### Store-and-forward transmission

**Store-and-forward transmission** means that each packet switch must receive an **entire** packet before it can begin to transmit it to the outbound link.
<!--ID: 1729602614718-->

#### Packet loss

Each packet switch has multiple links incident on it, which each has an **output queue**. An arriving packet must wait here if the packet switch is busy with another packet. If this queue is full, packets are dropped. This is known as **packet loss**.
<!--ID: 1729602614720-->

### Circuit switching

Where packet switching allows for use of communication links on-demand (and thus may require queues), **circuit switching** reserves the resources needed along the link for the duration of the communication session. It is commonly used in traditional telephone networks.

> As a simple analogy, consider two restaurants, one that requires reservations and another that neither requires reservations nor accepts them. For the restaurant that requires reservations (**circuit switching**), we have to go through the hassle of calling before we leave home. But when we arrive at the restaurant we can, in principle, immediately be seated and order our meal. For the restaurant that does not require reservations (**packet switching**), we don’t need to bother to reserve a table. But when we arrive at the restaurant, we may have to wait for a table before we can be seated.
<!--ID: 1729602614723-->

#### Frequency division multiplexing (FDM)

![[fdm.png]]

In **frequency division multiplexing (FDM)**, each call is allocated its own **frequency band** over which it can transmit at the maximum rate of that narrow band.
<!--ID: 1729602614726-->

#### Time division multiplexing (TDM)

![[tdm.png]]

In **time division multiplexing (TDM)**, each call is allocated periodic **timeslots** during which (and **only** during which) it can transmit at the maximum rate of the whole frequency band.
<!--ID: 1729602614728-->

## Performance
<!--ID: 1729602614731-->

### Throughput

**Throughput** is the rate at which bits are being sent from sender to receiver. Measuring of throughput may be **instantaneous** or an **average**.
<!--ID: 1729602614733-->
