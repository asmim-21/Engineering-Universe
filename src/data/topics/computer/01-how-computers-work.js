// Computer Engineering Universe — Workshop 1.
// Same schema as the software topics: each popup drives its own sketch card.
export default {
  id: 'computers',
  title: 'How Computers Actually Work',
  tone: 'c1',
  blurb: 'Hardware, the CPU, RAM, storage, program execution, and where system slowness really comes from.',
  tags: ['CPU', 'RAM', 'Storage', 'Bottlenecks'],
  popups: [
    {
      id: 'hw-what',
      title: 'What a Computer Is',
      blurb: 'Software is not magic — every app eventually becomes instructions run by physical hardware.',
      whatIs: {
        text: `Every computer, from a phone to a data-centre server, does the same four things: takes **input**, **processes** it, **stores** results, and produces **output**. Everything else is detail.

The parts divide cleanly. The central processing unit (CPU) executes instructions. Random-access memory (RAM) holds what is being worked on right now. Storage keeps data when the power is off. Input and output devices connect the machine to the world. These are finite physical resources, which is why software has limits at all.

Software sits in **layers**. Your application talks to the operating system (OS), which manages the hardware and shares it between programs. The application almost never touches hardware directly — it asks the OS, which decides. That layering is why the same program runs on very different machines, and why "the app is slow" so often turns out to be a hardware resource that ran out underneath it.`,
        ensures: [
          'Describe a computer as input, processing, storage and output',
          'Name the main components and what each is responsible for',
          'Explain the application → operating system → hardware stack',
          'Say why applications do not talk to hardware directly',
          'Connect a software symptom to a physical resource',
          'Recognise that every layer depends on the one beneath it'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'The computer stack — each layer depends on the one below.',
        steps: [
          { icon: 'window-maximize', label: 'Applications', purpose: 'The software the user interacts with directly.', question: 'What is the user actually using?' },
          { icon: 'gears', label: 'Operating system', purpose: 'Shares hardware between programs and protects them from each other.', question: 'Who decides which program gets what?' },
          { icon: 'microchip', label: 'Hardware: CPU, RAM, storage, network', purpose: 'The finite physical resources that do the real work.', question: 'What physically does the work — and what runs out?' }
        ]
      },
      example: {
        title: 'Opening a text editor',
        items: [
          'You double-click the icon — an input event reaches the operating system.',
          'The OS finds the file on storage and asks the hardware to load and run it.',
          'The CPU executes it from RAM, and the screen shows the result.'
        ]
      },
      misconceptions: [
        { wrong: 'Software runs by magic, separate from hardware.', right: 'Every application becomes instructions executed by physical hardware.' },
        { wrong: 'Hardware is irrelevant to software engineers.', right: 'Hardware limits explain most of how software behaves and fails.' },
        { wrong: 'The application talks straight to the hardware.', right: 'The operating system sits in between and manages access.' },
        { wrong: 'Memory and storage are two words for the same thing.', right: 'RAM is fast and temporary; storage is slower and persistent.' }
      ],
      takeaways: [
        '**Input, process, store, output.** Every computer does these four things; the differences are scale and speed.',
        '**Hardware is finite.** CPU cycles, memory, disk space and bandwidth all run out — and that is what most performance problems really are.',
        '**The operating system is the manager in the middle.** It shares hardware between programs, which is why one program cannot normally take everything.',
        '**Layers mean portability.** Your code targets the OS, so the same program runs on very different machines.',
        '**Layers also mean indirection.** A slow application may be a slow disk, a saturated network, or another program hogging the CPU.',
        '**Every layer depends on the one below.** A failure at the bottom shows up as strange behaviour at the top.',
        '**"It is a software problem" is a hypothesis, not a fact.** Checking the physical resources first is often the fastest route to the answer.'
      ],
      reflection: 'Pick an app you used today. Which layer were you actually touching — and which layer would have to fail for you to see a spinning cursor?',
      checks: [
        'What four things does every computer do?',
        'What is each main component responsible for?',
        'What sits between an application and the hardware, and why?',
        'Why does the same program run on different machines?',
        'Why should a software engineer care about hardware limits?',
        'How is memory different from storage?'
      ]
    },
    {
      id: 'hw-cpu',
      title: 'The CPU',
      blurb: 'The component that executes instructions — fetch, decode, execute, repeat.',
      whatIs: {
        text: `The central processing unit (CPU) executes instructions, and it does exactly one thing over and over: **fetch** the next instruction, **decode** what it means, **execute** it, and store the result. Billions of times a second.

Speed comes from several places, not just clock rate. **Clock speed** (GHz) sets how many cycles happen per second. **Cores** let genuinely separate work run in parallel — though a single-threaded program only ever uses one, which is why one core can sit at 100% while seven are idle. **Cache** is small very fast memory on the chip itself; because random-access memory (RAM) is slow compared with the CPU, keeping the working data in cache often matters more than raw clock speed.

A **CPU bottleneck** means the processor cannot keep up with demand: work queues, everything feels slow, and utilisation sits near 100%. But a slow program is just as often waiting — for disk, for the network, for a lock — with the CPU nearly idle. Distinguishing "busy" from "waiting" is the first useful diagnostic question.`,
        ensures: [
          'Describe the fetch-decode-execute cycle',
          'Explain why clock speed alone does not decide performance',
          'Say what cores do and what limits parallel speed-up',
          'Understand why cache exists and why it matters',
          'Tell a CPU-bound problem from a waiting one',
          'Interpret a single core at 100% while others are idle'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The instruction cycle — repeated billions of times per second.',
        steps: [
          { icon: 'download', label: 'Fetch', desc: 'Get the next instruction from memory.', purpose: 'Read the instruction at the address the program counter points to.', question: 'What is the next instruction?' },
          { icon: 'magnifying-glass', label: 'Decode', desc: 'Work out what it means.', purpose: 'Translate the instruction into control signals and operands.', question: 'What operation is this, on what data?' },
          { icon: 'bolt', label: 'Execute', desc: 'Perform the operation.', purpose: 'Do the arithmetic, comparison or data movement.', question: 'What work needs doing?' },
          { icon: 'floppy-disk', label: 'Write back', desc: 'Store the result, advance.', purpose: 'Put the result in a register or memory and move the counter on.', question: 'Where does the result go, and what is next?' }
        ]
      },
      example: {
        title: 'Adding two numbers',
        items: [
          'Fetch the "add" instruction the program counter points at.',
          'Decode it: add the values in two registers.',
          'Execute the addition in the arithmetic logic unit (ALU).',
          'Write the sum back to a register and advance to the next instruction.'
        ]
      },
      io: {
        inputs: [
          ['Program counter', 'Instruction in memory or cache'],
          ['Raw instruction', 'Instruction set'],
          ['Decoded operation', 'Operand values'],
          ['Computed result', 'Destination register']
        ],
        outputs: [
          ['Instruction loaded into the CPU'],
          ['Control signals', 'Operands fetched'],
          ['A result value', 'Updated status flags'],
          ['Stored result', 'Next instruction address']
        ]
      },
      who: [
        'Control unit, Memory, Cache',
        'Control unit, Instruction decoder',
        'Arithmetic logic unit (ALU)',
        'Registers, Memory'
      ],
      misconceptions: [
        { wrong: 'More GHz always means better performance.', right: 'Cores, cache, memory speed and the workload matter just as much.' },
        { wrong: 'More cores make any program faster.', right: 'Only work that can run in parallel benefits; single-threaded code uses one core.' },
        { wrong: 'The CPU stores your files.', right: 'It executes instructions; storage keeps files, RAM holds live data.' },
        { wrong: 'A slow program means a busy CPU.', right: 'It is often waiting on disk, network or a lock, with the CPU idle.' }
      ],
      takeaways: [
        '**Fetch, decode, execute, write back** — everything a computer does is that loop, repeated at enormous speed.',
        '**Clock speed is one factor of several.** Cache, memory speed, cores and the shape of the work all matter.',
        '**Cores help only parallel work.** A single-threaded program pins one core and leaves the rest idle, however many you have.',
        '**Cache exists because RAM is slow relative to the CPU.** Data that fits in cache is accessed far faster than data that does not.',
        '**High CPU means busy; low CPU with slow response means waiting.** That distinction directs the whole investigation.',
        '**One core at 100% with others idle** almost always means a single-threaded bottleneck, not an underpowered machine.',
        '**The CPU is rarely the first thing to run out** in typical applications — disk, memory and network usually get there first.'
      ],
      reflection: 'A report takes ten minutes to run. The CPU sits at 12% throughout. What does that rule out, and what are the two most likely explanations left?',
      checks: [
        'What are the four steps of the instruction cycle?',
        'Why is GHz not the whole performance story?',
        'When do extra cores actually help?',
        'What is CPU cache for?',
        'How do you tell a busy CPU from a waiting program?',
        'What does one core at 100% and the rest idle tell you?'
      ]
    },
    {
      id: 'hw-ram',
      title: 'Memory (RAM)',
      blurb: 'Fast, temporary working memory that holds active data while programs run.',
      whatIs: {
        text: `Random-access memory (RAM) is the workspace. Anything a program is actively using — its code, its variables, the document you have open — lives there while it runs. It is roughly a hundred times faster than an solid-state drive (SSD), and it is **volatile**: switch the power off and it is gone. That is why unsaved work disappears in a crash.

Programs ask the operating system (OS) for memory, use it, and release it when they finish. When memory runs short the OS starts **swapping** — moving less-used pages out to disk to free space. Because disk is far slower, a machine that is swapping heavily feels like it has stopped, even though nothing has actually failed. Push further and the OS starts killing processes outright.

Two related problems come up constantly. A **memory leak** is memory that is allocated and never released, so usage climbs until something dies — invisible in a short test, fatal in a service running for weeks. And "add more RAM" only helps when memory was actually the constraint; if the machine was waiting on disk, more memory changes nothing.`,
        ensures: [
          'Explain what RAM holds and why it is volatile',
          'Describe how a program requests and releases memory',
          'Say what swapping is and why it feels like a freeze',
          'Recognise the symptoms of a memory leak',
          'Distinguish memory pressure from other bottlenecks',
          'Know why unsaved work is lost in a crash'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How a program uses memory while it runs.',
        loop: false,
        steps: [
          { icon: 'box-open', label: 'Request memory', desc: 'The program asks the OS for space.', purpose: 'Reserve working space for the program\'s code and data.', question: 'How much does it need, and is it available?' },
          { icon: 'memory', label: 'Load into RAM', desc: 'Code and data are placed in memory.', purpose: 'Keep the working set close to the central processing unit (CPU) for fast access.', question: 'What must be readily available?' },
          { icon: 'arrows-rotate', label: 'Read & write', desc: 'The CPU uses it constantly.', purpose: 'Give the CPU fast access to the values in play.', question: 'What is the program actively working on?' },
          { icon: 'trash-can', label: 'Release', desc: 'Memory is freed when finished.', purpose: 'Return memory so other processes can use it.', question: 'Is this still needed — and was it actually released?' }
        ]
      },
      io: {
        inputs: [
          ['Program request', 'Free memory'],
          ['Reserved memory', 'Code & data from disk'],
          ['In-memory data', 'CPU instructions'],
          ['Program exit or explicit free']
        ],
        outputs: [
          ['Allocated memory'],
          ['A loaded working set'],
          ['Updated values in memory'],
          ['Freed memory — or a leak if not']
        ]
      },
      who: [
        'Program, OS memory manager',
        'OS, RAM, Storage',
        'CPU, RAM, Cache',
        'Program, OS memory manager'
      ],
      example: {
        title: 'Editing a large document',
        items: [
          'The editor asks the OS for memory to hold the open file.',
          'The document text is read from disk into RAM.',
          'Every keystroke updates that in-memory copy, not the file.',
          'Closing the document frees the memory — and unsaved changes vanish.'
        ]
      },
      misconceptions: [
        { wrong: 'RAM and storage are the same thing.', right: 'RAM is fast, volatile working memory; storage persists.' },
        { wrong: 'More RAM always makes a machine faster.', right: 'Only if memory was the constraint; otherwise nothing changes.' },
        { wrong: 'A frozen machine has crashed.', right: 'It is often swapping — alive, but waiting on disk for everything.' },
        { wrong: 'Closing a window frees its memory immediately.', right: 'The OS reclaims it, but not always instantly, and leaks may persist.' }
      ],
      takeaways: [
        '**RAM is the workspace; storage is the filing cabinet.** Running programs live in RAM, files live on disk.',
        '**Volatile means gone at power-off.** That is precisely why unsaved work does not survive a crash.',
        '**RAM is roughly a hundred times faster than an SSD** — which is why keeping the working set in memory matters so much.',
        '**Swapping is the cliff edge.** Once the machine starts paging to disk, response times collapse even though nothing has failed.',
        '**Memory leaks grow over time.** Usage climbing steadily over hours or days, then a crash, is the classic signature.',
        '**Out-of-memory kills look mysterious.** A process disappearing with no application error is often the OS reclaiming memory under pressure.',
        '**"Add more RAM" is a hypothesis.** Confirm memory is the constraint before spending on it.'
      ],
      reflection: 'A service runs fine for two days then dies every night at 3am. Memory use climbs steadily all day. What is the likely cause — and what would restarting it nightly hide?',
      checks: [
        'What does RAM hold, and what happens on power loss?',
        'How does a program get memory, and who manages it?',
        'What is swapping, and why does it feel like a freeze?',
        'What is a memory leak, and how would you spot one?',
        'Why is unsaved work lost in a crash?',
        'When does adding RAM actually help?'
      ]
    },
    {
      id: 'hw-storage',
      title: 'Storage',
      blurb: 'Where data persists when the power is off — and where program files actually live.',
      whatIs: {
        text: `Storage is the persistent layer: files, databases, installed programs and logs all live there and survive a restart. It is far slower than memory, which shapes an enormous amount of how software is designed.

The gap between device types is large. A hard disk drive (HDD) has spinning platters and a moving head, so anything scattered around the disk is slow. A solid-state drive (SSD) has no moving parts and is typically much faster, especially for random access. Both are still far slower than random-access memory (RAM) — which is why databases cache aggressively, why programs load into memory to run, and why "just read it from disk each time" is rarely acceptable in a hot path.

Storage problems are among the most disruptive because so much depends on them. **Slow disk** shows up as slow startup, slow queries and unresponsive applications. A **full disk** is worse: logs cannot be written, temporary files fail, databases refuse writes, and applications crash in ways that look nothing like a storage problem until you check.`,
        ensures: [
          'Explain what persists on storage and what does not',
          'Compare HDD and SSD characteristics honestly',
          'Describe why programs load from disk into memory to run',
          'Recognise the symptoms of slow disk and full disk',
          'Say why caching exists and what it trades',
          'Understand that "saved" means written to storage'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The relationship between storage, memory, and execution.',
        loop: false,
        steps: [
          { icon: 'hard-drive', label: 'File on disk', desc: 'The program and data sit in storage.', purpose: 'Hold programs and data safely across power cycles.', question: 'Where does this live when the machine is off?' },
          { icon: 'upload', label: 'Load into RAM', desc: 'To be used, it is copied into memory.', purpose: 'Move the working data somewhere fast enough for the central processing unit (CPU).', question: 'What is needed right now?' },
          { icon: 'microchip', label: 'CPU works on it', desc: 'The program runs from memory.', purpose: 'Do the work on the in-memory copy.', question: 'What is being changed?' },
          { icon: 'floppy-disk', label: 'Write back', desc: 'Changes are saved to disk.', purpose: 'Persist results so they survive shutdown.', question: 'What must be kept permanently?' }
        ]
      },
      io: {
        inputs: [
          ['A stored file'],
          ['File on disk', 'Free memory'],
          ['In-memory data', 'CPU instructions'],
          ['Changed in-memory data']
        ],
        outputs: [
          ['Persistent data'],
          ['Data resident in RAM'],
          ['Computed results'],
          ['An updated file on disk']
        ]
      },
      who: [
        'Storage device',
        'Operating system (OS), Storage, RAM',
        'CPU, RAM',
        'OS, Storage device'
      ],
      example: {
        title: 'Saving your work',
        items: [
          'The spreadsheet file sits on the SSD, untouched while closed.',
          'Opening it reads the data into RAM.',
          'Your edits change the in-memory copy only.',
          'Saving writes those changes back to disk — now they survive a restart.'
        ]
      },
      misconceptions: [
        { wrong: 'Programs run directly from disk.', right: 'They are loaded into RAM to execute.' },
        { wrong: 'Having a file open means it is saved.', right: 'Open data lives in RAM until it is written back.' },
        { wrong: 'A full disk only stops you saving files.', right: 'It stops logs, temporary files and database writes — often crashing apps.' },
        { wrong: 'An SSD makes everything fast.', right: 'It is still far slower than RAM, and cannot fix a bad query.' }
      ],
      takeaways: [
        '**Storage persists; memory does not.** That single difference explains save buttons, databases and why crashes lose work.',
        '**Disk is slow relative to memory** — even an SSD. This is why almost every system caches something.',
        '**SSDs win most on random access.** An HDD\'s moving head makes scattered reads much worse than sequential ones.',
        '**A full disk is an outage waiting to happen.** Logs, temp files and database writes all fail, usually with confusing errors.',
        '**Disk symptoms are indirect:** slow startup, slow queries, timeouts. Check space and I/O early rather than late.',
        '**Caching trades memory and freshness for speed.** It is the standard answer to slow storage — and the source of stale-data bugs.',
        '**"Saved" means written to storage.** Anything only in memory is one power cut away from not existing.'
      ],
      reflection: 'An application starts throwing errors that mention nothing about storage, and the machine is otherwise idle. What would you check within the first minute, and why does a full disk produce such confusing symptoms?',
      checks: [
        'What is the difference between storage and RAM?',
        'Why are programs loaded into memory to run?',
        'How does an SSD differ from an HDD in practice?',
        'What symptoms does a slow disk produce?',
        'What breaks when a disk is full?',
        'Why do systems cache data, and what does caching risk?'
      ]
    },
    {
      id: 'hw-run',
      title: 'How a Program Runs',
      blurb: 'Programs do not run from nowhere — they depend on storage, memory, and CPU execution.',
      whatIs: {
        text: `A program is a file until someone runs it. Then a chain of steps turns it into a running process: the operating system (OS) reads it from storage, loads its code and data into memory, sets up a **process** with its own memory space, and hands the central processing unit (CPU) the first instruction.

From there the CPU executes instructions one after another, using random-access memory (RAM) for anything it is working on. Along the way the program asks the OS for things it cannot do itself — read a file, open a network connection, allocate more memory. Those requests are **system calls**, and they are the boundary between a program and the machine.

Understanding this chain is diagnostic. Slow to start usually means disk or a large working set. Slow while running with the CPU busy means computation. Slow while running with the CPU idle means waiting — on disk, network or another process. And "nothing happened" often means output went somewhere you were not looking: a file, a log, another system.`,
        ensures: [
          'Trace a program from file on disk to running process',
          'Explain what the operating system does to start it',
          'Describe what a process owns while it runs',
          'Say what a system call is and why it exists',
          'Use the chain to locate where slowness comes from',
          'Know that output is not always the screen'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Program execution — storage, memory and CPU in sequence.',
        loop: false,
        steps: [
          { icon: 'hard-drive', label: 'Stored on disk', desc: 'The program is a file.', purpose: 'Hold the executable until someone runs it.', question: 'What program are we starting?' },
          { icon: 'memory', label: 'Loaded into RAM', desc: 'The OS loads and sets it up.', purpose: 'Create a process: code, data and its own memory space.', question: 'What has to be in memory before it can start?' },
          { icon: 'microchip', label: 'CPU executes', desc: 'Instructions run in order.', purpose: 'Do the program\'s work, asking the OS for resources as needed.', question: 'Is it computing, or waiting for something?' },
          { icon: 'display', label: 'Output produced', desc: 'Screen, file, or network.', purpose: 'Deliver the result to a user, a file, or another system.', question: 'Where did the result actually go?' }
        ]
      },
      example: {
        title: 'Running a report generator',
        items: [
          'The report tool sits on disk as an installed executable.',
          'Launching it creates a process and loads the code into RAM.',
          'The CPU runs the calculations, pausing to read data from the database.',
          'A finished report is written to a file — nothing appears on screen.'
        ]
      },
      io: {
        inputs: [
          ['An executable file', 'Storage device'],
          ['Program on disk', 'Available memory'],
          ['In-memory code', 'Input data', 'OS services'],
          ['Computed results', 'An output target']
        ],
        outputs: [
          ['A launchable program'],
          ['A running process with its own memory'],
          ['Results', 'System calls for files and network'],
          ['Screen output', 'A saved file', 'A network response']
        ]
      },
      who: [
        'Storage device, User',
        'Operating system, Loader',
        'CPU, Memory, OS',
        'Display, Disk, Network'
      ],
      misconceptions: [
        { wrong: 'Installed means running.', right: 'Installing puts a file on disk; running creates a process in memory.' },
        { wrong: 'A program can do anything it likes to the machine.', right: 'It asks the OS through system calls, which enforce permissions.' },
        { wrong: 'If nothing appears on screen, nothing happened.', right: 'Output may have gone to a file, a log, or another system.' },
        { wrong: 'Two copies of a program share their data.', right: 'Each process gets its own memory space, isolated from the other.' }
      ],
      takeaways: [
        '**Disk → memory → CPU → output.** Every running program follows that chain, and every stage can be the slow one.',
        '**A process is a program plus its state:** its own memory space, open files and execution position.',
        '**System calls are the boundary.** Files, networking and memory come from the OS, which is where permissions and isolation are enforced.',
        '**Processes are isolated.** One program cannot read another\'s memory, which is what keeps a crash local.',
        '**Slow start usually means disk or size; slow running with idle CPU means waiting.** The chain tells you where to look.',
        '**Output is not always visible.** Check files, logs and downstream systems before concluding nothing ran.',
        '**Exit codes report the outcome.** Zero means success, non-zero means failure — which is what scripts and pipelines act on.'
      ],
      reflection: 'Trace a program you ran today through all four stages. If it had taken thirty seconds to start, which stage would you suspect first — and how would you check?',
      checks: [
        'What are the stages between a file and a running program?',
        'What does the operating system do when you launch something?',
        'What does a process own?',
        'What is a system call, and why must one exist?',
        'How does the chain help you locate slowness?',
        'Where can a program\'s output go?'
      ]
    },
    {
      id: 'hw-bottlenecks',
      title: 'Resource Bottlenecks',
      blurb: 'System slowness can come from CPU, memory, disk, or network — symptoms are clues, not conclusions.',
      whatIs: {
        text: `Every machine has four resources that can run out: **central processing unit (CPU)**, **memory**, **disk** and **network**. Almost all performance problems are one of them being saturated — and the frustrating part is that they produce similar symptoms, so "it is slow" tells you almost nothing on its own.

The method is elimination with evidence. Check CPU: is it near 100%, and is that one core or all of them? Check memory: is the machine swapping? Check disk: is it full, or is I/O wait high? Check network: are latency, errors or timeouts elevated? Each check either rules a resource out or makes it a suspect.

Two traps are worth naming. Symptoms are often **second-order**: heavy swapping saturates the disk, so the disk looks like the problem when memory is the cause. And the constraint may not be on the machine you are looking at — a service waiting on a slow database has an idle CPU and a real problem somewhere else. Follow the waiting, not the busyness.`,
        ensures: [
          'Name the four resources and how each is measured',
          'Check each one in turn rather than guessing',
          'Distinguish a cause from a second-order symptom',
          'Recognise when the bottleneck is on another machine',
          'Interpret high I/O wait, swapping and saturated cores',
          'Base the fix on evidence rather than the first plausible theory'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Diagnosing slowness by elimination.',
        loop: false,
        steps: [
          { icon: 'gauge-high', label: 'Describe the symptom', desc: 'What is slow, for whom, since when.', purpose: 'Turn "it is slow" into something measurable.', question: 'What exactly is slow, and when did it start?' },
          { icon: 'microchip', label: 'Check CPU', desc: 'Busy, or waiting?', purpose: 'See whether the processor is saturated — and on one core or all.', question: 'Is the CPU actually busy?' },
          { icon: 'memory', label: 'Check memory', desc: 'Low memory, or swapping?', purpose: 'Detect memory pressure, which drags everything else down.', question: 'Is the machine swapping?' },
          { icon: 'hard-drive', label: 'Check disk', desc: 'Full, or high I/O wait?', purpose: 'Test whether storage is the limit — space or throughput.', question: 'Is the disk full or saturated?' },
          { icon: 'network-wired', label: 'Check network', desc: 'Latency, errors, timeouts.', purpose: 'Test whether time is being spent waiting on another system.', question: 'Are we waiting on something remote?' },
          { icon: 'circle-check', label: 'Name the constraint', desc: 'Cause, not symptom.', purpose: 'Identify the true bottleneck before changing anything.', question: 'Which resource is the cause rather than a consequence?' }
        ]
      },
      example: {
        title: 'An application is very slow',
        items: [
          'Users report the app crawling since about 10am.',
          'CPU sits at 15% — the processor is not the constraint.',
          'Memory is nearly full and swapping heavily — a strong lead.',
          'Disk I/O is high, but caused by the swapping, not by the app.',
          'Network latency and error rates are normal.',
          'Conclusion: memory pressure, with disk as a second-order symptom.'
        ]
      },
      io: {
        inputs: [
          ['User reports', 'Time window'],
          ['CPU utilisation, per core'],
          ['Memory use', 'Swap activity'],
          ['Disk space', 'I/O wait'],
          ['Latency', 'Errors', 'Timeouts'],
          ['All the evidence']
        ],
        outputs: [
          ['A measurable problem statement'],
          ['CPU ruled in or out'],
          ['Memory ruled in or out'],
          ['Disk ruled in or out'],
          ['Network ruled in or out'],
          ['The real constraint', 'A targeted fix']
        ]
      },
      who: [
        'Users, Support',
        'Engineer, Monitoring',
        'Engineer, Monitoring',
        'Engineer, Monitoring',
        'Engineer, Monitoring',
        'Engineer'
      ],
      misconceptions: [
        { wrong: 'Slowness is usually the network.', right: 'It is whichever resource is saturated — check all four.' },
        { wrong: 'The busiest resource is the cause.', right: 'It may be a consequence: swapping makes disk look guilty.' },
        { wrong: 'Restarting fixed it, so it is resolved.', right: 'A restart clears the symptom and hides a leak or a queue.' },
        { wrong: 'The problem must be on this machine.', right: 'An idle CPU waiting on a slow dependency is very common.' }
      ],
      takeaways: [
        '**Four resources: CPU, memory, disk, network.** Nearly every performance problem is one of them running out.',
        '**Symptoms overlap; evidence separates them.** "Slow" is the same word for four different causes.',
        '**Check for waiting, not just busyness.** High I/O wait or an idle CPU with slow responses points away from computation.',
        '**Second-order effects mislead.** Memory pressure saturates the disk; blaming the disk fixes nothing.',
        '**Bottlenecks move.** Fix the tightest constraint and the next one appears — which is progress, not failure.',
        '**The constraint may be elsewhere.** A service waiting on a slow database looks healthy by every local metric.',
        '**Restarting is not diagnosis.** It clears the symptom, discards the evidence, and guarantees a repeat.'
      ],
      reflection: 'Next time something is slow, write down the four resources and your evidence for each before changing anything. Which one would you have blamed without looking — and were you right?',
      checks: [
        'What are the four common bottlenecks?',
        'Why can symptoms not identify the cause on their own?',
        'How would you tell a memory problem from a disk problem?',
        'What is a second-order symptom?',
        'What does an idle CPU with slow responses suggest?',
        'Why is restarting a poor substitute for diagnosis?'
      ]
    }
  ]
}
