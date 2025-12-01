Thread - A basic unit of CPU utilization that refers to a single sequential flow of control within a process; can also be seen as a "lightweight process"

Multithreading - Refers to when a process can have multiple threads of control

A thread is a lightweight flow of execution, a process is heavyweight and contains a program's code, data, and resources - What is the difference between a thread and a process?

Multicore system - Refers to a system with multiple processing cores on a single chip
Multiprocessor system - Refers to a system with multiple physical chips, each with one or more cores

Parallelism - Refers to when a system performs more than one task simultaneously
Data parallelism - A form of parallelism where subsets of the same data is distributed across multiple cores, each performing the same operation
Task parallelism - A form of parallelism where different tasks are distributed to different cores

Thread library - Provides the programmer with an API for creating, managing, and synchronizing threads

User-level thread library - Thread library that provides no kernel support; all thread management happens at the user level
Kernel-level thread library - Thread library that provides a direct API for the operating system's kernel threads

POSIX Pthreads - Widely-used, platform-independent API for thread creation and synchronization
Win32 threads - A kernel level thread library provided by the Windows operating system
Java threads - A thread library managed by the Java Virtual Machine, which in turn typically uses the underlying OS's threading model

Implicit threading - Refers to when the management of threads is handled by compilers and runtime libraries rather than explicitly by the programmer
Thread pools - Refers to a collection of pre-created threads that are ready to perform tasks

fork() may duplicate all threads in the process or only the thread that called it - Why can fork() be problematic in a multithreaded program?

It may not be clear which thread the signal is to be delivered to - What is a potential issue with signal handling with multiple threads?

Thread cancellation - Refers to the cancellation of a thread before it has completed
Asynchronous cancellation - Terminates the target thread immediately
Deferred cancellation - Allows the target thread to periodically check if it should terminate, providing a chance to clean up resources before exiting

Thread-local storage - Allows each thread to have its own copy of data that would otherwise have been shared

One-to-one - How are Windows threads mapped?
Tasks - Linux refers to threads as:
clone() - A system call on the Linux kernel that creates a process sharing the address space of the parent, effectively creating a thread
