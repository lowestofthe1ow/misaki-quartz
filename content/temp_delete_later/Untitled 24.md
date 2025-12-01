CPU burst and I/O wait - Process execution consists of a cycle alternating between what two states?

When a process switches from RUNNING to WAITING, RUNNING, to READY, WAITING to READY, or when it terminates - In which four circumstances may a CPU scheduling decision take place?

Nonpreemptive - Refers to when scheduling takes place ONLY when a process switches from RUNNING to WAITING or when it terminates

Preemptive - Refers to when scheduling can take place when a new process becomes READY

Preemptive - Most modern operating systems use what kind of scheduling algorithm (preemptive/nonpreemptive)?

Mutex - A mechanism required by a preemptive kernel to prevent race conditions when data is shared between processes

Dispatcher - Refers to a kernel module responsible for giving control of the CPU to the process selected by the CPU scheduler

Dispatch latency - Refers to the overhead time taken by the dispatcher to stop one process and start another

CPU utilization - Refers to the degree to which the CPU is kept busy (CPU activity)
Throughput - Refers to the number of processes completed per time unit
Turnaround time - Refers to the total time from the submission/arrival of a process to its time of completion
Waiting time - Refers to the total time a process spends waiting in the ready queue
Response time - Refers to the time from the submission of a request to the time a first response is produced in an interactive system

CPU utilization, throughput - Which scheduling criteria are maximized?
Turnaround, waiting, response times - Which scheduling criteria are minimized?

Scheduling algorithm - Refers to an algorithm by which the CPU determines which process is to be allocated the CPU's core

First-come, first-served - Non-preemptive scheduling algorithm where the process that requests the CPU first is allocated the CPU first

Convoy effect - Refers to when a long CPU-bound process arrives first in an FCFS scheduler, blocking all short processes behind it

Shortest job first - Non-preemptive scheduling algorithm that allocates the CPU to the process that has the smallest next CPU burst time

Shortest job first - Which scheduling algorithm is provably optimal, giving the minimum average waiting time?

It is impossible to predict the length of the next CPU burst - Why is SJF scheduling impossible to truly implement at the scheduler level?

Exponential average - Refers to the method most generally used to estimate the next CPU burst length when approximating the SJF scheduling algorithm

τₙ₊₁ = αtₙ+(1-α)τₙ for 0≤α≤1 - The predicted value τₙ₊₁ for the next CPU burst is given in terms of tₙ by:

α=0.5 - Usual value for exponential average alpha α to provide an equal weight between recent and past history

Shortest remaining time first - Preemptive version of the SJF scheduling algorithm; if a new process arrives with a shorter CPU burst time, the current process is preempted

Round robin - Preemptive scheduling algorithm where processes are placed in a FIFO ready queue. The CPU scheduler iterates over this queue and allocates the CPU to each process over a small time unit

Time quantum - Refers to the small time unit over which a process is executed under a round-robin scheduler
Behavior becomes more like FCFS - What happens when a large time quantum is used for a round-robin scheduler?
Higher overhead from context switching - What happens when a small time quantum is used for a round-robin scheduler?

Priority scheduling - A scheduling algorithm that can be implemented as both preemptive and non-preemptive where each process is assigned a priority number; CPU is allocated to the process with the highest priority

The one with the smallest priority number - Which process receives the highest priority in a priority scheduler?

Multilevel queue scheduling - Refers to a technique where the ready queue is divided into separate queues based on priority, which is often based on process characteristics. Each queue may have its own scheduling algorithm.

Multilevel feedback queue - Allows a process to move between different queues based on its behavior, preventing starvation by separating processes by CPU burst characteristics

Moved to a lower priority queue - In a MLFQ, a process that uses too much CPU time is:
Moved to a higher priority queue (aging) - In a MLFQ, a process that waits too long in a low-priority queue can be:

The same as scheduling processes, but the scope under which threads can contend for control must be considered - How does thread scheduling differ from process scheduling?

Thread contention - Refers to when threads attempt to access the same resource
Contention scope - Determines the scope at which threads can compete for CPU time (e.g. at the process level or at the system level)

Process-contention scope - The contention scope typical in many-to-one and many-to-many threading models; a scheduler decides which user-level thread to run within an available lightweight process

System-contention scope - The contention scope typical in one-to-one threading models; the operating system kernel scheduler decides which kernel-level thread to run on an available CPU (thus competition for CPU takes place among all threads in the system)

Homogeneous processors - Refers to when all processors are identical in terms of function in speed, allowing any process in the ready queue to run on any processor

Load sharing - Refers to when the ready queue is shared among all processors to evenly distribute workload

Asymmetric multiprocessing - Refers to when only one processor handles all scheduling decisions, referred to as the master server

Symmetric multiprocessing - Refers to when each processor is self scheduling; either all processes are in a common ready queue or each processor has its own private queue

Processor affinity - Refers to when systems avoid migrating a process between processors because of the overhead of invalidating and repopulating caches
Soft affinity - Refers to a policy where an OS will attempt to keep a process on the same processor but with no guarantee
Hard affinity - Refers to a policy where a process can specify the processor(s) on which it can run; it cannot be moved anywhere else

Completely Fair Scheduler (CFS) - Scheduling algorithm that approximates SJF; used by Linux systems
Preemptive priority scheduler - Scheduling algorithm used by Windows systems
32 - How many levels of priority does Windows provide for its scheduler?

Deterministic modeling - A form of algorithm evaluation where the performance of each algorithm is measured for a specific predetermined workload

Queuing models - A form of algorithm evaluation using approximate probability distributions of process arrival times and CPU burst times to compute average throughput, utilization, waiting time, etc.
n = λ×W, where n is the number of processes leaving the queue, λ is the average arrival rate for new processes, and W is the average waiting time - Little's formula

Simulations - A form of algorithm evaluation that involves programming a model of the computer system and running it with real or randomly generated data to evaluate performance

Implementation - A form of algorithm evaluation that involves simply implementing the scheduling algorithm and placing it in a real OS to measure real-world performance



