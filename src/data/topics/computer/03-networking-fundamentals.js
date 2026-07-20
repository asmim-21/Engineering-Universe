// Computer Engineering Universe — Workshop 3.
export default {
  id: 'networking',
  title: 'Networking Fundamentals',
  tone: 'c3',
  blurb: 'How computers communicate — networks, IP addresses, DNS, ports, and the core transport and web protocols.',
  tags: ['IP', 'DNS', 'Ports', 'TCP/HTTP'],
  popups: [
    {
      id: 'net-what',
      title: 'What a Network Is',
      blurb: 'Computers become far more useful when they can exchange information across networks.',
      whatIs: {
        text: 'A network connects computers so they can exchange data. Networks let applications, users, and systems communicate across physical distance.',
        ensures: [
          'A **LAN** is a local network, such as a home or office.',
          'A **WAN** connects larger geographic areas.',
          'The **internet** is a global network of networks.',
          'Distance stops being a barrier to communication.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Networks scale outward — from a local link to a global network of networks.',
        loop: false,
        steps: [
          { icon: 'desktop', label: 'Computer A', desc: 'A device that wants to send data.', purpose: 'Originate a message to another machine.', question: 'Who wants to communicate?' },
          { icon: 'network-wired', label: 'LAN', desc: 'A local network links nearby devices.', purpose: 'Connect devices in one home or office.', question: 'Are they on the same local network?' },
          { icon: 'globe', label: 'WAN / Internet', desc: 'Networks connect to other networks.', purpose: 'Bridge distance across many networks.', question: 'How do we reach a distant network?' },
          { icon: 'desktop', label: 'Computer B', desc: 'The destination device receives it.', purpose: 'Deliver the data to the target machine.', question: 'Did it reach the right machine?' }
        ]
      },
      io: {
        inputs: [
          ['A message', 'Sender'],
          ['Data', 'Local network'],
          ['Data', 'Routers'],
          ['Delivered data']
        ],
        outputs: [
          ['Outgoing data'],
          ['Data on the LAN'],
          ['Data crossing networks'],
          ['A received message']
        ]
      },
      who: [
        'Sender device',
        'LAN, Router',
        'ISPs, Routers',
        'Destination device'
      ],
      example: {
        title: 'Messaging a friend abroad',
        items: [
          'Your phone wants to send a message.',
          'It leaves your home Wi-Fi (a LAN).',
          'It crosses many networks over the internet.',
          'It arrives at your friend’s device on their network.'
        ]
      },
      misconceptions: [
        { wrong: 'The internet and Wi-Fi are the same thing.', right: 'Wi-Fi is a local link; the internet is a global network of networks.' },
        { wrong: 'A LAN and the internet are the same.', right: 'A LAN is local; the internet connects networks worldwide.' },
        { wrong: 'Devices talk directly, machine to machine.', right: 'Data usually crosses several networks and devices in between.' }
      ],
      takeaways: [
        'A network connects computers to exchange data.',
        'LANs are local; WANs span larger areas.',
        'The internet is a network of networks.',
        'Networks remove distance as a barrier.'
      ],
      reflection: 'When you load a website, how many separate networks might your request cross?',
      checks: [
        'What does a network do?',
        'What is the difference between a LAN and a WAN?',
        'What is the internet?',
        'Why isn’t Wi-Fi the same as the internet?'
      ]
    },
    {
      id: 'net-ip',
      title: 'IP Addresses',
      blurb: 'The address that identifies a device or destination on a network.',
      whatIs: {
        text: 'An IP address identifies a device or destination on a network. Applications often use names, but networks ultimately need addresses to route data.',
        ensures: [
          '**Private** IP addresses are used inside local networks.',
          '**Public** IP addresses are reachable across the internet.',
          'An IP address identifies a host, not an application.',
          'Names are for humans; addresses are for the network.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From a name to a reachable address.',
        loop: false,
        steps: [
          { icon: 'font', label: 'Human-friendly name', desc: 'People use names like example.com.', purpose: 'Let humans remember destinations easily.', question: 'What name did the user give?' },
          { icon: 'hashtag', label: 'IP address', desc: 'The network needs a numeric address.', purpose: 'Give the network something it can route to.', question: 'What address does the name map to?' },
          { icon: 'house', label: 'Private vs public', desc: 'Local addresses vs internet-reachable ones.', purpose: 'Decide whether the target is local or remote.', question: 'Is this address local or public?' },
          { icon: 'location-dot', label: 'Reach the host', desc: 'Data is routed to that device.', purpose: 'Deliver traffic to the right machine.', question: 'Which host does this identify?' }
        ]
      },
      io: {
        inputs: [
          ['A destination name'],
          ['Name', 'DNS'],
          ['IP address'],
          ['Public address', 'Routing']
        ],
        outputs: [
          ['A name to resolve'],
          ['A numeric address'],
          ['Local or public classification'],
          ['Traffic to the host']
        ]
      },
      who: [
        'User, Application',
        'DNS, Network',
        'Network',
        'Routers, Host'
      ],
      example: {
        title: 'Reaching a web server',
        items: [
          'You type example.com in the browser.',
          'That name resolves to a public IP address.',
          'The address is public, so it’s reachable across the internet.',
          'Your request is routed to that server’s host.'
        ]
      },
      misconceptions: [
        { wrong: 'An IP address identifies an application.', right: 'It identifies a host; ports identify services on that host.' },
        { wrong: 'Every device has a public IP.', right: 'Many use private addresses behind a shared public one.' },
        { wrong: 'Names and IP addresses are interchangeable.', right: 'Names must be resolved to addresses before connecting.' }
      ],
      takeaways: [
        'An IP address identifies a host on a network.',
        'Private addresses are local; public ones are internet-reachable.',
        'Networks route by address, not by name.',
        'A host is not the same as an application.'
      ],
      reflection: 'Why do networks need addresses at all, when people are happy with names?',
      checks: [
        'What does an IP address identify?',
        'What is the difference between private and public IPs?',
        'Does an IP address identify an app or a host?',
        'Why do names need to become addresses?'
      ]
    },
    {
      id: 'net-dns',
      title: 'DNS',
      blurb: 'The system that translates human-friendly names into IP addresses.',
      whatIs: {
        text: 'DNS translates human-friendly names into IP addresses. Users remember names like example.com, but computers need IP addresses to connect. DNS is a foundational dependency for most internet systems.',
        ensures: [
          'DNS turns names into the addresses the network needs.',
          'It is required before most connections can even start.',
          'DNS problems can make a healthy service look "down".',
          'Almost every internet system depends on it.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Name resolution — why DNS matters before anything else can happen.',
        loop: false,
        steps: [
          { icon: 'font', label: 'Domain name', desc: 'The user provides a name.', purpose: 'Start from something humans can remember.', question: 'What name are we resolving?' },
          { icon: 'magnifying-glass', label: 'DNS lookup', desc: 'The name is looked up.', purpose: 'Ask DNS which address the name points to.', question: 'What does this name map to?' },
          { icon: 'hashtag', label: 'IP address', desc: 'The lookup returns an address.', purpose: 'Obtain a routable destination.', question: 'What address came back?' },
          { icon: 'plug', label: 'Connection attempt', desc: 'The client connects to that address.', purpose: 'Use the address to reach the server.', question: 'Can we now connect?' }
        ]
      },
      example: {
        title: 'A "site is down" that isn’t',
        items: [
          'A user types example.com.',
          'The DNS lookup fails to return an address.',
          'No IP means no destination to connect to.',
          'The site looks down — but the server is perfectly healthy; DNS was the problem.'
        ]
      },
      io: {
        inputs: [
          ['Domain name', 'User request'],
          ['Name', 'DNS resolver'],
          ['DNS response'],
          ['Resolved IP address']
        ],
        outputs: [
          ['A name to resolve'],
          ['A lookup request'],
          ['An IP address (or failure)'],
          ['A connection to attempt']
        ]
      },
      who: [
        'User, Application',
        'DNS resolver',
        'DNS servers',
        'Client, Server'
      ],
      misconceptions: [
        { wrong: 'DNS is the website.', right: 'DNS just maps the name to an address; the server hosts the site.' },
        { wrong: 'If a site won’t load, the server must be down.', right: 'DNS failure can block a perfectly healthy server.' },
        { wrong: 'DNS only matters for browsers.', right: 'Most internet systems depend on name resolution.' }
      ],
      takeaways: [
        'DNS maps names to IP addresses.',
        'It usually runs before any connection begins.',
        'DNS issues can mimic an outage.',
        'It is a foundational internet dependency.'
      ],
      reflection: 'If a service is "unreachable", how would you check whether DNS is the real culprit?',
      checks: [
        'What does DNS translate?',
        'Why do computers need it?',
        'How can DNS make a healthy service look down?',
        'Why is DNS called a foundational dependency?'
      ]
    },
    {
      id: 'net-ports',
      title: 'Ports',
      blurb: 'How one machine can run many services — and why a reachable host can still be unavailable.',
      whatIs: {
        text: 'A port identifies a specific service on a machine. The same host can run multiple services on different ports. Web traffic commonly uses port 80 for HTTP and 443 for HTTPS.',
        ensures: [
          'The IP address finds the host; the port finds the service.',
          'One host can run many services at once, each on its own port.',
          'If the host is reachable but the port is blocked, the service is still unavailable.',
          'Ports explain "the server is up but nothing responds".'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Host and port — why a machine can be reachable while a service is not.',
        loop: false,
        steps: [
          { icon: 'hashtag', label: 'IP identifies host', desc: 'The address gets you to the machine.', purpose: 'Locate the right computer on the network.', question: 'Which machine are we reaching?' },
          { icon: 'door-open', label: 'Port identifies service', desc: 'The port picks which service.', purpose: 'Choose the specific service on that machine.', question: 'Which service do we want?' },
          { icon: 'plug', label: 'App connects', desc: 'The client connects to host + port.', purpose: 'Open a connection to the exact service.', question: 'Is that host and port open?' }
        ]
      },
      io: {
        inputs: [
          ['IP address'],
          ['Port number'],
          ['Host', 'Port']
        ],
        outputs: [
          ['The target host'],
          ['The target service'],
          ['A connection to a service']
        ]
      },
      who: [
        'Network',
        'Operating system',
        'Client application, Server'
      ],
      example: {
        title: 'Up, but not answering',
        items: [
          'The server’s IP responds to a ping — the host is reachable.',
          'The web service should be on port 443, but a firewall blocks it.',
          'The connection to that host and port is refused — the host is fine, but the service is unavailable.'
        ]
      },
      misconceptions: [
        { wrong: 'If the host is reachable, the service must work.', right: 'The port may be closed or blocked even if the host is up.' },
        { wrong: 'A machine runs only one service.', right: 'One host can run many services on different ports.' },
        { wrong: 'Ping proving a host is up means the app is up.', right: 'Ping tests the host, not the service on its port.' }
      ],
      takeaways: [
        'A port identifies a service on a machine.',
        'One host can run many services on different ports.',
        'HTTP is port 80; HTTPS is port 443.',
        'A reachable host can still have an unreachable service.'
      ],
      reflection: 'Ping succeeds but the app won’t connect. What does that separation tell you?',
      checks: [
        'What does a port identify?',
        'How can one host run several services?',
        'Which ports do HTTP and HTTPS commonly use?',
        'Why can a reachable host still be unavailable?'
      ]
    },
    {
      id: 'net-transport',
      title: 'TCP & UDP',
      blurb: 'Two ways to move data — reliable and ordered, or simple and fast.',
      whatIs: {
        text: 'TCP provides reliable, ordered communication used by many application protocols. UDP is simpler and often used where speed matters more than guaranteed delivery.',
        ensures: [
          '**TCP:** reliable, ordered, and connection-oriented.',
          '**UDP:** lightweight, fast, with no delivery guarantee.',
          'The right choice depends on what the application values.',
          'You don’t need protocol internals yet — just their roles.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Choosing a transport by what the application needs.',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'What matters most?', desc: 'Reliability or raw speed?', purpose: 'Decide what the application values.', question: 'Do we need every byte, in order?' },
          { icon: 'link', label: 'TCP for reliability', desc: 'Ordered, guaranteed delivery.', purpose: 'Use TCP when correctness beats latency.', question: 'Must nothing be lost or reordered?' },
          { icon: 'bolt', label: 'UDP for speed', desc: 'Fast, best-effort delivery.', purpose: 'Use UDP when speed beats perfect delivery.', question: 'Can we tolerate some loss?' },
          { icon: 'paper-plane', label: 'Data flows', desc: 'The application sends its traffic.', purpose: 'Move the data using the chosen transport.', question: 'Is the data getting through as needed?' }
        ]
      },
      io: {
        inputs: [
          ['App requirements'],
          ['Choice: reliability'],
          ['Choice: speed'],
          ['Chosen transport', 'Data']
        ],
        outputs: [
          ['A transport choice'],
          ['An ordered, guaranteed stream'],
          ['Fast, best-effort datagrams'],
          ['Delivered traffic']
        ]
      },
      who: [
        'Developer',
        'TCP, OS network stack',
        'UDP, OS network stack',
        'Application, Network'
      ],
      example: {
        title: 'File download vs live video',
        items: [
          'Ask what matters: correctness or latency?',
          'A file download uses TCP — every byte must arrive intact.',
          'A live video call uses UDP — a dropped frame beats a frozen call.',
          'Each app’s traffic flows over the transport that fits it.'
        ]
      },
      misconceptions: [
        { wrong: 'TCP and UDP are basically the same.', right: 'TCP guarantees order and delivery; UDP does not.' },
        { wrong: 'Reliable is always better than fast.', right: 'Live media often prefers speed over perfect delivery.' },
        { wrong: 'You must know protocol internals to use them.', right: 'Knowing what each protocol is for is enough to reason about it.' }
      ],
      takeaways: [
        'TCP is reliable and ordered.',
        'UDP is simple and fast, without guarantees.',
        'The choice reflects what the application values.',
        'Roles matter more than internals right now.'
      ],
      reflection: 'For a multiplayer game, which transport would you pick — and what trade-off are you accepting?',
      checks: [
        'What does TCP guarantee?',
        'When is UDP a better fit?',
        'Why isn’t "reliable" always the right choice?',
        'What decides which transport to use?'
      ]
    },
    {
      id: 'net-http',
      title: 'HTTP & HTTPS',
      blurb: 'The web’s application protocol — and the encrypted version that protects it.',
      whatIs: {
        text: 'HTTP is an application protocol used for web communication. HTTPS is HTTP protected using TLS encryption, which secures the data and helps verify the server’s identity.',
        ensures: [
          'HTTP carries web requests and responses.',
          'HTTPS wraps HTTP in TLS encryption.',
          'HTTPS protects data in transit and checks server identity.',
          'HTTPS is about more than hiding passwords.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From plain HTTP to secured HTTPS.',
        loop: false,
        steps: [
          { icon: 'globe', label: 'HTTP request', desc: 'The client asks for a web resource.', purpose: 'Express what the client wants from the server.', question: 'What is being requested?' },
          { icon: 'lock', label: 'TLS wraps it', desc: 'HTTPS encrypts the exchange.', purpose: 'Protect the data and verify the server.', question: 'Is this connection secured?' },
          { icon: 'certificate', label: 'Identity checked', desc: 'A certificate proves the server.', purpose: 'Confirm the client is talking to the real server.', question: 'Is the server who it claims to be?' },
          { icon: 'right-left', label: 'Response returns', desc: 'The server replies securely.', purpose: 'Deliver the answer over the protected channel.', question: 'What did the server send back?' }
        ]
      },
      io: {
        inputs: [
          ['A resource request'],
          ['HTTP request'],
          ['Server certificate'],
          ['Processed request']
        ],
        outputs: [
          ['An HTTP request'],
          ['An encrypted request'],
          ['A verified server'],
          ['A secure response']
        ]
      },
      who: [
        'Client (browser)',
        'TLS layer',
        'Client, Certificate authority',
        'Server, Client'
      ],
      example: {
        title: 'Loading a bank page',
        items: [
          'Your browser sends an HTTP request for the page.',
          'HTTPS encrypts it so no one on the path can read it.',
          'The site’s certificate proves it’s really the bank.',
          'The page returns securely over the protected connection.'
        ]
      },
      misconceptions: [
        { wrong: 'HTTPS is only about hiding passwords.', right: 'It protects all data in transit and verifies server identity.' },
        { wrong: 'HTTP and HTTPS are unrelated protocols.', right: 'HTTPS is HTTP wrapped in TLS.' },
        { wrong: 'HTTPS only matters for login pages.', right: 'It protects every page and helps prove you reached the real site.' }
      ],
      takeaways: [
        'HTTP is the web’s application protocol.',
        'HTTPS is HTTP secured with TLS.',
        'HTTPS protects data and verifies identity.',
        'It matters for far more than just passwords.'
      ],
      reflection: 'Beyond secrecy, what does the padlock in your browser actually promise you?',
      checks: [
        'What is HTTP used for?',
        'What does HTTPS add on top of HTTP?',
        'What two things does TLS help provide?',
        'Why is HTTPS about more than passwords?'
      ]
    }
  ]
}
