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
        text: 'An app is several parts working together — screens, logic, data, and the APIs that connect them.',
        ensures: [
          '**Frontend:** the screens, forms, and interactions users see.',
          '**Backend:** business rules, security, and processing.',
          '**Database:** information that must persist.',
          '**API:** how the parts request and send data.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Basic app structure — the simplest possible model of a modern application.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Interacts with the app.' },
          { icon: 'window-maximize', label: 'Frontend', desc: 'Screens, forms, and interactions.' },
          { icon: 'plug', label: 'API', desc: 'The contract between components.' },
          { icon: 'gears', label: 'Backend', desc: 'Business rules and processing.' },
          { icon: 'database', label: 'Database', desc: 'Where data persists.' }
        ]
      },
      example: {
        title: 'The "Book desk" button',
        items: [
          'User taps "Book desk".',
          'The screen sends the request.',
          'The API receives it.',
          'The backend checks the desk is free.',
          'The booking is saved.'
        ]
      },
      misconceptions: [
        { wrong: 'The frontend stores all important data.', right: 'The backend and database own trusted data.' },
        { wrong: 'If the UI looks simple, the backend must be simple.', right: 'Simple screens can hide complex logic.' },
        { wrong: 'Frontend validation is enough.', right: 'The backend must re-check what it trusts.' }
      ],
      takeaways: [
        'A visible feature has many invisible parts.',
        'Trust boundaries live on the backend.',
        'APIs let the parts change independently.'
      ],
      reflection: 'Which validation belongs in the frontend, and which must be trusted on the backend?',
      checks: [
        'Which validation must live on the backend?',
        'What does an API do?',
        'Where does persistent data live?',
        'Why split frontend and backend?'
      ]
    },
    {
      id: 'api',
      title: 'APIs as Contracts',
      blurb: 'How systems communicate using defined requests, responses, payloads, statuses, and errors.',
      whatIs: {
        text: 'An API is a contract: one side asks in an agreed format, the other answers in an agreed format.',
        ensures: [
          '**Endpoint:** the address or operation being called.',
          '**Payload:** the data sent with the request.',
          '**Response:** the result the API returns.',
          '**Status:** succeeded, failed, unauthorised, or invalid.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Request and response as a contract.',
        loop: false,
        steps: [
          { icon: 'location-dot', label: 'Endpoint', desc: 'The address being called.' },
          { icon: 'box', label: 'Payload', desc: 'The data sent with the request.' },
          { icon: 'paper-plane', label: 'Request sent', desc: 'The caller asks for something.' },
          { icon: 'reply', label: 'Response returned', desc: 'The API sends a result back.' },
          { icon: 'circle-check', label: 'Status', desc: 'Did it succeed, fail, or get rejected?' }
        ]
      },
      example: {
        title: 'GET a user profile',
        items: [
          'GET /users/42/profile',
          'No body — just the user id.',
          'The app asks for the profile.',
          'Name, email, and avatar come back.',
          '200 OK — or 404 if not found.'
        ]
      },
      misconceptions: [
        { wrong: 'APIs are only for external systems.', right: 'Your own frontend and services use APIs too.' },
        { wrong: 'The caller can send anything it likes.', right: 'The contract defines the expected shape.' }
      ],
      takeaways: [
        'A stable contract lets parts evolve independently.',
        'Status tells you success, failure, or bad input.',
        'Think request, response, and error together.'
      ],
      reflection: 'Propose one GET request and one POST request for a feature. What information is needed, and what should the response return?',
      checks: [
        'What is an endpoint?',
        'What does a status code tell you?',
        'What is a payload?',
        'Give a GET and a POST example for one feature.'
      ]
    },
    {
      id: 'db',
      title: 'Databases',
      blurb: 'Where persistent information lives and why accurate data matters.',
      whatIs: {
        text: 'Databases give data a structured home so it survives after the user closes the browser.',
        ensures: [
          '**Entity:** a thing you store, like User or Booking.',
          '**Relationship:** how entities connect (a user has many bookings).',
          'Data quality matters — bad data means bad behaviour.',
          'The backend reads and writes data to complete actions.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Entities in one feature.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Who takes the action.' },
          { icon: 'chair', label: 'Desk', desc: 'The resource being booked.' },
          { icon: 'calendar-check', label: 'Booking', desc: 'Links a user to a desk and date.' },
          { icon: 'calendar-day', label: 'Event', desc: 'Something that happens in the system.' },
          { icon: 'bell', label: 'Notification', desc: 'Tells people what happened.' }
        ]
      },
      misconceptions: [
        { wrong: 'Databases are just spreadsheets.', right: 'They enforce structure, relationships, and integrity.' },
        { wrong: 'Any data model will do.', right: 'A poor model makes features hard to build and support.' }
      ],
      takeaways: [
        'Model the nouns before the screens.',
        'Relationships capture how data connects.',
        'Accurate data underpins correct behaviour.'
      ],
      reflection: 'List the entities your feature needs. Which entities relate to each other?',
      checks: [
        'What is an entity?',
        'What is a relationship?',
        'Why does the data model matter?',
        'Name three entities for a booking feature.'
      ]
    },
    {
      id: 'lifecycle',
      title: 'Request Lifecycle',
      blurb: 'How a user action travels through interface, API, backend logic, data access, and screen update.',
      whatIs: {
        text: 'Tracing a user action end-to-end reveals the many invisible steps behind one click.',
        ensures: [
          'A click triggers a chain of steps',
          'Frontend, API, backend, and database each play a part',
          'Logs and metrics can appear at every step',
          'Understanding the flow beats reading code line by line'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Request lifecycle — helps you trace how a feature works end-to-end.',
        loop: false,
        steps: [
          { icon: 'hand-pointer', label: 'User action', desc: 'A click or form submit.' },
          { icon: 'paper-plane', label: 'Frontend sends request', desc: 'Validate input and call the API.' },
          { icon: 'plug', label: 'API receives request', desc: 'The request arrives at the server.' },
          { icon: 'gears', label: 'Backend applies rules', desc: 'Business logic runs.' },
          { icon: 'database', label: 'Database read/write', desc: 'Data is fetched or saved.' },
          { icon: 'reply', label: 'Response returned', desc: 'A result travels back.' },
          { icon: 'window-maximize', label: 'Screen updates', desc: 'The user sees the outcome.' }
        ]
      },
      example: {
        title: 'Clicking "Save"',
        items: [
          'User clicks Save.',
          'The form is validated and sent.',
          'The API receives the request.',
          'The backend checks the rules.',
          'The record is written.',
          'A success result comes back.',
          'The screen shows "Saved".'
        ]
      },
      misconceptions: [
        { wrong: 'A feature can only be understood by reading code.', right: 'Tracing the data flow is often faster and clearer.' },
        { wrong: '"Success" on screen means it was saved.', right: 'The write can fail after the UI already updated.' }
      ],
      takeaways: [
        'One click hides many steps.',
        'Trace the flow to find where it breaks.',
        'Logs and metrics mark each hop.'
      ],
      reflection: 'If a user reports that the button says success but nothing is saved, which parts of the system would you investigate?',
      checks: [
        'Where might a "success but not saved" bug hide?',
        'What does the API do in the flow?',
        'Which step writes the data?',
        'Why trace data flow, not just code?'
      ]
    },
    {
      id: 'model',
      title: 'Data Modelling',
      blurb: 'Entities, relationships, validation rules, and the shape of information.',
      whatIs: {
        text: 'Features usually need data decisions, not just UI — start from the user and work out what to store.',
        ensures: [
          'Identify the user and the action',
          'Name the data entities (the nouns)',
          'Work out how entities relate',
          'Decide the validation rules'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Feature data model — features usually require data decisions, not just UI code.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Who the feature is for.' },
          { icon: 'bolt', label: 'Feature action', desc: 'What they are trying to do.' },
          { icon: 'table-list', label: 'Data entities required', desc: 'The nouns you need to store.' },
          { icon: 'diagram-project', label: 'Relationships between entities', desc: 'How those nouns connect.' },
          { icon: 'shield-halved', label: 'Validation rules', desc: 'What must always hold true.' }
        ]
      },
      misconceptions: [
        { wrong: 'The frontend stores all important data.', right: 'The database is the source of truth.' },
        { wrong: 'Data modelling is optional for small features.', right: 'Even small features make data decisions.' }
      ],
      takeaways: [
        'Start from the user action, not the schema.',
        'Nouns become entities.',
        'Rules keep data trustworthy.'
      ],
      reflection: 'For your feature: what data needs to be stored, and what could fail at each step?',
      checks: [
        'What data does your feature store?',
        'How do its entities relate?',
        'What validation rules apply?',
        'What could fail at each step?'
      ]
    },
    {
      id: 'arch',
      title: 'System Architecture',
      blurb: 'How components fit together into a simple mental model of an application.',
      whatIs: {
        text: 'Software is a set of connected components — knowing where things live is the base for everything else.',
        ensures: [
          'The frontend is what users touch',
          'The backend holds rules and processing',
          'The database persists what matters',
          'APIs connect the components'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Trace a feature through the components.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User', desc: 'Starts the interaction.' },
          { icon: 'window-maximize', label: 'Frontend', desc: 'What users see and touch.' },
          { icon: 'plug', label: 'API', desc: 'The communication layer.' },
          { icon: 'gears', label: 'Backend', desc: 'Rules and processing.' },
          { icon: 'database', label: 'Database', desc: 'Persistent storage.' },
          { icon: 'chart-line', label: 'Logs and metrics', desc: 'Evidence of what happened.' }
        ]
      },
      misconceptions: [
        { wrong: 'If the UI looks simple, the backend must be simple.', right: 'Simple screens can sit on complex systems.' },
        { wrong: 'APIs are only for external systems.', right: 'Internal components talk through APIs too.' }
      ],
      takeaways: [
        'Draw the components before debugging or designing.',
        'Every feature touches several parts.',
        'Know where each responsibility lives.'
      ],
      reflection: 'Take one feature and identify frontend, API, backend, and database responsibilities. What could fail at each step?',
      checks: [
        'What are the main components of an app?',
        'What does the backend own?',
        'Where do APIs fit?',
        'Trace one feature through the components.'
      ]
    }
  ]
}
