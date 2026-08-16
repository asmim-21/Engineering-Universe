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
        text: `Failures cluster into a small number of families, and knowing them turns "something is broken" into a short list of things to check. **Resources** run out — processor, memory, disk or network saturated. **Configuration** is wrong or missing for this environment. **Code and dependencies** fail — a defect, or a service you rely on being down. **Infrastructure** underneath breaks — permissions, storage, the network, or hardware.

The most useful question at the start of almost any investigation is **"what changed?"** Systems that ran happily for months rarely break spontaneously. A deploy, a configuration edit, a certificate expiring, a disk filling gradually, an upstream provider having a bad day — something moved, and finding it usually finds the cause.

The discipline is to separate what you **know** from what you **assume** from what you still need to **check**. Under pressure those three collapse into each other, and an assumption treated as a fact sends the whole investigation down the wrong path — which is expensive precisely when time matters most.`,
        ensures: [
          'Name the common families of failure',
          'Start from the symptom rather than a suspected fix',
          'Ask what changed before anything else',
          'Separate known, assumed and unverified',
          'Recognise that "bad code" is only one possibility',
          'Resist acting on the first plausible theory'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The families of failure — the space you are searching.',
        loop: false,
        steps: [
          { icon: 'gauge-high', label: 'Resources', desc: 'Central processing unit (CPU), memory, disk or network saturated.', purpose: 'Check whether something simply ran out of capacity.', question: 'Did a resource hit its limit?' },
          { icon: 'sliders', label: 'Configuration', desc: 'Wrong or missing settings.', purpose: 'Check what this environment was actually given.', question: 'Is the configuration right for here?' },
          { icon: 'bug', label: 'Code & dependencies', desc: 'A defect, or something upstream down.', purpose: 'Check recent changes and the health of what you depend on.', question: 'Did our code change, or did something we call fail?' },
          { icon: 'server', label: 'Infrastructure', desc: 'Permissions, storage, network, hardware.', purpose: 'Check the layer underneath the application.', question: 'Is the platform beneath us healthy?' }
        ]
      },
      io: {
        inputs: [
          ['Symptom', 'Resource metrics'],
          ['Environment', 'Config values'],
          ['Deploy history', 'Dependency status'],
          ['Platform and hardware state']
        ],
        outputs: [
          ['Resources ruled in or out'],
          ['Configuration ruled in or out'],
          ['Code and dependencies ruled in or out'],
          ['Infrastructure ruled in or out']
        ]
      },
      who: [
        'Engineer, Monitoring',
        'Engineer, Operations',
        'Engineer, Upstream teams',
        'Engineer, Platform'
      ],
      example: {
        title: 'A service goes down',
        items: [
          'Known: it stopped responding at 14:02 and returns nothing.',
          'Checked: memory and disk are normal; not resource exhaustion.',
          'Checked: a configuration change was deployed at 13:58.',
          'Confirmed: the new config points at a database that does not exist here.'
        ]
      },
      misconceptions: [
        { wrong: 'A failure means someone wrote bad code.', right: 'Configuration, resources, dependencies and hardware fail too.' },
        { wrong: 'Fix it as fast as possible.', right: 'Understand the symptom first, or you will fix the wrong thing quickly.' },
        { wrong: 'Systems break spontaneously.', right: 'Something almost always changed — find it.' },
        { wrong: 'What you assume is what you know.', right: 'Assumptions treated as facts send investigations sideways.' }
      ],
      takeaways: [
        '**Failures fall into families:** resources, configuration, code and dependencies, infrastructure. That list is the search space.',
        '**"What changed?" is the highest-yield question.** Deploys, config edits, certificates and gradually filling disks cause most sudden failures.',
        '**Symptom first, cause second.** Write down exactly what is happening, for whom, and since when, before touching anything.',
        '**Separate known, assumed and unchecked.** Under pressure these merge, and the merged version is usually wrong.',
        '**Gradual failures hide.** A disk filling over three weeks looks sudden on the day it completes.',
        '**Dependencies fail on their own schedule.** Your code can be perfect and your service still down.',
        '**The first plausible theory is a hypothesis, not a diagnosis.** Test it before acting on it.'
      ],
      reflection: 'Think of the last outage you saw. Was the cause in the code, the configuration, the resources or a dependency — and how long did it take before anyone asked what had changed?',
      checks: [
        'What are the common families of system failure?',
        'Why is "what changed?" such a productive first question?',
        'What should you do before attempting a fix?',
        'Why separate what you know from what you assume?',
        'Why do gradual failures appear sudden?',
        'Can a service fail with no fault in its own code?'
      ]
    },
    {
      id: 'tro-logs',
      title: 'Logs & Evidence',
      blurb: 'Logs are records of events — good ones carry the context you need to investigate.',
      whatIs: {
        text: `A log line is the system telling you something happened. Whether it is useful depends on what it carries: a **timestamp**, a **level** (info, warning, error), the **component** that emitted it, an **identifier** tying it to a request or user, and enough **context** to act on — which host, which record, which value.

Reading logs well is mostly narrowing. Start from a time window around the failure, then follow a single request through the system using its correlation identifier rather than reading everything. Read the **first** error rather than the most alarming one: later errors are usually consequences, and the earliest is closest to the cause.

Logs also mislead in specific ways worth knowing. They only contain what someone thought to record, so absence of evidence is not evidence of absence. Timestamps may be in different timezones across systems. Volume buries signal, so an ERROR that fires constantly stops being read. And logs tell you **what happened**, rarely **why** — the why usually comes from combining them with what changed.`,
        ensures: [
          'Identify the parts of a useful log line',
          'Narrow by time and follow one request by its identifier',
          'Read the first error rather than the loudest',
          'Recognise what logs cannot tell you',
          'Watch for timezone and clock differences',
          'Write log messages that will help someone else at 3am'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Reading a log line for what it actually tells you.',
        loop: false,
        steps: [
          { icon: 'clock', label: 'When', desc: 'Timestamp and timezone.', purpose: 'Place the event precisely, and beware mixed timezones.', question: 'Exactly when — and in whose clock?' },
          { icon: 'cube', label: 'Where', desc: 'Component, host, environment.', purpose: 'Locate which part of which system emitted it.', question: 'Which component, on which host?' },
          { icon: 'triangle-exclamation', label: 'What', desc: 'Level, message, context.', purpose: 'Understand the event and the values involved.', question: 'What happened, and to what?' },
          { icon: 'link', label: 'Which request', desc: 'Correlation identifier.', purpose: 'Follow one journey instead of reading everything.', question: 'Can I trace this request across services?' },
          { icon: 'circle-question', label: 'So what next', desc: 'The clue points somewhere.', purpose: 'Turn the line into the next specific check.', question: 'What does this make me look at next?' }
        ]
      },
      io: {
        inputs: [
          ['A time window'],
          ['Log source', 'Component filter'],
          ['The log line', 'Its level'],
          ['A correlation id'],
          ['The clue']
        ],
        outputs: [
          ['A bounded search'],
          ['The emitting component'],
          ['What happened, with values'],
          ['One request\'s full journey'],
          ['The next thing to check']
        ]
      },
      who: [
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer'
      ],
      example: {
        title: 'One useful log line',
        items: [
          '14:02:11 UTC — matching the reported failure window.',
          'Component: payment-service, host prod-03.',
          'ERROR "connection refused" to db-primary:5432.',
          'Request id ties it to the user\'s failed checkout.',
          'Next: is db-primary listening, and did anything change at 14:00?'
        ]
      },
      misconceptions: [
        { wrong: 'Logs explain the whole problem.', right: 'They are clues; the why usually needs the change history too.' },
        { wrong: 'More logging is always better.', right: 'Noise buries signal, and volume costs money and attention.' },
        { wrong: 'The most alarming error is the cause.', right: 'The earliest one usually is; later ones cascade from it.' },
        { wrong: 'Timestamps across systems line up.', right: 'Timezones and clock drift make that a dangerous assumption.' }
      ],
      takeaways: [
        '**A useful log line answers when, where, what and which request.** Missing any of those makes it much harder to act on.',
        '**Narrow before you read.** A two-minute window and one request identifier turn an unreadable stream into a story.',
        '**Read the first error.** Cascading failures produce dramatic later messages that are pure consequence.',
        '**Correlation identifiers are what make distributed logs usable.** One id, carried everywhere, reconstructs the journey.',
        '**Logs contain only what someone chose to record.** Silence can mean "did not happen" or "was never logged".',
        '**Check timezones.** Comparing 14:02 local with 14:02 UTC has misled a great many investigations.',
        '**Log levels are a contract.** If ERROR fires all day, nobody will react to the one that matters.',
        '**Write logs for the person debugging at 3am:** the identifiers, the values that mattered, and no secrets.'
      ],
      reflection: 'Find a log line from a system you use. Can you tell when, where, what and which request it belongs to? Which of the four is missing — and how much harder does that make an investigation?',
      checks: [
        'What makes a log line useful?',
        'How do you narrow down which lines matter?',
        'Why read the earliest error first?',
        'What does a correlation identifier let you do?',
        'What can logs never tell you?',
        'Why can timestamps across systems mislead?'
      ]
    },
    {
      id: 'tro-bottleneck',
      title: 'Resource Bottlenecks',
      blurb: 'CPU, memory, disk, and network problems can look alike — evidence tells them apart.',
      whatIs: {
        text: `A bottleneck is whichever resource runs out first. Four candidates cover almost everything: **processor**, **memory**, **disk** and **network**. They produce overlapping symptoms — slow, unresponsive, timing out — so evidence rather than intuition has to separate them.

Each has a signature. A central processing unit (CPU) bottleneck shows high utilisation and, often, one core at 100% while others idle (a single-threaded limit). Memory pressure shows high usage plus **swapping**, and swapping drags everything down because disk is far slower than random-access memory (RAM). Disk problems show as high **I/O wait** or simply no free space. Network problems show as high latency, packet loss or timeouts, usually with the local processor comfortably idle.

Two things regularly mislead. Symptoms are often **second-order** — memory pressure saturates the disk, so the disk looks guilty when memory is the cause. And the constraint may be on a **different machine** entirely: a service waiting on a slow database shows idle resources everywhere locally while being completely stuck.`,
        ensures: [
          'Name the four resources and how to measure each',
          'Recognise the characteristic signature of each bottleneck',
          'Distinguish a cause from a second-order symptom',
          'Spot when the real constraint is elsewhere',
          'Interpret I/O wait, swapping and per-core utilisation',
          'Measure before concluding'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Four candidates, separated by evidence.',
        steps: [
          { icon: 'microchip', label: 'CPU', desc: 'Busy, or one core pinned.', purpose: 'Check total and per-core utilisation.', question: 'Is it saturated — and on every core or just one?' },
          { icon: 'memory', label: 'Memory', desc: 'Full, and swapping.', purpose: 'Check usage and swap activity together.', question: 'Is it swapping, and has usage been climbing?' },
          { icon: 'hard-drive', label: 'Disk', desc: 'Full, or high I/O wait.', purpose: 'Check free space and time spent waiting on I/O.', question: 'Is it out of space, or out of throughput?' },
          { icon: 'network-wired', label: 'Network', desc: 'Latency, loss, timeouts.', purpose: 'Check whether time is spent waiting on something remote.', question: 'Are we waiting on another system?' }
        ]
      },
      io: {
        inputs: [
          ['CPU metrics, per core'],
          ['Memory usage', 'Swap activity'],
          ['Free space', 'I/O wait'],
          ['Latency', 'Loss', 'Timeouts']
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
          'CPU sits at 12% across all cores — not compute.',
          'Memory is at 98% and swapping steadily — a strong candidate.',
          'Disk has space but high I/O wait, caused by that swapping.',
          'Network latency is normal — so the cause is memory, not disk.'
        ]
      },
      misconceptions: [
        { wrong: 'Slowness is usually the network.', right: 'Any of the four can produce identical symptoms.' },
        { wrong: 'The busiest resource is the cause.', right: 'It may be a consequence — swapping makes disk look guilty.' },
        { wrong: 'Low CPU means the machine is fine.', right: 'An idle machine waiting on a dependency is completely stuck.' },
        { wrong: 'You can tell by feel.', right: 'Metrics distinguish what intuition consistently confuses.' }
      ],
      takeaways: [
        '**Four candidates: CPU, memory, disk, network.** Checking all four in order beats guessing at any one.',
        '**Each has a signature.** Pinned cores, swapping, I/O wait and timeouts point at different resources.',
        '**One core at 100% with the rest idle is a single-threaded limit,** not an underpowered machine.',
        '**Swapping is memory pressure showing up as disk load** — the classic second-order symptom.',
        '**An idle machine can still be the problem\'s location,** if it is waiting on something slow elsewhere.',
        '**Bottlenecks move.** Relieve the tightest one and the next appears — that is progress, not failure.',
        '**Measure, then conclude.** Every experienced engineer has spent an afternoon optimising the wrong resource.'
      ],
      reflection: 'Which single metric would most quickly separate a memory problem from a disk problem? And which metric tells you the machine is not the problem at all?',
      checks: [
        'What are the four resource families?',
        'What is the signature of each?',
        'What does one saturated core with the rest idle mean?',
        'Why does swapping make the disk look guilty?',
        'How can a machine be idle and still be the bottleneck\'s location?',
        'Why is measurement essential here?'
      ]
    },
    {
      id: 'tro-service',
      title: 'Process & Service Failures',
      blurb: 'Why services crash or won\'t start — and why restarting isn\'t the same as fixing.',
      whatIs: {
        text: `Services fail in two distinct ways: they **will not start**, or they **stop working while running**. The causes differ, and so do the checks.

Startup failures are usually environmental and, helpfully, loud. A **port** is already held by another process. **Configuration** is missing for this environment. **Permissions** are insufficient for a file, directory or socket. A **dependency** it needs at startup — a database, a queue, a secret store — is unavailable. The startup logs almost always name which, if anyone reads them.

Running services fail differently: a crash from an unhandled error, a **hang** where the process is alive but blocked, an out-of-memory kill by the operating system, or a slow **leak** that takes days to matter. The tempting response is a restart, and sometimes that is the right first move to reduce impact — but restarting **recovers without explaining**. If a service is restarted nightly and nobody knows why, the underlying problem is still there, quietly getting worse.`,
        ensures: [
          'Distinguish startup failures from failures while running',
          'Check port, configuration, permissions and dependencies at startup',
          'Recognise crash, hang, out-of-memory kill and leak',
          'Read startup logs before changing anything',
          'Know when a restart is mitigation rather than a fix',
          'Follow recovery with an explanation and a guard'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Why a service will not start — the usual suspects, in order.',
        loop: false,
        steps: [
          { icon: 'door-closed', label: 'Port in use', desc: 'Something else holds it.', purpose: 'Check whether an old instance is still running.', question: 'Is the port free, and whose process holds it?' },
          { icon: 'sliders', label: 'Missing config', desc: 'A required value is absent.', purpose: 'Check the environment actually provides what is needed.', question: 'Which variable or file is missing here?' },
          { icon: 'lock', label: 'Permissions', desc: 'It cannot read or write what it needs.', purpose: 'Check the account it runs as against what it touches.', question: 'As whom does it run, and can that account do this?' },
          { icon: 'diagram-project', label: 'Dependency down', desc: 'Something it needs is unavailable.', purpose: 'Check the services required at startup.', question: 'Is everything it needs at boot actually up?' },
          { icon: 'circle-check', label: 'Verify & prevent', desc: 'Confirm, then stop the repeat.', purpose: 'Check it truly recovered and add a guard or a clearer error.', question: 'Why did this happen, and what stops it recurring?' }
        ]
      },
      example: {
        title: 'A service fails to start',
        items: [
          'The startup log says the address is already in use.',
          'Configuration is complete — not that.',
          'Permissions are fine — not that either.',
          'Dependencies are all healthy, so it is the port.',
          'An old instance never shut down: stop it, restart, and add a startup check.'
        ]
      },
      io: {
        inputs: [
          ['Port status', 'Running processes'],
          ['Environment', 'Config files'],
          ['Service account', 'File permissions'],
          ['Dependency health'],
          ['The applied fix']
        ],
        outputs: [
          ['Port free, or a process to stop'],
          ['Config complete, or the missing value'],
          ['Access sufficient, or the denied resource'],
          ['Dependencies up, or the one that is down'],
          ['Verified recovery', 'A guard against recurrence']
        ]
      },
      who: [
        'Engineer, Operating system',
        'Engineer, Operations',
        'Engineer, Operating system',
        'Engineer, Dependent services',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'Restarting is fixing.', right: 'It recovers the service without explaining anything.' },
        { wrong: 'A crash means a code bug.', right: 'Out-of-memory kills, config and dependencies all crash services.' },
        { wrong: 'A hung service is dead.', right: 'It is alive and blocked — often on something remote.' },
        { wrong: 'If it starts, the incident is over.', right: 'Unexplained recovery means it will happen again.' }
      ],
      takeaways: [
        '**Startup failures are environmental and loud.** Port, config, permissions, dependencies — the log usually names which.',
        '**Read the startup log first.** It is the single highest-value thirty seconds in this whole category.',
        '**A hang is not a crash.** The process is alive and blocked, which needs a completely different investigation.',
        '**Out-of-memory kills look like unexplained disappearances,** with no application error at all — check the system log.',
        '**Restart to reduce impact, then investigate.** Mitigation and diagnosis are both legitimate; skipping the second is not.',
        '**A service restarted on a schedule for unknown reasons is an unfixed bug** with a workaround attached.',
        '**"Address already in use" usually means your own previous instance,** not a mysterious conflict.',
        '**Finish with a guard:** a clearer startup error, a health check, or an alert that catches it next time.'
      ],
      reflection: 'A restart "fixed" it. What do you actually know about the cause — and what would you check before the next restart to learn something instead?',
      checks: [
        'What are the common reasons a service will not start?',
        'What should you read first?',
        'What is the difference between a crash and a hang?',
        'How do you spot an out-of-memory kill?',
        'When is restarting the right first action?',
        'What should follow a recovery?'
      ]
    },
    {
      id: 'tro-method',
      title: 'Troubleshooting Methodology',
      blurb: 'A reusable investigation model — from symptom to documented learning.',
      whatIs: {
        text: `Under pressure, method beats instinct. The reliable sequence is: define the symptom precisely, find what changed, gather evidence, form one hypothesis, test it, fix, verify, and write down what you learned.

Two disciplines do most of the work. **Change one thing at a time**, so that a result actually means something — three simultaneous changes leave you unable to say what helped or what you broke. And **halve the search space** with each test: is it the whole service or one endpoint, all users or one region, since the deploy or before it? Each answer eliminates a large fraction of the possibilities, which is far faster than working through candidates one by one.

Verification and documentation are the steps people skip. Verifying means reproducing the original symptom and seeing it gone, not observing that things look better. Documenting means the next person — very possibly you at 3am in six months — finds the answer in two minutes instead of repeating the whole investigation.`,
        ensures: [
          'Follow a repeatable sequence rather than improvising',
          'Define the symptom precisely before investigating',
          'Change one thing at a time',
          'Halve the search space with each test',
          'Verify against the original symptom',
          'Record the cause and the fix so it is findable'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A reusable investigation model for any system problem.',
        loop: false,
        steps: [
          { icon: 'circle-question', label: 'Define the symptom', desc: 'What, for whom, since when.', purpose: 'Turn a vague report into something specific and measurable.', question: 'What exactly is wrong, and when did it start?' },
          { icon: 'clock-rotate-left', label: 'Find what changed', desc: 'Deploys, config, data, upstream.', purpose: 'Start where most causes are.', question: 'What changed just before it began?' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Logs, metrics, state.', purpose: 'Collect facts before forming opinions.', question: 'What does the system actually report?' },
          { icon: 'lightbulb', label: 'One hypothesis', desc: 'A single testable claim.', purpose: 'Commit to something specific enough to be wrong.', question: 'What would explain all of this?' },
          { icon: 'flask', label: 'Test it', desc: 'One change, one result.', purpose: 'Confirm or eliminate, without changing several things.', question: 'Did that confirm or rule it out?' },
          { icon: 'screwdriver-wrench', label: 'Fix and verify', desc: 'Against the original symptom.', purpose: 'Prove the specific failure is gone, not merely absent.', question: 'Does the original reproduction now pass?' },
          { icon: 'book', label: 'Document', desc: 'Cause, fix, prevention.', purpose: 'Make the next occurrence a two-minute lookup.', question: 'Where will the next person find this?' }
        ]
      },
      example: {
        title: 'A slow endpoint',
        items: [
          'Symptom: one endpoint takes 8s instead of 200ms, since 09:00 today.',
          'Changed: a release went out at 08:55.',
          'Evidence: logs show one database query taking most of the time.',
          'Hypothesis: the release added a filter with no supporting index.',
          'Test: the query plan shows a full table scan — confirmed.',
          'Fix: add the index; the endpoint returns to 210ms.',
          'Document: the cause, the index, and a check for unindexed filters.'
        ]
      },
      io: {
        inputs: [
          ['A report', 'Timing'],
          ['Deploy and config history'],
          ['Logs', 'Metrics', 'State'],
          ['Assembled evidence'],
          ['A hypothesis', 'One change'],
          ['A confirmed cause'],
          ['The whole investigation']
        ],
        outputs: [
          ['A precise problem statement'],
          ['A prime suspect'],
          ['Facts and a timeline'],
          ['One testable claim'],
          ['Confirmed or eliminated'],
          ['A verified fix'],
          ['A findable write-up']
        ]
      },
      who: [
        'Engineer, Users',
        'Engineer, DevOps',
        'Engineer, Monitoring',
        'Engineer',
        'Engineer',
        'Engineer, Users',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'The first hypothesis is usually right.', right: 'It is often wrong, which is why it must be tested.' },
        { wrong: 'Change several things to fix it faster.', right: 'Then no result means anything, and you may add a second fault.' },
        { wrong: 'It looks fine now, so it is fixed.', right: 'Verify against the original symptom, not against an impression.' },
        { wrong: 'Documentation can wait until later.', right: 'Later means never, and the detail is gone within a day.' }
      ],
      takeaways: [
        '**Define the symptom precisely first:** what, for whom, since when. Everything downstream depends on that being right.',
        '**"What changed?" comes second because it is where most causes are.** Deploys, config, data and upstream services.',
        '**Change one thing at a time.** It is the difference between an experiment and a mess.',
        '**Halve the search space with each test.** One endpoint or all? One region or everywhere? Each answer eliminates a lot.',
        '**Verify against the original symptom.** "Seems better" is not a result, and coincidences happen.',
        '**Mitigation and diagnosis are different jobs.** Reduce impact first if users are affected, then find out why.',
        '**Write it down while it is fresh.** A short honest note now beats a polished reconstruction next week.',
        '**Under pressure, method is what stops flailing.** The sequence is most valuable precisely when there is least time.'
      ],
      reflection: 'Which step do people skip most under pressure — and what does skipping it cost the next time the same thing happens?',
      checks: [
        'What is the first step, and why?',
        'Why ask what changed so early?',
        'Why change only one thing at a time?',
        'What does "halve the search space" mean in practice?',
        'What does proper verification require?',
        'Why document immediately rather than later?'
      ]
    },
    {
      id: 'tro-evidence',
      title: 'Evidence Sources',
      blurb: 'Where to look during an investigation — logs, metrics, process status, config, changes, and users.',
      whatIs: {
        text: `Evidence comes from several places, and each answers a different question. **Logs** say what happened and in what order. **Metrics** say how much and since when — they are what turn "it feels slow" into "latency doubled at 09:15". **Process and system state** says what is true right now: what is running, what it is connected to, how much memory it holds. **Configuration** says what this environment was actually told to do, which is frequently not what you assume.

**Change history** deserves its own place. Deploys, configuration edits, feature flags, infrastructure changes and dependency upgrades cause a large share of incidents, so a timeline of changes lined up against a timeline of symptoms is often the whole diagnosis.

**User reports** are the source people undervalue. They are imprecise, but they anchor the real impact and the timing, and they sometimes contain the detail that unlocks everything — "only when I upload a large file", "only on the mobile app". The strongest investigations **triangulate**: when logs, metrics, changes and users all tell the same story, you have a cause rather than a theory.`,
        ensures: [
          'Know which source answers which question',
          'Use metrics for scale and timing, logs for detail',
          'Check current state as well as historical records',
          'Treat change history as a primary source',
          'Take user reports seriously as evidence',
          'Triangulate rather than relying on one source'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Where to look, and what each source answers.',
        steps: [
          { icon: 'file-lines', label: 'Logs', desc: 'What happened, in order.', purpose: 'Get the detail and the sequence around the failure.', question: 'What did the system report, and in what order?' },
          { icon: 'chart-line', label: 'Metrics', desc: 'How much, since when.', purpose: 'Establish scale, trend and the moment it started.', question: 'How bad is it, and when did it change?' },
          { icon: 'list-check', label: 'State & config', desc: 'What is true right now.', purpose: 'Check what is running and what it was configured with.', question: 'What is actually running, with which settings?' },
          { icon: 'code-branch', label: 'Change history', desc: 'Deploys, config, flags.', purpose: 'Line changes up against the start of the symptom.', question: 'What changed near the time this began?' },
          { icon: 'users', label: 'User reports', desc: 'Real impact and detail.', purpose: 'Anchor the impact and catch details telemetry misses.', question: 'Who is affected, and what were they doing?' }
        ]
      },
      io: {
        inputs: [
          ['System and application events'],
          ['Time-series data'],
          ['Live process and config state'],
          ['Deploy and change records'],
          ['Support tickets', 'Complaints']
        ],
        outputs: [
          ['A sequence of events'],
          ['Scale, trend and start time'],
          ['Current reality, not assumptions'],
          ['A prime suspect'],
          ['Impact, timing and specifics']
        ]
      },
      who: [
        'Systems, Engineer',
        'Monitoring, Engineer',
        'Engineer, Operations',
        'Engineer, DevOps',
        'Users, Support'
      ],
      example: {
        title: 'Building one consistent story',
        items: [
          'Logs show errors beginning at 09:00.',
          'Metrics show memory climbing steadily from 08:55.',
          'Current state confirms the service is swapping heavily.',
          'A configuration change raising a cache size went out at 08:55.',
          'Users report slowness starting "just before nine" — the story is consistent.'
        ]
      },
      misconceptions: [
        { wrong: 'Logs are the only real evidence.', right: 'Metrics, state, changes and users each add something logs cannot.' },
        { wrong: 'Recent changes are rarely the cause.', right: 'They are among the most common causes of sudden failures.' },
        { wrong: 'User reports are too vague to use.', right: 'They anchor timing and impact, and often contain the key detail.' },
        { wrong: 'One source is enough if it looks conclusive.', right: 'Agreement across sources is what separates cause from coincidence.' }
      ],
      takeaways: [
        '**Each source answers a different question:** logs for detail, metrics for scale and timing, state for now, changes for why now.',
        '**Metrics establish when it started,** which is the single most useful fact for correlating with changes.',
        '**Check current state, not just history.** What is running, what it is connected to, and what configuration it actually loaded.',
        '**Change history is a primary source.** A deploy at 08:55 and a symptom at 08:56 is rarely a coincidence.',
        '**User reports contain details telemetry misses** — the file size, the device, the exact action that triggers it.',
        '**Triangulate.** When four sources tell the same story, you have a cause; when one does, you have a theory.',
        '**Note which source cracked it.** Over time that tells you where to look first — and what instrumentation is missing.'
      ],
      reflection: 'For the last incident you saw, which source finally explained it — and which one did you check too late? What would checking that one first have saved?',
      checks: [
        'Which question does each evidence source answer?',
        'What do metrics tell you that logs do not?',
        'Why check current state as well as logs?',
        'Why is change history a primary source?',
        'What do user reports contribute?',
        'What does triangulating give you?'
      ]
    }
  ]
}
