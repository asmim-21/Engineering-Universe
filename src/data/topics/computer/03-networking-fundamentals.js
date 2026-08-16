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
        text: `A network is machines connected so they can exchange data. A **local area network (LAN)** covers one place — a home, an office, a data centre. A **wide area network (WAN)** links those places over distance. The **internet** is not a single network at all; it is a global network of networks that have agreed on common rules.

Between your device and a destination sit several pieces. A **switch** connects devices within a local network. A **router** forwards traffic between networks and is what your traffic hits first on the way out. Beyond that, your internet service provider passes traffic to other providers until it reaches the destination's network — typically ten to twenty hops, each one adding a little delay.

That physical reality is why networked software behaves differently from local software. Every hop can drop a packet, slow down or disappear entirely, so **latency**, **loss** and **partial failure** are normal conditions rather than exceptions. A network call is not a slower function call; it is one that can fail in ways a function cannot.`,
        ensures: [
          'Distinguish a LAN, a WAN and the internet',
          'Name what switches and routers each do',
          'Explain why traffic crosses many networks to reach its destination',
          'Understand latency, bandwidth and packet loss as separate ideas',
          'Say why a network call is riskier than a local call',
          'Recognise that Wi-Fi is a link, not the internet'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From one device to another, across networks.',
        loop: false,
        steps: [
          { icon: 'desktop', label: 'Device A', desc: 'Wants to send data.', purpose: 'Originate the message and hand it to the network.', question: 'Who is sending, and to where?' },
          { icon: 'network-wired', label: 'Local network', desc: 'Switch and router nearby.', purpose: 'Move traffic within the local network and out to the router.', question: 'Is the destination local or elsewhere?' },
          { icon: 'globe', label: 'The internet', desc: 'Many networks, many hops.', purpose: 'Forward the traffic network by network towards the destination.', question: 'Which route does it take, and how long does that add?' },
          { icon: 'desktop', label: 'Device B', desc: 'Receives the data.', purpose: 'Deliver it to the right machine on the far network.', question: 'Did all of it arrive?' }
        ]
      },
      io: {
        inputs: [
          ['A message', 'A destination'],
          ['Data', 'Local network'],
          ['Data', 'Routes', 'Provider networks'],
          ['Arriving packets']
        ],
        outputs: [
          ['Outgoing data'],
          ['Data leaving via the router'],
          ['Data crossing many networks'],
          ['A reassembled message — or a gap']
        ]
      },
      who: [
        'Sender device',
        'Switch, Router',
        'Providers, Routers',
        'Destination device'
      ],
      example: {
        title: 'Messaging a friend abroad',
        items: [
          'Your phone composes a message and hands it to the network.',
          'It crosses your Wi-Fi to the home router — that is the local network.',
          'It hops across a dozen provider networks to reach their country.',
          'Their device receives it, roughly 100ms later.'
        ]
      },
      misconceptions: [
        { wrong: 'Wi-Fi and the internet are the same thing.', right: 'Wi-Fi is a local link; the internet is the network of networks beyond it.' },
        { wrong: 'Devices talk directly to each other.', right: 'Traffic crosses switches, routers and several provider networks.' },
        { wrong: 'Faster broadband makes everything faster.', right: 'Bandwidth is capacity; latency is delay — they are different limits.' },
        { wrong: 'A network call is just a slow function call.', right: 'It can also be lost, duplicated, or half-completed.' }
      ],
      takeaways: [
        '**LAN is local, WAN spans distance, the internet joins networks.** Everything else is built on that arrangement.',
        '**Routers connect networks; switches connect devices within one.** Your traffic meets a router the moment it leaves the building.',
        '**Latency and bandwidth are different limits.** A fat connection with high latency still feels slow for small frequent requests.',
        '**Distance costs time.** Light in fibre takes real milliseconds — a round trip across the world cannot be under about 150ms.',
        '**Every hop can fail.** Loss, delay and partial delivery are normal network conditions, not exotic edge cases.',
        '**Network calls need timeouts and retries.** Code that assumes a response will always arrive will eventually hang.',
        '**Wi-Fi problems and internet problems look identical to a user** — and the difference is the first thing worth checking.'
      ],
      reflection: 'When you load a website, roughly how many networks does the request cross, and what could go wrong at each hop? Which of those would look identical from your browser?',
      checks: [
        'What is the difference between a LAN, a WAN and the internet?',
        'What do routers and switches each do?',
        'What is the difference between bandwidth and latency?',
        'Why is there a floor on how fast a global round trip can be?',
        'Why do network calls need timeouts?',
        'Why is Wi-Fi not the same as the internet?'
      ]
    },
    {
      id: 'net-ip',
      title: 'IP Addresses',
      blurb: 'The address that identifies a device or destination on a network.',
      whatIs: {
        text: `An Internet Protocol (IP) address identifies a **host** — a machine or interface — on a network. Names exist for humans; routing happens on addresses.

Addresses come in two families. **IPv4** looks like \`192.168.1.10\`: four numbers, about 4.3 billion possible values, which the world ran out of. **IPv6** looks like \`2001:db8::1\` and provides an effectively unlimited supply. They coexist, which is why a machine often has both.

The other split is **private versus public**. Private ranges (\`10.x\`, \`172.16–31.x\`, \`192.168.x\`) are reusable inside any local network and are not routable on the internet. Your laptop almost certainly has one, and your home router uses **network address translation (NAT)** to share a single public address across every device behind it. That is why the address your machine reports and the address a website sees are usually different — and why "the server cannot reach my machine" is normal rather than broken. Finally, an IP identifies a host, not a service: the port does that.`,
        ensures: [
          'Read IPv4 and IPv6 addresses and know why both exist',
          'Distinguish private and public address ranges',
          'Explain NAT and why many devices share one public address',
          'Know that an address identifies a host, not an application',
          'Understand why local and public addresses differ',
          'Recognise localhost and what it means'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From a name to a routable address.',
        loop: false,
        steps: [
          { icon: 'font', label: 'A name', desc: 'People use example.com.', purpose: 'Let humans use something memorable and stable.', question: 'What name did the user give?' },
          { icon: 'hashtag', label: 'An IP address', desc: 'The network needs a number.', purpose: 'Turn the name into something routers can act on.', question: 'Which address does that name map to?' },
          { icon: 'house', label: 'Private or public?', desc: 'Local network or internet.', purpose: 'Decide whether the destination is inside or outside.', question: 'Is this address reachable from the internet?' },
          { icon: 'location-dot', label: 'Reach the host', desc: 'Routers forward it there.', purpose: 'Deliver the traffic to the right machine.', question: 'Did it reach the intended host?' }
        ]
      },
      io: {
        inputs: [
          ['A destination name'],
          ['Name', 'Domain Name System (DNS)'],
          ['An IP address'],
          ['Address', 'Routing tables']
        ],
        outputs: [
          ['A name to resolve'],
          ['A numeric address'],
          ['Local or internet-routable'],
          ['Traffic delivered to a host']
        ]
      },
      who: [
        'User, Application',
        'DNS, Resolver',
        'Network, Router (NAT)',
        'Routers, Destination host'
      ],
      example: {
        title: 'Reaching a web server',
        items: [
          'You type example.com into the browser.',
          'It resolves to the public address 93.184.216.34.',
          'That is a public address, so it is routable across the internet.',
          'Routers forward your request hop by hop until it reaches that host.'
        ]
      },
      misconceptions: [
        { wrong: 'An IP address identifies an application.', right: 'It identifies a host; the port identifies the service on it.' },
        { wrong: 'Every device has its own public address.', right: 'Most sit behind NAT, sharing one public address.' },
        { wrong: 'IP addresses are permanent.', right: 'Most are assigned dynamically and change over time.' },
        { wrong: 'An address tells you exactly where a machine is.', right: 'It gives a rough location at best, and often a provider\'s.' }
      ],
      takeaways: [
        '**Routing happens on addresses; names are a convenience layer** resolved before any connection is made.',
        '**IPv4 ran out, hence IPv6.** Both are in use, and a machine typically has an address of each.',
        '**Private addresses are local and reusable.** `192.168.x` in your house and in mine are different machines entirely.',
        '**NAT shares one public address** across many devices, which is why your laptop\'s address is not the one servers see.',
        '**An IP identifies a host, not a service.** A machine with one address can run dozens of services, distinguished by port.',
        '**`localhost` (127.0.0.1) means this machine.** A service bound only to localhost is unreachable from anywhere else — a very common confusion.',
        '**Addresses change.** Hard-coding one instead of a name is a bug waiting for the next restart or scale-up.'
      ],
      reflection: 'Your laptop reports 192.168.1.24 but a website reports seeing a different address. Explain both — and why a colleague cannot connect to a service you are running on localhost.',
      checks: [
        'What does an IP address identify?',
        'Why does IPv6 exist?',
        'What is the difference between a private and a public address?',
        'What does NAT do?',
        'What does an address not tell you about a service?',
        'What does binding a service to localhost mean in practice?'
      ]
    },
    {
      id: 'net-dns',
      title: 'DNS',
      blurb: 'The system that translates human-friendly names into IP addresses.',
      whatIs: {
        text: `The Domain Name System (DNS) turns names into addresses. Before your browser can connect to \`example.com\`, something must find out which Internet Protocol (IP) address that name points to — and that lookup happens before any connection exists.

Resolution is a chain with caching at every level. Your machine checks its own cache, then asks a **resolver** (usually your provider's or a public one). If that does not know, it asks the **root** servers, then the servers for \`.com\`, then the **authoritative** servers for \`example.com\`, which give the answer. Every step caches the result for a period set by the record's **time to live (TTL)**.

That caching is what makes DNS fast and also what makes DNS changes slow. Update a record and clients keep using the old address until their cached copy expires — which is exactly why migrations lower the TTL beforehand. And because resolution comes first, DNS failure looks identical to an outage: the service is completely healthy, but nobody can find out where it is.`,
        ensures: [
          'Explain what DNS resolves and why it happens first',
          'Describe the resolver, root, top-level and authoritative chain',
          'Understand caching and time to live (TTL)',
          'Predict why a DNS change does not take effect immediately',
          'Recognise DNS failure as a cause of apparent outages',
          'Know the common record types and what each is for'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Name resolution — what happens before any connection.',
        loop: false,
        steps: [
          { icon: 'font', label: 'A name is used', desc: 'The user or app supplies a name.', purpose: 'Start from something human-readable.', question: 'What name needs resolving?' },
          { icon: 'magnifying-glass', label: 'Check caches', desc: 'Local, then resolver.', purpose: 'Answer instantly if the name was resolved recently.', question: 'Do we already know the answer?' },
          { icon: 'sitemap', label: 'Ask the hierarchy', desc: 'Root → .com → authoritative.', purpose: 'Walk down to the servers that own the name.', question: 'Who is authoritative for this domain?' },
          { icon: 'plug', label: 'Address returned', desc: 'Now a connection can start.', purpose: 'Hand a routable address back to the client.', question: 'What address came back, and for how long is it valid?' }
        ]
      },
      example: {
        title: 'A "site is down" that is not',
        items: [
          'A user types example.com and gets an error.',
          'The local and resolver caches have no entry.',
          'The authoritative servers do not answer — the record was deleted.',
          'No address means no connection: the site looks down, though the server is fine.'
        ]
      },
      io: {
        inputs: [
          ['A domain name'],
          ['Name', 'Local and resolver caches'],
          ['Name', 'Root, TLD, authoritative servers'],
          ['A DNS answer', 'Its TTL']
        ],
        outputs: [
          ['A name to resolve'],
          ['A cached answer — or a miss'],
          ['The authoritative answer'],
          ['An IP address to connect to']
        ]
      },
      who: [
        'User, Application',
        'Operating system (OS) resolver, DNS resolver',
        'Root, TLD and authoritative servers',
        'Client, Server'
      ],
      misconceptions: [
        { wrong: 'DNS is the website.', right: 'It maps the name to an address; the server hosts the content.' },
        { wrong: 'If a site will not load, the server is down.', right: 'A DNS failure blocks a perfectly healthy server.' },
        { wrong: 'DNS changes take effect immediately.', right: 'Cached answers persist until their TTL expires.' },
        { wrong: 'DNS only matters for browsers.', right: 'Almost every service — databases, application programming interfaces (APIs), mail — resolves names first.' }
      ],
      takeaways: [
        '**Resolution happens before the connection.** If DNS fails, nothing else gets a chance to work.',
        '**Caching is everywhere:** browser, operating system, resolver. It makes DNS fast and makes changes propagate slowly.',
        '**TTL controls how long a stale answer survives.** Lower it before a planned migration, raise it afterwards.',
        '**"It works for me" is often a cache difference.** Two people can genuinely be sent to different servers during a change.',
        '**DNS failure mimics an outage** — which is why checking name resolution is one of the first diagnostic steps.',
        '**Record types matter:** A and AAAA map names to IPv4 and IPv6 addresses, CNAME aliases one name to another, MX directs mail.',
        '**DNS is a dependency you did not write.** Its failures are yours to survive, so caching and sensible timeouts matter.'
      ],
      reflection: 'You change a domain to point at a new server and half your users still reach the old one. Explain why, how long it will last, and what you should have done the week before.',
      checks: [
        'What does DNS translate, and when does it happen?',
        'What is the resolution chain from cache to authoritative server?',
        'What does TTL control?',
        'Why do DNS changes not take effect immediately?',
        'How can DNS make a healthy service appear down?',
        'What do A, CNAME and MX records do?'
      ]
    },
    {
      id: 'net-ports',
      title: 'Ports',
      blurb: 'How one machine can run many services — and why a reachable host can still be unavailable.',
      whatIs: {
        text: `An Internet Protocol (IP) address gets you to a machine. A **port** picks which service on that machine you want. Together they form an endpoint like \`93.184.216.34:443\` — host plus service.

Some port numbers are conventional: 80 for HyperText Transfer Protocol (HTTP), 443 for HTTP Secure (HTTPS), 22 for SSH, 5432 for PostgreSQL, 3306 for MySQL. Nothing enforces this, but the conventions are why a browser can assume 443 when you type a plain address.

Ports explain a family of confusing symptoms. A host can be perfectly reachable while a service is not: **connection refused** means you reached the machine and nothing was listening on that port; a **timeout** usually means a firewall silently dropped the traffic; **address already in use** means another process holds that port. And a service **bound** only to \`localhost\` accepts connections from its own machine and nothing else, which is why something can work over SSH and be unreachable from anywhere.`,
        ensures: [
          'Explain how host and port combine to reach a service',
          'Recognise the common well-known port numbers',
          'Interpret connection refused, timeout and address-in-use',
          'Understand what binding to localhost versus all interfaces means',
          'See why ping success says nothing about a service',
          'Know how firewalls affect reachability'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Host and port — why a machine can be up while a service is not.',
        loop: false,
        steps: [
          { icon: 'hashtag', label: 'IP finds the host', desc: 'Routing gets to the machine.', purpose: 'Deliver traffic to the right computer.', question: 'Is the machine reachable at all?' },
          { icon: 'door-open', label: 'Port finds the service', desc: 'One machine, many services.', purpose: 'Select which listening process should receive it.', question: 'Which service are we asking for?' },
          { icon: 'plug', label: 'Connect — or not', desc: 'Refused, timed out, or accepted.', purpose: 'Establish the connection, or produce a diagnostic failure.', question: 'What exactly came back: refused, timeout, or success?' }
        ]
      },
      io: {
        inputs: [
          ['An IP address', 'Routing'],
          ['A port number', 'Listening processes'],
          ['Host and port', 'Firewall rules']
        ],
        outputs: [
          ['Traffic at the host'],
          ['The target service — or nothing listening'],
          ['A connection, a refusal, or a timeout']
        ]
      },
      who: [
        'Network, Routers',
        'Operating system',
        'Client, Server, Firewall'
      ],
      example: {
        title: 'Up, but not answering',
        items: [
          'Ping succeeds — the host is reachable and alive.',
          'The web service should be listening on port 443.',
          'The connection times out: a firewall is dropping traffic to that port.'
        ]
      },
      misconceptions: [
        { wrong: 'If the host responds, the service works.', right: 'The port may be closed, blocked, or nothing may be listening.' },
        { wrong: 'A machine runs one service.', right: 'One host can run dozens, each on its own port.' },
        { wrong: 'Refused and timeout mean the same thing.', right: 'Refused means nothing is listening; timeout usually means something is blocking.' },
        { wrong: 'Ping is a service health check.', right: 'It tests the host, not the application on its port.' }
      ],
      takeaways: [
        '**Address plus port is the real destination.** The address finds the machine; the port finds the process.',
        '**Well-known ports are conventions:** 80 HTTP, 443 HTTPS, 22 SSH, 5432 PostgreSQL. Handy to recognise, not enforced.',
        '**"Connection refused" means you got there and nothing was listening** — usually the service is down or on a different port.',
        '**A timeout usually means a firewall,** silently dropping traffic rather than answering.',
        '**"Address already in use" means another process holds the port** — often an earlier copy of your own service.',
        '**Binding matters.** Listening on localhost accepts only local connections; listening on all interfaces accepts remote ones too.',
        '**Ping tests the host, not the service.** A successful ping and a failing application are entirely consistent.'
      ],
      reflection: 'A colleague says "the server is up, I pinged it" but the application cannot connect. List three explanations involving ports and how the error message would differ in each.',
      checks: [
        'What does a port identify?',
        'Which ports do HTTP, HTTPS and SSH conventionally use?',
        'What does "connection refused" tell you?',
        'What usually causes a connection timeout instead?',
        'What is the difference between binding to localhost and to all interfaces?',
        'Why does a successful ping not mean the service works?'
      ]
    },
    {
      id: 'net-transport',
      title: 'TCP & UDP',
      blurb: 'Two ways to move data — reliable and ordered, or simple and fast.',
      whatIs: {
        text: `Once traffic can reach a host and port, something has to decide how the data is moved. The two options are **Transmission Control Protocol (TCP)** and **User Datagram Protocol (UDP)**.

TCP is **connection-oriented and reliable**. It establishes a connection with a handshake, numbers every segment, acknowledges what arrived, retransmits what did not, and delivers the bytes to the application in order. It also slows itself down when the network is congested. Web pages, application programming interfaces (APIs), databases and file transfers all use it, because a missing or reordered byte would be unacceptable.

UDP just sends **datagrams**. No handshake, no acknowledgements, no ordering, no retransmission — if one is lost, it is gone. That sounds worse until you consider live video: a frame that arrives late is useless anyway, so waiting for a retransmission makes the call worse, not better. Voice, video, games and Domain Name System (DNS) lookups use UDP for exactly this reason. The trade is simple: TCP costs latency to guarantee completeness; UDP costs completeness to keep latency low.`,
        ensures: [
          'Explain what TCP guarantees and how it does it',
          'Explain what UDP deliberately does not do',
          'Match a workload to the right transport',
          'Understand why the handshake adds latency',
          'See why retransmission hurts real-time media',
          'Know that TCP delivery does not mean the application processed it'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Choosing a transport by what the application actually needs.',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'What matters most?', desc: 'Completeness or latency.', purpose: 'Decide what the application cannot tolerate losing.', question: 'Is a missing byte worse than a late one?' },
          { icon: 'link', label: 'TCP: reliable, ordered', desc: 'Handshake, acknowledge, retransmit.', purpose: 'Guarantee every byte arrives, in order.', question: 'Must the data be complete and in sequence?' },
          { icon: 'bolt', label: 'UDP: fast, best-effort', desc: 'Send and forget.', purpose: 'Minimise delay by not waiting for anything.', question: 'Is stale data worthless anyway?' },
          { icon: 'paper-plane', label: 'Data flows', desc: 'The application sends its traffic.', purpose: 'Move the data with the chosen trade-off.', question: 'Is the behaviour under loss acceptable?' }
        ]
      },
      io: {
        inputs: [
          ['Application requirements'],
          ['Data', 'A connection'],
          ['Data', 'A destination'],
          ['The chosen transport', 'Network conditions']
        ],
        outputs: [
          ['A transport decision'],
          ['An ordered, guaranteed byte stream'],
          ['Best-effort datagrams'],
          ['Delivered traffic — with its trade-offs']
        ]
      },
      who: [
        'Developer',
        'TCP, operating system (OS) network stack',
        'UDP, OS network stack',
        'Application, Network'
      ],
      example: {
        title: 'File download versus live video',
        items: [
          'Ask what the application cannot tolerate: missing bytes, or delay.',
          'A file download uses TCP — a corrupted file is worthless.',
          'A video call uses UDP — a dropped frame beats a frozen picture.',
          'Each gets the behaviour it needs under packet loss.'
        ]
      },
      misconceptions: [
        { wrong: 'TCP and UDP are broadly the same.', right: 'One guarantees delivery and order; the other guarantees neither.' },
        { wrong: 'Reliable is always better.', right: 'Real-time media prefers a lost frame to a late one.' },
        { wrong: 'UDP is unreliable, so it is unsafe.', right: 'Applications add their own handling where they need it.' },
        { wrong: 'If TCP delivered it, the application handled it.', right: 'Delivery to the socket is not the same as processing.' }
      ],
      takeaways: [
        '**TCP guarantees completeness and order,** using handshakes, acknowledgements and retransmission — all of which cost time.',
        '**UDP guarantees nothing and is fast,** because it never waits for confirmation or retransmits.',
        '**Choose by what is worse: missing or late.** That single question picks the transport almost every time.',
        '**The handshake costs a round trip** before any data moves, which matters most on high-latency links.',
        '**Retransmission is harmful for live media.** A frame that arrives after its moment is worse than no frame at all.',
        '**TCP slows down under congestion by design,** which is why a saturated network degrades gradually rather than collapsing.',
        '**Delivered is not processed.** TCP confirms arrival at the machine; whether the application acted on it is a separate question — which is why application-level acknowledgements exist.'
      ],
      reflection: 'For a multiplayer game, which transport would you choose and what are you accepting? Now do the same for its in-game chat — and explain why the answers might differ.',
      checks: [
        'What does TCP guarantee, and how?',
        'What does UDP deliberately not do?',
        'How do you decide between them?',
        'Why does the TCP handshake matter on slow links?',
        'Why is retransmission bad for a video call?',
        'Why is "TCP delivered it" not the same as "the app handled it"?'
      ]
    },
    {
      id: 'net-http',
      title: 'HTTP & HTTPS',
      blurb: 'The web\'s application protocol — and the encrypted version that protects it.',
      whatIs: {
        text: `HyperText Transfer Protocol (HTTP) is the request-and-response protocol the web runs on. A client sends a **method** (GET, POST, PUT, DELETE), a **path**, **headers** and sometimes a **body**; the server replies with a **status code**, headers and a body. It is **stateless** — the server does not remember you between requests, which is why sessions are carried in cookies or tokens.

Status codes are the fastest diagnostic tool on the web: 2xx succeeded, 3xx redirected, 4xx the client got something wrong (400 bad request, 401 not authenticated, 403 forbidden, 404 not found), 5xx the server failed. Knowing the ranges alone routes a problem to the right team.

**HTTP Secure (HTTPS)** is HTTP carried inside **Transport Layer Security (TLS)**. It provides three things, not just secrecy: **encryption** so nobody on the path can read the traffic, **integrity** so it cannot be altered undetected, and **authentication** through a certificate proving the server really is who the name claims. That last one is what stops an attacker who controls the network from impersonating a site — which is why the certificate warning is the one browser message that should never be clicked past.`,
        ensures: [
          'Describe an HTTP request and response and their parts',
          'Interpret status codes by range and common case',
          'Explain what stateless means and how sessions work around it',
          'Say what TLS provides beyond encryption',
          'Understand what a certificate proves and what a warning means',
          'Know why HTTPS matters on every page, not just logins'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From a plain request to a secured exchange.',
        loop: false,
        steps: [
          { icon: 'globe', label: 'HTTP request', desc: 'Method, path, headers, body.', purpose: 'State what the client wants and who it is.', question: 'What is being requested, and by whom?' },
          { icon: 'lock', label: 'TLS wraps it', desc: 'Encrypted before it leaves.', purpose: 'Make the traffic unreadable and tamper-evident in transit.', question: 'Can anyone on the path read or change this?' },
          { icon: 'certificate', label: 'Identity checked', desc: 'The certificate is verified.', purpose: 'Prove the server genuinely owns this domain name.', question: 'Is this really the site it claims to be?' },
          { icon: 'right-left', label: 'Response returns', desc: 'Status code and body.', purpose: 'Deliver the result securely, with a status the client can act on.', question: 'Did it succeed, and if not, whose fault was it?' }
        ]
      },
      io: {
        inputs: [
          ['A resource to fetch', 'Credentials'],
          ['The HTTP request'],
          ['The server certificate', 'Trusted authorities'],
          ['The processed request']
        ],
        outputs: [
          ['A method, path, headers, body'],
          ['An encrypted, integrity-protected request'],
          ['A verified server identity — or a warning'],
          ['A status code and response body']
        ]
      },
      who: [
        'Client (browser or app)',
        'TLS layer',
        'Client, Certificate authority',
        'Server, Client'
      ],
      example: {
        title: 'Loading a bank page',
        items: [
          'The browser sends `GET /accounts` with your session cookie.',
          'TLS encrypts it, so the café Wi-Fi sees only an encrypted blob.',
          'The certificate proves the server really owns the bank\'s domain.',
          'A 200 response returns the page over the protected connection.'
        ]
      },
      misconceptions: [
        { wrong: 'HTTPS only hides passwords.', right: 'It protects all traffic and proves the server\'s identity.' },
        { wrong: 'HTTP and HTTPS are different protocols.', right: 'HTTPS is HTTP carried inside TLS.' },
        { wrong: 'The padlock means the site is trustworthy.', right: 'It means the connection is secure to whoever owns that name.' },
        { wrong: 'A 200 response means everything worked.', right: 'The request succeeded; the body may still report a failure.' }
      ],
      takeaways: [
        '**HTTP is request and response:** method, path, headers, body — then a status code back.',
        '**Status ranges route the problem:** 4xx means the caller is wrong, 5xx means the server is. That is often the whole triage.',
        '**HTTP is stateless.** The server does not remember you, which is why cookies and tokens carry identity on every request.',
        '**TLS provides three things:** encryption, integrity and authentication. Only the first is what most people think of.',
        '**A certificate proves domain ownership, not honesty.** The padlock means "you are really talking to this name", not "this name is trustworthy".',
        '**Certificate warnings are serious.** They are the one case where the browser genuinely cannot tell whether you are being impersonated.',
        '**HTTPS matters on every page.** Without it, traffic can be read, and — more dangerously — modified in transit.'
      ],
      reflection: 'Beyond secrecy, what does the padlock actually promise? And what does it deliberately say nothing about?',
      checks: [
        'What are the parts of an HTTP request and response?',
        'What do the status code ranges tell you?',
        'What does stateless mean, and how do sessions work around it?',
        'What three properties does TLS provide?',
        'What does a certificate actually prove?',
        'Why does HTTPS matter on pages with no login?'
      ]
    }
  ]
}
