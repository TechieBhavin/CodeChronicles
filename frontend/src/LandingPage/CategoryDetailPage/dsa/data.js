const blogs = [
  {
    id: 1,
    title: "Introduction to Data Structures and Algorithms",
    slug: "introduction-to-dsa",
    description: "Understand what DSA is, why it matters, and how it helps you write efficient code.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
DSA stands for Data Structures and Algorithms. Data structures manage how data is stored and accessed. Algorithms focus on processing this data. Examples of data structures are Array, Linked List, Tree and Heap, and examples of algorithms are Binary Search, Quick Sort and Merge Sort.

Foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications, etc

Top Companies like Google, Microsoft, Amazon, Apple, Meta and many other heavily focus on DSA in interviews.

Learning DSA boosts your problem-solving abilities and make you a stronger programmer.

1. Logic Building
Once you have learned basics of a programming language, it is recommended that you learn basic logic building
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
Time complexity measures how fast an algorithm runs.
Space complexity measures memory usage.

Big-O notation helps compare algorithm efficiency.
`,image: "/media/demo.png"
  },
  
  {
    id: 3,
    title: "Arrays in DSA: Concepts, Operations, and Examples",
    slug: "arrays-in-dsa",
    description: "A complete guide to arrays including insertion, deletion, and traversal.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Arrays store elements in contiguous memory locations.

They allow fast access but have fixed size limitations.
`,image: "/media/demo.png"
  },
  {
    id: 4,
    title: "Strings in Data Structures: Problems and Techniques",
    slug: "strings-in-dsa",
    description: "Learn common string operations and problem-solving techniques.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Strings are sequences of characters.

Common problems include palindrome checks, anagrams, and pattern matching.
`,image: "/media/demo.png"
  },
  {
    id: 5,
    title: "What is Recursion? Explained with Examples",
    slug: "what-is-recursion",
    description: "Understand recursion, base cases, and recursive problem solving.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Recursion is a technique where a function calls itself.

A base case is essential to stop infinite recursion.
`,image: "/media/demo.png"
  },
  {
    id: 6,
    title: "Linked List in Data Structures",
    slug: "linked-list-in-dsa",
    description: "Learn singly, doubly, and circular linked lists.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Linked lists store elements using nodes connected via pointers.

They allow dynamic memory allocation.
`,image: "/media/demo.png"
  },
  {
    id: 7,
    title: "Stack Data Structure Explained",
    slug: "stack-data-structure",
    description: "Understand LIFO principle and stack operations.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Stack follows Last In First Out (LIFO).

Operations include push, pop, and peek.
`,image: "/media/demo.png"
  },
  {
    id: 8,
    title: "Queue Data Structure Explained",
    slug: "queue-data-structure",
    description: "Learn FIFO principle with real-world examples.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Queue follows First In First Out (FIFO).

Variants include circular queue and priority queue.
`,image: "/media/demo.png"
  },
  {
    id: 9,
    title: "Binary Search Algorithm Explained",
    slug: "binary-search-algorithm",
    description: "Efficient searching technique for sorted arrays.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Binary search divides the array into halves.

Time complexity is O(log n).
`, image: "/media/demo.png"
  },
  {
    id: 10,
    title: "Linear Search vs Binary Search",
    slug: "linear-vs-binary-search",
    description: "Compare searching algorithms based on performance.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Linear search checks elements sequentially.
Binary search works only on sorted data.
`,image: "/media/demo.png"
  },
  {
    id: 11,
    title: "Sorting Algorithms Overview",
    slug: "sorting-algorithms-overview",
    description: "Introduction to common sorting algorithms.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Sorting arranges data in ascending or descending order.

Examples include bubble sort, merge sort, and quick sort.
`,image: "/media/demo.png"
  },
  {
    id: 12,
    title: "Bubble Sort Explained",
    slug: "bubble-sort-explained",
    description: "Understand bubble sort with step-by-step explanation.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Bubble sort repeatedly swaps adjacent elements.

Time complexity is O(n²).
`,image: "/media/demo.png"
  },
  {
    id: 13,
    title: "Merge Sort Explained",
    slug: "merge-sort-explained",
    description: "Learn divide and conquer sorting technique.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Merge sort divides array into halves and merges sorted halves.

Time complexity is O(n log n).
`,image: "/media/demo.png"
  },
  {
    id: 14,
    title: "Quick Sort Explained",
    slug: "quick-sort-explained",
    description: "Fast and efficient sorting algorithm.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Quick sort selects a pivot and partitions the array.

Average time complexity is O(n log n).
`,image: "/media/demo.png"
  },
  {
    id: 15,
    title: "What is Hashing?",
    slug: "what-is-hashing",
    description: "Understand hash tables and hash functions.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Hashing maps keys to values using hash functions.

It provides fast insertion and search.
`,image: "/media/demo.png"
  },
  {
    id: 16,
    title: "HashMap vs HashSet",
    slug: "hashmap-vs-hashset",
    description: "Compare HashMap and HashSet in detail.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
HashMap stores key-value pairs.
HashSet stores unique values only.
`,image: "/media/demo.png"
  },
  {
    id: 17,
    title: "Binary Tree Basics",
    slug: "binary-tree-basics",
    description: "Introduction to binary trees and terminology.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Binary tree has at most two children per node.

It is used in hierarchical data representation.
`,image: "/media/demo.png"
  },
  {
    id: 18,
    title: "Binary Search Tree Explained",
    slug: "binary-search-tree",
    description: "Understand BST properties and operations.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
In BST, left child < root < right child.

Search, insert, and delete are efficient.
`,image: "/media/demo.png"
  },
  {
    id: 19,
    title: "Tree Traversal Techniques",
    slug: "tree-traversal-techniques",
    description: "Learn inorder, preorder, and postorder traversal.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Traversal visits all nodes in a tree.

DFS includes inorder, preorder, and postorder.
`,image: "/media/demo.png"
  },
  {
    id: 20,
    title: "Introduction to Graph Data Structure",
    slug: "introduction-to-graphs",
    description: "Understand graphs, vertices, and edges.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Graphs consist of vertices and edges.

They represent networks like social media and maps.
`,image: "/media/demo.png"
  },
  {
    id: 21,
    title: "BFS and DFS Explained",
    slug: "bfs-and-dfs",
    description: "Understand graph traversal algorithms.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
BFS explores level by level.
DFS explores depth-first.
`,image: "/media/demo.png"
  },
  {
    id: 22,
    title: "Greedy Algorithms Explained",
    slug: "greedy-algorithms",
    description: "Learn greedy approach with examples.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Greedy algorithms choose locally optimal solutions.

They are fast but not always optimal.
`,image: "/media/demo.png"
  },
  {
    id: 23,
    title: "Dynamic Programming Introduction",
    slug: "dynamic-programming-introduction",
    description: "Learn how to optimize recursive problems.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Dynamic Programming stores results of subproblems.

It avoids redundant calculations.
`,image: "/media/demo.png"
  },
  {
    id: 24,
    title: "Kadane’s Algorithm Explained",
    slug: "kadanes-algorithm",
    description: "Efficient algorithm for maximum subarray sum.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Kadane’s algorithm runs in O(n) time.

It is used for subarray problems.
`,image: "/media/demo.png"
  },
  {
    id: 25,
    title: "Common DSA Interview Patterns",
    slug: "common-dsa-interview-patterns",
    description: "Learn patterns used to solve interview problems.",
    category: "DATA STRUCTURES AND ALGORITHMS",
    content: `
Patterns include sliding window, two pointers, and recursion.

Recognizing patterns improves problem-solving speed.
`,image: "/media/demo.png"
  }
];

export default blogs;
