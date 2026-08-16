export default {
  id: 'java',
  title: 'Java',
  tone: 'c3',
  blurb: 'The JVM, static typing, control flow, arrays and strings, the collections framework, exceptions and generics, and the build ecosystem around them.',
  tags: ['Language', 'Enterprise', 'JVM', 'Statically typed'],
  popups: [
    {
      id: 'jvm-fundamentals',
      title: 'The JVM: Compile, Load, Run',
      blurb: 'From `.java` to running code — bytecode, the class loader, the just-in-time (JIT) compiler, and what portability really buys you.',
      whatIs: {
        text: `Java is compiled, but not to machine code. \`javac\` turns each \`.java\` file into a \`.class\` file of **bytecode** — instructions for an imaginary machine. The **Java Virtual Machine (JVM)** then loads that bytecode and executes it on the real hardware. This is the whole "write once, run anywhere" idea: the same \`.class\` file runs on Windows, Linux and macOS because each platform ships its own JVM.

Running is more than reading instructions. The JVM's **class loader** finds and loads classes on demand — the first time a class is actually used, not at startup — and a **verifier** checks the bytecode is well-formed before it is allowed to run. Then execution begins in an interpreter, and the **JIT compiler** watches. Methods that run often ("hot" methods) get compiled to native machine code and optimised with knowledge the interpreter has, such as which branches actually get taken. This is why a long-running Java service is fast even though it started out interpreted, and why microbenchmarks that run for a second measure the wrong thing.

The JVM also **manages memory for you**. Objects live on the heap; the garbage collector reclaims those nothing references any more. You never call \`free\`. The trade is that you give up control over exactly when that happens, which matters for latency-sensitive work but almost never for ordinary applications.

Three acronyms get confused. The **JVM** runs bytecode. The **Java Runtime Environment (JRE)** is the JVM plus the standard class library — enough to run programs. The **Java Development Kit (JDK)** is the JRE plus tools like \`javac\` — what you need to develop. Versions matter too: Java 8, 11, 17 and 21 are the long-term-support (LTS) releases you will meet in real codebases.`,
        ensures: [
          'Explain the path from `.java` source to executing code',
          'Know what bytecode is and why it is not machine code',
          'Understand class loading, verification and JIT compilation',
          'Know that the garbage collector, not you, frees objects',
          'Distinguish JDK, JRE and JVM',
          'Use `javac` and `java` from the command line'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From source file to native instructions',
        loop: false,
        steps: [
          { icon: 'file-code', label: 'Source', desc: '`Main.java` — human-readable text' },
          { icon: 'gears', label: '`javac` compiles', desc: 'Type-checks, then emits `Main.class` bytecode' },
          { icon: 'box-open', label: 'Class loader', desc: 'JVM loads each class the first time it is used' },
          { icon: 'shield-halved', label: 'Verifier', desc: 'Rejects malformed or unsafe bytecode before it runs' },
          { icon: 'play', label: 'Interpret', desc: 'Bytecode executes instruction by instruction' },
          { icon: 'bolt', label: 'JIT compiles hot paths', desc: 'Frequently run methods become optimised native code' }
        ]
      },
      example: {
        title: 'Building and running by hand',
        items: [
          '**`javac Main.java`** — compiles to `Main.class`; type errors stop you here, before anything runs',
          '**`java Main`** — starts a JVM, loads `Main`, calls its `main` method',
          '**`java Main.java`** — single-file source launch (Java 11+): compiles in memory, useful for scripts',
          '**`javap -c Main`** — disassemble the bytecode; worth doing once to see what the compiler produced',
          '**`java -version`** vs **`javac -version`** — a classic mismatch: compiled with a newer JDK than you run',
          '**`java -Xmx512m Main`** — cap the heap; the JVM otherwise sizes it from available memory',
          '**The same `Main.class` runs unchanged** on Windows, Linux and macOS — the JVM absorbs the differences',
          '**`UnsupportedClassVersionError`** — compiled for a newer Java than the JVM running it',
          '**`NoClassDefFoundError`** — the class loader could not find a class; almost always a classpath problem'
        ]
      },
      takeaways: [
        '**Two steps, two kinds of error.** `javac` catches type and syntax errors before your program exists; the JVM reports missing classes, nulls and bad casts while it runs.',
        '**Bytecode is the portability boundary.** Your build produces one artefact and every platform\'s JVM knows how to run it — the platform differences live inside the JVM, not your code.',
        '**The JIT is why Java is fast.** Hot methods get compiled to native code with real profiling data behind the optimisation, which is information an ahead-of-time compiler never has.',
        '**Warm-up is real.** The first thousand calls to a method are slower than the millionth. Benchmarks that ignore this measure the interpreter, not your program.',
        '**Garbage collection removes a whole class of bugs** — leaks from forgotten frees, use-after-free, double-free — at the cost of pauses you do not schedule.',
        '**JDK to build, JRE to run, JVM to execute.** If `javac` is "not found", you have a JRE, not a JDK.',
        '**LTS versions are what teams actually run:** 8, 11, 17, 21. Language features you read about may simply not exist in the version your project targets.',
        '**Classpath problems dominate early Java pain.** `NoClassDefFoundError` almost never means the code is wrong — it means the JVM was not told where to find something.'
      ],
      reflection: 'Compile a small class and run `javap -c` on it. Find the bytecode for a simple `for` loop. What does the JVM see that your source code does not show — and what does that tell you about what `javac` actually does?',
      checks: [
        'What does `javac` produce, and what does `java` consume?',
        'Why can the same `.class` file run on three operating systems?',
        'What does the JIT compiler do that the interpreter does not?',
        'Who frees objects in Java, and when?',
        'What is the difference between the JDK, the JRE and the JVM?',
        'What does `NoClassDefFoundError` usually mean?'
      ]
    },
    {
      id: 'java-syntax',
      title: 'Static Typing & Syntax Basics',
      blurb: 'Declaring types, primitives versus references, and the shape every Java file has to take.',
      whatIs: {
        text: `Java is **statically typed**: every variable has a declared type and the compiler checks every assignment and every call against it. \`int count = 5;\` is a contract — \`count\` will hold an integer for its whole life. This is more typing up front in exchange for a large class of mistakes being impossible to ship: misspelled methods, wrong argument types and bad returns are all compile errors rather than production incidents.

Values come in two flavours. **Primitives** (\`int\`, \`double\`, \`boolean\`, \`char\`, \`long\`, \`float\`, \`short\`, \`byte\`) hold the value directly and live in the stack frame or inside an object; they are fast and can never be null. **Reference types** — every class, including \`String\` and the array types — hold an address pointing to an object on the heap. That distinction explains most Java surprises: assigning a primitive copies the value, assigning a reference copies the pointer, and \`==\` on references compares addresses, not contents.

Each primitive has a **wrapper class** (\`int\`/\`Integer\`, \`double\`/\`Double\`). Collections can only hold objects, so Java auto-boxes between them — convenient, but it means an \`Integer\` can be \`null\`, and unboxing a null throws a \`NullPointerException\` at a line that looks like plain arithmetic.

Java's structure is rigid: code lives in methods, methods live in classes, classes live in files and packages. Statements end with semicolons, blocks use braces, and indentation is purely for humans. A program starts at \`public static void main(String[] args)\`. The conventions are near-universal — \`PascalCase\` for classes, \`camelCase\` for methods and variables, \`UPPER_SNAKE_CASE\` for constants — and following them is not optional in a team.`,
        ensures: [
          'Declare typed variables and understand what the compiler checks',
          'Distinguish primitives from reference types, and stack from heap',
          'Understand wrappers, autoboxing, and where `null` can appear',
          'Cast safely and know when a cast loses information',
          'Use `final`, `static` and access modifiers correctly',
          'Write a class with a `main` method and follow Java naming conventions'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Where a value actually lives',
        loop: false,
        steps: [
          { icon: 'layer-group', label: 'Stack frame', desc: 'One per method call; holds locals and disappears on return' },
          { icon: 'hashtag', label: '`int x = 5`', desc: 'Primitive: the value 5 sits in the frame itself' },
          { icon: 'link', label: '`String s = "hi"`', desc: 'Reference: the frame holds an address, not the text' },
          { icon: 'box', label: 'Heap object', desc: 'The actual `String` lives on the heap, shared and garbage-collected' },
          { icon: 'copy', label: 'Assignment copies', desc: '`int b = x` copies 5; `String t = s` copies the address — one object, two names' }
        ]
      },
      example: {
        title: 'Types, values and declarations',
        items: [
          '**`int count = 5;`** — declared type, then name, then value; the semicolon is required',
          '**`double price = 19.99;`** — use `BigDecimal` for money; `double` is an approximation',
          '**`boolean active = true;`** — no truthiness in Java: `if (count)` does not compile',
          '**`String name = "Alice";`** — a reference type, though it looks built in',
          '**`final int MAX_USERS = 100;`** — `final` means the binding cannot be reassigned',
          '**`var total = 0;`** — Java 10+ infers the type; it is still static, just not written out',
          '**`int y = (int) 3.99;`** — narrowing cast truncates to `3`; no rounding, no warning',
          '**`Integer boxed = 42;`** — autoboxing to the wrapper; `boxed` can also be `null`',
          '**`int back = boxed;`** — auto-unboxing; if `boxed` is null this throws `NullPointerException`',
          '**`a == b` on two `String`s** — compares references. Use `a.equals(b)` for contents.',
          '**`public static void main(String[] args)`** — the entry point every runnable class needs',
          '**`private`, `public`, `protected`, package-private** — control who can see a field or method'
        ]
      },
      takeaways: [
        '**The compiler is the first test suite.** Static typing turns "this will fail on a rare input" into "this does not build" — the earliest and cheapest place to find a mistake.',
        '**Primitives hold values, references hold addresses.** Nearly every confusing Java behaviour — equality, copying, mutation through a parameter — comes back to that one distinction.',
        '**`==` on objects asks "the same object?"; `.equals()` asks "the same value?"** For strings, always `.equals()`. Comparing strings with `==` sometimes works by accident (the string pool), which makes the bug worse, not better.',
        '**Wrappers can be null; primitives cannot.** An `Integer` that arrives null and gets unboxed throws a `NullPointerException` on a line containing nothing but arithmetic.',
        '**`final` marks the binding, not the object.** A `final List` cannot be reassigned but can still be added to. Use it liberally: it documents intent and prevents accidental reassignment.',
        '**Casting down can lose data silently.** `(int) 3.99` gives `3`, and a bad object cast gives `ClassCastException` at runtime — the cast is you telling the compiler to stop checking.',
        '**`static` belongs to the class, not the instance.** One copy shared by everything — right for constants and utilities, wrong for anything that varies per object.',
        '**Access modifiers are design, not decoration.** Start with `private` and open up only when something genuinely needs to be part of the public surface.',
        '**`var` reduces noise, not type safety.** `var users = new ArrayList<String>()` is fine; `var x = service.get()` hides what you are working with.'
      ],
      reflection: 'Write two lines: `int a = 5; int b = a;` and `int[] x = {5}; int[] y = x;`. Change `b` and then `y[0]`. Which change is visible through the original name, and why does that make `==` on objects such a common source of bugs?',
      checks: [
        'What does static typing let the compiler catch that a dynamic language cannot?',
        'What is the difference between a primitive and a reference type?',
        'Why should you compare strings with `.equals()` rather than `==`?',
        'What is autoboxing, and how can it produce a `NullPointerException`?',
        'What does `final` actually prevent?',
        'What happens when you cast a `double` to an `int`?',
        'What does `static` mean on a field?'
      ]
    },
    {
      id: 'control-flow-java',
      title: 'Control Flow & Methods',
      blurb: 'Branching, looping, and the method calls that build up (and unwind) the call stack.',
      whatIs: {
        text: `Java's control flow is the C family's: \`if\` / \`else if\` / \`else\`, \`for\`, \`while\`, \`do-while\` and \`switch\`, with blocks marked by braces. Conditions must be genuine booleans — there is no truthiness, so \`if (list)\` does not compile and \`if (!list.isEmpty())\` says what you mean.

There are two \`for\` loops and they are not interchangeable. The classic \`for (int i = 0; i < n; i++)\` is for when the index itself matters. The **enhanced for** — \`for (String name : names)\` — is for when you just want each element, which is most of the time; it removes off-by-one errors entirely and works over anything \`Iterable\`.

A **method** is a named, typed block of behaviour: modifiers, return type, name, parameters. Calling one pushes a **stack frame** holding its locals and its return address; returning pops that frame. That structure is exactly what a stack trace prints, which is why reading one is really reading the history of calls that led to a failure — and why unbounded recursion produces \`StackOverflowError\`.

Java allows **overloading**: several methods with the same name distinguished by their parameter lists. The compiler picks one by the static types at the call site, before anything runs. That makes overloading fundamentally different from overriding, where the *runtime* type of the object decides which implementation executes.`,
        ensures: [
          'Write `if` / `else if` / `else` with genuine boolean conditions',
          'Choose between the classic and enhanced `for` loop',
          'Use `while`, `do-while`, `break` and `continue` appropriately',
          'Write a switch statement (and a modern switch expression)',
          'Define methods with parameters and return types, including `void`',
          'Explain overloading, and how the call stack produces a stack trace'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A method call and the call stack',
        loop: false,
        steps: [
          { icon: 'play', label: '`main` runs', desc: 'The Java Virtual Machine (JVM) pushes a frame for `main`' },
          { icon: 'arrow-right', label: 'Calls `process(data)`', desc: 'Arguments are copied into the new frame' },
          { icon: 'layer-group', label: 'Frame pushed', desc: 'Locals, parameters and return address live here' },
          { icon: 'code', label: 'Body executes', desc: 'It may call further methods, stacking more frames' },
          { icon: 'arrow-left', label: '`return` pops the frame', desc: 'Locals vanish; the value goes back to the caller' },
          { icon: 'triangle-exclamation', label: 'Or it throws', desc: 'Frames unwind one by one — that list is the stack trace' }
        ]
      },
      example: {
        title: 'Branches, loops and methods',
        items: [
          '**`if (score >= 90) { ... } else if (score >= 50) { ... } else { ... }`** — first match wins',
          '**`if (!names.isEmpty())`** — no truthiness; the condition must be a `boolean`',
          '**`for (int i = 0; i < n; i++)`** — use when the index is part of the logic',
          '**`for (String name : names)`** — the default loop: no index, no off-by-one',
          '**`while (retries < 3) { ... }`** — unknown number of iterations',
          '**`do { ... } while (cond);`** — body runs at least once before the test',
          '**`switch (day) { case MONDAY -> ...; default -> ...; }`** — arrow form (Java 14+), no fall-through',
          '**`case 1: ... break;`** — classic form; a missing `break` falls through to the next case',
          '**`public int add(int a, int b) { return a + b; }`** — modifier, return type, name, parameters',
          '**`public void log(String msg) { ... }`** — `void` returns nothing',
          '**`add(int, int)` and `add(double, double)`** — overloading; the compiler picks by argument types',
          '**`StackOverflowError`** — recursion with no base case: frames pushed until the stack is exhausted'
        ]
      },
      takeaways: [
        '**Prefer the enhanced `for`.** `for (T item : items)` cannot go out of bounds and states the intent. Reach for an index only when the position genuinely matters.',
        '**Braces even for one-line bodies.** The cost is one line; the benefit is that adding a second statement later cannot silently escape the `if`.',
        '**Java has no truthiness.** Conditions are booleans, which makes `if (x = 5)` a compile error rather than the classic C bug.',
        '**Modern switch expressions are safer.** The `->` form has no fall-through, can produce a value, and the compiler checks that an enum switch is exhaustive.',
        '**A method should do one thing** and its name should say what it returns. Long methods are where bugs hide, because no one can hold the whole thing in their head.',
        '**Every call pushes a frame; every return pops one.** A stack trace is that stack printed top-down — the top line is where it broke, the lines below are how it got there.',
        '**Overloading is resolved at compile time by static types; overriding is resolved at run time by the actual object.** Mixing the two up produces behaviour that looks impossible.',
        '**Arguments are passed by value — always.** Passing an object copies the reference, so the method can mutate the object but cannot repoint your variable.',
        '**Recursion needs a base case that is definitely reached.** Without one you do not get a hang, you get a `StackOverflowError` — which is at least a clear diagnosis.'
      ],
      reflection: 'Write a method that sums an array two ways: with an indexed `for` and with an enhanced `for`. Now suppose the requirement changes to "sum every second element". Which version changes more gracefully, and what does that tell you about choosing a loop?',
      checks: [
        'When is a classic indexed `for` the right choice over an enhanced one?',
        'Why does `if (myList)` not compile in Java?',
        'What happens if you forget `break` in a classic switch?',
        'What does `void` mean on a method?',
        'What is method overloading, and when is it resolved?',
        'What is a stack frame, and how does it relate to a stack trace?',
        'If you pass an object to a method, can that method change your object?'
      ]
    },
    {
      id: 'arrays-strings',
      title: 'Arrays & Strings',
      blurb: 'Fixed-size storage, immutable text, the string pool, and why `StringBuilder` exists.',
      whatIs: {
        text: `An **array** is a fixed-length block of memory holding elements of one type, indexed from zero. \`new int[10]\` reserves ten slots and fills them with the type's default (\`0\`, \`false\`, or \`null\`); \`arr.length\` is a field, not a method. The size is decided when it is created and can never change — to "grow" one you allocate a bigger array and copy. That is precisely what \`ArrayList\` does for you, which is why arrays are mostly for low-level or performance-critical code and collections are the everyday choice.

A \`String\` is **immutable**. Every operation that appears to modify one — \`concat\`, \`substring\`, \`toUpperCase\`, \`replace\` — returns a new object and leaves the original untouched. That immutability is what makes strings safe to share across threads, safe as map keys, and safely cacheable.

The cache is the **string pool**. String literals with the same text are interned to one shared object, so \`"hi" == "hi"\` happens to be true while \`new String("hi") == new String("hi")\` is false. This is the single best argument for never comparing strings with \`==\`: the bug hides whenever the values are literals and appears the moment they come from input or a database.

Immutability has a cost. Building a string in a loop with \`+=\` allocates a new object every iteration — quadratic work and a pile of garbage. \`StringBuilder\` keeps a mutable buffer and produces the final string once. For a handful of concatenations the compiler optimises \`+\` for you; inside a loop, use a builder.`,
        ensures: [
          'Create, index and iterate arrays, including 2D arrays',
          'Explain what String immutability means for your code',
          'Compare strings correctly with `.equals()` and `.equalsIgnoreCase()`',
          'Understand the string pool and why `==` sometimes appears to work',
          'Use `StringBuilder` when building strings in a loop',
          'Know the common `String` methods and when to use an `ArrayList` instead of an array'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What `s += "!"` really does',
        loop: false,
        steps: [
          { icon: 'font', label: '`String s = "hi"`', desc: 'Literal interned in the string pool' },
          { icon: 'plus', label: '`s += "!"`', desc: 'Nothing is appended — Java cannot modify a String' },
          { icon: 'box', label: 'New object allocated', desc: '`"hi!"` is built as a brand-new String on the heap' },
          { icon: 'link', label: 'Reference rebound', desc: '`s` now points at the new object' },
          { icon: 'trash', label: 'Old string is garbage', desc: 'Unreferenced — collected later. In a loop, this repeats every iteration.' }
        ]
      },
      example: {
        title: 'Working with arrays and text',
        items: [
          '**`int[] nums = {3, 1, 2};`** — array literal, length fixed at 3 forever',
          '**`String[] names = new String[10];`** — ten slots, every one initialised to `null`',
          '**`nums.length`** — a field, not `length()`; strings use `s.length()`, which trips everyone up once',
          '**`nums[3]`** on a length-3 array → **`ArrayIndexOutOfBoundsException`** — valid indices are `0..length-1`',
          '**`for (int n : nums)`** — iterate without touching indices at all',
          '**`int[][] grid = new int[3][4];`** — 2D array: three rows of four',
          '**`Arrays.toString(nums)`** — printing an array directly gives you `[I@1b6d3586`, not the contents',
          '**`s.substring(0, 3)`** — returns a new string; `s` is unchanged',
          '**`a.equals(b)`** — compares contents; **`a == b`** compares identity',
          '**`"hi".equals(input)`** — literal first, so a null `input` returns false instead of throwing',
          '**`new StringBuilder().append(x).append(y).toString()`** — the way to build strings in a loop',
          '**`String.join(", ", names)`** / **`s.split(",")`** — the everyday joins and splits'
        ]
      },
      takeaways: [
        '**Arrays are fixed-size; that is the whole trade-off.** Fast, compact, predictable — and if you need to add or remove elements, you wanted an `ArrayList`.',
        '**Indexing starts at zero and ends at `length - 1`.** `ArrayIndexOutOfBoundsException` names the bad index in its message, which is usually the entire debugging session.',
        '**`array.length` is a field, `string.length()` is a method, `list.size()` is a different method again.** An inconsistency of the language worth memorising rather than fighting.',
        '**Strings never change.** Every "modification" produces a new object, so `s.toUpperCase();` on its own line does nothing at all — you have to assign the result.',
        '**Compare strings with `.equals()`, always.** `==` compares references; it works by accident on pooled literals and fails on identical text that came from input.',
        '**Put the literal first: `"yes".equals(answer)`.** It is null-safe, so a null answer is simply false rather than a `NullPointerException`.',
        '**`+` in a loop is quadratic.** Each iteration allocates and copies. `StringBuilder` allocates once and appends, turning O(n²) work into O(n).',
        '**Immutability is a feature.** It is why strings can be shared between threads without locks, cached in the pool, and used safely as `HashMap` keys.',
        '**Print arrays with `Arrays.toString`** (or `Arrays.deepToString` for 2D). Printing the array itself shows a type tag and a hash code, which helps nobody.'
      ],
      reflection: 'Build a 10,000-line report two ways: with `result += line` in a loop, and with a `StringBuilder`. Before running it, predict the ratio in run time. Then think about what the first version leaves behind for the garbage collector.',
      checks: [
        'Can you change the size of an array after creating it?',
        'What are the valid indices for an array of length 5?',
        'What does `s.toUpperCase()` do to `s`?',
        'Why is `==` on strings unreliable?',
        'What is the string pool, and how does it create false confidence?',
        'When should you use `StringBuilder` instead of `+`?',
        'Why is `"yes".equals(input)` safer than `input.equals("yes")`?'
      ]
    },
    {
      id: 'collections',
      title: 'The Collections Framework',
      blurb: 'List, Set, Map and Queue — the interfaces, the implementations, and how to pick the right one.',
      whatIs: {
        text: `The collections framework is built on a simple idea: **program to the interface, choose the implementation**. \`List\`, \`Set\`, \`Map\` and \`Queue\` describe *what* a collection does; \`ArrayList\`, \`HashSet\`, \`HashMap\` and \`ArrayDeque\` decide *how*. Writing \`List<String> names = new ArrayList<>();\` means you can swap in a different list later without touching a single line of code that uses it.

Each interface answers a different question. A **List** is an ordered sequence that allows duplicates — use it when position matters. A **Set** holds unique elements and answers "is this in here?" in constant time. A **Map** stores key-value pairs and is the workhorse of almost every real program: lookups, counts, caches, indexes. A **Queue**/**Deque** is for processing order — first-in-first-out (FIFO) work queues, last-in-first-out (LIFO) stacks.

Implementations differ in cost, and that is the whole reason to have more than one. \`ArrayList\` gives O(1) access by index but O(n) insertion at the front; \`LinkedList\` is the reverse. \`HashMap\` gives average O(1) lookup with no ordering; \`TreeMap\` gives O(log n) and keeps keys sorted; \`LinkedHashMap\` keeps insertion order. Choosing is a matter of asking which operation your code performs most.

Hash-based collections rest on a contract you must honour: **if you override \`equals\`, you must override \`hashCode\`**. A \`HashMap\` finds an entry by hashing the key to a bucket and then using \`equals\` within it. Break the contract and objects vanish into maps — you put them in and cannot get them back — which is one of the more baffling bugs Java offers.`,
        ensures: [
          'Choose between List, Set, Map and Queue for a given problem',
          'Pick an implementation by the operations you perform most',
          'Declare variables by interface and instantiate by implementation',
          'Use generics so collections are type-safe',
          'Iterate safely, including removal during iteration',
          'Honour the `equals`/`hashCode` contract for keys and set elements'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What `map.put(key, value)` does',
        loop: false,
        steps: [
          { icon: 'key', label: 'Call `hashCode()`', desc: 'The key produces an int hash' },
          { icon: 'calculator', label: 'Map to a bucket', desc: 'The hash is reduced to an index in the internal table' },
          { icon: 'box-archive', label: 'Bucket found', desc: 'Usually empty — the entry is stored and you are done' },
          { icon: 'equals', label: 'Collision? use `equals()`', desc: 'Same bucket: compare keys to update rather than duplicate' },
          { icon: 'arrows-rotate', label: 'Resize when full', desc: 'Past the load factor the table doubles and rehashes' }
        ]
      },
      example: {
        title: 'The collections you will actually use',
        items: [
          '**`List<String> names = new ArrayList<>();`** — interface on the left, implementation on the right',
          '**`names.add("alice"); names.get(0);`** — O(1) access by index, O(1) amortised append',
          '**`Map<String, Integer> ages = new HashMap<>();`** — the most-used collection in Java',
          '**`ages.put("alice", 30); ages.get("bob");`** — `get` returns `null` for a missing key',
          '**`ages.getOrDefault("bob", 0)`** — the safe read; avoids a null check every time',
          '**`ages.merge(word, 1, Integer::sum)`** — counting occurrences in one line',
          '**`Set<String> seen = new HashSet<>();`** — `seen.contains(x)` is O(1); on a `List` it is O(n)',
          '**`Deque<Task> queue = new ArrayDeque<>();`** — use this for stacks and queues, not the legacy `Stack`',
          '**`for (Map.Entry<String, Integer> e : ages.entrySet())`** — iterate keys and values together',
          '**`list.removeIf(s -> s.isBlank());`** — safe removal; removing inside a `for` throws `ConcurrentModificationException`',
          '**`List.of("a", "b")`** — a compact immutable list (Java 9+)',
          '**`names.stream().filter(...).map(...).toList()`** — declarative transformation over any collection'
        ]
      },
      takeaways: [
        '**Declare by interface, instantiate by implementation.** `List<X> l = new ArrayList<>()` keeps every caller independent of your choice.',
        '**Pick by the operation you do most.** Random access → `ArrayList`. Membership tests → `HashSet`. Lookup by key → `HashMap`. Sorted keys → `TreeMap`. Ends of a queue → `ArrayDeque`.',
        '**`ArrayList` beats `LinkedList` in practice far more often than the textbook suggests,** because contiguous memory is cache-friendly. Use `LinkedList` only when you genuinely insert and remove at the ends constantly.',
        '**A `HashMap` gives O(1) average lookup and no ordering guarantee.** If you find yourself sorting the keys every time you print, you wanted a `TreeMap` or `LinkedHashMap`.',
        '**Override `hashCode` whenever you override `equals`.** Equal objects must have equal hash codes, or they get lost in sets and maps. Let your integrated development environment (IDE) or a record generate both.',
        '**Generics move type errors to compile time.** A raw `List` will happily accept an `Integer` among your `String`s and fail with `ClassCastException` much later.',
        '**Never mutate a collection while a `for`-each is walking it.** Use `removeIf`, an explicit `Iterator`, or build a new collection.',
        '**`map.get` returning `null` is ambiguous** — missing key or a stored null? `getOrDefault`, `containsKey` or `computeIfAbsent` say what you mean.',
        '**Streams are for expressing a pipeline, not for speed.** They read beautifully for filter/map/collect chains; a plain loop is often faster and always easier to debug.'
      ],
      reflection: 'You need to count how many times each word appears in a large document, then print the ten most frequent. Which collection holds the counts, which operation dominates the run time, and where does sorting fit in?',
      checks: [
        'What is the difference between a List, a Set and a Map?',
        'Why declare a variable as `List` rather than `ArrayList`?',
        'When would `LinkedList` genuinely beat `ArrayList`?',
        'What does a `HashMap` do with a key when you call `put`?',
        'What breaks if you override `equals` but not `hashCode`?',
        'How do you remove elements from a list while iterating over it?',
        'What do generics buy you over a raw collection?'
      ]
    },
    {
      id: 'exceptions-generics',
      title: 'Exceptions & Generics',
      blurb: 'Checked versus unchecked failure, try-with-resources, and type parameters that make code reusable and safe.',
      whatIs: {
        text: `An exception is an object thrown when something goes wrong; if nothing catches it, it unwinds the call stack and the Java Virtual Machine (JVM) prints a **stack trace**. Java splits exceptions in two. **Checked** exceptions (\`IOException\`, \`SQLException\`) extend \`Exception\` and the compiler forces every caller either to catch them or declare \`throws\`. **Unchecked** exceptions extend \`RuntimeException\` (\`NullPointerException\`, \`IllegalArgumentException\`, \`IllegalStateException\`) and carry no such obligation.

The intended distinction is about recoverability: checked for conditions a caller can reasonably handle (a file may not exist), unchecked for programming errors (you passed null). It is one of Java's most argued-about features, because forced handling encourages the worst possible response — an empty catch block that makes the failure invisible.

The rules for handling are the same as anywhere. Catch **specific** types, catch them where you can actually do something, and if you cannot, let them propagate. When you re-throw as a different type, chain the cause (\`throw new ServiceException("loading user", e)\`) so the original stack trace survives. **try-with-resources** — \`try (var in = Files.newInputStream(p)) { ... }\` — closes anything \`AutoCloseable\` automatically, in reverse order, even when the body throws.

**Generics** are the other half of writing dependable Java. \`List<String>\` tells the compiler what a collection holds, so mistakes are caught at compile time and no casting is needed on the way out. You can write your own: \`class Box<T>\` or \`<T extends Comparable<T>> T max(List<T> items)\`. Generics exist only at compile time — **type erasure** removes them from the bytecode — which is why you cannot write \`new T[]\` or ask \`if (list instanceof List<String>)\` at run time.`,
        ensures: [
          'Distinguish checked and unchecked exceptions and when each is right',
          'Catch specific exceptions and chain causes when re-throwing',
          'Use try-with-resources instead of manual `finally` cleanup',
          'Define custom exceptions that describe your domain',
          'Read a stack trace, including "Caused by" chains',
          'Use generic types and bounded type parameters, and know what erasure removes'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'An exception unwinding the stack',
        loop: false,
        steps: [
          { icon: 'bolt', label: 'Thrown deep in the stack', desc: '`readConfig()` throws `IOException`' },
          { icon: 'arrow-up', label: 'Each frame is offered it', desc: 'The JVM looks for a matching `catch` on the way up' },
          { icon: 'filter', label: 'First matching catch wins', desc: 'Matching is by type, including subclasses' },
          { icon: 'broom', label: 'Resources close', desc: 'try-with-resources and `finally` run as frames unwind' },
          { icon: 'wrench', label: 'Handle or re-throw', desc: 'Recover, or wrap with context: `throw new ServiceException(msg, e)`' },
          { icon: 'triangle-exclamation', label: 'Nothing catches it', desc: 'Thread dies; the JVM prints the trace, newest frame first' }
        ]
      },
      example: {
        title: 'Failing safely, and typing generically',
        items: [
          '**`try { ... } catch (IOException e) { ... }`** — checked: the compiler insisted you deal with it',
          '**`void load() throws IOException`** — the other option: declare it and let the caller decide',
          '**`catch (IOException | SQLException e)`** — multi-catch when the handling is identical',
          '**`throw new IllegalArgumentException("port must be > 0")`** — unchecked: the caller made a mistake',
          '**`throw new ServiceException("loading user " + id, e)`** — wrap and chain; the trace shows "Caused by"',
          '**`try (var reader = Files.newBufferedReader(path)) { ... }`** — closes automatically, even on exception',
          '**`class InsufficientFunds extends RuntimeException { ... }`** — a domain exception callers can catch precisely',
          '**`catch (Exception e) { }`** — the anti-pattern: swallows bugs and produces silently wrong behaviour',
          '**`List<String> names = new ArrayList<>();`** — the compiler enforces the element type; no casts needed',
          '**`class Box<T> { private T value; }`** — your own generic type',
          '**`<T extends Comparable<T>> T max(List<T> items)`** — bounded: `T` must be comparable to itself',
          '**`List<? extends Number>`** — read-only view accepting `List<Integer>` or `List<Double>`'
        ]
      },
      takeaways: [
        '**Read a stack trace top-down: the top frame is where it broke, and "Caused by" is usually the real story.** Scroll to the deepest cause first.',
        '**Checked means the compiler forces a decision; unchecked means it trusts you.** Both are still exceptions, and both should be caught only where you can do something useful.',
        '**Catch the narrowest type you can handle.** `catch (Exception e)` also catches the `NullPointerException` from your own typo and hides it forever.',
        '**Never swallow an exception.** An empty catch converts a loud failure into wrong data. If it is genuinely ignorable, catch the exact type and log why.',
        '**Always chain the cause when re-throwing.** `new ServiceException(msg, e)` preserves the original trace; `new ServiceException(msg)` deletes the evidence.',
        '**try-with-resources replaces `finally` for anything closeable** and gets the edge cases right — reverse order, and exceptions thrown while closing.',
        '**Custom exceptions are part of your application programming interface (API) design.** `InsufficientFunds` lets callers respond precisely; a generic `Exception("failed")` forces string-matching.',
        '**Generics move casting errors to compile time.** A raw `List` compiles and then throws `ClassCastException` at some distant line; `List<String>` never gets that far.',
        '**Type erasure explains the awkward limits.** No `new T[]`, no `instanceof List<String>`, no overloading on `List<String>` versus `List<Integer>` — the type parameter is gone by run time.',
        '**Bounded parameters make generics useful, not just safe.** `<T extends Comparable<T>>` is what lets a generic method actually compare its elements.'
      ],
      reflection: 'A service method loads a user from the database and the driver throws a `SQLException`. Should the method catch it, declare it, or wrap it in a domain exception? Whichever you choose, what does the caller three layers up now know — and what can they actually do about it?',
      checks: [
        'What is the difference between a checked and an unchecked exception?',
        'Which line of a stack trace do you read first, and what does "Caused by" tell you?',
        'Why is `catch (Exception e)` usually the wrong choice?',
        'What does try-with-resources guarantee?',
        'Why should you pass the original exception when throwing a new one?',
        'What do generics prevent that a raw type does not?',
        'What is type erasure, and what does it stop you from writing?'
      ]
    },
    {
      id: 'java-ecosystem',
      title: 'Packages, Classpath & Build Tools',
      blurb: 'How Java code is organised, found, packaged and built — the part tutorials skip and real projects live in.',
      whatIs: {
        text: `Once a project outgrows a single file, two things decide whether it runs: **packages** and the **classpath**. A package is a namespace that mirrors the directory structure — \`package com.example.billing;\` lives in \`com/example/billing/\`. Reverse-domain naming keeps your class names from colliding with a library's. The classpath is the list of places the Java Virtual Machine (JVM) searches for classes at run time. \`NoClassDefFoundError\` and \`ClassNotFoundException\` are almost always classpath problems, not code problems.

Compiled classes get packaged into a **Java archive (JAR)**: a zip of \`.class\` files plus a manifest. An executable JAR names its main class in that manifest, so \`java -jar app.jar\` works. Libraries ship the same way, which is why "adding a dependency" ultimately means "putting another JAR on the classpath".

Nobody manages that by hand. **Maven** and **Gradle** declare dependencies (group, artifact, version), download them and their transitive dependencies from a repository such as Maven Central, and run a standard lifecycle: compile, test, package. They also fix the project layout — \`src/main/java\` for code, \`src/test/java\` for tests — so any Java developer can find their way around a project they have never seen.

The rest of the standard toolchain is worth knowing by name: **JUnit** for tests, **SLF4J/Logback** for logging, **Jackson** for JavaScript Object Notation (JSON), **Spring Boot** for services. And version choice is a real constraint — a codebase targeting Java 8 cannot use records or the modern switch, no matter what the documentation shows.`,
        ensures: [
          'Organise code into packages and use imports correctly',
          'Explain the classpath and diagnose class-not-found errors',
          'Understand what a JAR is and how an executable JAR runs',
          'Declare dependencies with Maven or Gradle instead of copying JARs',
          'Navigate the standard project layout and build lifecycle',
          'Know why the target Java version limits which features you can use'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From source tree to running application',
        loop: false,
        steps: [
          { icon: 'folder-tree', label: '`src/main/java`', desc: 'Packages mirroring directories' },
          { icon: 'file-lines', label: 'Declare dependencies', desc: '`pom.xml` or `build.gradle` — group, artifact, version' },
          { icon: 'download', label: 'Resolve & download', desc: 'The build tool fetches JARs (and their dependencies) from the repository' },
          { icon: 'gears', label: 'Compile & test', desc: '`javac` over the source, then JUnit over `src/test/java`' },
          { icon: 'box-archive', label: 'Package a JAR', desc: 'Classes plus a manifest naming the main class' },
          { icon: 'play', label: 'Run with a classpath', desc: '`java -jar app.jar` — the JVM finds classes where the classpath says' }
        ]
      },
      example: {
        title: 'Organising, building and running',
        items: [
          '**`package com.example.billing;`** — first line of the file; must match the directory path',
          '**`import java.util.List;`** — bring one class into scope; `java.lang` is imported automatically',
          '**`import java.util.*;`** — legal but discouraged: it hides where a name came from',
          '**`javac -d out src/com/example/*.java`** — compile into an output directory, keeping the package layout',
          '**`java -cp out com.example.Main`** — run using the fully qualified class name',
          '**`jar cfe app.jar com.example.Main -C out .`** — build an executable JAR with an entry point',
          '**`java -jar app.jar`** — run it; the manifest supplies the main class',
          '**`mvn clean package`** — Maven: wipe, compile, test, produce the JAR',
          '**`./gradlew build`** — Gradle equivalent, via the wrapper so everyone uses the same version',
          '**`<dependency>` in `pom.xml`** — group, artifact, version; transitive dependencies come along',
          '**`mvn dependency:tree`** — the fastest way to find which library dragged in a conflicting version',
          '**`ClassNotFoundException`** — the class was not on the classpath at run time; check packaging, not syntax'
        ]
      },
      takeaways: [
        '**Package structure is directory structure.** They must match, which is why a misplaced file produces a compile error that sounds unrelated.',
        '**Reverse-domain package names exist to prevent collisions.** `com.example.util.Logger` and a library\'s `org.slf4j.Logger` can coexist because their full names differ.',
        '**The classpath is the answer to "where do classes come from?"** Nearly every class-not-found error is a packaging or launch-command problem, not a coding one.',
        '**A JAR is a zip with a manifest.** Nothing mysterious — you can open one and look, which is often faster than guessing what a build produced.',
        '**Let the build tool own dependencies.** Declaring "I need Jackson 2.17" and letting Maven or Gradle resolve the graph is the difference between a reproducible build and a folder of mystery JARs.',
        '**Transitive dependencies are where surprises live.** Two libraries wanting different versions of a third is the classic conflict; `dependency:tree` shows who asked for what.',
        '**The standard layout is a real productivity feature.** `src/main/java`, `src/test/java`, `mvn test` — any Java developer can navigate any Java project.',
        '**Use the Gradle or Maven wrapper** (`./gradlew`, `./mvnw`) so the build uses a pinned tool version rather than whatever each machine happens to have.',
        '**The target version bounds the language.** Records, sealed types, the enhanced switch and `var` all have minimum versions; check what your project actually targets before reaching for them.'
      ],
      reflection: 'A colleague\'s project builds on their machine and fails on yours with `NoClassDefFoundError`. List the things that differ between the two runs — Java Development Kit (JDK) version, dependency versions, classpath, build tool version — and decide which you would check first and why.',
      checks: [
        'What is the relationship between a package name and the directory layout?',
        'What is the classpath, and when does the JVM use it?',
        'What is inside a JAR file?',
        'What does a build tool do that `javac` does not?',
        'What is a transitive dependency, and why can it cause a conflict?',
        'Why use `./gradlew` or `./mvnw` rather than a locally installed tool?',
        'Why might a language feature you read about not compile in your project?'
      ]
    }
  ]
}
