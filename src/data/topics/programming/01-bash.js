export default {
  id: 'bash',
  title: 'Bash',
  tone: 'c1',
  blurb: 'From shell basics to scripting: understanding the command line, automating workflows, and building text-processing pipelines.',
  tags: ['Shell', 'Scripting', 'CLI', 'Automation', 'Unix'],
  popups: [
    {
      id: 'shell-basics',
      title: 'Understanding the Shell',
      blurb: 'The shell is your direct line to the operating system. Learn why it matters and how it works.',
      whatIs: {
        text: `A shell is a program that interprets your commands and tells the operating system what to do. When you type a command in your terminal, the shell reads it, figures out what you want, and asks the OS to run it. Bash (Bourne Again Shell) is the most common shell on Linux and macOS—it's been the default for decades because it's powerful, standardized, and flexible.

The relationship is important: Terminal → Shell → OS. The terminal is just a window for text input/output. The shell is the interpreter that sits between you and the OS. The OS is what actually runs programs and manages resources. Understanding this layering helps you troubleshoot, write scripts, and use the system effectively.`,
        ensures: [
          'Understand what a shell is and why Bash is the standard',
          'Know the difference between terminal, shell, and OS',
          'Recognize the shell prompt and what it means',
          'Run a command and interpret the output',
          'Understand that the shell is just a program—you can change it'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Three layers: terminal, shell, OS',
        loop: false,
        steps: [
          { icon: 'keyboard', label: 'You type in terminal', desc: 'Type: `ls -la`' },
          { icon: 'terminal', label: 'Shell receives input', desc: 'Bash reads "ls -la"' },
          { icon: 'gears', label: 'Shell interprets it', desc: 'Figures out: run `ls` program with `-la` flags' },
          { icon: 'right-left', label: 'Shell asks OS', desc: 'System call to fork/exec' },
          { icon: 'microchip', label: 'OS runs the program', desc: '`ls` lists files with details' },
          { icon: 'display', label: 'Output back to you', desc: 'Result shown in terminal' }
        ]
      },
      example: {
        title: 'Running a command: what actually happens',
        items: [
          '**You type:** `ls -la`',
          '**Shell sees:** a command name (`ls`) and a flag (`-la`)',
          '**Shell asks OS:** "Run the `ls` program from /bin/ls with arguments: `-la`"',
          '**OS does:** Finds the `ls` executable, creates a process, runs it',
          '**ls outputs:** Directory listing with details (permissions, size, dates)',
          '**Shell displays:** Output in your terminal and waits for the next command'
        ]
      },
      takeaways: [
        '**Terminal is a window:** It sends your keystrokes to the shell and displays shell output. It\'s not doing the real work—it\'s just the interface.',
        '**Shell is an interpreter:** Bash reads your command, understands it, and orchestrates the OS to run it. Other shells exist (zsh, fish, sh) but Bash is standard.',
        '**The shell prompt (`$` or `#`)** signals that the shell is waiting for input. `#` means you\'re running as root (superuser), which is powerful but dangerous.',
        '**Everything is a command:** `ls` is a program in `/bin/ls`. `cd` is built into the shell itself (a "builtin"). You can alias commands, define functions, and compose programs.',
        '**Exit codes matter:** Every program returns 0 (success) or non-zero (failure). The shell uses this to decide what to do next in scripts.',
        '**You can change the shell:** Most systems have multiple shells installed. You can switch from Bash to zsh (popular on newer Macs) without losing your files.'
      ],
      reflection: 'Open a terminal right now. What shell are you using? (Hint: run `echo $SHELL`). Try a simple command like `date`. What is the terminal showing you, and what is the shell doing behind the scenes?',
      checks: [
        'What is the difference between a terminal and a shell?',
        'What does the shell do with your command before the OS runs it?',
        'Why is the prompt important?',
        'Is `cd` a program like `ls`, or something different?',
        'What does an exit code represent?'
      ]
    },
    {
      id: 'file-navigation',
      title: 'Navigating & Organizing the File System',
      blurb: 'Master movement and manipulation: understanding paths, organizing files, and working with permissions.',
      whatIs: {
        text: `The file system is hierarchical: directories (folders) contain files and other directories. At the top is / (the root). Your home directory is where your personal files live.

Navigation is fundamental. You need to know where you are, how to get somewhere else, and how to organize your work. This is not just about knowing commands—it's about understanding the structure of the file system and building mental models of where things are.

Paths can be absolute (starting with /, like /Users/you/Documents) or relative (from where you are now, like Documents or ../projects). Understanding the difference is crucial: an absolute path works from anywhere; a relative path only works from your current location.

Permissions control who can read, write, or execute files. Every file has an owner, a group, and permissions for each. When you delete a file with rm, it's gone permanently—there's no trash or recovery.`,
        ensures: [
          'Know your current location and how to print it (`pwd`)',
          'Move around the file system (`cd`, understanding paths)',
          'List files with details (`ls` with various flags)',
          'Copy, move, and delete files safely (`cp`, `mv`, `rm`)',
          'Create and remove directories (`mkdir`, `rmdir`)',
          'Understand and modify permissions (`chmod`, `chown`)',
          'Know absolute vs relative paths'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'File system hierarchy and navigation',
        loop: false,
        steps: [
          { icon: 'hard-drive', label: 'Root directory /', desc: 'Top of everything' },
          { icon: 'folder', label: 'usr/', desc: 'Programs and data' },
          { icon: 'house', label: 'home/', desc: 'User directories' },
          { icon: 'user', label: 'alice/', desc: '`~` expands to /home/alice' },
          { icon: 'folder-open', label: 'projects/', desc: 'Relative path: projects (from ~)' },
          { icon: 'file', label: 'app.js', desc: 'Full path: /home/alice/projects/app.js' }
        ]
      },
      example: {
        title: 'Working with files: a real workflow',
        items: [
          '**`pwd`** → `/Users/alice` — You\'re in your home directory',
          '**`ls`** → Lists files: Documents, Downloads, projects, etc.',
          '**`cd projects`** — Move into the projects folder (relative path)',
          '**`pwd`** → `/Users/alice/projects` — Confirm you moved',
          '**`ls -la`** → See all files with details (sizes, dates, permissions)',
          '**`mkdir backup`** — Create a new folder called backup',
          '**`cp main.js backup/main.js.bak`** — Copy a file with a new name',
          '**`mv main.js archive/main.js`** — Move the original to archive folder',
          '**`chmod 755 script.sh`** — Make a script executable',
          '**`rm temp.txt`** — Delete a temporary file (permanent!)'
        ]
      },
      takeaways: [
        '**`pwd` (print working directory)** tells you where you are right now in the file system. Every shell session has a current directory.',
        '**`.` and `..`** are special: `.` means current directory, `..` means parent. So `cd ..` goes up one level, and `cd ./folder` goes into a subfolder.',
        '**`~` expands to your home directory.** `cd ~` takes you home from anywhere. `~/Documents` is a convenient way to refer to your Documents folder.',
        '**Absolute paths start with `/`** and work from anywhere. Relative paths don\'t and only work from your current location. Use absolute paths in scripts for clarity.',
        '**`ls` has powerful flags:** `-l` shows details (long format), `-a` shows hidden files (starting with `.`), `-h` shows human-readable sizes. Combine them: `ls -lah`.',
        '**`rm` is permanent.** There is no trash, no undelete. It\'s gone immediately. Use `rm -i` to ask for confirmation, or just be careful.',
        '**Permissions are three bits for owner, group, and others:** `rwx` (read, write, execute) each. `chmod 755` means: owner can do anything, group and others can read and execute (common for scripts).',
        '**Tab completion saves lives:** Type `cd Doc` and hit tab. The shell auto-completes to `Documents`. Use it constantly.'
      ],
      reflection: 'Map out your home directory. Where do you keep projects, documents, and temporary files? Create a folder structure that makes sense for your workflow. How would you organize a new project?',
      checks: [
        'What does `pwd` show?',
        'What is the difference between `/home/alice/projects` and `projects`?',
        'Why is `rm` dangerous?',
        'How would you move a file to a parent directory using a relative path?',
        'What do the three digits in `chmod 755` represent?',
        'How do you see hidden files (ones starting with a dot)?'
      ]
    },
    {
      id: 'redirection-pipes',
      title: 'Redirection & Pipes: Composing Programs',
      blurb: 'The Unix philosophy: combine small tools into powerful workflows using redirection and pipes.',
      whatIs: {
        text: `Unix programs are designed to do one thing well. They read input, process it, and produce output. Redirection and pipes let you connect programs into workflows that are greater than the sum of their parts.

Redirection sends output to a file or takes input from a file. Pipes connect one program's output directly to another program's input. This is the Unix philosophy: write small tools that compose well.

Understanding stdin, stdout, and stderr is critical. stdout is normal output (what you see). stderr is error messages (also what you see by default, but you can separate them). stdin is input (from keyboard, a file, or another program).

With pipes and redirection, you can build powerful one-liners that do in one line what would take a script in other languages. You can chain programs: filter output from one, transform it with another, count results, save to a file—all in one command.`,
        ensures: [
          'Understand stdin, stdout, and stderr',
          'Redirect output to a file (`>`, `>>`)',
          'Redirect input from a file (`<`)',
          'Pipe output from one program to another (`|`)',
          'Combine multiple redirects in complex workflows',
          'Separate and manage error output'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How pipes connect programs',
        loop: false,
        steps: [
          { icon: 'file-lines', label: 'Input file', desc: 'logfile.txt with 1000 lines' },
          { icon: 'magnifying-glass', label: 'grep "error"', desc: 'Filters to lines with "error"' },
          { icon: 'hashtag', label: 'wc -l', desc: 'Counts lines' },
          { icon: 'floppy-disk', label: '> count.txt', desc: 'Redirects to file' }
        ]
      },
      example: {
        title: 'Real-world redirection and pipes',
        items: [
          '**`echo "hello" > output.txt`** — Write "hello" to a file (overwrites if file exists)',
          '**`echo "more" >> output.txt`** — Append "more" to the file (keeps existing content)',
          '**`cat < input.txt`** — Read input from a file (less common than `cat input.txt`, but shows the concept)',
          '**`ls | wc -l`** — Pipe: count how many files are in this directory',
          '**`cat logfile.txt | grep "error"`** — Pipe: show only lines containing "error"',
          '**`cat logfile.txt | grep "error" | wc -l`** — Chain pipes: count error lines',
          '**`ps aux | grep python`** — Find running Python processes',
          '**`command 2>&1`** — Redirect both stdout and stderr to the same place',
          '**`command 2>/dev/null`** — Throw away error messages (redirect to /dev/null, a black hole)',
          '**`sort data.txt | uniq > unique.txt`** — Remove duplicates and save'
        ]
      },
      takeaways: [
        '**stdin, stdout, stderr are three streams:** stdin is input (usually keyboard), stdout is output (usually terminal), stderr is errors (also terminal). Programs read from stdin, write to stdout, and complain to stderr.',
        '**`>` overwrites, `>>` appends.** This is a critical difference. `> file.txt` replaces the file; `>> file.txt` adds to the end. One character can change your entire workflow.',
        '**Pipes (`|`) are the glue that connects Unix programs.** The key insight: the output of one program becomes the input to the next. This is how you build complex workflows from simple tools.',
        '**Error redirection is separate:** By default, errors go to the terminal just like normal output. Use `2>` to redirect stderr separately from stdout. `2>&1` merges them.',
        '**`/dev/null` is a black hole:** Redirecting to `/dev/null` discards output. Useful when you want to run a command but don\'t care about the output.',
        '**Programs don\'t know they\'re piped:** When you pipe `ls | wc -l`, the `ls` program has no idea. It outputs to stdout as usual. The shell is handling the plumbing.',
        '**Build pipes incrementally:** Don\'t write `cat file | grep X | sed Y | awk Z` all at once. Test each step individually: `cat file`, then `cat file | grep X`, then add the next piece. This debugging approach saves hours.',
        '**Pipes are for data flow; redirection is for files.** Use pipes when chaining programs. Use `>` and `>>` when saving to files. They\'re complementary, not competing.'
      ],
      reflection: 'Think about a real task: find all Python files in a project, count them, and save the count to a file. How would you build this command step by step? (Hint: `find`, `wc`, `>`)',
      checks: [
        'What is the difference between `>` and `>>`?',
        'What does a pipe (`|`) do?',
        'How would you count the number of files in a directory?',
        'How would you find all lines in a file that contain a specific word?',
        'What would `command 2>&1` do?',
        'Why are pipes powerful?'
      ]
    },
    {
      id: 'variables-environment',
      title: 'Variables & Environment: Customizing Your Shell',
      blurb: 'Shell variables and environment variables: storing state and configuring how your shell works.',
      whatIs: {
        text: `Shell variables store values that you can use in commands and scripts. Environment variables are shell variables that get passed to every program you run. Every program you launch inherits the environment.

The difference matters: a shell variable only exists in your current shell session. An environment variable (created with \`export\`) is available to child processes. When you run a program, it inherits all exported variables from your shell.

The \`$PATH\` variable is special: it tells the shell where to find programs. When you type \`ls\`, the shell searches for a program named \`ls\` in each directory listed in \`$PATH\`. If you install a tool that doesn't work, it's often because the installation directory isn't in \`$PATH\`.

Configuration files like \`.bashrc\` and \`.bash_profile\` run automatically when you start a shell. They set up your environment: aliases, functions, exported variables, prompt customization. This is where you make the shell your own.`,
        ensures: [
          'Create and use shell variables',
          'Understand the difference between shell and environment variables',
          'Export variables to make them available to child processes',
          'Understand `$PATH` and why it\'s critical',
          'Customize shell configuration in `.bashrc` and `.bash_profile`',
          'Reload configuration without restarting'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Variable scope: shell vs environment',
        loop: false,
        steps: [
          { icon: 'terminal', label: 'Shell session (Bash)', desc: 'You run a shell' },
          { icon: 'font', label: 'Shell variable: name="Alice"', desc: 'Only in this shell' },
          { icon: 'upload', label: 'export EMAIL="alice@example.com"', desc: 'Promoted to environment' },
          { icon: 'code', label: 'Run a Python script', desc: 'Python inherits EMAIL' },
          { icon: 'code', label: 'Run a Node script', desc: 'Node also inherits EMAIL' }
        ]
      },
      example: {
        title: 'Variables in action',
        items: [
          '**`name="Alice"`** — Create a shell variable (no spaces around `=`)',
          '**`echo $name`** — Use the variable (outputs: Alice)',
          '**`export greeting="Hello"`** — Export a variable to environment',
          '**`echo $PATH`** — See all directories where shell looks for programs',
          '**`export PATH=$PATH:/usr/local/bin`** — Add a directory to PATH (common when installing tools)',
          '**`echo $HOME`** — Your home directory (set automatically)',
          '**`echo $USER`** — Your username (set automatically)',
          '**`source ~/.bashrc`** — Reload your config file in the current shell',
          '**`alias ll="ls -lah"`** — Create a shortcut (add to `.bashrc` to make permanent)',
          '**`function greet() { echo "Hello $1"; }`** — Define a function (add to `.bashrc` to reuse)'
        ]
      },
      takeaways: [
        '**Variable syntax is strict:** `name=value` (no spaces), `$name` (with $ to use it). Many beginners mess this up.',
        '**`export` promotes a variable to the environment.** Without `export`, child processes won\'t see it. With `export`, they will. This is how you pass configuration to programs.',
        '**`$PATH` is the search path.** When you type a command, the shell looks in each directory listed in `$PATH` (separated by `:`) until it finds a matching executable. If a tool isn\'t found, it\'s often because its directory isn\'t in `$PATH`.',
        '**Adding to `$PATH`:** The pattern `export PATH=$PATH:/new/dir` appends a directory to the existing PATH. You\'re saying: "keep the old PATH and also look here."',
        '**`.bashrc` runs every time you open a new terminal.** Use it for aliases, functions, and environment setup. `.bash_profile` runs once at login (Mac convention); it usually sources `.bashrc` to avoid duplication.',
        '**`source` reloads without restarting.** If you edit `.bashrc`, run `source ~/.bashrc` to apply changes to the current shell without closing and reopening the terminal.',
        '**Aliases are shortcuts, functions are mini-programs.** `alias ll="ls -lah"` is a quick rename. `function greet() { echo "Hi $1"; }` is reusable code.',
        '**Environment variables have conventions:** uppercase for system variables (`$HOME`, `$USER`, `$PATH`), lowercase for user-defined. This makes scanning code easier.',
        '**Every program sees the environment:** When you run Node, Python, or Java, they all inherit `$PATH`, `$HOME`, and any variables you exported. This is how you configure tools globally.'
      ],
      reflection: 'Run `echo $PATH` and look at the directories. Can you identify where system programs (`ls`, `cat`) might be? Try `which ls` to find out. Now think: if you install a tool and it says "command not found," what would you check?',
      checks: [
        'How do you create a shell variable?',
        'What is the difference between a shell variable and an environment variable?',
        'What does `export` do?',
        'What is `$PATH`, and why does it matter?',
        'When does `.bashrc` run?',
        'How would you add a directory to `$PATH` permanently?',
        'What is an alias, and when would you use one?'
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow in Scripts: Automating Tasks',
      blurb: 'Write Bash scripts that make decisions and repeat tasks: conditionals, loops, and error handling.',
      whatIs: {
        text: `A Bash script is just Bash commands in a file. Scripts let you automate repetitive tasks, chain commands together, and make decisions based on conditions.

Control flow—if statements, loops, case statements—lets your script behave differently in different situations. You can check if a file exists, loop over a list of files, or handle different inputs.

Exit codes are central to Bash scripting. Every command returns 0 (success) or non-zero (failure). Your scripts use these exit codes to decide what to do next. The \`$?\` variable holds the exit code of the last command.

Testing with \`[ ... ]\` is syntax-heavy but critical. There are tests for files (\`-f file\`, \`-d dir\`), strings (\`-z string\` = empty, \`-n string\` = not empty), and numbers (\`-eq\`, \`-lt\`, \`-gt\`). Knowing these lets you write robust scripts.`,
        ensures: [
          'Write a Bash script with the shebang (`#!/bin/bash`)',
          'Use conditionals to make decisions (`if`, `then`, `else`, `fi`)',
          'Write loops to repeat actions (`for`, `while`, `until`)',
          'Test conditions with `[ ... ]`',
          'Use case statements for multiple options',
          'Understand and use exit codes',
          'Handle errors in scripts'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Script flow: input → test → action → output',
        loop: false,
        steps: [
          { icon: 'file-lines', label: 'Input', desc: 'Script argument: $1' },
          { icon: 'magnifying-glass', label: 'Test: [ -f $1 ]', desc: 'Does file exist?' },
          { icon: 'circle-check', label: 'YES: file exists', desc: 'Process it' },
          { icon: 'triangle-exclamation', label: 'NO: file missing', desc: 'Error message' }
        ]
      },
      example: {
        title: 'A practical script: backup a directory',
        code: '#!/bin/bash\n' +
          '# Backup a directory with a timestamp\n\n' +
          'if [ -z "$1" ]; then\n' +
          '  echo "Usage: $0 <directory>"\n' +
          '  exit 1\n' +
          'fi\n\n' +
          'SOURCE=$1\n' +
          'TIMESTAMP=$(date +%Y%m%d_%H%M%S)\n' +
          'BACKUP="backup_${TIMESTAMP}"\n\n' +
          'if [ ! -d "$SOURCE" ]; then\n' +
          '  echo "Error: $SOURCE is not a directory"\n' +
          '  exit 1\n' +
          'fi\n\n' +
          'cp -r "$SOURCE" "$BACKUP"\n' +
          'echo "Backup created: $BACKUP"\n' +
          'exit 0'
      },
      takeaways: [
        '**The shebang (`#!/bin/bash`)** tells the OS this is a Bash script. When you run `./script.sh`, the OS reads the shebang to determine which interpreter to use. Make the script executable with `chmod +x script.sh`.',
        '**`$1`, `$2`, etc. are script arguments.** When you run `./script.sh file.txt`, `$1` is `file.txt`. `$0` is the script name itself. `$@` is all arguments as a list.',
        '**Test syntax `[ ... ]` is strict:** `[ -f file ]` (space after `[` and before `]` is required). `-f` tests if a file exists, `-d` tests if a directory exists, `-z` tests if a string is empty, `-n` tests if a string is not empty.',
        '**Exit codes are how scripts communicate success/failure.** Return 0 if successful, non-zero if there\'s an error. `exit 1` terminates the script with status 1. Callers check `$?` to see if your script succeeded.',
        '**`if [ condition ]; then ... else ... fi` is the conditional structure.** Note the `then` on the same line or next line after the test, and `fi` to close.',
        '**Loops:** `for item in list; do ... done` iterates over a list. `while [ condition ]; do ... done` repeats while condition is true.',
        '**Avoid quoting mistakes:** Always quote variables: `[ -f "$FILE" ]` not `[ -f $FILE ]`. If `$FILE` contains spaces, it will break without quotes.',
        '**Error checking matters:** Always check if a file exists before processing, if a command succeeded before using its output. Defensive scripts are more reliable.',
        '**Use `set -e` at the top of scripts** to exit immediately if any command fails. This prevents cascading errors.'
      ],
      reflection: 'Write a simple script that takes a filename as input, checks if the file exists, and either prints its size or prints an error. How would you test if your script works correctly?',
      checks: [
        'What does the shebang (`#!/bin/bash`) do?',
        'How do you pass arguments to a script?',
        'How do you test if a file exists?',
        'What does an exit code of 0 mean? What about non-zero?',
        'How do you write a loop in Bash?',
        'How do you make a script executable?',
        'What would happen if you didn\'t quote a variable that contains spaces?'
      ]
    },
    {
      id: 'text-processing',
      title: 'Text Processing: grep, sed, awk',
      blurb: 'Search, transform, and extract data from text files: the classic Unix toolkit.',
      whatIs: {
        text: `Text processing is at the heart of Unix. Three tools—grep, sed, and awk—are the workhorses.

\`grep\` finds lines matching a pattern. \`sed\` edits text using patterns and rules. \`awk\` processes structured text (columns of data) and can do calculations.

These tools are powerful but can seem cryptic. They use regular expressions (regex) to match patterns. A regex like \`error.*failed\` means "line containing 'error' followed (somewhere later) by 'failed'."

You'll use these constantly: finding errors in logs, extracting fields from data, transforming text formats, counting occurrences. Learning them well saves hours.`,
        ensures: [
          'Use `grep` to find lines matching a pattern',
          'Use `grep -v` to find lines NOT matching a pattern',
          'Use `sed` for simple text replacements',
          'Understand basic regular expressions',
          'Use `awk` to extract and process columns',
          'Combine with pipes to build data pipelines',
          'Process large log files efficiently'
        ]
      },
      example: {
        title: 'Real text processing tasks',
        items: [
          '**`grep "error" logfile.txt`** — Find all lines containing "error"',
          '**`grep -i "error" logfile.txt`** — Case-insensitive search',
          '**`grep -v "debug" logfile.txt`** — Find lines NOT containing "debug"',
          '**`grep -c "error" logfile.txt`** — Count matching lines',
          '**`grep -n "error" logfile.txt`** — Show line numbers',
          '**`sed "s/old/new/" file.txt`** — Replace first "old" with "new" on each line',
          '**`sed "s/old/new/g" file.txt`** — Replace all occurrences (the `g` flag means "global")',
          '**`sed "2,5d" file.txt`** — Delete lines 2-5',
          '**`awk \'{print $1, $3}\' data.txt`** — Print columns 1 and 3 (space-separated)',
          '**`awk -F":" \'{print $1}\' /etc/passwd`** — Use `:` as delimiter, print first field',
          '**`cat file.txt | grep "error" | sed "s/Error/WARNING/" | awk \'{print $1}\'\`** — Chain all three'
        ]
      },
      takeaways: [
        '**`grep` searches, `sed` edits, `awk` extracts and processes.** Each tool is best at one thing. Use them together for powerful workflows.',
        '**Regular expressions are powerful but worth learning.** `.` matches any character, `*` means "zero or more", `^` means line start, `$` means line end. Learn the basics and you\'ll be dangerous.',
        '**`grep -v` inverts the match:** `grep -v "debug"` finds everything that doesn\'t contain "debug." Great for filtering out noise.',
        '**`sed` syntax is: `sed "s/pattern/replacement/flags"`.** The `s` means substitute. The `g` flag means global (all occurrences). No `g` means just the first on each line.',
        '**`awk` is a small language.** It processes text line by line. `{print $1}` prints the first field (column). `$NF` is the last field. `NR` is the current line number.',
        '**Delimiters matter in `awk`.** By default, it splits on whitespace. Use `-F":"` to split on colons (useful for `/etc/passwd`). Use `-F","` for CSV files.',
        '**Test your patterns incrementally.** Don\'t write complex pipes all at once. Test `grep`, then add `sed`, then `awk`. Debug each step separately.',
        '**Performance matters with large files.** `grep` is optimized for searching. `sed` can be slow on huge files. `awk` is often faster for data extraction.',
        '**Capture groups in sed: `s/(pattern)/\\1/`.** Parentheses capture parts of the match. `\\1` refers to the first captured group. This lets you reorganize text.'
      ],
      reflection: 'Given a log file with lines like `[ERROR] 2024-01-15 Something went wrong`, how would you extract just the error messages? How would you count how many errors occurred per day?',
      checks: [
        'How do you find lines containing a specific word?',
        'How do you find lines NOT containing a word?',
        'How do you replace text in a file with `sed`?',
        'What does the `g` flag do in `sed`?',
        'How do you print specific columns with `awk`?',
        'How do you change the field delimiter in `awk`?',
        'What is a regular expression?'
      ]
    },
    {
      id: 'process-management',
      title: 'Process Management: Monitoring & Control',
      blurb: 'See what\'s running, stop runaway processes, run things in the background, and manage resources.',
      whatIs: {
        text: `A process is a running program. The OS gives each process a unique ID (PID) and manages its resources (memory, CPU, files).

You need to know what processes are running: maybe a task is consuming all your CPU, or you want to check if a service is alive. \`ps\` shows running processes. \`top\` or \`htop\` show live resource usage.

Sometimes a program hangs or runs wild. You need to stop it. \`kill\` sends a signal to a process; \`kill -9\` is forceful. Understanding signals (SIGTERM vs SIGKILL) helps you shut things down cleanly.

Background and foreground jobs let you run multiple things at once. \`command &\` runs in the background. \`fg\` brings it to the foreground. \`jobs\` lists what\'s running.`,
        ensures: [
          'List running processes and understand what you\'re seeing',
          'Find processes by name or resource use',
          'Stop a running process gracefully or forcefully',
          'Run commands in the background',
          'Manage foreground and background jobs',
          'Monitor resource usage (CPU, memory)',
          'Know the difference between signals (SIGTERM, SIGKILL)'
        ]
      },
      example: {
        title: 'Managing processes in practice',
        items: [
          '**`ps`** — List your running processes (usually just the shell and `ps` itself)',
          '**`ps aux`** — List ALL processes on the system (user, PID, CPU %, memory %, command)',
          '**`ps aux | grep python`** — Find all running Python processes',
          '**`top`** — Live view of processes, sorted by CPU usage. Press `q` to quit.',
          '**`htop`** — Better version of `top` (if installed). Scrollable, colorized, interactive.',
          '**`kill 1234`** — Send SIGTERM (signal 15) to process 1234. The process gets a chance to clean up.',
          '**`kill -9 1234`** — Send SIGKILL (signal 9) to process 1234. Immediate termination, no cleanup.',
          '**`command &`** — Run a command in the background and immediately return to the prompt.',
          '**`jobs`** — List background jobs in this shell session.',
          '**`fg`** — Bring the last background job to the foreground.',
          '**`bg`** — Resume a stopped job in the background.',
          '**`Ctrl+Z`** — Suspend (pause) the current foreground process.'
        ]
      },
      takeaways: [
        '**`ps aux` output:** USER (who owns it), PID (process ID), %CPU and %MEM (resource usage), COMMAND (what it is). This is the most useful view.',
        '**PID (process ID) is how the OS tracks processes.** Every running process has a unique PID. When you stop a process, you\'re using its PID or name.',
        '**Signals are how you communicate with processes:** SIGTERM (15) asks nicely to shut down. SIGKILL (9) forces immediate termination. Use 15 first, then 9 if needed.',
        '**`kill` sends signals; it doesn\'t necessarily kill.** `kill 1234` sends SIGTERM. The process can ignore it or clean up. `kill -9 1234` is unstoppable.',
        '**Background jobs (`&`) free up your terminal.** Run `long_task &` and you get the prompt back immediately. Useful for compiling, testing, or long operations.',
        '**`jobs`, `fg`, `bg` manage background processes.** `jobs` lists them. `fg %1` brings job 1 to the foreground. `bg` resumes a stopped job in the background.',
        '**`Ctrl+Z` pauses a process, doesn\'t kill it.** Your shell shows `[1]+  Stopped`. Use `fg` to resume or `kill %1` to terminate it.',
        '**Zombie processes exist after they exit.** If a child process exits but the parent doesn\'t read its exit status, it becomes a zombie. Usually harmless but indicates a bug in the parent.',
        '**Process trees:** Parent processes spawn children. `ps auxf` shows a tree. Understanding parent-child relationships helps with cleanup (killing a parent may orphan children).'
      ],
      reflection: 'Start a long-running command (e.g., `sleep 100`). Suspend it with Ctrl+Z. List jobs with `jobs`. Resume it in the background with `bg`. Bring it back to foreground with `fg`. What happens?',
      checks: [
        'What does `ps aux` show?',
        'How do you find a process by name?',
        'What is the difference between `kill` and `kill -9`?',
        'How do you run a command in the background?',
        'What does `Ctrl+Z` do?',
        'How do you list background jobs?',
        'Why would `kill` fail but `kill -9` succeed?'
      ]
    }
  ]
}
