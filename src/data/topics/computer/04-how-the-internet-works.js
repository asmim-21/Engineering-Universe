// Computer Engineering Universe — Workshop 4.
export default {
  id: 'internet',
  title: 'How the Internet Works',
  tone: 'c5',
  blurb: 'Follow a request from browser to server and back — DNS, connections, TLS, packets, and where it all breaks.',
  tags: ['Requests', 'Routing', 'TLS', 'Failures'],
  popups: [
    {
      id: 'web-lifecycle',
      title: 'Browser Request Lifecycle',
      blurb: 'Opening a website requires many systems working together behind the scenes.',
      whatIs: {
        text: `Typing an address and pressing enter starts a sequence, not a single action. The browser parses the address into a protocol, a host name and a path. It resolves the name to an address through the Domain Name System (DNS). It opens a connection to that address. For HyperText Transfer Protocol (HTTP) Secure (HTTPS) it then negotiates Transport Layer Security (TLS) and checks the certificate. Only then does it send the actual request.

The response comes back with a status code and a body — usually a page that references more resources: stylesheets, scripts, images, fonts. Each of those repeats parts of the sequence, which is why one "page load" is often dozens of requests, and why the first visit is slower than the second (nothing is cached yet).

Understanding the order is what makes failures diagnosable. Each stage depends on the one before, so a failure anywhere shows up to the user as the same thing — "the site will not load" — while the fix is entirely different depending on which stage broke.`,
        ensures: [
          'List the stages of a browser request in order',
          'Explain why DNS must complete before a connection can start',
          'Say where TLS sits in the sequence and why',
          'Understand that a page load is many requests, not one',
          'Explain why a repeat visit is usually faster',
          'Use the sequence to locate where a failure happened'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The end-to-end sequence behind opening a website.',
        loop: false,
        steps: [
          { icon: 'keyboard', label: 'Enter address', desc: 'The user types or clicks.', purpose: 'Parse the protocol, host and path from the address.', question: 'What resource is being requested?' },
          { icon: 'magnifying-glass', label: 'DNS lookup', desc: 'Find the server\'s address.', purpose: 'Resolve the host name into a routable address.', question: 'What address does this name map to?' },
          { icon: 'hashtag', label: 'Address returned', desc: 'A destination to connect to.', purpose: 'Give the browser somewhere to send traffic.', question: 'Which host will we contact?' },
          { icon: 'plug', label: 'Connect', desc: 'A Transmission Control Protocol (TCP) connection is opened.', purpose: 'Establish a channel to the server\'s port.', question: 'Can we reach that host and port?' },
          { icon: 'lock', label: 'TLS handshake', desc: 'Encrypt and verify.', purpose: 'Secure the channel and check the certificate before sending anything.', question: 'Is this really the right server, and is the channel private?' },
          { icon: 'paper-plane', label: 'Send request', desc: 'Method, path, headers.', purpose: 'Ask the server for the specific resource.', question: 'What exactly are we asking for?' },
          { icon: 'inbox', label: 'Receive response', desc: 'Status code and body.', purpose: 'Return the content, a redirect, or an error.', question: 'What did the server actually return?' },
          { icon: 'display', label: 'Render', desc: 'Draw it, fetching more resources.', purpose: 'Build the page, requesting scripts, styles and images as needed.', question: 'How many more requests did this page trigger?' }
        ]
      },
      example: {
        title: 'Opening example.com',
        items: [
          'You type example.com and press enter.',
          'The browser asks DNS for the address.',
          'DNS returns 93.184.216.34, cached for its time to live.',
          'The browser opens a connection to that address on port 443.',
          'TLS negotiates encryption and validates the certificate.',
          'It sends `GET /` with headers describing the browser.',
          'The server returns 200 and the page markup.',
          'Rendering triggers twelve more requests for scripts and images.'
        ]
      },
      io: {
        inputs: [
          ['A uniform resource locator (URL)', 'A user action'],
          ['Host name', 'DNS resolver'],
          ['A DNS answer'],
          ['Server address', 'Port'],
          ['Certificate', 'Trusted authorities'],
          ['An HTTP request'],
          ['The server\'s response'],
          ['Markup', 'Referenced resources']
        ],
        outputs: [
          ['Protocol, host, path'],
          ['A lookup request'],
          ['A routable address'],
          ['An open connection'],
          ['A verified, encrypted channel'],
          ['A request in flight'],
          ['Status code and body'],
          ['A rendered page', 'More requests']
        ]
      },
      who: [
        'User, Browser',
        'Browser, DNS resolver',
        'DNS servers',
        'Browser, Server, Network',
        'Browser, Server, Certificate authority',
        'Browser, Server',
        'Server, Browser',
        'Browser'
      ],
      misconceptions: [
        { wrong: 'A page loads in one request.', right: 'One page typically triggers dozens across the same sequence.' },
        { wrong: 'DNS, TLS and HTTP are the same layer.', right: 'Each is a separate stage with its own failure mode.' },
        { wrong: 'A browser error means the user did something wrong.', right: 'It usually names which stage of the chain failed.' },
        { wrong: 'Reloading is the same as the first load.', right: 'Caches at every level make the second visit very different.' }
      ],
      takeaways: [
        '**It is a sequence, and order matters.** Resolve, connect, secure, request, respond, render — each stage depends on the last.',
        '**DNS comes before everything.** Without an address there is nothing to connect to, which is why DNS failures look like total outages.',
        '**TLS happens before any data is sent.** The certificate is checked first, so a certificate problem blocks a healthy server completely.',
        '**One page is many requests.** Scripts, styles, images and fonts each repeat much of the chain.',
        '**Caching changes everything on a second visit** — DNS answers, connections and files are all reused.',
        '**Every stage has a characteristic failure,** which is what makes error messages so useful for locating the problem.',
        '**"The site will not load" is a symptom, not a diagnosis.** The same user experience covers five very different causes.'
      ],
      reflection: 'Open the network tab in your browser and load a page you use daily. How many requests were there, how long did the first one take before any data arrived, and what was happening during that time?',
      checks: [
        'What are the stages of a browser request, in order?',
        'Why must DNS complete before connecting?',
        'Where does TLS sit, and why there?',
        'Why does one page load produce many requests?',
        'Why is a second visit usually faster?',
        'Why does every stage failure look the same to a user?'
      ]
    },
    {
      id: 'web-clientserver',
      title: 'Client / Server Model',
      blurb: 'One machine requests; another responds. This pattern underpins the whole web.',
      whatIs: {
        text: `The client/server model is the basic shape of internet communication: a **client** initiates a request, a **server** listens and responds. Client and server are **roles**, not machine types — a service calling another service is a client for that call, and your laptop becomes a server the moment it listens for connections.

The asymmetry is deliberate. Servers are always listening, have stable addresses, hold the data and enforce the rules. Clients come and go, may be offline, and cannot be trusted — which is why validation and authorisation live on the server side however tempting it is to rely on the app.

Not everything fits the shape. In **peer-to-peer** systems every participant is both client and server. With **WebSockets** the server can push data to the client without being asked, which is how live chat and dashboards work. And modern systems chain the pattern: your browser is a client of a web server, which is a client of an application programming interface (API), which is a client of a database. Every link inherits the same trust question — who is asking, and are they allowed?`,
        ensures: [
          'Explain the client and server roles and who initiates',
          'Recognise that the roles are situational, not fixed to hardware',
          'Say why servers cannot trust clients',
          'Describe how request/response chains through several systems',
          'Know what WebSockets and peer-to-peer change about the pattern',
          'Identify the client and server in a system you use'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Request out, response back — the shape of almost everything.',
        steps: [
          { icon: 'desktop', label: 'Client', desc: 'Initiates a request.', purpose: 'Ask for data or an action on the user\'s behalf.', question: 'What does the client want, and who is it?' },
          { icon: 'globe', label: 'Network', desc: 'Carries it across.', purpose: 'Transport the request over many hops to the server.', question: 'Can the request get there, and how fast?' },
          { icon: 'server', label: 'Server', desc: 'Validates and processes.', purpose: 'Authenticate, apply the rules, do the work.', question: 'Is this allowed, and what should happen?' },
          { icon: 'inbox', label: 'Response', desc: 'The answer returns.', purpose: 'Send back a status and a result the client can use.', question: 'What came back — and did it succeed?' }
        ]
      },
      io: {
        inputs: [
          ['A user need', 'Credentials'],
          ['A request', 'Routes'],
          ['A request', 'Rules', 'Data'],
          ['A result or error']
        ],
        outputs: [
          ['A request'],
          ['A request in transit'],
          ['A decision and a result'],
          ['A response the client can act on']
        ]
      },
      who: [
        'Client (browser or app)',
        'Network, Routers',
        'Server, Database',
        'Server, Client'
      ],
      example: {
        title: 'Checking the weather',
        items: [
          'The weather app requests today\'s forecast for your location.',
          'The request crosses the internet to the provider\'s servers.',
          'The server checks the API key, looks up the forecast and formats it.',
          'The response returns and the app displays it — or shows a cached one.'
        ]
      },
      misconceptions: [
        { wrong: 'The client does most of the work.', right: 'The server holds the data and enforces the rules.' },
        { wrong: 'A server is a particular kind of machine.', right: 'It is a role — any process that listens and responds.' },
        { wrong: 'Only the server can start communication.', right: 'Normally true, but WebSockets let the server push too.' },
        { wrong: 'A trusted client makes server checks unnecessary.', right: 'Any client can be modified or impersonated.' }
      ],
      takeaways: [
        '**Client and server are roles, not machines.** A service is a server to its callers and a client to everything it calls.',
        '**The client initiates.** That is what makes it a client — and why servers must always be listening.',
        '**Servers cannot trust clients.** Anything sent from a client can be forged, so validation and authorisation belong server-side.',
        '**Requests chain.** Browser → web server → API → database, with the same trust question at every hop.',
        '**WebSockets break the one-way pattern,** letting the server push updates for chat, notifications and live dashboards.',
        '**Peer-to-peer removes the distinction entirely** — every participant is both, which changes the trust model completely.',
        '**Identifying the client and server is the first step in reasoning about a system,** and about where a failure could be.'
      ],
      reflection: 'Take an app you use daily. What is the client, what is the server, and what would each be able to do if the other were unavailable for an hour?',
      checks: [
        'Who initiates in the client/server model?',
        'Why is "server" a role rather than a machine type?',
        'Why must a server re-check what a client sends?',
        'How does one request chain through several systems?',
        'What do WebSockets change?',
        'What is different about peer-to-peer?'
      ]
    },
    {
      id: 'web-packets',
      title: 'Packets & Routing',
      blurb: 'Data is broken into packets that travel across networks toward a destination.',
      whatIs: {
        text: `Data does not travel as a continuous stream. It is split into **packets**: small units each carrying a piece of the data plus a header saying where it came from and where it is going. Splitting is what lets many conversations share the same links — nobody has to wait for one large transfer to finish.

Each packet is forwarded **hop by hop**. A router receives it, looks at the destination, consults its routing table and forwards it to the next router closer to the target. No single device knows the whole path; each only knows the next step, which is what makes the internet resilient — if a link fails, later packets simply take another route.

Because packets travel independently, they can arrive **out of order**, be **duplicated**, or be **lost** entirely when a link is congested. Transmission Control Protocol (TCP) hides that by numbering, acknowledging, reordering and retransmitting. This is also why **latency** and **bandwidth** are different: bandwidth is how many packets per second a link can carry, latency is how long each one takes to arrive, and a fast link across the world is still bound by the speed of light.`,
        ensures: [
          'Explain what a packet contains and why data is split',
          'Describe hop-by-hop routing and why no device knows the full path',
          'Say why packets can arrive out of order, duplicated or not at all',
          'Understand how TCP hides those problems from applications',
          'Distinguish bandwidth from latency',
          'Interpret what traceroute and ping actually show'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How data crosses the network as packets.',
        loop: false,
        steps: [
          { icon: 'box', label: 'Split into packets', desc: 'Small units with headers.', purpose: 'Break data up so links can be shared fairly.', question: 'How is this data divided, and what is in each header?' },
          { icon: 'route', label: 'Routed hop by hop', desc: 'Each router forwards onward.', purpose: 'Move each packet one step closer to the destination.', question: 'Which way does this router send it next?' },
          { icon: 'diagram-project', label: 'Independent paths', desc: 'Different packets, different routes.', purpose: 'Use whatever paths are available and working.', question: 'What happens if a link on the way fails?' },
          { icon: 'boxes-stacked', label: 'Reassembled', desc: 'Ordered and checked at the far end.', purpose: 'Rebuild the original data, requesting anything missing.', question: 'Did everything arrive, and in what order?' }
        ]
      },
      io: {
        inputs: [
          ['Application data'],
          ['Packets', 'Routing tables'],
          ['Available links', 'Congestion'],
          ['Arriving packets', 'Sequence numbers']
        ],
        outputs: [
          ['Packets with headers'],
          ['Forwarded packets'],
          ['Packets via varying routes', 'Some lost or delayed'],
          ['Reassembled data', 'Retransmission requests']
        ]
      },
      who: [
        'Sender, operating system (OS) network stack',
        'Routers',
        'Network, Providers',
        'Receiver, OS network stack'
      ],
      example: {
        title: 'Sending a photo',
        items: [
          'The photo is split into thousands of packets, each numbered.',
          'Each is forwarded router by router towards the destination.',
          'A congested link drops a few; others take a different route.',
          'The far end reorders what arrived and asks for the missing pieces.'
        ]
      },
      misconceptions: [
        { wrong: 'Data travels as one stream along one path.', right: 'It is split into packets that may take different routes.' },
        { wrong: 'Packets always arrive in order.', right: 'They can arrive out of order, duplicated, or not at all.' },
        { wrong: 'A router knows the whole path.', right: 'It only knows the next hop towards the destination.' },
        { wrong: 'More bandwidth fixes high latency.', right: 'Capacity and delay are separate limits.' }
      ],
      takeaways: [
        '**Packets let many conversations share one link.** Nobody waits for a large transfer to finish before anything else moves.',
        '**Routing is hop by hop.** Each router knows only the next step, which is what makes the network resilient to failures.',
        '**Loss, duplication and reordering are normal.** TCP hides them; User Datagram Protocol (UDP) leaves them to the application.',
        '**Bandwidth is capacity, latency is delay.** A very fast link with a 200ms round trip still feels slow for chatty protocols.',
        '**Distance sets a floor on latency.** Nothing travels faster than light in fibre, so intercontinental round trips cannot be instant.',
        '**Congestion causes loss, and loss causes retransmission,** which is why a saturated network degrades sharply rather than gently.',
        '**`ping` measures round-trip time; `traceroute` shows the hops.** Between them you can usually see where the delay appears.'
      ],
      reflection: 'Why is splitting data into independently routed packets more robust than one continuous stream? Then explain what breaks if half the packets take a route that is twice as slow.',
      checks: [
        'What does a packet contain, and why split data at all?',
        'How does hop-by-hop routing work?',
        'Why can packets arrive out of order or go missing?',
        'What does TCP do about that?',
        'What is the difference between bandwidth and latency?',
        'What do ping and traceroute each tell you?'
      ]
    },
    {
      id: 'web-tls',
      title: 'TLS & HTTPS',
      blurb: 'How a connection is encrypted and the server\'s identity is verified.',
      whatIs: {
        text: `Transport Layer Security (TLS) is what turns HyperText Transfer Protocol (HTTP) into HTTP Secure (HTTPS). It runs **before any application data is sent**, and it provides three things: **encryption** so nobody on the path can read the traffic, **integrity** so it cannot be altered undetected, and **authentication** so the client knows which server it reached.

The handshake works roughly like this. The client says hello and lists what it supports. The server responds with its **certificate** — a document containing its public key and its domain name, signed by a **certificate authority (CA)** that browsers already trust. The client checks that the certificate is validly signed, has not expired, and matches the name it asked for. Then both sides agree a shared session key and encryption begins.

That third property is the one people undervalue. Encryption alone would still let an attacker who controls the network pretend to be your bank. The certificate is what prevents that, and it is why a certificate warning is qualitatively different from other errors: the browser is saying it cannot verify who is on the other end. It is also why an expired certificate blocks a perfectly healthy server — and why certificate expiry is a classic self-inflicted outage.`,
        ensures: [
          'Name the three properties TLS provides',
          'Describe the handshake at a high level',
          'Explain what a certificate contains and what a CA does',
          'Say why encryption alone is not enough',
          'Understand why an expired certificate takes a site down',
          'Treat certificate warnings as serious rather than routine'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Securing the connection before any data is exchanged.',
        loop: false,
        steps: [
          { icon: 'handshake', label: 'Handshake begins', desc: 'Client hello, server hello.', purpose: 'Agree which versions and ciphers both sides support.', question: 'Can we agree on how to secure this?' },
          { icon: 'certificate', label: 'Certificate presented', desc: 'Signed by a trusted authority.', purpose: 'Let the client verify who the server is.', question: 'Is it valid, unexpired, and for this exact name?' },
          { icon: 'lock', label: 'Keys agreed', desc: 'A shared session key.', purpose: 'Establish encryption that only these two parties can read.', question: 'Is the channel now private and tamper-evident?' },
          { icon: 'circle-check', label: 'Data flows', desc: 'HTTP inside the tunnel.', purpose: 'Carry the ordinary request and response securely.', question: 'Is it safe to send credentials now?' }
        ]
      },
      io: {
        inputs: [
          ['Supported versions and ciphers'],
          ['Server certificate', 'Trusted CA list'],
          ['Key exchange'],
          ['A secure channel', 'HTTP traffic']
        ],
        outputs: [
          ['Agreed parameters'],
          ['A verified identity — or a warning'],
          ['An encrypted, integrity-protected channel'],
          ['Protected requests and responses']
        ]
      },
      who: [
        'Client, Server',
        'Server, Certificate authority',
        'Client, Server',
        'Client, Server'
      ],
      example: {
        title: 'An expired certificate',
        items: [
          'The browser starts a handshake with the server as usual.',
          'The server presents a certificate that expired yesterday.',
          'The browser cannot verify the identity, so it refuses to continue.',
          'The site is unreachable even though the server is running perfectly.'
        ]
      },
      misconceptions: [
        { wrong: 'TLS only encrypts.', right: 'It also verifies identity and protects against tampering.' },
        { wrong: 'A certificate error means the server is down.', right: 'The server is usually fine; its identity cannot be verified.' },
        { wrong: 'The padlock means the site is trustworthy.', right: 'It means the connection is secure to whoever owns that name.' },
        { wrong: 'Clicking past a certificate warning is fine on a familiar site.', right: 'That is exactly the situation the warning exists for.' }
      ],
      takeaways: [
        '**Three properties: encryption, integrity, authentication.** The third is what stops impersonation, and it is the one most often forgotten.',
        '**TLS happens before any data is sent.** Credentials never cross an unverified connection.',
        '**A certificate binds a public key to a domain name,** signed by an authority your browser already trusts.',
        '**Encryption without identity is not enough.** An attacker controlling the network could otherwise encrypt traffic to themselves.',
        '**Expired certificates cause real outages.** The server is healthy, and nobody can reach it — so automate renewal and alert well ahead.',
        '**Certificate warnings deserve to be taken seriously.** They mean the browser cannot tell who is on the other end.',
        '**The padlock proves the name, not the intent.** A phishing site can hold a perfectly valid certificate for its own domain.'
      ],
      reflection: 'Why does a browser refuse to proceed on a bad certificate rather than showing a quiet warning? What attack is it protecting you from — and would you notice that attack otherwise?',
      checks: [
        'What three things does TLS provide?',
        'What happens during the handshake?',
        'What does a certificate contain, and who signs it?',
        'Why is encryption alone insufficient?',
        'Why does an expired certificate take a site offline?',
        'What does the padlock not tell you?'
      ]
    },
    {
      id: 'web-failures',
      title: 'Where Requests Fail',
      blurb: 'A request can break at DNS, the network path, TLS, the server, or the application.',
      whatIs: {
        text: `Every stage of the request chain can fail, and to the user they all look identical. Working through the chain in order turns "the site is broken" into a specific, fixable problem.

**Domain Name System (DNS)** may not resolve the name at all. The **network path** may be unroutable, or a firewall may drop the traffic silently. **Transport Layer Security (TLS)** may fail on an expired, mismatched or untrusted certificate. The **server** may be down, overloaded, or listening on a different port. And the **application** may be running fine and still return an error, which is a completely different problem from everything above it.

The technique is **binary search over the chain**: pick a check that eliminates half the possibilities. Does the name resolve? Can we open a connection at all? Does the certificate validate? Does the server answer anything? Each answer removes several candidates. And take the errors literally — the browser or client usually names the stage that failed, which is worth more than any hunch.`,
        ensures: [
          'Name the stages where a request can break',
          'Check each stage in order rather than guessing',
          'Eliminate half the possibilities with each test',
          'Distinguish network failures from server failures from application errors',
          'Recognise that a firewall drop looks different from a refusal',
          'Locate before fixing'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Failure points — locate by position in the chain.',
        loop: false,
        steps: [
          { icon: 'magnifying-glass', label: 'DNS', desc: 'Does the name resolve?', purpose: 'Confirm the name produces an address at all.', question: 'Do we get an address, and is it the expected one?' },
          { icon: 'route', label: 'Network path', desc: 'Can we reach the host?', purpose: 'Test reachability and whether anything is blocking.', question: 'Refused, timed out, or connected?' },
          { icon: 'certificate', label: 'TLS', desc: 'Does the certificate validate?', purpose: 'Check validity, expiry and name match.', question: 'Is the certificate valid for this name today?' },
          { icon: 'server', label: 'Server', desc: 'Is it up and listening?', purpose: 'Confirm the process is running on the expected port.', question: 'Does the server respond with anything at all?' },
          { icon: 'gears', label: 'Application', desc: 'Does it respond correctly?', purpose: 'Check the response body and status, and the app logs.', question: 'Is the app returning an error of its own?' }
        ]
      },
      example: {
        title: 'Locating a failure',
        items: [
          'DNS resolves to the expected address — not a name problem.',
          'The connection opens on port 443 — the path and firewall are fine.',
          'The certificate is valid and matches — not TLS.',
          'The server responds, so the process is running.',
          'The response is a 500 with a stack trace — the failure is in the application.'
        ]
      },
      io: {
        inputs: [
          ['A host name'],
          ['An address', 'A port'],
          ['A certificate'],
          ['A connection'],
          ['A response', 'Application logs']
        ],
        outputs: [
          ['Resolves, or does not'],
          ['Reachable, refused, or blocked'],
          ['Valid, or a specific certificate error'],
          ['Server responding, or silent'],
          ['A working response, or an application error']
        ]
      },
      who: [
        'DNS resolver, Engineer',
        'Network, Firewall, Engineer',
        'Server, Certificate authority',
        'Server, Operations',
        'Application, Engineer'
      ],
      misconceptions: [
        { wrong: 'A failing page means a network problem.', right: 'The network is often fine while the application errors.' },
        { wrong: 'All failures look the same.', right: 'Each stage fails with distinct, recognisable symptoms.' },
        { wrong: 'Start fixing the most likely cause.', right: 'Locate first; fixing the wrong stage wastes the outage.' },
        { wrong: 'If it works for me, it works.', right: 'Caching, region and network path differ per user.' }
      ],
      takeaways: [
        '**Work the chain in order:** DNS, path, TLS, server, application. It converts a vague failure into a located one.',
        '**Each check should eliminate several possibilities.** "Can I open a connection?" answers the network and half the server question at once.',
        '**Refused, timed out and reset mean different things.** Refused says nothing is listening; timed out usually means something is blocking.',
        '**A 500 means you got all the way through.** DNS, network, TLS and the server all worked — the problem is in the code.',
        '**Firewalls fail silently.** A drop looks like a timeout, which is why "nothing came back" is a clue in itself.',
        '**"It works for me" is data, not a rebuttal.** Different caches, regions and paths genuinely produce different results.',
        '**Locate before you fix.** Restarting the server during a DNS problem burns time and teaches nothing.'
      ],
      reflection: 'A page will not load for one colleague and works for you. Which stages could explain that difference, and what single check would eliminate the most possibilities first?',
      checks: [
        'What are the five stages where a request can fail?',
        'What is the fastest first check, and why?',
        'What is the difference between refused and timed out?',
        'What does a 500 error tell you about the earlier stages?',
        'Why do firewall blocks look like timeouts?',
        'Why locate before fixing?'
      ]
    },
    {
      id: 'web-errors',
      title: 'Reading Request Errors',
      blurb: 'Map common error messages to where in the request they most likely happen.',
      whatIs: {
        text: `Error messages are not noise; they usually name the stage that failed. Learning a handful of them turns a five-minute guessing session into a ten-second diagnosis.

**Name not resolved** (\`NXDOMAIN\`, "server not found") means Domain Name System (DNS) — the name does not exist or the resolver could not answer. **Connection refused** means you reached the host and nothing was listening. **Connection timed out** usually means something dropped the traffic, typically a firewall or an unreachable network. **Certificate errors** name the exact problem: expired, name mismatch, or an authority the client does not trust. **502 and 504** come from a proxy or load balancer that could not get a good answer from the service behind it. **500** is the application itself failing after everything else worked.

The discipline is: read the exact wording, map it to a stage, then **verify** before acting. Mapping produces a hypothesis, not a conclusion — and the verification step is what stops you restarting a healthy server because you recognised the wrong pattern.`,
        ensures: [
          'Map common error messages to the stage they implicate',
          'Distinguish 4xx, 5xx, 502 and 504 by who is at fault',
          'Read certificate errors for the specific cause',
          'Verify the suspected stage before acting on it',
          'Capture exact wording rather than paraphrasing',
          'Use error text to route a problem to the right person'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Turning an error message into a location.',
        loop: false,
        steps: [
          { icon: 'triangle-exclamation', label: 'Read it exactly', desc: 'The precise wording and code.', purpose: 'Capture the message as evidence, not as an impression.', question: 'What does it say, word for word?' },
          { icon: 'map-location-dot', label: 'Map to a stage', desc: 'DNS, network, Transport Layer Security (TLS), server, app.', purpose: 'Form a hypothesis about which stage failed.', question: 'Which stage does this wording point at?' },
          { icon: 'magnifying-glass', label: 'Verify', desc: 'Check that stage directly.', purpose: 'Confirm or eliminate the suspicion with evidence.', question: 'Is that stage really the problem?' },
          { icon: 'screwdriver-wrench', label: 'Act', desc: 'Fix what the evidence shows.', purpose: 'Apply the fix where it belongs, or hand it to who owns it.', question: 'Who owns this stage, and what is the fix?' }
        ]
      },
      io: {
        inputs: [
          ['An error message', 'A status code'],
          ['The exact wording'],
          ['A suspected stage'],
          ['A confirmed stage']
        ],
        outputs: [
          ['Recorded evidence'],
          ['A hypothesis'],
          ['A confirmed or eliminated stage'],
          ['A targeted fix or handover']
        ]
      },
      who: [
        'User, Engineer',
        'Engineer',
        'Engineer',
        'Engineer, Owning team'
      ],
      example: {
        title: 'From message to fix',
        items: [
          'Read: `DNS_PROBE_FINISHED_NXDOMAIN`, exactly as shown.',
          'Map: the name did not resolve — a DNS problem, not the server.',
          'Verify: a lookup from another machine also fails to resolve.',
          'Act: the record was deleted during a migration; restore it.'
        ]
      },
      misconceptions: [
        { wrong: 'All errors mean roughly the same thing.', right: 'Each points at a different stage and a different owner.' },
        { wrong: 'A 502 is the same as a 500.', right: '502 is a proxy failing to reach the service; 500 is the service failing.' },
        { wrong: 'The error names the culprit definitively.', right: 'It is a strong hypothesis, still worth verifying.' },
        { wrong: 'Paraphrasing the error is enough.', right: 'The exact code and wording usually contain the answer.' }
      ],
      takeaways: [
        '**Errors name stages.** "Not resolved" is DNS, "refused" is the port, "certificate" is TLS, "500" is the application.',
        '**4xx blames the caller, 5xx blames the server.** That one distinction routes a report to the right team immediately.',
        '**502 and 504 come from something in front of the service** — a proxy or load balancer that could not get a usable answer.',
        '**Certificate errors are specific.** Expired, wrong name, or untrusted authority are three different fixes.',
        '**Timeouts usually mean something is silently dropping traffic,** most often a firewall or a network that cannot reach the host.',
        '**Map, then verify.** The message gives a hypothesis; the check turns it into a diagnosis.',
        '**Record the exact text.** Paraphrased errors send the next person looking in the wrong place.'
      ],
      reflection: 'Next time you hit an error, name the stage before touching anything, then check whether you were right. How often does the message alone get you there?',
      checks: [
        'Where does "name not resolved" point?',
        'What does "connection refused" tell you?',
        'What usually causes a timeout instead?',
        'What is the difference between 500 and 502?',
        'What are the three common certificate errors?',
        'Why verify after mapping an error to a stage?'
      ]
    }
  ]
}
