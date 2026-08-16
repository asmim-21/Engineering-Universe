export default {
  id: 'c',
  title: 'C',
  tone: 'c4',
  blurb: 'The language underneath the others: the compilation pipeline, pointers, manual memory management, structs and files, and the discipline undefined behaviour demands.',
  tags: ['Language', 'Systems', 'Low-level', 'Compiled'],
  popups: [
    {
      id: 'compilation-model',
      title: 'The Compilation Pipeline',
      blurb: 'Preprocessor, compiler, assembler, linker — four stages between your source and a program you can run.',
      whatIs: {
        text: `C compiles all the way down to machine code for one specific central processing unit (CPU) and operating system (OS). There is no virtual machine and no interpreter, which is why a C binary starts instantly and why it only runs on the platform it was built for. \`gcc main.c -o program\` looks like one command but is really four stages, and knowing which stage failed tells you what kind of mistake you made.

The **preprocessor** is a text substitution engine that runs first. \`#include <stdio.h>\` literally pastes that header's text into your file; \`#define MAX 100\` replaces every later \`MAX\` with \`100\`. It does not understand C — it understands text — which is why macros with arguments need defensive parentheses.

The **compiler** turns preprocessed C into assembly, checking syntax and types along the way, and the **assembler** turns that into an object file (\`.o\`) of machine code with unresolved references. Each \`.c\` file is compiled independently; that is why the compiler only needs your *declarations* (from headers) to compile a call to a function defined elsewhere.

The **linker** stitches the object files and libraries together, resolving every symbol to a real address, and produces the executable. This is why the two commonest build errors mean completely different things: "implicit declaration of function" is the compiler saying it never saw a declaration, while "undefined reference to \`foo\`" is the linker saying nothing anywhere actually defines it.`,
        ensures: [
          'Name the four stages and what each one consumes and produces',
          'Understand `#include` and `#define` as text substitution',
          'Split a program into `.h` declarations and `.c` definitions',
          'Compile to object files and link them separately',
          'Read compiler warnings and turn them on with `-Wall -Wextra`',
          'Tell a compiler error apart from a linker error'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From `main.c` to an executable',
        loop: false,
        steps: [
          { icon: 'file-code', label: 'Source `.c` / `.h`', desc: 'Plain text you wrote' },
          { icon: 'scissors', label: 'Preprocessor', desc: 'Expands `#include` and `#define`; strips comments' },
          { icon: 'gears', label: 'Compiler', desc: 'Type-checks and emits assembly for this CPU' },
          { icon: 'microchip', label: 'Assembler', desc: 'Assembly → object file `main.o` (machine code, unresolved names)' },
          { icon: 'link', label: 'Linker', desc: 'Joins objects and libraries; resolves every symbol' },
          { icon: 'play', label: 'Executable', desc: 'A binary for this OS and processor — nothing else needed to run it' }
        ]
      },
      example: {
        title: 'Driving the compiler',
        items: [
          '**`gcc main.c -o program`** — all four stages at once, producing `program`',
          '**`gcc -Wall -Wextra -g main.c -o program`** — the flags you should always use: all warnings, debug symbols',
          '**`gcc -E main.c`** — stop after preprocessing; see exactly what your macros expanded to',
          '**`gcc -S main.c`** — stop after compiling; read the assembly',
          '**`gcc -c main.c`** — stop after assembling; produces `main.o`',
          '**`gcc main.o utils.o -o program`** — link previously compiled objects',
          '**`gcc main.c -lm -o program`** — link the maths library; `-l` names a library to link',
          '**`#include <stdio.h>`** — angle brackets: search the system include paths',
          '**`#include "utils.h"`** — quotes: search this directory first, for your own headers',
          '**`#define SQUARE(x) ((x) * (x))`** — parenthesise every argument, or `SQUARE(a + b)` expands wrongly',
          '**`undefined reference to \'helper\'`** — linker error: declared somewhere, defined nowhere',
          '**`implicit declaration of function \'helper\'`** — compiler error: you forgot the header'
        ]
      },
      takeaways: [
        '**Four stages, four kinds of failure.** Preprocessor errors are about missing files, compiler errors about syntax and types, linker errors about missing definitions, run-time failures about everything else.',
        '**The preprocessor is dumb text substitution.** It has no idea about types or scope, which is why unparenthesised macros produce arithmetic that looks impossible.',
        '**Headers declare, `.c` files define.** The header is the contract other files compile against; the source file is the implementation. Duplicate definitions across headers are what include guards (`#pragma once`) prevent.',
        '**Separate compilation is why C projects scale.** Change one `.c` file and only that object needs rebuilding — the whole point of `make` and every build system after it.',
        '**Always compile with `-Wall -Wextra`.** C will happily compile deeply broken code; the warnings are where most of the real diagnosis lives. Treat them as errors.',
        '**`-g` costs nothing at run time and makes a debugger useful.** Without it, a crash gives you addresses instead of line numbers.',
        '**Optimisation changes behaviour of broken code.** A program that works at `-O0` and fails at `-O2` almost always has undefined behaviour, not a compiler bug.',
        '**A binary is platform-specific.** Built on Linux x86-64, it runs on Linux x86-64. Portability in C is source portability, achieved by recompiling.'
      ],
      reflection: 'Run `gcc -E` on a file that includes `<stdio.h>` and count the lines that come out. What does that tell you about what `#include` costs, and why C projects care so much about what headers include?',
      checks: [
        'What does the preprocessor do, and what does it not understand?',
        'What is in an object file that is not yet in the executable?',
        'What is the difference between a compiler error and a linker error?',
        'Why does `#include "x.h"` differ from `#include <x.h>`?',
        'Why compile each `.c` file separately instead of all at once?',
        'What do `-Wall` and `-g` give you?'
      ]
    },
    {
      id: 'c-syntax',
      title: 'Types, Structs & Functions',
      blurb: 'A small language with sharp edges: fixed-width types, arrays that are not objects, strings that are conventions, and structs.',
      whatIs: {
        text: `C is deliberately minimal. There are no classes, no methods, no garbage collector, no exceptions, no strings and no bounds checking. What you get is data laid out in memory and functions that operate on it — which is exactly why it is still the language of kernels, drivers and embedded systems.

Types describe **how many bytes and how to interpret them**: \`char\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, plus \`unsigned\` variants. Their exact sizes are platform-dependent, which is why portable code uses \`<stdint.h>\` types like \`int32_t\` and \`uint8_t\` where size actually matters. There is no \`bool\` unless you include \`<stdbool.h>\`; historically zero is false and everything else is true.

An **array** is a contiguous block with no length attached. \`int arr[10]\` gives you ten ints and nothing else — no \`.length\`, no bounds check. Writing \`arr[10]\` compiles and quietly corrupts whatever sits next in memory. Passing an array to a function passes a pointer to its first element, which is why you must pass the length alongside it.

A **string** in C is just a \`char\` array ending in a \`'\\0'\` byte. Every string function relies on that terminator; forget it and \`strlen\` runs off into unrelated memory. \`sizeof\` and \`strlen\` answer different questions, and confusing them causes buffer overflows. Finally, **structs** group related fields into one type — the closest C gets to an object — and \`typedef\` gives that struct a plain name so you can write \`Point p;\` rather than \`struct Point p;\`.`,
        ensures: [
          'Declare variables with explicit types and know when size matters',
          'Use arrays knowing there is no length and no bounds checking',
          'Work with null-terminated strings and the `<string.h>` functions safely',
          'Define structs and give them names with `typedef`',
          'Write functions with prototypes, parameters and return values',
          'Distinguish `sizeof` from `strlen`, and stack arrays from pointers'
        ]
      },
      example: {
        title: 'The building blocks',
        code: '#include <stdio.h>\n' +
          '#include <string.h>\n\n' +
          'typedef struct {\n' +
          '    int  id;\n' +
          '    char name[32];      /* fixed-size buffer, not a String object */\n' +
          '    double balance;\n' +
          '} Account;\n\n' +
          '/* Prototype: the compiler needs the shape before the call site. */\n' +
          'void print_account(const Account *a);\n\n' +
          'int main(void) {\n' +
          '    Account acct = { .id = 1, .balance = 250.0 };\n' +
          '    strncpy(acct.name, "Alice", sizeof(acct.name) - 1);\n' +
          '    acct.name[sizeof(acct.name) - 1] = \'\\0\';   /* always terminate */\n\n' +
          '    int scores[3] = {90, 75, 60};\n' +
          '    int n = sizeof(scores) / sizeof(scores[0]);  /* only works on a real array */\n\n' +
          '    int total = 0;\n' +
          '    for (int i = 0; i < n; i++) {\n' +
          '        total += scores[i];\n' +
          '    }\n\n' +
          '    printf("%s scored %d over %d tests\\n", acct.name, total, n);\n' +
          '    print_account(&acct);        /* pass the address, not a copy */\n' +
          '    return 0;                    /* 0 means success to the shell */\n' +
          '}\n\n' +
          'void print_account(const Account *a) {\n' +
          '    /* const: this function promises not to modify what it was given. */\n' +
          '    printf("#%d %s: %.2f\\n", a->id, a->name, a->balance);\n' +
          '}'
      },
      takeaways: [
        '**C gives you memory and functions; everything else is convention.** Objects, strings and collections are patterns you build, not features you are given.',
        '**Arrays carry no length.** You must pass the size alongside every array you pass to a function — the array itself decays to a bare pointer.',
        '**There is no bounds checking, ever.** `arr[10]` on a ten-element array is not an error, it is corruption of whatever lives next. This is the root of a large share of security vulnerabilities in the wild.',
        '**Strings are null-terminated char arrays.** `strlen` counts up to the `\'\\0\'`; `sizeof` reports the buffer size. Mixing them up is how buffers overflow.',
        '**Prefer the bounded string functions** — `snprintf`, `strncpy` with an explicit terminator — over `strcpy` and `sprintf`, which write until they meet a terminator that may never come.',
        '**Structs are values, not references.** Assigning a struct copies every field; passing one to a function copies it too. Pass `&s` when the struct is large or must be modified.',
        '**`->` is `(*p).field`.** Dot for a struct you hold, arrow for a pointer to one.',
        '**`const` in a parameter is a contract:** "I will read this, not change it". It documents intent and lets the compiler catch violations.',
        '**Use `<stdint.h>` when width matters.** `int` is not guaranteed to be 32 bits; `int32_t` is. Assumptions about size are a classic portability bug.',
        '**Uninitialised variables hold garbage, not zero.** Locals are whatever the stack happened to contain. Initialise at declaration.'
      ],
      reflection: 'Declare `char buf[8]` and copy `"hello world"` into it with `strcpy`. It compiles, and it may even appear to work. What has actually happened in memory, and why is "it ran fine on my machine" the most dangerous possible evidence in C?',
      checks: [
        'What does an array in C not know about itself?',
        'What makes a char array a string?',
        'What is the difference between `sizeof(s)` and `strlen(s)`?',
        'When do you use `.` and when do you use `->`?',
        'What happens when you pass a struct to a function by value?',
        'Why does portable code use `int32_t` rather than `int`?',
        'What is in an uninitialised local variable?'
      ]
    },
    {
      id: 'pointers',
      title: 'Pointers',
      blurb: 'Variables that hold addresses — the idea that makes C powerful, and the one that makes it dangerous.',
      whatIs: {
        text: `Every byte of memory has an **address**. A pointer is simply a variable whose value is one of those addresses. \`int *p\` declares a pointer to an \`int\`; \`&x\` produces the address of \`x\`; \`*p\` **dereferences** — go to that address and read (or write) the value there. That is the entire concept, and everything else is consequence.

Pointers exist because C passes arguments by value. Without them, a function could never modify its caller's data, return more than one result, or avoid copying a large struct on every call. \`void swap(int *a, int *b)\` works precisely because it receives addresses rather than copies.

A pointer's **type** matters even though every address is the same size, because it decides two things: how many bytes to read when you dereference, and how far \`p + 1\` moves. For an \`int*\` on a typical machine, \`p + 1\` advances four bytes, not one. That is why array indexing and pointer arithmetic are the same operation — \`arr[i]\` is defined as \`*(arr + i)\`.

The danger is that a pointer can hold an address that is not valid: never initialised, already freed, or past the end of an array. Dereferencing it is **undefined behaviour** — sometimes a segfault, sometimes silent corruption that shows up somewhere unrelated an hour later. The discipline is small and non-negotiable: initialise pointers, check for \`NULL\` before dereferencing, and set a pointer to \`NULL\` once what it pointed at is gone.`,
        ensures: [
          'Read pointer declarations and know what `&` and `*` each do',
          'Pass by address so a function can modify the caller\'s data',
          'Understand pointer arithmetic and its relationship to arrays',
          'Handle `NULL` safely and know what a dangling pointer is',
          'Use pointers to structs with `->` and `const` correctly',
          'Recognise why an invalid dereference may not crash immediately'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Dereferencing, step by step',
        loop: false,
        steps: [
          { icon: 'hashtag', label: '`int x = 42;`', desc: 'The value 42 sits at some address, say 0x7ffd10' },
          { icon: 'location-dot', label: '`&x`', desc: 'Address-of: produces 0x7ffd10' },
          { icon: 'link', label: '`int *p = &x;`', desc: '`p` is a variable whose value is that address' },
          { icon: 'arrow-right-to-bracket', label: '`*p`', desc: 'Dereference: go to 0x7ffd10 and read an int → 42' },
          { icon: 'pen', label: '`*p = 99;`', desc: 'Write through the pointer — `x` is now 99' },
          { icon: 'triangle-exclamation', label: 'Invalid address', desc: 'Uninitialised or freed: segfault, or silent corruption elsewhere' }
        ]
      },
      example: {
        title: 'Pointers in practice',
        items: [
          '**`int x = 42; int *p = &x;`** — declare a pointer and point it at `x`',
          '**`printf("%d", *p);`** → `42` — dereference to read',
          '**`*p = 99;`** — dereference to write; `x` is now 99',
          '**`printf("%p", (void *)p);`** — print the address itself, not the value',
          '**`void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; }`** — modify the caller\'s variables',
          '**`swap(&first, &second);`** — pass addresses; without `&` you swap two copies and change nothing',
          '**`int arr[5]; int *q = arr;`** — an array name decays to a pointer to its first element',
          '**`*(arr + 2)` is exactly `arr[2]`** — indexing *is* pointer arithmetic',
          '**`q++`** — advances by `sizeof(int)` bytes, not one byte',
          '**`Account *a = &acct; a->balance`** — `->` dereferences and selects a field in one step',
          '**`if (p != NULL) { *p = 1; }`** — check before every dereference you cannot prove is safe',
          '**`free(p); p = NULL;`** — after freeing, null the pointer so a later use fails loudly'
        ]
      },
      takeaways: [
        '**A pointer is a variable holding an address.** Once that clicks, `*` and `&` stop being punctuation and become "go there" and "where is it".',
        '**`&` and `*` are inverses.** `*(&x)` is `x`. Read declarations right to left: `int *p` is "`p` is a pointer to int".',
        '**Pointers are how C returns more than one value** and how it modifies the caller\'s data. That is the reason the language needs them, not an optimisation.',
        '**Pointer arithmetic scales by the pointed-to type.** `p + 1` moves one element, not one byte. Arrays and pointers are the same arithmetic wearing different syntax.',
        '**An array decays to a pointer when passed.** The function receives an address and has no idea how many elements follow — pass the length too.',
        '**`NULL` means "points at nothing".** Dereferencing it is the reliably *good* failure: an immediate segfault instead of quiet corruption.',
        '**Dangling pointers are worse than null ones.** After `free`, the address still looks plausible; using it may work, may corrupt, may crash tomorrow. Null it immediately.',
        '**Never return a pointer to a local variable.** That stack frame disappears when the function returns; the address is garbage the moment the caller uses it.',
        '**A crash rarely happens where the bug is.** Memory corruption surfaces later, somewhere unrelated — which is why the tooling in the debugging section is not optional.'
      ],
      reflection: 'Write a function that should double a number in place. Do it once taking `int n` and once taking `int *n`. Trace what the caller sees in each case — and then explain why `scanf("%d", &value)` needs that ampersand.',
      checks: [
        'What does a pointer store?',
        'What is the difference between `p` and `*p`?',
        'Why does `swap` need pointers to work?',
        'How far does `p + 1` move for an `int *`?',
        'What is the relationship between `arr[i]` and pointer arithmetic?',
        'What is a dangling pointer, and why is it worse than a null one?',
        'Why can you not return a pointer to a local variable?'
      ]
    },
    {
      id: 'memory-management',
      title: 'Memory Management: Stack & Heap',
      blurb: 'Two kinds of memory, one `malloc` for every `free`, and the leaks and corruptions that follow when the balance breaks.',
      whatIs: {
        text: `A running C program uses two regions you need to reason about. The **stack** holds local variables and function frames; it is allocated and released automatically as functions are entered and returned from, it is fast, and it is small (typically megabytes). The **heap** is a large pool you request from explicitly with \`malloc\` and return with \`free\`. Its size is decided at run time — which is exactly why you need it.

Use the stack whenever you can: it is faster and it cannot leak. Use the heap when the size is not known until run time, when the data must outlive the function that created it, or when it is simply too large for the stack. \`int buf[10]\` is a stack array; \`int *buf = malloc(n * sizeof(int))\` is a heap array whose size \`n\` was computed a moment earlier.

Every \`malloc\` must be matched by exactly one \`free\`, and this is where C's hardest engineering problem lives: **ownership**. When a pointer is passed around, whose job is it to free the memory? The language does not answer that. It has to be a documented convention in your code — the caller frees, or the function that allocated frees, or an explicit "destroy" function is provided alongside the "create" one.

Getting it wrong produces three distinct failures. A **leak** is memory never freed — harmless in a short script, fatal in a service that runs for weeks. A **double free** corrupts the allocator's bookkeeping. A **use-after-free** reads or writes memory that has been handed to someone else. The last two are undefined behaviour and are among the most exploited classes of security vulnerability in existence.`,
        ensures: [
          'Decide between stack and heap for a given piece of data',
          'Allocate with `malloc`/`calloc`, resize with `realloc`, release with `free`',
          'Always check whether allocation succeeded',
          'Define who owns a pointer and who is responsible for freeing it',
          'Recognise leaks, double frees, and use-after-free',
          'Use a sanitizer or Valgrind to prove your program is clean'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The life of a heap allocation',
        loop: false,
        steps: [
          { icon: 'calculator', label: 'Decide the size', desc: '`n * sizeof(int)` — computed at run time' },
          { icon: 'box-open', label: '`malloc` requests it', desc: 'Returns the address of a block, or `NULL` on failure' },
          { icon: 'circle-check', label: 'Check for NULL', desc: 'Skipping this turns exhaustion into a crash on the next line' },
          { icon: 'pen', label: 'Use the block', desc: 'Contents are uninitialised garbage — `calloc` zeroes it for you' },
          { icon: 'trash', label: '`free(p)`', desc: 'Returns the block to the allocator — exactly once' },
          { icon: 'ban', label: '`p = NULL`', desc: 'The address is now meaningless; nulling makes a later use fail loudly' }
        ]
      },
      example: {
        title: 'Allocating, using and releasing',
        items: [
          '**`int x = 5;`** — stack: automatic, fast, gone when the function returns',
          '**`int *arr = malloc(n * sizeof(int));`** — heap: size decided at run time; `sizeof(*arr)` avoids type mistakes',
          '**`if (arr == NULL) { /* handle it */ }`** — `malloc` can fail; unchecked, the next line segfaults',
          '**`int *zeros = calloc(n, sizeof(int));`** — like `malloc` but zeroes the memory',
          '**`arr = realloc(arr, 2 * n * sizeof(int));`** — grow a block; assign to a temp first, or a failure leaks the original',
          '**`free(arr); arr = NULL;`** — release exactly once, then null the pointer',
          '**`char *s = malloc(strlen(src) + 1);`** — the `+ 1` is the null terminator; forgetting it corrupts the heap',
          '**`Account *create(void)` / `void destroy(Account *)`** — pair every allocator with a matching releaser',
          '**`free(p); printf("%d", *p);`** — use-after-free: may print, may crash, may be exploited',
          '**`free(p); free(p);`** — double free: corrupts the allocator, usually aborts',
          '**`gcc -fsanitize=address,undefined -g`** — catches these at run time with a precise report',
          '**`valgrind --leak-check=full ./program`** — lists every byte still reachable at exit and where it was allocated'
        ]
      },
      takeaways: [
        '**Stack when you can, heap when you must.** Stack memory is automatic and cannot leak; the heap exists for data whose size or lifetime is not known at compile time.',
        '**Every `malloc` needs exactly one `free`.** Not zero (a leak), not two (corruption). Writing the `free` immediately after the `malloc`, before filling in the middle, builds the habit.',
        '**Ownership must be a documented decision.** "Who frees this?" has no language-level answer in C, so it has to be a convention your codebase states and follows.',
        '**Always check `malloc`\'s return value.** Under memory pressure it returns `NULL`, and dereferencing that is a crash on a line with no obvious fault.',
        '**`malloc` does not zero memory; `calloc` does.** Reading uninitialised heap memory gives you whatever was there before — often another part of your own program.',
        '**Use-after-free and double-free are undefined behaviour, not errors.** The program may continue happily and corrupt data far away. This is why they are a security problem, not just a bug.',
        '**Set pointers to `NULL` after freeing.** `free(NULL)` is a safe no-op, so this converts a whole class of silent corruption into an immediate, obvious crash.',
        '**Off-by-one on a buffer is the classic C vulnerability.** `strlen(s) + 1`, `size - 1` for the terminator — get in the habit of accounting for the terminator explicitly.',
        '**Do not reason about memory bugs — measure them.** `-fsanitize=address` and Valgrind find in seconds what code review takes days to miss.',
        '**In long-running processes, a small leak is a fatal leak.** A hundred bytes per request is invisible in testing and takes down a server after a week.'
      ],
      reflection: 'Write a function that returns a newly allocated string built from two inputs. Now answer the only question that matters: who frees it? Write the sentence you would put in the header comment so that a caller who has never seen the implementation gets it right.',
      checks: [
        'What is the difference between stack and heap allocation?',
        'When do you need the heap at all?',
        'What does `malloc` return when it fails, and what should you do about it?',
        'What is the difference between `malloc` and `calloc`?',
        'What are the three ways `free` can go wrong?',
        'Why set a pointer to `NULL` after freeing it?',
        'Which tools prove that your program has no memory errors?'
      ]
    },
    {
      id: 'file-io',
      title: 'Standard & File I/O',
      blurb: 'Talking to the outside world: `printf` and `scanf`, streams, text versus binary, and closing what you open.',
      whatIs: {
        text: `C's input and output (I/O) is built on **streams**: an abstraction over a source or destination of bytes. Three are open before your program starts — \`stdin\`, \`stdout\` and \`stderr\` — which is why \`printf\` works with no setup, and why writing errors to \`stderr\` matters: it lets a user redirect normal output to a file while still seeing the failures.

Formatted I/O is driven by conversion specifiers. \`printf("%s scored %d\\n", name, score)\` matches each specifier to an argument in order. C does not check that they agree — passing an \`int\` where \`%s\` is expected compiles and then dereferences that integer as an address. Modern compilers warn about this with \`-Wall\`, which is one more reason to have it on.

Files follow **open, use, close**. \`fopen\` returns a \`FILE *\` or \`NULL\` (the file may not exist, or you may lack permission — check every time). The mode string chooses the behaviour: \`"r"\` read, \`"w"\` write (truncating an existing file immediately), \`"a"\` append, with \`"b"\` for binary. \`fclose\` flushes buffered output; skip it and the last writes may never reach the disk.

Text and binary modes are two different jobs. Text I/O (\`fprintf\`, \`fgets\`) is human-readable, portable and easy to inspect. Binary I/O (\`fwrite\`, \`fread\`) copies raw bytes of a struct — fast and compact, but tied to this machine's integer sizes, alignment and byte order, so the file may be unreadable on another platform. For reading lines, use \`fgets\` with an explicit buffer size: \`gets\` cannot be used safely and was removed from the language.`,
        ensures: [
          'Use `printf`/`scanf` format specifiers correctly and safely',
          'Write diagnostics to `stderr` rather than `stdout`',
          'Open, check, use and close files with `fopen`/`fclose`',
          'Choose the right mode, and know that `"w"` destroys existing content',
          'Read lines safely with `fgets` and bounded buffers',
          'Decide between text and binary formats and know the portability cost'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Reading a file safely',
        loop: false,
        steps: [
          { icon: 'folder-open', label: '`fopen(path, "r")`', desc: 'Returns a `FILE *` stream, or `NULL`' },
          { icon: 'circle-check', label: 'Check for NULL', desc: 'Missing file or no permission — report and stop' },
          { icon: 'file-lines', label: '`fgets(buf, sizeof buf, f)`', desc: 'Read one line, never more than the buffer holds' },
          { icon: 'gears', label: 'Process the line', desc: 'Parse, transform, accumulate' },
          { icon: 'arrows-rotate', label: 'Loop until NULL', desc: '`fgets` returns `NULL` at end of file or on error' },
          { icon: 'lock', label: '`fclose(f)`', desc: 'Flushes buffers and releases the descriptor — always' }
        ]
      },
      example: {
        title: 'Console and file I/O',
        items: [
          '**`printf("%s is %d years old\\n", name, age);`** — `%d` int, `%s` string, `%f` double, `%c` char, `%p` pointer',
          '**`printf("%.2f", price);`** — precision and width control formatting: `%.2f`, `%5d`, `%-10s`',
          '**`fprintf(stderr, "cannot open %s\\n", path);`** — errors belong on `stderr`, unbuffered and separately redirectable',
          '**`scanf("%d", &value);`** — needs the address; check the return value (how many items it converted)',
          '**`fgets(line, sizeof(line), stdin);`** — the safe way to read a line of input',
          '**`FILE *f = fopen("data.txt", "r");`** — returns `NULL` if it cannot be opened',
          '**`if (!f) { perror("data.txt"); return 1; }`** — `perror` prints the reason from `errno`',
          '**`fopen(path, "w")`** — truncates an existing file to zero bytes the moment it opens',
          '**`while (fgets(line, sizeof(line), f)) { ... }`** — the standard line-reading loop',
          '**`fwrite(&record, sizeof(record), 1, f);`** — binary: fast, compact, not portable across machines',
          '**`fread(&record, sizeof(record), 1, f);`** — reads it back; check the count it returns',
          '**`fclose(f);`** — flushes; without it, buffered writes can be lost entirely'
        ]
      },
      takeaways: [
        '**Format specifiers are unchecked promises.** A mismatch between `%d` and a `char *` is undefined behaviour, not a type error. `-Wall` catches most of these — let it.',
        '**`stdout` is for results, `stderr` is for problems.** That separation is what makes `./prog > out.txt` still show you errors, and it is why libraries never print diagnostics to `stdout`.',
        '**Check every `fopen`.** A `NULL` you did not test for becomes a segfault on the next line, with no indication that the file was the problem. `perror` tells you *why* it failed.',
        '**`"w"` truncates immediately, before you write anything.** Opening the wrong path in write mode destroys it — a mistake that has eaten a lot of data.',
        '**Never read into a buffer without a size.** `fgets(buf, sizeof buf, f)` is safe; `gets` was so unsafe it was removed from the C standard.',
        '**`fclose` flushes.** Output is buffered for speed, so a program that exits without closing may lose everything it "wrote".',
        '**Text is portable and inspectable; binary is fast and fragile.** A `fwrite`-ed struct depends on this machine\'s sizes, padding and byte order — fine for a cache, wrong for a file format.',
        '**Check what the read functions return, not just that they ran.** `scanf` returns how many items it converted; `fread` returns how many elements it got. Both silently do less than you asked.',
        '**Close in the reverse order you opened,** and make sure every error path closes too — the C equivalent of a `finally` block is discipline plus a single cleanup label with `goto`.'
      ],
      reflection: 'Write the loop that reads a file line by line and counts the lines. Now list every failure it must survive: file missing, no permission, a line longer than your buffer, a read error mid-file, and the disk being full when you write the result. Which of those does your first version actually handle?',
      checks: [
        'What are `stdin`, `stdout` and `stderr`, and why keep the last one separate?',
        'What happens if a `printf` specifier does not match its argument?',
        'Why must you check the result of `fopen`?',
        'What does opening a file with `"w"` do to existing content?',
        'Why is `fgets` preferred over `gets`?',
        'What can be lost if you forget `fclose`?',
        'When is a binary file format the wrong choice?'
      ]
    },
    {
      id: 'undefined-behaviour',
      title: 'Undefined Behaviour & Debugging',
      blurb: 'Why broken C sometimes works, what the compiler is allowed to assume, and the tools that find what review misses.',
      whatIs: {
        text: `Most languages define what happens when you make a mistake: an exception, an error, a documented result. C defines a category called **undefined behaviour (UB)** — reading past an array, using freed memory, dereferencing \`NULL\`, signed overflow, using an uninitialised variable — where the standard imposes *no requirements at all*. The program may crash, may produce garbage, may work perfectly, or may do something entirely unrelated.

This is not pedantry; it has practical consequences. The compiler is allowed to **assume undefined behaviour never happens** and to optimise on that basis. A null check after a dereference can be deleted, because if the pointer were null the earlier line would already have been undefined. That is why the same code behaves differently at \`-O0\` and \`-O2\`, and why "it works on my machine" is not evidence of correctness in C — only evidence that the corruption has not surfaced yet.

The consequence for how you work is that C demands **tooling instead of confidence**. Compile with \`-Wall -Wextra\` and treat warnings as errors. Run tests under **AddressSanitizer** (\`-fsanitize=address,undefined\`), which catches out-of-bounds accesses, use-after-free and overflow at the moment they happen, with a stack trace. Use **Valgrind** to find leaks and uninitialised reads. Use a **debugger** (\`gdb\`, \`lldb\`) to inspect state at a crash instead of guessing.

The habits that prevent the bugs are unglamorous and effective: initialise every variable at declaration, null every pointer after freeing, pass buffer sizes with buffers, prefer bounded functions (\`snprintf\` over \`sprintf\`), and keep allocation and release in the same layer of code so ownership is obvious.`,
        ensures: [
          'Recognise the common undefined behaviours and why they are not "errors"',
          'Understand that the compiler optimises assuming UB cannot occur',
          'Turn on and act on compiler warnings',
          'Run code under AddressSanitizer and Valgrind routinely',
          'Use a debugger to inspect a crash rather than guessing',
          'Apply the defensive habits that stop these bugs being written'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How a memory bug actually reaches you',
        loop: false,
        steps: [
          { icon: 'bug', label: 'Bad write', desc: 'One byte past the end of a buffer' },
          { icon: 'eye-slash', label: 'Nothing happens', desc: 'That byte belonged to something else; tests still pass' },
          { icon: 'clock', label: 'Time passes', desc: 'Corrupted data sits there until something reads it' },
          { icon: 'explosion', label: 'Failure elsewhere', desc: 'A crash or wrong result in unrelated code — the symptom, not the cause' },
          { icon: 'magnifying-glass', label: 'Sanitizer catches it', desc: '`-fsanitize=address` reports the original bad write with a stack trace' },
          { icon: 'wrench', label: 'Fix the real cause', desc: 'The bad write, not the code that happened to notice' }
        ]
      },
      example: {
        title: 'Undefined behaviour, and the tools that expose it',
        items: [
          '**`arr[n]` on `int arr[n]`** — one past the end; no error, just corruption of a neighbour',
          '**`free(p); *p = 1;`** — use-after-free: the classic exploited vulnerability',
          '**`int x; if (x > 0)`** — uninitialised read: `x` is whatever the stack held',
          '**`int y = INT_MAX + 1;`** — signed overflow is undefined; the compiler may assume it cannot happen',
          '**`char *s = "literal"; s[0] = \'X\';`** — string literals are read-only; this segfaults',
          '**`return &local;`** — the frame is gone; the caller gets an address to nothing',
          '**`gcc -Wall -Wextra -Werror`** — warnings become build failures, so they cannot be ignored',
          '**`gcc -fsanitize=address,undefined -g prog.c`** — catches bad accesses at run time with line numbers',
          '**`valgrind --leak-check=full ./prog`** — every leak, with the allocation stack that caused it',
          '**`gdb ./prog`** then **`run`**, **`bt`** — reproduce the crash, print the backtrace',
          '**`print var`** / **`break file.c:42`** in gdb — inspect state rather than adding `printf`s',
          '**`gcc -fanalyzer`** or **`clang --analyze`** — static analysis: finds some of these without running the program'
        ]
      },
      takeaways: [
        '**Undefined behaviour is not an error; it is the absence of any rule.** "It seemed to work" tells you nothing about whether the code is correct.',
        '**The compiler assumes UB never happens and optimises accordingly.** That is why an optimised build can behave differently — the code was already broken, the optimiser just stopped hiding it.',
        '**A crash is the best outcome, not the worst.** Silent corruption that surfaces days later, in unrelated code, is far more expensive — and is how vulnerabilities are born.',
        '**Warnings are findings.** `-Wall -Wextra -Werror` costs nothing and turns a large class of latent bugs into build failures.',
        '**Sanitizers should be on in every test run.** AddressSanitizer catches out-of-bounds, use-after-free and leaks at the exact instruction, with a stack trace, for a modest slowdown.',
        '**Valgrind and ASan complement each other:** ASan is fast and catches most memory errors; Valgrind needs no recompilation and finds uninitialised reads well.',
        '**Learn three debugger commands and you have most of the value:** `run`, `bt` (backtrace), `print`. That is faster than any number of added print statements.',
        '**Debug the cause, not the symptom.** The location of the crash is where corrupted state was *noticed*; the bug is wherever it was created.',
        '**Prevention is cheaper than detection:** initialise at declaration, null after free, always pass sizes with buffers, prefer `snprintf`, and keep allocation and freeing in the same layer.',
        '**Reproduce before you fix, and keep the reproduction as a test.** In a language with this much nondeterminism, "I think that fixed it" is not a conclusion.'
      ],
      reflection: 'Take a small program with a deliberate one-byte buffer overflow. Run it normally — it probably works. Now rebuild it with `-fsanitize=address`. Compare what each run tells you, and decide what that means for how you would test C code you were responsible for.',
      checks: [
        'What does "undefined behaviour" actually mean in the C standard?',
        'Why can a program behave differently at `-O0` and `-O2`?',
        'Why is a segfault a better outcome than silent corruption?',
        'What does AddressSanitizer catch that the compiler cannot?',
        'What does Valgrind tell you that a debugger does not?',
        'Why is the crash location usually not where the bug is?',
        'Name three habits that prevent memory bugs from being written at all.'
      ]
    }
  ]
}
