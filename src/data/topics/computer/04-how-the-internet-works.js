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
        text: 'When you open a page, the browser resolves the name, connects to the server, secures the connection, sends a request, and renders the response. Loading a website is a sequence, not a single step.',
        ensures: [
          'The browser identifies the protocol, domain, and resource.',
          'It resolves the name to an IP and connects.',
          'For HTTPS, TLS secures the connection first.',
          'It sends a request, receives a response, and renders — or shows an error.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The end-to-end sequence behind opening a website.',
        loop: false,
        steps: [
          { icon: 'keyboard', label: 'Enter URL', desc: 'The user types or clicks a link.', purpose: 'Identify what the user wants to load.', question: 'What resource is requested?' },
          { icon: 'magnifying-glass', label: 'DNS lookup', desc: 'The browser finds the server’s IP.', purpose: 'Turn the domain into a routable address.', question: 'What address does the name resolve to?' },
          { icon: 'hashtag', label: 'IP resolved', desc: 'An address is returned.', purpose: 'Obtain a destination to connect to.', question: 'Which host will we contact?' },
          { icon: 'plug', label: 'Connect', desc: 'A connection to the server is opened.', purpose: 'Establish a channel to the server.', question: 'Can we reach the server?' },
          { icon: 'lock', label: 'TLS / HTTPS', desc: 'The connection is secured.', purpose: 'Encrypt the channel and verify the server.', question: 'Is the connection trustworthy?' },
          { icon: 'paper-plane', label: 'Send request', desc: 'The browser asks for the page.', purpose: 'Tell the server exactly what to return.', question: 'What are we asking for?' },
          { icon: 'inbox', label: 'Receive response', desc: 'The server sends data back.', purpose: 'Deliver the page content or an error.', question: 'What did the server return?' },
          { icon: 'display', label: 'Render page', desc: 'The browser draws the result.', purpose: 'Turn the response into what the user sees.', question: 'Did the page render correctly?' }
        ]
      },
      example: {
        title: 'Opening example.com',
        items: [
          'You type example.com and press enter.',
          'The browser looks up its IP via DNS.',
          'DNS returns the server’s address.',
          'The browser opens a connection to that address.',
          'TLS secures the connection and checks the certificate.',
          'The browser sends an HTTP request for the page.',
          'The server responds with the page content.',
          'The browser renders the page on screen.'
        ]
      },
      io: {
        inputs: [
          ['URL', 'User action'],
          ['Domain name', 'DNS resolver'],
          ['DNS response'],
          ['Server IP', 'Port'],
          ['Certificate', 'TLS handshake'],
          ['HTTP request'],
          ['Server response'],
          ['Response content']
        ],
        outputs: [
          ['A resource to fetch'],
          ['A lookup request'],
          ['A reachable IP address'],
          ['An open connection'],
          ['A secured connection'],
          ['A request on its way'],
          ['Page data or an error'],
          ['A rendered page']
        ]
      },
      who: [
        'User, Browser',
        'Browser, DNS resolver',
        'DNS servers',
        'Browser, Server',
        'Browser, Server, Certificate authority',
        'Browser, Server',
        'Server, Browser',
        'Browser'
      ],
      misconceptions: [
        { wrong: 'A webpage loads in one step.', right: 'It’s a sequence: DNS, connect, TLS, request, response, render.' },
        { wrong: 'DNS, TLS, HTTP, and routing are all the same thing.', right: 'Each is a distinct stage with its own job and failure mode.' },
        { wrong: 'A browser error means the user did something wrong.', right: 'The failure could be at any stage in the chain.' }
      ],
      takeaways: [
        'Loading a page is an ordered sequence of steps.',
        'Many systems cooperate for a single request.',
        'Each stage depends on the one before it.',
        'A failure anywhere shows up as "the site won’t load".'
      ],
      reflection: 'Between typing a URL and seeing the page, which single step surprises you most that it exists?',
      checks: [
        'What are the main stages of a browser request?',
        'Why must DNS happen before connecting?',
        'When does TLS happen in the sequence?',
        'What is the final step of the lifecycle?'
      ]
    },
    {
      id: 'web-clientserver',
      title: 'Client / Server Model',
      blurb: 'One machine requests; another responds. This pattern underpins the whole web.',
      whatIs: {
        text: 'In the client/server model, a client makes a request across the internet and a server responds. It is the fundamental shape of most internet communication.',
        ensures: [
          'The **client** initiates the request (often a browser or app).',
          'The **internet** carries the request to the server.',
          'The **server** processes it and produces a response.',
          'The response travels back to the client.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Client/server — one machine requests, another responds.',
        steps: [
          { icon: 'desktop', label: 'Client', desc: 'Sends a request for something.', purpose: 'Ask the server for data or an action.', question: 'What does the client want?' },
          { icon: 'globe', label: 'Internet', desc: 'Carries the request across networks.', purpose: 'Transport the request to the server.', question: 'How does the request travel?' },
          { icon: 'server', label: 'Server', desc: 'Processes the request.', purpose: 'Do the work and prepare an answer.', question: 'How does the server respond?' },
          { icon: 'inbox', label: 'Response', desc: 'The answer returns to the client.', purpose: 'Deliver the result back to the requester.', question: 'What comes back to the client?' }
        ]
      },
      io: {
        inputs: [
          ['A user need'],
          ['Request', 'Network'],
          ['Request'],
          ['Answer']
        ],
        outputs: [
          ['A request'],
          ['Request in transit'],
          ['A processed answer'],
          ['A response to the client']
        ]
      },
      who: [
        'Client (browser/app)',
        'Internet, Routers',
        'Server',
        'Server, Client'
      ],
      example: {
        title: 'Checking the weather',
        items: [
          'A weather app (the client) requests today’s forecast.',
          'The request travels across the internet.',
          'The weather server looks up the forecast.',
          'It returns the forecast, and the app displays it.'
        ]
      },
      misconceptions: [
        { wrong: 'The client does all the work.', right: 'The server does the heavy processing and holds the data.' },
        { wrong: 'A server is a special kind of machine only.', right: 'A server is a role: any machine responding to requests.' },
        { wrong: 'Communication is one-way.', right: 'A request is answered by a response back to the client.' }
      ],
      takeaways: [
        'The client requests; the server responds.',
        'The internet carries traffic between them.',
        'It is the basic shape of web communication.',
        'Both a request and a response are always involved.'
      ],
      reflection: 'In an app you use daily, what is the client and what is the server doing?',
      checks: [
        'What does the client do?',
        'What does the server do?',
        'What carries traffic between them?',
        'Why is a response as important as the request?'
      ]
    },
    {
      id: 'web-packets',
      title: 'Packets & Routing',
      blurb: 'Data is broken into packets that travel across networks toward a destination.',
      whatIs: {
        text: 'Network data is broken into smaller units called packets. Packets travel between the client and destination, and routing moves them toward that destination — possibly through many devices and paths.',
        ensures: [
          'Large data is split into many small packets.',
          'Packets travel independently across the network.',
          'Routing moves each packet toward its destination.',
          'Data may pass through several devices and paths on the way.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How data crosses the network as packets.',
        loop: false,
        steps: [
          { icon: 'box', label: 'Split into packets', desc: 'Data is broken into small units.', purpose: 'Make large data easier to send reliably.', question: 'How is the data divided?' },
          { icon: 'route', label: 'Routed hop by hop', desc: 'Devices forward packets onward.', purpose: 'Move each packet toward its destination.', question: 'Which way should this packet go?' },
          { icon: 'diagram-project', label: 'Multiple paths', desc: 'Packets may take different routes.', purpose: 'Use whatever paths are available.', question: 'What path did this packet take?' },
          { icon: 'boxes-stacked', label: 'Reassembled', desc: 'Packets are rebuilt at the destination.', purpose: 'Recreate the original data from packets.', question: 'Are all the packets here?' }
        ]
      },
      io: {
        inputs: [
          ['Large data'],
          ['Packets'],
          ['Network paths'],
          ['Arrived packets']
        ],
        outputs: [
          ['Many packets'],
          ['Forwarded packets'],
          ['Packets via various routes'],
          ['Reassembled data']
        ]
      },
      who: [
        'Sender, OS network stack',
        'Routers',
        'Network',
        'Receiver, OS network stack'
      ],
      example: {
        title: 'Sending a photo',
        items: [
          'The photo is split into many packets.',
          'Each packet is routed device to device across networks.',
          'Different packets may take different paths.',
          'At the far end, they’re reassembled into the original photo.'
        ]
      },
      misconceptions: [
        { wrong: 'Data travels as one continuous stream on one path.', right: 'It’s split into packets that may take different routes.' },
        { wrong: 'You must memorise routing protocols to understand this.', right: 'It’s enough to know packets are routed across many devices.' },
        { wrong: 'Packets always arrive in order.', right: 'They can arrive out of order and be reassembled.' }
      ],
      takeaways: [
        'Data is broken into packets to travel the network.',
        'Routing moves packets toward the destination.',
        'Packets can take multiple paths and devices.',
        'They are reassembled at the other end.'
      ],
      reflection: 'Why might splitting data into independently-routed packets be more robust than one big stream?',
      checks: [
        'What is a packet?',
        'What does routing do?',
        'Can packets take different paths?',
        'What happens to packets at the destination?'
      ]
    },
    {
      id: 'web-tls',
      title: 'TLS & HTTPS',
      blurb: 'How a connection is encrypted and the server’s identity is verified.',
      whatIs: {
        text: 'HTTPS protects HTTP communication using TLS. TLS provides encryption and server identity verification, and certificates help the browser decide whether it is talking to the expected server.',
        ensures: [
          'TLS encrypts the data in transit.',
          'Certificates help verify the server’s identity.',
          'A bad or expired certificate can stop a site loading.',
          'This can fail even when the server is otherwise online.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Securing the connection before any data is exchanged.',
        loop: false,
        steps: [
          { icon: 'handshake', label: 'Begin TLS', desc: 'Client and server start a handshake.', purpose: 'Agree on how to secure the connection.', question: 'Can we set up encryption?' },
          { icon: 'certificate', label: 'Present certificate', desc: 'The server proves who it is.', purpose: 'Let the client verify the server’s identity.', question: 'Is this the expected server?' },
          { icon: 'lock', label: 'Encrypt channel', desc: 'The connection becomes private.', purpose: 'Protect all following data in transit.', question: 'Is the channel now secure?' },
          { icon: 'circle-check', label: 'Trusted exchange', desc: 'Requests and responses flow safely.', purpose: 'Exchange data with confidence.', question: 'Is it safe to send data?' }
        ]
      },
      io: {
        inputs: [
          ['Client hello'],
          ['Server certificate'],
          ['Agreed keys'],
          ['A secure channel']
        ],
        outputs: [
          ['A started handshake'],
          ['A verified identity'],
          ['An encrypted channel'],
          ['Safe request and response']
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
          'The browser begins a TLS handshake with the server.',
          'The server presents a certificate — but it has expired.',
          'The browser can’t trust the identity, so it refuses to proceed.',
          'The site won’t load, even though the server itself is online.'
        ]
      },
      misconceptions: [
        { wrong: 'TLS only encrypts; it doesn’t check identity.', right: 'It also helps verify you reached the expected server.' },
        { wrong: 'A certificate error means the server is down.', right: 'The server can be online but the certificate untrusted.' },
        { wrong: 'HTTPS is optional decoration.', right: 'It protects data and proves server identity.' }
      ],
      takeaways: [
        'TLS encrypts the connection and verifies identity.',
        'Certificates prove the server is who it claims.',
        'Certificate problems can block a working site.',
        'Security happens before data is exchanged.'
      ],
      reflection: 'Why does a browser refuse to load a site over a bad certificate instead of just warning quietly?',
      checks: [
        'What two things does TLS provide?',
        'What role do certificates play?',
        'How can a certificate issue block a healthy server?',
        'When does TLS happen relative to sending data?'
      ]
    },
    {
      id: 'web-failures',
      title: 'Where Requests Fail',
      blurb: 'A request can break at DNS, the network path, TLS, the server, or the application.',
      whatIs: {
        text: 'Internet requests can fail at several points. Knowing the chain lets you locate a failure by where it happens rather than guessing.',
        ensures: [
          '**DNS** may fail to resolve the name.',
          'The **network path** may be unavailable, or a firewall may block it.',
          '**TLS / certificate** issues may stop the secure connection.',
          'The **server** may be down, or its **application** may not respond.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Failure points — troubleshoot by location in the request chain.',
        loop: false,
        steps: [
          { icon: 'magnifying-glass', label: 'DNS', desc: 'The name may not resolve.', purpose: 'Check whether the name became an address.', question: 'Did DNS resolve?' },
          { icon: 'route', label: 'Network path', desc: 'The route may be blocked or down.', purpose: 'Check whether traffic can reach the host.', question: 'Can we reach the host at all?' },
          { icon: 'certificate', label: 'TLS / certificate', desc: 'The secure handshake may fail.', purpose: 'Check whether the connection can be trusted.', question: 'Is the certificate valid?' },
          { icon: 'server', label: 'Server', desc: 'The server may be down.', purpose: 'Check whether the server is running.', question: 'Is the server up?' },
          { icon: 'gears', label: 'Application response', desc: 'The app may error or hang.', purpose: 'Check whether the service actually responds.', question: 'Did the app respond correctly?' }
        ]
      },
      example: {
        title: 'Locating a failure',
        items: [
          'DNS resolves fine — not the name.',
          'The host is reachable — not the network path.',
          'The certificate is valid — not TLS.',
          'The server is up — not the machine.',
          'The application returns a 500 error — the failure is in the app.'
        ]
      },
      io: {
        inputs: [
          ['Domain name'],
          ['Resolved IP', 'Route'],
          ['Certificate'],
          ['Server health'],
          ['Application logs']
        ],
        outputs: [
          ['DNS working or failing'],
          ['Path reachable or blocked'],
          ['TLS valid or broken'],
          ['Server up or down'],
          ['App responding or erroring']
        ]
      },
      who: [
        'DNS resolver, Engineer',
        'Network, Firewall',
        'Certificate authority, Server',
        'Server, Operations',
        'Application, Engineer'
      ],
      misconceptions: [
        { wrong: 'A server error always means a network problem.', right: 'The network may be fine while the application errors.' },
        { wrong: 'One failure looks like every other.', right: 'Each stage fails with its own distinct symptoms.' },
        { wrong: 'You should fix before you locate.', right: 'Find where in the chain it breaks, then fix that.' }
      ],
      takeaways: [
        'Requests can fail at DNS, network, TLS, server, or app.',
        'Locate the failure by stage in the chain.',
        'A server error is not the same as a network error.',
        'Where it breaks tells you what to fix.'
      ],
      reflection: 'A page won’t load. What’s the fastest question to narrow it to one stage of the chain?',
      checks: [
        'Name the five common failure points.',
        'How is a DNS failure different from a server failure?',
        'Why locate before you fix?',
        'Where does a 500 error sit in the chain?'
      ]
    },
    {
      id: 'web-errors',
      title: 'Reading Request Errors',
      blurb: 'Map common error messages to where in the request they most likely happen.',
      whatIs: {
        text: 'Error messages are clues that point to a stage in the request chain. Mapping an error to its likely location speeds up troubleshooting.',
        ensures: [
          '"DNS not found" points at name resolution.',
          '"Connection timed out" points at the network path or server.',
          '"Certificate invalid" points at TLS.',
          'A "500" error points at the server-side application.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Turning an error message into a location in the flow.',
        loop: false,
        steps: [
          { icon: 'triangle-exclamation', label: 'Read the error', desc: 'Note exactly what it says.', purpose: 'Capture the precise wording as evidence.', question: 'What does the error actually say?' },
          { icon: 'map-location-dot', label: 'Map to a stage', desc: 'Match it to DNS, network, TLS, or server.', purpose: 'Point at the most likely failing stage.', question: 'Which stage does this suggest?' },
          { icon: 'magnifying-glass', label: 'Check that stage', desc: 'Verify the suspected stage.', purpose: 'Confirm or rule out the suspicion with evidence.', question: 'Is that stage really the problem?' },
          { icon: 'screwdriver-wrench', label: 'Act on evidence', desc: 'Fix the stage that’s actually broken.', purpose: 'Apply the fix where the evidence points.', question: 'What is the right fix here?' }
        ]
      },
      io: {
        inputs: [
          ['An error message'],
          ['Wording'],
          ['A suspected stage'],
          ['A confirmed stage']
        ],
        outputs: [
          ['The exact wording'],
          ['A suspected stage'],
          ['A confirmed or ruled-out stage'],
          ['A targeted fix']
        ]
      },
      who: [
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer'
      ],
      example: {
        title: 'Four errors, four stages',
        items: [
          'Read: "DNS_PROBE_FINISHED_NXDOMAIN".',
          'Map it to name resolution — a DNS problem.',
          'Check DNS and confirm the name doesn’t resolve.',
          'Fix the DNS record rather than restarting the server.'
        ]
      },
      misconceptions: [
        { wrong: 'All errors mean the same thing.', right: 'Different errors point to different stages of the request.' },
        { wrong: 'A browser error means user error.', right: 'It usually names the stage that failed, not the user.' },
        { wrong: 'Read the error, then guess a fix.', right: 'Map it to a stage and verify before acting.' }
      ],
      takeaways: [
        'Errors are clues to a stage in the chain.',
        '"DNS not found", "timeout", "cert invalid", and "500" map to different stages.',
        'Verify the suspected stage before fixing.',
        'Reading errors well saves guessing.'
      ],
      reflection: 'Next error you hit, can you name the stage it points to before touching anything?',
      checks: [
        'Where does a "DNS not found" error point?',
        'What does a "connection timed out" suggest?',
        'Which stage does "certificate invalid" implicate?',
        'Where does a 500 error most likely occur?'
      ]
    }
  ]
}
