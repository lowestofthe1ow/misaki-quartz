Manage and control I/O operations and devices - What is the main role of the OS?
Device driver - Kernel modules tailored for a device but presents a uniform interface to the I/O subsystem, allowing for new devices to be added without rewriting the entire OS
Ports - This refers to a connection point to a computer.
Bus - This refers to a shared communication pathway.
Controllers - Refers to an electronic circuit that operates a port, bus, or device
Host controller - Refers to a controller on the computer's side
Device controller - Refers to a controller built into a device
Memory-Mapped I/O - This refers to a concept where the CPU communicates with a controller by reading and writing to memory addresses mapped to controller registers.
Polling - Refers to a concept where the CPU repeatedly checks a device's status register until the device is ready

Interrupts - Refers to a concept where the device controller sends a signal to the CPU when service is needed. The CPU runs a handler and then resumes.
Direct Memory Access - Controller transfers data between device and memory without CPU intervention for large transfers.

Block Devices - Access convention where device is accessed in fixed-size blocks with random access.
Character Devices - Access convention where device is accessed as a stream of bytes.
Network Devices - Access convention where device is accessed through interfaces like sockets.
Memory-Mapped Files - Access convention where file is treated as an array of bytes in main memory.
Clocks and Timers - Access convention where the OS provides services to get the current time, elapsed time, and set timers to trigger operations at a set time.

Blocking I/O - Process issues read() or write(), then waits and is blocked until I/O is done.
A single-threaded program would need to wait for each I/O operation to finish sequentially - Why might blocking I/O be inefficient in a single-threaded environment?

Non-blocking I/O - System call returns a status code immediately, checks status of I/O using a polling loop to see if it is finished.
Periodically check the status of the I/O operation, e.g. through a polling loop - How would a program know when a non-blocking I/O operation has finished?

Asynchronous I/O - A more advanced form of non-blocking I/O where the application issues a an I/O request, then continues to work. The OS notifies the application once the I/O operation is completed.

Kernel I/O subsystem - A component of the kernel that provides numerous services to manage and coordinate I/O
I/O Scheduling - Service provided by the kernel I/O subsystem that orders I/O requests to optimize performance.
Buffering - Service provided by the kernel I/O subsystem that stores data during transfer to manage speed mismatch and different data sizes.
Caching - Service provided by the kernel I/O subsystem that keeps copies of frequently used data in fast memory.
Spooling - Service provided by the kernel I/O subsystem that buffers output for devices that cannot accept interleaved data streams.
Simultaneous Peripheral Operation OnLine - Spooling can also be referred to as:
Device Reservation - Service provided by the kernel I/O subsystem that provides exclusive access to devices.
Error Handling - Service provided by the kernel I/O subsystem that manages and recovers from device failures.

Protection - The I/O subsystem provides this as all I/O instructions are privileged instructions; user programs use system calls which the OS then validates and performs.
Kernel Data Structures - Refers to structures used by the I/O subsystem to track I/O component states using device-status tables and open-file tables.

Process calls read() - What is the first step in the life cycle of a read request?
Kernel I/O subsystem checks buffer cache - In the life cycle of a read request, what comes happens after a process calls read()?
If physical I/O needed, process moved to wait queue - In the life cycle of a read request, what happens once the kernel I/O subsystem has checked the buffer cache?
I/O subsystem requests device driver - In the life cycle of a read request, what happens after a process is moved to the wait queue?
Device driver issues commands to controller - In the life cycle of a read request, what happens after the I/O subsystem successfully requests a device driver?
DMA controller transfers data and raises an interrupt - In the life cycle of a read request, what happens after the device driver instructs the device controller?
Interrupt handler signals the device driver - In the life cycle of a read request, what happens after the DMA controller raises an interrupt?
Device driver signals the kernel, moving the process back to ready queue - In the life cycle of a read request, what happens after an interrupt handler signals the device driver?
Process is scheduled by the CPU and resumes - In the life cycle of a read request, what happens after the process is moved back to the ready queue?

Device Naming - Refers to when the OS maps logical file names to physical device controllers using lookup tables, allows new devices to be added without recompiling the kernel.

STREAMS - A UNIX mechanism that provides a full-duplex pipeline between the stream head and driver end, allowing dynamic assembly of driver and protocol modules.