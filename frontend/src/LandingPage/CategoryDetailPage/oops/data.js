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
  },
];

export default blogs;
