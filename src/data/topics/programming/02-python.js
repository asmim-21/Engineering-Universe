export default {
  id: 'python',
  title: 'Python',
  tone: 'c2',
  blurb: 'Syntax, data types, control flow, functions, OOP, error handling, and the standard library.',
  tags: ['Language', 'Scripting', 'Data', 'Web'],
  popups: [
    {
      id: 'syntax-setup',
      title: 'Syntax & Setup',
      blurb: 'Interpreters, running scripts, indentation, and getting started.',
      whatIs: {
        text: 'Python is an interpreted language: you write code, and the Python interpreter reads and runs it line by line.',
        ensures: [
          'Understand interpreted vs compiled',
          'Run Python scripts and the interactive shell',
          'Know that indentation matters (it defines blocks)',
          'Use comments (`#`)',
          'Understand Python versioning (2 vs 3)'
        ]
      },
      example: {
        title: 'Running Python code',
        items: [
          '`python script.py` — run a script file',
          '`python` or `python3` — open the interactive shell',
          '`print("hello")` — a line of Python',
          'Indentation defines blocks: no `{}` like Java',
          '`# This is a comment` — single-line comment'
        ]
      },
      who: ['You', 'Python interpreter'],
      takeaways: [
        'Python 3 is current; Python 2 is obsolete.',
        'Indentation is enforced — it is not optional or stylistic.',
        'The interactive shell (`python`) is great for experimenting.',
        '`.py` files are just text files with Python code.'
      ],
      reflection: 'Write `print("hello")` in the Python shell. Then write the same in a file and run it.',
      checks: [
        'What is an interpreter?',
        'Why does Python care about indentation?',
        'How do you run a Python script?',
        'What is the interactive shell for?'
      ]
    },
    {
      id: 'data-types',
      title: 'Core Data Types & Collections',
      blurb: 'Numbers, strings, lists, tuples, dicts, sets — and how Python thinks about types.',
      whatIs: {
        text: 'Python has built-in data types for different kinds of values: numbers, strings, and collections.',
        ensures: [
          'Understand Python primitives: int, float, str, bool',
          'Use lists (mutable, ordered)',
          'Use tuples (immutable, ordered)',
          'Use dicts (key-value pairs)',
          'Use sets (unique, unordered)',
          'Understand type checking at runtime'
        ]
      },
      example: {
        title: 'Python data types',
        items: [
          '`x = 42` — integer',
          '`y = 3.14` — float',
          '`s = "hello"` — string',
          '`lst = [1, 2, 3]` — list (mutable)',
          '`tpl = (1, 2, 3)` — tuple (immutable)',
          '`d = {"name": "Alice", "age": 30}` — dict',
          '`s = {1, 2, 3}` — set',
          '`type(x)` — check type at runtime'
        ]
      },
      who: ['You'],
      takeaways: [
        'Lists are mutable: you can change them. Tuples are immutable: you cannot.',
        'Dicts are unordered (in Python < 3.7) or insertion-ordered (3.7+).',
        'Sets are useful for membership testing and removing duplicates.',
        'Strings are immutable; changes create new strings.',
        'Python is dynamically typed: types are checked at runtime.'
      ],
      reflection: 'Why might you use a tuple instead of a list?',
      checks: [
        'What is the difference between a list and a tuple?',
        'How do you create a dict?',
        'What is a set used for?',
        'Can you modify a string?'
      ]
    },
    {
      id: 'control-flow-py',
      title: 'Control Flow',
      blurb: 'Conditionals, loops, comprehensions — branching and repetition.',
      whatIs: {
        text: 'Control flow statements let you make decisions and repeat work.',
        ensures: [
          'Write `if`/`elif`/`else` statements',
          'Use `for` loops with `in`',
          'Use `while` loops',
          'Write list/dict comprehensions',
          'Use `break` and `continue`'
        ]
      },
      example: {
        title: 'Control flow in Python',
        items: [
          '`if x > 0:\\n  print("positive")` — conditional branch',
          '`for i in range(10):\\n  print(i)` — loop over a range',
          '`for item in list:\\n  print(item)` — loop over items',
          '`[x*2 for x in range(5)]` — list comprehension',
          '`{x: x**2 for x in range(3)}` — dict comprehension',
          '`while True:\\n  if condition: break` — break out of loop'
        ]
      },
      who: ['You'],
      takeaways: [
        'Indentation still matters — your `if` block is indented.',
        'Comprehensions are concise and Pythonic — learn them.',
        '`range(n)` goes from 0 to n-1.',
        '`for item in collection:` is idiomatic; avoid index-based loops.',
        '`continue` skips to the next iteration; `break` exits the loop.'
      ],
      reflection: 'Write a list comprehension that gives you all even numbers from 0 to 20.',
      checks: [
        'How do you write an `if` statement?',
        'What does `range(10)` give you?',
        'How do you write a list comprehension?',
        'What does `break` do?'
      ]
    },
    {
      id: 'functions-py',
      title: 'Functions',
      blurb: 'Defining functions, parameters, defaults, `*args`, `**kwargs`, scope.',
      whatIs: {
        text: 'Functions are reusable blocks of code. Python functions are flexible about parameters.',
        ensures: [
          'Define functions with `def`',
          'Use positional and keyword arguments',
          'Set default parameter values',
          'Use `*args` for variable positional arguments',
          'Use `**kwargs` for variable keyword arguments',
          'Understand local and global scope'
        ]
      },
      example: {
        title: 'Functions in Python',
        items: [
          '`def greet(name):\\n  return "hello, " + name` — basic function',
          '`def greet(name="world"):\\n  return "hello, " + name` — default argument',
          '`def sum_all(*args):\\n  return sum(args)` — variable arguments',
          '`def describe(**kwargs):\\n  for k, v in kwargs.items(): print(k, v)` — keyword arguments',
          '`greet()` — calls function, uses default',
          '`greet(name="Alice")` — named argument'
        ]
      },
      who: ['You'],
      takeaways: [
        'Functions are objects in Python; you can pass them around.',
        '`*args` collects positional args into a tuple.',
        '`**kwargs` collects keyword args into a dict.',
        'Scope: variables inside a function are local; use `global` to reach outside scope.',
        'Functions should have one clear purpose; use them to avoid repetition.'
      ],
      reflection: 'Write a function that takes a variable number of numbers and returns their average.',
      checks: [
        'How do you define a function?',
        'How do you set a default parameter?',
        'What is `*args` for?',
        'What is `**kwargs` for?',
        'What is scope?'
      ]
    },
    {
      id: 'oop-python',
      title: 'Object-Oriented Python',
      blurb: 'Classes, `self`, dunder methods, inheritance — modeling in code.',
      whatIs: {
        text: 'Classes let you bundle data and methods into objects. Python classes are flexible and support inheritance.',
        ensures: [
          'Define classes with `class`',
          'Use `self` to refer to the object',
          'Write `__init__` constructors',
          'Use special methods: `__str__`, `__repr__`, `__eq__`',
          'Inherit from base classes',
          'Override methods in subclasses'
        ]
      },
      example: {
        title: 'Classes and objects in Python',
        items: [
          '`class Dog:\\n  def __init__(self, name):\\n    self.name = name` — class with constructor',
          '`def bark(self):\\n  return f"{self.name} says woof"` — instance method',
          '`dog = Dog("Buddy")` — create an object',
          '`dog.bark()` — call a method',
          '`class Puppy(Dog):\\n  pass` — inheritance',
          '`def __str__(self):\\n  return self.name` — string representation'
        ]
      },
      who: ['You'],
      takeaways: [
        '`self` is the object itself — always the first parameter in instance methods.',
        'Dunder methods (`__init__`, `__str__`, etc.) are special: Python calls them automatically.',
        'Inheritance: a subclass inherits methods from its base class.',
        'You can override inherited methods: redefine them in the subclass.',
        'Duck typing: if it quacks like a duck, it is a duck (no strict interfaces needed).'
      ],
      reflection: 'Design a class for a car. What properties and methods would it have?',
      checks: [
        'What is `self`?',
        'What is `__init__` for?',
        'How do you inherit from another class?',
        'Can you override a method?',
        'What is duck typing?'
      ]
    },
    {
      id: 'error-handling',
      title: 'Error Handling & File I/O',
      blurb: 'Try/except/finally, context managers (`with`), reading and writing files.',
      whatIs: {
        text: 'Errors happen. Handle them gracefully. Use context managers to ensure cleanup.',
        ensures: [
          'Catch exceptions with `try`/`except`/`finally`',
          'Understand exception types (ValueError, KeyError, etc.)',
          'Raise your own exceptions',
          'Use `with` for file handling and resource cleanup',
          'Read and write files safely'
        ]
      },
      example: {
        title: 'Error handling and files',
        items: [
          '`try:\\n  x = int(input())\\nexcept ValueError:\\n  print("not a number")` — catch error',
          '`except (ValueError, KeyError) as e:\\n  print(e)` — catch multiple types',
          '`finally:\\n  cleanup()` — always runs',
          '`with open("file.txt") as f:\\n  data = f.read()` — file handling',
          '`with open("file.txt", "w") as f:\\n  f.write("text")` — write to file',
          '`raise ValueError("bad input")` — raise an exception'
        ]
      },
      who: ['You'],
      takeaways: [
        '`with` is the Pythonic way to handle files — ensures they close even if an error occurs.',
        '`finally` runs no matter what — use it for cleanup.',
        'Different exceptions for different errors: catch the specific one.',
        'Files opened in `with` blocks are automatically closed.',
        'When writing, open with `"w"` (write) or `"a"` (append).'
      ],
      reflection: 'Write code that reads a file, processes each line, and handles file-not-found errors.',
      checks: [
        'How do you catch an exception?',
        'What does `finally` do?',
        'Why use `with` for files?',
        'What error type is raised when you divide by zero?',
        'How do you write to a file?'
      ]
    },
    {
      id: 'modules-stdlib',
      title: 'Modules, Packages & Standard Library',
      blurb: 'Imports, `pip`, virtual environments, and common stdlib modules.',
      whatIs: {
        text: 'Modules are files with code. Packages are folders with modules. The standard library is built-in. `pip` installs third-party packages.',
        ensures: [
          'Import modules and use their functions',
          'Organize code into modules',
          'Use `pip` to install packages',
          'Create and use virtual environments',
          'Know useful stdlib: `os`, `sys`, `datetime`, `json`, `re`'
        ]
      },
      example: {
        title: 'Modules and the standard library',
        items: [
          '`import os` — import a module',
          '`from os.path import join` — import specific function',
          '`import datetime as dt` — alias for convenience',
          '`os.listdir(".")` — use a module function',
          '`python -m venv env` — create a virtual environment',
          '`pip install requests` — install a package',
          '`import json; json.dumps(data)` — serialize to JSON'
        ]
      },
      who: ['You'],
      takeaways: [
        'Virtual environments isolate project dependencies — use them always.',
        '`pip freeze > requirements.txt` — save your dependencies.',
        'The standard library includes: `os`, `sys`, `math`, `random`, `json`, `re`, `datetime`, `collections`.',
        'Third-party libraries on PyPI — search for what you need before writing it.',
        '`python -c "import module; help(module.function)"` — quick help in the shell.'
      ],
      reflection: 'Set up a virtual environment and install a package. What would you use it for?',
      checks: [
        'What is the difference between a module and a package?',
        'What is `pip` for?',
        'Why use a virtual environment?',
        'How do you import a specific function from a module?',
        'What is `requirements.txt` for?'
      ]
    }
  ]
}
