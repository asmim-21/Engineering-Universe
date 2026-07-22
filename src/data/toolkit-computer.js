// Computer Engineering toolkit — reachable from every page in the computer
// universe via the "Toolkit" button. Same shape as topic popups, minus
// `misconceptions`. Each loop is written to stand entirely on its own: read
// just this and you should know exactly what to do next time something in a
// system misbehaves.
export const toolkit = [
  {
    id: 'kit-follow-the-stack',
    title: 'Follow the Stack',
    blurb: 'Symptom → application → OS/process → resources → network → name the layer.',
    concept: "Use this the moment something \"just doesn't work\" and you don't yet know which layer is responsible. Instead of guessing at the application first, you walk down the stack one level at a time until you find the layer that is actually broken — then stop and fix that one.",
    visual: {
      kind: 'flow',
      label: 'Follow the stack — locate a problem by layer instead of guessing.',
      loop: false,
      steps: [
        { icon: 'window-maximize', label: 'Start at the application', desc: 'Write down exactly what the user sees — an error, a freeze, wrong output — before assuming any cause.', purpose: 'Pin down the visible symptom before hunting for a cause.', question: 'What is the user actually experiencing?' },
        { icon: 'gears', label: 'Drop to the OS & process', desc: 'Check whether the process is even running, and whether it is active, waiting on something, or has been killed.', purpose: 'Rule the process itself in or out as the problem.', question: 'Is the process alive, stuck, or gone?' },
        { icon: 'microchip', label: 'Check the resources', desc: 'Look at CPU, memory, and disk usage — one of them is often pegged while the others sit idle.', purpose: 'Find out whether a resource is actually saturated.', question: 'Is CPU, memory, or disk the bottleneck?' },
        { icon: 'network-wired', label: 'Check the network', desc: 'Confirm DNS resolves, the host is reachable, the right port is open, and TLS/certificates are valid.', purpose: 'Rule networking in or out as the cause.', question: 'Can we actually reach the right host and port?' },
        { icon: 'circle-check', label: 'Name the layer', desc: 'State which single layer is actually broken, in one sentence, before you touch a fix.', purpose: 'Turn the investigation into one specific, fixable target.', question: 'Which layer is really at fault?' }
      ]
    },
    reflection: 'For the problem in front of you, which layer have you actually confirmed — and which are you still just assuming?'
  },
  {
    id: 'kit-evidence-loop',
    title: 'Evidence Before Guessing',
    blurb: 'Symptom → gather evidence → hypothesis → test one thing → verify → document.',
    concept: "Use this for any system failure — a crash, a slowdown, a service that won't start. Resource, config, and network problems often look identical from the outside, so evidence, not a hunch, has to decide the cause — and changing one thing at a time is what lets you trust the result.",
    visual: {
      kind: 'flow',
      label: 'The evidence loop — the core habit behind every investigation.',
      steps: [
        { icon: 'circle-question', label: 'Describe the symptom', desc: 'Write exactly what is wrong, when it started, and who or what is affected — a vague symptom leads to a vague fix.', purpose: 'Turn a fuzzy complaint into one precise, checkable statement.', question: 'What exactly is wrong, and since when?' },
        { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Pull logs, metrics, config, and the list of anything that changed recently — before forming any theory.', purpose: 'Build a factual picture before guessing at causes.', question: 'What do the logs, metrics, and recent changes actually show?' },
        { icon: 'lightbulb', label: 'Form one hypothesis', desc: 'Pick a single, specific, testable cause — not three at once.', purpose: 'Give yourself one clear thing to test.', question: 'What is the one most likely cause?' },
        { icon: 'flask', label: 'Test one thing', desc: "Change exactly one variable and observe the result — change two at once and, even if it fixes things, you won't know which one mattered.", purpose: 'Isolate cause and effect cleanly.', question: 'Did changing this one thing actually fix it?' },
        { icon: 'circle-check', label: 'Verify & document', desc: 'Confirm the fix actually holds under real conditions, then write down the cause and the fix somewhere the next person will find it.', purpose: "Make sure it's really fixed, and save the next investigation.", question: 'Is it actually fixed, and did I write it down?' }
      ]
    },
    reflection: "Are you about to change something based on evidence you've actually gathered — or on a guess?"
  },
  {
    id: 'kit-trace-the-request',
    title: 'Trace the Request',
    blurb: 'Name → DNS → connection → TLS → server → application response.',
    concept: 'Use this whenever a request fails and it is unclear where — "the site won\'t load", "the API times out". Follow the exact path a request takes and check each stage in order until you find the one that is actually broken, instead of guessing at "the server" first.',
    visual: {
      kind: 'flow',
      label: 'Trace the request — locate a failure by stage in the request chain.',
      loop: false,
      steps: [
        { icon: 'magnifying-glass', label: 'Resolve the name', desc: 'Confirm DNS actually returns an address for the name — if this fails, nothing after it can possibly work.', purpose: 'Rule DNS in or out as the very first possible failure point.', question: 'Did DNS return an address at all?' },
        { icon: 'route', label: 'Reach the host', desc: 'Check whether the network path to that address is actually open — ping or traceroute if you need to.', purpose: 'Confirm the host is reachable over the network.', question: 'Is the network path to this host actually open?' },
        { icon: 'lock', label: 'Secure the connection', desc: 'Check the certificate is valid and not expired, and that the TLS handshake actually completes.', purpose: 'Rule out certificate or TLS problems.', question: 'Is the certificate valid and is TLS completing?' },
        { icon: 'server', label: 'Reach the service', desc: 'Confirm the specific port is open and something is actually listening on it — not just that the host replies to a ping.', purpose: "Distinguish \"the host is up\" from \"the service is up\".", question: 'Is the right port open with something listening?' },
        { icon: 'gears', label: 'Get a response', desc: 'Check whether the application actually replies, and with what — a slow, wrong, or missing response points at the app, not the network.', purpose: 'Confirm the failure is application-level, not lower down the stack.', question: 'Did the application actually respond, and with what?' }
      ]
    },
    reflection: 'Which stage of the request chain have you actually confirmed — and which are you still just assuming?'
  }
]
