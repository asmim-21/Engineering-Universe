export default {
  id: 'apps',
  title: 'How Modern Applications Work',
  tone: 'c2',
  blurb: 'Frontend, backend, APIs, databases, request flow, data modelling, and architecture basics.',
  tags: ['Frontend', 'Backend', 'APIs', 'Data'],
  popups: [
    {
      id: 'fe-be',
      title: 'Frontend vs Backend',
      blurb: 'The core split between user-facing screens and trusted server-side logic.',
      whatIs: {
        text: `Almost every application is split into a **frontend** — the screens running on the user's device — and a **backend** running on servers you control. The frontend collects input and displays results; the backend applies the rules, protects the data and decides what is allowed.

The split exists because of **trust**. Anything running on a user's device can be altered by that user: a form field can be edited, a request can be replayed, a price can be changed before it is sent. So frontend checks are for helpfulness (telling someone their email looks wrong immediately), and backend checks are for correctness (refusing the booking if the desk is already taken).

The two halves talk through an **application programming interface (API)**, a defined set of requests and responses. Because the contract is stable, either side can be rewritten without the other noticing — which is how the same backend serves a web app, a mobile app and a partner integration.`,
        ensures: [
          'Say what runs on the user\'s device and what runs on the server',
          'Explain why the backend cannot trust anything the frontend sends',
          'Describe the role of the API between them',
          'Know where persistent data lives and why',
          'Decide which validation belongs on each side',
          'See why one backend can serve several frontends'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The simplest complete model of a modern application.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Interacts with the app.', purpose: 'Express an intent — book, search, save.', question: 'What is the user trying to do?' },
          { icon: 'window-maximize', label: 'Frontend', desc: 'Screens, forms, and interactions.', purpose: 'Collect input, give instant feedback, show results.', question: 'What does the user see and enter?' },
          { icon: 'plug', label: 'API', desc: 'The contract between the parts.', purpose: 'Carry requests and responses in an agreed format.', question: 'What is being requested, in what shape?' },
          { icon: 'gears', label: 'Backend', desc: 'Business rules and processing.', purpose: 'Authenticate, validate, apply rules, decide the outcome.', question: 'Is this allowed, and what should happen?' },
          { icon: 'database', label: 'Database', desc: 'Where data persists.', purpose: 'Store the facts that must outlive the request.', question: 'What must still be true tomorrow?' }
        ]
      },
      io: {
        inputs: [
          ['User intent'],
          ['Clicks', 'Form input'],
          ['Request', 'Credentials'],
          ['Routed call', 'Business rules'],
          ['Query', 'Data to write']
        ],
        outputs: [
          ['An action'],
          ['A validated request'],
          ['A routed call'],
          ['A decision', 'A result'],
          ['Stored or fetched data']
        ]
      },
      who: [
        'User',
        'Frontend',
        'API layer',
        'Backend',
        'Database'
      ],
      example: {
        title: 'The "Book desk" button',
        items: [
          'A user taps "Book desk" for Friday.',
          'The screen checks a date was chosen, then sends the request.',
          'The API receives it with the user\'s session token.',
          'The backend confirms the user is signed in and the desk is free.',
          'The booking row is written, and the desk is now taken.'
        ]
      },
      misconceptions: [
        { wrong: 'The frontend stores the important data.', right: 'The database is the source of truth; the screen shows a copy.' },
        { wrong: 'If the user interface (UI) looks simple, the backend must be simple.', right: 'A one-tap action can hide permissions, pricing and audit rules.' },
        { wrong: 'Frontend validation is enough.', right: 'Anything from a device can be forged; the backend must re-check.' },
        { wrong: 'Frontend means "easy", backend means "hard".', right: 'They are different problems, not different difficulty levels.' }
      ],
      takeaways: [
        '**The backend is the trust boundary.** Frontend validation improves the experience; backend validation makes the system correct.',
        '**Anything on the user\'s device is editable by the user.** Prices, permissions and identity claims sent from a client must be re-checked server-side.',
        '**The database is the source of truth.** What the screen shows is a snapshot that may already be stale.',
        '**The API contract lets both sides evolve.** Redesign the screens or rewrite the backend — as long as the contract holds, the other side is unaffected.',
        '**One backend, many frontends.** Web, mobile and partner integrations usually share the same rules through the same API.',
        '**Duplicate validation is normal, not waste.** The same rule on both sides serves two different purposes.',
        '**Business rules belong on the backend.** Rules implemented only in the screen are bypassed by anyone calling the API directly.',
        '**"Where does this live?" is the first debugging question.** Frontend, API, backend and database fail in very different ways.'
      ],
      reflection: 'Take a form you have built or used. Which of its checks are there to help the user, and which would let something invalid into the database if they were the only ones?',
      checks: [
        'What runs on the user\'s device, and what runs on the server?',
        'Why must the backend re-check what the frontend already validated?',
        'What does the API provide between them?',
        'Where does persistent data live?',
        'Why can one backend serve several frontends?',
        'Where do business rules belong, and why?'
      ]
    },
    {
      id: 'api',
      title: 'APIs as Contracts',
      blurb: 'How systems communicate using defined requests, responses, payloads, statuses, and errors.',
      whatIs: {
        text: `An application programming interface (API) is a **contract**: one side asks in an agreed format, the other answers in an agreed format. Both sides can change internally as much as they like, as long as the contract keeps holding.

A typical web API request has four parts: a **method** (GET to read, POST to create, PUT/PATCH to update, DELETE to remove), an **endpoint** (\`/users/42/profile\`), an optional **payload** of data, and **headers** carrying things like authentication. The response comes back with a **status code** and usually a body. The status ranges are worth memorising: 2xx succeeded, 4xx the caller got something wrong (400 bad request, 401 not authenticated, 403 not allowed, 404 not found), 5xx the server broke.

Contracts are why APIs are versioned so carefully. Adding an optional field is safe; renaming or removing one breaks every caller you cannot see. That is also why the error cases are part of the design rather than an afterthought — callers write code against your failures too.`,
        ensures: [
          'Read a request as method, endpoint, payload and headers',
          'Interpret status codes by range and by common case',
          'Explain why the contract lets both sides change independently',
          'Design the error responses, not just the happy path',
          'Understand what a breaking change is',
          'Know that internal components use APIs as much as external ones'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'One request and response, as a contract.',
        loop: false,
        steps: [
          { icon: 'location-dot', label: 'Endpoint & method', desc: 'What is being called, and how.', purpose: 'Name the resource and the operation on it.', question: 'What are we calling, and are we reading or changing?' },
          { icon: 'box', label: 'Payload & headers', desc: 'The data and credentials sent.', purpose: 'Carry the data the operation needs, plus who is asking.', question: 'What data goes with it, and who is asking?' },
          { icon: 'paper-plane', label: 'Request sent', desc: 'The caller asks for something.', purpose: 'Cross the network to the server.', question: 'Did it arrive, and how long did it take?' },
          { icon: 'gears', label: 'Server handles it', desc: 'Authenticate, validate, act.', purpose: 'Check permission, validate input, perform the operation.', question: 'Is the caller allowed, and is the input valid?' },
          { icon: 'reply', label: 'Response & status', desc: 'A result and a status code.', purpose: 'Report what happened, in the agreed shape.', question: 'Did it succeed, and what came back?' }
        ]
      },
      io: {
        inputs: [
          ['Resource', 'Operation'],
          ['Request data', 'Auth token'],
          ['Endpoint', 'Payload'],
          ['Request', 'Rules', 'Permissions'],
          ['Result or error']
        ],
        outputs: [
          ['A target endpoint'],
          ['A request body', 'Headers'],
          ['A sent request'],
          ['A decision', 'A result'],
          ['Response body', 'Status code']
        ]
      },
      who: [
        'Caller (client)',
        'Caller (client)',
        'Client, Network',
        'API / Server',
        'API / Server'
      ],
      example: {
        title: 'Reading and creating a profile',
        items: [
          '`GET /users/42/profile` — read; no body needed.',
          'Header carries the session token proving who is asking.',
          'The request crosses the network to the server.',
          'The server checks the token, then loads user 42.',
          '`200 OK` with name, email and avatar — or `404` if no such user.'
        ]
      },
      misconceptions: [
        { wrong: 'APIs are only for external systems.', right: 'Your own frontend and internal services use them constantly.' },
        { wrong: 'The caller can send whatever it likes.', right: 'The contract defines the shape; anything else is rejected.' },
        { wrong: 'A 200 response means the operation was correct.', right: 'It means the request succeeded — the body still needs checking.' },
        { wrong: 'Adding a field is always safe.', right: 'Adding optional fields is safe; renaming or removing breaks callers.' }
      ],
      takeaways: [
        '**An API is a promise about shape.** Same request, same response format — that predictability is the entire product.',
        '**Status ranges tell you who to blame first:** 4xx means the caller sent something wrong, 5xx means the server failed. That routes a bug report in seconds.',
        '**401 and 403 are different.** 401 is "I do not know who you are"; 403 is "I know, and you are not allowed".',
        '**Error responses are part of the design.** Callers write code against your failures; vague errors force them to guess.',
        '**Breaking changes are the ones callers cannot see coming** — renamed fields, removed endpoints, stricter validation. Version them or keep them additive.',
        '**GET should not change anything.** Read operations that mutate state break caching, retries and everyone\'s expectations.',
        '**Never trust the payload.** Validate every incoming field, whoever the caller claims to be.',
        '**Internal APIs deserve the same care as public ones.** "It is only our own frontend" stops being true the first time another team calls it.'
      ],
      reflection: 'Design two endpoints for one feature: one to read and one to create. What does each need in the request, what comes back, and what are the three most likely error responses?',
      checks: [
        'What are the parts of an API request?',
        'What do 2xx, 4xx and 5xx tell you?',
        'What is the difference between 401 and 403?',
        'What makes a change to an API "breaking"?',
        'Why should a GET request not change data?',
        'Why do internal APIs still need a defined contract?'
      ]
    },
    {
      id: 'db',
      title: 'Databases',
      blurb: 'Where persistent information lives and why accurate data matters.',
      whatIs: {
        text: `A database gives data a structured home so it survives after the browser closes, the server restarts and the user changes device. It is the **source of truth** the rest of the system defers to.

Most business systems use a **relational** database: data lives in tables of rows and columns, each row identified by a **primary key**, and rows link to each other through **foreign keys** (a booking row holds the id of its user and its desk). The database enforces those links, so a booking cannot point at a user who does not exist. **Document** databases store nested records instead and trade some of that enforcement for flexibility.

Two ideas matter early. **Constraints** — unique, not-null, foreign keys — are rules the database itself refuses to break, which is far stronger than remembering to check in code. And **transactions** group several changes so they all happen or none do, which is how a transfer never debits one account without crediting the other.`,
        ensures: [
          'Explain entities, rows, columns and keys in plain terms',
          'Describe how a relationship is stored using a foreign key',
          'Know what constraints enforce and why that beats checking in code',
          'Understand what a transaction guarantees',
          'Recognise why a poor data model makes features painful',
          'Know when an index matters for query speed'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The entities behind one feature, and how they connect.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Who takes the action.', purpose: 'Store the person: id, name, email.', question: 'Who is acting, and how do we identify them?' },
          { icon: 'chair', label: 'Desk', desc: 'The resource being booked.', purpose: 'Store the bookable thing: id, floor, features.', question: 'What is being booked?' },
          { icon: 'calendar-check', label: 'Booking', desc: 'Links a user to a desk and date.', purpose: 'Join the two with a date — the relationship is the row.', question: 'Who has what, and when?' },
          { icon: 'shield-halved', label: 'Constraints', desc: 'Rules the database enforces.', purpose: 'Prevent double bookings and orphaned rows.', question: 'What must never be allowed?' },
          { icon: 'bell', label: 'Notification', desc: 'Tells people what happened.', purpose: 'Record what was sent, so it is not sent twice.', question: 'Who was told, and when?' }
        ]
      },
      example: {
        title: 'Entities for a desk booking',
        items: [
          'Priya is a row in Users, identified by her id.',
          'Desk 12A is a row in Desks, on floor 2, near a window.',
          'A Booking row links Priya\'s id, desk 12A\'s id and Friday.',
          'A unique constraint on (desk, date) makes double-booking impossible.',
          'A Notification row records that the confirmation was sent.'
        ]
      },
      misconceptions: [
        { wrong: 'A database is just a spreadsheet.', right: 'It enforces structure, relationships and rules under concurrent use.' },
        { wrong: 'Any data model will do if the screens look right.', right: 'A poor model makes every later feature harder and slower.' },
        { wrong: 'Validation in code is enough.', right: 'Constraints hold even when a bug, a script or another service writes.' },
        { wrong: 'Deleting data is simple.', right: 'Related rows, history and audit rules usually make it anything but.' }
      ],
      takeaways: [
        '**Model the nouns before the screens.** Screens change constantly; the underlying entities usually do not.',
        '**A foreign key is how a relationship is stored** — and how the database refuses to let a booking reference a user who was deleted.',
        '**Constraints outrank application checks.** Code can be bypassed by another service or a manual fix; a database constraint cannot.',
        '**Transactions make multi-step changes safe.** All the steps commit together or none do, so there is no half-finished state.',
        '**Indexes trade write speed and storage for read speed.** A query scanning a million rows and one using an index differ by orders of magnitude.',
        '**Bad data outlives bad code.** A logic bug is deployed away in an hour; the wrong rows it wrote can take months to unpick.',
        '**Deletion is rarely simple.** Related records, legal retention and audit trails usually mean "mark as removed" rather than "delete".',
        '**Relational for connected business data, document for flexible nested data.** Pick by shape and by what must be enforced.'
      ],
      reflection: 'For a feature you know, list the entities and draw the links. Now ask: which rule would you want the database itself to refuse to break, no matter what code was written?',
      checks: [
        'What is an entity, and what is a row?',
        'How is a relationship stored between two tables?',
        'Why is a database constraint stronger than a check in code?',
        'What does a transaction guarantee?',
        'What does an index speed up, and what does it cost?',
        'Why is bad data more expensive than bad code?'
      ]
    },
    {
      id: 'lifecycle',
      title: 'Request Lifecycle',
      blurb: 'How a user action travels through interface, API, backend logic, data access, and screen update.',
      whatIs: {
        text: `One click sets off a chain of steps across several systems. Tracing that chain is the single most useful skill for understanding an unfamiliar codebase, because it tells you **where** to look before you read a line of code.

The path is consistent: the user acts, the frontend validates and sends a request, the application programming interface (API) authenticates and routes it, the backend applies rules, the database reads or writes, a response travels back, and the screen updates. Each hop can fail on its own terms — network timeouts, rejected permissions, constraint violations, slow queries — and each hop can be observed through logs, metrics and traces.

That observability is what turns "it does not work" into a diagnosis. If the frontend never sent the request, the backend logs are silent; if the write failed after the screen updated, the database is the only place that knows. Knowing the chain tells you which evidence to look at first.`,
        ensures: [
          'Trace a click from screen to database and back',
          'Name what can fail at each hop',
          'Use logs and metrics to locate a failure rather than guessing',
          'Explain why a screen can show success when nothing was saved',
          'Understand where latency accumulates in the chain',
          'Read a feature by following its data flow, not line by line'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Request lifecycle — trace it to find where a feature breaks.',
        loop: false,
        steps: [
          { icon: 'hand-pointer', label: 'User action', desc: 'A click or form submit.', purpose: 'Start the interaction from the interface.', question: 'What did the user actually do?' },
          { icon: 'paper-plane', label: 'Frontend sends request', desc: 'Validate input and call the API.', purpose: 'Check the obvious problems, then send the request.', question: 'Was a request sent at all?' },
          { icon: 'plug', label: 'API receives it', desc: 'Authenticate and route.', purpose: 'Identify the caller and route to the right handler.', question: 'Did it arrive, and was it allowed?' },
          { icon: 'gears', label: 'Backend applies rules', desc: 'Business logic runs.', purpose: 'Validate properly and decide the outcome.', question: 'Which rules ran, and what did they decide?' },
          { icon: 'database', label: 'Database read/write', desc: 'Data is fetched or saved.', purpose: 'Persist or retrieve the data, inside a transaction if needed.', question: 'Did the write actually commit?' },
          { icon: 'reply', label: 'Response returned', desc: 'A result and status travel back.', purpose: 'Tell the caller what happened.', question: 'Success, failure, or something in between?' },
          { icon: 'window-maximize', label: 'Screen updates', desc: 'The user sees the outcome.', purpose: 'Reflect the real result, including errors.', question: 'Does the screen match reality?' }
        ]
      },
      io: {
        inputs: [
          ['User intent', 'Screen state'],
          ['Form input'],
          ['Request', 'Token'],
          ['Validated request', 'Rules'],
          ['Query or write'],
          ['Result', 'Status'],
          ['API response']
        ],
        outputs: [
          ['A user interface (UI) event'],
          ['An API request'],
          ['A routed, authenticated call'],
          ['A decision'],
          ['Committed or fetched data'],
          ['An API response'],
          ['An updated screen']
        ]
      },
      who: [
        'User',
        'Frontend',
        'API layer',
        'Backend',
        'Database',
        'Backend, API',
        'Frontend, User'
      ],
      example: {
        title: 'Clicking "Save"',
        items: [
          'The user clicks Save on an edited profile.',
          'The form checks required fields, then posts the change.',
          'The API validates the session and routes to the profile handler.',
          'The backend checks the user may edit this profile.',
          'The row is updated inside a transaction.',
          'A 200 response comes back with the saved values.',
          'The screen shows "Saved" — using what came back, not what was typed.'
        ]
      },
      misconceptions: [
        { wrong: 'A feature can only be understood by reading code.', right: 'Following the data flow is usually faster and clearer.' },
        { wrong: '"Success" on screen means it was saved.', right: 'A screen that updates optimistically can be showing a lie.' },
        { wrong: 'Slowness must be the database.', right: 'Latency accumulates at every hop; measure before accusing.' },
        { wrong: 'If the backend logged nothing, nothing happened.', right: 'It may mean the request never left the frontend.' }
      ],
      takeaways: [
        '**One click hides many steps.** Knowing the sequence tells you where to look before you read any code.',
        '**Each hop fails in its own way:** network timeout, auth rejection, validation error, constraint violation, slow query.',
        '**Trace before you theorise.** Logs at each hop turn "it is broken" into "it stopped between the API and the database".',
        '**The screen can lie.** Interfaces that update before confirmation will show success for a write that failed.',
        '**Latency is cumulative.** A page waiting on five sequential calls is as slow as their sum, however fast each one looks.',
        '**Silence is evidence too.** No backend log usually means the request never arrived — check the frontend and the network first.',
        '**A correlation id makes tracing possible.** One identifier carried through every hop turns a scattered pile of logs into a story.',
        '**Show the user what actually happened.** Reflect the server\'s response, and say something useful when it fails.'
      ],
      reflection: 'A user reports "it says saved but my change is gone". Walk the chain: which hop could produce that symptom, and what evidence would confirm or eliminate each one?',
      checks: [
        'What are the steps between a click and a saved record?',
        'What can fail at each hop?',
        'Where might a "success but not saved" bug hide?',
        'Why does the absence of a backend log matter?',
        'Where does latency come from in a slow page?',
        'What does a correlation id give you?'
      ]
    },
    {
      id: 'model',
      title: 'Data Modelling',
      blurb: 'Entities, relationships, validation rules, and the shape of information.',
      whatIs: {
        text: `Most features are data decisions wearing a user interface. Before drawing a screen, work out **who** the feature is for, **what action** they take, and **what facts** must be stored for that action to mean anything later.

The method is mechanical. Write a sentence describing the feature, underline the nouns — those become **entities**. Then decide how they relate: one-to-many (an employee has many bookings), many-to-many (an employee attends many events, an event has many attendees; that needs a joining entity). Finally, write the **rules that must always hold** — one RSVP per person per event, an end date after a start date, a quantity above zero.

Getting this roughly right early pays for years. Screens are cheap to change; a data model with the wrong shape spreads into every query, every application programming interface (API) response and every report built on top of it.`,
        ensures: [
          'Derive entities from the nouns in a feature description',
          'Distinguish one-to-many from many-to-many relationships',
          'Recognise when a joining entity is needed',
          'Write the rules that must always hold true',
          'Decide what belongs in the model rather than only on the screen',
          'See why a wrong model is expensive to change later'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Feature data model — from a user action to enforceable rules.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Who the feature is for.', purpose: 'Identify whose problem this solves.', question: 'Who is this for?' },
          { icon: 'bolt', label: 'Feature action', desc: 'What they are trying to do.', purpose: 'State the action in one sentence.', question: 'What are they doing, exactly?' },
          { icon: 'table-list', label: 'Entities', desc: 'The nouns you need to store.', purpose: 'Underline the nouns; each becomes something you store.', question: 'What facts must survive this request?' },
          { icon: 'diagram-project', label: 'Relationships', desc: 'How those nouns connect.', purpose: 'Decide one-to-many or many-to-many, and add joins.', question: 'How many of each connects to how many?' },
          { icon: 'shield-halved', label: 'Rules', desc: 'What must always hold true.', purpose: 'Write the invariants the data must never violate.', question: 'What must never be allowed to happen?' }
        ]
      },
      example: {
        title: 'Modelling event RSVPs',
        items: [
          'The feature is for employees.',
          '"An employee responds to an invitation for a social event."',
          'Entities: Employee, Event, RSVP.',
          'Employee–Event is many-to-many, so RSVP is the joining entity.',
          'Rule: one RSVP per employee per event; no RSVP after the event.'
        ]
      },
      io: {
        inputs: [
          ['Feature goal'],
          ['User need'],
          ['Feature sentence'],
          ['Entity list'],
          ['Entities', 'Business rules']
        ],
        outputs: [
          ['The target user'],
          ['A defined action'],
          ['Entities and attributes'],
          ['A relationship map'],
          ['Constraints', 'Validation rules']
        ]
      },
      who: [
        'Engineer, Business Analyst',
        'Engineer, Product Owner',
        'Engineer',
        'Engineer, Architect',
        'Engineer, Business Analyst'
      ],
      misconceptions: [
        { wrong: 'The frontend can own the important data.', right: 'The database is the source of truth for everyone.' },
        { wrong: 'Small features do not need modelling.', right: 'Even a toggle is a fact someone will later query and report on.' },
        { wrong: 'Many-to-many just needs another column.', right: 'It needs a joining entity, which usually carries data of its own.' },
        { wrong: 'You can fix the model later.', right: 'By then the queries, APIs and reports all depend on its shape.' }
      ],
      takeaways: [
        '**Start from the user action, not the schema.** The sentence describing what someone does contains the model.',
        '**Nouns become entities; verbs usually become relationships.** It is a crude method that works surprisingly often.',
        '**Many-to-many always needs a joining entity** — and that entity is usually where the interesting data lives (the RSVP status, the booking date, the order quantity).',
        '**Write the invariants down.** "One booking per desk per day" is testable, enforceable, and otherwise gets forgotten.',
        '**Model what happened, not just the current state.** Storing the event as well as the outcome is what makes history, audit and analytics possible.',
        '**Names in the model become names everywhere:** in code, in APIs, in reports and in conversations. Choose them with the business, not alone.',
        '**A wrong model is expensive to change** because everything above it — queries, endpoints, dashboards — assumes its shape.',
        '**Ask what must never be allowed.** The answers become constraints, and constraints are what keep data trustworthy under pressure.'
      ],
      reflection: 'Write one sentence describing a feature you know. Underline the nouns, sketch the links, then name the one rule that must never be broken. Which rule would you enforce in the database itself?',
      checks: [
        'How do you find the entities in a feature?',
        'What is the difference between one-to-many and many-to-many?',
        'Why does many-to-many need a joining entity?',
        'What is an invariant, and where should it be enforced?',
        'Why store events as well as current state?',
        'Why is a wrong data model expensive to fix later?'
      ]
    },
    {
      id: 'arch',
      title: 'System Architecture',
      blurb: 'How components fit together into a simple mental model of an application.',
      whatIs: {
        text: `Architecture is the arrangement of components and the decisions that are hard to reverse: what runs where, what talks to what, and where each responsibility lives.

The base model is small — client, application programming interface (API), backend service, database, plus the supporting cast most systems grow: a **cache** for expensive reads, a **queue** for work that need not happen right now, a **load balancer** spreading traffic across several copies, and **logging, metrics and tracing** so you can see what happened. Understanding those seven pieces covers a very large share of real systems.

The recurring choice is **one deployable unit or many**. A **monolith** keeps everything in a single application: simpler to build, test and run, and the right default for most teams. **Microservices** split it into independently deployable services, which buys independent scaling and release at the cost of network calls, distributed failure and much harder debugging. Neither is more advanced than the other; the question is which problem you actually have.`,
        ensures: [
          'Name the common components and what each is for',
          'Explain what a cache, a queue and a load balancer each solve',
          'Describe the trade-off between a monolith and microservices',
          'Say where a given responsibility should live',
          'Understand why observability is part of the architecture',
          'Sketch a system before debugging or designing changes to it'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The components a request passes through in a typical system.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User & client', desc: 'Starts the interaction.', purpose: 'Browser or mobile app: the untrusted edge.', question: 'Who initiates, and on what device?' },
          { icon: 'scale-balanced', label: 'Load balancer', desc: 'Spreads traffic across copies.', purpose: 'Distribute requests and route around unhealthy instances.', question: 'Which instance should handle this?' },
          { icon: 'plug', label: 'API layer', desc: 'The entry point to your services.', purpose: 'Authenticate, rate-limit, route.', question: 'Who is asking, and where does it go?' },
          { icon: 'gears', label: 'Backend service', desc: 'Rules and processing.', purpose: 'Own the business logic for its part of the domain.', question: 'What decides the outcome here?' },
          { icon: 'database', label: 'Data stores', desc: 'Database plus cache.', purpose: 'Persist the truth; cache the expensive reads.', question: 'What is stored, and what is a fast copy?' },
          { icon: 'chart-line', label: 'Observability', desc: 'Logs, metrics, traces.', purpose: 'Make behaviour and failure visible after the fact.', question: 'What actually happened, and how do we know?' }
        ]
      },
      example: {
        title: 'Tracing "Book desk" through the system',
        items: [
          'A user taps "Book desk" in the mobile app.',
          'The load balancer sends the request to one of three instances.',
          'The API validates the session and routes to the booking service.',
          'The service checks availability and applies the booking rules.',
          'The database stores the booking; the availability cache is invalidated.',
          'Logs, latency metrics and a trace id record the whole request.'
        ]
      },
      io: {
        inputs: [
          ['User intent', 'Device'],
          ['Incoming requests'],
          ['Request', 'Credentials'],
          ['Routed call', 'Rules'],
          ['Query', 'Write'],
          ['Events', 'Timings', 'Errors']
        ],
        outputs: [
          ['An action'],
          ['A request on a healthy instance'],
          ['An authenticated, routed call'],
          ['A decision', 'A result'],
          ['Stored data', 'Fast reads'],
          ['Logs', 'Metrics', 'Traces']
        ]
      },
      who: [
        'User',
        'Platform, Infrastructure',
        'API layer',
        'Backend service',
        'Database, Cache',
        'Monitoring, Engineers'
      ],
      misconceptions: [
        { wrong: 'If the user interface (UI) looks simple, the system must be simple.', right: 'A single screen often sits on many services.' },
        { wrong: 'Microservices are the advanced, correct choice.', right: 'They swap in-process calls for network problems; most teams need a good monolith.' },
        { wrong: 'A cache is a free speed-up.', right: 'Caching adds a second copy of the truth, which can be stale or wrong.' },
        { wrong: 'Monitoring is an add-on after launch.', right: 'A system you cannot observe is one you cannot operate.' }
      ],
      takeaways: [
        '**Draw the system before changing it.** Boxes and arrows on paper prevent more incidents than any tool.',
        '**Each component earns its place by solving one problem:** a load balancer for capacity and failover, a cache for expensive reads, a queue for work that can wait.',
        '**Queues turn "do it now" into "do it soon".** They absorb spikes and survive downstream outages, at the cost of eventual rather than immediate results.',
        '**Caching creates a second copy of the truth.** Everything hard about caching is deciding when that copy is wrong.',
        '**Monolith versus microservices is a trade, not a ladder.** Distribution buys independent scaling and deployment, and charges you in latency, partial failure and debugging difficulty.',
        '**Network calls fail in ways function calls do not** — timeouts, retries, duplicates, partial success. Distributed systems make those the normal case.',
        '**Observability is part of the design.** Logs, metrics and traces are how you answer questions you did not anticipate.',
        '**Architecture is the decisions that are expensive to reverse.** Spend the thinking time there, and stay flexible about everything else.'
      ],
      reflection: 'Sketch a system you have used as boxes and arrows. Where would you add a cache, and what would go wrong the first time the cached copy was out of date?',
      checks: [
        'What are the main components a request passes through?',
        'What problem does a load balancer solve?',
        'What does a queue buy you, and what does it cost?',
        'What is genuinely hard about caching?',
        'What do microservices buy, and what do they charge?',
        'Why is observability part of the architecture rather than an extra?'
      ]
    }
  ]
}
