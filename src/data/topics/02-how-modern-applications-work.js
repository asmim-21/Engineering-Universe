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
      concept:
        'An application is rarely one single thing. The frontend is what users interact with. The backend handles business rules and processing. The database stores information that needs to persist. APIs are the communication points between components. When a user clicks "Book desk", the frontend displays the button, the API receives the request, the backend checks rules such as availability, and the database stores the booking.',
      points: [
        '**Frontend:** screens, forms, buttons, user interactions, validation that improves user experience.',
        '**Backend:** business logic, validation that must be trusted, security checks, processing, communication with databases or other systems.',
        '**Database:** persistent data such as users, bookings, orders, events, permissions, and audit information.',
        '**API:** a defined way for the frontend or another system to request or send information.'
      ],
      visual: {
        kind: 'flow',
        label: 'Basic app structure — the simplest possible model of a modern application.',
        steps: ['User', 'Frontend', 'API', 'Backend', 'Database']
      },
      mistakes: ['The frontend stores all important data', 'If the UI looks simple, the backend must also be simple'],
      reflection: 'Which validation belongs in the frontend, and which must be trusted on the backend?'
    },
    {
      id: 'api',
      title: 'APIs as Contracts',
      blurb: 'How systems communicate using defined requests, responses, payloads, statuses, and errors.',
      concept:
        'An API is a contract between systems. One side makes a request in an expected format; the other side returns a response in an expected format. This contract lets different parts of the system change independently if the contract remains stable. You do not need detailed REST theory yet, only request, response, endpoint, payload, status, and error at a high level.',
      points: [
        '**Request:** what the caller asks for.',
        '**Endpoint:** the address or operation being called, such as GET profile or POST booking.',
        '**Payload:** the data sent with the request.',
        '**Response:** the result returned by the API.',
        '**Status:** whether the request succeeded, failed, was unauthorised, or was invalid.'
      ],
      visual: {
        kind: 'flow',
        label: 'Request and response as a contract.',
        steps: ['Endpoint', 'Payload', 'Request sent', 'Response returned', 'Status']
      },
      mistakes: ['APIs are only for external systems'],
      reflection: 'Propose one GET request and one POST request for a feature. What information is needed, and what should the response return?'
    },
    {
      id: 'db',
      title: 'Databases',
      blurb: 'Where persistent information lives and why accurate data matters.',
      concept:
        'Application data needs to live somewhere after the user closes the browser. Databases provide structured storage and retrieval. You only need a high-level view here: entities, relationships, and why the data model matters. For example, a desk booking feature may involve Users, Desks, Bookings, Offices, and Dates. If the data model is poor, the feature becomes harder to build and support.',
      points: [
        '**Entity:** a thing the system stores, such as User, Booking, Desk, Event.',
        '**Relationship:** how entities connect, such as one user has many bookings.',
        'Data quality matters because incorrect data can cause incorrect behaviour.',
        'Backend code often reads from and writes to databases to complete user actions.'
      ],
      visual: {
        kind: 'flow',
        label: 'Entities in one feature.',
        steps: ['User', 'Desk', 'Booking', 'Event', 'Notification']
      },
      mistakes: ['Databases are just spreadsheets'],
      reflection: 'List the entities your feature needs. Which entities relate to each other?'
    },
    {
      id: 'lifecycle',
      title: 'Request Lifecycle',
      blurb: 'How a user action travels through interface, API, backend logic, data access, and screen update.',
      concept:
        'The most valuable exercise is tracing a user action end-to-end. Start with a button click and work out what must happen next. This shows that a visible UI feature can involve many invisible steps.',
      points: [
        'User clicks a button.',
        'Frontend validates basic input and sends API request.',
        'API receives the request.',
        'Backend applies business rules.',
        'Backend reads or writes data.',
        'API returns a response.',
        'Frontend updates the screen.',
        'Logs or metrics may be produced along the way.'
      ],
      visual: {
        kind: 'flow',
        label: 'Request lifecycle — helps you trace how a feature works end-to-end.',
        steps: ['User action', 'Frontend sends request', 'API receives request', 'Backend applies rules', 'Database read/write', 'Response returned', 'Screen updates']
      },
      mistakes: ['A feature can be understood only by reading code, rather than by tracing data flow'],
      reflection: 'If a user reports that the button says success but nothing is saved, which parts of the system would you investigate?'
    },
    {
      id: 'model',
      title: 'Data Modelling',
      blurb: 'Entities, relationships, validation rules, and the shape of information.',
      concept:
        'Features usually require data decisions, not just UI code. Start from the user and the action they take, then work out what needs to be stored, how those things connect, and which rules must hold true.',
      points: [
        'Identify the user group and the feature action.',
        'Name the data entities required — look for the nouns.',
        'Work out the relationships between entities.',
        'Decide the validation rules.',
        'A poor data model makes the feature harder to build and support.'
      ],
      visual: {
        kind: 'flow',
        label: 'Feature data model — features usually require data decisions, not just UI code.',
        steps: ['User', 'Feature action', 'Data entities required', 'Relationships between entities', 'Validation rules']
      },
      mistakes: ['The frontend stores all important data'],
      reflection: 'For your feature: what data needs to be stored, and what could fail at each step?'
    },
    {
      id: 'arch',
      title: 'System Architecture',
      blurb: 'How components fit together into a simple mental model of an application.',
      concept:
        'Modern software is a set of connected components. A user-facing feature usually involves UI, APIs, business logic, data, and sometimes other systems. Being able to draw that as a sequence of components is the foundation for everything else — debugging, design, testing and deployment all rely on knowing where things live.',
      points: [
        'The frontend is what users interact with.',
        'The backend handles business rules and processing.',
        'The database stores information that needs to persist.',
        'APIs are the communication points between components.',
        'Logs or metrics may be produced along the way.'
      ],
      visual: {
        kind: 'flow',
        label: 'Trace a feature through the components.',
        steps: ['User', 'Frontend', 'API', 'Backend', 'Database', 'Logs and metrics']
      },
      mistakes: ['If the UI looks simple, the backend must also be simple', 'APIs are only for external systems'],
      reflection: 'Take one feature and identify frontend, API, backend, and database responsibilities. What could fail at each step?'
    }
  ]
}
