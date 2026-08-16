// Computer Engineering Universe — Workshop 2.
export default {
  id: 'os',
  title: 'Operating Systems',
  tone: 'c2',
  blurb: 'The layer that makes hardware usable — processes, threads, scheduling, files, permissions, and environment.',
  tags: ['Processes', 'Threads', 'Files', 'Permissions'],
  popups: [
    {
      id: 'os-why',
      title: 'Why Operating Systems Exist',
      blurb: 'The OS manages hardware and gives applications a usable, shared environment.',
      whatIs: {
        text: `Without an operating system (OS), every program would have to drive the hardware itself — talk to the disk controller, manage physical memory addresses, take turns on the processor with programs it knows nothing about. The OS exists so that none of that is your problem.

It does three jobs. It **shares** finite resources — processor time, memory, disk, network — between everything that wants them. It **isolates** programs so one crashing or misbehaving cannot corrupt another. And it **abstracts** the hardware behind consistent interfaces, so your code opens "a file" rather than addressing sectors on a particular device.

Applications reach these services through **system calls**: read a file, allocate memory, send data. That boundary is also where permissions are enforced, which is why "access denied" comes from the OS rather than the application. Windows, Linux, macOS, iOS and Android differ enormously in appearance and hardly at all in these responsibilities.`,
        ensures: [
          'Say what an operating system is responsible for',
          'Explain sharing, isolation and abstraction as its three jobs',
          'Describe what a system call is and why it exists',
          'Understand why applications cannot touch hardware directly',
          'See where permission checks actually happen',
          'Recognise the same responsibilities across different operating systems'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'Applications run as processes, managed by the OS, on shared hardware.',
        steps: [
          { icon: 'window-maximize', label: 'Application', purpose: 'The program a person actually uses.', question: 'What is the user running?' },
          { icon: 'diagram-project', label: 'Process', purpose: 'One running instance, isolated and tracked by the OS.', question: 'What is actually executing?' },
          { icon: 'gears', label: 'Operating system', purpose: 'Shares hardware, isolates processes, enforces permissions.', question: 'Who decides who gets what?' },
          { icon: 'microchip', label: 'Hardware', purpose: 'The finite physical resources underneath.', question: 'What physically does the work?' }
        ]
      },
      example: {
        title: 'Two apps, one machine',
        items: [
          'A browser and a music player are open at the same time.',
          'Each runs as its own isolated process with its own memory.',
          'The OS gives each slices of central processing unit (CPU) time and its share of memory.',
          'One set of hardware serves both, and neither can read the other\'s data.'
        ]
      },
      misconceptions: [
        { wrong: 'The OS is the desktop interface.', right: 'The desktop is one program; the OS manages hardware and processes.' },
        { wrong: 'Applications talk directly to hardware.', right: 'They make system calls; the OS mediates every access.' },
        { wrong: 'Servers barely need an operating system.', right: 'They depend on it for scheduling, memory, networking and permissions.' },
        { wrong: 'One badly behaved app can corrupt another.', right: 'Isolation is exactly what the OS provides to prevent that.' }
      ],
      takeaways: [
        '**Share, isolate, abstract.** Those three jobs explain almost everything an operating system does.',
        '**System calls are the boundary** between your program and the machine — files, memory, networking all cross it.',
        '**Permissions are enforced by the OS,** which is why "access denied" is a system answer, not an application opinion.',
        '**Isolation keeps a crash local.** One process failing does not take down the others, because each has its own memory space.',
        '**Abstraction is why code is portable.** You open "a file"; the OS knows about this particular disk.',
        '**Resources are finite and shared.** Most "the app is slow" problems are really "something else got the resource".',
        '**All the major operating systems do the same jobs.** The interfaces differ; the responsibilities do not.'
      ],
      reflection: 'If there were no operating system, list three things your application would have to implement itself. Which of the three would you least want to write?',
      checks: [
        'What are the three main jobs of an operating system?',
        'What is a system call?',
        'Why can applications not access hardware directly?',
        'Where are file permissions actually enforced?',
        'What does isolation between processes protect against?',
        'What do Windows, Linux and Android have in common?'
      ]
    },
    {
      id: 'os-process',
      title: 'Processes',
      blurb: 'A running instance of a program, with its own identity and resources.',
      whatIs: {
        text: `A **program** is a file on disk. A **process** is that program running: it has its own memory space, its own open files, an environment, and a numeric identity — the process ID (PID) — that the operating system (OS) uses to track it. Open the same application twice and you have two processes that cannot see each other's data.

A process moves between states. It is **running** when it has the central processing unit (CPU), **ready** when it wants the CPU but is waiting its turn, and **blocked** when it is waiting for something external such as disk, network or user input. A frozen application is usually blocked, not dead — the difference matters, because one needs patience or a fix upstream and the other needs restarting.

Processes end in one of three ways: they finish normally with an **exit code** (zero for success), they crash, or they are **killed** by a signal. Killing is not automatically safe — a process stopped mid-write can leave a half-written file or an inconsistent database, which is why a polite termination request comes before a forced one.`,
        ensures: [
          'Distinguish a program from a process',
          'Explain the running, ready and blocked states',
          'Use process IDs and understand what the OS tracks',
          'Interpret exit codes and the difference between crash and kill',
          'Tell a frozen process from a dead one',
          'Know why forcibly killing a process can be unsafe'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The life of a process — from launch to termination.',
        loop: false,
        steps: [
          { icon: 'play', label: 'Start', desc: 'Launched as a new process.', purpose: 'Create a running instance with its own memory and a PID.', question: 'What is starting, and under whose identity?' },
          { icon: 'gears', label: 'Run', desc: 'Executes using CPU and memory.', purpose: 'Do the program\'s work while it holds the processor.', question: 'What is it actually doing?' },
          { icon: 'hourglass-half', label: 'Wait (blocked)', desc: 'Pauses for disk, network or input.', purpose: 'Give up the CPU while waiting for something external.', question: 'What is it waiting for?' },
          { icon: 'flag-checkered', label: 'Terminate', desc: 'Finishes, crashes or is killed.', purpose: 'Release memory, files and other resources.', question: 'Did it exit cleanly, and with what code?' }
        ]
      },
      example: {
        title: 'A file download',
        items: [
          'Launching the downloader creates a process with its own PID.',
          'It runs, using CPU to manage the transfer and write chunks.',
          'It blocks repeatedly, waiting for the network to deliver data.',
          'When the file completes it exits with code 0 and its memory is freed.'
        ]
      },
      io: {
        inputs: [
          ['Program file', 'Launch request', 'User identity'],
          ['CPU time', 'Allocated memory'],
          ['A pending disk or network request'],
          ['Normal exit, crash, or signal']
        ],
        outputs: [
          ['A process with a PID and its own memory'],
          ['Work performed', 'Updated state'],
          ['CPU released to other processes'],
          ['Freed memory and closed files', 'An exit code']
        ]
      },
      who: [
        'User, Operating system',
        'CPU scheduler, Process',
        'Operating system, Devices',
        'Operating system'
      ],
      misconceptions: [
        { wrong: 'A program and a process are the same thing.', right: 'A program is a file; a process is one running instance of it.' },
        { wrong: 'A frozen app is doing nothing.', right: 'It is usually blocked — waiting on I/O, a lock or a remote call.' },
        { wrong: 'Killing a process is always safe.', right: 'It can leave files, databases or locks in an inconsistent state.' },
        { wrong: 'Processes can read each other\'s memory.', right: 'The OS isolates them; sharing requires an explicit mechanism.' }
      ],
      takeaways: [
        '**A program is a file; a process is that file running.** Two copies of the same program are two independent processes.',
        '**Every process has its own memory space,** which is why one crashing rarely affects another.',
        '**Blocked is not dead.** Most freezes are a process waiting on something slow or absent — check what it is waiting for before killing it.',
        '**Exit codes carry the result.** Zero means success; anything else is a failure a script or pipeline can act on.',
        '**Prefer a polite termination first.** A graceful signal lets a process close files and finish writes; forcing it does not.',
        '**High CPU and blocked are opposite symptoms.** One is doing too much work, the other is doing none at all.',
        '**Zombie and orphan processes exist** when parents do not clean up after children — usually harmless, but a sign of a bug.'
      ],
      reflection: 'An application stops responding. How would you tell whether it is busy, blocked or dead — and what would you check before killing it?',
      checks: [
        'What is the difference between a program and a process?',
        'What are the running, ready and blocked states?',
        'What does the operating system track for each process?',
        'What does an exit code tell you?',
        'Why can killing a process be unsafe?',
        'Why can one process not read another\'s memory?'
      ]
    },
    {
      id: 'os-thread',
      title: 'Threads & Concurrency',
      blurb: 'Units of execution within a process that allow concurrent work — and the bugs that come with sharing.',
      whatIs: {
        text: `A **thread** is a line of execution inside a process. One process can have many, and unlike separate processes they **share the same memory**. That sharing is the point — threads can cooperate on the same data cheaply — and it is also the danger.

The everyday reason to use threads is responsiveness. A photo editor keeps one thread handling the interface while another applies a filter, so the window still responds. Servers use a thread per request (or an event loop that achieves the same effect) so one slow request does not block everyone else.

The cost is that shared data can be read and written at the same time. If two threads increment the same counter, both may read the old value and write the same new one, losing an update — a **race condition**. The fixes are locks and other coordination, which bring their own problem: a **deadlock**, where two threads each hold what the other needs and neither can proceed. These bugs are intermittent, depend on timing, and often vanish under a debugger — which is why the safest approach is to share as little mutable state as possible.`,
        ensures: [
          'Explain what a thread is and how it differs from a process',
          'Say why threads are used: responsiveness and parallelism',
          'Describe a race condition in concrete terms',
          'Understand what a lock does and how deadlock arises',
          'Recognise why concurrency bugs are intermittent and hard to reproduce',
          'Prefer designs that share as little mutable state as possible'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Why programs use threads — and where the risk appears.',
        loop: false,
        steps: [
          { icon: 'diagram-project', label: 'One process', desc: 'A single running program.', purpose: 'Hold the work inside one isolated program.', question: 'What program is running?' },
          { icon: 'code-branch', label: 'Split into threads', desc: 'Work is divided to run concurrently.', purpose: 'Keep the interface responsive, or use several cores.', question: 'What work can genuinely happen at the same time?' },
          { icon: 'boxes-stacked', label: 'Share memory', desc: 'Threads see the same data.', purpose: 'Cooperate on the same data without copying it.', question: 'What state is shared, and who writes to it?' },
          { icon: 'triangle-exclamation', label: 'Coordinate', desc: 'Unmanaged sharing corrupts data.', purpose: 'Use locks or safe structures to prevent races.', question: 'Could two threads touch this at once?' }
        ]
      },
      io: {
        inputs: [
          ['A program to run'],
          ['The process', 'Divisible work'],
          ['Threads', 'Process memory'],
          ['Shared mutable state']
        ],
        outputs: [
          ['One running process'],
          ['Concurrent threads'],
          ['Shared access to the same data'],
          ['Coordinated, correct access — or a race']
        ]
      },
      who: [
        'Operating system',
        'Process, Runtime',
        'Threads',
        'Developer'
      ],
      example: {
        title: 'A responsive photo app',
        items: [
          'The photo app runs as one process.',
          'One thread keeps the interface responsive while another applies a filter.',
          'Both threads work on the same image data in memory.',
          'Without coordination, one can overwrite what the other is reading.'
        ]
      },
      misconceptions: [
        { wrong: 'Threads are just lightweight processes.', right: 'They share memory, which is the whole difference — and the risk.' },
        { wrong: 'More threads means faster.', right: 'Beyond the number of cores, coordination overhead can make it slower.' },
        { wrong: 'Concurrency bugs are rare and obvious.', right: 'They are common, intermittent, and often disappear when observed.' },
        { wrong: 'Locks make code safe.', right: 'They prevent races and introduce deadlocks — used carelessly, both.' }
      ],
      takeaways: [
        '**Threads share memory; processes do not.** That is the trade: cheap cooperation in exchange for the possibility of corruption.',
        '**Responsiveness is the everyday reason to use them** — one thread waiting must not stop the rest of the program.',
        '**A race condition is two threads touching the same data at once,** with the result depending on timing you do not control.',
        '**Locks serialise access,** which fixes races and creates the possibility of deadlock when two threads wait on each other.',
        '**Concurrency bugs are timing-dependent.** They pass a thousand test runs and fail in production on a busy day.',
        '**More threads is not more speed.** Once you exceed the available cores, you are paying switching costs for no gain.',
        '**Share less.** Immutable data, message passing and per-thread state remove whole categories of bug by design.'
      ],
      reflection: 'Two threads each read a counter, add one, and write it back. Explain how the final value can be wrong, and what has to be true about the timing for it to go right.',
      checks: [
        'What is a thread, and how does it differ from a process?',
        'Why do programs use threads at all?',
        'What is a race condition?',
        'What does a lock do, and what new risk does it create?',
        'Why are concurrency bugs so hard to reproduce?',
        'Why does adding threads eventually stop helping?'
      ]
    },
    {
      id: 'os-sched',
      title: 'Scheduling & Memory',
      blurb: 'How the OS shares CPU time and memory so many programs appear to run at once.',
      whatIs: {
        text: `A processor core does one thing at a time. The appearance of many programs running together comes from the **scheduler** switching between them extremely quickly — each gets a slice of time, then the operating system (OS) saves its state and gives the core to something else. That switch is a **context switch**, and it is cheap but not free.

Schedulers balance two goals: **fairness** (everyone gets a turn) and **responsiveness** (interactive work should not wait behind a long batch job). That is why a process which mostly waits for input tends to be given the central processing unit (CPU) quickly when it is ready — it will not hold it long.

Memory is managed by the same principle of sharing with isolation. Each process gets its own **virtual address space**, so its "address 100" is not the same physical memory as another's. The OS maps those virtual addresses onto physical random-access memory (RAM), which is what makes isolation possible in the first place. When physical memory runs short it **swaps** less-used pages to disk — and because disk is far slower, a machine that swaps heavily feels frozen. Push harder and the OS starts killing processes to recover.`,
        ensures: [
          'Explain how time-slicing creates apparent simultaneity',
          'Describe what happens during a context switch',
          'Say how schedulers balance fairness and responsiveness',
          'Explain virtual memory and why it enables isolation',
          'Understand swapping and why it destroys performance',
          'Recognise what happens when a system runs out of memory'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How the OS keeps many programs running together.',
        steps: [
          { icon: 'list-ol', label: 'Ready processes', desc: 'Many want to run.', purpose: 'Track everything that is ready for the CPU.', question: 'Who needs the processor right now?' },
          { icon: 'scale-balanced', label: 'Schedule', desc: 'Pick who runs next.', purpose: 'Balance fairness against responsiveness.', question: 'Who runs now, and for how long?' },
          { icon: 'memory', label: 'Map memory', desc: 'Each gets its own address space.', purpose: 'Give every process isolated virtual memory.', question: 'Where does this process\'s memory actually live?' },
          { icon: 'right-left', label: 'Switch & repeat', desc: 'Save state, hand over the core.', purpose: 'Context-switch fast enough to feel simultaneous.', question: 'Whose turn is next?' }
        ]
      },
      io: {
        inputs: [
          ['Runnable processes'],
          ['Ready queue', 'Scheduling policy', 'Priorities'],
          ['Process memory requests', 'Physical RAM'],
          ['End of time slice, or a block']
        ],
        outputs: [
          ['A ready queue'],
          ['The next process to run'],
          ['Isolated virtual address spaces'],
          ['A context switch', 'The illusion of simultaneity']
        ]
      },
      who: [
        'Operating system',
        'CPU scheduler',
        'OS memory manager',
        'Operating system, CPU'
      ],
      example: {
        title: 'Music while you type',
        items: [
          'Your editor and the music player are both ready to run.',
          'The scheduler gives each millisecond-scale slices of a core.',
          'Each has its own virtual memory, so neither sees the other\'s data.',
          'Switching is fast enough that typing feels instant and audio never breaks.'
        ]
      },
      misconceptions: [
        { wrong: 'A core truly runs several programs at once.', right: 'It runs one at a time; the OS switches between them rapidly.' },
        { wrong: 'Context switching is free.', right: 'It costs time and cache warmth — too much switching wastes real work.' },
        { wrong: 'Each process gets its own physical memory chip.', right: 'It gets a virtual address space mapped onto shared physical RAM.' },
        { wrong: 'The OS never kills your programs.', right: 'Under memory pressure it terminates processes to save the system.' }
      ],
      takeaways: [
        '**Time-slicing creates the illusion of simultaneity.** One core, many programs, switched fast enough that people cannot tell.',
        '**Context switches cost something.** Saving and restoring state, plus a cold cache, is why excessive threads slow a machine down.',
        '**Schedulers favour work that yields quickly.** Interactive processes stay responsive because they do not hold the CPU long.',
        '**Virtual memory is what makes isolation possible.** Each process addresses its own space; the OS maps it onto physical RAM.',
        '**Swapping is the performance cliff.** Using disk as slow memory can make a healthy machine feel completely stuck.',
        '**Out-of-memory kills look like unexplained disappearances** — the process vanishes with no application error.',
        '**Priorities exist and can be adjusted,** but a badly behaved process can still starve others of resources.'
      ],
      reflection: 'On a single-core machine, ten applications appear to run at once. Explain how — and then explain why running a hundred CPU-hungry processes makes everything slower than running four.',
      checks: [
        'How does one core appear to run many programs?',
        'What happens during a context switch, and what does it cost?',
        'What two goals does a scheduler balance?',
        'What is virtual memory, and what does it enable?',
        'What is swapping, and why is it so damaging?',
        'What does the OS do when memory runs out entirely?'
      ]
    },
    {
      id: 'os-files',
      title: 'Files & Permissions',
      blurb: 'How the file system organises data and controls who can read, write, or execute it.',
      whatIs: {
        text: `A **file system** organises storage into files and directories, addressed by **paths**. An absolute path (\`/var/log/app.log\`) works from anywhere; a relative path (\`logs/app.log\`) depends on the current working directory — which is exactly why a program can work when you run it by hand and fail when a scheduler runs it from somewhere else.

Every file carries **permissions** describing who may do what: **read** (view the contents), **write** (change it) and **execute** (run it as a program). Those permissions apply to an owner, a group and everyone else. When a program runs, it does so as some user or service account, and the operating system (OS) checks that identity against the file's permissions on every access.

This is why two error messages that feel similar are completely different diagnoses. "No such file or directory" means the path is wrong — check the path and the working directory. "Permission denied" means the file is there but this identity may not touch it — check who the process runs as. And the tempting fix of running everything as administrator makes the error disappear while widening the blast radius of every future mistake.`,
        ensures: [
          'Read absolute and relative paths and know when each applies',
          'Explain read, write and execute permissions',
          'Know that a process acts as a user or service account',
          'Tell "not found" apart from "not allowed"',
          'Diagnose failures caused by the working directory',
          'Explain why running as administrator is a poor default fix'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What actually happens on "access denied".',
        loop: false,
        steps: [
          { icon: 'user', label: 'An identity asks', desc: 'A user or service account.', purpose: 'Establish who the process is running as.', question: 'Which account is making this request?' },
          { icon: 'file', label: 'A path is resolved', desc: 'Absolute, or relative to somewhere.', purpose: 'Locate the file — or fail with "not found".', question: 'Which file, and relative to what directory?' },
          { icon: 'eye', label: 'Read?', desc: 'May they view the contents?', purpose: 'Check the read permission for this identity.', question: 'Can this account read it?' },
          { icon: 'pen', label: 'Write?', desc: 'May they change it?', purpose: 'Check the write permission — including on the directory.', question: 'Can this account modify or create it?' },
          { icon: 'play', label: 'Execute?', desc: 'May they run it?', purpose: 'Check the execute permission for programs and scripts.', question: 'Can this account run it?' }
        ]
      },
      example: {
        title: 'The app cannot write its log file',
        items: [
          'The service runs as the account `svc-app`, not as you.',
          'It writes to `logs/app.log` — relative to wherever it was started.',
          'It can read the directory, so listing works fine.',
          'It has no write permission there, so every log write fails silently.',
          'Granting write on that directory (not administrator rights) fixes it.'
        ]
      },
      io: {
        inputs: [
          ['User or service identity'],
          ['A path', 'The working directory'],
          ['Read request', 'File permissions'],
          ['Write request', 'File and directory permissions'],
          ['Execute request', 'File permissions']
        ],
        outputs: [
          ['The identity to check against'],
          ['A resolved file — or "not found"'],
          ['View allowed or denied'],
          ['Change allowed or denied'],
          ['Run allowed or denied']
        ]
      },
      who: [
        'User, Service account',
        'File system',
        'Operating system',
        'Operating system',
        'Operating system'
      ],
      misconceptions: [
        { wrong: 'Permissions are a security-team concern.', right: 'They cause everyday failed writes, missing logs and broken jobs.' },
        { wrong: '"Not found" and "denied" mean the same thing.', right: 'One is a path problem, the other an identity problem.' },
        { wrong: 'Running as administrator is a reasonable fix.', right: 'It hides the real problem and widens the damage of any mistake.' },
        { wrong: 'A relative path always means the same place.', right: 'It depends on the working directory, which differs between launches.' }
      ],
      takeaways: [
        '**Absolute paths work anywhere; relative paths depend on where the process started.** That difference explains a lot of "works when I run it".',
        '**Read, write, execute — for owner, group and others.** Nearly every access error is one of those six cells.',
        '**A process acts as an account,** and it is often not your account. Checking "who is this running as?" resolves many failures.',
        '**"No such file" is a path problem; "permission denied" is an identity problem.** They need completely different fixes.',
        '**Writing a file needs permission on the directory too,** which is why creating a new file can fail where editing an existing one succeeds.',
        '**Do not fix permissions with administrator rights.** Grant the specific access needed; the broad fix removes every other safeguard.',
        '**Failed writes can be silent.** An application that cannot write its log often continues, with no log to tell you why it later broke.'
      ],
      reflection: 'A job works when you run it manually and fails when the scheduler runs it. List three explanations involving paths, identity or permissions — and how you would check each in under a minute.',
      checks: [
        'What is the difference between an absolute and a relative path?',
        'What do read, write and execute each permit?',
        'As whom does a program run, and why does that matter?',
        'How do you tell "not found" from "not allowed"?',
        'Why can creating a file fail when editing one succeeds?',
        'Why is running as administrator a bad fix?'
      ]
    },
    {
      id: 'os-env',
      title: 'Environment & Configuration',
      blurb: 'Configuration values handed to processes — and a classic source of "works on my machine".',
      whatIs: {
        text: `**Environment variables** are named values handed to a process when it starts: where the database is, which region to use, whether a feature is on. They let the same build behave differently in different places, which is exactly what you need when one artefact is promoted from development to production.

The critical detail is **when** they are read. A process inherits the environment it was started with; changing a variable afterwards does not affect anything already running, and a child process inherits from its parent. That is why a variable set in your shell is invisible to a service started by the system, and why "I set it, but it still fails" usually means "the process was started before you set it".

Environment differences are the classic cause of "works on my machine". Locally you have variables set months ago and forgotten; the server has only what its deployment configuration provides. When the same code behaves differently in two places, configuration is the first thing to compare — and secrets, while often passed this way, are better held in a proper secret store, because environments get logged and dumped more often than people expect.`,
        ensures: [
          'Explain what environment variables are and what they configure',
          'Know when a process receives its environment and what inherits it',
          'Diagnose "works locally, fails deployed" as a configuration difference',
          'Keep configuration out of the build artefact',
          'Handle secrets more carefully than ordinary configuration',
          'Compare environments systematically rather than guessing'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How environment differences cause "works locally, fails as a service".',
        loop: false,
        steps: [
          { icon: 'sliders', label: 'Define configuration', desc: 'Values set per environment.', purpose: 'Provide the settings this deployment needs.', question: 'What differs between here and production?' },
          { icon: 'play', label: 'Process starts', desc: 'It inherits that environment.', purpose: 'Hand the settings to the process as it launches.', question: 'What environment did it actually start with?' },
          { icon: 'gears', label: 'Application reads it', desc: 'Config drives behaviour.', purpose: 'Connect to the right database, region or feature set.', question: 'Which values did it read, and when?' },
          { icon: 'triangle-exclamation', label: 'Mismatch fails', desc: 'Missing or wrong value.', purpose: 'Explain why identical code behaves differently.', question: 'Which variable is missing or different?' }
        ]
      },
      io: {
        inputs: [
          ['Deployment config', 'Secrets store'],
          ['The environment', 'A launch request'],
          ['Environment variables'],
          ['A missing or wrong value']
        ],
        outputs: [
          ['A defined environment'],
          ['A process holding that environment'],
          ['Applied configuration'],
          ['A configuration failure', 'A confusing error']
        ]
      },
      who: [
        'Operator, Deployment pipeline',
        'Operating system',
        'Application',
        'Application, Engineer'
      ],
      example: {
        title: 'Works locally, fails as a service',
        items: [
          'On your laptop `DATABASE_URL` was exported months ago.',
          'Started from your shell, the app inherits it and connects fine.',
          'Run as a system service, it inherits a much smaller environment.',
          '`DATABASE_URL` is absent, so it fails at startup with a connection error.'
        ]
      },
      misconceptions: [
        { wrong: 'Environment variables are an advanced topic.', right: 'They cause a large share of everyday deployment failures.' },
        { wrong: 'Setting a variable affects running processes.', right: 'A process keeps the environment it started with.' },
        { wrong: '"Works on my machine" means the code is right.', right: 'It means the code plus your configuration is right.' },
        { wrong: 'Environment variables are a fine home for secrets.', right: 'They leak into logs and crash dumps; use a secret store.' }
      ],
      takeaways: [
        '**Configuration belongs outside the build.** One artefact, different settings per environment — that is what makes promotion trustworthy.',
        '**A process inherits its environment at start.** Changing a variable later affects only things started afterwards.',
        '**Child processes inherit from their parent,** which is why a variable set in your shell reaches what you launch and nothing else.',
        '**"Works on my machine" is usually a configuration difference,** not a code difference. Compare the two environments first.',
        '**Missing configuration should fail loudly at startup.** Silently defaulting to something wrong is far more expensive to diagnose.',
        '**Secrets deserve better than environment variables.** They end up in logs, crash dumps and process listings.',
        '**Keep a list of what a service needs to run.** A documented set of variables turns a two-hour mystery into a two-minute check.'
      ],
      reflection: 'A service starts fine on your machine and crashes immediately when deployed. Write the first three things you would compare between the two environments — and how the application could have made the problem obvious in its first log line.',
      checks: [
        'What are environment variables for?',
        'When does a process receive its environment?',
        'Why can a service see fewer variables than your shell?',
        'Why should configuration live outside the build artefact?',
        'Why are environment variables a poor place for secrets?',
        'How should an application behave when required configuration is missing?'
      ]
    }
  ]
}
