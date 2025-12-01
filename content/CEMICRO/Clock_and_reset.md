## Clock

- Synchronizes events in the CPU
- Usually a **square wave signal** of a certain frequency
- $T_\text{on}$ specifies duration of logic 1; $T_\text{off}$ specifies duration of logic 0
- Characterized by duty cycle: $$\text{Duty cycle} = \frac{T_\text{on}}{T_\text{on} + T_\text{off}}$$
- As a perfect square wave is impossible, the time to switch from low to high and high to low are called the **rise** and **fall** time, respectively.
	- Measure the slope by taking the $10\%$ and $90\%$ points on the edge (between the levels where the signal settles)

### Clock implementations

- **RC oscillators**
- **Timer circuit**
- **Crystal-based oscillators** 
- The threshold values for logic low and logic high are **dependent** on $V_{CC}$ and are thus **unstable** --- this is **bad**.

#### Crystal-based oscillators

- Usually a quartz crystal that resonates at a frequency standardized by the NTSC
	- 3.579545 MHz (usually rounded to 3.58 MHz)
- Represented as a resonant inductor + capacitor in series
- **Crystal frequencies rarely go over ~20 MHz**
	- It is usually necessary for a CPU to use a lower-frequency input signal as a reference for a much higher clock frequency.

## Reset

- Places the CPU into an **initial state**:
	- Sets the program counter to a fixed initial value
		- For Intel 8086: Sets PC to `0000h`
- Reset is usually **active low**.