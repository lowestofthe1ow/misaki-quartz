---
target-deck: CSNETWK::Layered network design
tags: [CSNETWK]
title: Layered network design
---

## Network architecture

Network architecture is a logical structure that defines how network devices and software interact and function

<!--ID: 1728275380260-->

### Interoperability

Interoperability refers to the ability of software and hardware products developed by different vendors to communicate successfully with each other over a network

<!--ID: 1728275380263-->

## Open Systems Interconnect (OSI)

The **Open Systems Interconnect (OSI)** model is a seven-layer network architecture developed by the International Organization of Standardization (ISO) in 1978 that provides a detailed set of standards for describing a network.

This model consists of the following layers: **Application**, **presentation**, **session**, **transport**, **network**, **data link**, and **physical**.

>[!tip] A helpful mnemonic for memorizing the layers:
>**A** **p**enguin **s**aid **t**hat **n**obody **d**rinks **p**epsi.

<!--ID: 1728275380266-->

### Application layer

The **application layer**, or layer 7, of the OSI model consists of protocols that define specific user-oriented applications (e.g., email, file transfers, and terminals). An example of such a protocol would be the **Hypertext Transfer Protocol**, or HTTP.

<!--ID: 1729602614654-->

### Presentation layer

The **presentation layer**, or layer 6, of the OSI model is concerned with syntax and the semantics of data being transmitted. It provides data formats, translations, and code conversions through which messages are encoded in a format that is suitable for transmission.

This layer performs data compression and encryption on messages from the application layer and passes it to the session layer (e.g. **ASCII conversion**).

<!--ID: 1729602614658-->

### Session layer

The **session layer**, or layer 5, of the OSI model provides coordination between communicating processes between nodes. This layer is responsible for **enforcing** the rules of dialog, **synchronizing** the flow of data, and **reestablishing** the connection in the event of a failure.

<!--ID: 1729602614660-->

#### Half-duplex transmission

**Half-duplex transmission** refers to transmission that occurs in one direction at a time.
<!--ID: 1729602614663-->

#### Full-duplex transmission

**Full-duplex transmission** refers to transmission that occurs in both directions simultaneously.
<!--ID: 1729602614667-->

### Transport layer

The **transport layer**, or layer 4, of the OSI model provides error-free delivery of data, partitioning data into smaller packets if necessary. This layer ensures that packets arrive completely and correctly at their destination, e.g. the **Transmission Control Protocol (TCP)**

<!--ID: 1729602614670-->

### Network layer

The **network layer**, or layer 3, of the OSI model provides end-to-end routing or switching and resolves problems in transmitting data between heterogeneous networks, e.g., the **Internet Protocol (IP)**.

<!--ID: 1729602614672-->

### Data link layer

The **data link layer**, or layer 2, of the OSI model is responsible for end-to-end data transfer across a physical link. It provides error detection, framing, and flow control, while resolving problems due to damaged, lost, or duplicate frames (e.g. **Ethernet**).

<!--ID: 1729602614674-->

### Physical layer

The **physical layer**, or layer 1, of the OSI model, is responsible for transmitting raw bits over a link. It is concerned with issues such as the type of wire being used (**hardware**) as it is responsible for translating the bit stream into physical signals (e.g. **Ethernet**, an example shared with the data link layer).

<!--ID: 1729602614677-->

## Transmission Control Protocol/Internet Protocol (TCP/IP) Suite

The **Transmission Control Protocol/Internet Protocol (TCP/IP) suite** is similar to the OSI model, save for the following differences:

- The application, presentation, and session layers are collectively the **application layer**
- The **transport layer** remains as-is
- The network layer is known as the **internet layer**
- The data link and physical layers are collectively the **network interface layer**

>[!info] The TCP/IP suite was never intended to be an international standard.
>It was developed to satisfy the need to interconnect projects by the U.S. Department of Defense.

<!--ID: 1729602614680-->

### Application layer

The **application layer** of the TCP/IP suite is similar to the OSI application layer. It serves as a communicating interface by providing specific application services.

### Transport layer

The **transport layer** of the TCP/IP suite is similar to the OSI transport layer, but is defined by **two protocols**:

- **Transmission Control Protocol** (TCP)
- **User Datagram Protocol** (UDP)

#### Transmission Control Protocol (TCP)

The **Transmission Control Protocol (TCP)** is a **connection-oriented** protocol that provides reliable data transmission via end-to-end error detection and correction. It retransmits any data not received by the destination and guarantees that data is transferred **accurately**, in proper **order**, and **without duplication**.

>[!info] Examples include **telnet**, **file transfer protocol** (FTP), and **simple mail transfer protocol** (SMTP)

<!--ID: 1729602614684-->

#### User Datagram Protocol (UDP)

The **User Datagram Protocol (UDP)** is a **connectionless** protocol that provides an **unreliable** datagram service that does not retransmit any unreceived data nor makes any guarantees about the accuracy of the received data.

>[!info] Examples include the **trivial file transfer protocol** (TFTP) and the **domain name service** (DNS)

<!--ID: 1729602614687-->

### Internet layer

The **Internet layer** of the TCP/IP suite transfers user messages from source host to destination host. It uses the Internet (IP addresses) as a roadmap to locate a host within it, relying on routers or switches. Route selection is based on some metric.

<!--ID: 1729602614689-->

### Network interface layer

The **network interface layer** of the TCP/IP suite connects a host to the local network hardware (**physical medium**). It uses a specific protocol for accessing the physical medium.

<!--ID: 1729602614691-->

## Encapsulation

**Encapsulation** is the packaging of data into a form suitable to be transmitted over the network. Data receives protocol information (headers, trailers, etc.) added to it as it is passed down through the OSI or TCP/IP layers. The generic name is **protocol data unit** (PDU)
<!--ID: 1729602614694-->
