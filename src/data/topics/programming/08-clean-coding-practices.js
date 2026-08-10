export default {
  id: 'clean-coding',
  title: 'Clean Coding Practices',
  tone: 'c8',
  blurb: 'Naming, functions, comments, code smells, refactoring, error handling, and review hygiene.',
  tags: ['Quality', 'Readability', 'Maintenance', 'Craft'],
  popups: [
    {
      id: 'naming',
      title: 'Naming',
      blurb: 'Meaningful, pronounceable, searchable names for variables, functions, and classes.',
      whatIs: {
        text: 'Naming is communication. Good names reduce confusion and bugs. Bad names waste time.',
        ensures: [
          'Use meaningful names, not abbreviations',
          'Use pronounceable names',
          'Use searchable names',
          'Avoid single-letter variables except in loops',
          'Use consistent conventions'
        ]
      },
      example: {
        title: 'Naming examples',
        items: [
          'Bad: `int d;` — what is d?',
          'Good: `int daysSinceModification;` — clear',
          'Bad: `list xyzzy;` — unclear purpose',
          'Good: `list activeUsers;` — what is stored',
          'Bad: `getUserData()` — what data? how much?',
          'Good: `getUsersByCountry()` — specific',
          'Bad: `processData()` — too generic',
          'Good: `calculateMonthlyRevenue()` — specific'
        ]
      },
      who: ['You'],
      takeaways: [
        'Meaningful: the name explains what it is or does.',
        'Pronounceable: you can say it in conversation.',
        'Searchable: grep/search can find it (avoid single letters except `i`, `j`, `k` in loops).',
        'Avoid disinformation: `accountList` for a non-list, `data` (too vague).',
        'Use one word per concept: pick `fetch` or `get`, not both for similar operations.',
        'Naming conventions: camelCase for variables/methods, PascalCase for classes, UPPER_CASE for constants.'
      ],
      reflection: 'What is the worst name you have given a variable? How would you rename it?',
      checks: [
        'Why does naming matter?',
        'What makes a name searchable?',
        'What is a pronounceable name?',
        'Why avoid single-letter variables?',
        'What is a naming convention?'
      ]
    },
    {
      id: 'functions',
      title: 'Functions',
      blurb: 'Single responsibility, small size, few arguments, and side effects.',
      whatIs: {
        text: 'Good functions do one thing well. They are small, have few parameters, and are easy to test.',
        ensures: [
          'Single responsibility principle: one reason to change',
          'Small size: fits on a screen',
          'Few parameters: ideally 0-3',
          'No side effects: pure functions when possible',
          'Clear purpose: name says what it does'
        ]
      },
      example: {
        title: 'Function design',
        items: [
          'Bad: function that reads config, parses data, validates, saves to DB',
          'Good: three functions, each does one thing',
          'Bad: function with 10 parameters',
          'Good: function with 2-3 parameters; pass object if more needed',
          'Bad: function modifies global state',
          'Good: function returns new state, caller updates globals',
          'Bad: `processUserData()` — what does it do?',
          'Good: `validateUserEmail()` — specific'
        ]
      },
      who: ['You'],
      takeaways: [
        'SRP: one reason to change — one responsibility.',
        'Small: if it does not fit on a screen, it is too big.',
        'Parameters: 0 ideal, 1-3 good, >3 bad (use object).',
        'Side effects: functions that modify state are harder to test and reuse.',
        'Pure function: given same inputs, returns same output, no side effects.',
        'Dead code: remove unused functions (version control keeps history).'
      ],
      reflection: 'How would you refactor a 50-line function into smaller ones?',
      checks: [
        'What is single responsibility?',
        'How many parameters should a function have?',
        'What is a side effect?',
        'What is a pure function?',
        'How do you know a function is too big?'
      ]
    },
    {
      id: 'comments',
      title: 'Comments',
      blurb: 'When comments help vs mask bad naming, and writing useful documentation.',
      whatIs: {
        text: 'Good comments explain WHY. Bad comments repeat what the code already says. Good code is self-documenting.',
        ensures: [
          'Write comments for WHY, not WHAT',
          'Let code say WHAT through good naming',
          'Avoid comments that repeat code',
          'Update comments when code changes',
          'Use documentation for APIs'
        ]
      },
      example: {
        title: 'Comments',
        items: [
          'Bad: `// Add 1 to count` with line `count = count + 1;`',
          'Good: `count++; // Increment for each processed item`',
          'Bad: `// Loop through users`',
          'Good: `for (User u : users) { ... }` — code is clear',
          'Good: `// Bug workaround: DB returns null for empty result, not empty list`',
          'Good: API docs: `@param timeout Maximum time in milliseconds to wait for response`'
        ]
      },
      who: ['You'],
      takeaways: [
        'Comments should explain WHY, not WHAT.',
        'If code needs a comment to be understood, improve the code.',
        'Keep comments up to date with code (outdated comments are worse than none).',
        'API documentation: document contract, parameters, return, exceptions.',
        'Comment unusual decisions: workarounds, performance trade-offs, constraints.',
        'Avoid commented-out code: version control keeps it if needed.'
      ],
      reflection: 'When was the last time a comment saved you? Was it explaining WHY or WHAT?',
      checks: [
        'What should comments explain?',
        'When is a comment unnecessary?',
        'How do you keep comments up to date?',
        'What should API documentation include?'
      ]
    },
    {
      id: 'code-smells',
      title: 'Code Smells',
      blurb: 'Duplication, long methods, large classes, feature envy, and warning signs.',
      whatIs: {
        text: 'Code smell: warning that something might be wrong. Not always a bug, but worth investigating and refactoring.',
        ensures: [
          'Recognize duplication',
          'Spot long methods and large classes',
          'Identify feature envy',
          'Notice rigid, fragile code',
          'Know when to refactor'
        ]
      },
      example: {
        title: 'Code smells',
        items: [
          'Duplication: same logic in three places — extract to function',
          'Long method: 100 lines doing multiple things — split into smaller functions',
          'Large class: 500 lines, many responsibilities — split into multiple classes',
          'Feature envy: method uses many methods of another object — move method there',
          'Primitive obsession: using int/string instead of object — create a class',
          'Dead code: unused functions, variables, branches — delete it'
        ]
      },
      who: ['You'],
      takeaways: [
        'Duplication: every change must be made in multiple places (risk).',
        'Long methods: hard to understand, likely multiple responsibilities.',
        'Large classes: likely multiple responsibilities, hard to test.',
        'Feature envy: method uses many methods of another class — belongs there.',
        'Speculative generality: code for future features that never come — delete it.',
        'Changing requires changing multiple places: poor design, refactor.'
      ],
      reflection: 'Name a code smell you have seen recently. What was the refactoring?',
      checks: [
        'What is code duplication?',
        'When is a method too long?',
        'What is feature envy?',
        'When should you refactor?',
        'What is dead code?'
      ]
    },
    {
      id: 'refactoring',
      title: 'Refactoring',
      blurb: 'Safe small steps, tests as a safety net, and continuous improvement.',
      whatIs: {
        text: 'Refactoring: change code structure without changing behavior. Tests ensure you do not break anything.',
        ensures: [
          'Make one small change at a time',
          'Run tests after each change',
          'Keep each change focused',
          'Commit frequently',
          'Never refactor and add features together'
        ]
      },
      example: {
        title: 'Refactoring safely',
        items: [
          '1. Write tests covering the behavior',
          '2. Run tests (should pass)',
          '3. Rename a variable',
          '4. Run tests (should pass)',
          '5. Extract a method',
          '6. Run tests (should pass)',
          '7. Commit',
          '8. Repeat'
        ]
      },
      who: ['You'],
      takeaways: [
        'One small change: rename, extract, move — one at a time.',
        'Tests first: ensure behavior before refactoring.',
        'Red → green → refactor: test-driven development cycle.',
        'Revert if stuck: git makes it easy to undo bad refactors.',
        'Pair programming: refactoring with a partner catches mistakes.',
        'Continuous refactoring: small improvements over time beat big rewrites.'
      ],
      reflection: 'What is the riskiest refactoring you could do? How would you make it safe?',
      checks: [
        'Why should you refactor?',
        'Why small steps?',
        'Why tests before refactoring?',
        'What if tests do not exist?',
        'Can you refactor and add features together?'
      ]
    },
    {
      id: 'error-handling-clean',
      title: 'Error Handling as Clean Code',
      blurb: 'Avoiding silent failures, honest error paths, and explicit contracts.',
      whatIs: {
        text: 'Error handling is code. It should be clear, explicit, and tested like any other code.',
        ensures: [
          'Fail fast: detect errors early',
          'Fail explicitly: do not hide errors',
          'Use specific exceptions, not generic ones',
          'Handle errors at the right level',
          'Test error paths, not just the happy path'
        ]
      },
      example: {
        title: 'Error handling',
        items: [
          'Bad: return null on error — caller must check',
          'Good: throw exception — error is explicit',
          'Bad: catch all exceptions and ignore',
          'Good: catch specific exception, handle or re-throw',
          'Bad: `if (user == null) { ... }` — magic',
          'Good: throw NoSuchUserException — explicit',
          'Bad: swallow exception and return default',
          'Good: log and re-throw or convert to domain exception'
        ]
      },
      who: ['You'],
      takeaways: [
        'Null: avoid it; use Optional or throw exception.',
        'Specific exceptions: NullPointerException, IllegalArgumentException — helps caller respond correctly.',
        'Checked exceptions: force caller to handle or declare.',
        'Unchecked exceptions: fast failures, less boilerplate.',
        'Try-catch-finally: ensure cleanup (or use try-with-resources).',
        'Test error paths: assert exceptions are thrown in invalid cases.'
      ],
      reflection: 'What is the worst error handling you have seen? How would you improve it?',
      checks: [
        'Why avoid null?',
        'When use exceptions vs return codes?',
        'What is specific exception handling?',
        'How do you test error paths?'
      ]
    },
    {
      id: 'review-hygiene',
      title: 'Version Control & Review Hygiene',
      blurb: 'Meaningful commits, readable diffs, good feedback, and collaborative craft.',
      whatIs: {
        text: 'Commits are messages to the future. Code review is conversation. Both should be professional and kind.',
        ensures: [
          'Write clear commit messages',
          'Keep commits focused (one logical change)',
          'Write diffs that are reviewable',
          'Give kind, specific feedback in review',
          'Receive feedback with openness'
        ]
      },
      example: {
        title: 'Good practices',
        items: [
          'Bad commit: `asdf` or `fix stuff`',
          'Good commit: `Add email validation to user signup form`',
          'Bad commit: changes to 10 files, mixed features and fixes',
          'Good commit: one logical change, related files only',
          'Bad diff: whitespace changes mixed with logic changes',
          'Good diff: pure logic change, no formatting',
          'Bad feedback: "This is bad."',
          'Good feedback: "This could be clearer. What if we named it `getUsersByCountry()`?"'
        ]
      },
      who: ['You'],
      takeaways: [
        'Commit message: one-line summary, then blank line, then details.',
        'Summary: imperative ("Add feature", not "Added feature").',
        'Focused commits: one logical change, easy to revert if needed.',
        'Clean diffs: no unrelated whitespace, formatting, or comments.',
        'Code review: catch bugs, share knowledge, maintain standards.',
        'Kind feedback: assume competence, ask questions, suggest improvements.',
        'Accept feedback: it is about the code, not you; learn and improve.'
      ],
      reflection: 'What makes a commit message useful for someone reading git log?',
      checks: [
        'What should a commit message say?',
        'Should one commit have multiple features?',
        'What makes a good code review comment?',
        'How do you receive critical feedback?'
      ]
    }
  ]
}
