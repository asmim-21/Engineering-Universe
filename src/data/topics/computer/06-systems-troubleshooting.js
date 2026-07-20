// Computer Engineering Universe — Workshop 6.
export default {
  id: 'troubleshooting',
  title: 'Computer Systems & Troubleshooting',
  tone: 'c6',
  blurb: 'Computers fail in predictable ways — logs, bottlenecks, service failures, and a systematic method to investigate.',
  tags: ['Logs', 'Bottlenecks', 'Failures', 'Method'],
  popups: [
    {
      id: 'tro-fail',
      title: 'How Systems Fail',
      blurb: 'Computers fail in predictable ways — start by understanding the symptom, not jumping to a fix.',
      whatIs: {
        text: 'Systems can fail from resource exhaustion, misconfiguration, defects, dependency failures, permission issues, disk or network problems, or hardware faults. Troubleshooting starts by understanding the symptom and gathering evidence before jumping to a fix.',
        ensures: [
          'Failure has many common causes, not just "bad code".',
          'Start with the symptom, then gather evidence.',
          'Separate what is known, assumed, and still to be checked.',
          'A good investigator resists jumping to conclusions.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The common families of system failure — the space you’re investigating.',
        loop: false,
        steps: [
          { icon: 'gauge-high', label: 'Resource exhaustion', desc: 'CPU, memory, disk, or network is maxed.', purpose: 'Consider whether a resource ran out.', question: 'Did something run out of capacity?' },
          { icon: 'sliders', label: 'Misconfiguration', desc: 'Wrong settings or environment.', purpose: 'Consider whether config is wrong.', question: 'Is something configured incorrectly?' },
          { icon: 'bug', label: 'Defects & dependencies', desc: 'A bug or a failed dependency.', purpose: 'Consider code faults and broken dependencies.', question: 'Did a bug or dependency fail?' },
          { icon: 'server', label: 'Infrastructure', desc: 'Permissions, disk, network, or hardware.', purpose: 'Consider the environment underneath.', question: 'Is the infrastructure at fault?' }
        ]
      },
      io: {
        inputs: [
          ['Symptom'],
          ['Config & environment'],
          ['Code & dependencies'],
          ['Infrastructure state']
        ],
        outputs: [
          ['Resource ruled in or out'],
          ['Config ruled in or out'],
          ['Bug/dependency ruled in or out'],
          ['Infra ruled in or out']
        ]
      },
      who: [
        'Engineer, Monitoring',
        'Engineer, Operations',
        'Engineer',
        'Engineer, Platform'
      ],
      example: {
        title: 'A service goes down',
        items: [
          'Known: the service stopped responding at 2pm.',
          'Assumed: it might be resource exhaustion.',
          'To check: CPU, memory, disk, config, and dependencies.',
          'Only after evidence do you decide the actual cause.'
        ]
      },
      misconceptions: [
        { wrong: 'A failure always means bad code.', right: 'Config, resources, dependencies, and hardware fail too.' },
        { wrong: 'Jump to a fix as fast as possible.', right: 'Understand the symptom and gather evidence first.' },
        { wrong: 'What you assume is what you know.', right: 'Separate known, assumed, and still-to-check.' }
      ],
      takeaways: [
        'Systems fail in several predictable families.',
        'Start with the symptom, not the fix.',
        'Gather evidence before concluding.',
        'Separate known from assumed.'
      ],
      reflection: 'Last outage you saw — did the team investigate the symptom, or jump straight to a guess?',
      checks: [
        'Name several common causes of system failure.',
        'What do you do before jumping to a fix?',
        'Why separate known from assumed?',
        'Is "bad code" always the cause?'
      ]
    },
    {
      id: 'tro-logs',
      title: 'Logs & Evidence',
      blurb: 'Logs are records of events — good ones carry the context you need to investigate.',
      whatIs: {
        text: 'Logs are records of events produced by systems and applications. Useful logs contain timestamps, error messages, request IDs, component names, and context, helping you see what happened before, during, and after a failure.',
        ensures: [
          'Good logs have timestamps, errors, IDs, and context.',
          'They show the sequence around a failure.',
          'Bad logs are vague, missing context, or too noisy.',
          'Logs are clues, not always the final answer.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Reading a log line for what it actually tells you.',
        loop: false,
        steps: [
          { icon: 'clock', label: 'Timestamp', desc: 'When did it happen?', purpose: 'Place the event in time.', question: 'When did this occur?' },
          { icon: 'cube', label: 'Component', desc: 'Which part logged it?', purpose: 'Locate where the event came from.', question: 'Which component is this?' },
          { icon: 'triangle-exclamation', label: 'Error & context', desc: 'What went wrong, with detail.', purpose: 'Understand the actual problem and its context.', question: 'What happened, exactly?' },
          { icon: 'circle-question', label: 'Next question', desc: 'What does it make you check next?', purpose: 'Turn the clue into the next investigation step.', question: 'What should I look at next?' }
        ]
      },
      io: {
        inputs: [
          ['A log line'],
          ['The log line'],
          ['The log line'],
          ['The clue']
        ],
        outputs: [
          ['When it happened'],
          ['Where it came from'],
          ['What happened'],
          ['The next thing to check']
        ]
      },
      who: [
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer'
      ],
      example: {
        title: 'A single log line',
        items: [
          'The timestamp shows the error hit at 14:02.',
          'The component field points at the payment service.',
          'The message: "connection refused" with the target host.',
          'Next question: is that host up, and is its port open?'
        ]
      },
      misconceptions: [
        { wrong: 'Logs always explain the full problem.', right: 'They’re clues; you often need to check further.' },
        { wrong: 'More logging is always better.', right: 'Noisy logs can bury the useful signal.' },
        { wrong: 'A log without context is still fine.', right: 'Missing timestamps, IDs, or context make logs hard to use.' }
      ],
      takeaways: [
        'Logs record events from systems and apps.',
        'Good logs carry timestamps, errors, IDs, and context.',
        'They show what happened around a failure.',
        'Treat logs as clues, not final answers.'
      ],
      reflection: 'Think of a log you’ve read that was useless. What one field would have made it useful?',
      checks: [
        'What makes a log useful?',
        'What do good logs contain?',
        'Why are logs clues rather than answers?',
        'What makes a log bad?'
      ]
    },
    {
      id: 'tro-bottleneck',
      title: 'Resource Bottlenecks',
      blurb: 'CPU, memory, disk, and network problems can look alike — evidence tells them apart.',
      whatIs: {
        text: 'A bottleneck is a saturated resource. CPU, memory, disk, and network problems can produce similar symptoms, so you need evidence to tell them apart rather than guessing.',
        ensures: [
          '**CPU:** spending too much time executing work.',
          '**Memory:** not enough working memory.',
          '**Disk:** slow reads/writes or storage is full.',
          '**Network:** communication is slow, blocked, or timing out.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The four bottleneck families — distinguished by evidence, not symptoms.',
        steps: [
          { icon: 'microchip', label: 'CPU', desc: 'The processor is saturated.', purpose: 'Test whether compute is the constraint.', question: 'Is CPU usage maxed out?' },
          { icon: 'memory', label: 'Memory', desc: 'Working memory is exhausted.', purpose: 'Test whether RAM is the constraint.', question: 'Is memory full or swapping?' },
          { icon: 'hard-drive', label: 'Disk', desc: 'I/O is slow or storage is full.', purpose: 'Test whether the disk is the constraint.', question: 'Is the disk full or busy?' },
          { icon: 'network-wired', label: 'Network', desc: 'Traffic is slow or timing out.', purpose: 'Test whether the network is the constraint.', question: 'Is the network slow or blocked?' }
        ]
      },
      io: {
        inputs: [
          ['CPU metrics'],
          ['Memory & swap metrics'],
          ['Disk space & I/O metrics'],
          ['Network metrics']
        ],
        outputs: [
          ['CPU ruled in or out'],
          ['Memory ruled in or out'],
          ['Disk ruled in or out'],
          ['Network ruled in or out']
        ]
      },
      who: [
        'Engineer, Monitoring',
        'Engineer, Monitoring',
        'Engineer, Monitoring',
        'Engineer, Monitoring'
      ],
      example: {
        title: 'Telling them apart',
        items: [
          'CPU metrics are low — probably not compute.',
          'Memory is full and swapping — a strong candidate.',
          'Disk has space but is busy serving the swap.',
          'Network latency is normal — evidence points to memory.'
        ]
      },
      misconceptions: [
        { wrong: 'Slow systems are always network issues.', right: 'CPU, memory, and disk cause slowness too.' },
        { wrong: 'Similar symptoms mean the same cause.', right: 'Different bottlenecks can look alike — check evidence.' },
        { wrong: 'You can eyeball the bottleneck.', right: 'Metrics distinguish resources that guessing cannot.' }
      ],
      takeaways: [
        'Bottlenecks are saturated resources.',
        'CPU, memory, disk, and network are the usual families.',
        'Symptoms overlap; evidence separates them.',
        'Measure before you conclude.'
      ],
      reflection: 'What single metric would most quickly separate a memory problem from a disk problem?',
      checks: [
        'What is a bottleneck?',
        'What are the four resource families?',
        'Why can’t you rely on symptoms alone?',
        'What distinguishes a memory issue from a disk issue?'
      ]
    },
    {
      id: 'tro-service',
      title: 'Process & Service Failures',
      blurb: 'Why services crash or won’t start — and why restarting isn’t the same as fixing.',
      whatIs: {
        text: 'A process may crash, hang, or be killed by the OS. A service may fail to start because of missing configuration, permissions, ports, dependencies, or resource limits. Restarting may recover a service but does not explain why it failed.',
        ensures: [
          'Processes can crash, hang, or be killed.',
          'Services fail to start for config, permission, port, or dependency reasons.',
          'Restarting recovers, but doesn’t explain.',
          'Good troubleshooting includes verification and prevention.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Why a service won’t start — the usual suspects.',
        loop: false,
        steps: [
          { icon: 'door-closed', label: 'Port in use', desc: 'Another process holds the port.', purpose: 'Check whether the port is already taken.', question: 'Is the port free?' },
          { icon: 'sliders', label: 'Missing config', desc: 'A required setting is absent.', purpose: 'Check for missing configuration or variables.', question: 'Is the config complete?' },
          { icon: 'lock', label: 'Permission denied', desc: 'It lacks access it needs.', purpose: 'Check permissions on files and resources.', question: 'Does it have the access it needs?' },
          { icon: 'diagram-project', label: 'Dependency down', desc: 'Something it relies on is unavailable.', purpose: 'Check that dependencies are up.', question: 'Are its dependencies available?' },
          { icon: 'circle-check', label: 'Verify & prevent', desc: 'Confirm the fix and stop a recurrence.', purpose: 'Ensure it truly recovered and won’t repeat.', question: 'Is it fixed, and why did it happen?' }
        ]
      },
      example: {
        title: 'Service fails to start',
        items: [
          'The log says the port is already in use.',
          'Config is present and complete.',
          'Permissions check out too.',
          'Dependencies are all up — so it’s the port.',
          'Stop the stale process, restart cleanly, and add a check so it can’t recur silently.'
        ]
      },
      io: {
        inputs: [
          ['Port status'],
          ['Config & environment'],
          ['Permissions'],
          ['Dependency health'],
          ['Applied fix']
        ],
        outputs: [
          ['Port free or blocked'],
          ['Config complete or missing'],
          ['Access sufficient or denied'],
          ['Dependencies up or down'],
          ['Verified recovery', 'Prevention step']
        ]
      },
      who: [
        'Engineer, Operating system',
        'Engineer, Operations',
        'Engineer, Operating system',
        'Engineer, Dependent services',
        'Engineer'
      ],
      misconceptions: [
        { wrong: 'Restarting is the same as fixing.', right: 'It may recover the service without explaining the cause.' },
        { wrong: 'A crash always means a code bug.', right: 'It may be resources, config, permissions, or dependencies.' },
        { wrong: 'If it starts, you’re done.', right: 'Verify recovery and prevent a recurrence.' }
      ],
      takeaways: [
        'Processes crash, hang, or get killed.',
        'Services fail to start for config, port, permission, or dependency reasons.',
        'Restarting recovers but doesn’t explain.',
        'Good troubleshooting verifies and prevents.'
      ],
      reflection: 'A restart "fixed" it. What have you actually learned about why it broke?',
      checks: [
        'What can happen to a failing process?',
        'Why might a service fail to start?',
        'Why isn’t restarting the same as fixing?',
        'What should good troubleshooting include beyond recovery?'
      ]
    },
    {
      id: 'tro-method',
      title: 'Troubleshooting Methodology',
      blurb: 'A reusable investigation model — from symptom to documented learning.',
      whatIs: {
        text: 'Good troubleshooting follows a method: define the problem, find what changed, gather evidence, form and test hypotheses one at a time, apply a fix, verify recovery, and document the cause and the learning.',
        ensures: [
          'Define the problem clearly before acting.',
          'Test one hypothesis at a time.',
          'Verify that the fix actually worked.',
          'Document the cause so others learn from it.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A reusable investigation model you can apply to any system problem.',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'Understand symptom', desc: 'Define the problem clearly.', purpose: 'Know exactly what is wrong before investigating.', question: 'What is actually happening?' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Collect logs, metrics, and changes.', purpose: 'Base the investigation on facts.', question: 'What does the evidence show?' },
          { icon: 'lightbulb', label: 'Form hypothesis', desc: 'Propose a likely cause.', purpose: 'Give the investigation something to test.', question: 'What might be causing this?' },
          { icon: 'flask', label: 'Test hypothesis', desc: 'Check it, one at a time.', purpose: 'Confirm or rule out the cause.', question: 'Does the evidence support it?' },
          { icon: 'screwdriver-wrench', label: 'Fix or mitigate', desc: 'Apply a change.', purpose: 'Resolve or reduce the problem.', question: 'What change addresses the cause?' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm recovery.', purpose: 'Make sure the problem is truly gone.', question: 'Did it actually recover?' },
          { icon: 'book', label: 'Document learning', desc: 'Record cause and lesson.', purpose: 'Help the next person avoid or solve it faster.', question: 'What did we learn?' }
        ]
      },
      example: {
        title: 'A slow endpoint',
        items: [
          'Symptom: one API endpoint is slow since this morning.',
          'Evidence: logs show slow database queries.',
          'Hypothesis: a missing index after a recent change.',
          'Test: check the query plan — it’s doing a full scan.',
          'Fix: add the index.',
          'Verify: response times return to normal.',
          'Document: note the cause and add a check for it.'
        ]
      },
      io: {
        inputs: [
          ['Symptom report'],
          ['Logs', 'Metrics', 'Recent changes'],
          ['Gathered evidence'],
          ['A hypothesis'],
          ['Confirmed cause'],
          ['Applied fix'],
          ['Verified outcome']
        ],
        outputs: [
          ['A clear problem statement'],
          ['A body of evidence'],
          ['A testable hypothesis'],
          ['Hypothesis confirmed or rejected'],
          ['A change applied'],
          ['Confirmed recovery'],
          ['A written learning']
        ]
      },
      who: [
        'Engineer, Users',
        'Engineer, Monitoring',
        'Engineer',
        'Engineer',
        'Engineer, Operations',
        'Engineer, Users',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'The first hypothesis is usually correct.', right: 'Test hypotheses one at a time; the first is often wrong.' },
        { wrong: 'Once it works, you can skip documentation.', right: 'Documenting the cause prevents the next occurrence.' },
        { wrong: 'Change several things at once to fix it fast.', right: 'Change one thing at a time so you know what worked.' }
      ],
      takeaways: [
        'Follow a repeatable method, not guesswork.',
        'Test one hypothesis at a time.',
        'Verify recovery before moving on.',
        'Document the cause and the learning.'
      ],
      reflection: 'Which step do people skip most under pressure — and what does skipping it cost later?',
      checks: [
        'What’s the first step of the method?',
        'Why test one hypothesis at a time?',
        'Why verify after fixing?',
        'Why document the cause?'
      ]
    },
    {
      id: 'tro-evidence',
      title: 'Evidence Sources',
      blurb: 'Where to look during an investigation — logs, metrics, process status, config, changes, and users.',
      whatIs: {
        text: 'When investigating, evidence comes from several places. Knowing where to look keeps you from guessing and helps you build a picture of what happened.',
        ensures: [
          '**Logs** and **metrics** show behaviour over time.',
          '**Process status** and **configuration** show the current state.',
          '**Recent changes** are a frequent root cause.',
          '**User reports** describe the real-world impact.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Failure evidence sources — where to look during an investigation.',
        steps: [
          { icon: 'file-lines', label: 'Logs', desc: 'Event records from systems.', purpose: 'See what the system reported happening.', question: 'What do the logs say?' },
          { icon: 'chart-line', label: 'Metrics', desc: 'Resource and performance data.', purpose: 'See trends and saturation over time.', question: 'What do the metrics show?' },
          { icon: 'list-check', label: 'Process & config', desc: 'Current state and settings.', purpose: 'Check what is running and how it’s set up.', question: 'What is the current state?' },
          { icon: 'code-branch', label: 'Recent changes', desc: 'What was deployed or altered.', purpose: 'Correlate the failure with a change.', question: 'What changed recently?' },
          { icon: 'users', label: 'User reports', desc: 'Real-world impact and timing.', purpose: 'Understand the actual impact and when it began.', question: 'What are users experiencing?' }
        ]
      },
      io: {
        inputs: [
          ['System events'],
          ['Resource data'],
          ['Current state'],
          ['Change history'],
          ['User feedback']
        ],
        outputs: [
          ['Log evidence'],
          ['Trends over time'],
          ['State & settings'],
          ['Recent changes'],
          ['Impact & timing']
        ]
      },
      who: [
        'Systems, Engineer',
        'Monitoring, Engineer',
        'Engineer, Operations',
        'Engineer, Deployment logs',
        'Users, Support'
      ],
      example: {
        title: 'Building the picture',
        items: [
          'Logs show errors starting at 09:00.',
          'Metrics show memory climbing from the same time.',
          'Process status confirms the service is swapping.',
          'A config change went out at 08:55.',
          'Users report slowness beginning right after — a consistent story.'
        ]
      },
      misconceptions: [
        { wrong: 'Logs are the only evidence that matters.', right: 'Metrics, config, changes, and users all add signal.' },
        { wrong: 'Recent changes are rarely the cause.', right: 'They’re one of the most common root causes.' },
        { wrong: 'User reports are too vague to use.', right: 'They anchor the timing and real-world impact.' }
      ],
      takeaways: [
        'Evidence comes from many sources, not just logs.',
        'Metrics reveal trends and saturation.',
        'Recent changes are a common root cause.',
        'User reports ground the impact and timing.'
      ],
      reflection: 'For your last incident, which evidence source cracked it — and which did you check too late?',
      checks: [
        'Name the main sources of failure evidence.',
        'What do metrics add beyond logs?',
        'Why check recent changes?',
        'What do user reports contribute?'
      ]
    }
  ]
}
