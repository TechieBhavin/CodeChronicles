const blogs = [
  {
    id: 1,
    slug: "introduction-to-oops",
    title: "Introduction to Object-Oriented Programming",
    excerpt:
      "Understand what OOP is and why it is widely used in modern software development.",
    content: `
Object-Oriented Programming (OOP) is a programming paradigm based on objects and classes.

OOP focuses on:
- Code reusability
- Scalability
- Maintainability

Languages like Java, C++, Python, and C# use OOP principles.
`,
    tags: ["OOPs", "Basics"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 2,
    slug: "class-and-object",
    title: "Classes and Objects in OOP",
    excerpt:
      "Learn how classes and objects form the foundation of OOP.",
    content: `
A class is a blueprint, while an object is an instance of a class.

Class defines:
- Properties (variables)
- Behavior (methods)

Objects represent real-world entities in programs.
`,
    tags: ["OOPs", "Core Concepts"],
    readTime: "7 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 3,
    slug: "four-pillars-of-oops",
    title: "Four Pillars of OOP",
    excerpt:
      "Understand encapsulation, abstraction, inheritance, and polymorphism.",
    content: `
The four pillars of OOP are:

1. Encapsulation – Wrapping data and methods
2. Abstraction – Hiding implementation details
3. Inheritance – Acquiring properties from parent class
4. Polymorphism – One interface, many forms

These concepts make code modular and reusable.
`,
    tags: ["OOPs", "Concepts"],
    readTime: "8 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 4,
    slug: "encapsulation-explained",
    title: "Encapsulation Explained",
    excerpt:
      "Learn how encapsulation helps protect data.",
    content: `
Encapsulation binds data and methods together and restricts direct access.

Benefits:
- Data security
- Controlled access using getters/setters
`,
    tags: ["OOPs", "Encapsulation"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 5,
    slug: "abstraction-in-oops",
    title: "Abstraction in OOP",
    excerpt:
      "Understand abstraction using interfaces and abstract classes.",
    content: `
Abstraction hides implementation and shows only functionality.

Achieved using:
- Abstract classes
- Interfaces
`,
    tags: ["OOPs", "Abstraction"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 6,
    slug: "inheritance-in-oops",
    title: "Inheritance in OOP",
    excerpt:
      "Learn how inheritance promotes code reusability.",
    content: `
Inheritance allows a class to acquire properties of another class.

Types:
- Single
- Multilevel
- Hierarchical
`,
    tags: ["OOPs", "Inheritance"],
    readTime: "7 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 7,
    slug: "polymorphism-in-oops",
    title: "Polymorphism in OOP",
    excerpt:
      "Understand compile-time and runtime polymorphism.",
    content: `
Polymorphism allows one interface to be used for different implementations.

Types:
- Method overloading
- Method overriding
`,
    tags: ["OOPs", "Polymorphism"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 8,
    slug: "constructor-and-destructor",
    title: "Constructors and Destructors",
    excerpt:
      "Learn how object initialization and cleanup works.",
    content: `
Constructors initialize objects when created.

Destructors release resources when object is destroyed.
`,
    tags: ["OOPs", "Classes"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 9,
    slug: "interface-vs-abstract-class",
    title: "Interface vs Abstract Class",
    excerpt:
      "Compare interfaces and abstract classes with examples.",
    content: `
Interfaces define contracts; abstract classes provide partial implementation.

Key difference:
- Interfaces support multiple inheritance
- Abstract classes support method definitions
`,
    tags: ["OOPs", "Comparison"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 10,
    slug: "solid-principles",
    title: "SOLID Principles in OOP",
    excerpt:
      "Learn five principles for writing clean OOP code.",
    content: `
SOLID principles:
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

Used in large-scale applications.
`,
    tags: ["OOPs", "Design"],
    readTime: "9 min",
    level: "Advanced",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },
    {
    id: 11,
    slug: "method-overloading",
    title: "Method Overloading in OOP",
    excerpt: "Understand compile-time polymorphism using method overloading.",
    content: `
Method overloading allows multiple methods with the same name but different parameters.

It improves code readability and flexibility.

Resolved at compile time.
`,
    tags: ["OOPs", "Polymorphism"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 12,
    slug: "method-overriding",
    title: "Method Overriding in OOP",
    excerpt: "Learn runtime polymorphism using method overriding.",
    content: `
Method overriding allows a subclass to redefine a parent class method.

Resolved at runtime.

Used to achieve dynamic behavior.
`,
    tags: ["OOPs", "Polymorphism"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 13,
    slug: "access-modifiers",
    title: "Access Modifiers in OOP",
    excerpt: "Understand public, private, protected, and default access.",
    content: `
Access modifiers control visibility of data and methods.

Types:
- Public
- Private
- Protected
- Default

They enforce encapsulation.
`,
    tags: ["OOPs", "Encapsulation"],
    readTime: "7 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 14,
    slug: "this-and-super-keywords",
    title: "this and super Keywords",
    excerpt: "Learn how this and super keywords work in OOP.",
    content: `
this refers to current class object.
super refers to parent class object.

Used to access variables, methods, and constructors.
`,
    tags: ["OOPs", "Keywords"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 15,
    slug: "static-keyword",
    title: "Static Keyword in OOP",
    excerpt: "Understand static variables, methods, and blocks.",
    content: `
Static members belong to the class, not objects.

Used for:
- Utility methods
- Shared data
`,
    tags: ["OOPs", "Keywords"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 16,
    slug: "final-keyword",
    title: "Final Keyword in OOP",
    excerpt: "Learn how final prevents modification and inheritance.",
    content: `
final keyword can be applied to:
- Variables (constant)
- Methods (cannot override)
- Classes (cannot inherit)
`,
    tags: ["OOPs", "Keywords"],
    readTime: "5 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 17,
    slug: "object-class",
    title: "Object Class in OOP",
    excerpt: "Understand the root class of all objects.",
    content: `
Object class is the parent of all classes.

Common methods:
- toString()
- equals()
- hashCode()
`,
    tags: ["OOPs", "Core Concepts"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 18,
    slug: "composition-vs-inheritance",
    title: "Composition vs Inheritance",
    excerpt: "Understand HAS-A vs IS-A relationships.",
    content: `
Inheritance represents IS-A relationship.
Composition represents HAS-A relationship.

Composition is more flexible than inheritance.
`,
    tags: ["OOPs", "Design"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 19,
    slug: "aggregation-vs-composition",
    title: "Aggregation vs Composition",
    excerpt: "Learn object relationships in OOP.",
    content: `
Aggregation is weak association.
Composition is strong association.

Both represent HAS-A relationship.
`,
    tags: ["OOPs", "Relationships"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 20,
    slug: "shallow-vs-deep-copy",
    title: "Shallow Copy vs Deep Copy",
    excerpt: "Understand object copying mechanisms.",
    content: `
Shallow copy copies references.
Deep copy copies actual objects.

Important for memory management.
`,
    tags: ["OOPs", "Memory"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 21,
    slug: "exception-handling",
    title: "Exception Handling in OOP",
    excerpt: "Learn how to handle runtime errors gracefully.",
    content: `
Exception handling avoids program crashes.

Keywords:
- try
- catch
- finally
- throw
`,
    tags: ["OOPs", "Exception"],
    readTime: "7 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 22,
    slug: "custom-exceptions",
    title: "Custom Exceptions in OOP",
    excerpt: "Create your own exception classes.",
    content: `
Custom exceptions improve error clarity.

Used in large-scale applications.
`,
    tags: ["OOPs", "Exception"],
    readTime: "6 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 23,
    slug: "memory-management",
    title: "Memory Management in OOP",
    excerpt: "Understand stack vs heap memory.",
    content: `
Objects are stored in heap memory.

Local variables are stored in stack.

Garbage collection frees unused objects.
`,
    tags: ["OOPs", "Memory"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 24,
    slug: "garbage-collection",
    title: "Garbage Collection in OOP",
    excerpt: "Learn how unused objects are removed from memory.",
    content: `
Garbage collector frees unused memory.

Improves application performance.

Automatic in languages like Java.
`,
    tags: ["OOPs", "Memory"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 25,
    slug: "design-patterns-intro",
    title: "Introduction to Design Patterns",
    excerpt: "Understand reusable solutions to common problems.",
    content: `
Design patterns provide standard solutions.

Categories:
- Creational
- Structural
- Behavioral
`,
    tags: ["OOPs", "Design Patterns"],
    readTime: "8 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 26,
    slug: "singleton-pattern",
    title: "Singleton Design Pattern",
    excerpt: "Ensure only one instance of a class exists.",
    content: `
Singleton restricts object creation.

Used in:
- Logging
- Configuration
`,
    tags: ["OOPs", "Design Patterns"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 27,
    slug: "factory-pattern",
    title: "Factory Design Pattern",
    excerpt: "Create objects without exposing instantiation logic.",
    content: `
Factory pattern provides object creation logic.

Improves loose coupling.
`,
    tags: ["OOPs", "Design Patterns"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 28,
    slug: "observer-pattern",
    title: "Observer Design Pattern",
    excerpt: "Understand event-based communication.",
    content: `
Observer pattern notifies dependent objects.

Used in event handling systems.
`,
    tags: ["OOPs", "Design Patterns"],
    readTime: "7 min",
    level: "Advanced",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 29,
    slug: "dependency-injection",
    title: "Dependency Injection in OOP",
    excerpt: "Understand loose coupling using dependency injection.",
    content: `
Dependency injection removes hard dependencies.

Improves testability and scalability.
`,
    tags: ["OOPs", "Design"],
    readTime: "8 min",
    level: "Advanced",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 30,
    slug: "oop-interview-questions",
    title: "Common OOP Interview Questions",
    excerpt: "Prepare important OOP interview questions.",
    content: `
Covers:
- Core OOP concepts
- Design principles
- Real-world scenarios

Helpful for freshers and experienced developers.
`,
    tags: ["OOPs", "Interview"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 31,
    slug: "oops-real-world-examples",
    title: "OOP Concepts with Real World Examples",
    excerpt: "Understand OOP using practical examples.",
    content: `
Examples:
- Car as object
- Bank account system
- Library management

Improves conceptual clarity.
`,
    tags: ["OOPs", "Examples"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 32,
    slug: "oop-best-practices",
    title: "Best Practices in OOP",
    excerpt: "Write clean and maintainable OOP code.",
    content: `
Best practices include:
- Single responsibility
- Loose coupling
- Meaningful naming
`,
    tags: ["OOPs", "Best Practices"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 33,
    slug: "oop-vs-procedural",
    title: "OOP vs Procedural Programming",
    excerpt: "Compare object-oriented and procedural paradigms.",
    content: `
Procedural focuses on functions.
OOP focuses on objects.

OOP is more scalable.
`,
    tags: ["OOPs", "Comparison"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 34,
    slug: "oop-in-java",
    title: "OOP Concepts in Java",
    excerpt: "Learn how Java implements OOP.",
    content: `
Java supports full OOP features.

Used widely in enterprise applications.
`,
    tags: ["OOPs", "Java"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 35,
    slug: "oop-in-python",
    title: "OOP Concepts in Python",
    excerpt: "Understand OOP implementation in Python.",
    content: `
Python supports OOP with simplicity.

Everything is an object.
`,
    tags: ["OOPs", "Python"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 36,
    slug: "oop-in-cpp",
    title: "OOP Concepts in C++",
    excerpt: "Learn how C++ supports object-oriented programming.",
    content: `
C++ supports both procedural and OOP paradigms.

Used in system-level software.
`,
    tags: ["OOPs", "C++"],
    readTime: "6 min",
    level: "Beginner",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 37,
    slug: "oop-in-javascript",
    title: "OOP Concepts in JavaScript",
    excerpt: "Understand OOP using prototypes and classes.",
    content: `
JavaScript uses prototype-based inheritance.

ES6 introduced class syntax.
`,
    tags: ["OOPs", "JavaScript"],
    readTime: "7 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 38,
    slug: "object-cloning",
    title: "Object Cloning in OOP",
    excerpt: "Learn how objects are duplicated.",
    content: `
Object cloning creates copy of objects.

Can be shallow or deep.
`,
    tags: ["OOPs", "Objects"],
    readTime: "6 min",
    level: "Intermediate",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 39,
    slug: "serialization-deserialization",
    title: "Serialization and Deserialization",
    excerpt: "Understand object persistence techniques.",
    content: `
Serialization converts object to byte stream.

Used in file storage and network transfer.
`,
    tags: ["OOPs", "Advanced"],
    readTime: "7 min",
    level: "Advanced",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  },

  {
    id: 40,
    slug: "oop-system-design-basics",
    title: "OOP for System Design Basics",
    excerpt: "Learn how OOP helps in system design.",
    content: `
OOP concepts are foundation of system design.

Used in scalable architectures and real-world systems.
`,
    tags: ["OOPs", "System Design"],
    readTime: "8 min",
    level: "Advanced",
    category: "OBJECT ORIENTED PROGRAMMING",
    image: "/media/demo.png"
  }

];

export default blogs;
