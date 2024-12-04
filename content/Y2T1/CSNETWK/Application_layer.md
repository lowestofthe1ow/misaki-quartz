---
target-deck: CSNETWK::Application layer
tags: [CSNETWK]
title: Application layer
---

## Client-server model

The **client-server model** comprises a **server** and **clients** that communicate with each other.

<!--ID: 1729608633592-->

### Server

A **server** in the client-server model is an always-on host with a permanent IP address, often found in data centers.

<!--ID: 1729608633601-->

### Client

A **client** in the client-server model may have dynamic IP addresses and do not communicate directly with each other.

<!--ID: 1729608633603-->

## Peer-to-peer architecture

In a **peer-to-peer architecture**, there is **no** always-on server. End systems directly communicate with each other unlike clients, requesting and providing service from and to other peers. Peers are also intermittently connected and have dynamic addresses.

This form of architecture is **self-scalable** as new peers bring new service capacity as well as new service demands.

<!--ID: 1729608633606-->

## Process

A **process** is a program running within a host.

<!--ID: 1729608633609-->

### Client process

A **client process** is a process that **initiates communication**.

<!--ID: 1729608633612-->

### Server process

A **server process** is a process that waits to be contacted.

<!--ID: 1729608633615-->

### Inter-process communication

Within the same host, two processes communicate via **inter-process communication**, as defined by the operating system.

<!--ID: 1729608633617-->

### Messages

Processes in different hosts communicate by exchanging **messages**.

<!--ID: 1729608633619-->

## Sockets

Processes send and receive data to and from its **socket**. Sockets are like doors; the sending process sends the data through this door while relying on transport infrastructure outside the door to deliver the message to the socket of the receiving process.

Two sockets are involved in communication: one on the sender side and another on the receiver side.

<!--ID: 1729608633621-->

### Port number

A process must be identified for it to receive messages. The **IP address** of its host is **not** sufficient for identifying the process as many processes may run on the same host. Instead, a process identifier includes both this IP address and a **port number** associated with the process.

<!--ID: 1729608633623-->

#### 80

Port number **80** is assigned to Web servers (i.e., HTTP)

<!--ID: 1729608633625-->

#### 25

Port number **25** is assigned to mail servers (using the SMTP protocol).

<!--ID: 1729608633627-->

## Hypertext Transfer Protocol (HTTP)

The **Hypertext Transfer Protocol (HTTP)** is a client-server model that uses web addresses (URLs) as a reference to a web server. This protocol allows two types of connections (**persistent** and **non-persistent**) and uses TCP.

<!--ID: 1729608633630-->

### HTTP requests

**HTTP requests** may use one of several methods, such as `GET`, `POST`, `HEAD`, and `PUT`, among others.

```
GET /somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent: Mozilla/5.0
Accept-language: fr
```

<!--ID: 1729608633632-->

### HTTP responses

**HTTP responses** may use one of several codes, such as `200 OK`, `301 Moved Permanently`, `400 Bad Request`, and `404 Not Found`, among others:

```
HTTP/1.1 200 OK
Connection: close
Date: Tue, 18 Aug 2015 15:44:04 GMT
Server: Apache/2.2.3 (CentOS)
Last-Modified: Tue, 18 Aug 2015 15:11:03 GMT
Content-Length: 6821
Content-Type: text/html
(data data data data data ...)
```

<!--ID: 1729608633634-->

## Email application protocols

**Email application protocols** use store-and-forward methods of sending, storing, and retrieving messages, using the Simple Mail Transfer Protocol (**SMTP**) for sending, or either the Post Office Protocol (**POP**) or Internet Message Access Protocol (**IMAP**) for retrieving.
<!--ID: 1729608633636-->

## Domain name system

A **domain name system** is a distributed database implemented in a hierarchy of **name servers**. It is an application-layer protocol that resolves (translates) user-friendly host names to IP addresses.

>[!info] **Load distribution** may occur when a particular host name deploys duplicated web servers.

![[dns.png]]

<!--ID: 1729608633638-->

### DNS root servers

**DNS root servers** are the official contact of **last resort** when other name servers cannot resolve the name. **DNSSEC** provides security (authentication and ensures message integrity).

>[!info] DNS root servers are managed by the Internet Corporation for Assigned Names and Numbers (ICANN).

<!--ID: 1729608633640-->

### Top-level domain (TLD) servers

**Top-level domain (TLD) servers** are responsible for all top-level domains, such as `.com`, `.org`, `.net` (network solutions), `.edu` (educause), `.aero`, `.jobs`, `.museums`, and all top-level country domains such as `.cn`, `.uk`, `.fr`, `.ca`, `.jp`, and `.ph`.
<!--ID: 1729608633642-->

### Authoritative DNS servers

**Authoritative DNS servers** are handled by (and usually owned by) an **organization** providing name mappings for its own hosts.
<!--ID: 1729608633643-->

### Local DNS name servers

**Local DNS name servers** are the first to handle a DNS query from a host, checking its local cache of recent name-to-address translations. If the cache cannot resolve the name, the request is forwarded along the DNS hierarchy.

>[!info] Each ISP has a local DNS name server; they do not strictly belong to any specific layers of the hierarchy.

<!--ID: 1729608633645-->

### Iterated query

In an **iterated query**, when a contacted server cannot resolve a name, it replies with the name of the next server to contact. "*I don't know this name, but ask this server.*"

![[iterated.png]]

<!--ID: 1729608633647-->

### Recursive query

In a **recursive query**, when a contacted server cannot resolve a name, it attempts to contact the next server itself. This may cause heavy loads at the upper levels of the hierarchy. "*I don't know this name, so I'll ask this server.*"

![[recursive.png]]

<!--ID: 1729608633649-->

### DNS Caching

Once any name server learns a mapping, it performs **DNS caching**, storing it in order to immediately return it in response to a query in the future. This improves response time, but the stored entries timeout after some time (**TTL**).

>[!info] If a host changed IP address, it may not be known until all TTLs expire; "best-effort" name-to-address translation is performed.

<!--ID: 1729608633651-->

#### DNS resource records

**DNS resource records** are what is cached by a DNS name server. It includes the **name**, **value**, **type**, and **TTL**.
<!--ID: 1729608633653-->

## Peer-to-peer file distribution

In **peer-to-peer file distribution**, a file is divided into 256KB chunks. Peers in a certain torrent send and receive file chunks.

<!--ID: 1729608633656-->

### Tracker

A **tracker** tracks peers participating in a torrent.

<!--ID: 1729608633659-->

### Torrent

A **torrent** is a group of peers exchanging chunks of a file.

<!--ID: 1729608633661-->

### Peer joining torrent

A **peer joining torrent** initially has no chunks, but will accumulate them over time from other peers. It registers with tracking to get a list of peers from which it will connect to a subset (its "neighbors").

<!--ID: 1729608633664-->
