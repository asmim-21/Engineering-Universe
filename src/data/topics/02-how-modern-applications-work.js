export default {
  id: "how-modern-applications-work",
  title: "How Modern Applications Work",
  number: 2,
  color: "blue",
  tagline: "Let's peek under the hood",
  focus: "Application structure, frontend/backend, APIs, databases, data flow, and basic architecture.",
  trueLesson:
    "Modern software is a set of connected components. A user-facing feature usually involves UI, APIs, business logic, data, and sometimes other systems.",

  sections: [
    {
      title: "APP AT A GLANCE",
      type: "architecture",
      components: [
        { icon: "👤", label: "User", note: "Clicks, types, interacts" },
        { icon: "🎨", label: "FRONTEND", note: "What the user sees & uses" },
        { icon: "🔌", label: "API (CONTRACT)", note: "Defines how requests are made & what responses look like" },
        { icon: "⚙️", label: "BACKEND", note: "Contains business logic. Processes requests." },
        { icon: "🗄️", label: "DATABASE", note: "Stores data so it can be used later" },
      ],
    },
    {
      title: "DATA ON THE MOVE",
      type: "data-flow",
      flow: [
        "① User interacts with the app",
        "② Frontend sends a request to the API",
        "③ Backend processes the request",
        "④ Database is read or updated",
        "⑤ Response travels back to the user",
      ],
    },
    {
      title: "KEY CONCEPTS",
      type: "concepts",
      items: [
        {
          title: "APIs",
          desc: "Allow different systems to talk in a predictable way. Think: contracts between teams.",
        },
        {
          title: "DATA",
          desc: "Data has a life cycle: created, stored, used, updated, deleted. Quality matters!",
        },
        {
          title: "ARCHITECTURE",
          desc: "Choices we make about structure affect scalability, performance, maintenance.",
        },
        {
          title: "SECURITY",
          desc: "Every layer needs to be secure. Validate inputs. Protect data. Follow the rules.",
        },
        {
          title: "PERFORMANCE",
          desc: "Users expect speed & reliability. Measure, monitor, and improve continuously.",
        },
      ],
    },
    {
      title: "ANALOGY CORNER",
      type: "analogy",
      analogies: [
        {
          system: "Frontend",
          analogy: "Storefront",
          note: "(what users see)",
        },
        {
          system: "Backend",
          analogy: "Kitchen",
          note: "(does the work)",
        },
        {
          system: "API",
          analogy: "Waiter",
          note: "(takes & brings back)",
        },
        {
          system: "Database",
          analogy: "Library",
          note: "(stores information)",
        },
      ],
    },
    {
      title: "THINK ABOUT...",
      type: "prompts",
      prompts: [
        "What happens when the Internet is slow?",
        "Where might an error occur in this flow?",
        "How would you add a new feature?",
      ],
    },
  ],

  popups: [
    {
      id: "frontend-backend",
      title: "Frontend vs Backend",
      blurb: "The core split between user-facing screens and trusted server-side logic.",
      concept:
        "Frontend is what users interact with—screens, forms, buttons, interactions. Backend is where the real work happens: business logic, validation, security, and data processing. They communicate through APIs.",
      visual: {
        kind: "columns",
        title: "Frontend & Backend",
        left: {
          heading: "Frontend",
          items: [
            "Screens & layouts",
            "User interactions",
            "Validation for UX",
            "Looks pretty",
          ],
        },
        right: {
          heading: "Backend",
          items: [
            "Business logic",
            "Trusted validation",
            "Security checks",
            "Works right",
          ],
        },
        purpose: "Both are essential; they serve different purposes.",
      },
      mistakes: [
        "Putting business logic in the frontend where users can see it.",
        "Trusting frontend validation as your only security check.",
        "Building backend features without considering the frontend experience.",
      ],
      reflection:
        "For a feature you know, where does the logic live? Could a user break it by using developer tools?",
    },
    {
      id: "apis-contracts",
      title: "APIs as Contracts",
      blurb: "How systems communicate using defined requests, responses, payloads, statuses, and errors.",
      concept: [
        "An API is a contract between systems. Frontend asks for something in a specific format, backend promises to return something in a specific format.",
        "This contract lets different parts of the system change independently as long as the contract stays stable.",
      ],
      visual: {
        kind: "flow",
        title: "API Request Lifecycle",
        steps: [
          "Request: What the caller asks for",
          "Endpoint: The address or operation",
          "Payload: The data sent with the request",
          "Response: The result returned",
          "Status: Success, fail, unauthorized, or invalid",
        ],
        purpose: "API contracts make systems flexible and team-friendly.",
      },
      mistakes: [
        "Changing the API contract without warning consumers.",
        "Trusting the API status code alone without reading the response body.",
        "Building separate APIs for frontend and backend instead of one contract.",
      ],
      reflection:
        "Design one GET and one POST request for a feature you know. What data is needed? What should return?",
    },
    {
      id: "databases",
      title: "Databases",
      blurb: "Where persistent information lives and why accurate data matters.",
      concept: [
        "Application data needs to live somewhere after the user closes the browser. Databases provide structured storage and retrieval.",
        "Poor data models make features harder to build and support. Good data models make work faster and safer.",
      ],
      visual: {
        kind: "list",
        title: "Data Concepts",
        steps: [
          "Entity: A thing the system stores (User, Booking, Desk)",
          "Relationship: How entities connect (one user has many bookings)",
          "Validation: Rules that keep data correct",
          "Quality: Accurate data is essential for correct behaviour",
        ],
        purpose: "Data shapes what your system can do.",
      },
      mistakes: [
        "Building features without thinking about data structure first.",
        "Storing data in the wrong place or format.",
        "Ignoring data validation until bugs appear in production.",
      ],
      reflection:
        "For a feature you know, what entities would you need? How do they relate? What rules keep the data correct?",
    },
    {
      id: "request-lifecycle",
      title: "Request Lifecycle",
      blurb: "How a user action travels through interface, API, backend logic, data access, and screen update.",
      concept:
        "The most valuable exercise is tracing a user action end-to-end. Start with a button click and follow it all the way through.",
      visual: {
        kind: "flow",
        title: "User Action to Screen Update",
        steps: [
          "User clicks a button",
          "Frontend validates & sends API request",
          "API receives the request",
          "Backend applies business rules",
          "Backend reads or writes data",
          "API returns a response",
          "Frontend updates the screen",
          "Logs or metrics are produced",
        ],
        purpose: "A visible feature involves many invisible steps.",
      },
      mistakes: [
        "Only testing the happy path.",
        "Assuming something failed without checking logs.",
        "Not validating at both frontend and backend.",
      ],
      reflection:
        "Pick a feature. Trace one user action from click to screen update. What could fail at each step?",
    },
    {
      id: "data-modelling",
      title: "Data Modelling",
      blurb: "Entities, relationships, validation rules, and the shape of information.",
      concept: [
        "Before coding, think about data. What entities do you need? How do they relate? What rules keep data correct?",
      ],
      visual: {
        kind: "list",
        title: "Data Model Steps",
        steps: [
          "Identify entities (nouns: User, Booking, Desk)",
          "Define relationships (one-to-many, many-to-many)",
          "Add validation rules (required fields, constraints)",
          "Plan the schema (how data is stored)",
        ],
        purpose: "Good data models make features easier and safer.",
      },
      mistakes: [
        "Adding columns without thinking about their purpose.",
        "Creating relationships that make queries impossible.",
        "Storing calculated values instead of storing raw data.",
      ],
      reflection:
        "Design a data model for recurring desk bookings. What entities? What relationships? What rules?",
    },
    {
      id: "system-architecture",
      title: "System Architecture",
      blurb: "How components fit together into a simple mental model of an application.",
      concept: [
        "Architecture is the decisions you make about structure. These decisions affect scalability, maintainability, and the developer experience.",
      ],
      visual: {
        kind: "list",
        title: "Architecture Choices",
        steps: [
          "Service boundaries: What systems own what data?",
          "Communication: How do services talk?",
          "Scaling: Can you scale parts independently?",
          "Resilience: What happens if one part fails?",
          "Trade-offs: Simple vs scalable, fast vs safe",
        ],
        purpose: "Good architecture makes future changes easier.",
      },
      mistakes: [
        "Building monolithic systems that can't scale.",
        "Creating too many services for a small project.",
        "Ignoring failure modes in your design.",
      ],
      reflection:
        "For an app you know, could you draw its architecture? What would you change?",
    },
  ],
}
