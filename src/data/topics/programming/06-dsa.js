export default {
  id: 'dsa',
  title: 'DSA — Data Structures & Algorithms',
  tone: 'c6',
  blurb: 'Complexity, the core structures — arrays, lists, stacks, queues, hash tables, trees and graphs — and the algorithms built on them: traversal, shortest paths, sorting, searching and problem-solving strategies.',
  tags: ['Algorithms', 'Data Structures', 'Complexity', 'Problem solving'],
  popups: [
    {
      id: 'complexity',
      title: 'Complexity & Big-O',
      blurb: 'How cost grows with input size — the vocabulary behind every data structure choice you will make.',
      whatIs: {
        text: `Big-O describes how an algorithm's cost **grows as the input grows**. It deliberately ignores constants and hardware: an O(n) algorithm doing ten operations per element and one doing three are both O(n), because what matters is that doubling the input doubles the work. That abstraction is what lets you compare two approaches on a whiteboard, before either exists.

The growth classes worth knowing by feel are few. **O(1)** — cost does not depend on size at all (array index, hash lookup). **O(log n)** — each step halves the problem (binary search, balanced tree lookup); a million items take about twenty steps. **O(n)** — one pass. **O(n log n)** — the realistic best for comparison sorting. **O(n²)** — nested loops over the same data, fine at 100 items and hopeless at a million. **O(2ⁿ)** and **O(n!)** — only usable on tiny inputs.

Cost is not only time. **Space complexity** measures extra memory, and the trade between the two is a constant theme: a hash table buys O(1) lookup with memory, memoisation buys speed with a cache, an in-place sort saves memory and gives up stability.

Three cautions keep Big-O honest. It describes **asymptotic** behaviour, so for small n the constants dominate and the "worse" algorithm often wins. **Average and worst cases differ** — quicksort is O(n log n) typically and O(n²) at worst; a hash lookup is O(1) until every key collides. And Big-O says nothing about **memory locality**, which is why an array scan routinely beats a linked-list traversal with identical complexity.`,
        ensures: [
          'Read and write Big-O for common operations',
          'Recognise the standard growth classes and how they scale',
          'Distinguish best, average and worst case, and know which matters',
          'Reason about space complexity as well as time',
          'Spot accidental O(n²) — usually a loop hiding inside a loop',
          'Know when constants and cache behaviour outweigh the asymptotics'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'Growth classes, cheapest at the top',
        steps: [
          { icon: 'bolt', label: 'O(1) constant — array index, hash lookup' },
          { icon: 'scissors', label: 'O(log n) — binary search, balanced tree: ~20 steps for a million' },
          { icon: 'arrow-right-long', label: 'O(n) linear — one pass over the data' },
          { icon: 'layer-group', label: 'O(n log n) — the practical floor for comparison sorting' },
          { icon: 'table-cells', label: 'O(n²) quadratic — nested loops; unusable at large n' },
          { icon: 'explosion', label: 'O(2ⁿ) exponential — brute-force subsets; tiny inputs only' }
        ]
      },
      example: {
        title: 'Costs you should be able to state instantly',
        items: [
          '**Array index `a[i]`** — O(1); the address is arithmetic, not a search',
          '**Scanning a list for a value** — O(n); every element may need checking',
          '**Hash table get/put** — O(1) average, O(n) worst if everything collides',
          '**Binary search in a sorted array** — O(log n); each comparison halves what is left',
          '**Balanced binary search tree (BST) insert/search/delete** — O(log n); unbalanced degrades to O(n)',
          '**Merge sort** — O(n log n) time, O(n) extra space, stable',
          '**Quicksort** — O(n log n) average, O(n²) worst, O(log n) space, in-place',
          '**Nested loop over the same list** — O(n²): 1,000 items → a million comparisons',
          '**`for x in a: if x in b:`** — O(n·m) with a list, O(n) if `b` is a set: the classic easy fix',
          '**Building a string with `+` in a loop** — O(n²), because each step copies everything so far',
          '**Breadth-first search (BFS) / depth-first search (DFS) over a graph** — O(V + E): every vertex and edge once',
          '**Recursion depth** — costs stack space: O(n) for a linked-list-shaped recursion'
        ]
      },
      takeaways: [
        '**Big-O is about growth, not speed.** It predicts what happens when the input gets ten times bigger — which is the question that decides whether code survives production.',
        '**Learn the ladder by feel:** O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(2ⁿ). Knowing roughly where an approach sits is most of the value.',
        '**O(log n) is nearly free.** Halving each step means a million items take about twenty operations; this is why balanced trees and binary search matter so much.',
        '**O(n²) is fine until it is catastrophic.** It passes every test with a hundred rows and falls over the first time real data arrives.',
        '**Most accidental O(n²) is a linear search inside a loop.** Building a set or dict first turns it into O(n) — the highest-value optimisation in everyday code.',
        '**Know which case you are quoting.** Quicksort\'s worst case and a hash table\'s worst case are both O(n²)-ish, and both are avoided by details (pivot choice, good hashing) rather than by the headline figure.',
        '**Space matters too.** Memoisation, adjacency matrices and merge sort all buy time with memory; on large inputs that trade can be the binding constraint.',
        '**For small n, constants win.** Insertion sort beats quicksort on twenty elements, which is why real library sorts switch algorithms below a threshold.',
        '**Big-O ignores the cache.** Contiguous arrays beat pointer-chasing structures of the same complexity, often by an order of magnitude.',
        '**Measure before optimising.** Complexity tells you what to expect; a profiler tells you what is actually happening.'
      ],
      reflection: 'You have code that takes 2 seconds on 1,000 records. Estimate the run time on 100,000 records if it is O(n), O(n log n), or O(n²). Which of the three would you be comfortable deploying, and what would you measure to find out which one you have?',
      checks: [
        'What does Big-O actually describe?',
        'Why is O(log n) so much better than O(n) at large sizes?',
        'What usually causes accidental O(n²) in ordinary code?',
        'What is the difference between average and worst case for a hash table?',
        'What is space complexity, and when does it dominate?',
        'Why can an O(n²) algorithm beat an O(n log n) one?',
        'What does Big-O fail to capture about real hardware?'
      ]
    },
    {
      id: 'arrays-lists',
      title: 'Arrays & Linked Lists',
      blurb: 'Contiguous memory versus chained nodes — the trade-off underneath every other data structure.',
      whatIs: {
        text: `An **array** stores elements in one contiguous block of memory. Because every element is the same size, the address of element *i* is pure arithmetic — which is why indexing is O(1) no matter how large the array is. The cost is rigidity: inserting in the middle means shifting everything after it (O(n)), and growing means allocating a bigger block and copying.

A **dynamic array** (\`ArrayList\`, Python \`list\`, C++ \`vector\`) hides that by over-allocating and doubling when full. Copying on each doubling sounds expensive but averages out: appending is O(1) **amortised**. That is why the dynamic array is the default sequence in every language — and why inserting at the *front* of one is still O(n).

A **linked list** stores each element in a node that also holds a pointer to the next. Inserting or removing takes O(1) — once you are holding the right node — because only pointers change. But there is no index arithmetic: reaching element *i* means walking *i* nodes, so access is O(n).

In practice arrays win far more often than the complexity table suggests, because of the **cache**. Contiguous memory is prefetched in blocks, while linked nodes scatter across the heap and each hop is a potential cache miss. Linked lists earn their place when you hold a reference to the position already, when you need stable references while the structure changes, or as the internal machinery of queues, adjacency lists and hash-table buckets.`,
        ensures: [
          'Explain why array indexing is O(1) and list traversal is O(n)',
          'Understand dynamic arrays, doubling and amortised O(1) append',
          'Compare insertion and deletion costs at the front, middle and end',
          'Know when a linked list genuinely beats a dynamic array',
          'Recognise the cache effects that complexity notation hides',
          'Choose the right sequence type for a given access pattern'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Inserting into the middle: array vs linked list',
        loop: false,
        steps: [
          { icon: 'table-cells', label: 'Array: find the slot', desc: 'Index arithmetic — O(1)' },
          { icon: 'right-long', label: 'Shift everything after', desc: 'Each later element moves up one — O(n)' },
          { icon: 'square-plus', label: 'Write the new value', desc: 'Order preserved, memory still contiguous' },
          { icon: 'link', label: 'List: walk to the node', desc: 'No index arithmetic — O(n) hops to get there' },
          { icon: 'scissors', label: 'Repoint two pointers', desc: 'The insert itself is O(1) once you are holding the node' },
          { icon: 'memory', label: 'Cache reality', desc: 'The array scan is prefetched; each node hop can miss the cache' }
        ]
      },
      example: {
        title: 'Costs by operation',
        items: [
          '**Array read by index** — O(1); the address is base + i × size',
          '**Array append (dynamic array)** — O(1) amortised; occasionally O(n) when it doubles',
          '**Array insert at front** — O(n); every element shifts',
          '**Array delete from middle** — O(n); the gap must be closed',
          '**Array search (unsorted)** — O(n); sorted, O(log n) via binary search',
          '**Linked list read by index** — O(n); you must walk the chain',
          '**Linked list insert/delete at a held node** — O(1); only pointers change',
          '**Linked list insert at head** — O(1); the classic reason to use one',
          '**Doubly linked list** — O(1) removal from either end; extra pointer per node',
          '**Memory overhead** — an array holds values; each list node adds a pointer and allocation cost',
          '**Real-world:** `ArrayList` beats `LinkedList` for most Java code, including some inserts',
          '**Genuine list use:** least-recently-used (LRU) caches, adjacency lists, hash-bucket chains, queues built from a deque'
        ]
      },
      takeaways: [
        '**Array indexing is arithmetic, not searching.** That single property is why arrays underpin almost every other structure.',
        '**Dynamic arrays give amortised O(1) append.** Doubling means the copies are rare enough that the average cost per append stays constant.',
        '**Inserting at the front of an array is O(n)** — a loop that builds a list by prepending is quietly quadratic.',
        '**Linked lists trade indexing for splicing.** O(1) insert and delete, but only if you already hold the node; finding it is the O(n) part people forget.',
        '**The cache is the plot twist.** Contiguous memory is prefetched; scattered nodes are not. Equal complexity, very different real time.',
        '**Extra memory per node is not free either** — a pointer plus allocator overhead per element, versus a packed array of values.',
        '**Prefer the dynamic array by default.** Reach for a linked structure only when the access pattern genuinely rewards it.',
        '**Linked lists remain essential as building blocks** — hash-table chains, adjacency lists, deques, LRU caches — even where you would not use one directly.',
        '**Sorted arrays unlock binary search.** If reads dominate and writes are rare, keeping data sorted turns O(n) lookups into O(log n).'
      ],
      reflection: 'You need a structure that is appended to constantly, read by index often, and occasionally has an element removed from the middle. Which do you choose, and at what ratio of removals to reads would you reconsider?',
      checks: [
        'Why is array indexing O(1)?',
        'What does "amortised O(1)" mean for appending to a dynamic array?',
        'Why is inserting at the front of an array expensive?',
        'What is O(1) about a linked-list insertion, and what is not?',
        'Why does an array often outperform a linked list of the same complexity?',
        'When is a linked list genuinely the right choice?',
        'What does keeping an array sorted buy you?'
      ]
    },
    {
      id: 'stacks-queues',
      title: 'Stacks & Queues',
      blurb: 'Two disciplines for "what do I process next" — last in first out, and first in first out.',
      whatIs: {
        text: `Stacks and queues are not really about storage; they are about **processing order**. Both restrict where you may add and remove, and that restriction is what makes them useful — the structure enforces the discipline so your code does not have to.

A **stack** is last in, first out (LIFO): push adds to the top, pop removes from the top, peek looks without removing. All are O(1). Stacks appear wherever work must be unwound in reverse: the **call stack** that lets functions return to their callers, undo history, matching brackets, backtracking search, and depth-first traversal. Anything expressed recursively can be rewritten with an explicit stack — the recursion *is* a stack, provided by the language.

A **queue** is first in, first out (FIFO): enqueue at the rear, dequeue at the front, both O(1) with the right implementation. Queues appear wherever fairness or arrival order matters: task and print queues, message buses, request buffers, and breadth-first traversal. The breadth-first search (BFS) and depth-first search (DFS) pairing is the clearest illustration of the difference — identical algorithms, one with a queue and one with a stack, producing level-by-level exploration versus dive-deep-first.

Two practical variants complete the set. A **deque** (double-ended queue) allows push and pop at both ends and is the usual way to implement both — Java's \`ArrayDeque\`, Python's \`collections.deque\`. A **priority queue** dequeues by priority rather than arrival, usually implemented as a heap with O(log n) insert and remove; it powers scheduling, Dijkstra's algorithm and "top k" problems.`,
        ensures: [
          'Use stack operations (push, pop, peek) and know they are O(1)',
          'Use queue operations (enqueue, dequeue) and their costs',
          'Match a problem to LIFO or FIFO ordering',
          'Connect the call stack to recursion and stack overflow',
          'Know what a deque and a priority queue add',
          'Convert a recursive algorithm into an explicit-stack loop'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A stack unwinding (LIFO)',
        loop: false,
        steps: [
          { icon: 'square-plus', label: 'push(A)', desc: 'Stack: [A] — A is on top' },
          { icon: 'square-plus', label: 'push(B)', desc: 'Stack: [A, B] — B is on top' },
          { icon: 'square-plus', label: 'push(C)', desc: 'Stack: [A, B, C]' },
          { icon: 'square-minus', label: 'pop() → C', desc: 'Last in, first out — C leaves first' },
          { icon: 'square-minus', label: 'pop() → B', desc: 'Stack: [A]; a queue would have returned A both times' }
        ]
      },
      example: {
        title: 'Where each one shows up',
        items: [
          '**Stack — call stack:** each call pushes a frame, each return pops one',
          '**Stack — undo/redo:** the last action is the first to be reversed',
          '**Stack — bracket matching:** push openers, pop on closers; a mismatch or leftover means invalid',
          '**Stack — DFS:** push neighbours, always explore the most recently discovered node',
          '**Stack — backtracking:** push a choice, explore, pop to try the next branch',
          '**Queue — print/task queue:** jobs are served in arrival order, which is what "fair" means here',
          '**Queue — BFS:** explores level by level, giving the shortest path in an unweighted graph',
          '**Queue — buffering:** producers enqueue, consumers dequeue, neither waits on the other',
          '**Deque:** push and pop at both ends — use it for stacks and queues alike',
          '**Priority queue (heap):** O(log n) insert and extract-min; scheduling, Dijkstra, top-k',
          '**Stack overflow:** recursion with no reachable base case, filling the call stack',
          '**Iterative rewrite:** replace deep recursion with your own explicit stack when depth is a risk'
        ]
      },
      takeaways: [
        '**A stack is LIFO, a queue is FIFO** — and the restriction is the feature, not a limitation.',
        '**All core operations are O(1)** on both, with a suitable implementation. Never implement a queue by removing from the front of an array — that is O(n) per dequeue.',
        '**Recursion is a stack you did not have to write.** Every call pushes a frame; that is why deep recursion overflows and why any recursion can be made iterative.',
        '**DFS and BFS are the same algorithm with a different container.** Swap the stack for a queue and depth-first becomes breadth-first.',
        '**BFS finds the shortest path in an unweighted graph** precisely because it explores in order of distance; DFS gives no such guarantee.',
        '**Use a deque as the default implementation** for both stacks and queues — it does either end in O(1).',
        '**A priority queue orders by importance, not arrival.** Backed by a heap: O(log n) insert and extract, O(1) peek at the best element.',
        '**Bracket matching is the canonical stack exercise** because it captures the essence: things must close in the reverse order they opened.',
        '**Choosing the structure often solves the problem.** "Which should I process next?" answered honestly usually names the data structure outright.'
      ],
      reflection: 'A web browser has a back button and a queue of pages to prefetch. Which structure serves which, and what changes about the user experience if you accidentally swap them?',
      checks: [
        'What do LIFO and FIFO mean, and which is a stack?',
        'What are the costs of push, pop, enqueue and dequeue?',
        'How does the call stack relate to recursion?',
        'What single change turns DFS into BFS?',
        'Why does BFS find the shortest path in an unweighted graph?',
        'What does a priority queue do differently, and at what cost?',
        'When would you replace recursion with an explicit stack?'
      ]
    },
    {
      id: 'hashing',
      title: 'Hashing & Hash Tables',
      blurb: 'Turning a key into an address — how O(1) lookup actually works, and what breaks it.',
      whatIs: {
        text: `A hash table gets constant-time lookup by **computing where data should live** instead of searching for it. A hash function turns a key into an integer; that integer is reduced (typically modulo the table size) to a bucket index; the entry is stored there. Reading back repeats the calculation and goes straight to the bucket. No scanning is involved — that is the whole trick.

Because the space of keys is far larger than the number of buckets, **collisions are inevitable**. Two strategies handle them. **Chaining** keeps a small list (or tree) in each bucket and searches within it. **Open addressing** probes for the next free slot by a fixed rule. Either way, lookups stay near O(1) as long as buckets are short — which is what the **load factor** (entries ÷ buckets) controls. Past roughly 0.75, the table **resizes**: allocate a bigger array and rehash everything, an O(n) operation that is rare enough to amortise away.

A good hash function is **deterministic**, **fast**, and **spreads keys uniformly**. Uniformity is what keeps buckets short; a poor hash that maps many keys to one bucket degrades the table to a linked list and every operation to O(n). That is not just a performance issue — deliberately colliding keys is a real denial-of-service technique, which is why languages randomise string hashing.

The contract that catches people out is between hashing and equality: **equal objects must produce equal hashes**. Hash tables locate by hash first and compare by equality second, so an object whose \`equals\` was customised without \`hashCode\` gets stored in one bucket and looked for in another — it goes in and never comes back. And using a **mutable object as a key** breaks the same way: change a field, the hash changes, the entry is stranded.`,
        ensures: [
          'Explain how a key becomes a bucket index',
          'Describe chaining and open addressing for collisions',
          'Understand load factor, resizing and amortised cost',
          'State what makes a hash function good — and what a bad one costs',
          'Honour the equals/hashCode contract',
          'Know why hash tables give no ordering and why keys must be immutable'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From key to stored value',
        loop: false,
        steps: [
          { icon: 'key', label: 'The key', desc: '`"alice"`' },
          { icon: 'calculator', label: 'Hash function', desc: 'Deterministic integer, e.g. 3,209,481' },
          { icon: 'table-cells', label: 'Reduce to a bucket', desc: 'hash % capacity → index 7' },
          { icon: 'box-archive', label: 'Store in the bucket', desc: 'Usually empty — done in constant time' },
          { icon: 'link', label: 'Collision? chain or probe', desc: 'Compare with `equals` to update rather than duplicate' },
          { icon: 'arrows-rotate', label: 'Load factor exceeded', desc: 'Allocate a larger table and rehash everything — O(n), but rare' }
        ]
      },
      example: {
        title: 'Hash tables in practice',
        items: [
          '**`map.put("alice", 30)`** — hash "alice", find the bucket, store the pair',
          '**`map.get("alice")`** — same hash, same bucket, one comparison: O(1) average',
          '**Collision:** `"alice"` and `"bob"` land in bucket 7 — both stored there, compared on read',
          '**Chaining:** the bucket holds a short list; Java converts long chains to a tree to bound the worst case',
          '**Open addressing:** on collision, probe the next slot by a fixed rule; no per-entry lists',
          '**Load factor 0.75** — the usual resize trigger; below it, chains stay short',
          '**Resize** — capacity doubles and every entry is rehashed: O(n), amortised across many inserts',
          '**Bad hash function** — everything in one bucket; lookups degrade to O(n)',
          '**Sets are hash tables without values** — `contains` is O(1) versus O(n) on a list',
          '**Counting idiom:** a map from item to count is the standard tally, in every language',
          '**Mutable key bug:** put an object in a map, change a hashed field, and it is unreachable',
          '**No ordering** — iteration order is unspecified (or insertion order at best); sort explicitly if you need it'
        ]
      },
      takeaways: [
        '**Hashing computes a location instead of searching for one.** That is why lookup does not grow with size.',
        '**Collisions are normal, not exceptional.** The design question is never "how do I avoid them" but "how cheaply do I resolve them".',
        '**Load factor controls performance.** Keep buckets short and operations stay O(1); let the table fill and everything degrades.',
        '**Resizing is O(n) but amortised.** Pre-sizing a map you know will be large avoids repeated rehashing on a hot path.',
        '**A poor hash function silently destroys the structure** — the map still works, it is just linear now. Uniform distribution is the whole requirement.',
        '**Equal objects must have equal hash codes.** Break this and objects vanish into maps and sets: stored under one hash, sought under another.',
        '**Keys should be immutable.** A key whose hash changes after insertion is unreachable — the map is not wrong, the key moved.',
        '**Hash tables give no ordering.** If you need sorted keys, use a tree map (O(log n)); if you need insertion order, use the ordered variant.',
        '**Worst case is O(n)** — all keys colliding. Rare by accident, achievable on purpose, which is why modern runtimes randomise string hashes.',
        '**"Use a set/dict" is the most common good answer** to a performance problem in application code: it turns repeated O(n) scans into O(1) lookups.'
      ],
      reflection: 'You store `Point` objects as map keys, then mutate a point\'s `x` after inserting it. The map still reports a size of one, but `get` returns nothing and iteration shows the entry. Explain exactly where the lookup goes wrong — and what the fix says about designing keys.',
      checks: [
        'How does a hash table turn a key into a location?',
        'What is a collision, and what are the two ways to resolve one?',
        'What is the load factor, and what happens when it is exceeded?',
        'What makes a hash function good?',
        'What breaks if two equal objects have different hash codes?',
        'Why must hash keys be immutable?',
        'When is a hash table the wrong choice?'
      ]
    },
    {
      id: 'trees',
      title: 'Trees & Traversal',
      blurb: 'Hierarchies, recursion, and the three orders in which you can visit every node.',
      whatIs: {
        text: `A **tree** is a connected structure with no cycles and one distinguished **root**. Every other node has exactly one parent and any number of children; nodes with no children are **leaves**. The **height** is the longest root-to-leaf path, and it is the number that governs performance for every tree algorithm.

Trees model hierarchy, which is everywhere: file systems, a web page's Document Object Model (DOM), JavaScript Object Notation (JSON) and Extensible Markup Language (XML) documents, organisation charts, expression trees inside a compiler, decision trees. A **binary tree** restricts each node to at most two children and is the shape most algorithms are written for.

Trees and **recursion** fit together perfectly, because a tree is defined recursively: a node plus its subtrees, which are themselves trees. Almost every tree algorithm is the same three lines — handle the empty case, recurse into the children, combine the results. Once you see \`if node is None: return\` as the base case and "the subtrees are just smaller trees" as the recursive step, most tree problems become mechanical.

Traversal is choosing **when to process a node relative to its children**. **Pre-order** (node, left, right) visits a parent before its children — right for copying a tree or printing a hierarchy. **In-order** (left, node, right) on a binary search tree yields the elements in sorted order. **Post-order** (left, right, node) visits children first — right for deleting a tree or evaluating an expression, where the parts must be resolved before the whole. Those are all depth-first; a **level-order** traversal uses a queue and visits by depth instead.`,
        ensures: [
          'Use tree terminology precisely: root, parent, child, leaf, height, subtree',
          'Write recursive tree algorithms with a clear base case',
          'Implement pre-order, in-order and post-order traversal',
          'Choose a traversal to match the task',
          'Do a level-order traversal with a queue',
          'Connect tree height to the cost of tree operations'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Recursive in-order traversal of a node',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'Is the node empty?', desc: 'Base case: return immediately — this is what stops the recursion' },
          { icon: 'arrow-left', label: 'Recurse left', desc: 'Traverse the entire left subtree first' },
          { icon: 'eye', label: 'Visit this node', desc: 'Process it — for a binary search tree (BST), values arrive in sorted order' },
          { icon: 'arrow-right', label: 'Recurse right', desc: 'Traverse the entire right subtree' },
          { icon: 'arrow-up', label: 'Return to the parent', desc: 'Each frame resumes where it left off — the call stack remembers' }
        ]
      },
      example: {
        title: 'Trees and their traversals',
        items: [
          '**File system:** directories are internal nodes, files are leaves',
          '**The DOM:** a HyperText Markup Language (HTML) page is a tree; Cascading Style Sheets (CSS) selectors are queries over it',
          '**Expression tree:** `(2 + 3) * 4` — operators are internal nodes, numbers are leaves',
          '**Height** — the longest root-to-leaf path; it bounds the cost of every operation',
          '**Base case:** `if node is None: return` — every recursive tree function needs one',
          '**Pre-order (node, L, R):** copying a tree, printing an indented hierarchy',
          '**In-order (L, node, R):** on a BST, produces the values in ascending order',
          '**Post-order (L, R, node):** freeing a tree, evaluating an expression bottom-up',
          '**Level-order:** a queue, not recursion — visits every node at depth 1, then depth 2',
          '**Height of a node:** `1 + max(height(left), height(right))` — the recursion writes itself',
          '**Balanced tree:** height ≈ log₂ n, so a million nodes are about twenty levels deep',
          '**Degenerate tree:** every node has one child — a linked list wearing a tree\'s syntax'
        ]
      },
      takeaways: [
        '**A tree is a recursive definition,** so recursive solutions are the natural ones: base case for empty, recurse into subtrees, combine.',
        '**Height governs cost.** Almost every tree operation is O(height), which is O(log n) when balanced and O(n) when not.',
        '**Traversal order is about when the parent is processed** relative to its children — that single choice is the whole difference between the three orders.',
        '**In-order on a BST gives sorted output.** It is the property that makes search trees useful for ranges and ordered iteration.',
        '**Post-order is for anything requiring children first** — deletion, evaluation, computing sizes and heights bottom-up.',
        '**Level-order needs a queue,** not recursion. If a problem mentions "levels", "depth" or "closest", think breadth-first search (BFS).',
        '**Recursion uses stack space proportional to height.** On a deep or degenerate tree that means stack overflow — an explicit stack or an iterative form is the fix.',
        '**A degenerate tree is a linked list.** Without balancing, inserting sorted data produces exactly that, and every O(log n) claim becomes O(n).',
        '**Draw the tree before writing the code.** Three or four nodes on paper resolves most confusion about which subtree goes where.'
      ],
      reflection: 'Write, in words, the recursive rule for counting leaves in a binary tree. What is the base case, what is the recursive case, and how does it combine the two subtree results? Now do the same for tree height and notice how similar they are.',
      checks: [
        'What makes a structure a tree rather than a graph?',
        'What is the height of a tree, and why does it matter?',
        'Why do tree algorithms suit recursion so well?',
        'What is the difference between pre-order, in-order and post-order?',
        'Which traversal gives sorted output from a BST?',
        'How does a level-order traversal differ mechanically?',
        'What is a degenerate tree, and what does it cost you?'
      ]
    },
    {
      id: 'search-trees',
      title: 'Binary Search Trees & Balancing',
      blurb: 'Keeping data ordered so lookups halve the problem each step — and what happens when the tree tilts.',
      whatIs: {
        text: `A **binary search tree (BST)** maintains one invariant: for every node, everything in its left subtree is smaller and everything in its right subtree is larger. That single rule makes searching a matter of comparison — go left or right, discarding half the remaining tree at each step — so lookup, insertion and deletion are all **O(height)**.

Which means the whole story is height. On a balanced tree, height is about log₂ n: a million entries are found in roughly twenty comparisons. But a BST built by inserting **already-sorted data** puts every node down one side, producing a degenerate tree with height n and O(n) operations. The invariant is intact; the performance is gone. This is not an edge case — importing sorted records is exactly how it happens in practice.

**Self-balancing** trees fix this by restructuring as they go. **AVL trees** (named after their inventors, Adelson-Velsky and Landis) keep the subtree heights within one of each other by rotating after insertions and deletions, giving strictly O(log n) at the cost of more rotations. **Red-black** trees allow slightly looser balance with cheaper maintenance, which is why they back \`TreeMap\` and \`std::map\`. **B-trees** widen each node to hold many keys so a single disk or page read covers a lot of ground — the reason essentially every database index is one.

The obvious question is why use a tree at all when hash tables are O(1). The answer is **order**. A hash table cannot tell you the smallest key, iterate in sorted order, or answer "everything between March and June" without scanning everything. A search tree does all of them naturally, and that is what you are buying with the extra log n.`,
        ensures: [
          'State the BST invariant and use it to search',
          'Insert into and delete from a BST, including the two-children case',
          'Explain how sorted input degenerates a BST',
          'Describe what self-balancing trees do and why rotations exist',
          'Choose between a hash table and a search tree deliberately',
          'Connect B-trees to database and file-system indexes'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Searching for 7 in a BST rooted at 10',
        loop: false,
        steps: [
          { icon: 'circle-dot', label: 'Start at the root', desc: 'Compare 7 with 10' },
          { icon: 'arrow-left', label: '7 < 10 → go left', desc: 'The entire right subtree is discarded in one comparison' },
          { icon: 'circle-dot', label: 'At node 5', desc: 'Compare 7 with 5' },
          { icon: 'arrow-right', label: '7 > 5 → go right', desc: 'Half of what remains is discarded again' },
          { icon: 'circle-check', label: 'Found 7', desc: 'Two comparisons — O(height), which is O(log n) when balanced' },
          { icon: 'triangle-exclamation', label: 'Or hit a null', desc: 'Absent — and the null you reached is exactly where an insert would go' }
        ]
      },
      example: {
        title: 'Building, searching and balancing',
        items: [
          '**Invariant:** left subtree < node < right subtree, at every node without exception',
          '**Search:** compare, go left or right, repeat — O(height)',
          '**Insert:** search until you reach a null; that position is where the new node belongs',
          '**Delete a leaf** — simply remove it',
          '**Delete a node with one child** — splice the child into its place',
          '**Delete a node with two children** — replace it with its in-order successor, then delete that',
          '**In-order traversal** — yields every key in ascending order, for free',
          '**Sorted insertion (1,2,3,4,5)** — produces a degenerate right spine: height n, O(n) search',
          '**AVL tree** — strict balance via rotations; fastest lookups, more rebalancing work',
          '**Red-black tree** — looser balance, cheaper updates; backs `TreeMap` and `std::map`',
          '**B-tree** — many keys per node to minimise disk reads; every database index is one',
          '**Range query "all keys between 20 and 40"** — natural in a BST, impossible in a hash table without a full scan'
        ]
      },
      takeaways: [
        '**The BST invariant turns search into comparison.** Each step discards half the tree, which is where O(log n) comes from.',
        '**Performance is height, not node count.** A balanced million-node tree is twenty levels deep; a degenerate one is a million.',
        '**Sorted input is the classic disaster.** Inserting ordered data into a plain BST produces a linked list — and sorted input is extremely common.',
        '**Self-balancing trees restructure as they update.** Rotations keep the height logarithmic so the guarantee survives any insertion order.',
        '**Use the library implementation.** `TreeMap`, `std::map`, `SortedDict` — hand-rolled balancing is worth studying and rarely worth shipping.',
        '**Deletion is the hard case,** specifically a node with two children: replace it with its in-order successor, which is the smallest key in its right subtree.',
        '**Trees give order; hash tables give speed.** Min, max, sorted iteration, ranges, predecessor and successor are all tree strengths and hash-table weaknesses.',
        '**B-trees exist because of storage costs.** Wide nodes mean fewer page reads, which is why databases and file systems use them rather than binary trees.',
        '**If you never need order, use a hash table.** O(1) beats O(log n), and most lookup-only workloads genuinely do not care about ordering.'
      ],
      reflection: 'You import 100,000 already-sorted customer ids into a plain BST and searches become slow. Explain what the tree looks like, why the invariant is not violated, and give two different fixes — one that changes the structure and one that changes the input.',
      checks: [
        'What is the BST invariant?',
        'Why is search O(height) rather than O(n)?',
        'What happens when you insert sorted data into a plain BST?',
        'How do you delete a node with two children?',
        'What do self-balancing trees do differently?',
        'When is a search tree better than a hash table?',
        'Why do databases use B-trees rather than binary search trees?'
      ]
    },
    {
      id: 'graphs',
      title: 'Graphs & Traversal',
      blurb: 'Nodes and the connections between them — representation, breadth-first and depth-first search, and the problems they solve.',
      whatIs: {
        text: `A **graph** is vertices connected by edges, with none of a tree's restrictions: cycles are allowed, there is no root, and a vertex may have any number of connections. Edges can be **directed** (a follows b, but not necessarily the reverse) or **undirected**, and **weighted** (distance, cost, capacity) or not. Almost anything relational is a graph: social networks, road maps, dependency and build graphs, web links, state machines, network topology.

There are two standard representations. An **adjacency list** stores, for each vertex, a collection of its neighbours — O(V + E) space, and the right choice for the sparse graphs that occur in practice. An **adjacency matrix** is a V×V grid where cell (i, j) records the edge — O(V²) space regardless of how few edges exist, but O(1) to answer "is there an edge between these two?" Sparse graphs get a list; dense graphs or heavy edge-existence queries get a matrix.

Traversal is the foundation of nearly every graph algorithm, and the two forms differ only in the container. **Breadth-first search (BFS)** uses a queue and explores in rings of increasing distance, which is why it finds the **shortest path in an unweighted graph**. **Depth-first search (DFS)** uses a stack (or recursion) and follows one path as far as it goes before backtracking, which suits cycle detection, topological sorting and connectivity. Both are O(V + E).

The one thing you must not forget is the **visited set**. A graph can have cycles, so a traversal that does not record where it has been will loop forever. That single line is the difference between a graph algorithm and a hang. Beyond traversal, the classics build on the same ideas: Dijkstra for shortest paths with weights, topological sort for ordering dependencies, union-find for connectivity.`,
        ensures: [
          'Describe a graph as vertices and edges, directed or not, weighted or not',
          'Choose between adjacency list and adjacency matrix',
          'Implement BFS with a queue and DFS with a stack or recursion',
          'Always track visited vertices and explain why',
          'Know which problems each traversal solves',
          'Recognise when a problem is a graph problem at all'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Breadth-first search',
        loop: false,
        steps: [
          { icon: 'circle-dot', label: 'Enqueue the start', desc: 'Mark it visited immediately — before it is ever dequeued' },
          { icon: 'arrow-down', label: 'Dequeue a vertex', desc: 'The oldest one waiting: the closest still unexplored' },
          { icon: 'share-nodes', label: 'Inspect its neighbours', desc: 'Every vertex reachable in one more step' },
          { icon: 'circle-check', label: 'Enqueue the unvisited', desc: 'Mark as visited on enqueue, or they enter the queue twice' },
          { icon: 'arrows-rotate', label: 'Repeat', desc: 'The queue empties in order of distance from the start' },
          { icon: 'flag-checkered', label: 'Queue empty', desc: 'Everything reachable has been visited — O(V + E) overall' }
        ]
      },
      example: {
        title: 'Graphs, representations and algorithms',
        items: [
          '**Social network:** vertices are people, edges are friendships — undirected',
          '**Twitter-style follows:** directed edges; A follows B says nothing about B',
          '**Road map:** weighted edges holding distance or travel time',
          '**Build dependencies:** a directed acyclic graph — a cycle here means an impossible build',
          '**Adjacency list:** `{A: [B, C], B: [C]}` — O(V + E) space, best for sparse graphs',
          '**Adjacency matrix:** `m[i][j] = 1` — O(V²) space, O(1) edge lookup, good when dense',
          '**BFS (queue):** shortest path in an unweighted graph, level-by-level exploration',
          '**DFS (stack/recursion):** cycle detection, topological sort, connected components',
          '**Visited set:** without it, any cycle makes the traversal loop forever',
          '**Dijkstra:** BFS generalised with a priority queue for weighted shortest paths',
          '**Topological sort:** an order in which dependencies come before dependants',
          '**Both traversals are O(V + E)** — each vertex and each edge considered once'
        ]
      },
      takeaways: [
        '**A graph is the general case; a tree is a graph with restrictions.** Cycles and multiple parents are exactly what the extra generality costs you.',
        '**Adjacency lists for sparse graphs, matrices for dense ones.** Real-world graphs are overwhelmingly sparse, so the list is the usual default.',
        '**BFS and DFS differ only in the container** — queue versus stack. Everything else about the code is identical.',
        '**BFS gives the shortest path when edges are unweighted,** because it reaches every vertex in order of distance. DFS offers no such guarantee.',
        '**DFS is the natural fit for structure questions:** is there a cycle, what are the components, in what order can these dependencies run?',
        '**The visited set is not optional.** Without it a cycle turns a traversal into an infinite loop — the most common graph bug there is.',
        '**Mark visited when enqueuing, not when dequeuing.** Otherwise a vertex reachable by two paths enters the queue twice.',
        '**Weights change the algorithm.** BFS is wrong for weighted graphs; Dijkstra replaces the queue with a priority queue to handle them.',
        '**Directed acyclic graphs deserve their own recognition:** dependencies, build order, schedules. Topological sort is the tool, and a cycle means the requirement is contradictory.',
        '**Recognising a graph problem is most of the work.** "Things connected to other things, and a question about reachability or distance" is the tell.'
      ],
      reflection: 'You are asked for the fewest introductions needed to connect two people in a social network. Which traversal answers that, what does the queue actually contain as it runs, and what changes if each introduction has a different cost?',
      checks: [
        'What is the difference between a graph and a tree?',
        'When would you choose an adjacency matrix over a list?',
        'What single change turns BFS into DFS?',
        'Why does BFS find shortest paths in an unweighted graph?',
        'What happens if you omit the visited set?',
        'What kinds of problem is DFS best suited to?',
        'What is a topological sort, and what does a cycle mean for one?'
      ]
    },
    {
      id: 'graph-algorithms',
      title: 'Shortest Paths & Graph Algorithms',
      blurb: 'Dijkstra, Bellman-Ford, A*, topological sort, union-find and minimum spanning trees — the classics built on top of traversal.',
      whatIs: {
        text: `Breadth-first search (BFS) finds the shortest path only when every edge costs the same. Add weights — distance, latency, price — and the fewest-hops route stops being the cheapest one. **Dijkstra's algorithm** is the fix: keep a tentative distance for every vertex, repeatedly take the unvisited vertex with the smallest known distance from a priority queue, and **relax** its edges (if going via this vertex is cheaper than the best route found so far, record the improvement). With a binary heap that is O((V + E) log V).

Dijkstra is greedy, and its guarantee depends on one condition: **no negative edge weights**. Once an edge can reduce a total, "the closest unvisited vertex is final" stops being true. **Bellman-Ford** handles negatives by relaxing every edge V − 1 times — slower at O(V·E), but it also *detects* negative cycles, which is why it appears in currency arbitrage and routing protocols. **A-star search** (written A*) is Dijkstra plus a heuristic estimate of the remaining distance; given an admissible heuristic (one that never overestimates) it finds the same optimal path while exploring far less of the map, which is what game and route-finding engines use. For all-pairs distances on a small dense graph, **Floyd-Warshall** is three nested loops and O(V³).

Two more classics come up constantly. A **topological sort** puts the vertices of a directed acyclic graph (DAG) in an order where every dependency comes before whatever depends on it — build systems, task schedulers, module loading, spreadsheet recalculation. Kahn's algorithm repeatedly takes a vertex with no remaining incoming edges; if it stops before covering every vertex, the graph had a cycle, which means the dependencies are contradictory.

**Union-find** (also called disjoint-set union, DSU) answers "are these two things in the same group?" and "merge these two groups" in near-constant amortised time, using path compression and union by size. It is the engine behind **Kruskal's algorithm** for a **minimum spanning tree (MST)**: sort the edges by weight and add each one that would not create a cycle. **Prim's algorithm** builds the same tree by growing outwards from one vertex with a priority queue. Minimum spanning trees answer "connect everything for the least total cost" — cabling, clustering, network design.`,
        ensures: [
          'Explain why BFS is not enough once edges have weights',
          'Run Dijkstra with a priority queue and describe edge relaxation',
          'Know Dijkstra\'s non-negative-weight restriction and what to use instead',
          'Use a topological sort for dependency ordering, and detect cycles',
          'Understand union-find and its role in Kruskal\'s algorithm',
          'Recognise which classic algorithm a real problem is asking for'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Dijkstra: one round of relaxation',
        loop: false,
        steps: [
          { icon: 'circle-dot', label: 'Initialise', desc: 'Start = 0, every other vertex = infinity, all pushed to a priority queue' },
          { icon: 'arrow-down', label: 'Take the cheapest', desc: 'Pop the unvisited vertex with the smallest tentative distance' },
          { icon: 'share-nodes', label: 'Look at its edges', desc: 'For each neighbour, cost = distance to here + edge weight' },
          { icon: 'pen', label: 'Relax if better', desc: 'Cheaper than the neighbour\'s current best? Update it and record the predecessor' },
          { icon: 'lock', label: 'Settle the vertex', desc: 'Its distance is now final — true only because no weight is negative' },
          { icon: 'flag-checkered', label: 'Repeat until empty', desc: 'Follow the predecessors backwards to reconstruct the actual route' }
        ]
      },
      example: {
        title: 'Which algorithm for which question',
        items: [
          '**"Fewest hops?"** — BFS; every edge counts the same, so no weights are involved',
          '**"Cheapest route?"** — Dijkstra with a priority queue: O((V + E) log V)',
          '**Relaxation:** `if dist[u] + weight(u,v) < dist[v]: dist[v] = dist[u] + weight(u,v)` — the whole idea in one line',
          '**Reconstructing the path:** store a predecessor per vertex and walk backwards from the destination',
          '**Negative weights** — Dijkstra is simply wrong; use Bellman-Ford, O(V·E)',
          '**Negative cycle detection** — a Bellman-Ford edge still improving after V − 1 rounds means one exists',
          '**A-star search** — Dijkstra plus an admissible heuristic; the same optimal answer, far less explored',
          '**All-pairs on a small dense graph** — Floyd-Warshall, three nested loops, O(V³)',
          '**Dependency order** — topological sort over a directed acyclic graph (DAG): build order, task scheduling',
          '**Kahn\'s algorithm** — repeatedly take a vertex with in-degree zero; leftovers at the end mean a cycle',
          '**Union-find (DSU)** — "same group?" and "merge groups" in near-constant amortised time',
          '**Kruskal:** sort edges, add any that does not close a cycle (union-find decides) → minimum spanning tree',
          '**Prim:** grow the same tree outward from one vertex using a priority queue',
          '**Cycle detection** — depth-first search (DFS) with a recursion stack for directed graphs, union-find for undirected'
        ]
      },
      takeaways: [
        '**Weights are the dividing line.** Unweighted shortest path is BFS; weighted shortest path is Dijkstra. Using BFS on a weighted graph gives a confidently wrong answer.',
        '**Relaxation is the core idea of every shortest-path algorithm:** "is going via this vertex cheaper than the best I know?" Dijkstra, Bellman-Ford and A* differ only in the order they ask it.',
        '**Dijkstra requires non-negative weights.** Its greedy step assumes a settled vertex can never be improved, which a negative edge breaks.',
        '**Bellman-Ford is the slower, more general tool** — it handles negative weights and, uniquely, reports negative cycles.',
        '**A-star is Dijkstra with a hint.** The heuristic must never overestimate the remaining distance; if it does, the result stops being optimal.',
        '**Store predecessors, not just distances.** Otherwise you learn how far the destination is and nothing about how to get there.',
        '**A topological sort only exists for an acyclic graph.** Failure to produce one is a useful result: it means the dependencies are circular.',
        '**Union-find is astonishingly cheap** with path compression and union by size — effectively constant per operation, and the reason Kruskal is practical.',
        '**Minimum spanning tree ≠ shortest path.** An MST minimises total edge cost to connect everything; it does not give the cheapest route between two specific vertices.',
        '**Most real problems are one of these in disguise.** "Cheapest", "fastest", "in what order", "are these connected" — recognising the question is most of the work; the library implementation does the rest.'
      ],
      reflection: 'You are routing deliveries across a city where some roads have tolls and one supplier pays you to pass their depot (a negative cost). Which algorithm still works, which breaks, and what does that negative edge do to the assumption Dijkstra depends on?',
      checks: [
        'Why can BFS not find the cheapest route in a weighted graph?',
        'What does relaxing an edge mean?',
        'Why does Dijkstra fail with negative edge weights?',
        'What does Bellman-Ford give you that Dijkstra does not?',
        'What must be true of an A* heuristic for the result to stay optimal?',
        'What does it mean if a topological sort cannot cover every vertex?',
        'What is a minimum spanning tree, and how does it differ from a shortest path?'
      ]
    },
    {
      id: 'sorting-searching',
      title: 'Sorting & Searching',
      blurb: 'Why sorted data is worth the effort, how the classic sorts differ, and when to write one at all.',
      whatIs: {
        text: `Searching an unsorted collection means checking every element: O(n), with no way around it. Sorting it once turns every later lookup into **binary search** — check the middle, discard half, repeat — at O(log n). That trade is the reason sorting matters: you pay O(n log n) once to make an unbounded number of subsequent queries cheap.

The comparison sorts you should recognise fall into two groups. The O(n²) family — bubble, selection, insertion — are simple and mostly of teaching value, except **insertion sort**, which is genuinely excellent on small or nearly-sorted inputs and is used inside real library sorts. The O(n log n) family is what actually runs: **merge sort** splits, sorts each half recursively and merges, giving a guaranteed O(n log n) and stability at the cost of O(n) extra space; **quicksort** partitions around a pivot, sorts in place, is usually the fastest in practice, but degrades to O(n²) on a bad pivot choice; **heapsort** guarantees O(n log n) in place but is less cache-friendly.

No comparison sort can beat O(n log n) in the general case — that is a proven lower bound, not a gap waiting to be closed. Sorts that appear to (counting sort, radix sort) do not compare elements; they exploit knowledge about the keys, and are O(n + k) only when that knowledge holds.

Two practical properties decide real choices. **Stability** — equal elements keep their original relative order — matters whenever you sort by one field after another. And **in-place versus extra memory** decides whether you can sort data too large to duplicate. In production the answer is almost always to call the library sort: it is a hybrid (Timsort, introsort) that switches strategy by input size and shape, and it has been tested far more thoroughly than anything you will write today.`,
        ensures: [
          'Explain why binary search requires sorted data and how it halves the problem',
          'Describe how merge sort and quicksort work and where they differ',
          'State the time and space costs and worst cases of the main sorts',
          'Understand stability and when it matters',
          'Know why O(n log n) is the comparison-sort lower bound',
          'Default to the library sort, and know what it is doing'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Merge sort: divide, then combine',
        loop: false,
        steps: [
          { icon: 'scissors', label: 'Split in half', desc: '[8,3,5,1] → [8,3] and [5,1]' },
          { icon: 'arrows-split-up-and-left', label: 'Split again', desc: 'Down to single elements, which are sorted by definition' },
          { icon: 'code-merge', label: 'Merge pairs', desc: '[8]+[3] → [3,8]; [5]+[1] → [1,5]' },
          { icon: 'code-merge', label: 'Merge the halves', desc: '[3,8]+[1,5] → [1,3,5,8], comparing fronts one at a time' },
          { icon: 'circle-check', label: 'Sorted', desc: 'log n levels of splitting × O(n) work per level = O(n log n)' }
        ]
      },
      example: {
        title: 'The algorithms and their trade-offs',
        items: [
          '**Linear search** — O(n), works on anything, no preparation needed',
          '**Binary search** — O(log n), but only on sorted data with random access',
          '**Insertion sort** — O(n²) worst, O(n) on nearly-sorted input; the best choice for small arrays',
          '**Bubble/selection sort** — O(n²) always; teaching tools, not production code',
          '**Merge sort** — O(n log n) guaranteed, stable, needs O(n) extra space',
          '**Quicksort** — O(n log n) average, O(n²) worst, in-place, usually fastest in practice',
          '**Pivot choice is everything for quicksort** — median-of-three or random avoids the worst case',
          '**Heapsort** — O(n log n) guaranteed and in-place, but not stable and less cache-friendly',
          '**Counting/radix sort** — O(n + k), beats the bound by not comparing; needs bounded integer-like keys',
          '**Stability:** sort by name, then by department, and names stay ordered within a department',
          '**Timsort** (Python, Java objects) — merge sort plus insertion sort, exploiting runs in real data',
          '**`sort` vs `sorted`** — in-place versus returning a new list; know which your language gives you'
        ]
      },
      takeaways: [
        '**Sorting is an investment.** Pay O(n log n) once so every later search is O(log n) — worth it whenever lookups repeat.',
        '**Binary search needs sorted data and random access.** On a linked list it is pointless, because reaching the middle is already O(n).',
        '**Merge sort trades memory for guarantees:** always O(n log n), always stable, but O(n) extra space.',
        '**Quicksort trades guarantees for speed:** in-place and usually fastest, but O(n²) if the pivot choice is unlucky or adversarial.',
        '**Insertion sort is not a joke.** It is the fastest option for small or nearly-sorted arrays, which is why real library sorts fall back to it.',
        '**O(n log n) is a proven lower bound for comparison sorts.** Anything faster must know something extra about the keys.',
        '**Stability matters more than people expect.** Multi-key sorting (by date, then by name) only works if the sort is stable.',
        '**Use the library sort.** Timsort and introsort are hybrids tuned for real data and tested at a scale you cannot match.',
        '**Sorting can be the wrong answer entirely.** For "top 10 of a million", a heap is O(n log k); for membership, a hash set beats sorting outright.',
        '**Know whether your sort mutates.** `list.sort()` in place versus `sorted(list)` returning a copy is a routine source of confusing bugs.'
      ],
      reflection: 'You have a million records and need the twenty highest scores. Compare sorting everything and taking twenty, against keeping a heap of size twenty as you stream through. What is each one\'s complexity, and at what input size does the difference start to matter?',
      checks: [
        'Why does binary search require sorted data?',
        'How does merge sort get to O(n log n)?',
        'What is quicksort\'s worst case, and how is it avoided?',
        'What does it mean for a sort to be stable, and when do you need it?',
        'Why can no comparison sort beat O(n log n)?',
        'How do counting and radix sort get around that bound?',
        'When is sorting the wrong approach to a problem?'
      ]
    },
    {
      id: 'algorithmic-strategies',
      title: 'Algorithmic Strategies',
      blurb: 'Brute force, greedy, divide-and-conquer, dynamic programming and backtracking — recognising which one a problem wants.',
      whatIs: {
        text: `Beyond individual algorithms sit a handful of **strategies**, and most problems yield to one of them once you recognise the shape.

**Brute force** tries every possibility. It is the correct starting point far more often than people admit: it is easy to reason about, easy to verify, and on small inputs it is the right answer permanently. It also gives you a reference implementation to test a clever version against.

**Greedy** makes the locally best choice at each step and never reconsiders. It is fast and simple, but only correct when the problem has the property that local optima compose into a global one — true for making change with standard coin systems, scheduling by earliest finish time, and Huffman coding; false for the knapsack problem and for coin systems like {1, 3, 4}, where greedy on 6 gives 4+1+1 instead of 3+3. Greedy needs a proof, not a hope.

**Divide-and-conquer** splits a problem into independent subproblems, solves them recursively and combines the results — merge sort, quicksort, binary search. **Dynamic programming (DP)** applies when the subproblems **overlap**: naive recursion recomputes the same values exponentially often, so you store each result once, either top-down with memoisation or bottom-up with a table. Fibonacci goes from O(2ⁿ) to O(n) with one cache. **Backtracking** explores choices depth-first and abandons a branch as soon as it cannot lead to a solution — sudoku, n-queens, constraint puzzles.

The recognition heuristics are worth memorising. Independent subproblems suggest divide-and-conquer; repeated subproblems suggest DP; "choose the best next thing" suggests greedy, with a proof; "try each option and undo" suggests backtracking. And always: get something correct first, measure, and only then optimise.`,
        ensures: [
          'Start from a correct brute-force solution and improve deliberately',
          'Recognise when greedy is provably correct — and when it silently is not',
          'Apply divide-and-conquer to independent subproblems',
          'Spot overlapping subproblems and apply memoisation or tabulation',
          'Use backtracking with pruning for constraint problems',
          'Match the strategy to the structure of the problem, not to habit'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Building a dynamic programming solution',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'Define the subproblem', desc: '"best[i] = the best result using the first i items"' },
          { icon: 'diagram-project', label: 'Find the recurrence', desc: 'Express best[i] in terms of smaller subproblems' },
          { icon: 'anchor', label: 'Nail the base cases', desc: 'best[0] — the smallest inputs, answered directly' },
          { icon: 'clock-rotate-left', label: 'Notice the overlap', desc: 'Naive recursion recomputes the same values exponentially often' },
          { icon: 'database', label: 'Memoise or tabulate', desc: 'Cache top-down, or fill a table bottom-up' },
          { icon: 'circle-check', label: 'Read off the answer', desc: 'Exponential becomes polynomial, usually O(n) or O(n·m)' }
        ]
      },
      example: {
        title: 'Recognising the strategy',
        items: [
          '**Brute force:** try every subset — always correct, exponential; the baseline to test against',
          '**Greedy — works:** activity selection by earliest finish time; interval scheduling; Huffman coding',
          '**Greedy — works:** making change with coins {1, 5, 10, 25} — always optimal for this system',
          '**Greedy — fails:** coins {1, 3, 4} for 6 → greedy gives 4+1+1, optimal is 3+3',
          '**Greedy — fails:** the 0/1 knapsack; best value-per-weight first is not optimal',
          '**Divide-and-conquer:** merge sort, quicksort, binary search — independent subproblems, then combine',
          '**DP — the tell:** the same subproblem appears again and again in the recursion tree',
          '**DP top-down:** recursion plus a cache (memoisation) — closest to how you reasoned about it',
          '**DP bottom-up:** fill a table from the base cases — no recursion depth to worry about',
          '**DP classics:** Fibonacci, longest common subsequence, edit distance, knapsack, coin change',
          '**Backtracking:** n-queens, sudoku — place, recurse, undo, and prune branches that cannot work',
          '**Always:** correct first, measure second, optimise third — with the brute force kept as a test oracle'
        ]
      },
      takeaways: [
        '**Brute force is a legitimate answer, not a failure.** It is correct, quick to write, and on small inputs it is where you should stop.',
        '**Greedy is fast and often wrong.** It only works when local optima compose into a global one — that needs an argument, and "it passed my examples" is not one.',
        '**The coin-change counterexample is worth remembering:** with coins {1, 3, 4}, greedy fails on 6. It is the cheapest reminder that greedy needs proof.',
        '**Divide-and-conquer needs independent subproblems.** If the pieces overlap, you are recomputing, and dynamic programming is the answer instead.',
        '**Overlapping subproblems is the DP signal.** Draw two levels of the recursion tree; if the same call appears twice, caching turns exponential into polynomial.',
        '**Memoisation and tabulation are the same idea.** Top-down is easier to derive from a recursive solution; bottom-up avoids recursion depth and is easier to optimise for space.',
        '**DP is really about defining the subproblem.** Once "what does best[i] mean" is stated precisely, the recurrence usually follows in a line or two.',
        '**Backtracking is brute force with pruning.** The gain is abandoning a branch the moment it cannot lead to a solution, which turns the impossible into the feasible.',
        '**Match the strategy to the structure, not to fashion.** Independent → divide-and-conquer; overlapping → DP; local choice provable → greedy; constraints with undo → backtracking.',
        '**Keep the brute force as a test oracle.** Comparing the clever version against it on random small inputs catches errors nothing else will.'
      ],
      reflection: 'The naive recursion for Fibonacci is O(2ⁿ). Draw the call tree for `fib(5)` and count how many times `fib(2)` is computed. That count is the entire argument for dynamic programming — so where else have you written a recursion with the same shape?',
      checks: [
        'Why is brute force a reasonable place to start?',
        'When is a greedy algorithm actually correct?',
        'Give a case where greedy gives the wrong answer.',
        'What distinguishes divide-and-conquer from dynamic programming?',
        'What are overlapping subproblems, and how do you spot them?',
        'What is the difference between memoisation and tabulation?',
        'What does pruning add to backtracking?'
      ]
    }
  ]
}
