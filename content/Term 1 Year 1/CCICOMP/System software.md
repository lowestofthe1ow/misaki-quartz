---
target-deck: CCICOMP::Computer systems::Computer software components::System software
tags: CCICOMP
---

## Operating Systems

The operating system (OS) is the most important software component installed on any computer system. It performs low-level tasks on behalf of users and application programs, manages the computer's hardware, including the processor, memory, and storage devices, as well as peripheral devices such as the printer. Additionally, it provides a consistent means for application software to work with the central processing unit (CPU) and is responsible for the management, scheduling, and coordination of tasks.
<!--ID: 1701435237342-->


## Operating System Layers

An OS is organized internally into layers, making it easier to maintain because functions in one layer can be modified without affecting other layers. The outermost layers provide services to application programs or directly to end users, while the innermost layer encapsulates hardware resources for controlling and managing access.
<!--ID: 1701435237348-->

### Command layer

The Command Layer serves as the user interface to the OS, enabling users to run applications and manage system resources.
<!--ID: 1701708440256-->


### Services layer

The Services Layer consists of reusable components that offer fundamental operations (e.g., file and folder manipulation, I/O access, starting and stopping programs) accessible through service calls. 
<!--ID: 1701708440271-->


### Kernel

The Kernel is responsible for managing resources and directly interacting with computer hardware.
<!--ID: 1701708440276-->


## Boot Up Process

The boot-up process is divided into four steps:
1. [[System software#Step 1 Activating BIOS|Activating BIOS]]
2. [[System software#Step 2 Performing the POST|Performing the POST]]
3. [[System software#Step 3 Loading the OS|Loading the OS]]
4. [[System software#Step 4 Applying Further Configurations and Customizations|Applying further configurations and customizations]]
<!--ID: 1701435237353-->


### Step 1: Activating BIOS

The CPU activates the basic input/output system (BIOS), a small program stored in ROM on the motherboard that manages the exchange of data between the OS and all the input and output devices attached.
<!--ID: 1701435237359-->


### Step 2: Performing the POST

BIOS performs the power-on self-test (POST) to ensure that essential peripheral devices are attached and operational.
<!--ID: 1701435237365-->


### Step 3: Loading the OS

BIOS goes through a preconfigured list of devices to search for the drive that contains the main files of the OS (system files). The kernel of the booted OS is loaded into RAM, and the OS takes over control of the system. In systems that have more than one OS installed (e.g., dual boot), the BIOS follows its boot priority to determine which OS to load into RAM.
<!--ID: 1701435237371-->


### Step 4: Applying Further Configurations and Customizations

Once booted, the OS loads any software settings and user configurations.
<!--ID: 1701435237378-->


## OS Functions

### User Interface

The user interface (UI) provides a means through which a user can run applications and utility programs, and manage system resources. The UI can be implemented as:
- A graphical user interface (GUI) allows interaction using menus and visual images.
- A command-line interface (CLI) accepts user input using commands represented by short keywords or abbreviations.
<!--ID: 1701435237386-->

### Memory Management

Memory management optimizes the use of the computer or device's internal memory. Only portions of a program that must be in RAM during execution are the next instruction to be fetched and any data it is using. Most OS minimize the amount of code and data stored in RAM at one time to allow remaining space in memory to be used by other programs. Virtual memory, a portion of secondary storage functioning as additional RAM, is employed. Virtual memory management involves dividing a program into fixed-size portions called pages and using a reserved area in secondary storage, called the page file or swap space, to temporarily hold program pages not in use during execution. The OS regularly moves program pages between RAM and the page file as needed.
<!--ID: 1701435237394-->


### Task Coordination

The operating system's handling of programs directly affects productivity. This can involve **single-tasking** (running one program at a time) or **multitasking** (running multiple programs simultaneously) in both **foreground** (with user interaction) and **background** (without user interaction) modes, with **single user** or **multiuser** support. The OS determines the order in which tasks are processed, and a multitasking OS allows multiple programs to share computer resources within a timeframe. Programs and devices use interrupts to signal to the OS their resource requirements. The OS scheduler makes rapid decisions to determine which program receives resource control and for how long, based on priority. The ability to quickly switch between tasks and allow them to appear simultaneous gives an OS its multitasking capability.
<!--ID: 1701435237401-->


### Device Configuration

A device driver is a special program that allows the OS to control a device by translating the device's specialized commands into commands the OS can understand, and vice versa. Plug and Play (PnP) automatically configures new devices as you install or connect them. Non-PnP devices require manual installation of their drivers by the user.
<!--ID: 1701435237409-->


## Types of Operating Systems

There are different categories of operating systems depending on the type of computer system they are used on and the kind of usage they are suited for.
<!--ID: 1701435237415-->


### Desktop OS

A desktop operating system serves a single user at a time and operates on personal devices like laptops and desktop computers. By default, it runs with a graphical user interface (GUI), providing a visual environment for user interaction. The system also includes user application software, such as browsers, games, and productivity software.
> Examples include Windows, macOS, and Linux
<!--ID: 1701435237421-->


### Server OS

A server operating system exhibits several characteristics. It serves multiple users simultaneously and is designed to run on servers and mainframes. The system includes software that delivers services, commonly through a network, encompassing functions such as web hosting and file hosting. Typically, a dedicated system administrator manages server operating systems.
> Examples include Windows Server, macOS Server, UNIX, and Linux
<!--ID: 1701435237428-->


### Mobile OS

A mobile operating system possesses specific characteristics tailored for mobile devices and consumer electronics. It is crafted to be power-saving, prioritizing efficiency for portable devices. Furthermore, the user interface design is optimized for touch screens, enhancing the overall user experience on mobile platforms.
> Examples include Google Android, Apple iOS, and Windows (Mobile Edition)
<!--ID: 1701435237434-->


### Real-time OS

Contiki OS, VxWorks, Embedded Systems
<!--ID: 1701435237439-->
