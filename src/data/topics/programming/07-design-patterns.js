export default {
  id: 'design-patterns',
  title: 'Design Patterns',
  tone: 'c7',
  blurb: 'Proven solutions to common problems: Singleton, Factory, Builder, Adapter, Decorator, Observer, Strategy.',
  tags: ['Patterns', 'Design', 'Reuse', 'Solutions'],
  popups: [
    {
      id: 'singleton',
      title: 'Singleton',
      blurb: 'Ensuring only one instance of a class exists.',
      whatIs: {
        text: 'Singleton: a class with only one instance, globally accessible. Use when you need exactly one of something.',
        ensures: [
          'Understand lazy initialization',
          'Understand eager initialization',
          'Implement thread-safe Singleton',
          'Know when Singleton is and is not appropriate'
        ]
      },
      example: {
        title: 'Singleton pattern',
        items: [
          'Database connection pool: only one pool per application',
          'Logger: one logger instance for entire app',
          'Configuration manager: one set of configs',
          'Eager: create instance when class loads',
          'Lazy: create instance on first use'
        ]
      },
      who: ['You'],
      takeaways: [
        'Singleton: static field holding the single instance.',
        'Private constructor: prevents `new ClassName()`.',
        'Public static method: `getInstance()` returns the instance.',
        'Eager: instantiate in static initializer (simple, thread-safe).',
        'Lazy: instantiate in getInstance() (uses memory only if needed).',
        'Pitfall: Singletons make testing harder (hard to mock); use dependency injection instead.'
      ],
      reflection: 'When would Singleton be a bad design choice?',
      checks: [
        'What is a Singleton?',
        'How do you implement Singleton?',
        'What is the difference between eager and lazy initialization?',
        'Why use Singleton?',
        'What is a pitfall of Singleton?'
      ]
    },
    {
      id: 'factory-method',
      title: 'Factory Method',
      blurb: 'Delegating object creation to a method.',
      whatIs: {
        text: 'Factory method: a method that creates objects. Decouples creation from the caller.',
        ensures: [
          'Understand object creation decoupling',
          'Implement factory methods',
          'Use factory for polymorphic creation',
          'Know when Factory is useful'
        ]
      },
      example: {
        title: 'Factory method pattern',
        items: [
          'Instead of: `Dog dog = new Dog();`',
          'Factory method: `Animal animal = AnimalFactory.create("dog");`',
          'Factory returns correct subclass based on type',
          'Caller does not know concrete class',
          'Easy to add new types without changing caller'
        ]
      },
      who: ['You'],
      takeaways: [
        'Factory: a method that creates and returns objects.',
        'Hides which concrete class is instantiated.',
        'Useful for polymorphic creation: type parameter determines subclass.',
        'Centralizes creation logic: changes to constructors in one place.',
        'Abstract factory: multiple related factories for families of objects.',
        'When to use: complex construction, multiple implementations, external control over type.'
      ],
      reflection: 'How would you use Factory to support JSON parsing from multiple formats?',
      checks: [
        'What is a Factory method?',
        'How does it decouple creation?',
        'When is Factory useful?',
        'What is abstract factory?'
      ]
    },
    {
      id: 'builder',
      title: 'Builder',
      blurb: 'Constructing complex objects step by step.',
      whatIs: {
        text: 'Builder: separate the construction of an object from its representation. Build step by step.',
        ensures: [
          'Understand immutable objects',
          'Implement fluent builder API',
          'Use for objects with many optional parameters',
          'Know when Builder is useful'
        ]
      },
      example: {
        title: 'Builder pattern',
        items: [
          'Instead of: `new Car(color, doors, engine, transmission, ...)`',
          'Builder: `new CarBuilder().setColor("red").setDoors(4).setEngine("V8").build();`',
          'Builder stores state during construction',
          'Build() creates the final immutable object',
          'Easy to read; optional parameters are clear'
        ]
      },
      who: ['You'],
      takeaways: [
        'Builder: fluent API for constructing complex objects.',
        'Fluent: each setter returns `this` for chaining.',
        'Immutable result: object created by build() does not change.',
        'Optional parameters: omit setters for defaults.',
        'Readable: construction is clear from method names.',
        'When to use: many parameters, optional parameters, complex construction.'
      ],
      reflection: 'How would you use Builder to construct a SQL query?',
      checks: [
        'What is a Builder?',
        'What is fluent API?',
        'When is Builder useful?',
        'What is an immutable object?'
      ]
    },
    {
      id: 'adapter',
      title: 'Adapter',
      blurb: 'Bridging incompatible interfaces.',
      whatIs: {
        text: 'Adapter: convert the interface of one class to match what a client expects. Bridge incompatibilities.',
        ensures: [
          'Understand interface incompatibility',
          'Implement class adapter (inheritance)',
          'Implement object adapter (composition)',
          'Know when Adapter is useful'
        ]
      },
      example: {
        title: 'Adapter pattern',
        items: [
          'Legacy code uses `LegacyDataReader` with method `readData()`',
          'New code expects `DataSource` interface with method `getData()`',
          'Adapter class: implements `DataSource`, wraps `LegacyDataReader`',
          'Adapter translates `getData()` calls to `readData()`',
          'Caller uses new interface without knowing about legacy class'
        ]
      },
      who: ['You'],
      takeaways: [
        'Adapter: implements target interface, delegates to adaptee.',
        'Class adapter: extends existing class (inheritance).',
        'Object adapter: composes existing class (composition).',
        'Composition preferred: more flexible, no multiple inheritance issues.',
        'When to use: integrating legacy code, using third-party libraries, standardizing interfaces.',
        'Similar to decorator: adapter changes interface; decorator adds behavior.'
      ],
      reflection: 'How would you adapt a CSV reader to work with code expecting a JSON reader interface?',
      checks: [
        'What is an Adapter?',
        'What is the difference between class and object adapter?',
        'When is Adapter useful?',
        'How does it differ from Decorator?'
      ]
    },
    {
      id: 'decorator',
      title: 'Decorator',
      blurb: 'Adding behaviour without subclassing.',
      whatIs: {
        text: 'Decorator: wrap an object to add behavior dynamically. Alternative to inheritance.',
        ensures: [
          'Understand dynamic behavior addition',
          'Implement decorator pattern',
          'Understand difference from inheritance',
          'Know when Decorator is useful'
        ]
      },
      example: {
        title: 'Decorator pattern',
        items: [
          'Base class: `Coffee` with price $1',
          'Decorator: `CoffeeWithMilk` wraps Coffee, adds $0.50',
          'Decorator: `CoffeeWithCaramel` wraps any coffee, adds $0.75',
          'Chain: `new CoffeeWithMilk(new CoffeeWithCaramel(new Coffee()))`',
          'Price is computed: $1 + $0.75 + $0.50 = $2.25'
        ]
      },
      who: ['You'],
      takeaways: [
        'Decorator: implements same interface as wrapped object.',
        'Delegates to wrapped object, adds behavior before/after.',
        'Chain decorators for multiple behaviors.',
        'Avoids explosion of subclasses (inheritance).',
        'Flexible: add behavior at runtime.',
        'When to use: adding optional features, varying combinations of features, dynamic behavior.'
      ],
      reflection: 'Why is Decorator better than subclassing for features like Coffee with Milk, Caramel, Whipped Cream?',
      checks: [
        'What is a Decorator?',
        'How does it differ from inheritance?',
        'Can you chain decorators?',
        'When is Decorator useful?'
      ]
    },
    {
      id: 'observer',
      title: 'Observer',
      blurb: 'Notify multiple objects when state changes.',
      whatIs: {
        text: 'Observer: decouples event producer from event consumers. Observers subscribe to changes.',
        ensures: [
          'Understand publish-subscribe',
          'Implement subject and observer',
          'Use for event-driven systems',
          'Know when Observer is useful'
        ]
      },
      example: {
        title: 'Observer pattern',
        items: [
          'Subject: a Button that users click',
          'Observers: UI elements that listen for clicks',
          'Button.click() notifies all observers',
          'Each observer reacts independently',
          'Adding/removing observers: no changes to Button'
        ]
      },
      who: ['You'],
      takeaways: [
        'Subject: maintains state, notifies observers.',
        'Observer: receives updates from subject.',
        'Push model: subject sends data with notification.',
        'Pull model: observer queries subject for data.',
        'Decoupled: subject does not know observer details.',
        'When to use: event systems, reactive programming, model-view updates.'
      ],
      reflection: 'How would you use Observer for a weather station that notifies multiple displays?',
      checks: [
        'What is an Observer?',
        'What is publish-subscribe?',
        'What is the difference between push and pull?',
        'When is Observer useful?'
      ]
    },
    {
      id: 'strategy',
      title: 'Strategy',
      blurb: 'Swapping algorithms behind a common interface.',
      whatIs: {
        text: 'Strategy: encapsulate algorithms so they are interchangeable. Select at runtime.',
        ensures: [
          'Define algorithm family as strategy interface',
          'Implement concrete strategies',
          'Use context to delegate to strategy',
          'Know when Strategy is useful'
        ]
      },
      example: {
        title: 'Strategy pattern',
        items: [
          'Payment: credit card, PayPal, crypto',
          'Strategy interface: `pay(amount)`',
          'Concrete strategies: CreditCardPayment, PayPalPayment, CryptoPayment',
          'Context: Order holds a Strategy',
          'At runtime: `order.pay()` uses whichever strategy was selected'
        ]
      },
      who: ['You'],
      takeaways: [
        'Strategy: family of algorithms encapsulated as objects.',
        'Interchangeable: strategies implement the same interface.',
        'Context: holds and uses a strategy.',
        'Runtime selection: choose strategy based on data, user choice, etc.',
        'Avoids conditionals: no `if (type == A) { } else if (type == B) { }`.',
        'When to use: multiple ways to do something, selection at runtime, avoiding inheritance.'
      ],
      reflection: 'How would you use Strategy for different sorting algorithms?',
      checks: [
        'What is a Strategy?',
        'How does it differ from inheritance?',
        'When is Strategy useful?',
        'How do you select a strategy at runtime?'
      ]
    }
  ]
}
