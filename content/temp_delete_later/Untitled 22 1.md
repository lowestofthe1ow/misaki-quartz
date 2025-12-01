Process - Refers to a program in execution; a single program can spawn multiple processes to handle different tasks
Text, data, heap, stack - The memory layout of a program is divided into these four sections
Text - Process memory section containing the program code
Data - Process memory section containing global variables
Heap - Process memory section containing dynamically allocated memory
Stack - Process memory section serving as a temporary storage area for function parameters, return addresses, and local variables
Text and data - Which process memory sections are fixed in size?
Heap - Which process memory section grows upwards?
Stack - Which process memory section grows downwards?

New, running, waiting, ready, terminated - A process can be in one of these five states over the course of its execution:
New - Process state indicating that the process is being created
Running - Process state indicating that instructions are being executed by the CPU
Waiting - Process state indicating that the process is waiting for some event to occur
Ready - Process state indicating that the process is waiting to be assigned to a processor
Terminated - Process state indicating that the process has finished execution

Admitted - A process goes from NEW to READY when it is:
Scheduler dispatch - A process goes from READY to RUNNING after a/an:
Interrupt - A program goes from RUNNING to READY after a/an:
I/O or event completion - A program goes from WAITING to READY after:
I/O or event wait - A program goes from RUNNING to WAITING on:
Exit - A program goes from RUNNING to TERMINATED on:

Process control block - A data structure that contains all the information needed to manage a specific process and is the central repository for the process's state

Process state - Information stored in the PCB that indicates the current state of the process
Program counter - Information stored in the PCB that indicates the address of the next instruction to be executed
CPU registers - Information stored in the PCB that indicates the values of all CPU registers, which must be saved and restored during a context switch
CPU scheduling information - Information stored in the PCB that indicates process priority, pointers to scheduling queues, etc.
Memory management information - Information stored in the PCB that contains pointers to page or segment tables for the process
Accounting information - Information stored in the PCB that indicates CPU time used, time limits, and job numbers
I/O status information - Information stored in the PCB that contains a list of I/O devices and files allocated to the process

Thread - A basic unit of CPU utilization that refers to a single sequential flow of control within a process; can also be seen as a "lightweight process"
Threads within the same process share resources - Primary difference between multiple threads and multiple processes
Thread ID, program counter, registers, stack - Four components of a thread
Text, data, heap sections - What memory sections present in a process are absent in a thread?

Many-to-one, one-to-one, many-to-many - Three main multithreading models
Many-to-one - Multithreading model where many user threads map to a single kernel thread
One-to-one - Multithreading model where each user thread maps to a separate kernel thread
Many-to-many - Multithreading model where many user threads are mapped to a smaller or equal number of kernel threads

Process scheduler - Selects an available process for execution on the CPU
Job queue - A queue that holds all the processes in the system
Ready queue - A queue that holds all the processes that are in main memory and are waiting for the CPU
Device queue - A queue that holds processes waiting for an I/O device

Short-, medium-, long-term - Three main types of schedulers
Long-term - Type of scheduler that selects processes from storage and loads them into the ready queue
Medium-term - Type of scheduler that removes processes from memory and reintroduces them later (swapping)
Short-term - Type of scheduler that selects processes in the ready queue and allocates the CPU to one of them

Context switch - Refers to saving the state of the current process and restoring the state of the next process to be run
Overhead - Refers to operations during which the system does no meaningful work. Context switching is an example.

Parent-child relationship (creating process is the parent) - When a process creates a new process with a system call (e.g. fork()), what is the relationship of the two?

It may share all, some, or no resources - Will a parent process always share all resources with a child?

Concurrent execution, parent waits - Two execution options for the parent and child processes
Concurrent execution - Refers to when the parent continues to execute concurrently with its children
Parent waits - Refers to when the parent waits until one or all of its children have terminated before continuing
It can be a duplicate of the parent's or load a new program - What is the relationship of a child process's address space with its parent's?

Normal termination - A case of process termination where the process finishes executing its last instruction and uses exit() to request termination, returning a status value to the parent

Parent-initiated termination - A case of process termination where the parent process terminates one of its children, e.g. when the child exceeds resource limits or the task assigned to the child is no longer needed

Cascading termination - A case of process termination that occurs when some OS's automatically terminate all child processes when a parent terminates.

Zombie process - Refers to a child that has terminated but whose parent has not yet collected its exit status with wait()
Orphan process - Refers to a child whose parent has terminated without calling wait()
They are adopted by the init process, which collects their terminated status and prevents them from becoming zombies - What usually occurs to orphan processes?

Independent processes - Refers to processes that do not share data with each other
Cooperating processes - Refers to processes that share data with each other
Interprocess communication (IPC) - Provides a mechanism for cooperating processes to exchange data
Information sharing, computational speedup, modularity - Main benefits of interprocess communication

Shared memory, message passing - Models of communication in interprocess communication
Shared memory - IPC communication model where processes establish a shared memory region; communication, once established, is extremely fast and occurs directly without kernel intervention
Message passing - IPC communication model where processes communicate by exchanging messages, usually when data is small

Sockets - Refers to a standard way of implementing IPC over a network, identified by a combination of an IP address and a port number

TCP - Connection-oriented socket protocol
UDP - Connectionless socket protocol

Remote procedure calls (RPC) - Refers to a mechanism that allows a process to call a procedure on a remote machine as if it were a local function call
It is typically blocked until the result is returned - What usually happens to the client when it performs a remote procedure call?

Pipe - Refers to a simple form of IPC that allows processes to communicate; can be ordinary or named
Ordinary pipe - Unidirectional pipe used ONLY between a parent and a child process
Named pipe - Bidirectional pipe that can be used between unrelated processes on the same machine

POSIX shared memory - Refers to a standardized set of APIs for creating and managing shared memory segments
Mach - Refers to an early operating system designed around the concept of message passing
Windows IPC - A rich set of IPC mechanisms offered by Windows, including message passing, shared memory, and named pipes


