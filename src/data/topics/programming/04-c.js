export default {
  id: 'c',
  title: 'C',
  tone: 'c4',
  blurb: 'Compilation model, syntax, pointers, memory management, and systems programming.',
  tags: ['Language', 'Systems', 'Low-level', 'Compiled'],
  popups: [
    {
      id: 'compilation-model',
      title: 'Compilation Model',
      blurb: 'Preprocessor, compiler, linker — how C code becomes an executable.',
      whatIs: {
        text: 'C is compiled in stages: preprocessor expands macros, compiler turns code to object files, linker combines them into an executable.',
        ensures: [
          'Understand preprocessing: `#include`, `#define`',
          'Understand compilation: source to object files',
          'Understand linking: object files to executable',
          'Know how to use `gcc` with flags'
        ]
      },
      example: {
        title: 'Compiling C code',
        items: [
          '`gcc main.c -o program` — compile and link in one step',
          '`gcc -c main.c` — compile only, creates main.o',
          '`gcc main.o util.o -o program` — link object files',
          '`gcc -Wall -O2 main.c -o program` — warnings and optimization',
          '`#include <stdio.h>` — include standard library header',
          '`#define MAX 100` — macro, replaced at compile time'
        ]
      },
      who: ['Preprocessor', 'Compiler', 'Linker'],
      takeaways: [
        'C code must be compiled before it runs (unlike Python).',
        '`gcc` is the GNU C Compiler; `clang` is an alternative.',
        'Header files (.h) declare interfaces; .c files implement them.',
        'Object files (.o) are intermediate: compiled but not yet linked.',
        '`-Wall` enables warnings; `-O2` enables optimizations; `-g` enables debugging.'
      ],
      reflection: 'Why is compilation in three stages instead of one?',
      checks: [
        'What does the preprocessor do?',
        'What does the compiler do?',
        'What does the linker do?',
        'Why separate compilation and linking?'
      ]
    },
    {
      id: 'c-syntax',
      title: 'Syntax Basics',
      blurb: 'Types, variables, operators, structs, and the style of C code.',
      whatIs: {
        text: 'C is low-level and minimal. No classes, no garbage collection. You manage everything.',
        ensures: [
          'Declare variables with types',
          'Use primitive types: int, float, char',
          'Use arrays and pointers',
          'Define structs to group data',
          'Understand type casting'
        ]
      },
      example: {
        title: 'C syntax',
        items: [
          '`int x = 5;` — integer',
          '`float pi = 3.14;` — floating point',
          '`char c = "a";` — character',
          '`int arr[10];` — array of 10 ints',
          '`struct Point { int x; int y; };` — struct definition',
          '`Point p = {1, 2};` — struct instance (C99 syntax)',
          '`int *ptr;` — pointer to int'
        ]
      },
      who: ['You'],
      takeaways: [
        'C has no classes or objects — just data and functions.',
        'Structs group related data; use `typedef` for convenience.',
        'Arrays are fixed-size and stack-allocated.',
        'Strings are arrays of chars, null-terminated: `"hello\\0"`.',
        'No built-in strings like Python/Java — use `char*` or `char[]`.'
      ],
      reflection: 'How would you represent a person in C (name, age, email)?',
      checks: [
        'What is a struct?',
        'How do you create an array?',
        'What is null termination?',
        'What is `typedef`?'
      ]
    },
    {
      id: 'pointers',
      title: 'Pointers',
      blurb: 'Address-of, dereference, pointer arithmetic, and managing memory locations.',
      whatIs: {
        text: 'Pointers store memory addresses. Use `&` to get an address, `*` to access the value at that address.',
        ensures: [
          'Understand addresses in memory',
          'Use `&` (address-of) operator',
          'Use `*` (dereference) operator',
          'Understand pointer arithmetic',
          'Pass by reference'
        ]
      },
      example: {
        title: 'Pointers in C',
        items: [
          '`int x = 5;` — variable at some address',
          '`int *ptr = &x;` — pointer to x',
          '`printf("%d", *ptr);` — dereference: prints 5',
          '`int arr[5]; int *p = arr;` — pointer to first element',
          '`p = p + 1;` — pointer arithmetic: move to next element',
          '`*p = 10;` — change value at that address',
          '`void swap(int *a, int *b) { ... }` — pass by reference'
        ]
      },
      who: ['You'],
      takeaways: [
        'Pointers are addresses. A pointer `int *p` points to an `int`.',
        '`&x` gets the address of x; `*ptr` gets the value at that address.',
        'Pointer arithmetic: `ptr + 1` moves to the next element (size depends on type).',
        'Arrays decay to pointers when passed to functions.',
        'Null pointer: `NULL` or `(void*)0` — always check before dereferencing.'
      ],
      reflection: 'Why would you use pointers when they are harder than just using variables?',
      checks: [
        'What is a pointer?',
        'What does `&` do?',
        'What does `*` do?',
        'What is pointer arithmetic?',
        'Why pass by reference?'
      ]
    },
    {
      id: 'memory-management',
      title: 'Memory Management',
      blurb: 'Stack vs heap, `malloc`/`free`, memory leaks, and dynamic allocation.',
      whatIs: {
        text: 'Stack is automatic and fast; heap is manual and flexible. Use `malloc` to allocate, `free` to deallocate. Forgetting to free causes leaks.',
        ensures: [
          'Understand stack allocation (automatic)',
          'Understand heap allocation (manual)',
          'Use `malloc` and `free`',
          'Avoid memory leaks',
          'Use `sizeof` to get size'
        ]
      },
      example: {
        title: 'Memory management',
        items: [
          '`int x = 5;` — stack allocated, automatic',
          '`int *ptr = malloc(sizeof(int));` — heap allocated',
          '`*ptr = 10;` — use it',
          '`free(ptr);` — deallocate when done',
          '`int *arr = malloc(10 * sizeof(int));` — array on heap',
          '`ptr = NULL;` — best practice: null after free',
          '`int *ptr2 = ptr;` — both point to same memory; free once!'
        ]
      },
      who: ['You'],
      takeaways: [
        'Stack: fixed size, automatic, fast — use for locals.',
        'Heap: dynamic size, manual, fragmentation risk — use for variable-size data.',
        'Every `malloc` needs a `free` — or you leak memory.',
        'Double-free is a crash: keep track of who owns a pointer.',
        'Dangling pointers: freed memory that is still pointed to — causes crashes.'
      ],
      reflection: 'When would you use heap allocation instead of stack?',
      checks: [
        'What is the difference between stack and heap?',
        'When do you use `malloc`?',
        'When do you call `free`?',
        'What is a memory leak?',
        'What is a dangling pointer?'
      ]
    },
    {
      id: 'file-io',
      title: 'Structs & File I/O',
      blurb: 'Grouping data, `fopen`/`fread`/`fwrite`, and binary vs text modes.',
      whatIs: {
        text: 'Structs bundle data. File I/O lets you read and write files in different modes and formats.',
        ensures: [
          'Define and use structs',
          'Open files: `fopen`',
          'Read from files: `fread`, `fgets`',
          'Write to files: `fwrite`, `fprintf`',
          'Close files: `fclose`'
        ]
      },
      example: {
        title: 'Structs and file I/O',
        items: [
          '`typedef struct { int id; char name[50]; } Person;` — typedef struct',
          '`FILE *f = fopen("data.txt", "w");` — open for writing',
          '`fprintf(f, "Name: %s\\n", name);` — write text',
          '`fwrite(&p, sizeof(Person), 1, f);` — write binary struct',
          '`FILE *f = fopen("data.txt", "r");` — open for reading',
          '`fread(&p, sizeof(Person), 1, f);` — read binary struct',
          '`fclose(f);` — close file'
        ]
      },
      who: ['You'],
      takeaways: [
        '`typedef struct { ... } Name;` lets you use `Name` directly without `struct`.',
        'File modes: `"r"` (read), `"w"` (write), `"a"` (append), `"rb"` (read binary).',
        '`fprintf` is like `printf` but writes to a file.',
        '`fread`/`fwrite` copy binary data: fast for structs but not portable.',
        'Always `fclose` when done — or buffer contents might not be written.'
      ],
      reflection: 'How would you save and load a list of people to a file?',
      checks: [
        'What is a typedef?',
        'How do you open a file?',
        'What is the difference between text and binary modes?',
        'How do you read binary data?',
        'Why close files?'
      ]
    }
  ]
}
