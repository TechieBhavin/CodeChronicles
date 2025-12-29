const blogs = [
  {
  id: 1,
  title: "Introduction to Data Structures and Algorithms",
  slug: "introduction-to-dsa",
  description: "Understand what DSA is, why it matters, and how it helps you write efficient code.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Data Structures and Algorithms (DSA) form the backbone of computer science and software development. Almost every efficient software system — from search engines and social media platforms to banking systems and mobile applications — relies heavily on strong DSA concepts.

Data Structures define how data is stored, organized, and accessed in memory. Examples include arrays, linked lists, stacks, queues, trees, and graphs. Algorithms, on the other hand, are step-by-step procedures or instructions used to solve a specific problem using these data structures. Examples include searching, sorting, and traversal algorithms.

Why is DSA so important?  
Efficient data handling leads to faster execution, lower memory usage, and better scalability. A poorly chosen data structure can drastically slow down an application even if the logic is correct.

DSA is essential in:
- Search engines (ranking and indexing)
- Navigation apps (shortest path algorithms)
- Databases (indexing and querying)
- Web applications (caching and performance optimization)
- Artificial Intelligence and Machine Learning

Most top tech companies like Google, Amazon, Microsoft, Meta, and Apple heavily test DSA concepts during technical interviews because it reflects a candidate’s problem-solving skills.

Learning DSA improves:
- Logical thinking
- Analytical skills
- Code optimization
- Confidence in interviews

A good DSA journey starts with understanding programming basics, followed by learning time complexity, arrays, recursion, and gradually moving to advanced topics like graphs and dynamic programming.

In short, mastering DSA makes you a better programmer, not just a coder.
`,
  image: "/media/demo.png"
},

  {
  id: 2,
  title: "Time and Space Complexity Explained Simply",
  slug: "time-and-space-complexity",
  description: "Learn Big-O notation with real-world examples and common mistakes.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Time and Space Complexity are used to measure the efficiency of an algorithm. Instead of focusing on how fast a program runs on a specific machine, complexity analysis helps us understand how an algorithm performs as input size increases.

Time Complexity measures how execution time grows with input size.  
Space Complexity measures how much extra memory an algorithm uses.

Big-O notation expresses complexity in the worst-case scenario. Common complexities include:
- O(1) – Constant time
- O(log n) – Logarithmic time
- O(n) – Linear time
- O(n log n) – Linearithmic time
- O(n²) – Quadratic time

Example:
Searching an element in an unsorted array using linear search takes O(n) time, whereas binary search on a sorted array takes O(log n).

Why complexity matters:
- Efficient algorithms scale better
- Reduces system cost
- Improves user experience

Common mistakes beginners make:
- Ignoring nested loops
- Misunderstanding recursion complexity
- Confusing average and worst cases

Understanding complexity helps you choose the right algorithm and write optimized, scalable code.
`,
  image: "/media/demo.png"
}
,
  
  {
  id: 3,
  title: "Arrays in DSA: Concepts, Operations, and Examples",
  slug: "arrays-in-dsa",
  description: "A complete guide to arrays including insertion, deletion, and traversal.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Arrays are one of the most fundamental data structures in programming. They store elements of the same data type in contiguous memory locations, allowing fast access using index positions.

Key characteristics:
- Fixed size
- Indexed access
- Continuous memory allocation

Common operations:
- Traversal
- Insertion
- Deletion
- Searching
- Sorting

Advantages:
- Fast access (O(1))
- Easy to implement

Disadvantages:
- Fixed size
- Costly insertion and deletion

Arrays are widely used in:
- Data storage
- Sorting algorithms
- Matrix operations
- Dynamic programming

Understanding arrays is crucial because many advanced data structures are built on top of them.
`,
  image: "/media/demo.png"
}
,
  {
  id: 4,
  title: "What is Recursion? Explained with Examples",
  slug: "what-is-recursion",
  description: "Understand recursion, base cases, and recursive problem solving.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Recursion is a programming technique where a function calls itself to solve a problem. It breaks a complex problem into smaller subproblems of the same type.

Two key components:
- Base case (stopping condition)
- Recursive case (function calling itself)

Example:
Calculating factorial of a number.

Advantages:
- Cleaner and readable code
- Ideal for tree and graph traversal

Disadvantages:
- Higher memory usage
- Risk of stack overflow

Recursion is heavily used in:
- Tree traversals
- Backtracking problems
- Divide and conquer algorithms

Understanding recursion is critical before learning dynamic programming.
`,
  image: "/media/demo.png"
}
,
  {
  id: 5,
  title: "Stack Data Structure Explained",
  slug: "stack-data-structure",
  description: "Understand LIFO principle and stack operations.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
A stack is a linear data structure that follows the Last In First Out (LIFO) principle. The last element inserted is the first one to be removed.

Core operations:
- Push
- Pop
- Peek

Applications:
- Function calls
- Undo/Redo operations
- Expression evaluation
- Browser navigation

Stacks can be implemented using arrays or linked lists.

Understanding stacks helps in learning recursion and memory management.
`,
  image: "/media/demo.png"
}
,
  {
  id: 6,
  title: "Queue Data Structure Explained",
  slug: "queue-data-structure",
  description: "Learn FIFO principle with real-world examples.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Queue follows First In First Out (FIFO) principle. Elements are inserted from the rear and removed from the front.

Types:
- Simple Queue
- Circular Queue
- Priority Queue
- Deque

Applications:
- CPU scheduling
- Task management
- Print spooling
- BFS traversal

Queues ensure fair processing and order preservation.
`,
  image: "/media/demo.png"
}
,
  {
  id: 7,
  title: "Binary Search Algorithm Explained",
  slug: "binary-search-algorithm",
  description: "Efficient searching technique for sorted arrays.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Binary search is an efficient searching algorithm that works on sorted arrays. It repeatedly divides the search space in half.

Steps:
1. Find middle element
2. Compare with target
3. Discard half accordingly

Time Complexity:
- Best: O(1)
- Worst: O(log n)

Binary search is widely used in databases, libraries, and system-level programs.
`,
  image: "/media/demo.png"
}
,
  {
  id: 8,
  title: "Sorting Algorithms Overview",
  slug: "sorting-algorithms-overview",
  description: "Introduction to common sorting algorithms.",
  category: "DATA STRUCTURES AND ALGORITHMS",
  content: `
Sorting arranges elements in a specific order. It improves searching efficiency and data presentation.

Common sorting algorithms:
- Bubble Sort
- Selection Sort
- Merge Sort
- Quick Sort

Sorting is a core concept used in almost every software application.
`,
  image: "/media/demo.png"
}
,

];

export default blogs;
