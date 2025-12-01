---
target-deck: CSNETWK::Local area networks
tags: [CSNETWK]
title: Local area networks
draft: true
---

# Link layer

has responsibility of transferring packet from one node to physically adjacent node over a link

In each-and-every host, implemented in, network interface card, (NIC) or on a chip, Attaches into host’s, system buses, Combination of hardware,software, firmware
<!--ID: 1733471924285-->

# Frame

Layer 2 packet
<!--ID: 1733471924290-->

# Framing

Encapsulate packet into frame, adding header, trailer, Channel access if shared, medium, “MAC” addresses in frame, headers identify source, destination

> This is done in the sending side
<!--ID: 1733471924292-->

# MAC Address (Media Access Control)

is a 12-digit, 48-bit number that uniquely identifies a hardware adapter (i.e., an Ethernet or wireless card). also used “locally” to get frame from one interface to another physically connected interface (same subnet, in IP-addressing sense)
<!--ID: 1733471924294-->

# Address Resoultion Protocol (ARP)

is a protocol or procedure that connects an ever-changing Internet Protocol (IP) address to a fixed physical machine address, also known as a media access control (MAC) address, in a local-area network (LAN) and TTL, time after which address mapping will be forgotten (typically 20 min)
<!--ID: 1733471924296-->

# Ethernet

“Dominant” wired LAN technology:

First widely used LAN technology

Simpler, cheap

Kept up with speed race: 10 Mbps – 400 Gbps

Single chip, multiple speeds (e.g., Broadcom BCM5761)
<!--ID: 1733471924298-->

# Bus (Ethernet)

Type of ethernet topology that is popular through mid 90s, All nodes in same collision domain (can collide with each other)
<!--ID: 1733471924300-->

# Switched (Ethernet)

Type of ethernet topology that is active link-layer 2 switch in center, Each “spoke” runs a (separate) Ethernet protocol (nodes do not collide with each other)
<!--ID: 1733471924302-->

# Ethernet Frame Structure

preamble | destination address | source address | type | data | CRC
<!--ID: 1733471924304-->

# Preamble (Ethernet)

▪ Used to synchronize receiver, sender clock rates

▪ 7 bytes of 10101010 followed by one byte of 10101011
<!--ID: 1733471924306-->

# CRC (Ethernet)

used to determine if error has occured, in which case frame will be dropped at receiver
<!--ID: 1733471924308-->

# Ethernet

Connectionless, No handshaking between sending and receiving NICs

Unreliable:

    Receiving NIC doesn’t send ACKs to sending NIC
    Data in dropped frames recovered only if initial sender uses higher layer rdt (e.g.,TCP), otherwise dropped data lost
    802.3 standard

Many different Ethernet standards

Common MAC protocol and frame format

Different speeds: 2 Mbps, 10 Mbps, 100 Mbps, 1Gbps, 10 Gbps, 40 Gbps

Different physical layer media: fiber, cable

# Switch

Store and forward Ethernet frames, examines incoming frame’s MAC address, selectively forward frame to one-or-more outgoing links when frame is to be forwarded on segment

Transparent

Plug and play self learning

Switch learns which hosts can be reached through which interfaces, When a frame is received, switch “learns” the location of sender: incoming LAN segment, Records sender/location pair in switch table

Hosts have dedicated, direct connection to switch buffer packets.

Ethernet protocol used on each incoming link so no collisions and each link is its own collision domain.
<!--ID: 1733471924311-->

# Switch Forwarding Table

Each switch has a switch forwarding table with each entry containing the following:

- MAC address of host
- Interface to reach host
- Time stamp
<!--ID: 1733471924313-->

# Interconnecting Switches

Self-learning switches can be connected tgether
<!--ID: 1733471924315-->

# Small Institutional Network

Place image here
<!--ID: 1733471924317-->
