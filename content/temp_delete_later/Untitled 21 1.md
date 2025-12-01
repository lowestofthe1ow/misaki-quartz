UI, Program execution, I/O operations, File-system manipulation, Communications, Error detection - Six user services offered by the OS

User Interface - OS service that provides a way for users to interact with the system
Program Execution - OS service of loading a program into memory, running it, and handling its termination
I/O Operations - OS service of managing I/O to files and devices
File-System Manipulation - Refers to how programs can create, delete, read, write, and manipulate files and directories
Communications - OS service that enables processes to exchange info
Error Detection - Refers to the OS constantly checking for and handling errors

Resource allocation, accounting, protection and security - Three services provided by the OS for system efficiency

Resource Allocation - Refers to allocation and management of CPU cycles, memory, devices, processes, etc.
Accounting - OS service of tracking resource usage and monitoring performance
Protection and Security - OS service of protecting from unauthorized access and external attacks

Command Interpreter - Special program that runs when a process is initiated or when user first logs on in an interactive system
Command-Line Interface - OS interface that accepts text commands from user
Graphical User Interface - OS interface; mouse-based window-and-menu system with icons representing programs and files
Touch-Screen Interface - OS interface that users can interact with by pressing and swiping

System Calls - Primary interface to the services made available by OS
Interactive System - System in which it is possible to use two or more system calls in a command 
Run-Time Environment - System-call interface that links API function calls to kernel-level system calls

Through registers, Through a block or table in memory, Through stack - Three general ways of passing parameters
If there are only a few parameters - When can parameters usually passed through registers?
Through a register - When passing parameters through a block in memory, how is the address of that block passed?

Process control, file management, device management, information maintenance, communications, protection - Six main types of system calls
Process Control - System calls that manage lifecycle of processes, process attributes and memory allocations
File Management - System calls that handle file operations and enable reading
Device Management - System calls that control I/O devices and manage device attributes
Information Maintenance - System calls that transfer info between user and OS
Information Maintenance - System calls that get system data like time, date, resource usage
Communications - System calls that enable processes to exchange info
Communications - System calls that create and delete communication connections
Protection - System calls that control access to system resources	

Application Programming Interface (API) - This provides a set of functions available to an application programmer and is used to design programs in a way such that raw system calls are abstracted away
Using a standard API allows a program to compile and run on any system that supports the same API - Why does the use of an API for system calls allow for portability?
API Function Call - Refers to a high-level request, in contrast to a raw system call
System-call Interface - An interface provided by the runtime environment that intercepts the API call and invokes the necessary system call in the kernel

File Management - Type of system services to create, delete, manipulate files and directories
Status Information - Type of system services for programs that provide system information such as date, time, memory usage, performance statistics
File Modification - Type of system services for programs that create and modify files
Programming-Language Support - Type of system services for compilers, assemblers, debuggers, and interpreters
Program Loading and Execution - Type of system services for utilities to load programs into memory and start execution
Communications - Type of system services for programs that provide connections for messages, file transfer, remote login
Background services (daemons) - Processes that run in the background the entire time the kernel is running to handle specific system tasks

Compiler - This translates source code into relocatable object files
Linker - This combines relocatable object files and libraries into a single binary executable file
Loader - This loads executable file into memory for execution
Dynamic Linking - Refers to a technique where libraries are not linked until execution time
It reduces the file size of the executable and allows for multiple processes to share a single copy of a library in memory - What is the main advantage of dynamic linking?
Relocation - This refers to the process of assigning final memory addresses to program parts during linking or loading

Binary format - In what type of file format are applications compiled so that they may be processed by the OS loader?
ELF - Specific binary format that the OS loader understands for Linux
PE - Specific binary format that the OS loader understands for Windows

CPU Instruction Sets - Applications must be compiled for a specific CPU architecture, e.g. x86 or ARM
Application Binary Interface (ABI) - This defines how BINARY code components interface for a given OS on a given architecture

Mechanisms - These determine "how to do something" in an OS design
Policies - These determine "what will be done" in an OS design
																				
Monolithic Structure - OS structure wherein all kernel functionality is in a single static binary file running in a single address space
Layered Approach - OS is broken into layers, each using functions of only the layers below it
Microkernels - OS structure that moves nonessential components out of kernel into user space, and communication occurs via message passing
Modules - OS structure where kernel has set of core components and can dynamically link additional services at runtime
Hybrid Systems - Combines different OS structures for optimization

System Generation - Refers to the process of configuring and compiling the OS for a specific hardware configuration

A bootstrap program in firmware is run - What is the first step in the system boot process?
The bootstrap program loads the OS kernel into memory In the system boot process, what occurs after the bootstrap program is run?
The kernel initializes the hardware and mounts the root file system - In the system boot process, what occurs after the bootstrap program loads the OS kernel into memory?
The system starts daemons and presents a login prompt or GUI - In the system boot process, what occurs after the kernel initializes all hardware and mounts the root file system?

Bootstrap Program - This program locates and loads OS kernel into memory
Kernel - In the system boot process, this initializes hardware and mounts the root file system
Log Files - Used to record system errors
Core Dumps - A capture of a process's memory at time of failure
Crash Dump - A capture of the kernel's memory at the time of system crash
Counters - Allows the OS to keep track of system activity
Tracing - Tools that collect data for specific events, such as system calls or I/O activity