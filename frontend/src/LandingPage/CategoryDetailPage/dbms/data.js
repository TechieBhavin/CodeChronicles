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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
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
    image: "/media/demo.png"
  },
    {
    id: 21,
    slug: "relational-algebra",
    title: "Relational Algebra in DBMS",
    excerpt:
      "Understand the basic operations of relational algebra used in DBMS.",
    content: `
Relational Algebra is a procedural query language.

Basic operations include:
- Selection
- Projection
- Union
- Set Difference
- Cartesian Product

It forms the foundation of SQL queries.
`,
    tags: ["DBMS", "Relational Algebra"],
    readTime: "8 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 22,
    slug: "relational-calculus",
    title: "Relational Calculus in DBMS",
    excerpt:
      "Learn how relational calculus differs from relational algebra.",
    content: `
Relational Calculus is a non-procedural query language.

Types:
- Tuple Relational Calculus (TRC)
- Domain Relational Calculus (DRC)

It focuses on what data is needed, not how to get it.
`,
    tags: ["DBMS", "Relational Calculus"],
    readTime: "7 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 23,
    slug: "functional-dependencies",
    title: "Functional Dependencies in DBMS",
    excerpt:
      "Understand functional dependencies and their role in normalization.",
    content: `
Functional dependency defines relationships between attributes.

Example:
If A → B, then A uniquely determines B.

Used to identify normalization rules.
`,
    tags: ["DBMS", "Normalization"],
    readTime: "8 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 24,
    slug: "lossless-decomposition",
    title: "Lossless Decomposition in DBMS",
    excerpt:
      "Learn how to decompose tables without losing data.",
    content: `
Lossless decomposition ensures no information loss.

Conditions:
- Common attribute
- Functional dependency preservation

Essential for good database design.
`,
    tags: ["DBMS", "Normalization"],
    readTime: "7 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 25,
    slug: "query-processing",
    title: "Query Processing in DBMS",
    excerpt:
      "Understand how DBMS executes SQL queries internally.",
    content: `
Query processing includes:
- Parsing
- Optimization
- Execution

Query optimizer selects the most efficient execution plan.
`,
    tags: ["DBMS", "Query Processing"],
    readTime: "9 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 26,
    slug: "query-optimization",
    title: "Query Optimization in DBMS",
    excerpt:
      "Learn how DBMS improves query execution performance.",
    content: `
Query optimization reduces execution cost.

Techniques:
- Index usage
- Join ordering
- Cost-based optimization

Critical for large datasets.
`,
    tags: ["DBMS", "Performance"],
    readTime: "8 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 27,
    slug: "distributed-dbms",
    title: "Distributed DBMS",
    excerpt:
      "Understand databases distributed across multiple locations.",
    content: `
Distributed DBMS stores data across multiple sites.

Advantages:
- Scalability
- Fault tolerance
- High availability

Challenges include data consistency.
`,
    tags: ["DBMS", "Distributed Systems"],
    readTime: "9 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 28,
    slug: "replication-in-dbms",
    title: "Replication in DBMS",
    excerpt:
      "Learn how data replication improves availability.",
    content: `
Replication copies data across multiple servers.

Types:
- Master-slave
- Master-master

Improves fault tolerance and performance.
`,
    tags: ["DBMS", "Replication"],
    readTime: "7 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 29,
    slug: "sharding-in-dbms",
    title: "Sharding in DBMS",
    excerpt:
      "Understand horizontal partitioning using sharding.",
    content: `
Sharding splits data across multiple databases.

Used for:
- Scalability
- Performance

Common in large-scale applications.
`,
    tags: ["DBMS", "Scalability"],
    readTime: "7 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 30,
    slug: "data-warehousing",
    title: "Data Warehousing",
    excerpt:
      "Learn the basics of data warehouses and OLAP systems.",
    content: `
A data warehouse stores historical data.

Used for:
- Reporting
- Analytics
- Decision making

Optimized for read operations.
`,
    tags: ["DBMS", "Data Warehouse"],
    readTime: "8 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 31,
    slug: "oltp-vs-olap",
    title: "OLTP vs OLAP",
    excerpt:
      "Compare transactional and analytical database systems.",
    content: `
OLTP:
- Day-to-day operations
- Fast transactions

OLAP:
- Analytics
- Complex queries

Both serve different purposes.
`,
    tags: ["DBMS", "OLTP", "OLAP"],
    readTime: "6 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 32,
    slug: "cap-theorem",
    title: "CAP Theorem in DBMS",
    excerpt:
      "Understand consistency, availability, and partition tolerance.",
    content: `
CAP theorem states:
A system can satisfy only two of the three:
- Consistency
- Availability
- Partition Tolerance

Important for distributed databases.
`,
    tags: ["DBMS", "Distributed Systems"],
    readTime: "7 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 33,
    slug: "nosql-types",
    title: "Types of NoSQL Databases",
    excerpt:
      "Explore key-value, document, column, and graph databases.",
    content: `
NoSQL database types:
- Key-value (Redis)
- Document (MongoDB)
- Column-based (Cassandra)
- Graph (Neo4j)

Used for flexible schemas.
`,
    tags: ["DBMS", "NoSQL"],
    readTime: "8 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 34,
    slug: "database-tuning",
    title: "Database Performance Tuning",
    excerpt:
      "Learn how to optimize database performance.",
    content: `
Performance tuning includes:
- Index optimization
- Query optimization
- Caching

Improves response time and throughput.
`,
    tags: ["DBMS", "Performance"],
    readTime: "7 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 35,
    slug: "cloud-databases",
    title: "Cloud Databases",
    excerpt:
      "Understand databases hosted on cloud platforms.",
    content: `
Cloud databases are managed services.

Examples:
- Amazon RDS
- Google Cloud SQL
- Azure SQL

Offer scalability and low maintenance.
`,
    tags: ["DBMS", "Cloud"],
    readTime: "6 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 36,
    slug: "database-migration",
    title: "Database Migration",
    excerpt:
      "Learn how databases are migrated between systems.",
    content: `
Database migration moves data between systems.

Types:
- Homogeneous
- Heterogeneous

Requires careful planning.
`,
    tags: ["DBMS", "Migration"],
    readTime: "6 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 37,
    slug: "metadata-in-dbms",
    title: "Metadata in DBMS",
    excerpt:
      "Understand the importance of metadata in databases.",
    content: `
Metadata describes database structure.

Includes:
- Table definitions
- Index info
- Constraints

Stored in system catalog.
`,
    tags: ["DBMS", "Metadata"],
    readTime: "5 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 38,
    slug: "database-locking",
    title: "Database Locking",
    excerpt:
      "Learn how locks maintain data consistency.",
    content: `
Locking prevents conflicts during transactions.

Types:
- Shared lock
- Exclusive lock

Essential for concurrency control.
`,
    tags: ["DBMS", "Concurrency"],
    readTime: "7 min",
    level: "Intermediate",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 39,
    slug: "two-phase-commit",
    title: "Two-Phase Commit Protocol",
    excerpt:
      "Understand how distributed transactions are committed.",
    content: `
Two-phase commit ensures atomicity.

Phases:
- Prepare
- Commit

Used in distributed databases.
`,
    tags: ["DBMS", "Distributed Systems"],
    readTime: "8 min",
    level: "Advanced",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  },

  {
    id: 40,
    slug: "database-design-best-practices",
    title: "Database Design Best Practices",
    excerpt:
      "Learn essential best practices for designing databases.",
    content: `
Good database design includes:
- Proper normalization
- Meaningful naming
- Indexing strategy
- Security planning

Leads to scalable systems.
`,
    tags: ["DBMS", "Design"],
    readTime: "6 min",
    level: "Beginner",
    category: "DATABASE MANAGEMENT SYSTEM",
    image: "/media/demo.png"
  }

];

export default blogs;
