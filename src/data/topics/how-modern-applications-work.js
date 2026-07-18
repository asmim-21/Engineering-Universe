export default {
  id: 'how-modern-applications-work',
  title: 'How Modern Applications Work',
  color: 'blue',
  titleLines: ['HOW MODERN', 'APPLICATIONS WORK'],
  tagline: 'See how it all fits together',
  focus:
    'Frontend, backend, APIs, databases, request flow, data modelling, and architecture basics.',
  trueLesson:
    'Modern software is a set of connected components. A user-facing feature usually involves UI, APIs, business logic, data, and sometimes other systems.',
  orbit: [
    { label: 'Components', icon: 'puzzle-piece' },
    { label: 'APIs & data flow', icon: 'right-left' },
    { label: 'Databases', icon: 'database' },
    { label: 'Architecture basics', icon: 'sitemap' }
  ],
  clusters: [
    {
      title: 'The Components',
      note: 'An application is rarely one single thing.',
      popups: ['frontend-vs-backend', 'system-architecture']
    },
    {
      title: 'The Conversation',
      note: 'Systems talk through defined contracts.',
      popups: ['apis-as-contracts', 'request-lifecycle']
    },
    {
      title: 'The Data',
      note: 'Information has to live somewhere.',
      popups: ['databases', 'data-modelling']
    }
  ],
  popups: [
    {
      id: 'frontend-vs-backend',
      title: 'Frontend vs Backend',
      blurb: 'The split between user-facing screens and trusted server-side logic.',
      concept: [
        'The frontend is what users interact with. The backend handles business rules and processing. The database stores what must persist. APIs are the communication points between them.',
        'When a user clicks "Book desk", the frontend shows the button, the API receives the request, the backend checks rules such as availability, and the database stores the booking.'
      ],
      visual: {
        kind: 'list',
        title: 'Who is responsible for what',
        steps: [
          'Frontend — screens, forms, buttons, validation that improves experience',
          'Backend — business logic, validation that must be trusted, security checks',
          'Database — persistent data: users, bookings, orders, permissions, audit',
          'API — a defined way to request or send information'
        ],
        purpose: 'Frontend validation is a courtesy. Backend validation is the rule.'
      },
      mistakes: [
        'Assuming the frontend stores all the important data.',
        'Trusting frontend validation as a security control.',
        'Assuming a simple-looking UI means a simple backend.'
      ],
      reflection:
        'A user reports the button says success but nothing is saved. Which layer would you investigate first, and why?'
    },
    {
      id: 'apis-as-contracts',
      title: 'APIs as Contracts',
      blurb: 'Requests, responses, payloads, statuses, and errors.',
      concept: [
        'An API is a contract between systems. One side makes a request in an expected format; the other returns a response in an expected format. That contract lets each side change independently as long as the contract holds.'
      ],
      visual: {
        kind: 'list',
        title: 'The vocabulary',
        steps: [
          'Request — what the caller asks for',
          'Endpoint — the address or operation, e.g. GET profile, POST booking',
          'Payload — the data sent with the request',
          'Response — the result returned',
          'Status — succeeded, failed, unauthorised, or invalid'
        ],
        purpose: 'You do not need REST theory yet. You need request, response, and status.'
      },
      mistakes: [
        'Thinking APIs are only for external systems.',
        'Changing a response shape without considering who depends on it.',
        'Returning "success" when the underlying write actually failed.'
      ],
      reflection:
        'Design one GET and one POST for a feature you know. What does each return when things go wrong?'
    },
    {
      id: 'databases',
      title: 'Databases',
      blurb: 'Where persistent information lives and why accurate data matters.',
      concept: [
        'Application data needs to live somewhere after the user closes the browser. Databases provide structured storage and retrieval, and the backend reads from and writes to them to complete user actions.',
        'Data quality matters because incorrect data causes incorrect behaviour, long after the code that wrote it has been forgotten.'
      ],
      visual: {
        kind: 'flow',
        title: 'Basic app structure',
        steps: ['User', 'Frontend', 'API', 'Backend', 'Database'],
        purpose: 'Creates the simplest possible model of a modern application.'
      },
      mistakes: [
        'Thinking databases are just spreadsheets.',
        'Ignoring how data will be queried until after the schema is fixed.',
        'Fixing bad data by hand instead of fixing what produced it.'
      ],
      reflection:
        'If your feature’s data model were wrong, how would you find out — and how long would that take?'
    },
    {
      id: 'request-lifecycle',
      title: 'Request Lifecycle',
      blurb: 'How a user action travels through interface, API, logic, data, and back.',
      concept: [
        'Tracing a user action end-to-end is the single most valuable exercise for understanding a system. A visible UI feature usually involves many invisible steps — and every one of them can fail.'
      ],
      visual: {
        kind: 'flow',
        title: 'Request lifecycle',
        steps: [
          'User action',
          'Frontend sends request',
          'API receives request',
          'Backend applies rules',
          'Database read/write',
          'Response returned',
          'Screen updates'
        ],
        purpose: 'Helps you trace how a feature works end-to-end.'
      },
      mistakes: [
        'Trying to understand a feature only by reading code rather than tracing data flow.',
        'Forgetting that logs and metrics are produced along the way — and are free evidence.',
        'Assuming a failure is in the layer you happen to know best.'
      ],
      reflection:
        'Pick one step in the lifecycle. What would the user see if only that step failed?'
    },
    {
      id: 'data-modelling',
      title: 'Data Modelling',
      blurb: 'Entities, relationships, validation rules, and the shape of information.',
      concept: [
        'Features usually require data decisions, not just UI code. A desk booking feature may involve Users, Desks, Bookings, Offices, and Dates. If the model is poor, the feature becomes harder to build and support.'
      ],
      visual: {
        kind: 'flow',
        title: 'Feature data model',
        steps: [
          'User',
          'Feature action',
          'Data entities required',
          'Relationships between entities',
          'Validation rules'
        ],
        purpose: 'Introduces the idea that features require data decisions, not just UI code.'
      },
      mistakes: [
        'Modelling the screen instead of the domain.',
        'Ignoring relationships until the first awkward query.',
        'Putting validation only where it is convenient.'
      ],
      reflection:
        'Name the nouns in your feature. Which ones are entities, and which are just fields?'
    },
    {
      id: 'system-architecture',
      title: 'System Architecture',
      blurb: 'How components fit together into a simple mental model.',
      concept: [
        'Architecture at this level is not about patterns with names. It is about being able to draw the boxes, the arrows between them, and the boundary where responsibility changes hands.'
      ],
      visual: {
        kind: 'flow',
        title: 'Service boundaries',
        steps: [
          'User-facing layer',
          'API boundary',
          'Business logic',
          'Data layer',
          'Other systems & integrations'
        ],
        purpose: 'A boundary is where a contract lives — and where failures get interesting.'
      },
      mistakes: [
        'Drawing architecture with no arrows — the arrows are where the risk is.',
        'Assuming every system is under your team’s control.',
        'Adding components before understanding the ones that exist.'
      ],
      reflection:
        'Draw your system in five boxes. Which box would you least like to be paged about at 2am?'
    }
  ]
}
