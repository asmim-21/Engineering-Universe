export default {
  id: 'java',
  title: 'Java',
  tone: 'c3',
  blurb: 'JVM fundamentals, syntax, control flow, collections, exceptions, and the ecosystem.',
  tags: ['Language', 'Enterprise', 'JVM', 'Typed'],
  popups: [
    {
      id: 'jvm-fundamentals',
      title: 'JVM Fundamentals',
      blurb: 'Compile vs run, bytecode, the Java Virtual Machine, and why Java is portable.',
      whatIs: {
        text: 'Java code is compiled to bytecode, which the JVM interprets. This makes Java portable: write once, run anywhere.',
        ensures: [
          'Understand compile-time vs runtime',
          'Know what bytecode is',
          'Understand the JVM as an abstraction layer',
          'Know `javac` (compiler) and `java` (runtime)'
        ]
      },
      example: {
        title: 'Compiling and running Java',
        items: [
          '`javac Main.java` — compile to Main.class bytecode',
          '`java Main` — run the bytecode (the JVM interprets it)',
          'Same .class file runs on Windows, Mac, Linux',
          'The JVM handles system-specific details'
        ]
      },
      who: ['You', 'javac', 'JVM'],
      takeaways: [
        'Java is compiled to bytecode, not directly to machine code.',
        'The JVM is an interpreter for bytecode.',
        'Portability: same bytecode runs on any JVM.',
        'Java 8, 11, 17, 21 — different versions with different features.'
      ],
      reflection: 'Why is the JVM useful? What does it buy you?',
      checks: [
        'What is bytecode?',
        'What is the difference between `javac` and `java`?',
        'Why can the same .class file run on different operating systems?'
      ]
    },
    {
      id: 'java-syntax',
      title: 'Syntax Basics',
      blurb: 'Types, variables, operators, casting, and the style of Java code.',
      whatIs: {
        text: 'Java is statically typed: you declare types explicitly. Everything is an object (or a primitive).',
        ensures: [
          'Declare variables with types: `int x = 5;`',
          'Use primitives: int, double, boolean, char',
          'Use reference types: String, custom classes',
          'Understand type casting',
          'Know Java naming conventions'
        ]
      },
      example: {
        title: 'Java syntax',
        items: [
          '`int x = 5;` — integer variable',
          '`double pi = 3.14;` — floating point',
          '`String name = "Alice";` — string',
          '`boolean flag = true;` — boolean',
          '`int y = (int) 3.14;` — casting float to int (truncates)',
          'Methods in camelCase: `getSize()`, `calculateSum()`',
          'Classes in PascalCase: `MyClass`, `DataProcessor`'
        ]
      },
      who: ['You'],
      takeaways: [
        'Java requires type declarations — `int x = 5;` not just `x = 5;`',
        'Primitives are not objects; reference types are.',
        'Casting: `(Type) value` — can lose information.',
        'Strings are immutable — operations create new strings.',
        'Naming conventions matter: camelCase for methods/variables, PascalCase for classes.'
      ],
      reflection: 'Why does Java require type declarations while Python does not?',
      checks: [
        'What are the primitive types?',
        'What is the difference between `int` and `Integer`?',
        'How do you cast a float to an int?',
        'Are Strings mutable?'
      ]
    },
    {
      id: 'control-flow-java',
      title: 'Control Flow & Methods',
      blurb: 'If/else, loops, switch, method definition, and overloading.',
      whatIs: {
        text: 'Control flow in Java is similar to C: if/else, for, while. Methods can be overloaded by parameter type.',
        ensures: [
          'Write if/else statements',
          'Use for and while loops',
          'Use switch for multiple cases',
          'Define methods with return types',
          'Understand method overloading'
        ]
      },
      example: {
        title: 'Control flow and methods',
        items: [
          '`if (x > 0) { ... } else { ... }` — if/else',
          '`for (int i = 0; i < 10; i++) { ... }` — for loop',
          '`for (String item : list) { ... }` — enhanced for loop',
          '`public int sum(int a, int b) { return a + b; }` — method',
          '`public int sum(double a, double b) { return (int)(a + b); }` — overloaded method',
          '`switch (day) { case 1: ... break; }` — switch statement'
        ]
      },
      who: ['You'],
      takeaways: [
        'Enhanced for loop (`for (item : collection)`) is preferred over index-based loops.',
        'Method overloading: same name, different parameters.',
        'Braces `{}` define blocks, not indentation (unlike Python).',
        '`switch` is useful but can be verbose; consider polymorphism instead.',
        'Every method must have a return type (or `void` if it returns nothing).'
      ],
      reflection: 'Write a method that adds two numbers. Then overload it for different types.',
      checks: [
        'What is method overloading?',
        'How do you use an enhanced for loop?',
        'What is the difference between `for` and `while`?',
        'What does `void` mean?'
      ]
    },
    {
      id: 'arrays-strings',
      title: 'Arrays & Strings',
      blurb: 'Fixed-size arrays, String immutability, StringBuilder, and working with collections.',
      whatIs: {
        text: 'Arrays are fixed-size. Strings are immutable. Use StringBuilder for efficient string concatenation.',
        ensures: [
          'Create and use arrays',
          'Understand String immutability',
          'Use StringBuilder for building strings',
          'Index into arrays and strings'
        ]
      },
      example: {
        title: 'Arrays and strings',
        items: [
          '`int[] numbers = {1, 2, 3};` — array literal',
          '`int[] arr = new int[10];` — create array of size 10',
          '`String s = "hello";` — string (immutable)',
          '`s.substring(0, 3)` — new string "hel"',
          '`String s2 = s + " world";` — creates new string',
          '`StringBuilder sb = new StringBuilder();` — build strings efficiently',
          '`sb.append("a").append("b");` — chain appends'
        ]
      },
      who: ['You'],
      takeaways: [
        'Arrays are fixed-size: you cannot add or remove elements.',
        'Strings are immutable: `s + x` creates a new string, leaving `s` unchanged.',
        'StringBuilder is the efficient way to build strings.',
        'Arrays are 0-indexed: first element is at index 0.',
        'Use Lists (ArrayList) instead of arrays for dynamic size.'
      ],
      reflection: 'Why is String immutable? What does it buy you?',
      checks: [
        'Can you resize an array?',
        'What is String immutability?',
        'When should you use StringBuilder?',
        'How do you get a substring?'
      ]
    },
    {
      id: 'collections',
      title: 'Collections Framework',
      blurb: 'List, Map, Set implementations, and how to choose the right one.',
      whatIs: {
        text: 'Collections are flexible containers. List maintains order. Map is key-value. Set is unique values. Each has trade-offs.',
        ensures: [
          'Use ArrayList for dynamic lists',
          'Use HashMap for key-value pairs',
          'Use HashSet for unique values',
          'Know the interface hierarchy',
          'Iterate over collections'
        ]
      },
      example: {
        title: 'Collections in Java',
        items: [
          '`List<String> list = new ArrayList<>();` — create list',
          '`list.add("alice"); list.add("bob");` — add items',
          '`list.get(0);` — access by index (ordered)',
          '`Map<String, Integer> map = new HashMap<>();` — create map',
          '`map.put("alice", 30);` — set key-value',
          '`map.get("alice");` — retrieve by key',
          '`Set<String> set = new HashSet<>();` — create set (unique)',
          '`for (String s : list) { ... }` — iterate'
        ]
      },
      who: ['You'],
      takeaways: [
        'List: ordered, allows duplicates (ArrayList, LinkedList)',
        'Map: key-value pairs, keys are unique (HashMap, TreeMap)',
        'Set: unique values, unordered (HashSet, TreeSet)',
        'Generics (`<String>`) tell the compiler what type of elements the collection holds.',
        'Choose based on access pattern: ArrayList for indexed access, HashMap for key lookup, HashSet for membership testing.'
      ],
      reflection: 'When would you use a Map instead of a List?',
      checks: [
        'What is the difference between List, Map, and Set?',
        'What is the difference between ArrayList and LinkedList?',
        'How do you iterate over a Map?',
        'What are generics?'
      ]
    },
    {
      id: 'exceptions-generics',
      title: 'Exceptions & Generics',
      blurb: 'Checked vs unchecked exceptions, type safety, and handling errors gracefully.',
      whatIs: {
        text: 'Java distinguishes checked and unchecked exceptions. Generics add type safety to collections and methods.',
        ensures: [
          'Understand checked vs unchecked exceptions',
          'Use try/catch/finally',
          'Throw exceptions',
          'Use generics for type safety',
          'Understand type erasure'
        ]
      },
      example: {
        title: 'Exceptions and generics',
        items: [
          '`try { ... } catch (IOException e) { ... }` — checked exception',
          '`List<String> list = new ArrayList<String>();` — generic list',
          '`Map<String, Integer> map = new HashMap<>();` — generic map',
          '`throw new IllegalArgumentException("bad value");` — throw exception',
          '`public <T> void print(T value) { ... }` — generic method',
          '`List list = new ArrayList();` — raw type (unchecked, legacy)'
        ]
      },
      who: ['You'],
      takeaways: [
        'Checked exceptions: SQLException, IOException — must catch or declare.',
        'Unchecked exceptions: NullPointerException, IllegalArgumentException — can leave unhandled.',
        'Generics prevent type errors at compile time: `List<String>` cannot hold Integers.',
        'Type erasure: generics are removed at runtime (Java limitation).',
        'Always close resources: use try-with-resources (`try (Resource r = new Resource()) { ... }`).'
      ],
      reflection: 'Why does Java distinguish checked and unchecked exceptions?',
      checks: [
        'What is the difference between checked and unchecked exceptions?',
        'What is a generic type?',
        'Why use generics?',
        'What is type erasure?'
      ]
    }
  ]
}
