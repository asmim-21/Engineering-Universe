export default {
  id: 'oop',
  title: 'OOP — Object-Oriented Programming',
  tone: 'c5',
  blurb: 'Modelling with objects: classes and instances, encapsulation, references and equality, interfaces and polymorphism, inheritance versus composition, immutability, contracts, and design that stays workable.',
  tags: ['OOP', 'Design', 'Abstraction', 'Modelling'],
  popups: [
    {
      id: 'classes-vs-objects',
      title: 'Classes & Objects',
      blurb: 'The blueprint and the thing built from it — state, behaviour, and what actually happens on construction.',
      whatIs: {
        text: `A **class** is a definition: the fields an object of that type will have, and the operations you can perform on it. An **object** (or instance) is one concrete thing built from that definition, with its own values in those fields. \`Account\` is written once; \`alicesAccount\` and \`bobsAccount\` are two objects with separate balances and the same behaviour.

What makes this more than a struct with functions is that objects bundle **state and behaviour together**. Instead of data being passed to procedures that might do anything to it, the object owns its data and exposes the operations that are legitimate for it. \`account.withdraw(50)\` is a request the object can refuse; \`account.balance -= 50\` is not.

Construction is where an object becomes valid. A constructor (\`__init__\`, \`Account(...)\`) takes whatever is required and leaves the object in a state where every operation makes sense. The best test of a constructor is whether it is possible to create an object that is already wrong — an \`Account\` with no owner, an \`Order\` with no lines. If it is, those checks belong in the constructor.

The useful mental discipline is to ask, for each class, "what is this responsible for?" A class whose answer needs an "and" is usually two classes. That question, applied consistently, does more for a design than any pattern.`,
        ensures: [
          'Distinguish a class from an instance and explain what each holds',
          'Identify state (fields) and behaviour (methods) for a concept',
          'Write a constructor that cannot produce an invalid object',
          'Understand that methods act on the object they are called on',
          'Tell instance data apart from data shared by the whole class',
          'Name a single responsibility for every class you write'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From class definition to a working object',
        loop: false,
        steps: [
          { icon: 'file-code', label: 'Define the class', desc: 'Fields it will hold, operations it will offer' },
          { icon: 'wand-magic-sparkles', label: 'Call the constructor', desc: '`new Account("Alice", 100)`' },
          { icon: 'shield-halved', label: 'Validate the inputs', desc: 'Reject anything that would create an invalid object' },
          { icon: 'cube', label: 'Instance exists', desc: 'Its own fields, separate from every other instance' },
          { icon: 'play', label: 'Call its methods', desc: '`acct.deposit(50)` — behaviour acting on this object\'s state' },
          { icon: 'clone', label: 'Create another', desc: 'Same class, independent state — one blueprint, many objects' }
        ]
      },
      example: {
        title: 'One class, several objects',
        items: [
          '**Class `Account`** — the definition: what every account has and can do',
          '**State:** `owner`, `balance`, `openedOn` — values that differ per object',
          '**Behaviour:** `deposit()`, `withdraw()`, `statement()` — operations valid for an account',
          '**`alice = new Account("Alice", 100)`** — one object with its own balance',
          '**`bob = new Account("Bob", 0)`** — a second object; changing one cannot affect the other',
          '**`alice.deposit(50)`** — the method acts on `alice`\'s state, not the class\'s',
          '**Constructor guard:** reject a negative opening balance rather than store it',
          '**Class-level data:** `Account.count` or an interest rate shared by all accounts',
          '**`alice.balance -= 50`** — what encapsulation exists to prevent: state changed without the rules',
          '**Responsibility test:** "an Account tracks money for one owner" — no "and sends email"'
        ]
      },
      takeaways: [
        '**A class is a type; an object is a value of that type.** The class exists once in the source; objects exist many times at run time.',
        '**Objects bundle state with the operations allowed on it.** That pairing is the whole point — not the syntax, not the inheritance.',
        '**A constructor\'s job is to produce a valid object or fail.** Validating on the way in means every method afterwards can trust its own fields.',
        '**Two objects of the same class share behaviour, never state.** Each instance has its own field values; that is what "instance" means.',
        '**Class-level (static) data is shared by everything.** Right for constants and counters, wrong for anything that varies per object — and a common source of accidental coupling.',
        '**Methods should express intent, not mechanics.** `account.withdraw(50)` says what is happening; `account.setBalance(account.getBalance() - 50)` makes the caller do the object\'s job.',
        '**One responsibility per class.** If describing it honestly needs "and", you have found the split.',
        '**Objects are not the only tool.** A pure calculation with no state is better as a function; wrapping it in a class adds ceremony and nothing else.'
      ],
      reflection: 'Model a library book loan. Which concepts deserve to be classes — Book, Copy, Loan, Member? What state does each hold, and which object should own the rule "a member may borrow at most five copies"?',
      checks: [
        'What is the difference between a class and an object?',
        'What is state, and what is behaviour?',
        'What should a constructor guarantee?',
        'Can two objects of the same class have different field values? Different methods?',
        'What is class-level data, and when is it appropriate?',
        'How do you tell that a class has more than one responsibility?'
      ]
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation & Invariants',
      blurb: 'Hiding internals so an object can guarantee its own rules — and so you can change how it works later.',
      whatIs: {
        text: `**Encapsulation** is keeping an object's data private and exposing only the operations that make sense for it. It buys two distinct things. The first is **correctness**: if nothing outside can change the balance directly, the account can guarantee the balance is never negative. The second is **freedom to change**: as long as the public operations keep working, you can replace the entire internal representation without touching a single caller.

The rules an object promises to keep are its **invariants** — statements that are true after construction and after every operation. "Balance is never negative." "The list is always sorted." "Start date is never after end date." Naming invariants explicitly is one of the highest-value habits in design, because every method then has a clear obligation: leave the object in a state where they still hold.

Getters and setters are not encapsulation. A class with a private field and a public getter and setter for it has exactly the exposure of a public field, with more code. Real encapsulation offers **operations**, not property access: \`withdraw(amount)\` can enforce a rule; \`setBalance(x)\` cannot.

Encapsulation also has to survive references. If a method returns the internal list, callers can modify it behind the object's back and break the invariant without ever calling a method — so return a copy or an unmodifiable view. Different languages enforce this differently: Java has real access modifiers, Python uses a leading underscore as a convention that everyone honours, but the design principle is identical.`,
        ensures: [
          'Keep internal state private and expose meaningful operations',
          'State a class\'s invariants explicitly and preserve them in every method',
          'Validate at the boundary so internal code can trust its own data',
          'Avoid leaking internal mutable structures to callers',
          'Recognise that getter/setter pairs are not encapsulation',
          'Design a public interface you are willing to keep stable'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A guarded operation',
        loop: false,
        steps: [
          { icon: 'user', label: 'Caller asks', desc: '`account.withdraw(200)`' },
          { icon: 'shield-halved', label: 'Object checks the rules', desc: 'Is the amount positive? Are there sufficient funds?' },
          { icon: 'ban', label: 'Invalid → refuse', desc: 'Throw or return a failure; state is untouched' },
          { icon: 'pen', label: 'Valid → change state', desc: 'Only the object itself touches its fields' },
          { icon: 'circle-check', label: 'Invariants still hold', desc: 'Balance is still non-negative — guaranteed, not hoped for' },
          { icon: 'eye', label: 'Expose a safe view', desc: 'Return a value or copy, never the internal structure' }
        ]
      },
      example: {
        title: 'Guarding an account',
        items: [
          '**Private field:** `_balance` — nothing outside the class may assign to it',
          '**Invariant:** balance is never negative, at any observable moment',
          '**`deposit(amount)`** — rejects zero or negative amounts before changing anything',
          '**`withdraw(amount)`** — rejects amounts greater than the balance; the invariant cannot break',
          '**`balance` as a read-only property** — callers can see it, not set it',
          '**No `setBalance()`** — there is no legitimate reason for the outside world to assign one',
          '**`transactions()` returns a copy** — otherwise a caller can mutate the internal list directly',
          '**Validation lives at the boundary** — inside the class, the data is already known to be sound',
          '**Representation change:** store cents as an integer instead of a float — no caller notices',
          '**Test the invariant:** assert it holds after a hundred random deposits and withdrawals'
        ]
      },
      takeaways: [
        '**Encapsulation exists to make guarantees possible.** If any code can write the field, no code can promise anything about it.',
        '**Name your invariants.** "Balance is never negative" turns a vague sense of correctness into a testable property that every method must preserve.',
        '**Getters and setters for every field are public fields with extra steps.** Ask what operation the caller actually wants, and offer that instead.',
        '**Validate on the way in, once.** Then internal code can be written straightforwardly, trusting that the data is already valid.',
        '**Returning an internal collection leaks control.** Return a copy or an unmodifiable view, or your invariant can be broken without any method being called.',
        '**The public surface is a promise.** Everything public is something callers will depend on and you will have to keep working — start private and open up deliberately.',
        '**Encapsulation is what makes refactoring safe.** Change the internals freely as long as the operations behave the same; that freedom is the practical payoff.',
        '**Convention counts as enforcement in some languages.** Python\'s `_name` has no runtime power, but it says "internal, may change" and teams honour it.',
        '**Objects that only hold data are fine.** A value object with public read-only fields is not a failure of encapsulation — the rule applies where there are rules to protect.'
      ],
      reflection: 'Take a class you have written with a getter and setter for every field. For each setter, ask: what operation was the caller actually trying to perform, and what rule should have been checked? Rewrite two of them as intention-revealing methods.',
      checks: [
        'What are the two distinct benefits of encapsulation?',
        'What is an invariant, and who is responsible for it?',
        'Why is a getter/setter pair not encapsulation?',
        'What can go wrong if a method returns the object\'s internal list?',
        'Where should validation happen, and why only there?',
        'How does encapsulation make changing the implementation safe?'
      ]
    },
    {
      id: 'references-identity',
      title: 'References, Identity & Equality',
      blurb: 'Two names for one object, and the difference between "the same object" and "the same value".',
      whatIs: {
        text: `In almost every object-oriented language, a variable does not contain an object — it **refers** to one. \`Account a = new Account(...)\` puts an object on the heap and stores a reference to it in \`a\`. \`Account b = a;\` copies the reference, not the object: now two names point at one thing, and a change made through either is visible through both. This is **aliasing**, and it is the single most common source of "impossible" bugs.

That leads directly to two different questions you can ask about two references. **Identity** — \`a == b\` in Java, \`a is b\` in Python — asks "are these the same object?" **Equality** — \`a.equals(b)\`, \`a == b\` in Python — asks "do these represent the same value?" Two distinct \`Money(5, "GBP")\` objects are not identical but should be equal.

Equality is something you define, and it comes with a contract. It must be reflexive, symmetric and transitive, and — crucially — **objects that are equal must have the same hash code**. Hash-based collections find an entry by hashing first and comparing second, so an object whose \`equals\` was overridden without \`hashCode\` will be put into a set and then not be found in it.

Copying has the same shape of subtlety. A **shallow copy** duplicates the object but shares whatever it refers to; a **deep copy** duplicates the graph beneath it. And a reference that points at nothing — \`null\`, \`None\`, \`nil\` — is a distinct third state that must be handled: not zero, not empty, but "no object at all".`,
        ensures: [
          'Explain aliasing and predict when a change is visible elsewhere',
          'Distinguish identity from equality and use the right operator',
          'Implement equality with its full contract, including hashing',
          'Tell a shallow copy from a deep one and choose deliberately',
          'Handle null references rather than assuming an object is there',
          'Understand that arguments are passed as references to shared objects'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Two names, one object',
        loop: false,
        steps: [
          { icon: 'cube', label: 'Object on the heap', desc: '`Account("Alice", 100)` exists once' },
          { icon: 'link', label: '`a` refers to it', desc: 'The variable holds an address, not the account' },
          { icon: 'copy', label: '`b = a`', desc: 'The reference is copied — the object is not' },
          { icon: 'pen', label: '`b.deposit(50)`', desc: 'One object changed' },
          { icon: 'eye', label: '`a` sees it too', desc: 'Both names describe the same thing — this is aliasing' },
          { icon: 'equals', label: 'Identity vs equality', desc: '`a == b` here is true; a separate identical account would be equal but not identical' }
        ]
      },
      example: {
        title: 'Aliasing, equality and copies',
        items: [
          '**`Account a = new Account("Alice", 100);`** — one object, one reference',
          '**`Account b = a;`** — aliasing: two names, still one object',
          '**`b.deposit(50);`** — `a.balance` is now 150 as well; nothing was copied',
          '**`Account c = new Account("Alice", 150);`** — a different object with the same values',
          '**`a == c`** → false — different objects, whatever their contents',
          '**`a.equals(c)`** → true or false depending on what *you* defined equality to mean',
          '**Override `equals` → override `hashCode`** — or `c` gets lost inside a `HashSet`',
          '**Python:** `is` compares identity, `==` calls `__eq__` — the same distinction, different spelling',
          '**Shallow copy:** the copy shares the same inner list; appending through one shows up in the other',
          '**Deep copy:** the inner list is duplicated too; the two are genuinely independent',
          '**`null` / `None`** — a reference to nothing; calling a method on it is a runtime failure',
          '**Passing an object to a method** passes the reference, so the method can mutate your object'
        ]
      },
      takeaways: [
        '**Variables hold references, not objects.** Assignment copies the reference. Once that is internalised, most surprising mutation bugs become predictable.',
        '**Aliasing means a change made anywhere is visible everywhere** that refers to the same object — including through a parameter you passed to someone else\'s code.',
        '**Identity and equality are different questions.** Same object versus same value. Choosing the wrong one gives code that works in tests with shared objects and fails with fresh ones.',
        '**Equality is a decision about your domain.** Two `Person` objects with the same name — equal or not? The answer depends on whether identity is the name or an underlying id.',
        '**`equals` and `hashCode` must agree.** Equal objects must hash equally, or hash-based collections silently lose them. Generate both, or use a record/dataclass that does.',
        '**Equality should be reflexive, symmetric, transitive and stable.** An `equals` that depends on mutable fields breaks a set the moment the object changes inside it.',
        '**Shallow copies share their insides.** If a "copy" must be independent, copy the graph — or, better, make the contents immutable so sharing is safe.',
        '**Null is a state, not a value.** Test for it explicitly; prefer designs where it cannot occur — an empty collection, a default object, or an `Optional`.',
        '**Every language passes references the same way here.** Java, Python, C# and JavaScript all pass the reference by value: the method can mutate your object but cannot repoint your variable.'
      ],
      reflection: 'A method receives a list of orders and sorts it "to make the report tidy". The caller\'s list is now in a different order and a later step breaks. Whose mistake was it, and what are the two ways — one for the callee, one for the caller — to make this impossible?',
      checks: [
        'What does `b = a` copy when `a` refers to an object?',
        'What is aliasing, and why is it so often a bug?',
        'What is the difference between identity and equality?',
        'What breaks if you override `equals` but not `hashCode`?',
        'What is the difference between a shallow and a deep copy?',
        'Why is a null reference different from an empty one?',
        'Can a method change an object you passed to it?'
      ]
    },
    {
      id: 'interfaces-polymorphism',
      title: 'Interfaces & Polymorphism',
      blurb: 'Depending on what something can do, not what it is — and letting the object decide which code runs.',
      whatIs: {
        text: `An **interface** is a contract stated without an implementation: the set of operations a type promises to provide. \`interface PaymentMethod { void charge(Money amount); }\` says nothing about cards or bank transfers — only that anything calling itself a payment method can be charged.

**Polymorphism** is what makes that useful. Code written against the interface calls \`method.charge(total)\` and the *object's actual type* decides which implementation runs. That decision happens at run time — **dynamic dispatch** — which is why adding a new payment method requires no change at all to the code that processes payments. This is the mechanism behind almost every design pattern.

The rule that keeps this honest is the **Liskov Substitution Principle**: any implementation must be usable wherever the interface is expected, without the caller needing to know which one it got. A subtype that throws on an operation the interface promises, or demands stricter inputs, breaks the substitution and forces callers to type-check — at which point the abstraction has stopped paying for itself.

"Program to an interface, not an implementation" is the practical instruction. Declare parameters, fields and return types in terms of the capability you need. It keeps modules decoupled, makes test doubles trivial (a fake implementation is just another implementation), and confines the choice of concrete class to one place. Languages differ in how this is spelled — Java's \`interface\`, C++'s abstract classes, Python's duck typing and protocols — but the design idea is identical.`,
        ensures: [
          'Define an interface as a set of operations, without implementation',
          'Implement one interface several ways and swap between them',
          'Explain dynamic dispatch and when the implementation is chosen',
          'Apply the Liskov Substitution Principle to spot bad subtypes',
          'Depend on interfaces in signatures and confine construction to one place',
          'Use interfaces to make code testable with fakes and stubs'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How a polymorphic call resolves',
        loop: false,
        steps: [
          { icon: 'file-contract', label: 'Interface declares', desc: '`PaymentMethod.charge(amount)` — a promise, no code' },
          { icon: 'cubes', label: 'Several implementations', desc: 'Card, BankTransfer, Wallet — each with its own `charge`' },
          { icon: 'link', label: 'Caller holds the interface', desc: '`PaymentMethod m = chooseFor(order);`' },
          { icon: 'play', label: 'Call the operation', desc: '`m.charge(total)` — the caller does not know the concrete type' },
          { icon: 'shuffle', label: 'Runtime dispatch', desc: 'The object\'s real class decides which `charge` executes' },
          { icon: 'plus', label: 'Add a new type', desc: 'A new implementation needs no change to the calling code at all' }
        ]
      },
      example: {
        title: 'One contract, many implementations',
        items: [
          '**`interface PaymentMethod { Receipt charge(Money amount); }`** — the capability, stated once',
          '**`class CardPayment implements PaymentMethod`** — one way of doing it',
          '**`class BankTransfer implements PaymentMethod`** — another, entirely different inside',
          '**`PaymentMethod m = new CardPayment(...);`** — the variable\'s type is the contract',
          '**`m.charge(total);`** — dispatched at run time to `CardPayment.charge`',
          '**`List<PaymentMethod> methods`** — a collection holding any mix of implementations',
          '**`void checkout(PaymentMethod m)`** — depend on the capability, never the concrete class',
          '**`class FakePayment implements PaymentMethod`** — a test double, no mocking framework needed',
          '**Adding `CryptoPayment`** — no change to `checkout`, the list, or any existing caller',
          '**Violation:** an implementation whose `charge` throws "not supported" — callers must now check types',
          '**Python:** no `implements` keyword; anything with a `charge` method fits (duck typing)',
          '**Construction in one place** — a factory or config decides the concrete type; nothing else knows it'
        ]
      },
      takeaways: [
        '**An interface names a capability.** It lets code state what it needs — "something chargeable" — instead of naming a specific class it happens to have.',
        '**Dynamic dispatch is the mechanism.** The variable\'s declared type decides what you may call; the object\'s real type decides what runs.',
        '**Polymorphism replaces conditionals over types.** A long `if type == A ... else if type == B` chain is usually an interface waiting to be extracted.',
        '**Liskov: a subtype must be usable without the caller knowing.** If callers must check which implementation they have, the abstraction is broken.',
        '**Program to interfaces to decouple modules.** Only the wiring code knows the concrete classes; everything else depends on contracts.',
        '**Testability is the everyday payoff.** A fake implementation of a small interface beats an elaborate mock of a concrete class every time.',
        '**Keep interfaces small.** A narrow interface is easy to implement and hard to break; a wide one forces implementers to provide operations they do not have.',
        '**You cannot instantiate an interface.** You instantiate an implementation and hold it by the interface type — the reference is the contract, the object is the reality.',
        '**Duck typing is the same idea without the declaration.** Python cares that the method exists, not that a keyword was written — so documenting the expected operations matters more.'
      ],
      reflection: 'Find a `switch` or `if/else` chain in your code that branches on a type or a "kind" field. Sketch the interface hiding inside it, and what each branch would become. What would adding a new kind cost before and after?',
      checks: [
        'What does an interface define, and what does it deliberately not define?',
        'When is it decided which implementation actually runs?',
        'What is the Liskov Substitution Principle, in practical terms?',
        'Why does programming to an interface make code easier to test?',
        'What does a long type-based `if/else` chain usually indicate?',
        'Why are narrow interfaces better than wide ones?',
        'Can you create an instance of an interface?'
      ]
    },
    {
      id: 'inheritance-composition',
      title: 'Inheritance & Composition',
      blurb: 'IS-A versus HAS-A: reusing behaviour by extending a class, or by holding one — and why the second usually wins.',
      whatIs: {
        text: `**Inheritance** lets a subclass take a parent's fields and methods and add or override some: \`class SavingsAccount extends Account\`. It expresses an **IS-A** relationship and gives you polymorphism for free. **Composition** gives an object a field holding another object and delegates to it: \`class Car { private Engine engine; }\`. It expresses **HAS-A**.

Both reuse code, but they differ in how tightly they bind. A subclass depends on its parent's internals, not just its public interface — which is the **fragile base class** problem: a harmless-looking change in the parent silently breaks subclasses, and the parent's author usually cannot tell which changes are safe. Composition depends only on the contained object's public interface, so it survives internal changes.

Inheritance also fixes the relationship at compile time. An object cannot change its class, so behaviour chosen by inheritance cannot vary at run time, and combinations multiply classes: three optional behaviours require eight subclasses. Composition assembles the same combinations by holding different collaborators, decided whenever you like.

Hence the standard advice: **prefer composition over inheritance**. Inheritance earns its place when there is a genuine IS-A relationship, the parent was designed to be extended (documented hooks, sensible defaults), and the subtype is substitutable everywhere the parent is. When you only want to reuse some code, composition is almost always the better answer — and interfaces still give you the polymorphism.`,
        ensures: [
          'Tell an IS-A relationship from a HAS-A one',
          'Reuse behaviour by delegation as fluently as by extension',
          'Explain the fragile base class problem',
          'Recognise when a class hierarchy is being used to share code rather than model a type',
          'Keep hierarchies shallow and substitutable',
          'Get polymorphism from interfaces without deep inheritance'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Choosing between extending and holding',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'What is the relationship?', desc: 'Is it genuinely a kind of the other thing?' },
          { icon: 'sitemap', label: 'IS-A → inheritance', desc: 'A SavingsAccount is an Account, everywhere, always' },
          { icon: 'puzzle-piece', label: 'HAS-A → composition', desc: 'A Car has an Engine; it is not a kind of engine' },
          { icon: 'triangle-exclamation', label: 'Only sharing code?', desc: 'Reuse is not a type relationship — compose or extract a helper' },
          { icon: 'scale-balanced', label: 'Substitutable?', desc: 'If callers would need to know which subclass they hold, do not subclass' },
          { icon: 'file-contract', label: 'Need polymorphism?', desc: 'Take it from an interface, and get the reuse from composition' }
        ]
      },
      example: {
        title: 'The same feature, two ways',
        items: [
          '**Inheritance:** `class SavingsAccount extends Account` — inherits deposit, adds interest',
          '**Composition:** `class Car { private Engine engine; }` — delegates `start()` to the engine',
          '**IS-A test:** "a SavingsAccount is an Account" — true everywhere an Account is expected',
          '**HAS-A test:** "a Car is an Engine" — obviously false, so composition',
          '**Fragile base class:** `Account.deposit` starts calling `log()`; every subclass overriding `log` now behaves differently',
          '**Combination explosion:** milk × syrup × decaf as subclasses = eight classes; as fields, one',
          '**Runtime flexibility:** a composed strategy can be swapped after construction; a superclass cannot',
          '**Deep hierarchy smell:** `PremiumInternationalBusinessAccount extends ...` four levels up',
          '**Better:** `Account` with a `FeePolicy` and an `InterestPolicy` it holds',
          '**Interface + composition:** implement `Chargeable`, delegate the work to a collaborator — polymorphism without coupling'
        ]
      },
      takeaways: [
        '**Inheritance is for IS-A, composition is for HAS-A.** Say the sentence out loud; if it sounds wrong, the code is wrong.',
        '**Inheriting to reuse code is the classic misuse.** Needing a method someone else wrote is not a type relationship — hold the object, or extract the logic.',
        '**Subclasses couple to the parent\'s internals.** That is the fragile base class problem: the parent cannot evolve without risking every subclass, and the risk is invisible.',
        '**Inheritance is fixed at compile time; composition can vary at run time.** If behaviour needs to change per instance or per call, only one of these can do it.',
        '**Combinations multiply subclasses and add fields.** Each independent option doubles a hierarchy; in a composed design it is one more collaborator.',
        '**Keep hierarchies shallow.** Two levels is usually plenty. Deep trees make behaviour impossible to locate — the code that runs is scattered across five files.',
        '**Overriding to disable is a design error.** A subclass whose override throws "not supported" is announcing that it is not really a subtype.',
        '**Interfaces give polymorphism without inheritance\'s coupling.** Implement the contract, compose the behaviour — the pattern behind Strategy, Decorator and most of the rest.',
        '**When inheritance is right, design for it explicitly:** document what subclasses may override, and make everything else final or private.'
      ],
      reflection: 'A `Stack` class is implemented by extending `ArrayList`. It works. Now a caller uses the inherited `add(index, item)` to insert at the bottom. What invariant just broke, and which relationship — IS-A or HAS-A — was the honest one?',
      checks: [
        'What is the difference between IS-A and HAS-A?',
        'What is the fragile base class problem?',
        'Why does inheritance struggle with combinations of optional behaviour?',
        'What is wrong with an override that throws "not supported"?',
        'Why are deep hierarchies hard to work with?',
        'How do you get polymorphism without inheritance?',
        'When is inheritance genuinely the right choice?'
      ]
    },
    {
      id: 'immutability',
      title: 'Immutability & Value Objects',
      blurb: 'Objects that cannot change after construction — the cheapest way to remove a whole class of bugs.',
      whatIs: {
        text: `An **immutable** object is one whose state is fixed at construction: no setters, no mutable fields, and any "change" produces a new object instead. \`Money\`, \`LocalDate\`, and \`String\` in most languages work this way. It sounds restrictive and turns out to be liberating.

The reason is that immutability deletes several problems at once. Aliasing stops mattering — if nobody can change the object, sharing it is free and defensive copies are unnecessary. Thread safety comes for nothing, because there is no state to race on. Objects stay valid as hash keys, since their hash cannot drift while they sit in a map. And reasoning gets simpler: a value you were handed cannot change beneath you between two lines of your own code.

This pairs with a modelling distinction. A **value object** is defined entirely by its contents — two \`Money(5, "GBP")\` instances are interchangeable, so equality is by value and immutability is natural. An **entity** has an identity that persists as its attributes change — a \`Customer\` is the same customer after moving house, so it is compared by id and usually mutable. Deciding which of the two a concept is settles both equality and mutability at once.

The cost is allocation: producing a new object per change. In practice that is almost always cheaper than the bugs avoided, and modern languages provide direct support — \`record\` in Java, \`@dataclass(frozen=True)\` in Python, \`readonly\`/\`const\` elsewhere. Make classes immutable by default; make them mutable when there is a reason.`,
        ensures: [
          'Build a class that cannot be modified after construction',
          'Distinguish value objects from entities and treat each accordingly',
          'Return new objects instead of mutating in place',
          'Understand why immutability gives thread safety and safe sharing',
          'Protect mutable fields with copies where immutability is not possible',
          'Use the language\'s support: records, frozen dataclasses, readonly fields'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Changing an immutable value',
        loop: false,
        steps: [
          { icon: 'lock', label: 'Constructed once', desc: '`Money(10, "GBP")` — validated, then fixed forever' },
          { icon: 'share-nodes', label: 'Shared freely', desc: 'Any number of references; no copies needed, no locks' },
          { icon: 'plus', label: '`add(5)` is asked for', desc: 'Nothing is modified' },
          { icon: 'cube', label: 'New object returned', desc: '`Money(15, "GBP")` — the original still reads 10' },
          { icon: 'circle-check', label: 'Old references unaffected', desc: 'No caller can be surprised by a change it did not make' }
        ]
      },
      example: {
        title: 'Immutable values in practice',
        items: [
          '**No setters** — every field is assigned once, in the constructor',
          '**Validate in the constructor** — an immutable object can never become invalid later',
          '**`money.add(5)` returns a new `Money`** — it does not modify the receiver',
          '**`java.time.LocalDate`, `String`, Python `tuple`/`frozenset`** — immutable types you already use',
          '**Equality by value:** two `Money(5, "GBP")` objects are equal and interchangeable',
          '**Safe as a map key** — the hash cannot change while the object sits in the map',
          '**Thread safe by construction** — no writes means no races and no synchronisation',
          '**`record Money(int amount, String currency)`** — Java generates constructor, `equals`, `hashCode`, `toString`',
          '**`@dataclass(frozen=True)`** — the Python equivalent; assignment raises',
          '**Mutable field inside:** copy it in the constructor and on the way out, or the object is not really immutable',
          '**Entity contrast:** `Customer` keeps its id and changes address — compared by id, mutable by design'
        ]
      },
      takeaways: [
        '**Immutable by default.** Make things mutable when there is a reason, not the other way round — the default costs nothing and prevents a category of bugs.',
        '**Immutability makes aliasing harmless.** All the sharing problems disappear when no one can write, which removes the need for defensive copying entirely.',
        '**Thread safety is free.** Data races require a write. Immutable objects can be shared across threads with no locks and no reasoning.',
        '**Validated once, valid forever.** A mutable object must be re-checked after every setter; an immutable one is checked in the constructor and done.',
        '**Value objects are compared by contents; entities by identity.** Deciding which a concept is answers both "what does equality mean?" and "should this be mutable?".',
        '**"Change" becomes "derive".** `withAmount(...)`, `plus(...)`, `toUpperCase()` — return a new object, and the naming makes it obvious that nothing was modified.',
        '**An immutable object holding a mutable field is not immutable.** Copy it in and copy it out, or store an immutable collection.',
        '**Use the language support.** Records and frozen dataclasses remove the boilerplate that used to make immutability tedious.',
        '**The allocation cost is usually irrelevant** — and where it is not, it is a measurable, localised optimisation rather than a design principle.'
      ],
      reflection: 'Take a mutable class with three setters. Rewrite it as immutable, with `with...` methods returning new instances. Which callers become simpler, which become noisier, and would you keep the change?',
      checks: [
        'What makes an object immutable?',
        'Why does immutability remove the need for defensive copies?',
        'Why are immutable objects automatically thread safe?',
        'What is the difference between a value object and an entity?',
        'How does an immutable class offer "changes"?',
        'What breaks immutability if the object holds a list?',
        'Which language features give you immutable types cheaply?'
      ]
    },
    {
      id: 'specs-contracts',
      title: 'Specs & Contracts',
      blurb: 'What a method promises, what it demands in return, and how that shapes both the design and the tests.',
      whatIs: {
        text: `A **specification** is the agreement between a method and its callers, and it has three parts. The **precondition** is what the caller must guarantee (\`amount > 0\`; the list is non-null). The **postcondition** is what the method guarantees in return (the balance increases by exactly the amount; the returned list is sorted). And any **side effects** — files written, state mutated, messages sent — belong in the spec too, because they are effects callers must know about.

Contracts are how you decide who checks what. If the precondition is part of the contract, the method may assume it, and violating it is the caller's bug. If the method is public and takes input from outside the system, it should validate and fail loudly instead. Deciding this deliberately is what prevents both extremes: no checking anywhere, or the same check repeated in every layer.

A spec should be written in terms of the **abstraction**, not the implementation. "Returns the elements in ascending order" is a contract; "runs quicksort over the internal array" is an implementation detail that callers must not rely on and you must be free to change. This is the abstraction barrier — everything on the other side of it is yours to alter.

Specs are also where tests come from. Preconditions give you the invalid inputs to reject; postconditions give you what to assert; boundaries — empty, one element, maximum, duplicates, null — give you the cases that actually break code. Writing the spec first tends to expose design problems while they are still cheap: a method you cannot describe in one sentence is usually doing two things.`,
        ensures: [
          'State preconditions, postconditions and side effects for a method',
          'Decide deliberately who validates what, and where',
          'Write specs in terms of the abstraction, not the implementation',
          'Derive test cases from a contract, including boundaries',
          'Document a contract in the place callers will actually read it',
          'Use "can I state this in one sentence?" as a design check'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A contract at a call boundary',
        loop: false,
        steps: [
          { icon: 'file-signature', label: 'Precondition', desc: 'What the caller must guarantee: `amount > 0`' },
          { icon: 'shield-halved', label: 'Check or trust', desc: 'Validate at the system boundary; trust it internally' },
          { icon: 'gears', label: 'Method executes', desc: 'It may assume its preconditions hold' },
          { icon: 'circle-check', label: 'Postcondition', desc: 'What it guarantees: balance increased by exactly `amount`' },
          { icon: 'bolt', label: 'Side effects', desc: 'State changed, event published — part of the contract, not a secret' },
          { icon: 'vial', label: 'Tests mirror it', desc: 'Reject bad inputs, assert the guarantees, probe the boundaries' }
        ]
      },
      example: {
        title: 'Specifying `withdraw(amount)`',
        items: [
          '**Precondition:** `amount > 0` and `amount <= balance`',
          '**Postcondition:** balance decreases by exactly `amount`; the new balance is returned',
          '**Side effect:** a transaction record is appended to the account history',
          '**Failure behaviour:** throws `InsufficientFunds` — part of the contract, not an accident',
          '**Abstraction-level wording:** "reduces the balance", not "updates the `_cents` field"',
          '**Boundary tests:** `amount` equal to the balance; `amount` one penny over',
          '**Invalid tests:** zero, negative, absurdly large — each should be rejected the documented way',
          '**Partition tests:** typical amount, minimum amount, maximum permitted amount',
          '**Idempotence question:** what if the same withdrawal is submitted twice? The spec should say.',
          '**Doc comment** on the method — the only place callers reliably look',
          '**Design smell:** if the spec needs "and also sends an email", the method is doing two things'
        ]
      },
      takeaways: [
        '**A spec is three things: preconditions, postconditions and side effects.** Missing the third is how "pure-looking" methods surprise people.',
        '**Decide who checks, and check once.** Validate at the system boundary and trust internally, or you end up with the same guard in five layers and still no guarantee.',
        '**Specify the abstraction, not the implementation.** Anything you describe becomes something callers may depend on — describe only what you intend to keep true.',
        '**Failure behaviour is part of the contract.** "Throws `InsufficientFunds`" is as much a promise as the return value, and callers write code against it.',
        '**Tests are the contract, executed.** Preconditions give the rejection cases, postconditions the assertions, boundaries the interesting inputs.',
        '**Boundaries break code far more often than typical values do:** empty, one, maximum, duplicates, null, just-over-the-limit.',
        '**Write the spec before the body.** If you cannot state what a method returns in one sentence, you have found a design problem, not a writing problem.',
        '**Documented contracts outlive their authors.** Six months later, the doc comment is the only reason anyone knows whether null was allowed.',
        '**A contract you cannot state simply is a design signal.** Multiple "if the caller passed X then..." clauses usually mean several methods are hiding in one.'
      ],
      reflection: 'Write the full contract for a method that finds the maximum value in a list. What are the preconditions? What does it do with an empty list — throw, return a sentinel, return an optional? Now list the five tests that contract implies.',
      checks: [
        'What are the three parts of a specification?',
        'Who is responsible when a precondition is violated?',
        'Why should a spec avoid describing the implementation?',
        'Why is the exception a method throws part of its contract?',
        'How do you derive test cases from a contract?',
        'Which inputs are most likely to break code?',
        'What does an unwieldy spec tell you about the design?'
      ]
    },
    {
      id: 'modelling-with-objects',
      title: 'Designing with Objects',
      blurb: 'Assigning responsibilities, keeping coupling low and cohesion high, and knowing when objects are the wrong tool.',
      whatIs: {
        text: `Once the mechanics are familiar, the real work of object-oriented programming (OOP) is **deciding which object should do what**. The most useful question is not "what data does this hold?" but "what is this responsible for?" Behaviour belongs with the data it operates on: if a method spends all its time reaching into another object's fields, it wants to live in that object.

Two properties describe whether a design will hold up. **Cohesion** is how focused a class is — everything in it serving one purpose. **Coupling** is how much classes depend on each other's details. High cohesion and low coupling means a change stays local; low cohesion and high coupling means every change ripples, which is what "legacy code" usually means in practice.

The recognisable failures follow from that. A **god object** that knows everything and coordinates every operation is low cohesion in one class and high coupling to all others. An **anaemic model** — classes with only fields and getters, plus separate "service" classes containing all the logic — has thrown away the reason to use objects at all. Long chains like \`order.getCustomer().getAddress().getCity()\` couple you to three classes' internals; asking the object directly (\`order.shippingCity()\`) keeps that knowledge where it belongs.

And objects are not always the answer. A pure calculation is a function. A configuration is data. A one-off script does not need a class hierarchy. Good design is choosing the lightest structure that expresses the problem — and then letting the shape of the problem, rather than a diagram drawn in advance, decide where the objects go.`,
        ensures: [
          'Assign responsibilities so behaviour sits with the data it uses',
          'Recognise and improve cohesion and coupling',
          'Spot god objects, anaemic models and long delegation chains',
          'Keep dependencies pointing at abstractions, not concrete classes',
          'Choose functions or plain data when objects add nothing',
          'Let the design evolve rather than fixing it before the problem is understood'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Placing a responsibility',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'What must happen?', desc: '"Apply a discount to an order"' },
          { icon: 'database', label: 'Which data does it need?', desc: 'The order lines, the customer tier' },
          { icon: 'hand-point-right', label: 'Put it with that data', desc: 'The object holding the data owns the behaviour' },
          { icon: 'link-slash', label: 'Check the coupling', desc: 'Does it reach into other objects\' internals? Then ask them instead.' },
          { icon: 'scale-balanced', label: 'Check the cohesion', desc: 'Does the class still have one clear purpose?' },
          { icon: 'arrows-rotate', label: 'Refactor as it changes', desc: 'Move the method when the responsibility moves' }
        ]
      },
      example: {
        title: 'Signals in a design',
        items: [
          '**Feature envy:** `ReportGenerator` calls six getters on `Order` — the method belongs on `Order`',
          '**God object:** `SystemManager` with forty methods and every other class as a field',
          '**Anaemic model:** `Order` has only getters; all rules live in `OrderService`',
          '**Long chain:** `order.getCustomer().getAddress().getCity()` — coupled to three classes at once',
          '**Better:** `order.shippingCity()` — ask, do not traverse',
          '**Low cohesion:** a `Utils` class holding date formatting, network retries and tax rules',
          '**High coupling:** changing a private field forces edits in five other files',
          '**Dependency direction:** the domain defines the interface; the database implementation depends on it, not the reverse',
          '**Not an object:** `calculateVat(amount, rate)` is a function; wrapping it in a class adds nothing',
          '**Not an object:** a config file parsed into a plain record — data, not behaviour',
          '**Healthy sign:** a new requirement touches one class, and the test for it is easy to write'
        ]
      },
      takeaways: [
        '**Put behaviour where the data is.** A method that constantly asks another object for its fields is a method living in the wrong class.',
        '**High cohesion, low coupling.** Every design guideline in OOP is ultimately a way of saying this; it is also what makes changes cheap.',
        '**A god object is a design that never got decomposed.** The fix is not smaller methods but real responsibilities split into real classes.',
        '**An anaemic model gives up OOP\'s main benefit.** If all the logic lives in services and the classes are bags of getters, you have procedures with extra ceremony.',
        '**Tell, don\'t ask.** `order.applyDiscount(code)` keeps the rules inside the object; pulling data out to decide externally spreads them everywhere.',
        '**Avoid long delegation chains.** Each `.get()` couples you to another class\'s structure — ask for the answer, not for the objects on the way to it.',
        '**Point dependencies at abstractions.** The domain should not know about the database; the database should implement an interface the domain defines.',
        '**Not everything is an object.** Pure calculations are functions, configuration is data, and a script is a script. Structure should be earned.',
        '**Good design shows up as cheap change.** If a plausible new requirement means editing one class and one test, the design is working — regardless of how it looks on a diagram.',
        '**Let it evolve.** The right responsibilities are usually clearer after the second requirement than before the first; move methods as understanding improves.'
      ],
      reflection: 'Pick a recent change you made that touched five files. Was that because the change was genuinely broad, or because responsibilities were in the wrong places? Which single method, moved to a different class, would have made it a one-file change?',
      checks: [
        'What question decides where a behaviour belongs?',
        'What do cohesion and coupling mean, and which way do you want each?',
        'What is a god object, and what does it indicate?',
        'What is an anaemic domain model, and what has been lost?',
        'Why is `a.getB().getC().getD()` a problem?',
        'Which way should dependencies point between a domain and a database?',
        'When is a plain function better than a class?'
      ]
    }
  ]
}
