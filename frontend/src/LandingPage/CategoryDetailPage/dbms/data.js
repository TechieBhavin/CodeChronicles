const blogs = [
  {
    id: 1,
    slug: "introduction-to-dbms",
    title: "Introduction to DBMS",
    excerpt:
      "Understand what a Database Management System is, its purpose, and why it is essential in modern applications.",
    content: `
A Database Management System (DBMS) is software that allows users to efficiently store, retrieve, manage, and manipulate data.

Instead of handling data manually using files, DBMS provides:
- Data abstraction
- Data consistency
- Security
- Backup and recovery

Popular DBMS examples include MySQL, PostgreSQL, MongoDB, Oracle, and SQL Server.
`,
    tags: ["DBMS", "Basics"],
    readTime: "6 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 2,
    slug: "file-system-vs-dbms",
    title: "File System vs DBMS",
    excerpt:
      "Learn the key differences between traditional file systems and modern DBMS solutions.",
    content: `
File systems store data in plain files, whereas DBMS uses structured databases.

Key differences:
- Data redundancy: High in file systems, low in DBMS
- Security: Limited vs Advanced
- Data consistency: Difficult vs Easy
- Query support: Manual vs SQL

DBMS is preferred for scalable and secure applications.
`,
    tags: ["DBMS", "Comparison"],
    readTime: "7 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 3,
    slug: "dbms-architecture",
    title: "DBMS Architecture Explained",
    excerpt:
      "Explore the 1-tier, 2-tier, and 3-tier architectures used in DBMS.",
    content: `
DBMS architecture defines how users interact with databases.

Types:
1. 1-Tier: Direct interaction (used locally)
2. 2-Tier: Client-server architecture
3. 3-Tier: Client, application server, and database server

3-tier architecture is widely used in web applications for better scalability.
`,
    tags: ["DBMS", "Architecture"],
    readTime: "8 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 4,
    slug: "data-models-in-dbms",
    title: "Data Models in DBMS",
    excerpt:
      "Understand different data models like hierarchical, network, relational, and ER model.",
    content: `
Data models define how data is stored and accessed.

Common models:
- Hierarchical Model
- Network Model
- Relational Model (most popular)
- Entity-Relationship (ER) Model

Relational model organizes data into tables using rows and columns.
`,
    tags: ["DBMS", "Data Models"],
    readTime: "7 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 5,
    slug: "er-model-in-dbms",
    title: "ER Model in DBMS",
    excerpt:
      "Learn about Entity Relationship Model and how it helps in database design.",
    content: `
ER Model visually represents database structure.

Components:
- Entity
- Attribute
- Relationship

It is widely used during database design before converting to relational schema.
`,
    tags: ["DBMS", "ER Model"],
    readTime: "6 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 6,
    slug: "keys-in-dbms",
    title: "Keys in DBMS",
    excerpt:
      "Understand primary key, foreign key, candidate key, and super key.",
    content: `
Keys uniquely identify records in a table.

Types of keys:
- Primary Key
- Foreign Key
- Candidate Key
- Super Key
- Composite Key

Keys help maintain data integrity and relationships between tables.
`,
    tags: ["DBMS", "Keys"],
    readTime: "7 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 7,
    slug: "constraints-in-dbms",
    title: "Constraints in DBMS",
    excerpt:
      "Learn how constraints enforce rules on database data.",
    content: `
Constraints ensure data validity.

Common constraints:
- NOT NULL
- UNIQUE
- PRIMARY KEY
- FOREIGN KEY
- CHECK

They prevent invalid data insertion into tables.
`,
    tags: ["DBMS", "Constraints"],
    readTime: "6 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 8,
    slug: "normalization-in-dbms",
    title: "Normalization in DBMS",
    excerpt:
      "Learn how normalization reduces redundancy and improves database design.",
    content: `
Normalization organizes data efficiently.

Normal forms:
- 1NF
- 2NF
- 3NF
- BCNF

Goal: Reduce redundancy and dependency.
`,
    tags: ["DBMS", "Normalization"],
    readTime: "9 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 9,
    slug: "denormalization-in-dbms",
    title: "Denormalization in DBMS",
    excerpt:
      "Understand when and why denormalization is used.",
    content: `
Denormalization intentionally adds redundancy to improve performance.

Used when:
- Read performance is critical
- Joins become expensive

It is the opposite of normalization.
`,
    tags: ["DBMS", "Performance"],
    readTime: "6 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 10,
    slug: "sql-vs-nosql",
    title: "SQL vs NoSQL Databases",
    excerpt:
      "Compare relational databases with NoSQL databases.",
    content: `
SQL databases:
- Structured schema
- ACID properties

NoSQL databases:
- Flexible schema
- Horizontal scalability

Examples: MySQL vs MongoDB
`,
    tags: ["DBMS", "SQL", "NoSQL"],
    readTime: "8 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 11,
    slug: "acid-properties",
    title: "ACID Properties in DBMS",
    excerpt:
      "Understand Atomicity, Consistency, Isolation, and Durability.",
    content: `
ACID ensures reliable transactions.

- Atomicity: All or nothing
- Consistency: Valid state
- Isolation: Concurrent safety
- Durability: Permanent changes

Critical for financial systems.
`,
    tags: ["DBMS", "Transactions"],
    readTime: "7 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 12,
    slug: "transactions-in-dbms",
    title: "Transactions in DBMS",
    excerpt:
      "Learn how transactions maintain database consistency.",
    content: `
A transaction is a set of operations executed as a single unit.

States:
- Active
- Committed
- Rolled back
- Failed

Transactions ensure reliability.
`,
    tags: ["DBMS", "Transactions"],
    readTime: "7 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 13,
    slug: "concurrency-control",
    title: "Concurrency Control in DBMS",
    excerpt:
      "Understand how DBMS handles multiple transactions simultaneously.",
    content: `
Concurrency control avoids conflicts between transactions.

Techniques:
- Lock-based protocol
- Timestamp ordering
- Optimistic concurrency

Prevents issues like dirty reads.
`,
    tags: ["DBMS", "Concurrency"],
    readTime: "9 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 14,
    slug: "deadlock-in-dbms",
    title: "Deadlock in DBMS",
    excerpt:
      "Learn what deadlocks are and how DBMS handles them.",
    content: `
Deadlock occurs when two transactions wait for each other indefinitely.

Handling methods:
- Prevention
- Avoidance
- Detection and recovery
`,
    tags: ["DBMS", "Deadlock"],
    readTime: "7 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 15,
    slug: "indexing-in-dbms",
    title: "Indexing in DBMS",
    excerpt:
      "Understand how indexing improves query performance.",
    content: `
Indexing speeds up data retrieval.

Types:
- Primary index
- Secondary index
- B-tree index
- Hash index

Indexes trade space for speed.
`,
    tags: ["DBMS", "Indexing"],
    readTime: "8 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 16,
    slug: "database-security",
    title: "Database Security",
    excerpt:
      "Learn how databases protect sensitive data.",
    content: `
Database security includes:
- Authentication
- Authorization
- Encryption
- Auditing

Essential for protecting user data.
`,
    tags: ["DBMS", "Security"],
    readTime: "6 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 17,
    slug: "backup-and-recovery",
    title: "Backup and Recovery in DBMS",
    excerpt:
      "Understand how DBMS handles system failures.",
    content: `
Backup and recovery ensure data safety.

Techniques:
- Full backup
- Incremental backup
- Log-based recovery

Critical for fault tolerance.
`,
    tags: ["DBMS", "Recovery"],
    readTime: "7 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 18,
    slug: "views-in-dbms",
    title: "Views in DBMS",
    excerpt:
      "Learn how views provide logical abstraction over tables.",
    content: `
A view is a virtual table created using SQL queries.

Advantages:
- Security
- Simplicity
- Data abstraction
`,
    tags: ["DBMS", "Views"],
    readTime: "5 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 19,
    slug: "stored-procedures",
    title: "Stored Procedures in DBMS",
    excerpt:
      "Understand stored procedures and their benefits.",
    content: `
Stored procedures are precompiled SQL statements.

Benefits:
- Performance
- Reusability
- Security
`,
    tags: ["DBMS", "SQL"],
    readTime: "6 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },

  {
    id: 20,
    slug: "triggers-in-dbms",
    title: "Triggers in DBMS",
    excerpt:
      "Learn how triggers automatically execute SQL logic.",
    content: `
Triggers execute automatically in response to events like INSERT or UPDATE.

Used for:
- Logging
- Validation
- Automation
`,
    tags: ["DBMS", "Triggers"],
    readTime: "6 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
  },
];

export default blogs;
