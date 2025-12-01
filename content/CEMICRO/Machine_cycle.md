## Machine cycle

- Basic timing unit of a CPU --- a **read** or a **write** cycle
- One instruction can be composed of several machine cycles
- One machine cycle can be composed of several **$T$-states**
	- There is usually a constant number of $T$-states per machine cycle
	- A $T$-state is normally defined as one clock cycle
		- i.e., $T$-states are one-to-one with the CPU clock
	- Indicates how long an instruction will be executed: $$\frac{\text{\# of clock cycles}}{\text{clock frequency}}$$