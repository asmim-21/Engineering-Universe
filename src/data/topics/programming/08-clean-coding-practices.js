export default {
  id: 'clean-coding',
  title: 'Clean Coding Practices',
  tone: 'c8',
  blurb: 'Writing code other people can change: naming, small functions, honest comments, design principles, smells, refactoring, error handling, and review hygiene.',
  tags: ['Quality', 'Readability', 'Maintenance', 'Craft'],
  popups: [
    {
      id: 'naming',
      title: 'Naming',
      blurb: 'The cheapest documentation there is — and the fastest way to make code unreadable.',
      whatIs: {
        text: `Code is read far more often than it is written, and names are what it is read through. A good name lets someone understand a line without opening anything else; a bad one forces a detour into the definition, then into its callers, and by then the reader has lost the thread of what they were actually doing.

A name should say **what the thing is or does**, at the level of the problem rather than the mechanism. \`daysSinceLastLogin\` beats \`d\`. \`activeUsers\` beats \`list2\`. \`calculateMonthlyRevenue()\` beats \`processData()\`. Length is not the measure — precision is. A long name for a widely used concept is fine; a vague one is not, however short.

Some qualities are worth checking explicitly. **Pronounceable**, because names get discussed out loud. **Searchable**, because you will one day need every use of it — single letters and bare numbers cannot be grepped, which is why constants beat magic numbers. And **honest**: \`userList\` that holds a set, or \`getUser()\` that also writes to the database, actively misleads. Misleading names are worse than vague ones, because the reader stops checking.

Consistency binds it together. One word per concept across the codebase — \`fetch\`, \`get\` and \`retrieve\` meaning the same thing forces everyone to remember which is which. Conventions matter too: verbs for functions, nouns for values, \`is\`/\`has\` for booleans, plurals for collections, and whatever casing the language and the codebase already use. Short names are acceptable in short scopes — \`i\` in a three-line loop is clearer than \`elementIndex\` — but scope and name length should grow together.`,
        ensures: [
          'Name things for what they are, in the language of the problem',
          'Prefer precise names over short ones, and avoid abbreviations',
          'Keep names searchable — replace magic numbers with named constants',
          'Never let a name mislead about type or side effects',
          'Use one word per concept consistently across the codebase',
          'Follow the conventions of the language and the surrounding code'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Testing a name before you keep it',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'What is it, exactly?', desc: 'If you cannot say it in a phrase, the design is unclear, not the name' },
          { icon: 'comment', label: 'Can you say it aloud?', desc: 'Names are discussed in reviews and standups' },
          { icon: 'magnifying-glass', label: 'Can you search for it?', desc: '`i`, `data`, `42` cannot be found; `MAX_RETRIES` can' },
          { icon: 'scale-balanced', label: 'Is it honest?', desc: 'No `List` suffix on a set; no hidden writes behind a `get`' },
          { icon: 'arrows-left-right', label: 'Is it consistent?', desc: 'One word per concept — not `fetch`, `get` and `retrieve` for the same thing' },
          { icon: 'ruler', label: 'Does it fit the scope?', desc: '`i` in a tiny loop; a full name for anything that travels' }
        ]
      },
      example: {
        title: 'Before and after',
        items: [
          '**`int d;`** → **`int daysSinceLastLogin;`** — the unit and the meaning, not a letter',
          '**`List<User> list2;`** → **`List<User> activeUsers;`** — what is in it, not where it came from',
          '**`processData()`** → **`calculateMonthlyRevenue()`** — what it produces',
          '**`getUserData()`** → **`findUsersByCountry(country)`** — which users, by what',
          '**`if (status == 3)`** → **`if (status == Status.CANCELLED)`** — searchable and self-explaining',
          '**`* 0.2`** → **`* VAT_RATE`** — a magic number becomes a named, findable constant',
          '**`flag`** → **`isEligibleForRefund`** — booleans read as the question they answer',
          '**`userList` holding a `Set`** — a name that lies; drop the type suffix entirely',
          '**`getBalance()` that also refreshes a cache** — a `get` with a side effect nobody expects',
          '**`fetchUser` / `getUser` / `retrieveUser`** in one codebase — pick one verb and use it everywhere',
          '**`for (int i = 0; i < n; i++)`** — a single letter is fine in a three-line scope',
          '**`temp`, `data`, `manager`, `helper`** — names that survive because nobody dares ask what they mean'
        ]
      },
      takeaways: [
        '**A good name removes a question.** If a reader has to jump to the definition to understand a line, the name did not do its job.',
        '**Precision beats brevity.** Nobody has ever been slowed down by a clear twenty-character name; plenty of people have been slowed down by `d`.',
        '**Misleading names are worse than vague ones.** A reader who distrusts a name checks; a reader who believes a wrong one introduces a bug.',
        '**Searchability is a real property.** Named constants and distinctive identifiers can be found across a codebase; `data` and `42` cannot.',
        '**Booleans should read as questions:** `isActive`, `hasPermission`, `canRetry`. Then the `if` reads like a sentence.',
        '**One word per concept.** Synonyms scattered across a codebase force everyone to remember which layer says which, forever.',
        '**Name at the level of the problem, not the implementation.** `subscribers` beats `observerArrayList` — the second breaks the moment the structure changes.',
        '**Scope sets the acceptable length.** Short names for short lives; anything crossing a function boundary earns a full one.',
        '**If a name is hard to find, the design is usually the problem.** A function that resists naming is normally doing more than one thing.'
      ],
      reflection: 'Open a file you wrote a while ago and pick the three worst names in it. For each, write down what it actually holds or does — then use that sentence as the name. Which of the three was hard, and what does that say about the code behind it?',
      checks: [
        'Why does naming matter more for reading than for writing?',
        'What makes a name searchable?',
        'Why is a misleading name worse than a vague one?',
        'How should boolean names be written?',
        'What is wrong with using `fetch`, `get` and `retrieve` interchangeably?',
        'When is a single-letter name acceptable?',
        'What does a hard-to-name function usually indicate?'
      ]
    },
    {
      id: 'functions',
      title: 'Functions',
      blurb: 'Small, single-purpose, few arguments, honest about side effects — the unit where readability is won or lost.',
      whatIs: {
        text: `A function is the smallest unit of design. Getting functions right does more for a codebase than any architectural diagram, because they are what people actually read, test and change.

The central rule is **one thing**. A function should do a single job at a single level of abstraction. The practical test is whether you can describe it in one sentence with no "and" — and whether its statements all sit at the same level: a function that both orchestrates steps and fiddles with string indices is mixing two levels and should delegate the low-level part.

**Small** follows from that. Long functions are long because they do several things, and a function that does not fit on a screen cannot be held in a reader's head. Extracting a named block is almost always an improvement: the name becomes documentation and the extracted piece becomes independently testable.

**Few parameters** is the next constraint. Zero to two is comfortable, three is a stretch, more usually means related values that want to be an object, or a function doing several jobs. Boolean parameters deserve particular suspicion — \`render(true)\` tells a reader nothing, and it usually means the function has two behaviours that should be two functions.

Finally, **side effects should be visible in the name**. A function that says it computes something and quietly also writes to the database, mutates its argument or changes global state is the hardest kind of code to reason about. Functions that only compute — same input, same output, nothing touched — are trivially testable and safely reusable; keep the effects at the edges and the logic pure in the middle.`,
        ensures: [
          'Write functions that do one thing at one level of abstraction',
          'Keep functions short enough to read at a glance',
          'Limit parameters and replace boolean flags with separate functions',
          'Make side effects obvious in the name, or avoid them',
          'Separate pure logic from input/output (I/O) and state changes',
          'Return early to keep nesting shallow'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Splitting a function that does too much',
        loop: false,
        steps: [
          { icon: 'file-lines', label: 'A 60-line function', desc: 'Reads a file, parses it, validates, saves, emails' },
          { icon: 'comment', label: 'Describe it in one sentence', desc: 'Every "and" is a seam waiting to be cut' },
          { icon: 'scissors', label: 'Extract named steps', desc: '`parseOrders`, `validate`, `save`, `notify`' },
          { icon: 'sitemap', label: 'One level per function', desc: 'The top one now reads as the four steps and nothing else' },
          { icon: 'vial', label: 'Each part is testable', desc: 'Parsing can be tested without a database or an inbox' },
          { icon: 'circle-check', label: 'Reads as documentation', desc: 'The names describe the process; comments become unnecessary' }
        ]
      },
      example: {
        title: 'Signals and fixes',
        items: [
          '**Too many jobs:** one function reads config, parses data, validates it and saves it',
          '**Fix:** four functions, each named for its step; the caller reads as the process',
          '**The "and" test:** if the honest description needs "and", split there',
          '**Mixed levels:** orchestration and character-by-character string handling in one body',
          '**Too many parameters:** `createUser(name, email, age, country, tier, active, admin)`',
          '**Fix:** pass a `UserDetails` object, or split into a builder plus a create call',
          '**Boolean flag:** `save(record, true)` — nobody can read that at the call site',
          '**Fix:** `saveDraft(record)` and `savePublished(record)` — two clear functions',
          '**Hidden side effect:** `getTotal()` that also updates a cached field',
          '**Deep nesting:** four levels of `if` — invert the conditions and return early instead',
          '**Pure core:** `calculateInvoice(order)` returns a value and touches nothing — trivially testable',
          '**Effects at the edges:** read inputs, compute with pure functions, then write outputs'
        ]
      },
      takeaways: [
        '**One thing, one level of abstraction.** The "and" test catches most violations in seconds, without a style guide.',
        '**Extract until each piece has a name.** The name is documentation, the piece is testable, and the caller becomes a readable summary.',
        '**Short is a consequence, not a target.** Functions get short because they stop doing several things — not because you split them arbitrarily at ten lines.',
        '**Fewer parameters, clearer calls.** Beyond three, group the related ones into an object — they usually turn out to be a concept you had not named yet.',
        '**Boolean parameters usually hide two functions.** `render(true)` is unreadable at the call site; two named functions are not.',
        '**Name the side effects or remove them.** `save`, `send`, `delete`, `update` are honest; a `get` that mutates is a trap.',
        '**Pure functions are the easy ones to test:** no setup, no mocks, no cleanup — just inputs and expected outputs.',
        '**Return early.** Guard clauses at the top flatten nesting and put the exceptional cases where they are easy to see.',
        '**Delete dead functions.** Unused code is a maintenance cost and a source of confusion; version control remembers it if you ever need it back.'
      ],
      reflection: 'Take the longest function you have written recently and describe it in one sentence. Count the "ands". Extract one of them into a named function — did the original get easier to read, and did anything become testable that was not before?',
      checks: [
        'What does "one level of abstraction" mean in a function?',
        'What is the "and" test and what does it detect?',
        'How many parameters is too many, and what do you do about it?',
        'Why are boolean parameters a smell?',
        'What makes a function pure, and why does that help testing?',
        'How do guard clauses improve readability?',
        'Why delete unused functions rather than keep them?'
      ]
    },
    {
      id: 'comments',
      title: 'Comments & Documentation',
      blurb: 'Explaining why, letting the code explain what, and never letting a comment tell a lie.',
      whatIs: {
        text: `The best comment is often the one you did not need to write, because a clearer name or a smaller function made it unnecessary. A comment restating what the code plainly does adds noise and a second thing to maintain: \`// increment the counter\` above \`count++\` helps nobody.

What code genuinely cannot express is **why**. Why this timeout and not the obvious one. Why this apparently redundant check exists. Why the straightforward implementation was rejected. That context lives only in someone's head and in the ticket they closed six months ago — a two-line comment saves the next person an afternoon of archaeology, or stops them "simplifying" away a fix.

The other thing worth documenting is the **contract** at a public boundary — its application programming interface (API): what a function accepts, what it returns, what it throws, whether it mutates its arguments. Callers read the signature and the doc comment, not the implementation, so a described contract is genuinely load-bearing.

The rule that outranks all of this is that a comment must not be **wrong**. Code changes; comments do not change themselves. A stale comment is worse than none, because readers trust it and stop reading the code beneath. When you change behaviour, update the comment in the same commit — and if a comment cannot be kept honest, delete it. That is also the case against commented-out code: it is a lie about what the program does, and version control already remembers it.`,
        ensures: [
          'Prefer clearer code over a comment explaining unclear code',
          'Comment the why: trade-offs, constraints, workarounds, rejected approaches',
          'Document contracts at public boundaries',
          'Keep comments in step with the code they describe',
          'Delete commented-out code and stale explanations',
          'Use TODOs sparingly and with an owner or a ticket'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Deciding whether to write a comment',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'Is the code unclear?', desc: 'First try a better name or a smaller function' },
          { icon: 'pen', label: 'Still unclear?', desc: 'Some things — regex, formulas, protocol quirks — do need prose' },
          { icon: 'lightbulb', label: 'Explain the why', desc: 'Constraint, trade-off, workaround — never the mechanics' },
          { icon: 'file-contract', label: 'Public boundary?', desc: 'Document the contract: parameters, return, throws, mutations' },
          { icon: 'arrows-rotate', label: 'Keep it true', desc: 'Behaviour changes and the comment changes in the same commit' },
          { icon: 'trash', label: 'Cannot keep it true?', desc: 'Delete it — a stale comment misleads with authority' }
        ]
      },
      example: {
        title: 'Comments that earn their place, and ones that do not',
        items: [
          '**Noise:** `// increment the counter` above `count++`',
          '**Noise:** `// loop through the users` above an obvious `for` loop',
          '**Valuable:** `// The vendor API returns null, not an empty list, for no results (ticket #4821)`',
          '**Valuable:** `// 30s, not 5s: the batch endpoint routinely takes 20s under load`',
          '**Valuable:** `// Sorted before hashing so equal sets produce the same digest`',
          '**Valuable:** `// Deliberately not parallel — the driver is not thread-safe`',
          '**Contract:** `@param timeout milliseconds to wait; @throws TimeoutException if exceeded`',
          '**Contract:** "Returns an empty list, never null" — the kind of promise callers rely on',
          '**Regex:** one line explaining what the pattern matches, because nobody reads regex fluently',
          '**Stale and dangerous:** "returns null if not found" on a method that now throws',
          '**Commented-out code:** delete it; git remembers, and the reader cannot tell whether it matters',
          '**`// TODO: fix this properly`** with no name, date or ticket — it will be there in five years'
        ]
      },
      takeaways: [
        '**Code says what; comments say why.** That division of labour is the whole discipline, and it survives every style debate.',
        '**A comment explaining unclear code is a missed refactor.** Try the better name or the extracted function first; take the comment as a fallback.',
        '**Non-obvious constraints must be written down.** Workarounds, timeouts, ordering requirements and vendor quirks are invisible in the code and expensive to rediscover.',
        '**Stale comments are worse than no comments.** Readers trust them, act on them, and stop reading the code — update them in the same commit or delete them.',
        '**Document contracts where people cross a boundary:** public APIs, library functions, anything used by another team. Internals rarely need it.',
        '**Null and emptiness deserve explicit promises.** "Never returns null" removes a defensive check from every caller.',
        '**Delete commented-out code.** It is unverifiable, unmaintained, and version control has already kept it.',
        '**TODOs need an owner and a ticket,** or they are decoration. An unowned TODO is a promise nobody made.',
        '**A comment that starts "this is a hack because..." is often the most valuable line in the file** — it is the only place the reason exists.'
      ],
      reflection: 'Find a comment in your codebase that describes what the code does. Delete it and rename something instead. Then find a piece of code whose reason is not obvious — a magic timeout, an odd ordering — and write the comment nobody has written yet.',
      checks: [
        'What should a comment explain that code cannot?',
        'What should you try before writing an explanatory comment?',
        'Why is a stale comment worse than none at all?',
        'What belongs in the documentation of a public function?',
        'Why delete commented-out code?',
        'What makes a TODO useful rather than decorative?'
      ]
    },
    {
      id: 'design-principles',
      title: 'Design Principles: SOLID, DRY, KISS, YAGNI',
      blurb: 'The heuristics behind most refactoring decisions — what each actually means, and when it stops applying.',
      whatIs: {
        text: `Principles are compressed experience: short rules that usually point in the right direction. They are not laws, and applying any of them without judgement produces its own kind of mess.

**SOLID** is an acronym for five object-oriented design heuristics. **Single responsibility (SRP)** — a class should have one reason to change; if the billing rules and the report layout both force edits to the same class, it is doing two jobs. **Open/closed (OCP)** — you should be able to add behaviour by adding code rather than editing what already works, which in practice means an interface where variation happens. **Liskov substitution (LSP)** — any implementation must be usable wherever its interface is expected, with no caller checking which one it got. **Interface segregation (ISP)** — several small interfaces beat one wide one, so implementers are not forced to provide operations they have no use for. **Dependency inversion (DIP)** — depend on abstractions; the domain defines the interface and the database implements it, not the other way round.

The three shorter ones round it out. **Don't repeat yourself (DRY)** targets duplicated *knowledge*, not duplicated characters: the same business rule expressed in three places will eventually be updated in two. **Keep it simple (KISS)** favours the simplest thing that works, because clever code is a debt paid by whoever maintains it. **You aren't gonna need it (YAGNI)** says do not build for a requirement you have imagined — speculative flexibility is usually the wrong flexibility, and it costs complexity now for a payoff that never arrives.

The tensions between them are where judgement lives. DRY pushes towards abstraction; YAGNI and KISS push back. Two pieces of code that look identical today but change for different reasons are **not** duplication, and merging them creates a coupling that hurts more than the repetition did. The usual advice — wait for the third occurrence before abstracting — exists precisely because by then you can see what actually varies.`,
        ensures: [
          'State each SOLID principle and recognise a violation in real code',
          'Apply DRY to duplicated knowledge rather than similar-looking text',
          'Choose the simplest design that solves the actual problem',
          'Resist speculative generality and features nobody asked for',
          'Recognise where the principles conflict and decide deliberately',
          'Use principles as heuristics rather than rules to satisfy'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Applying a principle without overdoing it',
        loop: false,
        steps: [
          { icon: 'triangle-exclamation', label: 'Notice real pain', desc: 'A change forced edits in five files, or the same rule was updated twice' },
          { icon: 'magnifying-glass', label: 'Name the cause', desc: 'Two responsibilities in one class; one rule duplicated in three' },
          { icon: 'scale-balanced', label: 'Which principle applies?', desc: 'SRP, DIP, DRY — pick the one that addresses this pain' },
          { icon: 'circle-question', label: 'Is it really duplication?', desc: 'Same code, different reasons to change, is not duplication' },
          { icon: 'code-branch', label: 'Make the smallest change', desc: 'Extract the interface or the rule — not a framework' },
          { icon: 'circle-check', label: 'Check it paid off', desc: 'Is the next change genuinely cheaper, or just more indirect?' }
        ]
      },
      example: {
        title: 'The principles in real code',
        items: [
          '**SRP violation:** `Invoice` calculates totals, renders invoice documents and emails customers — three reasons to change',
          '**OCP violation:** every new report format edits the same `switch`; an interface would make it additive',
          '**LSP violation:** a `ReadOnlyList` subclass whose `add()` throws — callers must now know the subtype',
          '**ISP violation:** a `Repository` interface with twenty methods; every fake implements nineteen it never uses',
          '**DIP violation:** the domain imports the database driver — the dependency points the wrong way',
          '**DIP fixed:** the domain declares `OrderStore`; the Structured Query Language (SQL) implementation depends on the domain',
          '**DRY — real:** the value-added tax (VAT) rule written out in the application programming interface (API), the report and the invoice document',
          '**DRY — false positive:** two data transfer objects (DTOs) with identical fields that serve different consumers and will diverge',
          '**KISS:** a plugin architecture for a script with one plugin — a dictionary would have done',
          '**YAGNI:** a configurable multi-currency engine for a product that sells in one country',
          '**Rule of three:** wait for the third occurrence before abstracting — by then the variation is visible',
          '**Coupling cost:** a shared abstraction means a change for one consumer risks breaking the other'
        ]
      },
      takeaways: [
        '**Single responsibility is about reasons to change,** not about line counts. Two stakeholders who can each force an edit means two responsibilities.',
        '**Open/closed is achieved with an interface at the point of variation.** If adding a case means editing a `switch`, you have found where it belongs.',
        '**Liskov failures show up as type checks in callers.** The moment code asks "which implementation is this?", the abstraction has leaked.',
        '**Interface segregation makes testing bearable.** Narrow interfaces are easy to fake; wide ones force stubs full of unsupported operations.',
        '**Dependency inversion is a direction, not a framework.** The domain owns the interface; the infrastructure implements it. Dependency-injection (DI) containers are optional.',
        '**DRY is about knowledge, not characters.** One business rule in one place; incidentally similar code that changes for different reasons should stay separate.',
        '**Wrong abstractions cost more than duplication.** Removing a bad abstraction is harder than removing a repeated block — prefer duplication until the pattern is clear.',
        '**KISS is a bias, not an excuse.** The simplest thing that solves the *actual* problem — not the simplest thing that appears to work today.',
        '**YAGNI applies to flexibility as much as to features.** Configuration options, plugin points and generic layers built "for later" usually fit the wrong future.',
        '**Principles conflict, and that is the point.** They are prompts for a decision you still have to make, with the specific code in front of you.'
      ],
      reflection: 'Find a class in your codebase that two different people, for two different reasons, have both edited in the last month. Which principle does that violate, what would you split, and what would the split cost in indirection?',
      checks: [
        'What does "one reason to change" mean in practice?',
        'How do you make a class open for extension but closed for modification?',
        'What does a Liskov violation look like from a caller\'s side?',
        'Why are narrow interfaces easier to work with?',
        'Which way should dependencies point between domain and infrastructure?',
        'What does DRY actually target — and what is not duplication?',
        'Why can a premature abstraction be worse than duplication?'
      ]
    },
    {
      id: 'code-smells',
      title: 'Code Smells',
      blurb: 'Surface signals that something deeper is wrong — what each one usually means and what to do about it.',
      whatIs: {
        text: `A **code smell** is a symptom: something in the code that suggests a design problem without necessarily being a bug. Smells are useful precisely because they are cheap to spot. You do not need to understand the whole system to notice that a class is two thousand lines long or that the same rule appears in three files.

Most smells cluster into a few families. **Bloaters** grow past what a reader can hold: long methods, large classes, long parameter lists, primitive obsession (passing raw strings and ints where a small type would carry meaning and validation). **Couplers** know too much about each other: feature envy, where a method uses another object's data more than its own; message chains like \`a.getB().getC().getD()\`; inappropriate intimacy between classes reaching into each other's internals.

**Change preventers** are the expensive family, because they show up as effort. *Divergent change* is one class edited for many unrelated reasons — it has too many responsibilities. *Shotgun surgery* is the opposite: one conceptual change forcing small edits across a dozen files — a responsibility that has been smeared across the codebase instead of living somewhere. Both are detectable from your version history rather than from reading the code at all.

And **dispensables** are simply weight: dead code, speculative generality built for a future that never arrived, comments compensating for unclear code, duplication.

The essential caveat is that a smell is a **prompt to look, not a verdict**. Some long methods are genuinely one linear procedure. Some duplication is coincidence and should stay. The right response is to ask what the smell suggests about the design, and to act when there is a real cost — not to run a checklist over code that is working fine.`,
        ensures: [
          'Recognise the common smells by name and family',
          'Read what a smell suggests about the underlying design',
          'Use version-control history to spot change preventers',
          'Distinguish genuine duplication from coincidental similarity',
          'Prioritise smells by the cost they actually impose',
          'Resist "fixing" smells in code that is not causing pain'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From symptom to design fix',
        loop: false,
        steps: [
          { icon: 'eye', label: 'Notice the smell', desc: 'A 400-line class; the same rule in three files' },
          { icon: 'circle-question', label: 'Ask what it suggests', desc: 'Too many responsibilities? Knowledge in the wrong place?' },
          { icon: 'chart-line', label: 'Check the real cost', desc: 'Does it slow changes, cause bugs, or just look untidy?' },
          { icon: 'code-branch', label: 'Name the refactor', desc: 'Extract method, move method, introduce a type, split the class' },
          { icon: 'vial', label: 'Cover it with tests first', desc: 'Then change structure in small steps with the tests green' },
          { icon: 'circle-check', label: 'Confirm the pain is gone', desc: 'If change is not cheaper afterwards, the diagnosis was wrong' }
        ]
      },
      example: {
        title: 'Smells and their usual remedies',
        items: [
          '**Long method** — several jobs in one body → extract named functions per job',
          '**Large class** — many unrelated fields and methods → split by responsibility',
          '**Long parameter list** — seven arguments → introduce a parameter object',
          '**Primitive obsession** — a `String` email passed everywhere → an `Email` type that validates once',
          '**Duplicated knowledge** — the same rule in the web layer, the report and the invoice document → one place, three callers',
          '**Feature envy** — a method using another object\'s getters six times → move it to that object',
          '**Message chain** — `order.getCustomer().getAddress().getCity()` → ask for `order.shippingCity()`',
          '**Divergent change** — one class edited for four unrelated reasons → too many responsibilities',
          '**Shotgun surgery** — one change touching twelve files → a responsibility with no home',
          '**Speculative generality** — an abstract base with one implementation → collapse it',
          '**Dead code** — unused functions and flags → delete; git remembers',
          '**Comment compensating for names** — `// check if user can edit` → rename to `canEdit(user)`'
        ]
      },
      takeaways: [
        '**A smell is a symptom, not a diagnosis.** It tells you where to look; the design question underneath is what you actually answer.',
        '**Bloaters mean something outgrew its purpose.** Long methods and large classes are almost always several responsibilities that were never separated.',
        '**Couplers mean knowledge is in the wrong place.** Feature envy and message chains both say: this behaviour belongs to the object it keeps interrogating.',
        '**Change preventers are visible in git history.** One file always in the diff, or twelve files always changing together, tells you more than reading ever will.',
        '**Primitive obsession is quietly expensive.** A dedicated type validates once, makes signatures self-documenting, and stops a postcode being passed where an email was expected.',
        '**Duplication of knowledge is the real target.** Two identical blocks that will diverge are not duplication; one rule written twice is.',
        '**Speculative generality is a smell, not foresight.** An abstraction with one implementation and no second use case is pure cost.',
        '**Delete dead code immediately.** It is read, maintained and reasoned about by people who do not know it is unreachable.',
        '**Prioritise by pain, not by checklist.** Fix the smells in code that changes often; ignore the ones in code that has been stable for three years.'
      ],
      reflection: 'Look at the last ten commits in your repository. Is there a file that appears in almost all of them, or a set of files that always change together? Which smell is that, and what responsibility is sitting in the wrong place?',
      checks: [
        'What is a code smell, and what is it not?',
        'What does feature envy suggest about where a method belongs?',
        'What is the difference between divergent change and shotgun surgery?',
        'What is primitive obsession, and what does a small type buy you?',
        'When is duplicated-looking code not duplication?',
        'Why is speculative generality a problem?',
        'How should you decide which smells to fix first?'
      ]
    },
    {
      id: 'refactoring',
      title: 'Refactoring',
      blurb: 'Changing structure without changing behaviour — in steps small enough that you always know it still works.',
      whatIs: {
        text: `**Refactoring** is improving the internal structure of code without changing what it does. That definition is strict and it matters: the moment you also change behaviour, you can no longer tell whether a failing test means the refactor broke something or the new behaviour is simply different. Refactor, then change behaviour — never both in one step.

The safety net is **tests**. Behaviour that is covered can be restructured with confidence, because the tests answer "did I break it?" in seconds. Refactoring without tests is editing and hoping. If the code has no coverage, the first move is characterisation tests: write tests that capture what it currently does — bugs included — so that any change in behaviour shows up immediately.

The rhythm is **small steps with a green bar between them**. Rename a variable, run the tests. Extract a method, run the tests. Move it to another class, run the tests. Each step is individually reversible and each one keeps the code working, so you are never more than a minute from a state you could ship. The failure mode is the opposite: a two-hour restructuring that fails at the end with no idea which change caused it.

**When** to refactor matters as much as how. The sustainable version is continuous — leave each file a little better than you found it, and refactor just before adding a feature so that the feature becomes easy to add. Big-bang rewrites are almost always worse than they look: they take longer than estimated, deliver no value until the end, and discard the accumulated bug fixes that made the old code ugly in the first place. Use the automated refactorings in your integrated development environment (IDE) where they exist; a mechanical rename across a codebase is safer than a careful manual one.`,
        ensures: [
          'Separate refactoring from behaviour change, in different commits',
          'Establish test coverage — or characterisation tests — before restructuring',
          'Work in small steps with tests run between each',
          'Use automated IDE refactorings where available',
          'Refactor continuously rather than in large planned rewrites',
          'Know when to stop and when to revert'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The refactoring loop',
        loop: true,
        steps: [
          { icon: 'vial', label: 'Tests green first', desc: 'Confirm the current behaviour is actually covered' },
          { icon: 'pen', label: 'One small change', desc: 'Rename, extract, move, inline — a single mechanical step' },
          { icon: 'play', label: 'Run the tests', desc: 'Seconds, not minutes; a failure points at one small change' },
          { icon: 'code-branch', label: 'Commit', desc: 'A tiny, revertible commit with a clear message' },
          { icon: 'magnifying-glass', label: 'Reassess', desc: 'Is the design better? Is the next step still worth taking?' }
        ]
      },
      example: {
        title: 'Working safely',
        items: [
          '**Step 0:** run the tests and confirm they pass — otherwise you cannot tell what you broke',
          '**No tests?** write characterisation tests that capture current behaviour, bugs included',
          '**Rename** a variable → run tests → commit',
          '**Extract** a block into a named method → run tests → commit',
          '**Move** a method to the class whose data it uses → run tests → commit',
          '**Introduce** a parameter object for a long argument list → run tests → commit',
          '**Replace** a type-code conditional with polymorphism → run tests → commit',
          '**Never** refactor and add a feature in the same commit — the diff becomes unreviewable',
          '**Use the IDE:** automated rename, extract method and change signature are safer than manual edits',
          '**Stuck?** `git reset --hard` and try a smaller step; you lose minutes, not hours',
          '**Boy-scout rule:** leave each file a little cleaner than you found it',
          '**Before a feature:** refactor so the change becomes easy, then make the easy change'
        ]
      },
      takeaways: [
        '**Refactoring changes structure, never behaviour.** Mixing the two makes every test failure ambiguous and every review harder.',
        '**Tests are what make it safe.** Without them you are not refactoring, you are rewriting and hoping — and you will find out in production.',
        '**No coverage? Characterise first.** Tests that pin down current behaviour, including its quirks, give you the net you need to move.',
        '**Small steps, green between each.** If something breaks, it was the last thirty seconds of work, and you know exactly what to undo.',
        '**Commit each step.** Tiny commits make reverting cheap and let a reviewer follow the reasoning rather than facing one enormous diff.',
        '**Prefer automated refactorings.** An IDE rename across two hundred files is mechanical and correct; a manual one is a search-and-replace with hope attached.',
        '**Refactor just before adding a feature.** Make the change easy, then make the easy change — the cleanup is justified by the work that follows.',
        '**Continuous beats big-bang.** Rewrites overrun, deliver nothing until the end, and throw away years of accumulated fixes hiding in the ugly code.',
        '**Reverting is a normal move, not a failure.** If a refactor is not converging after a few steps, reset and take a smaller one.',
        '**Know when to stop.** The goal is code that is easy to change next week, not an ideal design nobody asked for.'
      ],
      reflection: 'Pick a function you find hard to read and set a fifteen-minute limit. Make only mechanical changes — rename, extract, move — running the tests after each. What did fifteen minutes actually achieve, and what would a week of "we should rewrite this" have achieved instead?',
      checks: [
        'What exactly must stay the same during a refactor?',
        'Why should refactoring and feature work be separate commits?',
        'What do you do when the code has no tests?',
        'Why work in small steps rather than one large restructuring?',
        'When is the best moment to refactor a piece of code?',
        'Why are large rewrites usually a bad trade?',
        'When should you revert instead of pressing on?'
      ]
    },
    {
      id: 'error-handling-clean',
      title: 'Error Handling as Clean Code',
      blurb: 'Failing loudly, at the right level, with enough information — and testing the paths that only run when things go wrong.',
      whatIs: {
        text: `Error handling is code like any other, and it deserves the same care as the happy path — arguably more, because it runs precisely when something is already wrong and nobody is watching.

The first principle is **fail fast and loudly**. Detect the problem at the point where you can describe it, and report it there. A validation error raised at the boundary — "port must be a positive integer, got -1" — is trivial to fix. The same bad value silently defaulted, passed down four layers and surfacing as a null dereference costs an afternoon.

The second is that **swallowing errors is the worst thing you can do**. An empty catch block converts a loud, findable failure into silently wrong behaviour: reports that quietly miss rows, payments recorded as successful, data that drifts. If a failure genuinely is ignorable, catch the specific type and log why — so it is still visible when the assumption turns out to be wrong.

The third is **handle errors where you can actually do something**. Catching an exception only to log it and rethrow at every layer produces a log full of the same failure five times. Let it propagate to a level that can retry, fall back, or tell the user something meaningful — and when you convert it to another type at a boundary, keep the original as the cause so the trace survives.

Finally, error messages are a **user interface**, whether the user is a customer or an on-call engineer at 3am. "Something went wrong" helps nobody; "could not connect to orders-db:5432 after 3 attempts (timeout 5s)" ends the investigation before it starts. Include what was attempted, what failed and the identifying values — and never include secrets. Then test the error paths: they are the code least likely to have been exercised and most likely to be broken.`,
        ensures: [
          'Validate at boundaries and fail immediately with a clear reason',
          'Catch specific error types, never blanket-catch and continue',
          'Handle errors at a level that can genuinely respond',
          'Preserve the original cause when wrapping or converting',
          'Write error messages that identify what failed and what was attempted',
          'Test failure paths as deliberately as success paths'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'An error handled well',
        loop: false,
        steps: [
          { icon: 'shield-halved', label: 'Validate at the boundary', desc: 'Reject bad input where you can name the problem' },
          { icon: 'bolt', label: 'Fail fast', desc: 'Raise immediately — do not default and continue' },
          { icon: 'arrow-up', label: 'Propagate', desc: 'Pass it up until something can actually respond' },
          { icon: 'wrench', label: 'Handle where possible', desc: 'Retry, fall back, or report meaningfully to the user' },
          { icon: 'file-lines', label: 'Log once, with context', desc: 'What was attempted, what failed, which identifiers — not the secrets' },
          { icon: 'vial', label: 'Test the path', desc: 'Assert the failure happens, and that the system stays consistent' }
        ]
      },
      example: {
        title: 'Bad habits and better ones',
        items: [
          '**Bad:** `catch (Exception e) { }` — silence; the bug is now invisible and permanent',
          '**Better:** catch the specific type, handle it, or let it propagate',
          '**Bad:** returning `null` on failure — every caller must remember to check, and one will not',
          '**Better:** raise a specific exception, or return an explicit `Optional`/`Result`',
          '**Bad:** `throw new Exception("error")` — no type to catch, no information to act on',
          '**Better:** `throw new InsufficientFunds(accountId, requested, available)`',
          '**Bad:** catching, logging and rethrowing at every layer — the same failure five times in the log',
          '**Better:** log once, where it is handled, with the full context',
          '**Bad:** `throw new ServiceError("failed")` discarding the cause — the original trace is gone',
          '**Better:** `throw new ServiceError("loading user " + id, cause)`',
          '**Bad message:** "An error occurred." **Good:** "connect to orders-db:5432 failed after 3 attempts"',
          '**Test:** assert the exception type *and* that no partial state was left behind'
        ]
      },
      takeaways: [
        '**Fail fast at the boundary.** The nearer the detection is to the cause, the cheaper the fix — and the better the message you can write.',
        '**Never swallow an exception.** Silence turns a crash you would fix today into wrong data you discover next quarter.',
        '**Catch narrowly.** A blanket catch also catches your own typos and logic errors, and hides them behind a handler meant for something else.',
        '**Handle where you can respond.** Logging and rethrowing at every level produces noise; propagate to whoever can retry, fall back, or inform the user.',
        '**Always preserve the cause.** Wrapping is fine; discarding the original stack trace deletes the only evidence of what actually happened.',
        '**Avoid null as a failure signal.** It is easy to ignore and indistinguishable from a legitimate empty result — use an exception or an explicit result type.',
        '**Error messages are a user interface.** Include what was attempted, what failed and the identifying values; exclude passwords, tokens and personal data.',
        '**Specific error types let callers respond specifically.** `InsufficientFunds` supports a real decision; a generic error forces string matching.',
        '**Test the error paths.** They run least often, are exercised least in development, and are exactly where a partially applied change leaves inconsistent state.',
        '**Ensure failure leaves things consistent.** Half-applied changes are worse than a clean failure — clean up, roll back, or make the operation retry-safe.'
      ],
      reflection: 'Find a `catch` block in your codebase that logs and continues. What happens to the data if that error occurs on a busy day? Would anyone notice — and if not, what should the block have done instead?',
      checks: [
        'Why is failing fast cheaper than defaulting and continuing?',
        'What is wrong with catching a broad exception type?',
        'Where in the stack should an error be handled?',
        'Why must you preserve the original cause when wrapping an error?',
        'What is wrong with returning null to signal failure?',
        'What belongs in an error message, and what must never be in one?',
        'What should a test of an error path assert?'
      ]
    },
    {
      id: 'review-hygiene',
      title: 'Commits & Code Review',
      blurb: 'History that explains itself, changes small enough to review properly, and feedback that is about the code.',
      whatIs: {
        text: `Version control is a communication tool, not a backup. A commit is a message to whoever runs \`git log\` or \`git blame\` in a year, usually while investigating something urgent. That makes two things matter: each commit should be **one logical change**, and its message should explain **why**.

The convention is a short imperative summary ("Add retry to the payment client"), a blank line, then a body covering what the problem was, why this approach, and anything a reader would find surprising. The diff already shows what changed; the message is where the reasoning lives. Commits that mix a refactor, a bug fix and a formatting sweep cannot be reviewed, reverted or understood separately — and the fix you need to revert next month is welded to the reformatting you do not.

The same applies to pull requests (PRs): **small ones get real reviews**. A 50-line change receives detailed comments; a 2,000-line change receives "LGTM" and a rubber stamp. Splitting the mechanical parts (renames, formatting, moves) into their own commits or PRs makes the substantive change visible instead of buried.

Review itself is a conversation with two jobs: catching problems, and spreading knowledge about the system. Good feedback is **specific and about the code** — "this will throw if \`items\` is empty" rather than "this is sloppy". Questions often work better than instructions, because the author may have a reason you cannot see from the diff. Distinguish blocking concerns from preferences, say so explicitly, and approve when something is good enough rather than identical to what you would have written. As an author, respond to everything, treat comments as information rather than judgement, and remember that the reviewer spending time on your change is doing you a favour.`,
        ensures: [
          'Make each commit one logical change with a message explaining why',
          'Keep pull requests small enough to be reviewed properly',
          'Separate mechanical changes from substantive ones',
          'Give specific, kind, actionable review feedback',
          'Mark clearly what is blocking and what is a preference',
          'Receive feedback as information about the code, not about you'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A change from commit to merge',
        loop: false,
        steps: [
          { icon: 'code-commit', label: 'One logical change', desc: 'The refactor and the fix are separate commits' },
          { icon: 'pen', label: 'Explain why', desc: 'Imperative summary, blank line, the reasoning underneath' },
          { icon: 'code-pull-request', label: 'Small pull request', desc: 'Small enough that a reviewer can actually hold it in their head' },
          { icon: 'comments', label: 'Specific feedback', desc: '"This throws when `items` is empty" — about the code, with a reason' },
          { icon: 'circle-question', label: 'Ask before insisting', desc: 'The author may know something the diff does not show' },
          { icon: 'check-double', label: 'Approve when good enough', desc: 'Not identical to what you would have written — good enough to ship' }
        ]
      },
      example: {
        title: 'History and feedback that work',
        items: [
          '**Bad commit message:** `fix stuff` — useless in six months, useless in `git blame`',
          '**Good summary:** `Add retry with backoff to the payment client`',
          '**Good body:** the timeout that caused it, why backoff and not a longer timeout, the ticket',
          '**Imperative mood:** "Add", "Fix", "Remove" — reads as what the commit does when applied',
          '**Bad commit:** a feature, a bug fix and a reformat across twelve files',
          '**Good:** three commits, each revertible on its own',
          '**Mechanical separately:** rename or reformat in its own commit so the real diff stays readable',
          '**Small PR:** 50 lines gets line-by-line comments; 2,000 gets "LGTM"',
          '**Bad feedback:** "This is bad." — no information, no action, and it is about the person',
          '**Good feedback:** "This throws if `items` is empty — should it return zero instead?"',
          '**Label it:** "Blocking: this loses data on retry" versus "Nit: naming, take it or leave it"',
          '**As an author:** respond to every comment; "good catch, fixed" is a complete reply'
        ]
      },
      takeaways: [
        '**One logical change per commit.** It is what makes a revert possible, a bisect meaningful and a review readable.',
        '**The message explains why; the diff shows what.** Six months later the reasoning is the only part you cannot reconstruct.',
        '**Imperative summary, blank line, body.** A convention worth following because tooling and every other developer expect it.',
        '**Separate mechanical changes from substantive ones.** A rename mixed into a logic change hides the logic change completely.',
        '**Small pull requests get real reviews.** Reviewer attention is finite; the size of the diff decides how much of the change actually gets examined.',
        '**Review has two purposes:** catching problems and spreading knowledge. The second is why juniors should review seniors\' code too.',
        '**Be specific and be about the code.** "This throws on empty input" is actionable; "this is sloppy" is neither.',
        '**Ask, do not decree.** The author frequently has context the diff does not show, and a question surfaces it without a standoff.',
        '**Say what is blocking.** Mixing must-fix concerns with personal preference wastes time and creates resentment; label them.',
        '**Approve at good enough.** Review is not a mechanism for making other people write code the way you would.'
      ],
      reflection: 'Run `git log --oneline -20` on your current project. How many of those messages would help someone investigating an incident? Pick the worst one and rewrite it — summary and body — as it should have been.',
      checks: [
        'What should a commit contain, and what should its message explain?',
        'Why is the imperative mood the convention for commit summaries?',
        'Why separate mechanical changes from substantive ones?',
        'Why do small pull requests get better reviews?',
        'What makes a review comment actionable?',
        'Why should you distinguish blocking comments from preferences?',
        'What are the two purposes of code review?'
      ]
    }
  ]
}
