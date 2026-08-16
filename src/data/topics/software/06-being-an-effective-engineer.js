export default {
  id: 'effective',
  title: 'Being an Effective Engineer',
  tone: 'c6',
  blurb: 'Communication, documentation, stakeholders, responsible AI use, escalation, and continuous learning.',
  tags: ['Communication', 'Docs', 'Stakeholders', 'AI'],
  popups: [
    {
      id: 'comms',
      title: 'Communication Skills',
      blurb: 'Clear, audience-aware communication that separates facts, assumptions, unknowns, and next steps.',
      whatIs: {
        text: `Most engineering delay is communication delay: a question not asked, an update not sent, an assumption nobody checked. Being understood is part of the job, not a soft extra.

Three habits do most of the work. **Context first** — say what this is about before the detail, because a reader who does not know why they are reading cannot follow. **Separate facts from assumptions from unknowns** — "the log shows a timeout" (fact), "I think the provider is slow" (assumption), "I do not know if it affects other regions" (unknown). Conflating them is how a guess becomes a decision.

Then **match the audience**. An engineer wants the mechanism; a product owner wants impact, options and timing; a stakeholder wants what it means for them and what you need from them. Same decision, three different messages. And put anything that matters in writing — verbal agreements evaporate, and a two-line summary after a call is the cheapest insurance there is.`,
        ensures: [
          'Lead with context, then detail',
          'Distinguish facts, assumptions and unknowns explicitly',
          'Adapt depth and framing to the audience',
          'Give proactive updates before people have to ask',
          'Confirm decisions in writing',
          'Say what you need, not only what happened'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Communication is part of delivery, not separate from it.',
        steps: [
          { icon: 'circle-question', label: 'Problem', desc: 'Start from what needs solving.', purpose: 'State the problem in terms the audience already cares about.', question: 'What needs solving, and why does it matter to them?' },
          { icon: 'magnifying-glass', label: 'Investigate', desc: 'Gather the facts.', purpose: 'Collect evidence before forming an opinion.', question: 'What do I actually know?' },
          { icon: 'book', label: 'Research', desc: 'Check trusted sources.', purpose: 'Confirm against documentation, data and people.', question: 'What does reliable information say?' },
          { icon: 'file-lines', label: 'Write it down', desc: 'A short note beats a long meeting.', purpose: 'Force clarity and create something reviewable.', question: 'Can I state the problem and options in half a page?' },
          { icon: 'comments', label: 'Discuss', desc: 'Align with the people affected.', purpose: 'Surface objections and context you do not have.', question: 'Who disagrees, and what do they know that I do not?' },
          { icon: 'hammer', label: 'Build', desc: 'Do the work.', purpose: 'Deliver against the agreed approach.', question: 'Are we still building what we agreed?' },
          { icon: 'share-nodes', label: 'Share the outcome', desc: 'Close the loop.', purpose: 'Report the result to the people who cared about the problem.', question: 'Who needs to know it is done, and what changed?' }
        ]
      },
      example: {
        title: 'Proposing a caching change',
        items: [
          'Problem: the dashboard takes eight seconds; support gets complaints weekly.',
          'Investigate: it is one query, run per widget, on every load.',
          'Research: the team already has a cache in use elsewhere.',
          'Write: half a page — the cause, two options, the recommendation.',
          'Discuss: the team flags that stale data would confuse finance.',
          'Build: cache for 60 seconds, behind a flag, finance pages excluded.',
          'Share: "load time is now under one second; here is what changed".'
        ]
      },
      io: {
        inputs: [
          ['A problem', 'An audience'],
          ['The system', 'Evidence'],
          ['Questions', 'Sources'],
          ['Findings', 'Options'],
          ['A written proposal', 'The team'],
          ['An agreed approach'],
          ['The outcome']
        ],
        outputs: [
          ['A framed problem'],
          ['Facts, not impressions'],
          ['Verified information'],
          ['A short written note'],
          ['Alignment', 'Objections surfaced'],
          ['Working software'],
          ['A clear update']
        ]
      },
      who: [
        'You, Stakeholders',
        'You',
        'You',
        'You',
        'You, Team',
        'You, Team',
        'You, Stakeholders'
      ],
      misconceptions: [
        { wrong: 'Good engineers only need technical skill.', right: 'Unshared work has no impact; clarity is part of delivery.' },
        { wrong: 'Jargon signals expertise.', right: 'Plain, precise language does — jargon usually hides uncertainty.' },
        { wrong: 'No news is fine news.', right: 'Silence is read as trouble; a one-line update prevents that.' },
        { wrong: 'Writing it down slows delivery.', right: 'Half a page prevents the week spent building the wrong thing.' }
      ],
      takeaways: [
        '**Context first, detail second.** A reader who does not know why they are reading cannot evaluate what you tell them.',
        '**Label facts, assumptions and unknowns.** The three deserve different levels of trust, and mixing them is how a guess turns into a plan.',
        '**Match the audience.** Engineers want mechanism, product owners want impact and options, stakeholders want consequences and asks.',
        '**Update before you are asked.** A short proactive note buys more trust than a detailed reply to "what is happening with this?"',
        '**Writing forces clarity.** If the problem and the options do not fit on half a page, you have not finished thinking.',
        '**Put decisions in writing.** "As agreed: we will do X, not Y, because Z" prevents a rerun of the same discussion in three weeks.',
        '**Bad news early is much cheaper than bad news late.** Slipping dates and blocked work are information people can act on.',
        '**End with the ask.** What do you need, from whom, by when? A status update with no ask often gets no response.'
      ],
      reflection: 'Take a technical decision you have made. Write two versions: three sentences for an engineer, three for a stakeholder. What did you have to drop, and what did you have to add?',
      checks: [
        'Why lead with context?',
        'How do you distinguish a fact from an assumption?',
        'What changes when the audience is not technical?',
        'Why send updates before being asked?',
        'Why confirm decisions in writing?',
        'What should the end of an update contain?'
      ]
    },
    {
      id: 'docs',
      title: 'Documentation',
      blurb: 'Useful requirements, design notes, runbooks, handover notes, and decision records.',
      whatIs: {
        text: `Documentation is a message to whoever comes next — very often you, months later, with none of the context you have today.

Different documents answer different questions. A **design note** explains what is being built and why this approach. A **decision record** captures a choice, its alternatives and its reasoning, so nobody has to re-litigate it from scratch. A **runbook** tells whoever is on call how to operate and recover the system at 3am. A **handover note** says what changed, what is unfinished, and where the traps are. **application programming interface (API) and README docs** tell someone how to use the thing without reading its source.

What makes documentation worth writing is **why**, not what. Code already states what happens; nothing states why the timeout is 30 seconds, why the obvious approach was rejected, or which constraint forced the odd shape. And documentation that has drifted from reality is worse than none, because people believe it — so keep it short, keep it near the code, and delete what has stopped being true.`,
        ensures: [
          'Choose the right kind of document for the need',
          'Explain why, not just what',
          'Write a runbook someone can follow under pressure',
          'Record decisions with their alternatives and reasoning',
          'Keep documentation close to the code and current',
          'Delete or fix documentation that has gone stale'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What a reader needs to be able to answer.',
        loop: false,
        steps: [
          { icon: 'box', label: 'What is it?', desc: 'The thing being described.', purpose: 'Give the reader a one-paragraph mental model.', question: 'What does this do, in plain terms?' },
          { icon: 'circle-question', label: 'Why does it exist?', desc: 'The reason and the alternatives.', purpose: 'Record the reasoning and what was rejected.', question: 'Why this way rather than the obvious way?' },
          { icon: 'book-open', label: 'How do I use it?', desc: 'Concrete examples.', purpose: 'Show real usage someone can copy and adapt.', question: 'What does a working example look like?' },
          { icon: 'screwdriver-wrench', label: 'How do I change it?', desc: 'Where to edit and what to watch.', purpose: 'Point at the extension points and the traps.', question: 'Where do I make a change, and what breaks easily?' },
          { icon: 'headset', label: 'How do I support it?', desc: 'Failures and recovery.', purpose: 'Give on-call the symptoms, checks and recovery steps.', question: 'It is broken at 3am — what do I do?' }
        ]
      },
      example: {
        title: 'Documenting a booking service',
        items: [
          'What: it holds desk bookings and enforces one booking per desk per day.',
          'Why: it replaced nightly batch reconciliation, which lost late bookings.',
          'How to use: two example requests, with a real response body.',
          'How to change: rules live in one module; remember to invalidate the cache.',
          'How to support: the three most common failures, with the check and recovery for each.'
        ]
      },
      io: {
        inputs: [
          ['The system', 'Its scope'],
          ['Decisions', 'Alternatives considered'],
          ['The interface', 'Real requests'],
          ['The code', 'Known traps'],
          ['Past failures', 'Recovery steps']
        ],
        outputs: [
          ['A one-paragraph description'],
          ['A decision record'],
          ['A usage guide with examples'],
          ['A change guide'],
          ['A runbook']
        ]
      },
      who: [
        'Author (engineer)',
        'Author, Decision-makers',
        'Author, Users of the system',
        'Author, Future engineers',
        'Author, Support, On-call'
      ],
      misconceptions: [
        { wrong: 'Documentation is admin work.', right: 'It is how knowledge survives people leaving and time passing.' },
        { wrong: 'Good code needs no documentation.', right: 'Code shows what; only prose can explain why.' },
        { wrong: 'More documentation is better.', right: 'More documentation is more to keep true; short and current beats thorough and stale.' },
        { wrong: 'Write it at the end.', right: 'The reasoning is only fresh while you are making the decision.' }
      ],
      takeaways: [
        '**Write for the next reader, who is often you.** Assume none of today\'s context is available.',
        '**Explain why.** The rejected alternatives and the constraint that forced an odd choice are the parts nobody can reconstruct.',
        '**A runbook is written for someone tired and under pressure.** Symptoms, exact commands, recovery steps — no essays.',
        '**Decision records prevent re-litigation.** "We chose X over Y because Z" ends an argument that would otherwise return every six months.',
        '**Stale documentation is worse than none,** because people act on it. Fix it in the same change or delete it.',
        '**Keep docs next to the code.** A README in the repository stays closer to reality than a page in a wiki nobody remembers.',
        '**Examples earn their space.** One real request and response teaches more than three paragraphs of description.',
        '**Write it while you are deciding.** Ten minutes then beats an hour of reconstruction next quarter.'
      ],
      reflection: 'Take a note like "Fixed booking bug" and expand it into something useful: what was wrong, why it happened, what changed, how it was verified, and what to watch. Whose questions did you just answer?',
      checks: [
        'What question should documentation answer that code cannot?',
        'What belongs in a runbook?',
        'What is a decision record for?',
        'Why is stale documentation worse than none?',
        'Where should documentation live?',
        'When is the best time to write it?'
      ]
    },
    {
      id: 'stake',
      title: 'Stakeholder Thinking',
      blurb: 'Understanding users, constraints, trade-offs, risk, time, cost, reliability, and success measures.',
      whatIs: {
        text: `Every technical decision sits inside a business context. Someone is paying, someone is waiting, and someone will live with the result. Stakeholder thinking is holding that context while making technical choices.

The core move is to treat a request as a **symptom of a need**, not a specification. "Add an export button" is a proposed solution; the need underneath might be "finance re-types this into a spreadsheet every Monday". Asking what problem this solves, and what happens if it is not built, often produces a smaller and better answer than the one requested.

Then make the **trade-offs explicit**. Faster, cheaper, more reliable, more featured — you cannot maximise all of them, and stakeholders are usually happy to choose once the choice is visible. Presenting two or three options with their costs is far more useful than either "yes" or "that is not possible". And agree how **success will be measured** before building, because "better" without a measure cannot be delivered or disproved.`,
        ensures: [
          'Treat a request as a symptom of an underlying need',
          'Ask what happens if it is not built',
          'Surface constraints: time, cost, risk, regulation, existing systems',
          'Present options with trade-offs rather than yes or no',
          'Agree a measurable definition of success up front',
          'Translate technical risk into business consequence'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Turning a request into requirements.',
        loop: false,
        steps: [
          { icon: 'comment-dots', label: 'A request arrives', desc: 'Usually phrased as a solution.', purpose: 'Capture what was asked, and by whom.', question: 'What did they ask for, in their words?' },
          { icon: 'circle-question', label: 'Find the need', desc: 'What problem sits underneath.', purpose: 'Get behind the proposed solution to the actual problem.', question: 'What are they trying to achieve, and what happens today?' },
          { icon: 'scale-balanced', label: 'Constraints & trade-offs', desc: 'Time, cost, risk, rules.', purpose: 'Establish the real limits before promising anything.', question: 'What limits us, and what are we willing to give up?' },
          { icon: 'bullseye', label: 'Success measure', desc: 'How we will know it worked.', purpose: 'Agree something observable before building.', question: 'What number or behaviour should change?' },
          { icon: 'list-check', label: 'Requirements & options', desc: 'Concrete work, with choices.', purpose: 'Offer options with their costs, not a single verdict.', question: 'What are the two or three ways to do this?' }
        ]
      },
      example: {
        title: '"Make desk booking better"',
        items: [
          'A manager asks to "make desk booking better".',
          'Underneath: people book desks that turn out to be taken, twice a week.',
          'Constraints: two weeks, no new infrastructure, must not break the mobile app.',
          'Success: failed bookings per week drop from 40 to under 5.',
          'Options: (a) show live availability, one week; (b) full rewrite, six weeks.'
        ]
      },
      io: {
        inputs: [
          ['A stakeholder request'],
          ['The request', 'Current behaviour'],
          ['The need', 'Business context'],
          ['The need', 'Constraints'],
          ['Everything above']
        ],
        outputs: [
          ['A captured ask'],
          ['The underlying problem'],
          ['Known limits and trade-offs'],
          ['An agreed success measure'],
          ['Options with costs', 'Requirements']
        ]
      },
      who: [
        'Stakeholder',
        'Engineer, Business Analyst, Stakeholder',
        'Engineer, Product Owner',
        'Product Owner, Stakeholder',
        'Business Analyst, Engineer'
      ],
      misconceptions: [
        { wrong: 'Stakeholders know exactly what they want.', right: 'They know the problem; the solution is worked out together.' },
        { wrong: 'Just build what was asked for.', right: 'The request is a proposed solution — check it against the need.' },
        { wrong: 'Saying no is the professional answer to a bad idea.', right: 'Options with costs are; "no" ends the conversation.' },
        { wrong: 'Business context is someone else\'s job.', right: 'It is what makes a technical choice right or wrong.' }
      ],
      takeaways: [
        '**A request is a symptom; find the need.** "Add an export button" often means "finance re-types this every Monday", which may have a smaller solution.',
        '**Ask what happens if we do not build it.** The answer sizes the problem honestly, and sometimes ends the conversation happily.',
        '**Make trade-offs visible.** Stakeholders make good decisions when shown "one week this way, six weeks that way, here is what differs".',
        '**Agree a measure before building.** "Better" cannot be delivered; "failed bookings under five a week" can.',
        '**Translate technical risk into consequence.** "No retries on the payment provider" means nothing; "roughly 4% of checkouts fail when they are slow" means everything.',
        '**Different stakeholders mean different things by the same word.** "Fast" to a user is page load; to finance it is time to ship.',
        '**Bring options, not verdicts.** "Not possible" is rarely true; "possible at this cost" almost always is.',
        '**Say when the requested solution is not the cheapest path to the need** — that is the most valuable thing an engineer contributes to a business conversation.'
      ],
      reflection: 'Take a vague request you have received. Write three clarifying questions, two options with costs, and one measurable definition of success. Which of the three would most change what gets built?',
      checks: [
        'Why is a request not the same as a requirement?',
        'What does "what happens if we do not build it?" tell you?',
        'Why present options rather than a yes or no?',
        'What makes a success measure usable?',
        'How do you communicate technical risk to a business audience?',
        'Why can two stakeholders mean different things by "better"?'
      ]
    },
    {
      id: 'ai',
      title: 'Responsible AI Usage',
      blurb: 'Using AI as an assistant while validating outputs against trusted sources, system context, tests, and reviews.',
      whatIs: {
        text: `Artificial intelligence (AI) assistants are genuinely useful: explaining unfamiliar code, drafting tests and documentation, suggesting approaches, and getting you the right vocabulary for something you cannot yet name. They are fastest exactly where you already know enough to judge the answer.

The failure mode is confidence without correctness. AI output can invent functions that do not exist, use an outdated pattern, miss the security implication, or ignore constraints in your codebase it was never shown. It has no access to your data model, your team conventions or last month's incident — so it cannot know that the obvious approach is the one that caused it.

Two rules cover most of it. **You own what you submit**: if you cannot explain a line, it is not ready for review, and "the assistant wrote it" is not a defence in an incident. And **never paste what you are not allowed to share** — customer data, credentials, unreleased or confidential code — unless your organisation has explicitly approved the tool for it.`,
        ensures: [
          'Use AI where it is strong: explaining, drafting, exploring, naming',
          'Verify generated code against real documentation and your codebase',
          'Test AI output rather than trusting that it runs',
          'Never share confidential data with an unapproved tool',
          'Be able to explain every line you submit',
          'Ask for human review when the change is risky'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'AI as a fast draft, judgement as the gate.',
        loop: false,
        steps: [
          { icon: 'robot', label: 'Use it to accelerate', desc: 'Explain, draft, explore.', purpose: 'Get a first version or an explanation quickly.', question: 'What would take me an hour that this can start in a minute?' },
          { icon: 'magnifying-glass', label: 'Verify against reality', desc: 'Docs, codebase, versions.', purpose: 'Check the functions exist and match your version and conventions.', question: 'Is this real, current, and how we do things here?' },
          { icon: 'flask', label: 'Test it', desc: 'Run it, including edge cases.', purpose: 'Prove behaviour instead of assuming it.', question: 'Does it work on the awkward inputs?' },
          { icon: 'shield-halved', label: 'Check the risks', desc: 'Security, data, licensing.', purpose: 'Look for injection, secrets, unsafe defaults and data handling.', question: 'What could this do that I did not intend?' },
          { icon: 'user-check', label: 'Own it and get review', desc: 'Explain every line; escalate when risky.', purpose: 'Take responsibility for the change as your own work.', question: 'Can I explain this, and does it need another pair of eyes?' }
        ]
      },
      example: {
        title: 'Using AI to draft a date-parsing function',
        items: [
          'Ask for a draft that parses several date formats.',
          'Check every library call against the docs for the version in use.',
          'Test it with an empty string, a leap day and a timezone boundary.',
          'Notice it assumes UTC — make that explicit and document it.',
          'It touches billing, so ask a senior to review before merge.'
        ]
      },
      io: {
        inputs: [
          ['A task', 'A prompt'],
          ['Draft', 'Docs', 'Codebase conventions'],
          ['Draft', 'Edge cases'],
          ['Draft', 'Security and data rules'],
          ['A verified change']
        ],
        outputs: [
          ['A draft or explanation'],
          ['A corrected, idiomatic version'],
          ['Test results'],
          ['Identified risks', 'Documented assumptions'],
          ['A change you can defend', 'A review']
        ]
      },
      who: [
        'You, AI assistant',
        'You',
        'You',
        'You',
        'You, Reviewer / Senior'
      ],
      misconceptions: [
        { wrong: 'AI output can be pasted if it runs.', right: 'Running is not the same as correct, secure or appropriate here.' },
        { wrong: 'AI knows your codebase.', right: 'It knows what it was shown; your conventions and history are invisible to it.' },
        { wrong: '"The assistant wrote it" explains a bug.', right: 'You submitted it, so you own it.' },
        { wrong: 'Any tool is fine for any code.', right: 'Confidential data and code need an approved tool, or none.' }
      ],
      takeaways: [
        '**AI is strongest where you can already judge the answer.** Explaining unfamiliar code, drafting boilerplate, suggesting test cases, naming things.',
        '**Verify every specific.** Function names, parameters and behaviour must be checked against real documentation for your version.',
        '**Running is not correct.** Generated code often works on the happy path and quietly mishandles empty, null, boundary and concurrent cases.',
        '**It cannot know your context** — your data model, your conventions, last quarter\'s incident. That gap is where its confident answers go wrong.',
        '**You own what you submit.** If you cannot explain a line in review, it is not ready to be reviewed.',
        '**Never paste what you may not share.** Customer data, secrets and confidential code go into approved tools only, or not at all.',
        '**Watch for security and licensing.** Generated code can carry unsafe defaults, missing validation, or patterns copied from incompatible sources.',
        '**Used well it raises your ceiling; used blindly it hides your gaps.** The judgement is the part that is still yours.'
      ],
      reflection: 'Take something an AI assistant produced for you. List what you verified and what you took on trust. Which of the untrusted parts would have shown up in production rather than in review?',
      checks: [
        'What is AI genuinely good at in engineering work?',
        'What must you verify in generated code?',
        'Why is "it runs" not enough?',
        'What context does an assistant not have?',
        'What can you never paste into an unapproved tool?',
        'Who is responsible for AI-assisted code in review?'
      ]
    },
    {
      id: 'escalate',
      title: 'Effective Escalation',
      blurb: 'Knowing when to raise something, to whom, and with what — including risks and delays, not just technical blockers.',
      whatIs: {
        text: `Escalation is not only for being stuck on code. The things most worth raising early are **risks, delays and decisions you cannot make** — a deadline that no longer looks achievable, a dependency that has gone quiet, a requirement that conflicts with a security rule.

The timing rule is simple: escalate when **waiting makes it worse**. A slipping estimate is easy to absorb three weeks out and painful the day before. Being blocked for an hour is normal; being blocked for two days without telling anyone is a choice with consequences.

Who to tell follows the type of problem. Technical blocker — a teammate or the code owner. Priority conflict or scope question — your product owner or manager. Something affecting customers now — the on-call or incident process, immediately. And what you send matters: context, what you tried, what you found, what you think, and the specific decision or help you need. Include impact and a proposed way forward — escalating with an option attached is what turns a complaint into a decision someone can make in a minute.`,
        ensures: [
          'Escalate risks and delays, not just technical blockers',
          'Judge when waiting makes a problem worse',
          'Choose the right person for the type of problem',
          'Include impact, options and a specific ask',
          'Escalate immediately when customers are affected',
          'Follow up in writing so the decision is recorded'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What to raise, to whom, with what.',
        loop: false,
        steps: [
          { icon: 'circle-info', label: 'Name it', desc: 'Blocker, risk, delay or decision.', purpose: 'Classify the problem — it decides who and how urgently.', question: 'Is this a blocker, a risk, a slip, or a decision I cannot make?' },
          { icon: 'clock', label: 'Judge the timing', desc: 'Does waiting make it worse?', purpose: 'Escalate early when delay compounds the cost.', question: 'Is this cheaper to raise now than tomorrow?' },
          { icon: 'users', label: 'Pick the person', desc: 'Match the problem to the owner.', purpose: 'Technical to the team, priority to the owner, customer impact to on-call.', question: 'Who can actually act on this?' },
          { icon: 'list-check', label: 'Give context & evidence', desc: 'What you tried and found.', purpose: 'Make it answerable without a round of questions.', question: 'What do they need to know to decide?' },
          { icon: 'scale-balanced', label: 'State impact & options', desc: 'What it costs, and the ways forward.', purpose: 'Turn a problem into a decision with alternatives.', question: 'What are the two or three ways forward?' },
          { icon: 'file-lines', label: 'Confirm in writing', desc: 'Record what was decided.', purpose: 'Capture the decision and who owns the next step.', question: 'What was agreed, and who does what next?' }
        ]
      },
      example: {
        title: 'Escalating a blocked deployment',
        items: [
          'It is a blocker: the staging deploy fails at the migration step.',
          'It is holding two other people, so raising it now is cheaper than tomorrow.',
          'The database owner is the right person, not the whole team channel.',
          'Tried: re-ran it, checked credentials, read the logs — the migration user lacks ALTER.',
          'Impact: two people blocked. Options: grant the permission, or run it manually.',
          'Confirmed in the ticket: granted, owner named, added to environment setup.'
        ]
      },
      io: {
        inputs: [
          ['A problem'],
          ['The problem', 'Its trajectory'],
          ['Problem type', 'Team structure'],
          ['Attempts', 'Evidence'],
          ['Impact', 'Possible approaches'],
          ['The conversation']
        ],
        outputs: [
          ['A classified problem'],
          ['A decision on timing'],
          ['The right audience'],
          ['An answerable message'],
          ['A decision someone can make'],
          ['A recorded decision', 'An owner']
        ]
      },
      who: [
        'You',
        'You',
        'You, Team lead',
        'You',
        'You, Decision-maker',
        'You, Team'
      ],
      misconceptions: [
        { wrong: 'Escalation is for technical blockers.', right: 'Risks, delays and conflicting priorities matter more.' },
        { wrong: 'Escalating means admitting failure.', right: 'It is how a small problem is stopped from becoming a large one.' },
        { wrong: 'Escalate to the most senior person available.', right: 'Escalate to whoever can actually act on it.' },
        { wrong: 'Raising the problem is enough.', right: 'Bring impact and options, or you have handed over a worry rather than a decision.' }
      ],
      takeaways: [
        '**Escalate when waiting makes it worse.** That single test covers blockers, slipping dates and looming risks.',
        '**Risks and delays are the ones people most want early.** A date raised three weeks out is a plan change; the day before, it is an incident.',
        '**Match the person to the problem.** Code to the code owner, priorities to the product owner, customer impact to on-call — immediately.',
        '**Bring impact, not just the problem.** "Two people blocked, release at risk" tells someone how urgently to act.',
        '**Bring options.** A proposed way forward turns your problem into a two-minute decision for someone else.',
        '**Escalating is not failing.** The failure is discovering on Friday that something was stuck since Tuesday.',
        '**Say what you have already tried,** so nobody spends their first ten minutes suggesting it.',
        '**Confirm the outcome in writing.** Who decided what, and who owns the next step — otherwise it will be re-decided later.'
      ],
      reflection: 'Think of something you delayed raising. What did the delay cost, and what would you have needed — a template, a person, permission — to have raised it two days earlier?',
      checks: [
        'What kinds of thing should be escalated?',
        'What is the test for when to escalate?',
        'How do you choose who to escalate to?',
        'Why include impact and options?',
        'When should you escalate immediately?',
        'What should happen after the conversation?'
      ]
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      blurb: 'Habits that turn everyday work — tasks, bugs, reviews, incidents — into steadily increasing skill.',
      whatIs: {
        text: `Technologies change constantly; the ability to pick them up does not. The engineers who improve fastest are not the ones who study most in the evenings — they are the ones who extract learning from work they were doing anyway.

The habits are small. Treat every **code review** as a free lesson, especially the comments that surprise you. Read the code around your change, not just the lines you edit. After every **bug or incident**, ask what mental model was wrong, not just what the fix was. Keep a short note of things learned; re-reading it monthly is worth more than the writing.

Depth matters as much as breadth. Fundamentals — data structures, networking, how databases behave, how systems fail — stay useful for decades, while frameworks turn over every few years. And the strongest signal that you have learned something is being able to **explain it to someone else**; teaching finds the gaps that reading never will.`,
        ensures: [
          'Turn reviews, bugs and incidents into deliberate learning',
          'Read the surrounding code, not just the lines you change',
          'Ask what mental model was wrong, not just what the fix was',
          'Invest in fundamentals as well as current tools',
          'Explain things to others to find your own gaps',
          'Keep a lightweight record of what you learn'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A learning loop that runs on work you are doing anyway.',
        steps: [
          { icon: 'hammer', label: 'Do the work', desc: 'A task, a bug, a review.', purpose: 'Normal work is the raw material for learning.', question: 'What am I actually doing this week?' },
          { icon: 'magnifying-glass', label: 'Notice the gap', desc: 'The moment something surprised you.', purpose: 'Catch the surprise — that is where the wrong model is.', question: 'What did I expect, and what actually happened?' },
          { icon: 'book', label: 'Close it deliberately', desc: 'Read, ask, experiment.', purpose: 'Spend a focused thirty minutes rather than moving on.', question: 'What would make this genuinely clear?' },
          { icon: 'flask', label: 'Apply it', desc: 'Use it on the real task.', purpose: 'Applied knowledge sticks; read knowledge fades.', question: 'Where can I use this immediately?' },
          { icon: 'comments', label: 'Explain it', desc: 'Teach, review, write it up.', purpose: 'Explaining exposes the parts you only half understand.', question: 'Could I explain this to someone new?' },
          { icon: 'clipboard-check', label: 'Reflect periodically', desc: 'Look back at what changed.', purpose: 'Spot patterns in your gaps and pick the next thing deliberately.', question: 'What keeps catching me out?' }
        ]
      },
      example: {
        title: 'Learning from an ordinary week',
        items: [
          'A review comment questions a database query you thought was fine.',
          'The surprise: you assumed the index covered it, and it did not.',
          'Spend thirty minutes on how this database chooses indexes.',
          'Apply it: check two other queries in the same service.',
          'Explain it in the team channel with the before-and-after timings.',
          'Note the pattern: your gaps cluster around database performance.'
        ]
      },
      io: {
        inputs: [
          ['Tasks', 'Bugs', 'Reviews'],
          ['A surprise', 'A wrong expectation'],
          ['A specific question', 'Sources'],
          ['New understanding', 'A real task'],
          ['Understanding', 'An audience'],
          ['A month of notes']
        ],
        outputs: [
          ['Raw material'],
          ['An identified gap'],
          ['A corrected mental model'],
          ['Applied, retained knowledge'],
          ['Exposed remaining gaps', 'A team that knows it too'],
          ['A deliberate next focus']
        ]
      },
      who: [
        'You, Team',
        'You',
        'You, Docs & colleagues',
        'You',
        'You, Team',
        'You, Manager'
      ],
      misconceptions: [
        { wrong: 'Learning happens outside work hours.', right: 'The best material is the work itself — reviews, bugs, incidents.' },
        { wrong: 'Keeping up means learning every new framework.', right: 'Fundamentals transfer; frameworks are a weekend once you have them.' },
        { wrong: 'Reading about it means you know it.', right: 'Applying and explaining it is what shows you do.' },
        { wrong: 'Senior engineers have stopped needing to learn.', right: 'They have got better at learning quickly and admitting gaps.' }
      ],
      takeaways: [
        '**Surprise is the signal.** The moment something does not behave as you expected is the exact location of a wrong mental model.',
        '**Reviews are free tuition.** Every comment you did not anticipate is someone handing you a gap for nothing.',
        '**After a bug, ask what you believed that was wrong** — not just what the fix was. The belief will cause other bugs otherwise.',
        '**Fundamentals outlast frameworks.** How networks, databases and failures behave stays true long after this year\'s tools are gone.',
        '**Apply it the same week.** Knowledge that is used once sticks; knowledge that is only read decays within days.',
        '**Explaining finds the gaps.** If you cannot make it clear to someone else, you have not finished understanding it.',
        '**Keep a running note.** Ten seconds per entry, re-read monthly, and your recurring blind spots become obvious.',
        '**Depth compounds.** Understanding one system deeply teaches you more about the next one than skimming five ever will.'
      ],
      reflection: 'Think of the last thing that surprised you at work. What did you believe beforehand, what is actually true, and what else might that wrong belief still be affecting?',
      checks: [
        'What everyday work makes the best learning material?',
        'Why is surprise a useful signal?',
        'What question should follow every bug?',
        'Why prioritise fundamentals over the newest tool?',
        'Why does explaining something test your understanding?',
        'What does a periodic reflection give you?'
      ]
    },
    {
      id: 'etiquette',
      title: 'Corporate Etiquette',
      blurb: 'The everyday basics that help a new graduate make a good impression: email, meetings, timing, honesty, and accountability.',
      whatIs: {
        text: `Professional reputation is built from small, repeated behaviours rather than big moments. Replying promptly, arriving on time, saying honestly when you do not know, and doing what you said you would do — these are what colleagues actually notice.

The single most valuable habit is **responsiveness**. You do not need the answer immediately; you need to acknowledge. "Got it, I will come back by 3pm" costs ten seconds and removes the uncertainty that makes people chase. Silence is read as trouble, whatever is actually happening.

The second is **honest accountability**. "I do not know yet, I will find out" is a completely acceptable professional answer; pretending is not, and it collapses the moment someone checks. When you make a mistake, say so quickly, say what you are doing about it, and move on. People remember the recovery far more than the error — and covering something up turns a small problem into a trust problem.`,
        ensures: [
          'Acknowledge messages promptly, even when the answer takes longer',
          'Handle meetings professionally: accept, decline, or propose alternatives',
          'Be punctual and prepared',
          'Say honestly when you do not know something',
          'Own mistakes quickly and propose a fix',
          'Follow through on what you promised, or renegotiate early'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The everyday habits people actually notice.',
        loop: false,
        steps: [
          { icon: 'envelope', label: 'Acknowledge quickly', desc: 'Reply, even if only to say when.', purpose: 'Remove uncertainty so nobody has to chase you.', question: 'Has this been acknowledged, with a time?' },
          { icon: 'calendar', label: 'Handle meetings well', desc: 'Accept, decline or propose another time.', purpose: 'Respect other people\'s planning by responding either way.', question: 'Do I need to be there, and have I said so?' },
          { icon: 'clock', label: 'Be punctual and prepared', desc: 'On time, with what you need.', purpose: 'Show that other people\'s time counts.', question: 'Am I ready, and have I read what was sent?' },
          { icon: 'comments', label: 'Be honest', desc: '"I do not know yet — I will find out."', purpose: 'Keep your statements reliable, which is what makes them useful.', question: 'Do I actually know this, or am I guessing?' },
          { icon: 'check', label: 'Own mistakes', desc: 'Say it early, with a fix.', purpose: 'Protect trust by surfacing problems before others find them.', question: 'What do I need to own, and what am I doing about it?' },
          { icon: 'handshake', label: 'Follow through', desc: 'Do it, or renegotiate early.', purpose: 'Be someone whose commitments can be planned around.', question: 'Did I do what I said, by when I said?' }
        ]
      },
      example: {
        title: 'A good first-week impression',
        items: [
          'Reply to a manager\'s email within the hour: "Looking at it, update by 3pm."',
          'Decline a clashing meeting politely and suggest two alternative times.',
          'Join the call two minutes early, having read the agenda.',
          'Say "I am not sure yet, I will check and confirm" rather than guessing.',
          'Sent the wrong file? Say so immediately and send the right one.',
          'Promised an update by 3pm? Send it by 3pm, even if it is "still working on it".'
        ]
      },
      io: {
        inputs: [
          ['Emails', 'Messages'],
          ['Meeting invitations'],
          ['Your calendar', 'The agenda'],
          ['A question', 'Your actual knowledge'],
          ['A mistake'],
          ['Your commitments']
        ],
        outputs: [
          ['An acknowledgement with a time'],
          ['A clear accept, decline or alternative'],
          ['A reputation for reliability'],
          ['An honest, checkable answer'],
          ['Early ownership and a fix'],
          ['Delivered commitments, or early renegotiation']
        ]
      },
      who: [
        'You, Manager, Team',
        'You, Team',
        'You, Team',
        'You, Everyone',
        'You, Everyone',
        'You, Team'
      ],
      misconceptions: [
        { wrong: 'Etiquette means being formal.', right: 'It means being clear, honest and dependable.' },
        { wrong: 'If you are busy, you can leave messages unanswered.', right: 'A ten-second acknowledgement is what stops people chasing.' },
        { wrong: 'Admitting a mistake makes you look incompetent.', right: 'Owning it early builds trust; hiding it destroys it.' },
        { wrong: 'Saying "I do not know" is a bad look.', right: '"I do not know yet, I will find out" is a professional answer.' }
      ],
      takeaways: [
        '**Acknowledge fast, answer properly later.** "Got it, update by 3pm" is a complete reply and removes all the uncertainty.',
        '**Respond to invitations either way.** An unanswered invitation makes it impossible for anyone to plan.',
        '**Be on time and prepared.** Both are entirely within your control, which is why people read them as reliability.',
        '**"I do not know yet" is a strong answer** when followed by how you will find out and by when.',
        '**Own mistakes immediately.** People remember the recovery; hiding turns a small error into a question about trust.',
        '**Do what you said, or renegotiate early.** A commitment updated in advance is fine; one discovered missing on the day is not.',
        '**Match the room\'s formality, not your own habits.** Notice how your team writes and behaves, then fit in.',
        '**Reputation is cumulative.** No single message matters much; the pattern across a hundred of them decides what people expect from you.'
      ],
      reflection: 'Draft three short messages you could genuinely send this week: an acknowledgement with a deadline, a polite decline with an alternative, and an early flag that something will be late. Which one do you find hardest to send, and why?',
      checks: [
        'What should you do when you cannot answer a message properly yet?',
        'How do you decline a meeting professionally?',
        'Why do punctuality and preparation carry so much weight?',
        'How should you answer a question you do not know?',
        'What should you do immediately after making a mistake?',
        'What should happen when a commitment is going to slip?'
      ]
    }
  ]
}
