// Computer Engineering toolkit — reachable from every page in the computer
// universe via the "Toolkit" button. Same shape as topic popups, minus
// `misconceptions`. These are systems-thinking loops that recur across all six
// workshops.
export const toolkit = [
  {
    id: 'kit-follow-the-stack',
    title: 'Follow the Stack',
    blurb: 'Symptom → application → OS/process → resources → network → name the layer.',
    concept: 'When something misbehaves, walk down the stack one layer at a time so you reason about the whole system instead of fixating on the app.',
    visual: {
      kind: 'flow',
      label: 'Follow the stack — locate a problem by layer instead of guessing.',
      loop: false,
      steps: [
        { icon: 'window-maximize', label: 'Start at the application', desc: 'What is the user-visible symptom?' },
        { icon: 'gears', label: 'Drop to the OS & process', desc: 'Is the process running, waiting, or killed?' },
        { icon: 'microchip', label: 'Check the resources', desc: 'CPU, memory, and disk — is one saturated?' },
        { icon: 'network-wired', label: 'Check the network', desc: 'DNS, connectivity, ports, and TLS.' },
        { icon: 'circle-check', label: 'Name the layer', desc: 'Locate the failing layer, then fix that.' }
      ]
    },
    reflection: 'For the problem in front of you, which layer of the stack have you actually checked?'
  },
  {
    id: 'kit-evidence-loop',
    title: 'Evidence Before Guessing',
    blurb: 'Symptom → gather evidence → hypothesis → test one thing → verify → document.',
    concept: 'Resource, service, and network problems look alike. Let evidence — not a hunch — decide the cause, and change one thing at a time.',
    visual: {
      kind: 'flow',
      label: 'The evidence loop — the core habit behind every investigation.',
      steps: [
        { icon: 'circle-question', label: 'Describe the symptom', desc: 'State exactly what is wrong.' },
        { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Logs, metrics, config, and recent changes.' },
        { icon: 'lightbulb', label: 'Form one hypothesis', desc: 'A specific, testable cause.' },
        { icon: 'flask', label: 'Test one thing', desc: 'Change a single variable and observe.' },
        { icon: 'circle-check', label: 'Verify & document', desc: 'Confirm recovery and record the learning.' }
      ]
    },
    reflection: 'Are you about to change something based on evidence — or on a guess?'
  },
  {
    id: 'kit-trace-the-request',
    title: 'Trace the Request',
    blurb: 'Name → DNS → connection → TLS → server → application response.',
    concept: 'When a request fails, follow it through the chain and locate the failure by stage, rather than assuming "the server is down".',
    visual: {
      kind: 'flow',
      label: 'Trace the request — locate a failure by stage in the request chain.',
      loop: false,
      steps: [
        { icon: 'magnifying-glass', label: 'Resolve the name', desc: 'Did DNS return an address?' },
        { icon: 'route', label: 'Reach the host', desc: 'Is the network path open to it?' },
        { icon: 'lock', label: 'Secure the connection', desc: 'Is the certificate valid and TLS working?' },
        { icon: 'server', label: 'Reach the service', desc: 'Is the server up and the port open?' },
        { icon: 'gears', label: 'Get a response', desc: 'Did the application actually respond?' }
      ]
    },
    reflection: 'Which stage of the request chain have you confirmed, and which are you still assuming?'
  }
]
