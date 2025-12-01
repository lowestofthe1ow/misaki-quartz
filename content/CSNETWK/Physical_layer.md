---
target-deck: CSNETWK::Physical layer
tags: [CSNETWK]
title: Physical layer
---

# Physical Layer

Provides the means to transport the bits that make up a data link layer frame across the network media.

This layer accepts a complete frame from the data link layer and encodes it as a series of signals that are transmitted onto the local media.

The encoded bits that comprise a frame are received by either an end device (host) or an intermediate device (router/switch).
<!--ID: 1733471924322-->

# Network Interface Cards

connects a device to a network.Used for a wired connection. Wireless Local Area Network (WLAN) NICs are used for wireless connections.
<!--ID: 1733471924324-->

# Physical Layer Standards

- International Organization for Standardization (ISO)
- Telecommunications Industry Association/Electronic Industries Association (TIA/EIA)
- International Telecommunication Union (ITU)
- American National Standards Institute (ANSI)
- Institute of Electrical and Electronics Engineers (IEEE)
<!--ID: 1733471924325-->

# Forms of Network Media

- Copper Cable - electric pulses
- Fiber optic cable - light
- Wireless - Microwave transmission
<!--ID: 1733471924328-->

# Encoding

Method of converting a stream of data bits into a predefined "code”.

Codes are groupings of bits used to provide a predictable pattern that can be recognized by both the sender and the received
<!--ID: 1733471924330-->

# Signaling

Method of representing the bits.

    The physical layer standards must define what type of signal represents a "1" and what type of signal represents a "0".
<!--ID: 1733471924332-->

# Physical components

Electronic hardware devices, media, and other connectors that transmit and carry the signals to represent the bits.

- Network adapters (NICs)
- interfaces and connectors
- cable materials, and cable designs
<!--ID: 1733471924334-->

# Bandwidth

The capacity of a medium to carry data

Typically measured in kilobits per second or megabits per second

The practical bandwidth of a network is determined by a

combination of factors:

- The properties of the physical media
- The technologies chosen for signaling and detecting network signals
<!--ID: 1733471924336-->

# Throughput

Measure of the transfer of bits across the media over a given period of time

Due to a number of factors, throughput usually does not match

the specified bandwidth in physical layer implementations. Many

factors influence throughput including:

- The amount of traffic
- The type of traffic
- The delay created by the number of network devices encountered between source and destination
<!--ID: 1733471924339-->

# Copper Media

Transmitted on copper cables as

**electrical pulses**.

All copper media must follow strict

distance limitations.
<!--ID: 1733471924341-->

## Attenuation

the longer the signal travels, the more it deteriorates.
<!--ID: 1733471924343-->

## Electromagnetic interference (EMI) or Radio frequency interference (RFI)

distorts and corrupts the data signals being carried by copper media.

    To counter copper cables wrapped in shielding.
<!--ID: 1733471924346-->

## Crosstalk

disturbance caused by the electric or magnetic fields of a signal on one wire to the signal in an adjacent wire.

    To cancel crosstalk opposing circuit wire pairs twisted

together

To cancel crosstalk opposing circuit wire pairs twisted

together.
<!--ID: 1733471924348-->

# Fiber Optic Cables

Transmits data over longer distances and at higher bandwidths. Transmit signals with less attenuation and is _completely immune to EMI and RFI_. Bits are encoded on the fiber as **light pulses**.

is now being used in four types of industry:

- Enterprise Networks
- Fiber-to-the-Home (FTTH)
- Long-Haul Networks
- Submarine Cable Networks
<!--ID: 1733471924350-->

# Wireless Media

Wireless media carry electromagnetic signals that

represent the binary digits of data

communications using radio or microwave

frequencies.

    **Wireless areas of concern:**

    Coverage area: Construction materials used in buildings and structures, and the local terrain, will limit the coverage.

    Interference: Disrupted by such common devices as fluorescent lights, microwave ovens, and other wireless
    communications.

    Security: Devices and users, not authorized for access to the
    network, can gain access to the transmission.

    Shared medium: Only one device can send or receive at a time and the wireless medium is shared amongst all wireless users.
<!--ID: 1733471924351-->

# Elements of a Wireless Network

- Wireless hosts
- Base station
- Wireless link
- Infrastructure mode
- Adhoc mode
<!--ID: 1733471924353-->

# Wireless hosts

- Laptop, smartphone, IoT
- run applications
- may be stationary (non-mobile) or mobile
  - wireless does not always mean mobility!
<!--ID: 1733471924355-->

# Base station

typically connected to wired network

- relay - responsible for sending packets
- between wired network and wireless
- host(s) in its “area”
  - e.g., cell towers, 802.11 access points
<!--ID: 1733471924356-->

# Wireless Link

- typically used to connect mobile(s) to base station, also used as backbone link.
- multiple access protocol coordinates link access.
- various transmission rates and distances, frequency bands.
<!--ID: 1733471924358-->

# Infrastructure mode

- base station connects mobiles into wired network
- handoff: mobile changes base station providing connection into wired network
<!--ID: 1733471924361-->

# Ad hoc mode

- no base stations
- nodes can only transmit to other nodes within link coverage
- nodes organize themselves ito a network; route among themselves
<!--ID: 1733471924363-->

# Types of wireless media

- Wi-Fi: Standard IEE 802.11
- Bluetooth: Standard IEEE 802.15
- Cellular Connectivity
<!--ID: 1733471924365-->

# 802.11 Lan Architecture

- wireless host communicates with base station
- base station = access point (AP)
- Basic Service Set (BSS) (aka “cell”) in infrastructure mode contains:
  - wireless hosts
  - access point (AP): base station
  - ad hoc mode: hosts only
<!--ID: 1733471924367-->

# 802.11 Channels Association

Spectrum divided into channels at different frequencies

- AP admin chooses frequency for AP
- interference possible: channel can be same as that chosen by neighboring AP!

Arriving host: must associate with an AP

- scans channels, listening for beacon frames containing AP’s name (SSID) and MAC address
- selects AP to associate with then may perform authentication [Chapter 8] then typically run DHCP to get IP address in AP’s subnet
<!--ID: 1733471924369-->

# 802.11 Scanning

- Passive scanning
- Active scanning
<!--ID: 1733471924372-->

# 802.11 passive scanning

(1) beacon frames sent from APs

(2) association Request frame sent: H1 to selected AP

(3) association Response frame sent from selected AP to H1
<!--ID: 1733471924374-->

# 802.11 Active Scanning

(1) Probe Request frame broadcast from H1

(2) Probe Response frames sent from APs

(3) Association Request frame sent: H1 to selected AP

(4) Association Response frame sent from selected AP to H1
<!--ID: 1733471924376-->

# 802.11 CSMA

sense before transmitting as 802.11 has no collision detection.
<!--ID: 1733471924379-->

# MAC Protocol: CSMA/CA

**802.11 sender**

(1) if sense channel idle for DIFS then transmit entire frame (no CD)

(2) if sense channel busy then start random backoff time timer counts down while channel idle transmit when timer expires if no ACK, increase random backoff interval, repeat 2

**802.11 receiver**

if frame received OK

return ACK after SIFS (ACK needed due to hidden

terminal problem)
<!--ID: 1733471924381-->

# Bluetooth

- Less than 10 m diameter
- Replacement for cables (mouse, keyboard, headphones)
- ad hoc: no infrastructure 2.4-2.5 GHz ISM radio band, up to 3 Mbps
- master controller / clients devices:
  - master polls clients, grants requests for client transmissions

---

TDM, 625 µsec sec. slot

FDM: sender uses 79 frequency channels in known, pseudo-random order slot-to-slot (spread spectrum)

- other devices/equipment not in piconet only interfere in some slots
<!--ID: 1733471924383-->

# Bluetooth Parked Mode

clients can “go to sleep” (park) and later wakeup (to preserve

battery)
<!--ID: 1733471924384-->

# Bluetooth Bootstrapping

nodes self assemble plug and play into piconet
<!--ID: 1733471924386-->

# Mobile 1G

- established the foundation of mobile
- AMPS, NMT, TACS
- Analog Voice but limited capacity and scalabilty
<!--ID: 1733471924388-->

# Mobile 2G

- increased voice capacity, delivering mobile voice services to the massesmore people in more places

- D-AMPS, GSM/GPRS, cdmaOne
- < 0.5 Mbps

- Digital Voice + Simple Data
<!--ID: 1733471924390-->

# Mobile 3G

evolved mobile for data, introducing high-speed internet access for the first time

- CSMA2000/EV-DO
- WCDMA/HSPA+, TD-SCDMA
- 63+ Mbps
- Mobile Broadband
<!--ID: 1733471924392-->

# Mobile 4G LTE

- delivors more data capacity than 3G
- LTE Advanced
- 300+ Mbps
<!--ID: 1733471924394-->

# 4G/5G

the solution for wide-area mobile Internet

widespread deployment/use:

- more mobile-broadband-connected devices than fixed-broadband-connected devices devices (5-1 in 2019)!
- transmission rates up to 100’s Mbps
- technical standards: 3rd Generation Partnership Project (3GPP)
  - wwww.3gpp.org
  - 4G: Long-Term Evolution (LTE) standard
<!--ID: 1733471924396-->

# LTE Protocol Stack

- Packet Data Convergence: header compression, encryption
- Radio Link Control (RLC) Protocol: fragmentation/reassembly, reliable data transfer
- Medium Access: requesting, use of radio transmission slots
<!--ID: 1733471924398-->

# 5G

- goal: 10x increase in peak bitrate, 10x decrease in latency, 100x
  increase in traffic capacity over 4G

- 5G NR (new radio):
  - two frequency bands: FR1 (450 MHz–6 GHz) and FR2 (24 GHz–52 GHz): millimeter wave frequencies
  - not backwards-compatible with 4G
  - MIMO: multiple directional antennae
- millimeter wave frequencies: much higher data rates, but over
  shorter distances - pico-cells: cells diameters: 10-100 m - massive, dense deployment of new base stations required
<!--ID: 1733471924401-->
