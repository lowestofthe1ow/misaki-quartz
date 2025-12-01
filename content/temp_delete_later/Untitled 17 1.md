Operating system - Software that manages computer hardware and provides a basis for application programs
User view, system view - Operating systems can be examined from two viewpoints:
User view - View of the OS that according to device or the interface being used
Ease of use and performance - (User view) Goal of the operating system for PCs
To run without user intervention - (User view) Goal of the operating system for embedded systems

Kernel - The core of the OS that refers to the program that is running at all times
System programs, application programs - Other than the kernel, there are two other broad types of programs:
System programs - Programs that are associated with the operating system but are not necessarily part of the kernel
Application programs - Programs that include all programs not associated with the operation of the system
Middleware - Refers to a set of software frameworks that provide additional services for application developers

Device controllers and one or more CPUs - A common system bus connects these components and gives them access to shared memory
Device driver - Software included with device controllers that provides the rest of the operating system with a uniform interface to the device

Storage hierarchy - Refers to the organization of storage accessible to the CPU according to speed, cost, and volatility.
Memory closer to the CPU is faster and more expensive - What is the relationship between memory speed and cost and its "distance" from the CPU?
Volatile memory - Memory that requires constant power to hold data
Non-volatile memory - Memory that can retain data even when power is turned off
Main memory - Refers to the volatile memory directly accessible by the CPU; RAM
Secondary storage - Refers to non-volatile storage such as hard-disk drives
Direct memory access (DMA) controller - A controller that transfers data directly between a device and memory, bypassing the CPU

Interrupts - Mechanism by which hardware can signal to the CPU upon the occurrence of some event
Interrupt service routine - When an interrupt occurs, the CPU saves its state and transfers execution to a dedicated handler known as:
Interrupt-driven I/O - Refers to using interrupts as a mechanism for I/O device controllers to inform the CPU when an I/O operation is complete.
Interrupt vector - A table or array of pointers to interrupt service routines, stored in low memory
Interrupt number - Used as an index to look up the correct handler on the interrupt vector
Maskable, non-maskable - Two main types of interrupts
Maskable interrupt - A type of interrupt that can be turned off by the CPU for critical instruction sequences; usually used by device controllers
Non-maskable interrupt - A type of interrupt that is reserved for events that are critical and unrecoverable, e.g. memory errors
Interrupt priority - Refers to the system of priority levels that allow the CPU to handle higher-priority interrupts before lower-priority ones

Single-processor system - Refers to a system comprising a single CPU with one core (plus any special purpose processors for devices)
Multiprocessor system - Refers to a system comprising multiple CPUs that can run tasks in parallel
Multicore system - Refers to a system similar to a multiprocessor system but with multiple cores on a single chip, which is more efficient
Symmetric, asymmetric - On a multiprocessor or multicore system, multiprocessing can be either:
Symmetric multiprocessing (SMP) - In the most common multiprocessor systems, each processor is a peer and can perform all tasks on the OS. This is known as:
Asymmetric multiprocessing - Refers to a type of multiprocessing where a single "boss" processor controls the system; other processors look to this "boss" for instruction or simply execute their predefined tasks
Clustered system - Refers to a type of multiprocessor system where multiple individual systems are linked together for high-availability and high-performance computing

Bootstrap program - Refers to small firmware code that loads the kernel when the computer starts
Multiprogramming - Refers to techniques that increase CPU utilization by organizing jobs/processes to ensure that the CPU always has one to execute and is therefore kept busy
Multitasking - Refers to when the CPU executes multiple jobs by switching between them at a rate fast enough for the user to perceive continuous interaction
Dual-mode operation - Refers to system operation in two separate modes: "kernel mode" and "user mode"
Kernel mode - In a system with dual-mode operation, this mode refers to when tasks are executed on behalf of the operating system (in other words, the OS is in control of the computer)
User mode - In a system with dual-mode operation, this mode refers to when tasks are executed on behalf of the user (in other words, a user program is in control of the computer)
Mode bit - In a system with dual-mode operation, this refers to a bit added to the computer hardware to indicate the current mode.
Kernel mode - In a system with dual-mode operation, in which mode does the hardware start at system boot time?
Whenever an interrupt occurs (when a system call is executed) - In a system with dual-mode operation, when does hardware switch from user mode to kernel mode?
Timer - In a system with dual-mode operation, this mechanism ensures that a single process cannot run indefinitely.
By sending an interrupt to the CPU after a specified period - In a system with dual-mode operation, how can a timer force user programs to cede control back to the OS, preventing them from running indefinitely?
Privileged instructions - Refers to a type of machine instruction that are only executable in kernel mode

Virtual memory - Refers to a technique that will allow the execution of a process that is not completely in memory (that is, while the program appears to be loaded in main memory, it is actually supported by data in secondary storage)
It allows the user to run programs larger than actual physical memory - What is the main advantage of using virtual memory?
Logical memory - Refers to the abstract, large, uniform array of storage from the perspective of the user, as opposed to the physical memory hardware.

Process management - Refers to a form of resource management where the OS deletes, schedules, and synchronizes processes
Memory management - Refers to a form of resource management where the OS tracks and allocates memory to processes
File-system management - Refers to a form of resource management where the OS provides a logical view of storage and manages file and directory structures
Mass-storage management - Refers to a form of resource management where the OS manages disk scheduling, free-space allocation, and partitioning for secondary storage

Caching - Refers to the process of copying data to a faster storage system on the storage hierarchy in order to improve performance

Process - Refers to a program in execution that requires resources to accomplish a task
A process is actively executing; a program is a passive entity (like a file) - What is the difference between a program and a process?
Process lifecycle - Refers to the duration over which a process is active (from creation to termination)
Process control block (PCB) - Refers to the data structure that contains all information required to manage a process, including its state, program counter, CPU registers, and scheduling
exit() - The system call by which a process ends its execution (terminates)
The process's resources are reclaimed by the OS - What happens when a process terminates?

Protection - Refers to a mechanism for controlling program or user access to system resources
Security - Defends the system against external and internal attacks
User and group IDs - Refers to identifiers used to distinguish users and groups, enabling the OS to enforce protection and security policies

Virtualization - Refers to the abstraction of a single computer's hardware into multiple execution environments, allowing multiple OS to run concurrently making use of the resources on a single system
Emulation - Refers to the simulation of computer hardware within software, used when the host CPU type is different from the target CPU type

Distributed systems - Refers to systems that are in fact a collection of separate, networked computers that provide a unified environment, allowing for resource sharing
Local-area networks - Networks that connect computers in a small area (e.g. a building)
Wide-area networks - Networks that connect computers over large distances (e.g. the Internet)

Lists - Data structures used by the kernel to represent collections of data values as a sequence (can be singly, doubly, or circularly linked)
Stacks - A last-in, first-out (LIFO) data structure used by the kernel
Queues - A first-in, first-out (FIFO) data structure used by the kernel
Tree - A data structure used by the kernel to represent data hierarchically
Hashmap - A data structure used by the kernel to associate keys with values, for fast data retrieval
Bitmaps - Refers to a string of binary digits used to represent the status of items (e.g. free disk blocks)

Traditional computing - Refers to a computing environment with PCs connected to a network, often with local servers. 
Mobile computing - Refers to a computing environment on handheld devices like smartphones and tablets, which are characterized by portability, touch-screen interfaces, and  specialized hardware (e.g., GPS, accelerometers)  
Client-server computing - Refers to a computing environment where server systems satisfy requests from client systems (e.g., file servers, compute servers)  
Peer-to-peer computing - Refers to a computing environment involving a network where all nodes are considered peers and can act as both clients and servers  
Cloud computing - Refers to a computing environment where resources are delivered as a service over a network 
Real-time embedded systems - Refers to a computing environment in which systems with rigid time constraints run real-time operating systems for specific tasks (e.g., car engines, industrial control systems)