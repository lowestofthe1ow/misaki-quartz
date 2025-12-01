## Type 2 bus

- Many transmitters but only one receiver
- Cannot be implemented with standard TTL gates
	- Problem: **bus contention** --- TTL gates outputting conflicting different signals to the same receiver
	- Excessive current flow may damage the transmitter
	- Solution: Use tri-state gates for the transmitter
		- Only one transmitter should be active at a time, others remain in high-impedance
		- Extra logic control is required to ensure that only a single transmitter is active
		- Workable but can be more complex
	- Alt solution: Use open collector gates
		- Transmitter must have open collector stages, therefore logic low cannot conflict
		- Requires a pull-up resistor for logic high

![[Pasted image 20250923080122.png]]

- WMFC - "Wait memory function complete"
	- A signal coming from the memory system --- "data is ready"

![[Pasted image 20250923081051.png]]

Note: Example above for TTL includes noise margins (0.4V)

![[Pasted image 20250923082505.png]]

- 1k resistor sits in the middle

## Type 3 bus

- Many transmitters and many receivers --- bidirectional bus

![[Pasted image 20250923083737.png]]

- Memory chip receives a control signal that tells it to latch the data bit, which it obtained from the CPU outputting to the bus