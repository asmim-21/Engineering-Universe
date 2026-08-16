export default {
  id: 'python',
  title: 'Python',
  tone: 'c2',
  blurb: 'From running your first script to writing real programs: types, control flow, functions, classes, errors, and the ecosystem around the language.',
  tags: ['Language', 'Scripting', 'Data', 'Web', 'Dynamic'],
  popups: [
    {
      id: 'syntax-setup',
      title: 'Running Python: Interpreter & Syntax',
      blurb: 'What actually happens when you run a script, and the syntax rules Python enforces.',
      whatIs: {
        text: `Python is an interpreted language, but that word hides a step. When you run \`python app.py\`, Python first compiles your source into **bytecode** — a compact instruction set that is not machine code — and then a **virtual machine (VM)** — the CPython interpreter — executes those instructions one at a time. The cached bytecode is what you see in the \`__pycache__\` folder. You never run a compiler by hand, which is why it feels like the code just runs.

There are two ways to work. A **script** is a \`.py\` file you run start to finish. The **read-eval-print loop (REPL)** — started by typing \`python3\` with no arguments — reads one expression at a time and prints its value immediately — the fastest way to check "what does this actually do?" without writing a file.

Python's most distinctive rule is that **indentation defines blocks**. Where other languages use braces, Python uses consistent leading whitespace. This is not a style preference: mis-indenting changes what your program means, or raises \`IndentationError\`. Four spaces per level is the universal convention, and mixing tabs and spaces is an error.

Python is **dynamically typed**: a variable is just a name bound to an object, and the type travels with the object, not the name. Nothing checks types until the line actually runs, so a typo in a rarely-taken branch can sit undetected until production. Optional type hints (\`def f(x: int) -> str:\`) document intent and let tools like mypy check it ahead of time, but the interpreter itself ignores them.`,
        ensures: [
          'Understand source → bytecode → virtual machine, and what `__pycache__` is',
          'Run code three ways: script file, REPL, and `python -c`',
          'Know that indentation is syntax, not style',
          'Write comments (`#`) and docstrings (`"""..."""`)',
          'Understand dynamic typing and what type hints do (and do not) do',
          'Know that Python 3 is the language and Python 2 is dead'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What `python app.py` actually does',
        loop: false,
        steps: [
          { icon: 'file-code', label: 'Your source file', desc: '`app.py` — plain text' },
          { icon: 'magnifying-glass', label: 'Parse & check syntax', desc: 'Indentation, colons, brackets. Errors here stop everything.' },
          { icon: 'gears', label: 'Compile to bytecode', desc: 'Cached in `__pycache__/app.cpython-312.pyc`' },
          { icon: 'microchip', label: 'Interpreter executes', desc: 'The CPython VM runs the bytecode instruction by instruction' },
          { icon: 'display', label: 'Output or traceback', desc: 'Type errors surface here — at runtime, not before' }
        ]
      },
      example: {
        title: 'Getting code to run',
        items: [
          '**`python3 app.py`** — run a script top to bottom, then exit',
          '**`python3`** — open the REPL; expressions print their value automatically',
          '**`python3 -c "print(2 ** 10)"`** — run one line without creating a file',
          '**`python3 -m http.server`** — run a stdlib module as a program',
          '**`print("hello")`** — no semicolon, no braces, no `main()` required',
          '**`if x > 0:`** then an indented block — the colon opens it, the indent defines it',
          '**`# note to a reader`** — comment, ignored by the interpreter',
          '**`"""Explain what this function does."""`** — docstring; `help(fn)` reads it back',
          '**`name: str = "Alice"`** — type hint; the interpreter does not enforce it',
          '**`python3 --version`** — always check; `python` may still mean Python 2 on old systems'
        ]
      },
      takeaways: [
        '**"Interpreted" means compiled to bytecode, then executed by a VM.** There is no separate build step you run, but there is still a compile step — which is why syntax errors are caught before any of your code runs.',
        '**Syntax errors are found up front; everything else is found at runtime.** Python happily loads a function that calls a misspelled name. You only find out when that line executes — which is exactly why tests matter more in Python than in Java.',
        '**Indentation is the block structure.** Four spaces, consistently. An editor set to insert spaces for tabs prevents an entire category of confusing bugs.',
        '**The REPL is a thinking tool.** When unsure what a method returns, do not guess and do not read three pages of docs — paste it into the REPL and look.',
        '**Variables are names bound to objects.** `a = [1, 2]` then `b = a` gives two names for one list. Changing it through `b` changes what `a` sees; this surprises people constantly.',
        '**Type hints are documentation the machine can check.** They cost nothing at runtime and are checked only if you run a type checker. Use them on function signatures, where they earn the most.',
        '**Everything is an object** — integers, functions, modules, classes. That is why you can pass a function as an argument or store one in a dict.',
        '**Python 2 is dead** (end of life 2020). Any tutorial with `print "hello"` (no parentheses) is teaching a language you should not write.'
      ],
      reflection: 'Open a REPL and type `2 ** 100`, then `1 / 0`. One gives an exact enormous integer; the other gives a traceback. What does each tell you about how Python treats numbers and errors compared with a language you already know?',
      checks: [
        'What does Python do between reading your file and running it?',
        'What is in `__pycache__`, and is it safe to delete?',
        'Why does indentation cause errors in Python but not in Java?',
        'When are type errors detected in Python — and why does that matter?',
        'What does a type hint actually do at runtime?',
        'When would you reach for the REPL instead of editing a file?'
      ]
    },
    {
      id: 'data-types',
      title: 'Core Data Types & Collections',
      blurb: 'Numbers, strings, and the four collections — and how to choose the right one.',
      whatIs: {
        text: `Python's built-in types cover most of what you need before you reach for a library. Scalars are \`int\` (arbitrary precision — no overflow), \`float\` (the usual 64-bit approximation, so \`0.1 + 0.2 != 0.3\`), \`bool\`, \`str\` (Unicode text) and \`None\` (the absence of a value).

The four collections divide along two axes: **ordered or not**, and **mutable or not**. A \`list\` is ordered and mutable — the default choice. A \`tuple\` is ordered and immutable — a fixed record, and usable as a dict key. A \`dict\` maps keys to values with average O(1) lookup and preserves insertion order (guaranteed since Python 3.7). A \`set\` holds unique items with O(1) membership tests and no ordering.

Choosing well is a performance decision, not just a style one. Asking \`item in my_list\` scans the whole list; \`item in my_set\` is a single hash lookup. On ten thousand items that is the difference between instant and noticeably slow.

The mutable/immutable split explains most beginner surprises. Strings and tuples cannot be changed — \`s.upper()\` returns a *new* string and leaves \`s\` alone. Lists and dicts can, which is why passing a list into a function lets that function modify your data, and why a mutable default argument (\`def f(items=[])\`) is a classic bug: the default list is created once and shared by every call.`,
        ensures: [
          'Know the scalar types and why float arithmetic is approximate',
          'Choose between list, tuple, dict and set for a given job',
          'Understand mutable vs immutable and who else can see your change',
          'Use membership and lookup with the right cost (`in` on a set, not a list)',
          'Slice and index sequences, including negative indices',
          'Avoid the mutable-default-argument trap'
        ]
      },
      example: {
        title: 'The types in practice',
        items: [
          '**`n = 42`** — `int`, arbitrary precision: `2 ** 200` is exact, never overflows',
          '**`0.1 + 0.2`** → `0.30000000000000004` — floats are binary approximations; compare with a tolerance',
          '**`s = "hello"`; `s.upper()`** → `"HELLO"`, but `s` is still `"hello"` — strings are immutable',
          '**`s[0]`, `s[-1]`, `s[1:4]`** — index from the front, the back, and slice `[start:stop]` (stop excluded)',
          '**`items = [3, 1, 2]`; `items.append(4)`** — list: ordered, mutable, duplicates allowed',
          '**`point = (4, 5)`; `x, y = point`** — tuple: fixed record, unpacks cleanly, hashable',
          '**`ages = {"alice": 30}`; `ages["bob"] = 25`** — dict: key → value, average O(1) lookup',
          '**`ages.get("carol", 0)`** — safe lookup with a default; `ages["carol"]` raises `KeyError`',
          '**`seen = {1, 2, 3}`; `4 in seen`** — set: unique items, O(1) membership',
          '**`list(set(names))`** — the idiomatic "remove duplicates" (order is not preserved)',
          '**`def f(items=[]):`** — bug: the default list persists between calls. Use `items=None` and build inside.'
        ]
      },
      takeaways: [
        '**List vs tuple is about intent as much as mutability.** A list is "a sequence of similar things that may change"; a tuple is "one record with a fixed shape" — a coordinate, a database row, a function returning two values.',
        '**Dicts and sets are hash tables.** Lookup cost does not grow with size, but keys must be hashable — which means immutable. A tuple can be a dict key; a list cannot.',
        '**`in` on a list is O(n); `in` on a set or dict is O(1).** If you are repeatedly checking membership, build a set first. It is the single easiest performance win in Python.',
        '**Immutable does not mean constant.** `s = s + "!"` works fine — it rebinds the name `s` to a brand-new string. The old string was never modified.',
        '**Aliasing bites.** `b = a` copies the reference, not the list. Use `a.copy()` or `list(a)` for a shallow copy, `copy.deepcopy(a)` when the contents are themselves mutable.',
        '**`None` is not zero, empty, or false-as-a-value** — it is "no value at all". Test it with `if x is None`, never `if x == None`.',
        '**Truthiness has rules worth memorising:** empty collections, `0`, `""` and `None` are falsy; everything else is truthy. `if items:` is the idiomatic "is this list non-empty".',
        '**Floats are for measurement, never for money.** Use `decimal.Decimal` for currency, or store integer cents.',
        '**Mutable default arguments are evaluated once, at definition time.** This is not a quirk to work around later — write `=None` from the start.'
      ],
      reflection: 'You have a list of a million user IDs and need to check, for each of a thousand incoming events, whether its user is in that list. Written naively this does a billion comparisons. What one-line change makes it near-instant, and why?',
      checks: [
        'What is the difference between a list and a tuple, beyond mutability?',
        'Why can a tuple be a dict key but a list cannot?',
        'What does `s.upper()` do to `s`?',
        'When is a set the right choice over a list?',
        'What is wrong with `def add(item, target=[])`?',
        'Why should you never store a price as a float?',
        'How do you safely read a key that might not exist in a dict?'
      ]
    },
    {
      id: 'control-flow-py',
      title: 'Control Flow & Comprehensions',
      blurb: 'Branching, looping over anything iterable, and the comprehensions that replace most loops.',
      whatIs: {
        text: `Control flow is how a program decides and repeats. Python's conditionals are \`if\` / \`elif\` / \`else\`, with the block defined by indentation after the colon. Conditions can chain naturally — \`if 0 < x < 10:\` means what it looks like — and combine with \`and\`, \`or\`, \`not\` rather than symbols.

Python's \`for\` loop is not a counter. It is a loop **over an iterable**: a list, a string, a dict, a file, a generator. Under the hood, \`for x in thing\` calls \`iter(thing)\` to get an iterator and then \`next()\` repeatedly until \`StopIteration\` is raised. That is why the same loop shape works for a list in memory and a ten-gigabyte file being read line by line. If you find yourself writing \`for i in range(len(items))\`, you almost always want \`for item in items\` or \`for i, item in enumerate(items)\`.

**Comprehensions** are Python's signature construct: \`[transform(x) for x in source if condition(x)]\` builds a list in one expression. They exist for lists, dicts and sets, and they are faster than the equivalent append-loop as well as shorter. The rule of thumb is that a comprehension should fit on one line and do one thing — the moment it needs two conditions and a nested loop, a plain loop is clearer.

\`while\` repeats until a condition goes false, which makes it the right tool when you do not know the number of iterations up front — polling, retrying, consuming until a sentinel. \`break\` exits a loop entirely; \`continue\` skips to the next iteration.`,
        ensures: [
          'Write `if` / `elif` / `else` and chained comparisons',
          'Loop over any iterable — and know when `while` is the better fit',
          'Use `enumerate`, `zip`, `range` and `items()` instead of index juggling',
          'Write list, dict and set comprehensions — and know when not to',
          'Control loops with `break` and `continue`',
          'Understand iterators, generators and why they save memory'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What `for item in things:` really does',
        loop: false,
        steps: [
          { icon: 'play', label: 'Loop starts', desc: 'Python calls `iter(things)` to get an iterator' },
          { icon: 'forward', label: '`next()` is called', desc: 'The iterator hands back the next item' },
          { icon: 'code', label: 'Body runs', desc: 'Your indented block executes with `item` bound' },
          { icon: 'arrows-rotate', label: 'Back for another', desc: 'Repeat until the iterator is exhausted' },
          { icon: 'flag-checkered', label: '`StopIteration`', desc: 'Raised internally and caught by the loop — the loop simply ends' }
        ]
      },
      example: {
        title: 'Loops, branches and comprehensions',
        items: [
          '**`if score >= 90: ... elif score >= 50: ... else: ...`** — first true branch wins, the rest are skipped',
          '**`if 0 < x < 10:`** — chained comparison, reads exactly like maths',
          '**`for name in names:`** — the idiomatic loop; no index needed',
          '**`for i, name in enumerate(names, start=1):`** — when you genuinely need the position',
          '**`for key, value in scores.items():`** — iterate a dict as pairs',
          '**`for a, b in zip(list1, list2):`** — walk two sequences in step',
          '**`for i in range(5):`** — 0, 1, 2, 3, 4 — stop is always excluded',
          '**`[n * 2 for n in nums]`** — list comprehension: transform every item',
          '**`[n for n in nums if n % 2 == 0]`** — filter with a trailing `if`',
          '**`{name: len(name) for name in names}`** — dict comprehension',
          '**`(n * 2 for n in nums)`** — a *generator*: computes lazily, holds one item at a time',
          '**`while retries < 3:`** ... **`break`** — repeat an unknown number of times, exit early on success'
        ]
      },
      takeaways: [
        '**`for` iterates over things, not numbers.** `for i in range(len(items))` is the clearest sign of a habit carried over from C or Java. `enumerate` covers the cases where you really do need the index.',
        '**Anything iterable works in a `for` loop** — lists, strings, dicts, sets, files, database cursors, generators. Learn the protocol once and it applies everywhere.',
        '**Comprehensions replace the build-a-list loop.** `result = [f(x) for x in xs if p(x)]` is faster and clearer than three lines of `append`. Keep them to one line and one idea.',
        '**Generators trade memory for laziness.** Swapping `[...]` for `(...)` means items are produced one at a time — the difference between loading a huge file into memory and streaming it.',
        '**`break` exits the loop; `continue` skips one iteration.** Both are fine in readable code — deeply nested flag variables to avoid them are not.',
        '**`else` on a loop is real and rarely understood:** it runs only if the loop finished *without* hitting `break`. Useful for search loops; confusing enough that a comment is worth it.',
        '**Modifying a list while looping over it corrupts the iteration.** Build a new list (usually with a comprehension) instead of deleting from the one you are walking.',
        '**`while True:` with a `break` is legitimate** when the exit condition is only known mid-body — a read-then-check loop. What is not legitimate is a `while` with no path to termination.',
        '**Prefer flat code to clever code.** Three levels of nested comprehension is a puzzle for whoever reads it next, including you.'
      ],
      reflection: 'Take a loop you have written that builds a list with `append`. Rewrite it as a comprehension. Now rewrite it as a generator expression. Which of the three would you want to find in a file processing ten million rows — and why?',
      checks: [
        'What happens under the hood when a `for` loop starts?',
        'When would you use `while` rather than `for`?',
        'How do you loop over a dict\'s keys and values together?',
        'How do you write a comprehension that filters as well as transforms?',
        'What is the difference between `[x for x in xs]` and `(x for x in xs)`?',
        'What does `break` do that `continue` does not?',
        'Why is deleting from a list while iterating over it dangerous?'
      ]
    },
    {
      id: 'functions-py',
      title: 'Functions, Arguments & Scope',
      blurb: 'Defining reusable behaviour, Python\'s flexible argument system, and where names live.',
      whatIs: {
        text: `A function packages a piece of behaviour behind a name so it can be called, tested and reused. In Python, \`def\` creates a function *object* and binds it to a name — which means functions can be passed as arguments, stored in dicts, and returned from other functions. That is the foundation for callbacks, decorators and most of the standard library's flexibility.

Python's argument system is unusually expressive. Parameters can be passed **positionally** or **by keyword**; they can have **defaults**; \`*args\` collects any extra positional arguments into a tuple, and \`**kwargs\` collects any extra keyword arguments into a dict. Keyword arguments at the call site double as documentation: \`connect(host, 5432, True)\` tells you nothing, while \`connect(host, port=5432, ssl=True)\` tells you everything.

Names are resolved by the **Local, Enclosing, Global, Built-in (LEGB) rule** — Python searches those four scopes, in that order. Assigning to a name inside a function makes it local to that function, even if a global of the same name exists; this is why a function that reads a global works fine but one that assigns to it raises \`UnboundLocalError\` without a \`global\` declaration. Needing \`global\` is almost always a design smell: pass the value in and return the new one.

Arguments are passed by **object reference**. Rebinding a parameter inside a function has no effect outside it, but mutating the object it points to does. \`def f(lst): lst.append(1)\` changes the caller's list; \`def f(lst): lst = [1]\` does not.`,
        ensures: [
          'Define functions with `def`, parameters and a return value',
          'Use positional, keyword and default arguments deliberately',
          'Collect variable arguments with `*args` and `**kwargs`',
          'Resolve names using LEGB scope and avoid `global`',
          'Predict whether a function can change its caller\'s data',
          'Write a docstring that states what the function does and returns'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'LEGB: how Python resolves a name',
        loop: false,
        steps: [
          { icon: 'location-dot', label: 'Local', desc: 'Names assigned inside this function' },
          { icon: 'layer-group', label: 'Enclosing', desc: 'Locals of any function that wraps this one' },
          { icon: 'globe', label: 'Global', desc: 'Names at the top level of the module' },
          { icon: 'cube', label: 'Built-in', desc: '`len`, `print`, `range` — always available' },
          { icon: 'triangle-exclamation', label: 'Not found', desc: '`NameError: name \'x\' is not defined`' }
        ]
      },
      example: {
        title: 'Functions and their arguments',
        items: [
          '**`def greet(name):`** ... **`return f"Hello, {name}"`** — define, then return a value',
          '**`greet("Alice")`** vs **`greet(name="Alice")`** — positional or keyword; keyword is self-documenting',
          '**`def connect(host, port=5432, ssl=True):`** — defaults make the common call short',
          '**`def total(*nums): return sum(nums)`** — `*args` collects extras into a tuple',
          '**`def log(**fields): print(fields)`** — `**kwargs` collects extras into a dict',
          '**`def save(data, *, overwrite=False):`** — everything after `*` must be passed by keyword',
          '**`return value1, value2`** — returns a tuple; unpack with `a, b = fn()`',
          '**`f = greet; f("Bob")`** — functions are objects; a name is just a binding',
          '**`sorted(users, key=lambda u: u.age)`** — a small anonymous function passed as data',
          '**`def add(x): total += x`** — `UnboundLocalError`: assigning makes `total` local. Pass it in instead.',
          '**`"""Return the user\'s display name."""`** — docstring, read by `help()` and your integrated development environment (IDE)'
        ]
      },
      takeaways: [
        '**A function should do one thing and say so in its name.** If the honest name needs an "and", it is two functions.',
        '**Keyword arguments are free documentation at the call site.** Booleans especially: `send(msg, urgent=True)` beats `send(msg, True)` for every future reader.',
        '**`*args` and `**kwargs` are for genuine pass-through** — wrappers, decorators, adapters. Using them to avoid deciding on a signature makes a function impossible to call correctly.',
        '**Assignment creates a local name.** Reading a global is fine; writing one requires `global` — and needing `global` usually means the value should have been a parameter and a return value.',
        '**Mutating an argument changes the caller\'s object.** This is Python\'s most common source of "action at a distance". Prefer returning new data over quietly modifying what you were handed.',
        '**Every function returns something.** With no `return`, it returns `None` — which is why `result = my_list.sort()` gives you `None` rather than a sorted list. (Use `sorted(my_list)`.)',
        '**`lambda` is for one small expression** passed somewhere else — a `key=`, a callback. Anything you would want to name, test, or explain deserves a `def`.',
        '**Closures capture variables, not values.** A function defined inside a loop sees the loop variable\'s *final* value unless you bind it with a default argument.',
        '**Write the docstring before the body.** If you cannot state what the function returns in one sentence, the design is not settled yet.'
      ],
      reflection: 'Write a function `average(*numbers)` that returns the mean. What should it do when called with no arguments at all — return zero, return `None`, or raise? Whichever you choose, where does that decision belong: in the docstring, in the code, or in a test?',
      checks: [
        'What is the difference between a positional and a keyword argument?',
        'What do `*args` and `**kwargs` collect?',
        'In what order does Python look up a name?',
        'Why does assigning to a global inside a function raise `UnboundLocalError`?',
        'If you pass a list to a function, can the function change it?',
        'What does a function return if it has no `return` statement?',
        'When is a `lambda` the right choice over a `def`?'
      ]
    },
    {
      id: 'oop-python',
      title: 'Object-Oriented Python',
      blurb: 'Classes, instances, `self`, dunder methods, inheritance — and Python\'s duck-typed take on all of it.',
      whatIs: {
        text: `A class is a template for objects that bundle **state** (attributes) with **behaviour** (methods). \`class Dog:\` defines the template; \`Dog("Buddy")\` creates an instance. \`__init__\` is not a constructor in the C++/Java sense — the object already exists by then — it is the initialiser that sets up the new instance's attributes.

\`self\` is simply the instance, passed as the first argument to every instance method. Python makes this explicit where other languages hide it: \`dog.bark()\` is really \`Dog.bark(dog)\`. Once you see that, \`self\` stops feeling like boilerplate and starts looking like what it is.

**Dunder** ("double underscore") methods hook your class into the language's syntax. Define \`__len__\` and \`len(obj)\` works; define \`__eq__\` and \`==\` works; define \`__repr__\` and your object prints usefully in a debugger instead of \`<Dog object at 0x7f...>\`. This is how Python does operator overloading, and it is why built-in types and your own classes feel the same to use.

Inheritance lets a subclass reuse and specialise a parent (\`class Puppy(Dog):\`, calling \`super().__init__(...)\` to run the parent's setup). But Python's real style is **duck typing**: code does not check what type something is, only whether it supports the operations being used. Anything with a \`.read()\` method can be passed where a file is expected. That is why explicit interfaces matter less here than in Java — and why clear documentation of what a function expects matters more.`,
        ensures: [
          'Define a class with `__init__`, attributes and methods',
          'Explain what `self` is and why it is written out',
          'Use `__repr__`, `__str__`, `__eq__` and other dunder methods',
          'Inherit from a base class and call `super()`',
          'Distinguish class attributes from instance attributes',
          'Understand duck typing and when a `@dataclass` is enough'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What happens on `dog = Dog("Buddy")`',
        loop: false,
        steps: [
          { icon: 'file-code', label: 'Class is defined', desc: '`class Dog:` creates a class object at import time' },
          { icon: 'cube', label: 'Instance created', desc: 'Python allocates a new empty object' },
          { icon: 'gears', label: '`__init__` runs', desc: 'Called as `Dog.__init__(new_obj, "Buddy")`' },
          { icon: 'tag', label: 'Attributes set', desc: '`self.name = "Buddy"` lands in the instance\'s `__dict__`' },
          { icon: 'right-left', label: 'Reference returned', desc: '`dog` now names that instance' },
          { icon: 'play', label: 'Method call', desc: '`dog.bark()` → `Dog.bark(dog)` — instance first, then the class' }
        ]
      },
      example: {
        title: 'A class, an instance, and a subclass',
        code: 'class Account:\n' +
          '    """A bank account with a non-negative balance."""\n\n' +
          '    interest_rate = 0.02          # class attribute: shared by all accounts\n\n' +
          '    def __init__(self, owner, balance=0):\n' +
          '        self.owner = owner        # instance attributes: one per object\n' +
          '        self._balance = balance\n\n' +
          '    def deposit(self, amount):\n' +
          '        if amount <= 0:\n' +
          '            raise ValueError("deposit must be positive")\n' +
          '        self._balance += amount\n' +
          '        return self._balance\n\n' +
          '    @property\n' +
          '    def balance(self):            # read-only access, no setter\n' +
          '        return self._balance\n\n' +
          '    def __repr__(self):           # what you see in a debugger\n' +
          '        return f"Account({self.owner!r}, {self._balance})"\n\n\n' +
          'class SavingsAccount(Account):\n' +
          '    def __init__(self, owner, balance=0, rate=0.05):\n' +
          '        super().__init__(owner, balance)   # run the parent setup first\n' +
          '        self.interest_rate = rate          # shadows the class attribute\n\n' +
          '    def add_interest(self):\n' +
          '        return self.deposit(self.balance * self.interest_rate)\n\n\n' +
          'acct = SavingsAccount("Alice", 100)\n' +
          'acct.add_interest()\n' +
          'print(acct)          # Account(\'Alice\', 105.0)  <- from __repr__\n' +
          'print(acct.balance)  # 105.0                    <- via the property'
      },
      takeaways: [
        '**A class is a blueprint; an instance is one filled-in copy.** Two `Account` objects share the methods but each keeps its own attribute values.',
        '**`self` is the instance, passed explicitly.** `obj.method(x)` is `Class.method(obj, x)`. Forgetting `self` in a method definition is the most common beginner error, and the message says exactly that.',
        '**`__init__` initialises; it does not construct.** It receives an object that already exists and gives it its starting state.',
        '**Class attributes are shared, instance attributes are not.** A mutable class attribute (`tags = []`) is shared by every instance — the class-level version of the mutable-default bug.',
        '**Define `__repr__` on every class you will debug.** The default tells you nothing; a good `__repr__` shows the values that identify the object.',
        '**`__eq__` decides what "the same" means for your type,** and if you define it you should define `__hash__` too, or your objects stop working in sets and as dict keys.',
        '**A leading underscore (`_balance`) is a convention, not a lock.** Python has no true private; the underscore says "internal, may change" and everyone respects it.',
        '**`@property` turns a method into a read-only attribute** — how you add validation or computation later without changing every call site.',
        '**Duck typing beats type checks.** Do not write `if isinstance(x, list)`; write code that works with anything supporting the operations you need, and document what those are.',
        '**Reach for `@dataclass` when a class is mostly data.** It writes `__init__`, `__repr__` and `__eq__` for you and removes a page of boilerplate.'
      ],
      reflection: 'Design a `Playlist` class. What is state, what is behaviour, and which dunder methods would make it feel like a built-in type — `len(playlist)`, `for song in playlist`, `playlist[0]`? What has to be defined for each of those to work?',
      checks: [
        'What is the difference between a class and an instance?',
        'What is `self`, and why does Python make you write it?',
        'When does `__init__` run, and what does it actually do?',
        'What is the difference between a class attribute and an instance attribute?',
        'Why is `__repr__` worth defining?',
        'What does `super().__init__()` do and why call it first?',
        'What is duck typing, and what does it replace?'
      ]
    },
    {
      id: 'error-handling',
      title: 'Errors, Exceptions & Files',
      blurb: 'Failing loudly and safely: try/except/else/finally, context managers, and reading and writing files.',
      whatIs: {
        text: `When something goes wrong, Python raises an **exception**: an object describing the failure. If nothing catches it, it propagates up the call stack, and if it reaches the top the program stops and prints a **traceback** — read it bottom-up, because the last line is the actual error and the lines above show the path that got there.

\`try\` / \`except\` catches exceptions. The rule that matters is **catch narrowly**: \`except ValueError:\` handles the case you anticipated, whereas a bare \`except:\` swallows everything — including typos, \`KeyboardInterrupt\` and genuine bugs — and turns a loud failure into silent wrong behaviour. The full form has four parts: \`try\` (the risky code), \`except\` (handle a specific failure), \`else\` (runs only if nothing was raised) and \`finally\` (always runs, error or not).

Catching is not the only option, and often not the right one. If your code cannot sensibly recover, let the exception propagate to a caller that can. \`raise ValueError("port must be positive")\` at the moment you detect bad input is far more useful than returning \`None\` and letting the failure surface three functions later.

**Context managers** — the \`with\` statement — guarantee cleanup. \`with open(path) as f:\` closes the file whether the block finishes normally, returns early or raises. This is the Pythonic answer to \`finally\` for resources: files, database connections, locks, network sockets. Files also need an encoding: \`open(path, encoding="utf-8")\` avoids a whole family of platform-dependent bugs.`,
        ensures: [
          'Read a traceback and find the real cause',
          'Catch specific exceptions with `try` / `except` / `else` / `finally`',
          'Raise exceptions deliberately, including custom exception classes',
          'Know when *not* to catch — let it propagate to someone who can act',
          'Use `with` for files and any other resource that must be released',
          'Read and write text files safely, with an explicit encoding'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How an exception travels',
        loop: false,
        steps: [
          { icon: 'bolt', label: 'Something fails', desc: '`int("abc")` raises `ValueError`' },
          { icon: 'arrow-up', label: 'Propagates up the stack', desc: 'Each frame gets a chance to handle it' },
          { icon: 'filter', label: 'Matching `except`?', desc: 'The first block whose type matches wins' },
          { icon: 'wrench', label: 'Handled', desc: 'Recover, log, or re-raise with context' },
          { icon: 'broom', label: '`finally` / `with` cleanup', desc: 'Files closed, locks released — either way' },
          { icon: 'triangle-exclamation', label: 'Unhandled → traceback', desc: 'Reaches the top: program exits, stack printed' }
        ]
      },
      example: {
        title: 'Handling failure and working with files',
        items: [
          '**`try: n = int(text)`** / **`except ValueError: n = 0`** — handle exactly the failure you expect',
          '**`except (ValueError, TypeError) as e:`** — several types, and bind the exception to inspect it',
          '**`else:`** — runs only when the `try` block raised nothing; keeps the happy path out of `try`',
          '**`finally:`** — always runs; use for cleanup you cannot express with `with`',
          '**`raise ValueError("port must be positive")`** — fail immediately and say why',
          '**`raise ValueError("bad config") from err`** — re-raise while keeping the original cause in the traceback',
          '**`class ConfigError(Exception): pass`** — a domain-specific exception callers can catch precisely',
          '**`with open("data.txt", encoding="utf-8") as f:`** — read; the file closes no matter what',
          '**`for line in f:`** — streams line by line; never `f.read()` a file you cannot fit in memory',
          '**`with open("out.txt", "w", encoding="utf-8") as f: f.write(text)`** — `"w"` truncates, `"a"` appends',
          '**`except FileNotFoundError:`** — far better than checking existence first, which races with reality',
          '**`except Exception: pass`** — the anti-pattern: a bug you will spend a day finding'
        ]
      },
      takeaways: [
        '**Read tracebacks from the bottom.** The last line is the exception and message; the lines above are the call path. That is usually the whole diagnosis.',
        '**Catch the narrowest exception that expresses what you expect.** A broad `except` hides typos and logic errors, converting a crash you would fix in minutes into wrong output nobody notices.',
        '**Never write `except: pass`.** If a failure really is ignorable, catch the specific type and log the reason — future you will want to know it happened.',
        '**Raise early, at the point where you can describe the problem.** A `ValueError` at input validation is far cheaper to debug than a `TypeError` deep in a helper five calls later.',
        '**`finally` always runs** — after a `return`, after an exception, on the way out. That is its whole purpose.',
        '**`with` is `finally` done properly.** Any resource with a close/release step should be acquired in a `with` block; the cleanup then cannot be forgotten.',
        '**Custom exceptions describe your domain.** `InsufficientFunds` lets a caller respond precisely; a bare `Exception("error")` forces them to parse strings.',
        '**Ask forgiveness, not permission (EAFP).** Trying the operation and catching the failure is idiomatic Python and avoids the race between checking and doing.',
        '**Always pass `encoding="utf-8"`** when opening text files. The default varies by platform and produces bugs that only appear on someone else\'s machine.',
        '**Test the error paths.** Code that only ever runs when things go wrong is exactly the code most likely to be broken.'
      ],
      reflection: 'A function reads a config file and returns a dict of settings. List everything that can go wrong: file missing, unreadable, malformed, missing a required key, a value of the wrong type. For each, decide whether the function should handle it or raise — and what the caller could actually do about it.',
      checks: [
        'Which line of a traceback tells you the actual error?',
        'Why is `except Exception:` usually a mistake?',
        'What is the difference between `else` and `finally` on a `try`?',
        'When should you raise rather than catch?',
        'What does `with` guarantee that a plain `open()` does not?',
        'Why specify an encoding when opening a file?',
        'What does "ask forgiveness, not permission" mean in practice?'
      ]
    },
    {
      id: 'modules-stdlib',
      title: 'Modules, Packages & the Ecosystem',
      blurb: 'Splitting code into files, importing it back, and managing third-party dependencies without breaking things.',
      whatIs: {
        text: `A **module** is a single \`.py\` file; a **package** is a directory of modules. \`import json\` runs that module once, caches it in \`sys.modules\`, and binds the name. Because import executes the file top to bottom, any code at module level runs on import — which is why real work belongs inside functions, guarded by \`if __name__ == "__main__":\` if the file is also runnable as a script.

Python finds modules by searching \`sys.path\` — the script's own directory first, then installed packages. Almost every "ModuleNotFoundError" is really a \`sys.path\` question: wrong directory, wrong environment, or a local file shadowing a stdlib one (naming a file \`random.py\` breaks every \`import random\` nearby).

The **standard library** is Python's biggest advantage: \`json\`, \`re\`, \`datetime\`, \`pathlib\`, \`os\`, \`sys\`, \`collections\`, \`itertools\`, \`csv\`, \`logging\`, \`unittest\`, \`subprocess\`. Checking the stdlib before adding a dependency is a habit worth building — a large share of "I need a library for this" turns out to be one import.

Third-party packages come from **PyPI** via \`pip\`. Installing them globally eventually creates a conflict: project A needs version 1, project B needs version 2. A **virtual environment** gives each project its own isolated set of packages, and \`requirements.txt\` (or a \`pyproject.toml\`) records exactly what is needed so a colleague — or a build server — can reproduce it.`,
        ensures: [
          'Split code across modules and import between them',
          'Understand what `import` executes and what it caches',
          'Use `if __name__ == "__main__":` correctly',
          'Diagnose an import error by reasoning about `sys.path`',
          'Create and activate a virtual environment per project',
          'Install, pin and reproduce dependencies with `pip` and `requirements.txt`',
          'Know the standard-library modules worth reaching for first'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What `import mymodule` does',
        loop: false,
        steps: [
          { icon: 'database', label: 'Already imported?', desc: 'Checks `sys.modules` cache — if present, reuse it' },
          { icon: 'magnifying-glass', label: 'Search `sys.path`', desc: 'Script directory, then the environment\'s site-packages' },
          { icon: 'play', label: 'Execute the file', desc: 'Top to bottom, once — module-level code runs now' },
          { icon: 'box', label: 'Build the module object', desc: 'Its functions and classes become attributes' },
          { icon: 'tag', label: 'Bind the name', desc: '`mymodule` now refers to that object in your namespace' }
        ]
      },
      example: {
        title: 'Modules, environments and dependencies',
        items: [
          '**`import json`** — whole module; use as `json.dumps(data)`',
          '**`from pathlib import Path`** — pull one name into your namespace',
          '**`import numpy as np`** — the conventional alias for a long name',
          '**`from mypackage.utils import clean`** — import from your own package',
          '**`from module import *`** — avoid: it hides where names came from and shadows silently',
          '**`if __name__ == "__main__": main()`** — run only when executed directly, not when imported',
          '**`python3 -m venv .venv`** — create a virtual environment in the project folder',
          '**`source .venv/bin/activate`** — activate it (`.venv\\Scripts\\activate` on Windows)',
          '**`pip install requests`** — installs into the *active* environment only',
          '**`pip freeze > requirements.txt`** — record exact versions',
          '**`pip install -r requirements.txt`** — reproduce the environment elsewhere',
          '**`python3 -m pytest`** — run a tool as a module, guaranteeing the current environment'
        ]
      },
      takeaways: [
        '**Import executes the file.** Anything at module level — a print, a database connection, a long computation — happens the moment someone imports you. Keep module level to definitions.',
        '**`if __name__ == "__main__":` separates library from script.** Inside a file being run directly, `__name__` is `"__main__"`; when imported it is the module name.',
        '**A module is imported once per process and cached.** Editing a file mid-session in a long-running program will not reload it — restart, or you will debug a version that no longer exists.',
        '**Import errors are path errors.** Which Python is running (`which python3`), which environment is active, and where the module is on disk — that triple explains nearly all of them.',
        '**Never name a file after a stdlib module.** A local `json.py` or `random.py` shadows the real one and produces baffling errors.',
        '**One virtual environment per project, always.** It is thirty seconds of setup that prevents the entire class of "it works on my machine" dependency conflicts.',
        '**Pin your dependencies.** `requirements.txt` from `pip freeze` makes builds reproducible; an unpinned dependency means a build that passed yesterday can fail today untouched.',
        '**Check the standard library first.** `pathlib` for file paths, `collections.Counter` for tallies, `itertools` for combinatorics, `datetime` for time, `logging` instead of `print`. Every dependency you do not add is one you never have to upgrade.',
        '**`from x import *` is a trap.** It makes it impossible to tell where a name came from and lets one import silently overwrite another.',
        '**Prefer `python3 -m pip` and `python3 -m pytest`** — running tools as modules guarantees they use the interpreter you think they do.'
      ],
      reflection: 'You clone a colleague\'s project and `import pandas` fails, though you are sure you installed pandas last week. Walk through the diagnosis: which interpreter is running, which environment is active, and where is pandas actually installed?',
      checks: [
        'What is the difference between a module and a package?',
        'What happens the first time a module is imported, and on the second import?',
        'What does `if __name__ == "__main__":` guard against?',
        'Why does naming your file `random.py` break things?',
        'Why use a virtual environment rather than installing globally?',
        'What is `requirements.txt` for?',
        'Name three standard-library modules and what each is for.'
      ]
    }
  ]
}
