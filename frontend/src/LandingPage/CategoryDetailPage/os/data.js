const blogs = [
  {
    id: 1,
    slug: "introduction-to-operating-system",
    title: "Introduction to Operating System",
    excerpt:
      "Learn what an operating system is and why it is essential.",
    content: `
An Operating System (OS) is system software that manages computer hardware and software resources.

Examples:
- Windows
- Linux
- macOS
- Android
`,
    tags: ["OS", "Basics"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"

  },

  {
    id: 2,
    slug: "functions-of-operating-system",
    title: "Functions of an Operating System",
    excerpt:
      "Understand the core responsibilities of an OS.",
    content: `
Core functions:
- Process management
- Memory management
- File management
- Device management
`,
    tags: ["OS", "Core Concepts"],
    readTime: "7 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 3,
    slug: "types-of-operating-system",
    title: "Types of Operating Systems",
    excerpt:
      "Explore batch, time-sharing, real-time, and distributed OS.",
    content: `
Types of OS:
- Batch OS
- Time-sharing OS
- Real-time OS
- Distributed OS
`,
    tags: ["OS", "Classification"],
    readTime: "7 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 4,
    slug: "process-vs-thread",
    title: "Process vs Thread",
    excerpt:
      "Understand the difference between process and thread.",
    content: `
Process:
- Independent execution
- Own memory

Thread:
- Lightweight
- Shared memory
`,
    tags: ["OS", "Processes"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 5,
    slug: "process-life-cycle",
    title: "Process Life Cycle",
    excerpt:
      "Learn the different states of a process.",
    content: `
States:
- New
- Ready
- Running
- Waiting
- Terminated
`,
    tags: ["OS", "Processes"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 6,
    slug: "cpu-scheduling",
    title: "CPU Scheduling Algorithms",
    excerpt:
      "Understand FCFS, SJF, Priority, and Round Robin.",
    content: `
CPU scheduling decides which process runs next.

Algorithms:
- FCFS
- SJF
- Priority
- Round Robin
`,
    tags: ["OS", "Scheduling"],
    readTime: "9 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 7,
    slug: "deadlock-in-os",
    title: "Deadlock in Operating System",
    excerpt:
      "Learn about deadlock conditions and handling.",
    content: `
Deadlock occurs when processes wait indefinitely.

Conditions:
- Mutual exclusion
- Hold and wait
- No preemption
- Circular wait
`,
    tags: ["OS", "Deadlock"],
    readTime: "8 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 8,
    slug: "memory-management",
    title: "Memory Management in OS",
    excerpt:
      "Understand paging, segmentation, and virtual memory.",
    content: `
Memory management handles allocation and deallocation.

Techniques:
- Paging
- Segmentation
- Virtual memory
`,
    tags: ["OS", "Memory"],
    readTime: "9 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 9,
    slug: "page-replacement-algorithms",
    title: "Page Replacement Algorithms",
    excerpt:
      "Learn FIFO, LRU, and Optimal algorithms.",
    content: `
Page replacement occurs when memory is full.

Algorithms:
- FIFO
- LRU
- Optimal
`,
    tags: ["OS", "Memory"],
    readTime: "8 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 10,
    slug: "file-system-in-os",
    title: "File System in Operating System",
    excerpt:
      "Understand how OS stores and retrieves files.",
    content: `
File system manages files and directories.

Functions:
- File naming
- Access control
- Storage management
`,
    tags: ["OS", "File System"],
    readTime: "7 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },
    {
    id: 11,
    slug: "system-calls",
    title: "System Calls in Operating System",
    excerpt: "Understand how user programs communicate with the OS.",
    content: `
System calls provide an interface between user programs and the OS.

Examples:
- fork()
- exec()
- read()
- write()
`,
    tags: ["OS", "System Calls"],
    readTime: "7 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 12,
    slug: "kernel-vs-user-mode",
    title: "Kernel Mode vs User Mode",
    excerpt: "Learn how OS protects system resources.",
    content: `
User mode restricts access to hardware.
Kernel mode has full system access.

Mode switching ensures system security.
`,
    tags: ["OS", "Kernel"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 13,
    slug: "types-of-kernel",
    title: "Types of Kernels",
    excerpt: "Understand monolithic, microkernel, and hybrid kernels.",
    content: `
Kernel types:
- Monolithic
- Microkernel
- Hybrid
- Exokernel
`,
    tags: ["OS", "Kernel"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 14,
    slug: "context-switching",
    title: "Context Switching in OS",
    excerpt: "Learn how CPU switches between processes.",
    content: `
Context switching saves and restores process state.

Required for multitasking but adds overhead.
`,
    tags: ["OS", "Processes"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 15,
    slug: "multithreading",
    title: "Multithreading in Operating System",
    excerpt: "Understand how multiple threads run concurrently.",
    content: `
Multithreading improves CPU utilization.

Types:
- User-level threads
- Kernel-level threads
`,
    tags: ["OS", "Threads"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 16,
    slug: "inter-process-communication",
    title: "Inter Process Communication (IPC)",
    excerpt: "Learn how processes communicate with each other.",
    content: `
IPC mechanisms:
- Pipes
- Message queues
- Shared memory
- Semaphores
`,
    tags: ["OS", "IPC"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 17,
    slug: "semaphores-and-mutex",
    title: "Semaphores and Mutex",
    excerpt: "Understand synchronization mechanisms.",
    content: `
Semaphores and mutex prevent race conditions.

Used in critical section problems.
`,
    tags: ["OS", "Synchronization"],
    readTime: "8 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 18,
    slug: "critical-section-problem",
    title: "Critical Section Problem",
    excerpt: "Learn how OS handles shared resources.",
    content: `
Critical section requires mutual exclusion.

Solutions:
- Peterson’s algorithm
- Mutex
- Semaphores
`,
    tags: ["OS", "Synchronization"],
    readTime: "7 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 19,
    slug: "deadlock-prevention",
    title: "Deadlock Prevention and Avoidance",
    excerpt: "Learn strategies to handle deadlocks.",
    content: `
Deadlock handling:
- Prevention
- Avoidance
- Detection
- Recovery
`,
    tags: ["OS", "Deadlock"],
    readTime: "9 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 20,
    slug: "bankers-algorithm",
    title: "Banker’s Algorithm",
    excerpt: "Understand deadlock avoidance algorithm.",
    content: `
Banker’s algorithm checks system safety.

Used for resource allocation decisions.
`,
    tags: ["OS", "Deadlock"],
    readTime: "8 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 21,
    slug: "paging-in-os",
    title: "Paging in Operating System",
    excerpt: "Learn how memory is divided into pages.",
    content: `
Paging eliminates external fragmentation.

Uses page table for address mapping.
`,
    tags: ["OS", "Memory"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 22,
    slug: "segmentation-in-os",
    title: "Segmentation in Operating System",
    excerpt: "Understand logical memory division.",
    content: `
Segmentation divides memory into logical segments.

Each segment has base and limit.
`,
    tags: ["OS", "Memory"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 23,
    slug: "virtual-memory",
    title: "Virtual Memory in OS",
    excerpt: "Learn how OS uses disk as extended memory.",
    content: `
Virtual memory allows execution of large programs.

Uses demand paging technique.
`,
    tags: ["OS", "Memory"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 24,
    slug: "thrashing",
    title: "Thrashing in Operating System",
    excerpt: "Understand excessive paging problems.",
    content: `
Thrashing occurs when system spends more time paging.

Reduces performance drastically.
`,
    tags: ["OS", "Memory"],
    readTime: "7 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 25,
    slug: "disk-scheduling",
    title: "Disk Scheduling Algorithms",
    excerpt: "Learn FCFS, SSTF, SCAN, and C-SCAN.",
    content: `
Disk scheduling improves access time.

Algorithms:
- FCFS
- SSTF
- SCAN
- C-SCAN
`,
    tags: ["OS", "Disk"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 26,
    slug: "file-allocation-methods",
    title: "File Allocation Methods",
    excerpt: "Understand how files are stored on disk.",
    content: `
Allocation methods:
- Contiguous
- Linked
- Indexed
`,
    tags: ["OS", "File System"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 27,
    slug: "directory-structure",
    title: "Directory Structure in OS",
    excerpt: "Learn how directories are organized.",
    content: `
Directory types:
- Single-level
- Two-level
- Tree structure
- DAG
`,
    tags: ["OS", "File System"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 28,
    slug: "protection-and-security",
    title: "Protection and Security in OS",
    excerpt: "Understand how OS protects resources.",
    content: `
Security ensures data integrity and privacy.

Mechanisms:
- Authentication
- Authorization
- Access control
`,
    tags: ["OS", "Security"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 29,
    slug: "real-time-operating-system",
    title: "Real-Time Operating System (RTOS)",
    excerpt: "Understand hard and soft real-time systems.",
    content: `
RTOS responds within strict deadlines.

Used in:
- Embedded systems
- Robotics
`,
    tags: ["OS", "RTOS"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 30,
    slug: "distributed-operating-system",
    title: "Distributed Operating System",
    excerpt: "Learn how OS manages multiple systems.",
    content: `
Distributed OS manages networked computers.

Appears as a single system to users.
`,
    tags: ["OS", "Distributed Systems"],
    readTime: "8 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 31,
    slug: "network-operating-system",
    title: "Network Operating System",
    excerpt: "Understand OS designed for network management.",
    content: `
Network OS enables file and printer sharing.

Examples:
- Windows Server
- UNIX
`,
    tags: ["OS", "Networking"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 32,
    slug: "unix-operating-system",
    title: "UNIX Operating System Basics",
    excerpt: "Learn fundamentals of UNIX OS.",
    content: `
UNIX is multiuser and multitasking OS.

Foundation of Linux and macOS.
`,
    tags: ["OS", "UNIX"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 33,
    slug: "linux-operating-system",
    title: "Linux Operating System Overview",
    excerpt: "Understand Linux architecture and features.",
    content: `
Linux is open-source and secure.

Used in servers and cloud systems.
`,
    tags: ["OS", "Linux"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 34,
    slug: "windows-operating-system",
    title: "Windows Operating System Architecture",
    excerpt: "Learn how Windows OS works internally.",
    content: `
Windows supports GUI-based multitasking.

Used widely in personal computing.
`,
    tags: ["OS", "Windows"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 35,
    slug: "booting-process",
    title: "Booting Process in Operating System",
    excerpt: "Understand how system starts after power on.",
    content: `
Booting loads OS into memory.

Types:
- Cold boot
- Warm boot
`,
    tags: ["OS", "Booting"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 36,
    slug: "interrupts-in-os",
    title: "Interrupts in Operating System",
    excerpt: "Learn how OS handles hardware and software interrupts.",
    content: `
Interrupts signal CPU for immediate attention.

Types:
- Hardware
- Software
`,
    tags: ["OS", "Interrupts"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 37,
    slug: "device-drivers",
    title: "Device Drivers in OS",
    excerpt: "Understand how OS communicates with hardware.",
    content: `
Device drivers act as a bridge.

They translate OS commands to hardware actions.
`,
    tags: ["OS", "Devices"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 38,
    slug: "input-output-system",
    title: "Input Output System in OS",
    excerpt: "Learn how OS manages I/O devices.",
    content: `
I/O system handles data transfer.

Uses buffering and caching.
`,
    tags: ["OS", "I/O"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 39,
    slug: "virtualization",
    title: "Virtualization in Operating System",
    excerpt: "Understand how multiple OS run on one machine.",
    content: `
Virtualization uses hypervisors.

Used in cloud computing.
`,
    tags: ["OS", "Virtualization"],
    readTime: "8 min",
    level: "Advanced",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  },

  {
    id: 40,
    slug: "os-interview-questions",
    title: "Operating System Interview Questions",
    excerpt: "Prepare important OS interview questions.",
    content: `
Covers:
- Processes
- Memory
- Deadlocks
- Scheduling

Helpful for placements and interviews.
`,
    tags: ["OS", "Interview"],
    readTime: "6 min",
    level: "Beginner",
    category: "OPERATING SYSTEMS",
    image: "/media/demo.png"
  }

];

export default blogs;
