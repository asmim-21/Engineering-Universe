export default {
  id: 'dsa',
  title: 'DSA — Data Structures & Algorithms',
  tone: 'c6',
  blurb: 'Stacks, queues, trees, graphs, hashing, searching, sorting, and algorithmic strategies.',
  tags: ['Algorithms', 'Data Structures', 'Complexity', 'Optimization'],
  popups: [
    {
      id: 'stacks-queues',
      title: 'Stacks & Queues',
      blurb: 'LIFO, FIFO, and when to use each for managing order.',
      whatIs: {
        text: 'Stack: last in, first out (LIFO). Queue: first in, first out (FIFO). Choose based on the problem.',
        ensures: [
          'Understand LIFO and FIFO',
          'Use stacks: push, pop, peek',
          'Use queues: enqueue, dequeue, peek',
          'Know typical applications'
        ]
      },
      example: {
        title: 'Stacks and queues',
        items: [
          'Stack: browser back button (last page visited, view first)',
          'Stack: function call stack (last called, return first)',
          'Queue: print job queue (first submitted, print first)',
          'Queue: keyboard input buffer (first typed, process first)'
        ]
      },
      who: ['You'],
      takeaways: [
        'Stack: push adds, pop removes from top.',
        'Queue: enqueue adds to rear, dequeue removes from front.',
        'Both provide O(1) operations.',
        'Stack: undo/redo, expression evaluation, depth-first search.',
        'Queue: breadth-first search, task scheduling, message passing.'
      ],
      reflection: 'Why does the browser back button work like a stack and not a queue?',
      checks: [
        'What is LIFO?',
        'What is FIFO?',
        'When would you use a stack?',
        'When would you use a queue?'
      ]
    },
    {
      id: 'trees',
      title: 'Trees',
      blurb: 'Hierarchical structure, binary trees, recursion on trees, and tree traversals.',
      whatIs: {
        text: 'Tree: a graph with no cycles. Root, branches, leaves. Recursion is natural on trees.',
        ensures: [
          'Understand tree terminology: root, parent, child, leaf',
          'Implement binary trees',
          'Traverse trees: in-order, pre-order, post-order',
          'Understand recursive thinking on trees'
        ]
      },
      example: {
        title: 'Trees',
        items: [
          'File system: folders are internal nodes, files are leaves',
          'DOM: HTML document is a tree',
          'Binary tree: each node has 0-2 children',
          'In-order traversal: left subtree, node, right subtree',
          'Pre-order traversal: node, left, right',
          'Post-order traversal: left, right, node'
        ]
      },
      who: ['You'],
      takeaways: [
        'Tree: connected acyclic graph with one root.',
        'Recursion: base case (leaf), recursive case (subtrees).',
        'In-order: left, node, right — for BST, gives sorted order.',
        'Pre-order: visit node first — useful for copying.',
        'Post-order: visit children first — useful for deletion.',
        'Height: longest path from root to leaf.'
      ],
      reflection: 'How would you recursively find the sum of all node values in a tree?',
      checks: [
        'What is a tree?',
        'What is in-order traversal?',
        'Why use recursion on trees?',
        'What is the height of a tree?'
      ]
    },
    {
      id: 'search-trees',
      title: 'Search Trees',
      blurb: 'Binary search trees, balanced trees, insertion, deletion, and searching.',
      whatIs: {
        text: 'BST: left subtree < node < right subtree. Allows fast search. Balanced BSTs maintain O(log n) operations.',
        ensures: [
          'Understand BST property',
          'Search in BST: O(log n) average, O(n) worst',
          'Insert in BST',
          'Delete from BST',
          'Know AVL trees for automatic balancing'
        ]
      },
      example: {
        title: 'Binary search trees',
        items: [
          'BST with root 10: left subtree has 5, 7; right has 15, 20',
          'Search for 7: compare with 10, go left; compare with 5, go right; found',
          'Insert 8: find spot by comparing down the tree',
          'Delete node with two children: replace with in-order successor',
          'Balanced BST: height is O(log n), search is O(log n)',
          'Unbalanced BST: height is O(n), search degrades to O(n)'
        ]
      },
      who: ['You'],
      takeaways: [
        'BST property: left < node < right.',
        'Search: compare and go left or right — O(log n) on balanced trees.',
        'Insertion: find the right spot, create new node.',
        'Deletion: three cases — leaf, one child, two children.',
        'Balancing: AVL trees or Red-Black trees auto-balance.',
        'In-order traversal of BST gives sorted order.'
      ],
      reflection: 'Why does an unbalanced BST become slow to search?',
      checks: [
        'What is the BST property?',
        'How do you search a BST?',
        'How do you insert into a BST?',
        'What happens when a BST becomes unbalanced?',
        'What is an AVL tree?'
      ]
    },
    {
      id: 'hashing',
      title: 'Hashing',
      blurb: 'Hash functions, collision handling, hash tables, and implementing efficient lookups.',
      whatIs: {
        text: 'Hash function: map keys to indices. Collision: two keys hash to the same index. Handle with chaining or open addressing.',
        ensures: [
          'Understand hash functions: deterministic, uniform',
          'Understand collisions',
          'Understand chaining: store list at each bucket',
          'Understand open addressing: find another empty spot',
          'Understand load factor and resizing'
        ]
      },
      example: {
        title: 'Hashing',
        items: [
          'Hash function: key % table_size',
          'Key "Alice" hashes to index 3',
          'Key "Bob" also hashes to 3: collision',
          'Chaining: store both at index 3 in a list',
          'Lookup "Bob": hash to 3, search the list',
          'Load factor: number of items / table size',
          'Resize when load factor > 0.75'
        ]
      },
      who: ['You'],
      takeaways: [
        'Good hash function: uniform distribution, few collisions.',
        'Chaining: linked list at each bucket — handles collisions.',
        'Open addressing: probe for next empty slot — saves space.',
        'Load factor: keep it low (<0.75) for good performance.',
        'Resizing: when load factor is high, double the table size.',
        'Average O(1) operations; worst case O(n) if many collisions.'
      ],
      reflection: 'How would you design a hash function for strings?',
      checks: [
        'What is a hash function?',
        'What is a collision?',
        'How does chaining work?',
        'How does open addressing work?',
        'When do you resize?'
      ]
    },
    {
      id: 'graphs',
      title: 'Graphs',
      blurb: 'Representations, traversals, and connections in networks.',
      whatIs: {
        text: 'Graph: nodes and edges. Can have cycles, can be directed/undirected. Represent as adjacency list or matrix.',
        ensures: [
          'Understand directed and undirected graphs',
          'Understand adjacency list and matrix representations',
          'Breadth-first search (BFS)',
          'Depth-first search (DFS)'
        ]
      },
      example: {
        title: 'Graphs',
        items: [
          'Social network: nodes are people, edges are friendships',
          'Adjacency list: each node stores list of neighbors',
          'Adjacency matrix: 2D array, A[i][j] = edge weight or 1/0',
          'BFS: queue, explore neighbors level by level',
          'DFS: stack or recursion, explore deeply first'
        ]
      },
      who: ['You'],
      takeaways: [
        'Directed: edges have direction; undirected: bidirectional.',
        'Adjacency list: efficient for sparse graphs.',
        'Adjacency matrix: efficient for dense graphs.',
        'BFS: queue-based, level-by-level, shortest path.',
        'DFS: stack-based or recursive, all reachable nodes.',
        'Complexity: O(V + E) for both BFS and DFS.'
      ],
      reflection: 'Would you use BFS or DFS to find the shortest path in an unweighted graph?',
      checks: [
        'What is a directed graph?',
        'What is an undirected graph?',
        'When use adjacency list vs matrix?',
        'What is BFS?',
        'What is DFS?'
      ]
    },
    {
      id: 'algorithmic-strategies',
      title: 'Algorithmic Strategies',
      blurb: 'Greedy, divide-and-conquer, dynamic programming, and solving hard problems.',
      whatIs: {
        text: 'Different strategies solve different problems. Greedy: local choice. Divide-and-conquer: split and combine. DP: memoization.',
        ensures: [
          'Understand greedy algorithms: local optimization',
          'Understand divide-and-conquer: merge sort, quicksort',
          'Understand dynamic programming: overlapping subproblems',
          'Choose the right strategy for the problem'
        ]
      },
      example: {
        title: 'Algorithmic strategies',
        items: [
          'Greedy: coin change — pick largest coin possible',
          'Divide-and-conquer: merge sort — split, sort, merge',
          'Divide-and-conquer: quicksort — partition and sort',
          'DP: Fibonacci — memoize (cache) subproblem results',
          'DP: longest common subsequence — build up solutions'
        ]
      },
      who: ['You'],
      takeaways: [
        'Greedy: fast, but not always optimal (e.g., coin change can fail).',
        'Divide-and-conquer: split problem, solve subproblems, combine.',
        'Merge sort: always O(n log n); stable.',
        'Quicksort: O(n log n) average; O(n²) worst; fast in practice.',
        'DP: recognizing overlapping subproblems and memoizing.',
        'DP: build bottom-up (iterative) or top-down (recursive with memoization).'
      ],
      reflection: 'When would dynamic programming be better than a greedy approach?',
      checks: [
        'When is greedy optimal?',
        'How does divide-and-conquer work?',
        'What is dynamic programming?',
        'What is the difference between merge sort and quicksort?',
        'What are overlapping subproblems?'
      ]
    }
  ]
}
