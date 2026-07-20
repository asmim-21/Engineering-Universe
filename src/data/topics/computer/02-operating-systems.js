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
        text: 'An operating system manages hardware resources and provides a usable environment for applications. It manages CPU time, memory, files, devices, networking, users, and permissions.',
        ensures: [
          'Without an OS, every app would have to drive the hardware directly.',
          'The OS shares finite resources fairly between many programs.',
          'Applications run as processes managed by the OS.',
          'Common examples: Windows, Linux, macOS, iOS, Android.'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'The OS layer — applications run as processes managed by the operating system on top of hardware.',
        steps: [
          { icon: 'window-maximize', label: 'Application', purpose: 'The program the user interacts with.', question: 'What does the user run?' },
          { icon: 'diagram-project', label: 'Process', purpose: 'A running instance the OS manages.', question: 'What is actually running?' },
          { icon: 'gears', label: 'Operating System', purpose: 'Manages processes and shares hardware.', question: 'What manages it all?' },
          { icon: 'microchip', label: 'Hardware', purpose: 'The physical resources underneath.', question: 'What does the real work?' }
        ]
      },
      example: {
        title: 'Two apps, one machine',
        items: [
          'A browser and a music player are open at once.',
          'Each runs as its own isolated process.',
          'The OS shares CPU time and memory between them.',
          'One set of CPU, RAM, and disk serves both.'
        ]
      },
      misconceptions: [
        { wrong: 'The OS is just the desktop interface.', right: 'The desktop is one part; the OS manages all hardware and processes.' },
        { wrong: 'Apps talk directly to the hardware.', right: 'The OS mediates access to CPU, memory, disk, and devices.' },
        { wrong: 'Servers don’t really need an OS.', right: 'Servers rely on the OS to manage processes and resources.' }
      ],
      takeaways: [
        'The OS makes hardware usable for applications.',
        'It manages CPU, memory, files, devices, users, and permissions.',
        'Applications run as processes on top of the OS.',
        'Windows, Linux, macOS, iOS, and Android are all operating systems.'
      ],
      reflection: 'What would an application have to do itself if there were no operating system?',
      checks: [
        'What does an operating system manage?',
        'Why can’t every app manage the hardware itself?',
        'How do applications run on top of the OS?',
        'Name three operating systems.'
      ]
    },
    {
      id: 'os-process',
      title: 'Processes',
      blurb: 'A running instance of a program, with its own identity and resources.',
      whatIs: {
        text: 'A process is a running instance of a program. Each process has its own identity and resources — memory, open files, and environment — and the OS tracks it with a process ID.',
        ensures: [
          'A program is a file; a process is that program running.',
          'Each process is isolated from others by the OS.',
          'Processes can start, run, wait, crash, or be terminated.',
          'The OS tracks every process by its process ID (PID).'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The life of a process — from launch to termination.',
        loop: false,
        steps: [
          { icon: 'play', label: 'Start', desc: 'The program is launched as a process.', purpose: 'Create a running instance with its own resources.', question: 'What program is starting?' },
          { icon: 'gears', label: 'Run', desc: 'It executes, using CPU and memory.', purpose: 'Do the program’s actual work.', question: 'What is it doing?' },
          { icon: 'hourglass-half', label: 'Wait', desc: 'It pauses for input, disk, or network.', purpose: 'Yield the CPU while waiting for something.', question: 'What is it waiting for?' },
          { icon: 'flag-checkered', label: 'Terminate', desc: 'It finishes, crashes, or is killed.', purpose: 'Release resources back to the system.', question: 'Why did it end?' }
        ]
      },
      example: {
        title: 'A file download',
        items: [
          'You launch the downloader — a new process starts.',
          'It runs, using CPU to manage the transfer.',
          'It waits on the network for each chunk of data.',
          'When the file is complete, the process exits.'
        ]
      },
      io: {
        inputs: [
          ['Program file', 'Launch request'],
          ['CPU time', 'Allocated memory'],
          ['Pending I/O request'],
          ['Exit code or signal']
        ],
        outputs: [
          ['A process with a PID'],
          ['Work performed', 'Updated state'],
          ['Released CPU while blocked'],
          ['Freed memory and files']
        ]
      },
      who: [
        'User, Operating system',
        'CPU scheduler, Process',
        'Operating system, Devices',
        'Operating system'
      ],
      misconceptions: [
        { wrong: 'A program and a process are the same thing.', right: 'A program is a file; a process is that program running.' },
        { wrong: 'A frozen app is doing nothing.', right: 'It may be stuck waiting on I/O or a lock.' },
        { wrong: 'Killing a process is always safe.', right: 'It can leave files or data in an inconsistent state.' }
      ],
      takeaways: [
        'A process is a running instance of a program.',
        'Each has its own memory, files, and identity (PID).',
        'Processes start, run, wait, crash, or are terminated.',
        'The OS isolates and tracks every process.'
      ],
      reflection: 'When an app "freezes", is the process gone — or stuck? How would you tell?',
      checks: [
        'What is a process?',
        'How is a process different from a program?',
        'What states can a process be in?',
        'How does the OS identify a process?'
      ]
    },
    {
      id: 'os-thread',
      title: 'Threads',
      blurb: 'Units of execution within a process that allow concurrent work.',
      whatIs: {
        text: 'A thread is a unit of execution within a process. A process can have one or many threads, letting a program do several pieces of work concurrently.',
        ensures: [
          'Threads live inside a process and share its resources.',
          'Multiple threads allow concurrent work.',
          'Shared state means bugs appear when it is not managed carefully.',
          'Threads are lighter-weight than separate processes.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Why programs use threads — and where the risk is.',
        loop: false,
        steps: [
          { icon: 'diagram-project', label: 'One process', desc: 'A single running program.', purpose: 'Contain the work in one isolated program.', question: 'What program is running?' },
          { icon: 'code-branch', label: 'Split into threads', desc: 'Work is divided into concurrent threads.', purpose: 'Do several things at once without new processes.', question: 'What work can happen in parallel?' },
          { icon: 'boxes-stacked', label: 'Share resources', desc: 'Threads share the process’s memory.', purpose: 'Cooperate on the same data efficiently.', question: 'What state is shared?' },
          { icon: 'triangle-exclamation', label: 'Coordinate carefully', desc: 'Unmanaged shared state causes bugs.', purpose: 'Prevent race conditions on shared data.', question: 'Who touches this data, and when?' }
        ]
      },
      io: {
        inputs: [
          ['A program to run'],
          ['The process', 'Work to split'],
          ['Threads', 'Process memory'],
          ['Shared state']
        ],
        outputs: [
          ['One running process'],
          ['Concurrent threads'],
          ['Shared access to data'],
          ['Coordinated, safe access']
        ]
      },
      who: [
        'Operating system',
        'Process, Runtime',
        'Threads',
        'Developer'
      ],
      example: {
        title: 'A responsive app',
        items: [
          'A photo app runs as one process.',
          'One thread keeps the UI responsive while another applies a filter.',
          'Both threads read the same image data in memory.',
          'Without coordination, they could corrupt that shared image.'
        ]
      },
      misconceptions: [
        { wrong: 'Threads are the same as processes.', right: 'Threads live inside a process and share its memory.' },
        { wrong: 'More threads always means faster.', right: 'Coordination overhead and shared state can cancel the gains.' },
        { wrong: 'Threading bugs are rare and obvious.', right: 'Shared-state bugs are common, intermittent, and hard to find.' }
      ],
      takeaways: [
        'A thread is a unit of execution inside a process.',
        'Threads enable concurrent work.',
        'Threads share process resources.',
        'Shared state must be managed to avoid bugs.'
      ],
      reflection: 'Why can two threads doing "obviously correct" work still produce a wrong result together?',
      checks: [
        'What is a thread?',
        'How is a thread different from a process?',
        'What do threads share?',
        'Why can shared state cause bugs?'
      ]
    },
    {
      id: 'os-sched',
      title: 'Scheduling & Memory',
      blurb: 'How the OS shares CPU time and memory so many programs appear to run at once.',
      whatIs: {
        text: 'The operating system decides which process gets CPU time and manages how memory is allocated, keeping processes isolated. Scheduling creates the illusion that many programs run at the same time.',
        ensures: [
          'The OS shares the CPU between many processes.',
          'It allocates memory and keeps processes isolated.',
          'If a process uses too much memory, the OS may swap or kill processes.',
          'Rapid switching makes concurrent programs feel simultaneous.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How the OS keeps many programs running together.',
        steps: [
          { icon: 'list-ol', label: 'Ready processes', desc: 'Many processes want to run.', purpose: 'Track everything that needs CPU time.', question: 'Who needs to run?' },
          { icon: 'scale-balanced', label: 'Schedule CPU', desc: 'The OS picks who runs next.', purpose: 'Share the CPU fairly and responsively.', question: 'Who runs now, and for how long?' },
          { icon: 'memory', label: 'Allocate memory', desc: 'Each process gets isolated memory.', purpose: 'Give processes space without stepping on each other.', question: 'How much memory does each need?' },
          { icon: 'right-left', label: 'Switch & repeat', desc: 'The OS rapidly switches between them.', purpose: 'Create the illusion of simultaneous execution.', question: 'Whose turn is next?' }
        ]
      },
      io: {
        inputs: [
          ['Runnable processes'],
          ['Ready queue', 'Scheduling policy'],
          ['Process needs', 'Free memory'],
          ['Time-slice end']
        ],
        outputs: [
          ['A ready queue'],
          ['The next process to run'],
          ['Isolated memory'],
          ['A context switch']
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
          'Your editor and music player are both ready to run.',
          'The OS gives each tiny slices of CPU time.',
          'Each has its own isolated memory.',
          'Switching happens so fast the music never stutters.'
        ]
      },
      misconceptions: [
        { wrong: 'The CPU truly runs everything at once.', right: 'A core runs one thing at a time; the OS switches rapidly.' },
        { wrong: 'The OS never kills your programs.', right: 'Under memory pressure it may swap or terminate processes.' },
        { wrong: 'Memory isolation is automatic and perfect.', right: 'The OS works to isolate processes, but limits are real.' }
      ],
      takeaways: [
        'The OS decides which process gets the CPU.',
        'It allocates memory and isolates processes.',
        'Under pressure it may swap or kill processes.',
        'Fast switching gives the illusion of running at once.'
      ],
      reflection: 'On a single-core machine, how can ten apps appear to run simultaneously?',
      checks: [
        'What does the scheduler decide?',
        'How does the OS keep processes isolated?',
        'What can happen when memory runs low?',
        'Why does concurrency feel simultaneous?'
      ]
    },
    {
      id: 'os-files',
      title: 'Files & Permissions',
      blurb: 'How the file system organises data and controls who can read, write, or execute it.',
      whatIs: {
        text: 'A file system organises files and directories on storage, and paths identify where files live. Permissions control who can read, write, or execute each file.',
        ensures: [
          'Paths tell the system exactly where a file is.',
          '**Read** lets you view a file’s contents.',
          '**Write** lets you change it.',
          '**Execute** lets you run it as a program.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'File permissions — why "access denied" errors happen.',
        loop: false,
        steps: [
          { icon: 'user', label: 'User or service', desc: 'Someone requests access to a file.', purpose: 'Identify who is asking.', question: 'Who is making the request?' },
          { icon: 'file', label: 'The file', desc: 'The target on the file system.', purpose: 'Locate the file by its path.', question: 'Which file, and where?' },
          { icon: 'eye', label: 'Read permission', desc: 'May they view the contents?', purpose: 'Decide whether reading is allowed.', question: 'Can they read it?' },
          { icon: 'pen', label: 'Write permission', desc: 'May they change it?', purpose: 'Decide whether modifying is allowed.', question: 'Can they change it?' },
          { icon: 'play', label: 'Execute permission', desc: 'May they run it?', purpose: 'Decide whether running is allowed.', question: 'Can they run it?' }
        ]
      },
      example: {
        title: 'App can’t write a log file',
        items: [
          'The service account tries to write to a log file.',
          'The log file lives at a specific path on disk.',
          'The account can read the folder…',
          '…but lacks write permission, so the write fails.',
          'Fix the permission (or path) and the log appears.'
        ]
      },
      io: {
        inputs: [
          ['User / service identity'],
          ['File path'],
          ['Read request', 'File’s read setting'],
          ['Write request', 'File’s write setting'],
          ['Execute request', 'File’s execute setting']
        ],
        outputs: [
          ['Identity to check against'],
          ['Located file'],
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
        { wrong: 'Permissions only matter for security teams.', right: 'They cause everyday "access denied" and failed-write bugs.' },
        { wrong: 'A wrong path and a permission error are the same.', right: 'One means "not found", the other means "not allowed".' },
        { wrong: 'Running as admin is a fine default fix.', right: 'It hides the real problem and widens the blast radius.' }
      ],
      takeaways: [
        'The file system organises files by path.',
        'Permissions govern read, write, and execute.',
        'Many app failures are missing files, wrong paths, or permissions.',
        '"Access denied" is a permission problem, not a missing file.'
      ],
      reflection: 'An app worked in testing but can’t write its log in production. Where do you look first?',
      checks: [
        'What does a file system organise?',
        'What do read, write, and execute permissions allow?',
        'Why do "access denied" errors happen?',
        'How is a wrong path different from a permission error?'
      ]
    },
    {
      id: 'os-env',
      title: 'Environment Variables',
      blurb: 'Configuration values handed to processes — and a classic source of "works on my machine".',
      whatIs: {
        text: 'Environment variables are configuration values made available to a process when it runs. Many application issues come from missing files, wrong paths, permissions, or environment variables.',
        ensures: [
          'They configure a process without changing its code.',
          'Common uses: paths, credentials, feature flags, service URLs.',
          'A process only sees the environment it was started with.',
          'Different environments (local vs service) often differ here.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How environment differences cause "works locally, fails as a service".',
        loop: false,
        steps: [
          { icon: 'sliders', label: 'Define variables', desc: 'Config is set in the environment.', purpose: 'Provide settings the app will need at run time.', question: 'What does the app need configured?' },
          { icon: 'play', label: 'Process starts', desc: 'The process inherits that environment.', purpose: 'Hand the settings to the running process.', question: 'What environment did it start with?' },
          { icon: 'gears', label: 'App reads config', desc: 'It uses the variables to run.', purpose: 'Behave according to the provided configuration.', question: 'Which values did it read?' },
          { icon: 'triangle-exclamation', label: 'Mismatch fails', desc: 'A missing or wrong value breaks it.', purpose: 'Explain why the same code behaves differently.', question: 'What differs between environments?' }
        ]
      },
      io: {
        inputs: [
          ['Config values'],
          ['Environment', 'Launch'],
          ['Environment variables'],
          ['A missing or wrong value']
        ],
        outputs: [
          ['A defined environment'],
          ['A process with that environment'],
          ['Applied configuration'],
          ['A configuration failure']
        ]
      },
      who: [
        'Operator, Deployment config',
        'Operating system',
        'Application',
        'Application, Engineer'
      ],
      example: {
        title: 'Works locally, not as a service',
        items: [
          'On your laptop, a DATABASE_URL variable is set.',
          'The app process starts and reads it.',
          'It connects to the database and runs fine.',
          'Run as a service, that variable is missing — so it fails to connect.'
        ]
      },
      misconceptions: [
        { wrong: 'Environment variables are advanced and irrelevant.', right: 'They cause many everyday configuration failures.' },
        { wrong: '"Works on my machine" means it will work anywhere.', right: 'Environments differ in config, paths, and variables.' },
        { wrong: 'Secrets belong in environment variables forever.', right: 'They are better held in approved secret stores.' }
      ],
      takeaways: [
        'Environment variables configure a process at run time.',
        'A process sees only the environment it started with.',
        'Environment differences explain many failures.',
        'Check config before blaming the code.'
      ],
      reflection: 'When "it works on my machine", what environment differences could explain the failure elsewhere?',
      checks: [
        'What is an environment variable?',
        'When does a process receive its environment?',
        'Why might an app work locally but fail as a service?',
        'What common issues come from environment differences?'
      ]
    }
  ]
}
