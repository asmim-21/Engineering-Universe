export default {
  id: 'oop',
  title: 'OOP — Object-Oriented Programming',
  tone: 'c5',
  blurb: 'Classes, encapsulation, inheritance, polymorphism, interfaces, and designing with objects.',
  tags: ['OOP', 'Design', 'Classes', 'Patterns'],
  popups: [
    {
      id: 'classes-vs-objects',
      title: 'Classes vs Objects',
      blurb: 'What a class is, what an object is, state and behaviour, instantiation.',
      whatIs: {
        text: 'A class is a blueprint. An object is an instance of that blueprint. Classes define state (data) and behaviour (methods).',
        ensures: [
          'Understand the class-as-blueprint metaphor',
          'Understand instantiation: creating objects from classes',
          'Understand state: data members',
          'Understand behaviour: methods',
          'Understand that multiple objects can be instances of one class'
        ]
      },
      example: {
        title: 'Class and object',
        items: [
          'Class `Dog`: blueprint for dogs',
          'Object `myDog`: a specific dog instance',
          'State: `name`, `age`, `breed`',
          'Behaviour: `bark()`, `fetch()`, `sleep()`',
          'Two Dog objects: `myDog` and `yourDog` — different state'
        ]
      },
      who: ['You'],
      takeaways: [
        'A class defines what all objects of that type are like.',
        'An object is a specific instance with specific state.',
        'Objects encapsulate state and behaviour together.',
        'Methods operate on the object they are called on.',
        'Constructor: special method called when creating an object.'
      ],
      reflection: 'Design a class for a bank account. What is state? What is behaviour?',
      checks: [
        'What is the difference between a class and an object?',
        'What is state?',
        'What is behaviour?',
        'What is a constructor?',
        'Can two objects of the same class have different state?'
      ]
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation & Invariants',
      blurb: 'Hiding internal state, getters/setters, guarding invariants, and designing class contracts.',
      whatIs: {
        text: 'Encapsulation hides how an object works. You expose only what is necessary and protect internal state with invariants.',
        ensures: [
          'Understand public vs private',
          'Use getters and setters to control access',
          'Understand invariants: rules that must always be true',
          'Guard against invalid state',
          'Design stable interfaces'
        ]
      },
      example: {
        title: 'Encapsulation and invariants',
        items: [
          'Private `_balance`: only methods can change it',
          'Public `getBalance()`: read-only access',
          'Public `deposit(amount)`: guarded, checks amount > 0',
          'Public `withdraw(amount)`: guarded, checks balance >= amount',
          'Invariant: balance is never negative'
        ]
      },
      who: ['You'],
      takeaways: [
        'Encapsulation: hide internal details, expose only necessary.',
        'Invariants: conditions that must remain true (e.g., balance >= 0).',
        'Setters are guardians: check preconditions before changing state.',
        'Testing invariants: unit tests verify that operations maintain them.',
        'Defensive copying: return copies of internal collections to prevent external modification.'
      ],
      reflection: 'What would happen if balance could be set directly to a negative number? What invariant breaks?',
      checks: [
        'What is encapsulation?',
        'What is an invariant?',
        'Why use getters and setters?',
        'When should something be private?',
        'How do you guard an invariant?'
      ]
    },
    {
      id: 'references-identity',
      title: 'References, Identity & Equality',
      blurb: 'Aliasing, value vs reference, heap and garbage collection, identity vs equality.',
      whatIs: {
        text: 'Objects live on the heap. Variables are references to them. Two references can point to the same object (aliasing). Identity (`==`) and equality (`.equals()`) are different.',
        ensures: [
          'Understand heap allocation for objects',
          'Understand references: variables that point to objects',
          'Understand aliasing: multiple references to one object',
          'Understand identity: same object in memory',
          'Understand equality: same logical value',
          'Understand `null` references and garbage collection'
        ]
      },
      example: {
        title: 'References and identity',
        items: [
          '`Dog myDog = new Dog("Buddy");` — object on heap, myDog references it',
          '`Dog yourDog = myDog;` — aliasing: both reference the same object',
          '`yourDog.bark();` — calls method on shared object',
          '`myDog == yourDog` — true (same identity)',
          '`Dog otherDog = new Dog("Buddy");` — different object, same name',
          '`myDog == otherDog` — false (different identity)',
          '`myDog.equals(otherDog)` — depends on implementation'
        ]
      },
      who: ['You'],
      takeaways: [
        'Reference: a variable that points to an object on the heap.',
        'Aliasing: multiple variables pointing to the same object.',
        'Changing via one alias affects all: `yourDog.setAge(5)` affects `myDog`.',
        '`==` checks if references are identical (same object in memory).',
        '`.equals()` checks if objects are logically equivalent (override it for your classes).',
        '`null`: a reference that points to nothing — always check before using.',
        'Garbage collection: the JVM frees objects when no references remain.'
      ],
      reflection: 'If you change a Dog object via one reference, do all other references see the change?',
      checks: [
        'What is a reference?',
        'What is aliasing?',
        'What is the difference between `==` and `.equals()`?',
        'What is `null`?',
        'What is garbage collection?'
      ]
    },
    {
      id: 'specs-contracts',
      title: 'Specs & Contracts',
      blurb: 'Preconditions, postconditions, abstraction barriers, and test-first thinking.',
      whatIs: {
        text: 'A spec is a contract: preconditions (what must be true before), postconditions (what is guaranteed after), and side effects.',
        ensures: [
          'Understand preconditions: what the caller must ensure',
          'Understand postconditions: what the method guarantees',
          'Design with contracts in mind',
          'Write test-first to clarify specs',
          'Use partitions and boundaries to test thoroughly'
        ]
      },
      example: {
        title: 'Specifications and contracts',
        items: [
          '`public void deposit(double amount)` — Precondition: amount > 0; Postcondition: balance increased',
          '`public String substring(int start, int end)` — Precondition: 0 <= start <= end <= length(); Postcondition: returns substring',
          'Test precondition: what if amount <= 0?',
          'Test postcondition: is balance correct after?',
          'Test boundary: amount = 0 (boundary), amount = 1 (edge)'
        ]
      },
      who: ['You'],
      takeaways: [
        'Spec-driven design: write specs first, then implementation.',
        'Precondition: what the caller promises.',
        'Postcondition: what the method promises in return.',
        'Partitions: groups of related inputs (positive, negative, zero).',
        'Boundary: edge values (empty, size 1, maximum, etc.).',
        'Test-first: write tests for the contract, then code to satisfy it.'
      ],
      reflection: 'Write a spec for a method that finds the maximum value in an array. What are preconditions, postconditions, and edge cases?',
      checks: [
        'What is a precondition?',
        'What is a postcondition?',
        'What are test partitions?',
        'Why test boundaries?',
        'Why write specs before code?'
      ]
    },
    {
      id: 'interfaces-polymorphism',
      title: 'Interfaces & Polymorphism',
      blurb: 'Defining contracts, subtyping, Liskov substitution, dynamic dispatch, and programming to interfaces.',
      whatIs: {
        text: 'An interface defines a contract: what methods an object must have. Polymorphism: call a method on an interface reference, the right implementation runs.',
        ensures: [
          'Understand interfaces as contracts',
          'Understand subtyping: a concrete class implements an interface',
          'Understand Liskov Substitution Principle: subtypes are substitutable',
          'Understand dynamic dispatch: correct method called at runtime',
          'Program to interfaces, not implementations'
        ]
      },
      example: {
        title: 'Interfaces and polymorphism',
        items: [
          '`interface Animal { void makeSound(); }` — interface defines contract',
          '`class Dog implements Animal { ... }` — Dog implements interface',
          '`Animal a = new Dog();` — reference is interface, object is Dog',
          '`a.makeSound();` — calls Dog.makeSound() at runtime (dynamic dispatch)',
          '`List<Animal> animals = new ArrayList<>();` — list of interface references',
          'Can hold any Animal: Dog, Cat, Bird — all compatible'
        ]
      },
      who: ['You'],
      takeaways: [
        'Interface: what you must do, not how you do it.',
        'Implements: a class agrees to implement an interface.',
        'Subtyping: Dog is an Animal; Dog references are assignable to Animal references.',
        'Liskov Substitution: if it implements Animal, it is usable anywhere Animal is expected.',
        'Dynamic dispatch: which method runs is decided at runtime based on the actual object.',
        'Program to interfaces: makes code flexible and testable.'
      ],
      reflection: 'If Animal.makeSound() is called, how does the JVM know to run Dog.makeSound()?',
      checks: [
        'What is an interface?',
        'What is the Liskov Substitution Principle?',
        'What is dynamic dispatch?',
        'Why program to interfaces?',
        'Can you create an instance of an interface?'
      ]
    },
    {
      id: 'inheritance-composition',
      title: 'Inheritance & Composition',
      blurb: 'IS-A vs HAS-A, fragile base class, and choosing between inheritance and composition.',
      whatIs: {
        text: 'Inheritance (IS-A): a subclass is a specialization of a superclass. Composition (HAS-A): an object contains other objects. Choose carefully.',
        ensures: [
          'Understand inheritance: subclass inherits and can override',
          'Understand composition: object contains other objects',
          'Know the fragile base class problem',
          'Know when inheritance is appropriate',
          'Know when composition is better'
        ]
      },
      example: {
        title: 'Inheritance vs composition',
        items: [
          'Inheritance: `class Cat extends Animal { }` — Cat IS-A Animal',
          'Composition: `class Car { Engine engine; }` — Car HAS-A Engine',
          'Fragile base class: changing superclass breaks subclasses',
          'Composition avoids this: Engine is independent',
          'Rule of thumb: composition over inheritance'
        ]
      },
      who: ['You'],
      takeaways: [
        'IS-A: Cat is an Animal; use inheritance.',
        'HAS-A: Car has an Engine; use composition.',
        'Fragile base class: changing a superclass can break subclasses that override methods.',
        'Composition is more flexible: change the contained object independently.',
        'Multiple inheritance: complex; composition is often clearer.',
        'Inheritance depth: shallow hierarchies are clearer than deep trees.'
      ],
      reflection: 'Design a class hierarchy for vehicles. Use both inheritance and composition.',
      checks: [
        'What is IS-A?',
        'What is HAS-A?',
        'What is the fragile base class problem?',
        'When is inheritance appropriate?',
        'When is composition better?'
      ]
    },
    {
      id: 'generics-collections',
      title: 'Generics & Collections',
      blurb: 'Type parameters, bounds, variance, abstract data types, and the collections framework.',
      whatIs: {
        text: 'Generics let you write type-safe code that works with many types. Collections are data structures that use generics.',
        ensures: [
          'Understand type parameters: `<T>`',
          'Understand type bounds: restricting what T can be',
          'Understand variance: covariance and contravariance',
          'Use common collections: List, Set, Map',
          'Understand iterators and for-each loops'
        ]
      },
      example: {
        title: 'Generics and collections',
        items: [
          '`class Box<T> { T contents; }` — generic class',
          '`Box<String> box = new Box<>();` — type-specific',
          '`<T extends Animal> void process(T t)` — bounded type parameter',
          '`List<String> list = new ArrayList<>();` — collection with generics',
          '`Map<String, Integer> map = new HashMap<>();` — key-value generics',
          '`for (String s : list) { }` — for-each uses iterator'
        ]
      },
      who: ['You'],
      takeaways: [
        'Generic: one implementation, many types — type-safe at compile time.',
        'Type erasure: generics are removed at runtime (Java limitation).',
        'Type bounds: `<T extends Number>` restricts T to Number subclasses.',
        'Covariance: `List<? extends Animal>` allows reading.',
        'Contravariance: `List<? super Animal>` allows writing.',
        'Collections: List (ordered), Set (unique), Map (key-value).'
      ],
      reflection: 'Why is `List<String>` type-safe, but a raw `List` is not?',
      checks: [
        'What is a type parameter?',
        'What are type bounds?',
        'What is type erasure?',
        'What is covariance?',
        'What is contravariance?'
      ]
    },
    {
      id: 'exceptions-debugging',
      title: 'Exceptions & Debugging',
      blurb: 'Exception hierarchies, checked vs unchecked, stack traces, and debugging strategies.',
      whatIs: {
        text: 'Exceptions signal errors. Handle them or they propagate up. Read stack traces to find the root cause.',
        ensures: [
          'Understand exception hierarchy',
          'Distinguish checked vs unchecked',
          'Catch specific exceptions',
          'Read and understand stack traces',
          'Create custom exceptions',
          'Use try-with-resources for cleanup'
        ]
      },
      example: {
        title: 'Exceptions and debugging',
        items: [
          '`try { risky(); } catch (IOException e) { }` — catch checked exception',
          '`catch (NullPointerException e) { }` — catch unchecked exception',
          '`throw new IllegalArgumentException("message");` — raise exception',
          '`class MyException extends Exception { }` — custom exception',
          '`try (FileReader f = new FileReader(file)) { }` — resource closes automatically',
          'Stack trace: shows method call chain to the error'
        ]
      },
      who: ['You'],
      takeaways: [
        'Exception hierarchy: Throwable → Exception → checked/unchecked.',
        'Checked: must declare or catch (IOException, SQLException).',
        'Unchecked: can leave unhandled (NullPointerException, IllegalArgumentException).',
        'Stack trace: read bottom-to-top to find where the error started.',
        'Try-with-resources: automatically closes anything implementing AutoCloseable.',
        'Custom exceptions: extend Exception or a specific subclass.'
      ],
      reflection: 'If a method throws a checked exception, what are your options?',
      checks: [
        'What is the difference between checked and unchecked exceptions?',
        'How do you create a custom exception?',
        'What does a stack trace show?',
        'How do you read a stack trace?',
        'What is try-with-resources?'
      ]
    }
  ]
}
