export default {
  id: 'design-patterns',
  title: 'Design Patterns',
  tone: 'c7',
  blurb: 'Named solutions to recurring design problems — how to recognise the problem each one solves, how it works, and when using it makes things worse.',
  tags: ['Patterns', 'Design', 'Reuse', 'Structure'],
  popups: [
    {
      id: 'pattern-thinking',
      title: 'How to Use Patterns',
      blurb: 'What a design pattern actually is, the three families, and why reaching for one first is usually a mistake.',
      whatIs: {
        text: `A design pattern is a **named, reusable solution to a problem that keeps recurring** in object-oriented design. It is not a library or a piece of code you copy: it is a structure — which objects exist, what each is responsible for, and how they collaborate — plus a shared name for it. That name is half the value. Saying "make it a Strategy" conveys an entire design in two words to anyone who knows the vocabulary.

Patterns are traditionally grouped into three families. **Creational** patterns deal with how objects get made when \`new\` is not flexible enough — Singleton, Factory Method, Builder. **Structural** patterns compose objects into larger structures — Adapter, Decorator, Facade, Composite. **Behavioural** patterns organise how objects communicate and share responsibility — Observer, Strategy, Command, Template Method.

Almost all of them rest on the same two ideas: **program to an interface, not an implementation**, and **prefer composition over inheritance**. If those two are solid, most patterns look less like inventions and more like inevitable consequences.

The failure mode is applying patterns as decoration. A codebase with an AbstractSingletonFactoryProxyBuilder for something that needed a function is harder to read, not easier — patterns are structure, and structure costs indirection. The healthy order is: solve the problem simply, notice the pain (this \`if\` chain grows every sprint; this class changes for four unrelated reasons), then recognise which pattern removes that pain. Patterns are best discovered by refactoring towards them, not chosen in advance.`,
        ensures: [
          'Explain what a design pattern is — and is not',
          'Name the three families and what each addresses',
          'Recognise the two principles nearly every pattern relies on',
          'Identify the specific pain a pattern is meant to remove',
          'Judge when a pattern costs more than it saves',
          'Refactor towards a pattern rather than starting from one'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Arriving at a pattern honestly',
        loop: false,
        steps: [
          { icon: 'pen', label: 'Solve it simply first', desc: 'The direct implementation, no indirection' },
          { icon: 'repeat', label: 'Feel the pain repeat', desc: 'The same `if` chain grows every time a case is added' },
          { icon: 'magnifying-glass', label: 'Name the problem', desc: '"Behaviour varies by type and keeps changing"' },
          { icon: 'lightbulb', label: 'Recognise the pattern', desc: 'That description is Strategy' },
          { icon: 'code-branch', label: 'Refactor towards it', desc: 'Small steps, tests green throughout' },
          { icon: 'scale-balanced', label: 'Check it paid off', desc: 'Is change genuinely cheaper now, or did you add ceremony?' }
        ]
      },
      example: {
        title: 'The families and their problems',
        items: [
          '**Creational — Singleton:** exactly one instance, reachable from anywhere',
          '**Creational — Factory Method:** the caller needs an object but should not know which class',
          '**Creational — Builder:** construction has many optional parts and should stay readable',
          '**Structural — Adapter:** two interfaces that must work together but were never designed to',
          '**Structural — Decorator:** add behaviour to one object without subclassing every combination',
          '**Structural — Facade:** one simple entry point over a complicated subsystem',
          '**Behavioural — Observer:** several objects must react when one thing changes',
          '**Behavioural — Strategy:** several interchangeable ways of doing the same job',
          '**Behavioural — Command:** an action captured as an object, so it can be queued, logged or undone',
          '**Behavioural — Template Method:** a fixed algorithm with steps subclasses fill in',
          '**Underlying both principles:** depend on interfaces; compose rather than inherit',
          '**Anti-pattern:** applying a pattern where a function or a plain object would do'
        ]
      },
      takeaways: [
        '**A pattern is a structure plus a name.** The shared vocabulary is a real part of the value: two words replace a whiteboard session.',
        '**Three families, three concerns:** creational (how objects are made), structural (how they are composed), behavioural (how they collaborate).',
        '**Nearly every pattern is "program to an interface" plus "compose, don\'t inherit".** Understand those two and the catalogue mostly explains itself.',
        '**Patterns solve specific pains, and each pain has a symptom.** No symptom, no pattern — otherwise you are paying indirection for nothing.',
        '**Indirection is the price.** Every pattern adds a layer; that layer must buy flexibility you actually need, not flexibility you can imagine.',
        '**Refactor towards patterns.** Recognising one while cleaning up real pain gives a far better fit than choosing one before the problem is understood.',
        '**Patterns are not a design goal.** Nobody benefits from a codebase that shows off six of them; readers benefit from code that is easy to change.',
        '**Language features can subsume patterns.** First-class functions make many Strategy and Command implementations a single parameter; a `record` replaces a small Builder.',
        '**Knowing the names still matters** even when you do not implement them by hand — they are how designs get discussed, in reviews and in interviews.'
      ],
      reflection: 'Think of a piece of code you have changed three or more times for the same kind of reason — a new payment type, a new export format, a new notification channel. What varies each time, and which pattern is that variation asking for?',
      checks: [
        'What is a design pattern, and what is it not?',
        'What do creational, structural and behavioural patterns each address?',
        'Which two principles underpin most patterns?',
        'What is the cost of applying a pattern?',
        'Why is refactoring towards a pattern better than designing with one up front?',
        'How can language features make a pattern unnecessary?'
      ]
    },
    {
      id: 'singleton',
      title: 'Singleton',
      blurb: 'Exactly one instance, globally reachable — the most used and most regretted pattern in the catalogue.',
      whatIs: {
        text: `**Singleton** ensures a class has only one instance and gives everything a way to reach it. The mechanics are simple: a private constructor so nobody else can create one, a static field holding the instance, and a static accessor (\`getInstance()\`) that returns it.

It comes in two flavours. **Eager** initialisation creates the instance when the class loads — simple and inherently thread-safe, but it happens whether or not it is ever used. **Lazy** initialisation creates it on first call, saving the cost if it is never needed, but introducing a race: two threads calling \`getInstance()\` simultaneously can both see a null field and both create one. The fixes are well known — synchronise, use double-checked locking with a \`volatile\` field, use a static holder class, or (in Java) use an \`enum\`.

The genuine uses are narrow: a connection pool, a logger, a configuration registry, a cache — things that genuinely must be unique because they own a shared resource.

The reason it is the most criticised pattern is that it is **global mutable state with an object-oriented costume**. Any code can reach it, so dependencies become invisible: a class that calls \`Database.getInstance()\` depends on the database, and nothing in its signature says so. Tests are the first casualty — you cannot substitute a fake, and state leaks between tests because the instance survives them. The usual better answer is **dependency injection**: create one instance at the top of the application and pass it to whatever needs it. You still have exactly one, but now the dependency is visible and replaceable.`,
        ensures: [
          'Implement Singleton with a private constructor and a static accessor',
          'Compare eager and lazy initialisation and their thread-safety implications',
          'Recognise the small set of legitimate uses',
          'Explain why Singleton makes testing and reasoning harder',
          'Use dependency injection to get uniqueness without global access',
          'Distinguish "there must be one" from "everything must reach it"'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A lazy `getInstance()` call',
        loop: false,
        steps: [
          { icon: 'user', label: 'Caller asks', desc: '`Logger.getInstance()` — from anywhere in the program' },
          { icon: 'circle-question', label: 'Does it exist yet?', desc: 'Check the static field' },
          { icon: 'wand-magic-sparkles', label: 'No → create it', desc: 'The private constructor runs exactly once' },
          { icon: 'lock', label: 'Guard the race', desc: 'Without synchronisation two threads can both create one' },
          { icon: 'share-nodes', label: 'Return the instance', desc: 'Every caller receives the same object' },
          { icon: 'triangle-exclamation', label: 'Hidden dependency', desc: 'Nothing in any signature reveals who uses it — and tests cannot replace it' }
        ]
      },
      example: {
        title: 'Where it fits, and what it costs',
        items: [
          '**Private constructor** — prevents `new Logger()` anywhere else',
          '**Static field** — holds the one instance for the lifetime of the process',
          '**`getInstance()`** — the single access point, returning that instance',
          '**Eager:** created at class load — simple, thread-safe, always paid for',
          '**Lazy:** created on first use — saves the cost, needs care under concurrency',
          '**Thread safety:** synchronise, double-checked locking with `volatile`, a holder class, or an `enum`',
          '**Legitimate:** a connection pool — the pool is the shared resource, and there must be one',
          '**Legitimate:** a logger or a loaded configuration registry',
          '**Problem:** `Database.getInstance()` inside a class hides a dependency the signature never mentions',
          '**Problem:** tests cannot substitute a fake, and state persists across test cases',
          '**Better:** create one instance in `main` and pass it in — uniqueness without global reach',
          '**Smell:** a Singleton holding mutable business state is global state, with all its consequences'
        ]
      },
      takeaways: [
        '**Singleton combines two ideas that should be separate:** "only one exists" and "everyone can reach it". The first is often needed; the second rarely is.',
        '**Private constructor, static field, static accessor** — the mechanism is trivial, which is part of why it gets overused.',
        '**Eager is simpler and thread-safe; lazy saves work.** If lazy, get the synchronisation right or use a holder class or enum, which sidestep it entirely.',
        '**Global access makes dependencies invisible.** A method\'s signature stops telling you what it touches, and that is what makes the code hard to reason about.',
        '**Testing is where it hurts first.** No seam to insert a fake, and state that outlives each test — which is why Singleton-heavy code tends to have brittle tests.',
        '**Dependency injection gives you the same single instance without the global.** Construct it once at the top, pass it down, and the dependency is now explicit and replaceable.',
        '**Singletons holding mutable state are the dangerous kind.** A configuration read once is far less trouble than a mutable cache everything writes to.',
        '**Concurrency multiplies the risk:** one shared object touched from many threads needs a deliberate thread-safety story, not an assumption.',
        '**Use it sparingly and deliberately.** When the answer is "because it was convenient to reach", it is the wrong answer.'
      ],
      reflection: 'Take a class that calls a Singleton internally. Rewrite it to receive that dependency through its constructor instead. What does the signature now tell a reader that it did not before, and what has become possible in tests?',
      checks: [
        'What are the three mechanical parts of a Singleton?',
        'What is the difference between eager and lazy initialisation?',
        'What goes wrong with lazy initialisation under concurrency?',
        'Why does Singleton make testing harder?',
        'What problem does dependency injection solve here?',
        'When is a Singleton genuinely appropriate?'
      ]
    },
    {
      id: 'factory-method',
      title: 'Factory Method',
      blurb: 'Asking for an object without naming its class, so new kinds can be added without touching the callers.',
      whatIs: {
        text: `Calling \`new CardPayment(...)\` binds the caller to that exact class forever. **Factory Method** moves creation behind a method that returns an interface type, so callers say *what they need* rather than *what to construct*: \`PaymentMethod m = PaymentFactory.create(order);\`.

That indirection buys three things. Adding a new implementation touches the factory and nothing else, so callers never change. Construction logic that would otherwise be duplicated — reading configuration, wiring dependencies, validating — lives in one place. And tests can obtain a fake through the same route.

The pattern shows up at several scales, and the names blur in practice. A **static factory method** is the simplest and most common: \`Duration.ofSeconds(30)\`, \`List.of(...)\`, \`Integer.valueOf(5)\` — named constructors that can validate, cache or return a subtype. The classic Factory Method has a base class defer creation to a subclass that overrides a \`createX()\` hook. An **Abstract Factory** produces whole families of related objects that must be consistent with one another — for instance, a user interface (UI) toolkit where the button, menu and scrollbar must all match the same platform.

The trigger to look for is a \`switch\` or \`if/else\` on a type code that appears in more than one place. Centralising it in a factory reduces it to one occurrence; combining the factory with polymorphism usually removes it altogether. The counterweight is not to wrap every constructor: a factory that only calls \`new\` on a fixed class adds a file and removes nothing.`,
        ensures: [
          'Return an interface type instead of a concrete class from creation code',
          'Centralise construction so adding a type touches one place',
          'Distinguish static factory methods, Factory Method and Abstract Factory',
          'Use factories to make dependencies substitutable in tests',
          'Recognise the type-code `switch` that a factory is meant to absorb',
          'Avoid wrapping constructors that gain nothing from indirection'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Creation behind a factory',
        loop: false,
        steps: [
          { icon: 'user', label: 'Caller states a need', desc: '`create(order)` — not `new CardPayment()`' },
          { icon: 'industry', label: 'Factory decides', desc: 'Reads config, inspects input, applies the rules' },
          { icon: 'cubes', label: 'Concrete class chosen', desc: 'Card, BankTransfer, Wallet — the caller never learns which' },
          { icon: 'file-contract', label: 'Returned as the interface', desc: '`PaymentMethod` — a capability, not a class' },
          { icon: 'play', label: 'Caller uses it', desc: '`m.charge(total)` — dispatched polymorphically' },
          { icon: 'plus', label: 'New type added', desc: 'One change inside the factory; every caller is untouched' }
        ]
      },
      example: {
        title: 'Factories at every scale',
        items: [
          '**Direct construction:** `PaymentMethod m = new CardPayment(cfg);` — the caller is now bound to that class',
          '**Factory:** `PaymentMethod m = PaymentFactory.create(order);` — the caller states intent only',
          '**Inside the factory:** the one `switch` on payment type that used to be scattered',
          '**Adding `CryptoPayment`:** one new branch, one new class, zero caller changes',
          '**Static factory method:** `Duration.ofSeconds(30)` — a named constructor with meaning',
          '**Static factory can cache:** `Integer.valueOf(5)` returns a shared instance for small values',
          '**Static factory can return a subtype:** `List.of()` gives a different class for different sizes',
          '**Classic Factory Method:** a base class calls its own `createParser()`, subclasses override it',
          '**Abstract Factory:** `UiFactory` producing a matching button, menu and scrollbar per platform',
          '**Testing:** hand the caller a factory that returns fakes; no production code changes',
          '**Over-application:** `UserFactory.create()` that only calls `new User()` — indirection with no payoff',
          '**Modern equivalent:** a dependency-injection container is a configurable factory for everything'
        ]
      },
      takeaways: [
        '**Factories decouple *what* from *which*.** Callers express a need; the factory decides the class, and that decision lives in exactly one place.',
        '**Return the interface, not the concrete type.** If the factory\'s return type names a class, most of the benefit has been given away.',
        '**Centralising a type-code `switch` is the immediate win.** One place changes when a type is added instead of every call site.',
        '**Static factory methods are the everyday form,** and their names carry meaning that a constructor cannot: `of`, `from`, `valueOf`, `parse`.',
        '**They can do things constructors cannot:** return a cached instance, choose among subtypes, return null-object or empty implementations.',
        '**Abstract Factory is for families that must match.** Its purpose is consistency across several related objects, not just creating one.',
        '**Factories are a test seam.** Substituting the factory substitutes everything it makes, without touching the code under test.',
        '**Do not wrap a constructor for its own sake.** If there is one implementation and no logic, `new` is clearer than a factory.',
        '**Dependency-injection containers generalise this.** The wiring moves to configuration, and application code stops naming concrete classes at all.'
      ],
      reflection: 'Find a `switch` on a type string in your codebase — a report format, a file parser, a notification channel. If a new value were added tomorrow, how many files would change? Now sketch the factory plus interface version, and count again.',
      checks: [
        'What does a factory decouple the caller from?',
        'Why should a factory return an interface type?',
        'What can a static factory method do that a constructor cannot?',
        'What is Abstract Factory for, specifically?',
        'How does a factory help with testing?',
        'When is introducing a factory not worth it?'
      ]
    },
    {
      id: 'builder',
      title: 'Builder',
      blurb: 'Assembling an object step by step, so complex construction stays readable and the result can be immutable.',
      whatIs: {
        text: `Some objects need a lot to construct. The usual responses both fail: a constructor with ten parameters produces call sites like \`new Report(true, false, null, 3, "UTC", ...)\` that nobody can read, and a set of overlapping constructors (the "telescoping constructor") multiplies as options are added. Setters solve readability but destroy immutability and allow half-built objects to escape.

**Builder** separates the construction from the result. A builder object collects values through named methods — each returning \`this\` so calls chain fluently — and \`build()\` validates everything and produces the finished object in one go. The result can be fully **immutable**, because it is created once, complete, from the collected values.

The gains are readability and safety. \`new ReportBuilder().timezone("UTC").includeCharts().pageSize(50).build()\` says what each value means, unset options fall back to defaults, and adding an option means adding a method rather than a new constructor overload. Validation that spans several fields — "an end date requires a start date" — belongs in \`build()\`, where all the values are finally known.

Builder is a genuine cost, though: a second class to maintain that mirrors the first. Reach for it at roughly four or more parameters, when several are optional, or when the object should be immutable but has too many fields for a comfortable constructor. Below that, a constructor is clearer. And many languages shortcut the whole thing: named and default arguments in Python or Kotlin cover most builder use cases in one line, and generators like Lombok's \`@Builder\` remove the boilerplate where they do not.`,
        ensures: [
          'Recognise the telescoping-constructor and setter-soup problems',
          'Implement a fluent builder whose methods return `this`',
          'Validate in `build()` where all values are known',
          'Produce immutable objects from mutable builders',
          'Judge when a builder is worth its second class',
          'Use named/default arguments instead where the language offers them'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Collect, then construct once',
        loop: false,
        steps: [
          { icon: 'wrench', label: 'Create the builder', desc: 'A mutable scratchpad, not the real object' },
          { icon: 'sliders', label: 'Set what matters', desc: '`.timezone("UTC").pageSize(50)` — each call returns `this`' },
          { icon: 'forward', label: 'Skip the rest', desc: 'Unset options take their defaults; no nulls at the call site' },
          { icon: 'shield-halved', label: '`build()` validates', desc: 'Cross-field rules are checkable now that everything is present' },
          { icon: 'cube', label: 'Immutable result', desc: 'Constructed complete, in one step — no half-built state ever escapes' }
        ]
      },
      example: {
        title: 'From unreadable to fluent',
        items: [
          '**The problem:** `new Report(true, false, null, 3, "UTC", null, 50)` — what is the third argument?',
          '**Telescoping constructors:** five overloads, and a sixth every time an option appears',
          '**Setter soup:** readable, but the object is mutable and can be used before it is finished',
          '**Builder:** `new ReportBuilder().title("Q3").timezone("UTC").pageSize(50).build()`',
          '**Fluent chaining:** every setter returns `this`, so calls compose left to right',
          '**Defaults:** anything not set takes a sensible default — no `null` placeholders',
          '**Validation in `build()`:** "an end date requires a start date" is checkable only once all values are in',
          '**Immutable result:** the built object has no setters and cannot drift afterwards',
          '**Adding an option:** one new builder method; no existing call site changes',
          '**Real examples:** `StringBuilder`, `HttpRequest.newBuilder()`, `Stream.Builder`, SQL query builders',
          '**Python/Kotlin:** `Report(title="Q3", timezone="UTC", page_size=50)` — named arguments do the same job',
          '**Not worth it:** two or three required parameters — use the constructor'
        ]
      },
      takeaways: [
        '**Builder solves readability and immutability together.** Named steps at the call site, and a result that is complete the moment it exists.',
        '**Fluent chaining works because each setter returns `this`.** That is the entire mechanism behind the readable call.',
        '**`build()` is the validation point.** Cross-field rules cannot be checked earlier, because not every value is known yet.',
        '**Optional parameters are the trigger.** One or two optional values suit overloads; four or five make a builder clearly worthwhile.',
        '**The builder is mutable so the product does not have to be.** The scratchpad absorbs the mutation; the result is frozen.',
        '**Adding an option costs one method,** not a new constructor overload and not a change at any existing call site.',
        '**The cost is a parallel class.** Two things to keep in step — worth it for complex objects, pure overhead for simple ones.',
        '**Named and default arguments make builders unnecessary in some languages.** Where you have them, use them; the pattern exists mostly to fill that gap.',
        '**Code generation removes the boilerplate where the pattern is still needed** — Lombok\'s `@Builder`, or a record plus a small builder.'
      ],
      reflection: 'Take a constructor in your code with five or more parameters, several of them optional or nullable. Write out three realistic call sites as they look now, and again with a builder. Which version could a new colleague read without opening the class?',
      checks: [
        'What problem do telescoping constructors have?',
        'Why do setters solve readability but create a new problem?',
        'What makes a builder "fluent"?',
        'Why does validation belong in `build()`?',
        'How does a builder let the final object be immutable?',
        'When is a builder not worth the extra class?'
      ]
    },
    {
      id: 'adapter',
      title: 'Adapter',
      blurb: 'Making two interfaces that were never designed to meet work together, without changing either.',
      whatIs: {
        text: `**Adapter** wraps an existing class so it presents the interface your code expects. Your application wants a \`PaymentGateway\` with \`charge(Money)\`; a third-party software development kit (SDK) offers \`processTransaction(double, String)\`. You cannot change the SDK, and you should not distort your own design to match it. The adapter implements \`PaymentGateway\`, holds the SDK client, and translates each call.

The point is **isolating the mismatch**. Without an adapter, the vendor's vocabulary spreads through your codebase and every call site depends on their signatures. With one, the foreign interface is confined to a single class — and that class is the only thing that changes when the vendor releases a breaking version or you switch suppliers.

There are two forms. An **object adapter** holds the adaptee as a field and delegates: flexible, works with any instance, and the standard choice. A **class adapter** inherits from the adaptee instead, which is more tightly coupled and impossible in languages without multiple inheritance. Prefer composition.

Adapters are also where translation belongs: units, formats, error handling. If the SDK returns error codes and your application uses exceptions, the adapter converts them, so no other code has to know that a \`-3\` means "declined". The pattern is easy to confuse with two neighbours: a **Decorator** keeps the same interface and adds behaviour, whereas an adapter changes the interface without adding behaviour; a **Facade** simplifies a whole subsystem rather than translating one interface. And an adapter is not free — it is a layer, so it is worth writing only where the mismatch is real.`,
        ensures: [
          'Wrap an incompatible class behind the interface your code expects',
          'Prefer object adapters (composition) over class adapters (inheritance)',
          'Confine third-party vocabulary to one place in the codebase',
          'Translate data, units and error handling inside the adapter',
          'Distinguish Adapter from Decorator and Facade',
          'Use adapters as a seam for testing against fakes'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A call crossing the boundary',
        loop: false,
        steps: [
          { icon: 'user', label: 'Your code calls', desc: '`gateway.charge(Money.of(20, "GBP"))`' },
          { icon: 'file-contract', label: 'Your interface', desc: '`PaymentGateway` — defined by your domain, not the vendor' },
          { icon: 'right-left', label: 'Adapter translates', desc: 'Money → (20.0, "GBP"); your names → their names' },
          { icon: 'plug', label: 'Adaptee is called', desc: '`sdk.processTransaction(20.0, "GBP")` — unchanged, unaware' },
          { icon: 'arrow-left', label: 'Result translated back', desc: 'Their status code becomes your `Receipt` or your exception' },
          { icon: 'shield-halved', label: 'Mismatch contained', desc: 'A vendor change touches this class alone' }
        ]
      },
      example: {
        title: 'Bridging a mismatch',
        items: [
          '**Your interface:** `interface PaymentGateway { Receipt charge(Money amount); }`',
          '**Their SDK:** `processTransaction(double amount, String currencyCode)` returning an int status',
          '**Adapter:** `class StripeAdapter implements PaymentGateway` holding a `StripeClient`',
          '**Translate in:** `Money` becomes an amount and a currency code',
          '**Translate out:** status `-3` becomes a `PaymentDeclined` exception your code understands',
          '**Object adapter:** the adaptee is a field — composition, and the default choice',
          '**Class adapter:** extends the adaptee — tighter coupling, impossible without multiple inheritance',
          '**Legacy integration:** `LegacyDataReader.readData()` behind a modern `DataSource.getData()`',
          '**Swapping vendors:** write a second adapter; nothing else in the codebase changes',
          '**Testing:** a fake implementation of your interface, with no vendor SDK in the test at all',
          '**Not an adapter:** adding logging around the same interface — that is a Decorator',
          '**Not an adapter:** one simple entry point over a ten-class subsystem — that is a Facade'
        ]
      },
      takeaways: [
        '**Adapter changes an interface; it does not add behaviour.** That one sentence separates it from Decorator cleanly.',
        '**Define the interface your domain wants first,** then adapt the outside world to it. Letting a vendor\'s application programming interface (API) shape your core is the mistake the pattern prevents.',
        '**It confines the blast radius.** A breaking SDK upgrade or a change of provider touches one class instead of fifty call sites.',
        '**Prefer object adapters.** Holding the adaptee is more flexible than inheriting it and works in every language.',
        '**Translation belongs inside:** units, formats, null handling, error codes into exceptions. Downstream code should never see the foreign vocabulary.',
        '**Adapters are a natural test seam.** Your code depends on your interface, so tests use a fake and never touch the network.',
        '**Facade simplifies, Adapter translates, Decorator augments.** Three different problems that look similar in a class diagram.',
        '**Every adapter is a layer,** so write one where the mismatch is real — not around code that already fits.',
        '**This is the same instinct as ports and adapters (hexagonal) architecture,** applied at the level of a single class.'
      ],
      reflection: 'Pick a third-party library your code calls directly in several places. If that library released an incompatible version tomorrow, how many files would you edit? Sketch the interface you would have wanted, and where the adapter would sit.',
      checks: [
        'What problem does Adapter solve?',
        'What is the difference between an object adapter and a class adapter?',
        'Whose interface should the adapter implement — yours or the vendor\'s?',
        'What kinds of translation belong inside an adapter?',
        'How does Adapter differ from Decorator?',
        'How does Adapter differ from Facade?',
        'How does an adapter make testing easier?'
      ]
    },
    {
      id: 'decorator',
      title: 'Decorator',
      blurb: 'Wrapping an object to add behaviour, so features can be combined at run time instead of multiplied into subclasses.',
      whatIs: {
        text: `**Decorator** adds responsibilities to an individual object by wrapping it in another object that implements the **same interface**. The wrapper does its own work before or after delegating to what it wraps — and because the interface is unchanged, callers cannot tell the difference and wrappers can be stacked.

The problem it solves is combinatorial. Three optional features handled by inheritance need eight subclasses; a fourth needs sixteen. Decorators need one class per feature, composed freely: \`new Encrypted(new Compressed(new FileStream(path)))\`. The features can also be chosen at run time from configuration or user input, which inheritance can never do because an object's class is fixed at creation.

Java's input/output (I/O) library is the canonical example, and it is worth recognising when you meet it: \`new BufferedReader(new InputStreamReader(new FileInputStream(f)))\` is three decorators, each adding one capability to the stream beneath it. Web middleware is the same idea in a different vocabulary — authentication wrapping logging wrapping compression wrapping the handler.

The costs are real. A stack of small wrappers makes debugging harder (a stack trace passes through five layers), the order of wrapping matters and is easy to get wrong, and identity comparisons break because the object you hold is not the object you created. Decorator also requires an interface small enough that a wrapper can implement it without knowing everything — which is a good reason to keep interfaces narrow in the first place.`,
        ensures: [
          'Implement a wrapper that shares the wrapped object\'s interface',
          'Stack decorators to combine features in any order',
          'Explain why inheritance multiplies classes and decoration does not',
          'Recognise decorators in streams, middleware and language decorators',
          'Distinguish Decorator from Adapter, Proxy and inheritance',
          'Weigh the debugging and ordering costs before layering'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A call through a stack of wrappers',
        loop: false,
        steps: [
          { icon: 'user', label: 'Caller calls `read()`', desc: 'It holds the outermost object and knows nothing about the layers' },
          { icon: 'lock', label: 'Encrypting decorator', desc: 'Does its part, then delegates inward' },
          { icon: 'file-zipper', label: 'Compressing decorator', desc: 'Same interface, another responsibility, delegates inward' },
          { icon: 'file', label: 'The real component', desc: 'The actual file stream does the underlying work' },
          { icon: 'arrow-left', label: 'Result travels back out', desc: 'Each layer may transform it on the way' },
          { icon: 'shuffle', label: 'Reorder or add freely', desc: 'Combinations are composed at run time, not enumerated as classes' }
        ]
      },
      example: {
        title: 'Composing behaviour instead of subclassing it',
        items: [
          '**The explosion:** milk, syrup and decaf as subclasses → eight classes; add a fourth option → sixteen',
          '**Decorated:** `new Milk(new Syrup(new Espresso()))` — three small classes, any combination',
          '**Same interface:** every decorator implements `Beverage`, so callers are unaffected',
          '**Delegation:** `cost()` returns `wrapped.cost() + 0.50` — do your part, pass the rest along',
          '**Run-time composition:** the wrapping is decided from an order, a config file or a user choice',
          '**Java I/O:** `new BufferedReader(new InputStreamReader(new FileInputStream(f)))`',
          '**Web middleware:** auth wrapping logging wrapping compression wrapping the handler',
          '**Python `@decorator`:** the same idea as language syntax, applied to functions',
          '**Order matters:** compress-then-encrypt and encrypt-then-compress give very different results',
          '**Debugging cost:** stack traces pass through every layer; five wrappers means five frames',
          '**Identity trap:** the object you hold is the outermost wrapper, not the component you constructed',
          '**Not a Decorator:** changing the interface is an Adapter; controlling access is a Proxy'
        ]
      },
      takeaways: [
        '**Same interface in, same interface out.** That is what lets decorators stack and keeps callers unaware of the layers.',
        '**One class per feature instead of one per combination.** Inheritance multiplies; decoration composes.',
        '**Behaviour is chosen at run time.** An object cannot change its class, but it can be wrapped differently on every request.',
        '**Do your part, then delegate.** A decorator adds something before or after the call it forwards — that is the whole mechanism.',
        '**Order is part of the design.** Compressing before encrypting is not the same as the reverse; document the intended order.',
        '**You are already using it.** Java streams, web (HTTP) middleware and Python function decorators are all this pattern.',
        '**Debugging gets harder with depth.** Deep wrapping means long stack traces and behaviour spread across several small classes.',
        '**Identity and type checks break.** `instanceof` and `==` see the wrapper, which is one reason to avoid type checks in the first place.',
        '**Decorator augments, Adapter translates, Proxy controls.** Same wrapping shape, three different intentions.',
        '**Narrow interfaces make decoration practical.** A wide interface forces every wrapper to implement operations it has no interest in.'
      ],
      reflection: 'A notification service must optionally rate-limit, retry, log and encrypt. Enumerate how many subclasses the combinations would need. Then design it with decorators — and decide which order the wrapping must apply in, and why.',
      checks: [
        'Why must a decorator implement the same interface as what it wraps?',
        'What problem with inheritance does decoration remove?',
        'What does a decorator do around the call it delegates?',
        'Why does the order of wrapping matter?',
        'Where have you already used decorators without calling them that?',
        'What are the debugging costs of deep decoration?',
        'How does Decorator differ from Adapter and Proxy?'
      ]
    },
    {
      id: 'observer',
      title: 'Observer',
      blurb: 'One object changes and many react — without the source knowing who is listening.',
      whatIs: {
        text: `**Observer** decouples a **subject** — something whose state changes or which raises events — from the **observers** that need to react. Observers register with the subject; when something happens, the subject notifies everyone registered, without knowing anything about them beyond a small interface.

The alternative is direct calls: an \`OrderService\` that finishes an order and then calls the email service, the audit log, the analytics tracker and the warehouse client itself. Every new reaction means editing that method, and \`OrderService\` ends up depending on four subsystems that have nothing to do with orders. With Observer it publishes \`OrderPlaced\` and stays untouched while listeners come and go.

There are two delivery styles. **Push** sends the data with the notification (\`onOrderPlaced(order)\`) — simple and usually what you want. **Pull** notifies that something changed and lets observers query the subject for what they need — useful when observers care about different slices of a large state.

This is the pattern behind user interface (UI) event listeners, reactive streams, message buses and pub/sub in general, and its problems are equally well known. Notification order is generally unspecified, so observers must not depend on running before or after each other. A **synchronous** notification means one slow or failing observer delays or breaks the publisher, which is why anything expensive should be dispatched asynchronously. Observers that never unregister are a classic **memory leak** — the subject holds a reference and keeps them alive. And debugging is harder because the flow is indirect: the code that reacts is nowhere near the code that triggered it.`,
        ensures: [
          'Separate a subject from the observers that react to it',
          'Register, notify and — crucially — unregister observers',
          'Choose deliberately between push and pull notification',
          'Handle failing or slow observers without breaking the publisher',
          'Recognise the pattern in UI events, pub/sub and message buses',
          'Weigh the loss of traceability that indirection brings'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Publish and react',
        loop: false,
        steps: [
          { icon: 'user-plus', label: 'Observers subscribe', desc: 'Each registers with the subject; the subject learns nothing about them' },
          { icon: 'bolt', label: 'Something happens', desc: 'The order is placed — state changes in the subject' },
          { icon: 'tower-broadcast', label: 'Subject notifies', desc: 'It walks its list and calls the same small interface on each' },
          { icon: 'envelope', label: 'Each observer reacts', desc: 'Email sent, audit written, analytics recorded — independently' },
          { icon: 'user-minus', label: 'Unsubscribe when done', desc: 'Forgetting this keeps the observer alive forever — the classic leak' },
          { icon: 'triangle-exclamation', label: 'One observer fails', desc: 'Synchronously, that can break the publisher; isolate or dispatch asynchronously' }
        ]
      },
      example: {
        title: 'Decoupling the reaction from the event',
        items: [
          '**Without Observer:** `OrderService` calls email, audit, analytics and warehouse directly',
          '**Consequence:** every new reaction edits `OrderService`, which now depends on four subsystems',
          '**With Observer:** `OrderService` publishes `OrderPlaced` and knows nothing more',
          '**Subject:** keeps a list of observers and offers `subscribe` / `unsubscribe`',
          '**Observer interface:** one small method, e.g. `onOrderPlaced(Order order)`',
          '**Push:** the event carries the data — the common and simpler choice',
          '**Pull:** the observer is told "something changed" and queries what it needs',
          '**UI:** `button.addEventListener("click", handler)` — the pattern most people meet first',
          '**Adding a reaction:** write a new observer and register it; the subject is untouched',
          '**Leak:** a registered observer is referenced by the subject and never garbage collected',
          '**Ordering:** never assume observers run in a particular sequence — that coupling is invisible and fragile',
          '**Async:** hand slow work to a queue so one observer cannot delay the publisher'
        ]
      },
      takeaways: [
        '**The subject must not know its observers.** It knows only a small interface, which is exactly what makes reactions addable without changing the source.',
        '**Adding a reaction should not touch the publisher.** If it does, the decoupling has not actually happened.',
        '**Push is simpler; pull suits large or varied state.** Choose deliberately rather than by habit.',
        '**Unsubscribe, always.** A subject holding observers forever is one of the most common memory leaks in event-driven code.',
        '**Notification order is not a contract.** Observers that depend on running before or after one another have a hidden dependency the code never states.',
        '**A synchronous notify couples you to every observer\'s latency and failures.** Wrap each call, or dispatch asynchronously, so one bad listener cannot take down the publisher.',
        '**Indirection costs traceability.** "What happens when an order is placed?" no longer has an answer you can read in one method — good naming and documentation matter more here.',
        '**Watch for notification storms.** An observer that updates state which triggers another notification can loop, or produce quadratic work.',
        '**This is pub/sub at object scale.** The same trade-offs — decoupling for traceability — apply to message buses and event-driven architecture.',
        '**Most languages give you this already:** event listeners, callbacks, reactive streams. Reach for the built-in mechanism before writing your own registry.'
      ],
      reflection: 'A weather station publishes readings to a current-conditions display, a statistics panel and a forecast widget. What does the observer interface look like, what happens when the forecast widget throws, and how would you find out later which observer made a change you did not expect?',
      checks: [
        'What does the subject know about its observers?',
        'What is the difference between push and pull notification?',
        'What happens if an observer never unsubscribes?',
        'Why should observers not rely on notification order?',
        'What is the risk of notifying observers synchronously?',
        'What does the pattern cost in traceability?',
        'Where does this pattern already exist in tools you use?'
      ]
    },
    {
      id: 'strategy',
      title: 'Strategy',
      blurb: 'Interchangeable algorithms behind one interface, chosen at run time instead of hard-coded in a conditional.',
      whatIs: {
        text: `**Strategy** encapsulates each way of doing something as its own object behind a shared interface, so the algorithm can be selected — and swapped — at run time. The client holds a strategy and delegates to it, without knowing which one it has.

The symptom it treats is a growing conditional: \`if (type == STANDARD) ... else if (type == EXPRESS) ... else if (type == OVERNIGHT) ...\`. That block gets edited for every new case, it usually appears in more than one place, and it mixes several unrelated algorithms into one method that no one can test in isolation. Extracting each branch into a \`ShippingStrategy\` gives one class per algorithm, each independently testable, and adding a new one requires no change to the code that uses it — the open/closed principle in its most concrete form.

Strategy is easy to confuse with **State**, which has the same structure: an object delegating to a pluggable implementation. The difference is intent. A strategy is chosen by the client and normally does not change; states change themselves as the object progresses through a lifecycle.

The modern caveat is that many languages make the ceremony unnecessary. Where functions are first-class, a strategy is often just a parameter: \`sorted(items, key=len)\`, \`list.sort(comparator)\`, a lambda passed to a retry helper. Use the lightweight form when the strategy is one function, and the full pattern when it needs state, several methods, or its own configuration. Either way the design idea is identical: name what varies, put it behind an interface, and inject it.`,
        ensures: [
          'Recognise a type-based conditional as a Strategy waiting to be extracted',
          'Define a strategy interface and several interchangeable implementations',
          'Inject the strategy rather than selecting it inside the client',
          'Add a new algorithm without modifying existing code',
          'Distinguish Strategy from State despite the identical structure',
          'Use a function or lambda when the full pattern is overkill'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Choosing behaviour at run time',
        loop: false,
        steps: [
          { icon: 'code-branch', label: 'The smell', desc: 'An `if/else` on a type code, edited for every new case' },
          { icon: 'file-contract', label: 'Extract the interface', desc: '`ShippingStrategy.cost(parcel)` — one operation, many implementations' },
          { icon: 'cubes', label: 'One class per branch', desc: 'Standard, Express, Overnight — each independently testable' },
          { icon: 'plug', label: 'Inject the choice', desc: 'The client is given a strategy; it does not select one itself' },
          { icon: 'play', label: 'Delegate', desc: '`strategy.cost(parcel)` — the conditional has disappeared' },
          { icon: 'plus', label: 'Add a new one', desc: 'A new class and a wiring change; no existing code is touched' }
        ]
      },
      example: {
        title: 'Replacing a conditional with objects',
        items: [
          '**Before:** `if (type == STANDARD) {...} else if (type == EXPRESS) {...}` — growing every quarter',
          '**Interface:** `interface ShippingStrategy { Money cost(Parcel p); }`',
          '**Implementations:** `StandardShipping`, `ExpressShipping`, `OvernightShipping`',
          '**Client:** `Order` holds a `ShippingStrategy` and calls `cost(parcel)`',
          '**Selection:** a factory or configuration decides which strategy the order gets',
          '**Adding `InternationalShipping`:** one new class; `Order` never changes',
          '**Testing:** each strategy is tested alone; the client is tested with a stub',
          '**Payments:** card, transfer, wallet — the same shape, different domain',
          '**Compression:** zip, gzip, none — chosen from configuration at startup',
          '**Lightweight form:** `sorted(items, key=len)` — the strategy is just a function',
          '**Java:** `list.sort(Comparator.comparing(User::age))` — a comparator is a strategy',
          '**Strategy vs State:** the client picks a strategy; a state machine changes its own state'
        ]
      },
      takeaways: [
        '**A growing type-based conditional is the tell.** If a new case means editing the same `if` chain again, the branches want to be classes.',
        '**One class per algorithm makes each independently testable** — the practical benefit people notice first.',
        '**Inject the strategy; do not choose it inside the client.** If the client contains the `switch` that picks one, the conditional has just moved.',
        '**Adding an algorithm should not modify existing code.** That is open/closed, and Strategy is its most concrete illustration.',
        '**Strategy and State share a structure and differ in intent.** Chosen by the client and stable, versus changed by the object as its lifecycle advances.',
        '**Functions are strategies where the language allows it.** Comparators, key functions and lambdas are the pattern without the class ceremony.',
        '**Use the full pattern when the strategy has state, several methods, or configuration** — otherwise a function parameter is clearer.',
        '**Keep strategy interfaces narrow.** One or two operations; a wide interface makes implementations awkward and rarely reflects a single algorithm.',
        '**Composition over inheritance again.** Strategy is how you vary behaviour without subclassing the client for every variation.'
      ],
      reflection: 'Find an `if/else` chain in your code that has grown at least twice. Extract the interface it implies and name three implementations. Then ask what "add a new case" would cost before and after — and whether a plain function would have been enough.',
      checks: [
        'What symptom in code suggests Strategy?',
        'Where should the choice of strategy be made?',
        'How does Strategy support the open/closed principle?',
        'What is the difference between Strategy and State?',
        'When is a lambda or function enough?',
        'Why should a strategy interface stay narrow?',
        'How does Strategy make the algorithms easier to test?'
      ]
    }
  ]
}
