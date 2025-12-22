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
  },
];

export default blogs;
