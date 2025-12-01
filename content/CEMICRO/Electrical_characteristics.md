## Microprocessor bus

- 3-bus architectures:
	- Control
	- Data
	- Address
- A bus is a set of lines used to transport data between a transmitter and a receiver
	- Usually: 16 address lines
	- Properly designed system buses must consider:
		- Noise immunity
		- AC and DC loading
		- Reflection problems
			- "occur when an electrical signal, traveling along a transmission line, encounters an impedance mismatch, causing a portion of the signal to *be reflected back towards the source* instead of reaching the intended receiver"
		- Crosstalk
			- Unwanted transfer of signals between communication channels

### Noise immunity

- Logic 1 must be received as a logic 1 ($V_\text{ih} \to V_\text{oh}$), and logic 0 must be received as a logic 0 ($V_\text{il} \to V_\text{ol}$)
	- **Minimum requirements**: $V_\text{oh} > V_\text{ih}$ and $V_\text{ol} < V_\text{il}$
		- Anything in excess of this requirement is known as **noise immunity**
		- The better the noise margins, the more immune the signal is to noise
		- The faster the chip, the higher the frequency at which it can be operated
			- IC with identical functions logically differ in electrical characteristics
			- The problem with producing faster chips is that such chips **also require more power**

#### Logic level specifications

- Voh - Output high voltage min
- Vol - Output low voltage max
- Vil - Input low voltage max
- Vih - Input high voltage min
- Iil - Max low input current
- Iih - Max high input current
- Ioh - Max high output current
- Iol - Max low output current

![[logic_levels.png]]

**Notes**:
- TTL is designed to handle 10 devices (notice 16mA vs -1.6mA)

**Example problem.** Assume that a 7400 TTL gate is driving a bus line with a 74LS04 receiver. Calculate the worst-case noise immunity for the bus.

![[noise_immunity.png]]

### Bus loading

- Each receiver added to the bus will require:
	- An additional amount of source current in the high state
		- Assume the input line is hanging in the "middle" between the two logic levels. We **provide** current to pull the input line **upwards** (for a logic 1)
	- An additional amount of sink current into the transmitter in the low state
		- We **sink** current down to ground to pull the input line **down** (for a logic 0).
	- 47 min

![[source_sink.png]]

#### Logic gate internals

![[logic_gate_internals.png]]

**Notes**:
- At the start where $X$ and $Y$ are not receiving inputs, they are stable at a certain voltage level due to the bias applied ($V_\text{CC}$)

**Example problem.**

![[bus_loading.png]]

**Example problem.** (Harder)

![[mosfets.png]]

**Notes**:

- CD40XX refers to CMOS (MOSFETs) family
	- 9V battery is an ideal power source for the CD40XX
	- CMOS produces devices that are extremely low-powered for their capability
- If CMOS is statically producing a logic level (not switching), the amount of power that it takes is **practically zero** (complementary). It will only take in power when it is actually switching (the faster it switches, the more power it takes in).
	- When it switches, it suddenly demands current.
	- Switching is very fast, so the average current demand is still very low.
	- **Most modern devices use CMOS over something like TTL**
- **Theoretically**, you should be able to drive 400 receivers (see image). However, we also need to check the input voltage requirement.
	- The output high of the TTL cannot reach the minimum input high of the CMOS. In this case, the CMOS will **always** see the input as a logic 0.
	- The TTL and the CMOS are **incompatible**.
	- There are specialized interface chips to allow driving CMOS with a TTL, referred to as level shifters.
		- Allows for the interfacing of various logical voltage level families
	- Other solution (if not switching at a very high frequency): **Use a pull-up resistor**

![[pull_up_resistor.png]]

Pull-up resistors are probably good for a couple hundred kHz

May not necessarily be the best option








**Note**:

- A logic gate will have a capacitive input and a capacitance load output limit
- A large capacitance load will distort signal

Slower rise time due to resistive load
Not ideal for high-speed CMOS

![[TTL_CMOS_capacitive.png]]

**Note:** This is wrong lol

## Reflection

A receiver is needed to **absorb** all energy pulses, otherwise it getss reflected back

## Crosstalk

- Signals transferring to adjacent wires

## Bus buffering

- A buffer 

## Hysteresis

- Dual-switching