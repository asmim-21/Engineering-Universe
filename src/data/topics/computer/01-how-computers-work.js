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
        text: 'A computer receives input, processes information, stores data, and produces output. Software can only run because hardware provides compute, memory, storage, and input/output.',
        ensures: [
          '**Hardware** is the physical equipment: CPU, RAM, storage, devices.',
          '**Software** is the instructions and data that run on that hardware.',
          'Applications sit on top of an operating system, which sits on top of hardware.',
          'Every layer depends on the one beneath it.'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'The computer stack — applications sit on top of an operating system and hardware resources.',
        steps: [
          { icon: 'window-maximize', label: 'Application', purpose: 'The software the user actually interacts with.', question: 'What does the user use?' },
          { icon: 'gears', label: 'Operating System', purpose: 'Manages hardware and runs applications.', question: 'What manages the hardware?' },
          { icon: 'microchip', label: 'CPU · RAM · Storage · Network', purpose: 'The physical resources that do the work.', question: 'What does the real work?' }
        ]
      },
      example: {
        title: 'Opening a text editor',
        items: [
          'You double-click the app icon (input).',
          'The OS finds the program and asks the hardware to run it.',
          'The CPU, RAM, and storage do the actual work of loading and running it.'
        ]
      },
      misconceptions: [
        { wrong: 'Software runs by magic, separate from hardware.', right: 'Every application becomes instructions executed by physical hardware.' },
        { wrong: 'Hardware is irrelevant to software engineers.', right: 'Hardware limits explain much of how software behaves and fails.' },
        { wrong: 'The application talks straight to the hardware.', right: 'The operating system sits in between and manages access.' }
      ],
      takeaways: [
        'A computer is input → process → store → output.',
        'Software depends on hardware to do anything at all.',
        'Applications, OS, and hardware form a stack of layers.',
        'Understanding the stack helps you reason about behaviour and failures.'
      ],
      reflection: 'Pick an app you used today. Which layer of the stack were you actually touching?',
      checks: [
        'What four things does a computer fundamentally do?',
        'What is the difference between hardware and software?',
        'What sits between an application and the hardware?',
        'Why should a software engineer care about hardware?'
      ]
    },
    {
      id: 'hw-cpu',
      title: 'The CPU',
      blurb: 'The component that executes instructions — fetch, decode, execute, repeat.',
      whatIs: {
        text: 'The CPU is the part of the computer that executes instructions. It repeatedly fetches, decodes, and executes them, billions of times per second.',
        ensures: [
          'Clock speed affects cycles per second, but it is not the only performance factor.',
          'Modern CPUs have multiple cores, so more work can happen in parallel.',
          'A CPU bottleneck occurs when the processor is too busy to keep up with demand.',
          'Faster GHz does not automatically mean a faster program.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The instruction cycle — the CPU loops through this endlessly while a program runs.',
        steps: [
          { icon: 'download', label: 'Fetch', desc: 'Get the next instruction from memory.', purpose: 'Retrieve the next instruction the program wants to run.', question: 'What is the next instruction?' },
          { icon: 'magnifying-glass', label: 'Decode', desc: 'Work out what the instruction means.', purpose: 'Interpret the instruction into an operation the hardware can perform.', question: 'What does this instruction ask for?' },
          { icon: 'bolt', label: 'Execute', desc: 'Perform the operation.', purpose: 'Carry out the calculation, comparison, or data movement.', question: 'What work needs doing?' },
          { icon: 'floppy-disk', label: 'Write back', desc: 'Store the result and move on.', purpose: 'Record the result in a register or memory, then advance.', question: 'Where does the result go?' }
        ]
      },
      example: {
        title: 'Adding two numbers',
        items: [
          'Fetch the "add" instruction for the two values.',
          'Decode it as an addition operation.',
          'Execute the addition in the arithmetic unit.',
          'Write the sum back so the program can use it.'
        ]
      },
      io: {
        inputs: [
          ['Program counter', 'Instruction in memory'],
          ['Raw instruction', 'CPU instruction set'],
          ['Decoded operation', 'Operands / register values'],
          ['Computed result', 'Destination register']
        ],
        outputs: [
          ['Instruction loaded into CPU'],
          ['Control signals', 'Required operands'],
          ['Result value', 'Updated flags'],
          ['Stored result', 'Next instruction address']
        ]
      },
      who: [
        'Control unit, Memory',
        'Control unit, Instruction decoder',
        'Arithmetic logic unit (ALU)',
        'Registers, Memory'
      ],
      misconceptions: [
        { wrong: 'More GHz always means better performance.', right: 'Cores, memory, and the workload matter just as much as clock speed.' },
        { wrong: 'The CPU stores your files.', right: 'The CPU executes instructions; storage keeps files.' },
        { wrong: 'A slow system always means bad code.', right: 'It may mean a saturated CPU, memory, disk, or network.' }
      ],
      takeaways: [
        'The CPU fetches, decodes, and executes instructions.',
        'Clock speed is one factor, not the whole story.',
        'Multiple cores allow parallel work.',
        'A CPU bottleneck is the processor unable to keep up.'
      ],
      reflection: 'If a program pins one CPU core at 100% but others sit idle, what does that tell you?',
      checks: [
        'What three steps repeat in the instruction cycle?',
        'Why is GHz not the only performance factor?',
        'What do multiple cores allow?',
        'What is a CPU bottleneck?'
      ]
    },
    {
      id: 'hw-ram',
      title: 'Memory (RAM)',
      blurb: 'Fast, temporary working memory that holds active data while programs run.',
      whatIs: {
        text: 'RAM is temporary working memory used while programs are running. It is fast compared with disk, but it loses its contents when the power is off.',
        ensures: [
          'Applications need RAM to hold active data, code, and working state.',
          'RAM is much faster than disk storage.',
          'When memory runs low, systems slow down, kill processes, or fall back to slower disk.',
          'RAM and storage are not the same thing.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How a program uses memory while it runs.',
        loop: false,
        steps: [
          { icon: 'box-open', label: 'Request memory', desc: 'The program asks the OS for working space.', purpose: 'Reserve space to hold the program’s active data and state.', question: 'How much memory is needed?' },
          { icon: 'memory', label: 'Load into RAM', desc: 'Code and data are placed in fast memory.', purpose: 'Keep the working set close to the CPU for fast access.', question: 'What must stay readily available?' },
          { icon: 'arrows-rotate', label: 'Read & write', desc: 'The CPU uses RAM constantly as it runs.', purpose: 'Give the CPU quick access to values it is working on.', question: 'What is the program actively using?' },
          { icon: 'trash-can', label: 'Release on exit', desc: 'Memory is freed when the program closes.', purpose: 'Return memory so other processes can use it.', question: 'Is this data still needed?' }
        ]
      },
      io: {
        inputs: [
          ['Program request', 'Free memory'],
          ['Reserved memory', 'Code & data'],
          ['In-memory data', 'CPU'],
          ['Program exit']
        ],
        outputs: [
          ['Allocated memory'],
          ['A loaded working set'],
          ['Updated values'],
          ['Freed memory']
        ]
      },
      who: [
        'Program, OS memory manager',
        'OS, RAM',
        'CPU, RAM',
        'OS memory manager'
      ],
      example: {
        title: 'Editing a large document',
        items: [
          'The editor asks for memory to hold the open file.',
          'The document’s text is loaded into RAM.',
          'Every keystroke reads and updates that in-memory copy.',
          'Closing the document frees the memory it used.'
        ]
      },
      misconceptions: [
        { wrong: 'RAM and storage are the same thing.', right: 'RAM is fast, temporary, and cleared on power-off; storage persists.' },
        { wrong: 'Closing a window instantly frees all its memory.', right: 'The OS reclaims memory, but not always immediately.' },
        { wrong: 'More RAM always makes everything faster.', right: 'It helps only when memory was the constraint.' }
      ],
      takeaways: [
        'RAM is fast, temporary working memory.',
        'Running programs live in RAM, not on disk.',
        'RAM contents are lost when power is off.',
        'Low memory causes slowdowns, swapping, or killed processes.'
      ],
      reflection: 'Why does a machine slow to a crawl — rather than simply refuse — when it runs low on RAM?',
      checks: [
        'What is RAM used for?',
        'What happens to RAM contents when power is lost?',
        'How is RAM different from storage?',
        'What are the symptoms of low memory?'
      ]
    },
    {
      id: 'hw-storage',
      title: 'Storage',
      blurb: 'Where data persists when the power is off — and where program files actually live.',
      whatIs: {
        text: 'Storage persists data when the computer is powered off. Program files live on storage, but running programs are loaded into memory to execute.',
        ensures: [
          'SSD storage is generally faster than traditional HDD storage.',
          'Files survive a restart; RAM contents do not.',
          'Disk bottlenecks show up as slow startup, slow file access, or delayed responses.',
          'A full or failing disk can stop applications entirely.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The relationship between storage, memory, and execution.',
        loop: false,
        steps: [
          { icon: 'hard-drive', label: 'File on disk', desc: 'The program and data sit in storage.', purpose: 'Keep programs and data safe across power cycles.', question: 'Where does this live when the machine is off?' },
          { icon: 'upload', label: 'Load into RAM', desc: 'To run, it is copied into memory.', purpose: 'Move the working data somewhere the CPU can use quickly.', question: 'What needs to run right now?' },
          { icon: 'microchip', label: 'CPU executes', desc: 'The program runs from memory.', purpose: 'Do the actual work using the in-memory copy.', question: 'What is the program doing?' },
          { icon: 'floppy-disk', label: 'Save back', desc: 'Changes are written back to disk.', purpose: 'Persist results so they survive shutdown.', question: 'What must be kept permanently?' }
        ]
      },
      io: {
        inputs: [
          ['A saved file'],
          ['File on disk', 'Free memory'],
          ['In-memory data', 'CPU'],
          ['Changed data']
        ],
        outputs: [
          ['Persistent data'],
          ['Data in RAM'],
          ['Computed results'],
          ['Updated file on disk']
        ]
      },
      who: [
        'Storage device',
        'OS, Storage, RAM',
        'CPU, RAM',
        'OS, Storage device'
      ],
      example: {
        title: 'Saving your work',
        items: [
          'The spreadsheet file lives on the SSD.',
          'Opening it loads the data into RAM.',
          'You edit the in-memory copy as the CPU runs the app.',
          'Hitting save writes your changes back to disk.'
        ]
      },
      misconceptions: [
        { wrong: 'Programs run directly from disk.', right: 'Programs are loaded from disk into RAM to run.' },
        { wrong: 'Saving a file and having it "open" are the same.', right: 'Open data lives in RAM until you save it to storage.' },
        { wrong: 'A full disk only affects saving files.', right: 'It can crash apps, block logs, and stall the whole system.' }
      ],
      takeaways: [
        'Storage keeps data when power is off.',
        'Program files live on disk; running programs live in RAM.',
        'SSDs are generally faster than HDDs.',
        'Disk problems appear as slow startup and slow file access.'
      ],
      reflection: 'If unsaved work is lost in a crash, which component was it in — and why was that fine until it wasn’t?',
      checks: [
        'What is the point of storage versus RAM?',
        'Where do running programs actually execute?',
        'How does an SSD differ from an HDD?',
        'What do disk bottlenecks look like?'
      ]
    },
    {
      id: 'hw-run',
      title: 'How a Program Runs',
      blurb: 'Programs do not run from nowhere — they depend on storage, memory, and CPU execution.',
      whatIs: {
        text: 'Running software is a chain: a program stored on disk is loaded into memory, executed instruction-by-instruction by the CPU, and produces output. Each step depends on real hardware resources.',
        ensures: [
          'A program at rest is just a file on storage.',
          'It must be loaded into RAM before the CPU can run it.',
          'The CPU executes its instructions to do useful work.',
          'Output is produced for the user, a file, or another system.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Program execution — shows that programs depend on storage, memory, and CPU together.',
        loop: false,
        steps: [
          { icon: 'hard-drive', label: 'Stored on disk', desc: 'The program is a file in storage.', purpose: 'Hold the program safely until it is needed.', question: 'What program do we want to run?' },
          { icon: 'memory', label: 'Loaded into RAM', desc: 'The OS loads it into working memory.', purpose: 'Place the code and data where the CPU can reach it fast.', question: 'What has to be in memory to start?' },
          { icon: 'microchip', label: 'CPU executes', desc: 'Instructions run one after another.', purpose: 'Perform the program’s actual work.', question: 'What should the program do?' },
          { icon: 'display', label: 'Output produced', desc: 'Results appear on screen, disk, or network.', purpose: 'Deliver the result to a user, file, or system.', question: 'What is the useful result?' }
        ]
      },
      example: {
        title: 'Running a report generator',
        items: [
          'The report tool is installed as a file on disk.',
          'Launching it loads the program into RAM.',
          'The CPU runs its instructions to crunch the numbers.',
          'A finished PDF report is written out.'
        ]
      },
      io: {
        inputs: [
          ['Installed program file', 'Storage device'],
          ['Program on disk', 'Available memory'],
          ['In-memory code', 'Input data'],
          ['Executed instructions', 'Output target']
        ],
        outputs: [
          ['A launchable program'],
          ['Program resident in RAM'],
          ['Computed results'],
          ['Screen output', 'Saved file', 'Network response']
        ]
      },
      who: [
        'Storage device, User',
        'Operating system, Loader',
        'CPU, Memory',
        'Display, Disk, Network'
      ],
      misconceptions: [
        { wrong: 'Programs simply run from nowhere.', right: 'They depend on storage, memory, and CPU execution in sequence.' },
        { wrong: 'Installing a program means it is running.', right: 'Installing puts it on disk; running loads it into RAM.' },
        { wrong: 'If nothing appears on screen, nothing happened.', right: 'Output can go to a file or another system instead.' }
      ],
      takeaways: [
        'Execution is disk → memory → CPU → output.',
        'A program at rest is just a file.',
        'Every step needs a real hardware resource.',
        'Output can be a screen, a file, or a network response.'
      ],
      reflection: 'Trace one program you ran today through all four stages. Which stage would you blame if it was slow to start?',
      checks: [
        'What are the four stages of running a program?',
        'Why must a program be loaded into RAM?',
        'What does the CPU do during execution?',
        'Where can a program’s output go?'
      ]
    },
    {
      id: 'hw-bottlenecks',
      title: 'Resource Bottlenecks',
      blurb: 'System slowness can come from CPU, memory, disk, or network — symptoms are clues, not conclusions.',
      whatIs: {
        text: 'Computers have finite resources: CPU, memory, disk, and network. Performance problems often happen when one of them becomes saturated. Different bottlenecks can look similar, so you gather evidence rather than guess.',
        ensures: [
          '**CPU:** the processor is too busy to keep up.',
          '**Memory:** not enough working memory, causing swapping or kills.',
          '**Disk:** reads/writes are slow or storage is full.',
          '**Network:** communication is slow, blocked, or timing out.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Diagnosing slowness by resource — check each candidate before concluding.',
        loop: false,
        steps: [
          { icon: 'gauge-high', label: 'Notice the symptom', desc: 'Something is slow or unresponsive.', purpose: 'Describe the actual problem before investigating.', question: 'What exactly is slow?' },
          { icon: 'microchip', label: 'Check CPU', desc: 'Is a core or the whole processor maxed out?', purpose: 'Rule the processor in or out as the constraint.', question: 'Is the CPU saturated?' },
          { icon: 'memory', label: 'Check memory', desc: 'Is the system low on RAM or swapping?', purpose: 'See whether memory pressure is the cause.', question: 'Is memory exhausted?' },
          { icon: 'hard-drive', label: 'Check disk', desc: 'Is storage full or I/O slow?', purpose: 'Test whether disk is the limiting factor.', question: 'Is the disk full or busy?' },
          { icon: 'network-wired', label: 'Check network', desc: 'Is traffic slow, blocked, or timing out?', purpose: 'Test whether the network is the constraint.', question: 'Is the network the problem?' },
          { icon: 'circle-check', label: 'Name the constraint', desc: 'Identify the saturated resource.', purpose: 'Base the fix on evidence, not a hunch.', question: 'Which resource is actually saturated?' }
        ]
      },
      example: {
        title: 'An application is very slow',
        items: [
          'Users report the app is crawling.',
          'CPU sits low, so the processor is not the issue.',
          'Memory is near full and swapping heavily — a strong lead.',
          'Disk is fine on space but busy from the swapping.',
          'Network latency is normal.',
          'Conclusion: a memory bottleneck, confirmed by evidence.'
        ]
      },
      io: {
        inputs: [
          ['User report', 'Symptom description'],
          ['CPU usage metrics'],
          ['Memory & swap metrics'],
          ['Disk space & I/O metrics'],
          ['Network latency & error metrics'],
          ['All gathered evidence']
        ],
        outputs: [
          ['A clear problem statement'],
          ['CPU ruled in or out'],
          ['Memory ruled in or out'],
          ['Disk ruled in or out'],
          ['Network ruled in or out'],
          ['Identified bottleneck', 'Targeted fix']
        ]
      },
      who: [
        'User, Support',
        'Engineer, Monitoring tools',
        'Engineer, Monitoring tools',
        'Engineer, Monitoring tools',
        'Engineer, Monitoring tools',
        'Engineer'
      ],
      misconceptions: [
        { wrong: 'A slow system is always a network issue.', right: 'It could be CPU, memory, disk, or network — check each.' },
        { wrong: 'Symptoms are conclusions.', right: 'Symptoms are clues; evidence decides the cause.' },
        { wrong: 'One resource fixes everything.', right: 'Fixing the wrong resource wastes time and money.' }
      ],
      takeaways: [
        'There are four common bottlenecks: CPU, memory, disk, network.',
        'Different bottlenecks can produce similar symptoms.',
        'Gather evidence before concluding.',
        'A targeted fix beats a lucky guess.'
      ],
      reflection: 'Last time your machine was slow, did you diagnose it — or just guess and restart?',
      checks: [
        'What are the four common resource bottlenecks?',
        'Why can’t you conclude a cause from symptoms alone?',
        'How would you tell a memory issue from a disk issue?',
        'Why is guessing an expensive habit?'
      ]
    }
  ]
}
