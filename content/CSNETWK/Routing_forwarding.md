---
target-deck: CSNETWK::Routing and forwarding
tags: [CSNETWK]
title: Routing and forwarding
---

## Network (IP) layer

The **network (IP) layer** supervises host-to-host packet delivery. This layer is between the transport layer, which works process-to-process, and the data link layer, which works node-to-node.

The **sender** encapsulates transport-layer segments into datagrams and passes them into the link layer. The **receiver** delivers segments to the transport layer.
<!--ID: 1733471924403-->

### Routers

A **router** is a computer (with its own CPU, OS, and memory), that examines **header** fields in all IP datagrams passing through it. It is responsible for **moving** datagrams from input ports to output ports to transfer datagrams along end-end path.
<!--ID: 1733471924406-->

## Routing and forwarding

**Routing and forwarding** are the two key network-layer functions.
<!--ID: 1733471924409-->

### Forwarding

**Forwarding** moves packets from a router's input link to appropriate router output link. This (router-local) process occurs on the **data plane**.
<!--ID: 1733471924411-->

#### Data plane

The **data plane** of the network layer performs a **local**, **per-router** function. It determines how a datagram arriving on the input port is **forwarded** to the output port.
<!--ID: 1733471924414-->

### Routing

**Routing** determines the path taken by packets from a source to a destination. This (network-wide) process occurs on the **control plane**.
<!--ID: 1733471924413-->

#### Control plane

The **control plane** of the network layer provides **network-wide** logic that determines how datagrams are routed among routers along end-end paths from a source host to a destination host.
<!--ID: 1733471924416-->

## Internet Protocol (IP)

The **Internet Protocol (IP)** is a **connectionless**, **best-effort delivery**, and **media-independent** protocol that operates on the network layer.
<!--ID: 1733471924420-->

<!--
> Connectionless protocol
> Best Effort Delivery protocol
> Media Independent
> IPv4 Datagram format
> Addressing
> DHCP
> ICMP
> NAT
> IPv6
-->

### Connectionless

IP is a **connectionless** protocol because no dedicated end-to end connection is created before data is sent. Senders do not know whether or not the destination is present, reachable or functional before sending packets.
<!--ID: 1733501005312-->

### Best-effort delivery

IP is a **best-effort delivery** protocol. It is considered **unreliable** because it does not guarantee that all packets that are sent will be received.
<!--ID: 1733501005319-->

### Media independent

IP is a **media independent** protocol because it operates independently from the media that carries the data.
<!--ID: 1733501005321-->

# IP fragmentation

Network links have a **maximum transfer size** (MTU), which is the largest possible link-level frame (different link types have different MTUs). A large IP datagram is divided within the net (becomes several smaller datagrams) and is only reassembled later at the final destination. This is known as **IP fragmentation**.
<!--ID: 1733471924422-->

## Datagram

The Internet's network-layer packet is referred to as a **datagram**.
<!--ID: 1733471924426-->

### Version number

The four **version number** bits specify the IP protocol version of the datagram, which allows the router to interpret the remainder of the datagram.
<!--ID: 1733501005323-->

### Header length

The **header length** bits specify the length of the header, as the IPv4 datagram header can contain a variable number of options.
<!--ID: 1733501005325-->

### Type of service (TOS)

The **type of service (TOS)** bits allows different types of IP datagrams to be distinguished from each other.
<!--ID: 1733501005327-->

### Datagram length

The **datagram length** bits specify the length of the entire IP datagram (the header plus the data) in bytes.
<!--ID: 1733501005329-->

### Fragmentation/reassembly

The **fragmentation/reassembly** flags (bits) are used when a large datagram is broken into several smaller datagrams which are then forwarded to the destination.

>[!warning] IPv6 does **not** support fragmentation.
<!--ID: 1733501005331-->

### Time-to-live (TTL)

The **time-to-live (TTL)** field ensures that the datagram does not circulate forever (due to a routing loop, for instance) in the network. **This field is decremented at each router**.
<!--ID: 1733501005333-->

### Protocol

The **protocol** field is used only when an IP datagram reaches its final destination. It specifies the specific **transport-layer** protocol to which the data portion of the IP datagram should be passed (e.g., TCP or UDP).
<!--ID: 1733501005335-->

### Header checksum

The **header checksum** field helps a router detect bit errors in an IP datagram.
<!--ID: 1733501005337-->

### Source and destination IP address

The **source and destination IP address** fields contain information about the sender and receivers' addresses.
<!--ID: 1733501005339-->

### Options

The **options** fields, although optional, allow an IP header to be extended. The existence of this field makes it impossible to determine beforehand where the data field will begin.
<!--ID: 1733501005342-->

### Data (payload)

The **data (payload)** field, in most circumstances, contains the transport-layer segment (whether TCP or UDP) to be delivered.

>[!info] This field can also carry ICMP messages.
<!--ID: 1733501005344-->

## IPv4 addresses

**IPv4 addresses** are expressed in **32** binary bits divided into four hierarchical **8-bit** octets composed of a network portion and a host portion. This identifier is associated with each host or router interface (the connection between host/router and physical link).

```
192     .168     .10      .79
11000000.10101000.00001010.01001111
└┬───────────────────────┘ └┬─────┘
Network portion            Host portion
```

>[!info] **All** devices on the same network must have an **identical** network portion.

>[!info] Routers usually have multiple interfaces, while hosts typically have one or two.
<!--ID: 1733471924424-->

## Limitations of IPv4

The following are the **limitations of IPv4**:

- IP address depletion
- Internet routing table expansion
- Lack of end-to-end connectivity
<!--ID: 1733471924430-->

## Public and private IPv4 addresses

- Private Address Blocks
- `10.0.0.0/8` or `10.0.0.0` to `10.255.255.255`
- `172.16.0.0/12` or `172.16.0.0` to `172.31.255.255` `192.168.0.0/16`
- `192.168.0.0` to `192.168.255.255`
<!--ID: 1733471924432-->

## IPv4 address classes

**IPv4 address classes** are a deprecated method of dividing IP addresses based on the number of bits used in the network and host addresses.

| Class | First octet address range         |
| ----- | --------------------------------- |
| A     | 1 to 126 (0 and 127 are reserved) |
| B     | 128 to 191                        |
| C     | 192 to 223                        |
| D     | 224 to 239                        |
| E     | 240 to 254 (255 is reserved)      |
<!--ID: 1733471924433-->

### Class A

**IPv4 class A** can have a first octet value of 1 to 126. Its default subnet mask is `255.0.0.0` and the first bit of its first octet will **always** be `0`.
<!--ID: 1733501005346-->

### Class B

**IPv4 class B** can have a first octet value of 128 to 191. Its default subnet mask is `255.255.0.0` and the first two bits of its first octet will **always** be `10`.
<!--ID: 1733501005348-->

### Class C

**IPv4 class C** can have a first octet value of 192 to 223. Its default subnet mask is `255.255.255.0` and the first three bits of its first octet will **always** be `110`.
<!--ID: 1733501005350-->

### Class D

**IPv4 class D** can have a first octet value of 224 to 239. The first four bits of its first octet will **always** be `1110`.
<!--ID: 1733501005352-->

### Class E

**IPv4 class E** can have a first octet value of 240 to 254. The first four bits of its first octet will **always** be `1111`.
<!--ID: 1733501005354-->

## Subnet mask

The **subnet mask** identifies the network and host portions of the IPv4 address. The subnet mask may be expressed in the same dot-decimal notation as the IP address. Consider the following:

```
255     .255     .255     .0
11111111.11111111.11111111.00000000
└┬───────────────────────┘ └┬─────┘
Network portion            Host portion
```
<!--ID: 1733471924435-->

### Subnets

**Subnets** are device interfaces that can physically reach each other without passing through an intervening router. The **subnet** part (or the high order bits) for the addresses of devices in the same network are the same; the **host part** (remaining low-order bits) are different.
<!--ID: 1733471924438-->

### Network address

Host portion is all 0s (`000000000`)
<!--ID: 1733471924441-->

### First host address

Host portion is all 0s and ends with a 1 (`00000001`)
<!--ID: 1733471924443-->

### Last host address

Host portion is all 1s and ends with a 0 (`11111110`)
<!--ID: 1733471924444-->

### Broadcast address

Host portion is all 1s (`11111111`)
<!--ID: 1733471924452-->

## Classless Interdomain Routing (CIDR)

**Classless Interdomain Routing (CIDR)** is the Internet's address assignment strategy that assigns a subnet (network) portion of arbitrary length. It is a shorthand method of expressing the subnet mask by denoting the **number of bits** allocated for the subnet portion of the address (prefix length). For example, the subnet mask `255.255.255.0` is equivalent to `/24`.

The IP address is then formatted as `a.b.c.d/x`.
<!--ID: 1733471924454-->

## Subnetting or subnetworking

The process of obtaining additional bits from the left most or the most significant bits of the host portion of the network in order to divide the network into smaller subnetworks is known as **subnetting or subnetworking**. This is used to conserve the number of IP addresses available and decrease the unused IP Addresses of networks with few hosts in relation to the IP address range
<!--ID: 1733471924459-->

### Fixed-length subnet masking

Refers to strategy where the subnet portion of the addresses within your infrastructure is of the same size.
<!--ID: 1733471924461-->

## IPv4 Communication

**IPv4 communication** can be **unicast**, **broadcast**, or **multicast**.
<!--ID: 1733501005356-->

### Unicast

One-to-one communication
<!--ID: 1733471924463-->

### Broadcast

One-to-all communication
<!--ID: 1733471924465-->

### Multicast

One-to-select group communication
<!--ID: 1733471924468-->

# Dynamic Host Configuration Protocol (DHCP)

allow host to dynamically obtain its IP address from network server when it joins network, can also renew its lease on address in use, allows reuse of address(only hold addresss while connected/"on") support for mobile users who want to join network (more shortly)
<!--ID: 1733471924471-->

# Network Address Translation (NAT)

is a process that enables one, unique IP address to represent an entire group of computers. In network address translation, a network device, often a router or NAT firewall, assigns a computer or computers inside a private network a public address.
<!--ID: 1733471924473-->

# Internet Control Message Protocol

is the messaging protocol used by hosts and routers to communicate network-level information like error report, echo request/reply (used by ping)

Messages common to both include:

Host Confirmation

Destination or Service Unreachable

Time exceeded

Route redirection
<!--ID: 1733471924475-->

# IPv6

has a 128-bit address space, 340 undecillion address (10^36) solves limitations with IPv4

Every 4 bits is represented by a single hexadecimal digit
<!--ID: 1733471924477-->

## IPv6 Compression/Reduction

Omitting leading zeros and replacing consecutive groups of zeros with ::.

    NOTE: only one :: can be used because using it multiple times would create ambiguity, making it impossible for the system to determine where the zeros start and end.
<!--ID: 1733471924479-->
<!--Part 2-->

# Types of Routing

Static Routing

Dynamic Routing
<!--ID: 1733471924485-->

## Static Routing

Manual configuration of network routers with all the information necessary for successful packet forwardingRouting tables are constructed per router.

Routes to network destinations are unchangeable. Useful for environments where network traffic is predicatble

Network design is simple. Routing to and from stub network

**Pros**

> No extra processing and added resources

    No extra bandwidth requirement caused by the transmission of excessive packets for the routing table update process
    Extra security by manually admitting or rejecting routing to certain networks

**Cons**

> Network administrators need to know the complete network topology very well in order to configure routes correctly.
> Topology changes need manual adjustment to all routers something which is very time consuming.
> Configuration is error-prone, especially in large networks.
<!--ID: 1733471924488-->

## Static route configuration

Network Address of destination Remote Network

Subnet Mask of destination remote network

IP address of the next hop router OR exit interface
<!--ID: 1733471924490-->

# Stub Network

Network accessed by a single route and the router has only one neighbor
<!--ID: 1733471924492-->

# Types of static routes

Standard

Default (Gateway of Last Resort)
<!--ID: 1733471924495-->

## Standard (Static Route)

Used when connecting to a specific remote network. Mainly used for conecting stub networks but can still be used to any network
<!--ID: 1733471924497-->

## Default (Gateway of Last Resort)

Routes that matches all packets

Identifies the gateway IP address to which the router sends all IP packets that it does not have a learned or static route

o.o.o.o for destination ip address

0.0.0.0 for subnet mask

Used when: No other routes in the routing table match the packet destination of IP address

A router has only one other router to which it is connected
<!--ID: 1733471924500-->

## Dynamic Routing

Routers continuously exchange network status updates with each other

Routing updates are sent by routing protocols
<!--ID: 1733471924502-->

## Routing protocols

a set of processes algorithms and messages used to exchange routing information
<!--ID: 1733471924505-->

## Purpose of Dynamic Routing Protocols

Discovery of remote networks

Maintaining up-to-date routing information

Choosing the best path to destination networks

Ability to find a new best path if the current path is no longer available
<!--ID: 1733471924507-->

## Roles of Dynamic Routing Protocols

Allow routers to dynamically share information about remote

networks and automatically add this information to their own routing

tables

Routers exchange routing information when there is a topology change

Determine the best path, or route, to each network
<!--ID: 1733471924509-->

## Types of Dynamic Routing Protocols

Distance Vector

- Routing Information Protocol (RIP)
- Interior Gateway Protocol (IGRP)

Link-State

- Open Shortest Path (OSPF)
- Intermediate System to Intermediate System (IS-IS)
<!--ID: 1733471924511-->

## Distance Vector Routing Protocols

A router using this protocol does not have the knowledge of the entire

path to a destination network nor an actual map of the network

topology

These protocols use routers as sign posts along the path to the final

destination

The only information a router knows about a remote network is the

distance or metric to reach that network and which path or interface

to use to get there

Neighbors are routers that share a link and are configured to use

the same routing protocol
<!--ID: 1733471924513-->

### Distance (DVR)

Identifies how far is it to the destination network and is based on a metric such as the hop count, cost bandwidth, delay and more
<!--ID: 1733471924515-->

### Vector

    Specficies the direction of the next-hop router or exit interface to reach the destination
<!--ID: 1733471924518-->

## Link-State Routing Protocol

A router configured with a link-state routing protocol can create a complete view or topology of the network by gathering

information from all of the other routers

Link-state routers use the link-state information to create a

topology map and to select the best path to all destination

networks

Also known as shortest path first protocols and are built around

Dijkstra's shortest path first (SPF) algorithm.
<!--ID: 1733471924520-->

### Metric

is a measurable value that is assigned by the routing

protocol to different routes based on the usefulness of that

route.
<!--ID: 1733471924522-->

# Routing Information Protocol

RIPv1

Routing updates are broadcasted (255.255.255.255) every 30 seconds.

RIPv2

Forwards updates to multicast address 224.0.0.9, instead of 255.255.255.255.

Supports an authentication mechanism to secure routing table updates between neighbors
<!--ID: 1733471924524-->
