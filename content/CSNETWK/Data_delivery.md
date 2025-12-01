---
target-deck: CSNETWK::Data delivery
tags: [CSNETWK]
title: Data delivery
---

> Consider two houses, one on the East Coast and the other on the West Coast, with each house being home to a dozen kids. The kids in the East Coast household are cousins of the kids in the West Coast household. The kids in the two households love to write to each other—each kid writes each cousin every week, with each letter delivered by the traditional postal service in a separate envelope. Thus, each household sends 144 letters to the other household every week.
>
> In each of the households, there is one kid—Ann in the West Coast house and Bill in the East Coast house—responsible for mail collection and mail distribution. Each week Ann visits all her brothers and sisters, collects the mail, and gives the mail to a postal-service mail carrier, who makes daily visits to the house. When letters arrive at the West Coast house, Ann also has the job of distributing the mail to her brothers and sisters. Bill has a similar job on the East Coast.

The above analogy explains how the transport layer relates to the network layer:

- application messages = letters in envelopes
- processes = cousins
- hosts (also called end systems) = houses
- transport-layer protocol = Ann and Bill
- network-layer protocol = postal service

## Transport layer

The transport layer provides the **logical**, rather than physical, communication between application **processes** (unlike the network layer, which provides communication between hosts).
<!--ID: 1729181159855-->

### Sender

On the **sender** host, a transport protocol breaks application messages into segments to pass to the network layer.
<!--ID: 1729656340640-->

### Receiver

On the **receiver** host, a transport protocol reassembles segments into messages to pass to the application layer.
<!--ID: 1729656340661-->

### Multiplexing

At the sender, transport headers are added to handle data coming from multiple sockets. This is known as **multiplexing**.
<!--ID: 1729656340671-->

### Demultiplexing

At the receiver, the transport headers included in the data is used to deliver the segments to the correct socket. This is known as **demultiplexing**.
<!--ID: 1729656340680-->

#### IP packet

When demultiplexing, the host first receives an **IP packet** containing the source and destination IP addresses. Each IP packet carries a transport-layer segment.
<!--ID: 1729656340692-->

#### Transport-layer segment

The **transport-layer segment** encapsulated in an IP packet contains the source and destination port numbers.
<!--ID: 1729656340703-->

#### Connection-oriented demultiplexing

In **connection-oriented demultiplexing**, a given socket is identified by a 4-tuple: the source and destination IP addresses and the source and destination port numbers. All four values are used to direct a given segment into the correct socket.
<!--ID: 1729656340712-->

## Transmission Control Protocol (TCP)

The **Transmission Control Protocol (TCP)** is a transport-layer protocol that:

- is point-to-point
- is reliable and in-order
- is bidirectional (full duplex)
- features cumulative acknowledgments
- is connection-oriented
- is flow-controlled
<!--ID: 1729656340725-->

### Sequence number

TCP views data as an unstructured, but ordered, stream of bytes. This byte stream is divided into **TCP segments**. Suppose that a host wants to send a 500,000-byte stream, divided into segments of width 1,000. Then the first byte of the first segment is numbered **0**, the first byte of the second segment is numbered **1,000**, and so on.

![[tcp_stream.png]]

This **first byte in each segment** is known as the **sequence number** for that segment.
<!--ID: 1729656340736-->

### Acknowledgments

Suppose that a host is waiting to receive a 500,000-byte stream, divided into segments of width 1,000. Suppose also that it has currently received the **first** segment, meaning it has received bytes 0 to 999. Then the first byte of the segment that it is waiting for is numbered **1,000**.

This first byte of the next segment waiting to be received is sent as the **acknowledgment number** ("*I have received bytes 0 to 999, now give me byte 1,000.*").
<!--ID: 1729656340746-->

#### Cumulative acknowledgment

Suppose that a host is waiting to receive a 500,000-byte stream, divided into segments of width 1,000. Suppose also that it has currently received the **first** and **third** segments, meaning it has received bytes 0 to 999 and 2,000 to 2,999. However, it has not received the **second** segment, meaning it does not yet have bytes 1,000 to 1,999.

The host sends an acknowledgment number of **1,000**, meaning receipt of the third segment is not acknowledged until the second segment is received. Once the second segment has been received, it will send an acknowledgment number of **3,000**. This is known as **cumulative acknowledgment**.
<!--ID: 1729656340756-->

### TCP segment structure

![[tcp_segment.png]]
<!--ID: 1729656340768-->

#### Receive window

The **receive window** field in a TCP segment is used for **flow control**, indicating the number of bytes that a receiver is willing to accept.
<!--ID: 1729656340778-->

#### Flag field

The **flag field** in a TCP segment contains the following **bits**: ACK, RST, SYN, FIN, CWR, ECE, PSH, and URG. Of these, the most notable are the ACK, RST, SYN, and FIN bits.
<!--ID: 1729656340789-->

##### ACK

The **ACK** bit signifies that the acknowledgment number carried by the segment is valid.
<!--ID: 1729656340801-->

#### RST, SYN, and FIN

The **RST, SYN, and FIN** bits are used for connection setup and teardown.
<!--ID: 1729656340809-->

### Three-way handshake

Before a TCP data transfer can start, a connection-oriented session must be established. For both establishing and closing a connection, TCP uses a **three-way handshake** to **syn**chronize (hence the SYN bit) both ends of a connection.

![[three_way_handshake.png]]
<!--ID: 1729656340818-->

#### SYN segment

The **SYN segment** is the first segment, sent by the client, involved a three-way handshake, containing the SYN flag.
<!--ID: 1729656340832-->

#### SYNACK segment

The **SYNACK segment** is the second segment, sent by the server, involved in a three-way handshake. This segment contains the SYN flag and an ACK acknowledging the previous segment sent by the client.
<!--ID: 1729656340840-->

#### ACK segment

The **ACK segment** is the third segment, sent by the client, involved in a three-way handshake. This packet **does not** contain the SYN flag but contains an ACK acknowledging the previous segment sent by the server.
<!--ID: 1729656340849-->

### Connection termination

**Connection termination** involves sending segments containing the FIN flag (both client and host must send a segment containing it).
<!--ID: 1729656340860-->

### Flow control

A receiving host might not be able to receive all segments sent to it (which may result in data loss). TCP lets the sender and receiver to negotiate for a mutually acceptable data rate. In the **receive window** field, the receiver notifies the sender how much free buffer space is available. This limits the amount of unacknowledged data, guaranteeing that the buffer will not overflow. This is known as **flow control**.
<!--ID: 1729656340869-->

## User Datagram Protocol (UDP)

The **User Datagram Protocol (UDP)** is a transport-layer protocol that:

- is "no-frills" and "bare-bones"
- is a best-effort service (data may be lost)
- connectionless
- simple and with a small header size.

>[!info] This protocol is often used in streaming apps, DNS servers, and the SNMP.
<!--ID: 1729656340878-->

### UDP segment structure

The **UDP segment structure** only contains its source and destination ports, length, data, and a **checksum**

![[udp_segment.png]]

>[!warning] UDP packets with same destination port number, but different source IP addresses and/or source port numbers will be directed to **same** socket at the receiving host.
<!--ID: 1729656340889-->

#### UDP checksum

The **UDP checksum** is used to verify that there are no errors in the received data. Its value as computed by the receiver must be equal to the value as computed by the sender (which is received by the receiver).
<!--ID: 1729656340899-->
