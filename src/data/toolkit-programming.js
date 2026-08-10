// Global toolkit popups for Programming universe — practical loops and strategies
// for learning languages, debugging, and building sound code.

export const toolkit = [
  {
    id: 'language-learning-loop',
    title: 'Language Learning Loop',
    blurb: 'Syntax → types → control flow → functions → classes → patterns → projects.',
    concept: 'Each language follows roughly the same shape. Master this progression and you can pick up any language — the syntax changes, but the concepts stay stable.',
    visual: {
      kind: 'flow',
      label: 'Learning a new programming language.',
      steps: [
        { icon: 'code', label: 'Syntax & keywords', desc: 'Learn the spelling: variables, literals, operators, comments.', purpose: 'Read and write the basic symbols without looking them up.', question: 'What is this code saying?' },
        { icon: 'tag', label: 'Type system', desc: 'Understand how the language thinks about data: static/dynamic, primitives, references.', purpose: 'Know what data your code can hold and how it flows.', question: 'What type is this value?' },
        { icon: 'flow', label: 'Control flow', desc: 'If, loops, exceptions — decisions and repetition.', purpose: 'Write code that branches and repeats.', question: 'How do I repeat or branch?' },
        { icon: 'function', label: 'Functions & scope', desc: 'Define reusable blocks; understand local vs global; parameters and return.', purpose: 'Break work into small, reusable pieces.', question: 'How do I reuse code?' },
        { icon: 'cube', label: 'Classes & objects', desc: 'Bundle data and methods; inheritance; polymorphism.', purpose: 'Model real-world concepts as code structures.', question: 'How do I model concepts?' },
        { icon: 'diagram-project', label: 'Design patterns', desc: 'Standard solutions to common problems in this language.', purpose: 'Use proven idioms instead of reinventing wheels.', question: 'Has someone solved this before?' },
        { icon: 'rocket', label: 'Build real projects', desc: 'Apply everything together; feel the language in use.', purpose: 'Solidify learning by shipping something.', question: 'What can I build now?' }
      ]
    },
    reflection: 'Which step in this progression are you at right now — and what is one concrete example you can code from the next step?'
  },
  {
    id: 'debugging-loop',
    title: 'Debugging Loop',
    blurb: 'Observe → hypothesize → isolate → test → confirm → fix.',
    concept: 'Debugging is not random poking — it is a systematic method to find the root cause. Use this when code is not doing what you expected.',
    visual: {
      kind: 'flow',
      label: 'Systematic debugging approach.',
      steps: [
        { icon: 'magnifying-glass', label: 'Observe the failure', desc: 'Run the code and note exactly what goes wrong: wrong output, crash, wrong type, timeout.', purpose: 'Get a precise, reproducible failure case.', question: 'What is the code actually doing?' },
        { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Guess the root cause in one sentence: "x is null here" or "this loop runs too many times".', purpose: 'Focus your investigation on one likely cause.', question: 'What do I think is going wrong?' },
        { icon: 'scissors', label: 'Isolate the suspect code', desc: 'Add print statements, use a debugger, or create a minimal test case that shows the failure.', purpose: 'Pinpoint exactly where the problem lives.', question: 'Which line or function is misbehaving?' },
        { icon: 'vial', label: 'Test the hypothesis', desc: 'Add logging or a breakpoint; inspect variables; trace execution.', purpose: 'Confirm or reject your hypothesis with evidence.', question: 'Is my hypothesis actually true?' },
        { icon: 'circle-check', label: 'Confirm the root cause', desc: 'Understand not just the symptom but why it happened.', purpose: 'Know the real problem before you change anything.', question: 'Why did this mistake exist?' },
        { icon: 'wrench', label: 'Fix and verify', desc: 'Make the minimal change to fix the root cause; run the failure case again to confirm.', purpose: 'Solve the problem, not just hide the symptom.', question: 'Did this fix it, and did I break anything else?' }
      ]
    },
    reflection: 'Walk through your most recent bug using this loop — did you fix the root cause or just the symptom?'
  },
  {
    id: 'code-review-mindset',
    title: 'Code Review Mindset',
    blurb: 'Read for clarity → trace the logic → check the boundaries → ask why → approve or suggest.',
    concept: 'Reviewing code is not about catching mistakes — it is about understanding the change and asking whether it is the clearest, safest way to solve the problem.',
    visual: {
      kind: 'flow',
      label: 'How to review code effectively.',
      steps: [
        { icon: 'book', label: 'Read the description', desc: 'Understand the problem and the intent before looking at code.', purpose: 'Know what you are looking for.', question: 'What is this change trying to do?' },
        { icon: 'code', label: 'Read the code', desc: 'Trace the logic line by line; ask if each step makes sense.', purpose: 'Check that the code does what it claims.', question: 'Does this code do what the description says?' },
        { icon: 'diagram-project', label: 'Trace the data flow', desc: 'Follow inputs through the code to outputs; check types and nulls.', purpose: 'Spot missing validation or broken assumptions.', question: 'What data flows where, and what could be missing?' },
        { icon: 'triangle-exclamation', label: 'Check edge cases', desc: 'Think about empty inputs, nulls, off-by-one, concurrency, race conditions.', purpose: 'Find bugs before they escape to production.', question: 'What could go wrong at the boundaries?' },
        { icon: 'circle-question', label: 'Ask why', desc: 'If the approach surprises you, ask why that choice. It might be a good reason.', purpose: 'Avoid rejecting good decisions because you would have chosen differently.', question: 'Is there a reason I do not understand?' },
        { icon: 'check-double', label: 'Approve or suggest', desc: 'If it is clear and safe, approve. If you see a real risk or a simpler way, suggest a change.', purpose: 'Give clear, actionable feedback.', question: 'Is this clear, safe, and the simplest approach?' }
      ]
    },
    reflection: 'When you last reviewed code, did you focus on understanding the why — or just catching syntax errors?'
  },
  {
    id: 'refactoring-safely',
    title: 'Refactoring Safely',
    blurb: 'Tests first → one small change → run tests → commit → repeat.',
    concept: 'Refactoring without tests is blind. With tests, refactoring is safe — you know immediately if you broke something.',
    visual: {
      kind: 'flow',
      label: 'Safe refactoring process.',
      steps: [
        { icon: 'flask', label: 'Write or check tests', desc: 'If tests do not exist, write enough to catch a regression.', purpose: 'Create a safety net before you change anything.', question: 'Do I have tests that will catch a regression?' },
        { icon: 'edit', label: 'Make one small change', desc: 'Rename a variable, extract a method, simplify a condition — one thing.', purpose: 'Keep changes small and reviewable.', question: 'What is the smallest change I can make?' },
        { icon: 'play', label: 'Run the tests', desc: 'Verify that everything still passes.', purpose: 'Catch regressions immediately.', question: 'Did the tests pass?' },
        { icon: 'check-double', label: 'Review the change', desc: 'Look at the diff; does it make sense?', purpose: 'Catch logic errors your tests might have missed.', question: 'Does this change look right?' },
        { icon: 'code-branch', label: 'Commit the change', desc: 'Commit with a message explaining why, then move to the next change.', purpose: 'Keep a clear, atomic history.', question: 'Did I commit this change?' },
        { icon: 'repeat', label: 'Repeat for the next refactor', desc: 'Do not try to refactor everything at once.', purpose: 'Stay safe by going one step at a time.', question: 'What is the next small change?' }
      ]
    },
    reflection: 'What is one piece of code you want to refactor — and what tests would you need to do it safely?'
  }
]
