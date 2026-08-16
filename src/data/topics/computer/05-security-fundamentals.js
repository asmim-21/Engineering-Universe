// Computer Engineering Universe — Workshop 5.
export default {
  id: 'security',
  title: 'Security Fundamentals',
  tone: 'c4',
  blurb: 'Why systems must be protected — identity, access, passwords, encryption, secrets, and least privilege.',
  tags: ['AuthN/Z', 'Hashing', 'Secrets', 'Least privilege'],
  popups: [
    {
      id: 'sec-authnz',
      title: 'Authentication vs Authorisation',
      blurb: 'Who are you, versus what are you allowed to do — two different questions.',
      whatIs: {
        text: `**Authentication** answers "who are you?" — usually by checking something you know (a password), something you have (a phone or key), or something you are (a fingerprint). Combining two of those is multi-factor authentication, and it is the single most effective defence against stolen passwords.

**Authorisation** answers "what may this identity do?" — separately, and on every request. Being logged in is not permission to do anything in particular; it only establishes who is asking.

Confusing the two produces a whole family of real bugs. The most common is checking authentication but forgetting authorisation: a signed-in user changes an id in a uniform resource locator (URL) and sees someone else's data. Another is enforcing permissions in the interface only, so hiding a button is treated as security while the application programming interface (API) behind it accepts the call from anyone. The rule that prevents both: authenticate once per session, **authorise on every request, on the server, against the specific resource**.`,
        ensures: [
          'State the difference between authentication and authorisation',
          'Name the three factors and why combining them helps',
          'Check permissions on every request, not only at login',
          'Recognise that hiding a control is not enforcing a rule',
          'Spot the "change the id in the URL" class of bug',
          'Understand where each check belongs in a system'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Separating identity from access.',
        loop: false,
        steps: [
          { icon: 'right-to-bracket', label: 'A request arrives', desc: 'Someone wants to do something.', purpose: 'Begin an access decision for a specific action.', question: 'What is being attempted, and on what resource?' },
          { icon: 'fingerprint', label: 'Authenticate', desc: 'Verify the identity.', purpose: 'Establish who is asking, using credentials or a token.', question: 'Are they who they claim to be?' },
          { icon: 'user-check', label: 'Authorise', desc: 'Check this action, this resource.', purpose: 'Decide whether this identity may do this specific thing.', question: 'May this user act on this particular record?' },
          { icon: 'door-open', label: 'Grant or deny', desc: 'Enforce the decision.', purpose: 'Allow the action, or refuse it with the right status.', question: 'Is it 401 (unknown) or 403 (not allowed)?' }
        ]
      },
      example: {
        title: 'Logged in, but not permitted',
        items: [
          'A user requests `/reports/482` — someone else\'s report.',
          'Their session token is valid, so they are authenticated.',
          'The server checks ownership: report 482 belongs to another team.',
          'The request is refused with 403 — authenticated, but not authorised.'
        ]
      },
      io: {
        inputs: [
          ['A request', 'A target resource'],
          ['Credentials or token', 'Identity store'],
          ['Verified identity', 'Permission rules', 'Resource owner'],
          ['An authorisation decision']
        ],
        outputs: [
          ['An access decision to make'],
          ['A confirmed identity — or a rejection'],
          ['Allowed or disallowed for this resource'],
          ['Access granted, 401, or 403']
        ]
      },
      who: [
        'User, Client app',
        'Authentication system',
        'Authorisation logic, Application',
        'Application, API'
      ],
      misconceptions: [
        { wrong: 'Authentication and authorisation are the same.', right: 'One establishes identity; the other grants specific access.' },
        { wrong: 'Logged in means allowed.', right: 'Every request still needs an authorisation check.' },
        { wrong: 'Hiding the button is enough.', right: 'The interface is a convenience; the server must enforce the rule.' },
        { wrong: 'Checking at login is sufficient.', right: 'Permissions change, and each request targets a different resource.' }
      ],
      takeaways: [
        '**Authenticate once; authorise every time.** Identity is established at login; permission depends on the specific resource being touched.',
        '**Multi-factor authentication is the highest-value single improvement,** because it makes a stolen password insufficient on its own.',
        '**Authorise on the server, always.** Anything enforced only in the client can be bypassed by calling the API directly.',
        '**Hiding a control is user experience, not security.** The endpoint behind it is what must refuse.',
        '**Check ownership, not just role.** "Is this user an editor?" is not the same question as "does this record belong to them?"',
        '**401 and 403 mean different things:** unknown identity versus known identity without permission. Using them correctly helps everyone debug.',
        '**The "change the id in the URL" bug is extremely common,** and it comes entirely from checking authentication but not authorisation.'
      ],
      reflection: 'A user logs in successfully but cannot open a report. Is that authentication or authorisation — and how would the error code tell you? Now consider: if they changed the report id, what should happen?',
      checks: [
        'What question does each of the two checks answer?',
        'What are the three authentication factors?',
        'Why must authorisation happen on every request?',
        'Why is hiding a button not security?',
        'What is the difference between 401 and 403?',
        'What is the "change the id" bug, and what causes it?'
      ]
    },
    {
      id: 'sec-hashing',
      title: 'Passwords & Hashing',
      blurb: 'Why passwords are never stored as plain text — and how hashing differs from encryption.',
      whatIs: {
        text: `Passwords are never stored as written. Instead the system stores a **hash**: the output of a one-way function that turns the password into a fixed-length value which cannot be reversed. At login the system hashes what was typed and compares the two hashes — so it can verify you without ever holding your password.

Hashing is not encryption. Encryption is reversible by design, with a key. Hashing is deliberately one-way: there is no key and no decrypt step. That is precisely what makes it right for passwords.

Two refinements matter. A **salt** is a random value stored with each password and mixed in before hashing, so identical passwords produce different hashes and precomputed attack tables become useless. And the algorithm must be deliberately **slow** — bcrypt, scrypt or Argon2 rather than a fast general-purpose hash — because a fast hash lets an attacker try billions of guesses per second against a leaked database. This is also why nobody should implement it themselves: the well-tested library gets the salting, the cost factor and the comparison right.`,
        ensures: [
          'Explain what hashing does and why it is one-way',
          'Distinguish hashing from encryption',
          'Say what a salt is and which attack it prevents',
          'Understand why a slow algorithm is a feature',
          'Name appropriate password-hashing algorithms',
          'Explain why custom password code is a bad idea'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Storing and later verifying a password without keeping it.',
        loop: false,
        steps: [
          { icon: 'key', label: 'Password entered', desc: 'The user sets a password.', purpose: 'Receive the credential — briefly, in memory only.', question: 'What did the user provide?' },
          { icon: 'hashtag', label: 'Salt and hash', desc: 'Random salt, slow algorithm.', purpose: 'Produce a value that cannot be reversed or precomputed.', question: 'Is it salted, and is the algorithm deliberately slow?' },
          { icon: 'database', label: 'Store the hash', desc: 'Hash and salt saved.', purpose: 'Keep only what is needed to verify later.', question: 'Is the plain password stored anywhere at all?' },
          { icon: 'circle-check', label: 'Verify at login', desc: 'Hash the attempt, compare.', purpose: 'Confirm a match without ever knowing the password.', question: 'Do the hashes match?' }
        ]
      },
      io: {
        inputs: [
          ['A password'],
          ['Password', 'Random salt', 'Hash function'],
          ['Hash', 'Salt'],
          ['A login attempt', 'The stored hash and salt']
        ],
        outputs: [
          ['A credential to protect'],
          ['A salted, one-way hash'],
          ['A stored hash — never the password'],
          ['A match or a rejection']
        ]
      },
      who: [
        'User',
        'Auth system, Hashing library',
        'Auth system, Database',
        'Auth system'
      ],
      example: {
        title: 'Signing up and logging in',
        items: [
          'You choose a password at sign-up.',
          'The system generates a random salt and hashes both with bcrypt.',
          'Only the salt and hash are stored — the password is discarded.',
          'At login the attempt is hashed with the same salt and compared.'
        ]
      },
      misconceptions: [
        { wrong: 'Hashing and encryption are the same.', right: 'Encryption is reversible with a key; hashing is one-way.' },
        { wrong: 'A private database makes plain text acceptable.', right: 'Databases leak, and people reuse passwords elsewhere.' },
        { wrong: 'A fast hash is a better hash.', right: 'For passwords, speed helps the attacker — slow is the point.' },
        { wrong: 'Writing your own hashing is fine if you are careful.', right: 'Salting, cost factors and safe comparison are easy to get subtly wrong.' }
      ],
      takeaways: [
        '**Store the hash, never the password.** Verification compares hashes, so the plain text never needs to exist after sign-up.',
        '**Hashing is one-way; encryption is reversible.** Choosing the wrong one for passwords is a serious design error.',
        '**Salt every password individually.** It stops identical passwords sharing a hash and makes precomputed tables useless.',
        '**Slow is deliberate.** bcrypt, scrypt and Argon2 exist to make mass guessing expensive; a fast hash makes it cheap.',
        '**Use the library.** Password hashing is a solved problem with subtle failure modes; hand-rolling it is how they reappear.',
        '**A leaked hash database is bad, not catastrophic** — provided the hashes were salted and slow.',
        '**Password reuse is why this matters beyond your system.** A leak of yours becomes a breach of someone else\'s.'
      ],
      reflection: 'If your password database leaked tomorrow, what would an attacker be able to do — and how would the answer differ for plain text, a fast hash, and a salted slow hash?',
      checks: [
        'Why are passwords never stored as written?',
        'How is hashing different from encryption?',
        'What is a salt, and what attack does it stop?',
        'Why should a password hash be slow?',
        'Which algorithms are appropriate?',
        'Why not implement it yourself?'
      ]
    },
    {
      id: 'sec-encryption',
      title: 'Encryption & Certificates',
      blurb: 'Protecting data from unintended readers — in transit and at rest.',
      whatIs: {
        text: `Encryption makes data unreadable to anyone without the key. It protects data in two places. **In transit** means while it crosses a network — this is what Transport Layer Security (TLS) provides for HyperText Transfer Protocol (HTTP) Secure (HTTPS). **At rest** means while it sits on disk or in a database, so that a stolen drive or a copied backup is useless.

There are two families. **Symmetric** encryption uses one shared key for both directions: fast, and ideal for bulk data — but both parties need the key. **Asymmetric** encryption uses a public key to encrypt and a private key to decrypt, which solves key distribution but is slow. TLS uses both: asymmetric to agree a shared key safely, symmetric for the actual traffic.

**Certificates** attach identity to that machinery. A certificate binds a public key to a domain name and is signed by an authority the client already trusts, which is how you know the encrypted channel goes to the real server rather than to whoever intercepted it. Two practical consequences follow: expired certificates cause genuine outages on perfectly healthy servers, and encryption protects data **in transit and at rest but not in use** — once your application has decrypted it, everything depends on access control and good code.`,
        ensures: [
          'Distinguish encryption in transit from encryption at rest',
          'Explain symmetric and asymmetric encryption and where each is used',
          'Say what a certificate binds and who signs it',
          'Understand why key management is the hard part',
          'Recognise certificate expiry as an operational risk',
          'Know what encryption does not protect'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Where encryption protects data along its journey.',
        loop: false,
        steps: [
          { icon: 'lock', label: 'In transit', desc: 'Encrypted while it moves.', purpose: 'Stop anyone on the network path reading or altering it.', question: 'Could someone on this network read it?' },
          { icon: 'database', label: 'At rest', desc: 'Encrypted where it is stored.', purpose: 'Make stolen disks and copied backups useless.', question: 'What if this drive or backup were taken?' },
          { icon: 'certificate', label: 'Identity verified', desc: 'A certificate proves the server.', purpose: 'Ensure the encrypted channel goes to the right party.', question: 'Encrypted to whom, exactly?' },
          { icon: 'triangle-exclamation', label: 'Keys and expiry', desc: 'The operational reality.', purpose: 'Manage keys and renew certificates before they expire.', question: 'Who holds the keys, and when does this expire?' }
        ]
      },
      io: {
        inputs: [
          ['Data crossing a network'],
          ['Data written to storage'],
          ['A server certificate', 'Trusted authorities'],
          ['Keys', 'Expiry dates']
        ],
        outputs: [
          ['Traffic unreadable in transit'],
          ['Storage unreadable without the key'],
          ['A verified counterparty'],
          ['Working connections — or an outage when they lapse']
        ]
      },
      who: [
        'TLS layer, Network',
        'Storage system, Database',
        'Client, Certificate authority',
        'Operations, Engineers'
      ],
      example: {
        title: 'A payment, end to end',
        items: [
          'Card details are encrypted by TLS as they cross the internet.',
          'The stored record is encrypted at rest in the database.',
          'The certificate proves the client reached the real payment service.',
          'When that certificate expires unrenewed, every payment fails.'
        ]
      },
      misconceptions: [
        { wrong: 'Encryption in transit is enough.', right: 'Stolen backups and drives are why at-rest encryption exists.' },
        { wrong: 'Encrypted data is safe from everything.', right: 'It is decrypted to be used — access control still matters.' },
        { wrong: 'A certificate is a formality.', right: 'It is what stops an interceptor impersonating the server.' },
        { wrong: 'Encryption is the hard part.', right: 'Key management is; the algorithms are the solved bit.' }
      ],
      takeaways: [
        '**In transit and at rest are different protections** against different threats: eavesdropping on the wire versus theft of storage.',
        '**Symmetric is fast, asymmetric solves key exchange.** TLS uses asymmetric to agree a key, then symmetric for the data.',
        '**A certificate binds a public key to a name,** signed by an authority the client trusts — that is what makes encryption meaningful.',
        '**Key management is the real problem.** Losing a key can mean losing the data; leaking one undoes all the encryption.',
        '**Certificate expiry is a self-inflicted outage.** Automate renewal and alert weeks ahead, not hours.',
        '**Encryption does not protect data in use.** Once decrypted in your application, access control and code quality are the defence.',
        '**Use standard, current algorithms and libraries.** Custom cryptography fails in ways that are invisible until they are exploited.'
      ],
      reflection: 'Which would be worse for a system you know: skipping encryption in transit, or at rest? Now name the threat each one actually defends against — and which is more likely.',
      checks: [
        'What is the difference between in transit and at rest?',
        'When is symmetric encryption used, and when asymmetric?',
        'What does a certificate bind together, and who signs it?',
        'Why is key management the hard part?',
        'Why does an expired certificate cause an outage?',
        'What does encryption not protect?'
      ]
    },
    {
      id: 'sec-secrets',
      title: 'Secrets, Keys & Tokens',
      blurb: 'Passwords, API keys, and tokens need a lifecycle — not a home in your source code.',
      whatIs: {
        text: `A **secret** is anything that grants access: passwords, application programming interface (API) keys, private keys, database credentials and session tokens. What they have in common is that possession is enough — anyone holding one can act as you.

The single most common mistake is committing a secret to source control. Private repositories get cloned, forked, shared and occasionally made public; and because git keeps history, deleting the line does **not** remove the secret — it is still in every earlier commit, on every clone. Once committed, a secret must be rotated, not just deleted.

Secrets have a lifecycle: create, store, use, rotate, revoke. They belong in a **secrets manager** and are injected at run time. **Rotation** limits how long a leaked secret stays useful; **revocation** cuts it off immediately when something goes wrong. And they leak in more places than people expect — log lines, error messages, screenshots, chat messages and crash dumps all regularly contain credentials nobody meant to share.`,
        ensures: [
          'Recognise what counts as a secret',
          'Keep secrets out of source control and understand git history',
          'Use a secrets manager and inject at run time',
          'Rotate periodically and revoke immediately on exposure',
          'Avoid logging or displaying secrets accidentally',
          'Respond correctly when a secret is exposed'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The lifecycle of a secret.',
        loop: false,
        steps: [
          { icon: 'key', label: 'Create', desc: 'Generate a strong, unique secret.', purpose: 'One secret per service and environment, never shared.', question: 'What is this for, and who else has one?' },
          { icon: 'vault', label: 'Store securely', desc: 'A secrets manager, not the repo.', purpose: 'Keep it out of code, configuration files and tickets.', question: 'Where does this live, and who can read it?' },
          { icon: 'shield-halved', label: 'Use carefully', desc: 'Injected at run time.', purpose: 'Load it into memory when needed; never log or print it.', question: 'Could this end up in a log or an error message?' },
          { icon: 'arrows-rotate', label: 'Rotate', desc: 'Replace on a schedule.', purpose: 'Limit how long any leaked copy remains useful.', question: 'When was it last changed, and can we do it without downtime?' },
          { icon: 'ban', label: 'Revoke', desc: 'Kill it when exposed or retired.', purpose: 'Cut off access immediately rather than hoping.', question: 'Should this still work — and would we notice if it were misused?' }
        ]
      },
      example: {
        title: 'The life of an API key',
        items: [
          'A unique key is generated for the reporting service.',
          'It is stored in the secrets manager, never in the repository.',
          'The service reads it from the environment at startup and never logs it.',
          'It is rotated quarterly, with old and new valid briefly to avoid downtime.',
          'When the service is retired the key is revoked, not just forgotten.'
        ]
      },
      io: {
        inputs: [
          ['A need for access'],
          ['A new secret', 'A secrets manager'],
          ['A stored secret', 'A running service'],
          ['A rotation schedule'],
          ['Exposure or retirement']
        ],
        outputs: [
          ['A strong, unique secret'],
          ['A safely stored secret', 'Access rules'],
          ['Controlled, audited use'],
          ['A replaced secret', 'A shortened exposure window'],
          ['A disabled secret']
        ]
      },
      who: [
        'Engineer, Platform',
        'Secrets manager, Platform',
        'Application, Engineer',
        'Operations, Automation',
        'Operations, Security'
      ],
      misconceptions: [
        { wrong: 'A private repository is a safe place for secrets.', right: 'Repositories are cloned and shared; secrets belong in a manager.' },
        { wrong: 'Deleting the line removes the secret.', right: 'Git history keeps it — rotation is the only real fix.' },
        { wrong: 'Set it once and forget it.', right: 'Rotation limits the damage of a leak you have not noticed.' },
        { wrong: 'A leaked key is fine if you spot it quickly.', right: 'Automated scanners find exposed keys within minutes.' }
      ],
      takeaways: [
        '**Possession is access.** A secret in a screenshot, a log or a chat message is a secret that has been given away.',
        '**Never commit secrets.** Deleting them later does not help, because git keeps every earlier version.',
        '**Committed means compromised.** The correct response is to rotate immediately, then clean up.',
        '**Use a secrets manager and inject at run time.** One place to store, audit and revoke beats scattered configuration.',
        '**Rotate on a schedule.** It shortens the window in which any undetected leak is useful.',
        '**Never log a secret.** Redact them explicitly — logs and crash dumps travel further than the code does.',
        '**One secret per service and environment.** Shared credentials make revocation impossible without breaking everything.',
        '**Assume exposed keys are found fast.** Public repositories are scanned continuously by people looking for exactly this.'
      ],
      reflection: 'If a key were exposed in a commit right now, what would you do in the first ten minutes — and would you even find out? Which part of that answer worries you most?',
      checks: [
        'What counts as a secret?',
        'Why is a private repository not safe enough?',
        'Why does deleting a committed secret not fix it?',
        'What are the stages of a secret\'s lifecycle?',
        'Why rotate secrets that have not leaked?',
        'Where do secrets leak accidentally?'
      ]
    },
    {
      id: 'sec-privilege',
      title: 'Least Privilege',
      blurb: 'Give people, systems, and services only the access they actually need.',
      whatIs: {
        text: `**Least privilege** means every person, service and process gets the minimum access needed to do its job, and nothing more. The reasoning is not distrust — it is that access defines the **blast radius** of anything that goes wrong.

The point is easiest to see with mistakes rather than attacks. A reporting service with read-only access cannot accidentally delete production data, however wrong its code is. A deployment account limited to one environment cannot take down another. The permission is what turns a bug into an incident or keeps it contained.

Access also **accumulates**. People change teams, cover for colleagues, debug a one-off problem — and permissions granted temporarily are rarely removed. Periodic review is what stops a five-year-old account holding administrative access nobody remembers granting. Better still, make access **time-bound** by default: grant elevated permissions for a few hours rather than forever, so expiry does the cleaning up for you.`,
        ensures: [
          'Grant the minimum access that lets the job be done',
          'Reason about blast radius rather than trust',
          'Recognise privilege creep and review access periodically',
          'Prefer time-bound, request-based elevation',
          'Apply least privilege to services and automation, not just people',
          'Separate environments so one cannot damage another'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Granting the least access that works.',
        loop: false,
        steps: [
          { icon: 'user-gear', label: 'Who needs access?', desc: 'A person, service or job.', purpose: 'Identify the specific identity — not a shared account.', question: 'Exactly who or what is asking?' },
          { icon: 'list-check', label: 'For what task?', desc: 'The concrete action.', purpose: 'Pin down the operation, resource and environment.', question: 'What do they actually need to do, and where?' },
          { icon: 'shield-halved', label: 'Grant the minimum', desc: 'Narrow and specific.', purpose: 'Give the smallest permission that completes the task.', question: 'Is read-only enough? One environment? One table?' },
          { icon: 'clipboard-check', label: 'Review and expire', desc: 'Access that lapses by default.', purpose: 'Remove what is no longer needed, automatically where possible.', question: 'Is this still justified, and when does it expire?' }
        ]
      },
      io: {
        inputs: [
          ['An access request'],
          ['The task', 'The environment'],
          ['Required actions', 'Available permission levels'],
          ['Granted access', 'Time']
        ],
        outputs: [
          ['A named identity'],
          ['A precise scope'],
          ['Minimum viable permissions'],
          ['Reviewed, expired or revoked access']
        ]
      },
      who: [
        'User or service',
        'Owner, Engineer',
        'Access administrator, Platform',
        'Security, Auditors, Automation'
      ],
      example: {
        title: 'A reporting service',
        items: [
          'The reporting service needs database access.',
          'Its only task is reading three report tables in production.',
          'It gets read-only access to those tables — not the whole database.',
          'Access is reviewed quarterly and removed when the service is retired.'
        ]
      },
      misconceptions: [
        { wrong: 'Admin access is fine for people we trust.', right: 'Trusted people make mistakes; access decides how bad they get.' },
        { wrong: 'Granting broad access now saves time later.', right: 'It converts small mistakes into large incidents.' },
        { wrong: 'Least privilege is only about people.', right: 'Services and automation are the accounts most often over-privileged.' },
        { wrong: 'Access granted once needs no review.', right: 'Privilege accumulates silently as roles change.' }
      ],
      takeaways: [
        '**Access defines the blast radius.** The question is not whether someone is trusted, but what a mistake could reach.',
        '**Read-only is the most under-used permission.** Most services and most debugging need to look, not change.',
        '**Service accounts are usually the worst offenders,** because nobody feels personally responsible for narrowing them.',
        '**Privilege creeps.** Temporary access granted during an incident becomes permanent unless something removes it.',
        '**Time-bound access is better than reviewed access,** because expiry happens whether or not anyone remembers.',
        '**Separate environments strictly.** A credential that works in production from a test job is an incident waiting for a typo.',
        '**Least privilege limits damage; it does not prevent mistakes.** That is exactly why it is worth the small inconvenience.'
      ],
      reflection: 'Name one permission you or a service you own holds that you could not justify if asked today. What would break if it were removed this afternoon — and how quickly would you find out?',
      checks: [
        'What does least privilege mean?',
        'Why is blast radius a better frame than trust?',
        'Why are service accounts often over-privileged?',
        'What is privilege creep?',
        'Why is time-bound access better than periodic review?',
        'What does least privilege not prevent?'
      ]
    },
    {
      id: 'sec-mistakes',
      title: 'Common Security Mistakes',
      blurb: 'Spot the everyday mistakes — secrets in code, unvalidated input, over-broad access, plain-text storage.',
      whatIs: {
        text: `Most security incidents are not clever attacks. They are ordinary mistakes: a key committed to a repository, an endpoint that never checked ownership, user input passed straight into a query, an account with more access than it needed.

The single most important habit is **never trusting input**. Anything from a user, an application programming interface (API) caller or another system can be crafted deliberately. Passing it unchecked into a database query allows **injection**; rendering it unescaped into a page allows **cross-site scripting**; trusting an id in a request allows access to other people's data. The defences are well established — parameterised queries, output encoding, server-side authorisation — and they only work when applied consistently.

The rest is habit. Keep dependencies updated, since known vulnerabilities in libraries are among the most exploited routes in. Fail **closed**: when something goes wrong, deny rather than allow. And say something when you spot a problem — security is not a separate team's responsibility, and the person best placed to catch these is the one reading the code.`,
        ensures: [
          'Treat all input as untrusted, whatever its source',
          'Use parameterised queries rather than building strings',
          'Escape output to prevent script injection',
          'Keep dependencies patched and know what you depend on',
          'Fail closed rather than open',
          'Raise security concerns as a normal part of review'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Catching and correcting a security problem.',
        loop: false,
        steps: [
          { icon: 'magnifying-glass', label: 'Spot it', desc: 'Notice the risky pattern.', purpose: 'Recognise input trusted, a secret committed, access too broad.', question: 'What here assumes good intentions?' },
          { icon: 'triangle-exclamation', label: 'Name the risk', desc: 'Make it concrete.', purpose: 'State what an attacker or an accident could actually do.', question: 'What is the worst realistic outcome?' },
          { icon: 'shield-halved', label: 'Apply the safe pattern', desc: 'Use the standard defence.', purpose: 'Parameterise, escape, authorise, move the secret.', question: 'What is the established fix for this class of problem?' },
          { icon: 'circle-check', label: 'Verify and clean up', desc: 'Confirm and rotate.', purpose: 'Test the fix and deal with anything already exposed.', question: 'Is the gap closed — and was anything already compromised?' }
        ]
      },
      io: {
        inputs: [
          ['Code', 'Configuration', 'Behaviour'],
          ['The risky pattern'],
          ['A named risk', 'Known safe patterns'],
          ['An applied fix']
        ],
        outputs: [
          ['A spotted problem'],
          ['A concrete, explainable risk'],
          ['A corrected implementation'],
          ['A verified fix', 'Rotated credentials']
        ]
      },
      who: [
        'Engineer, Reviewer',
        'Engineer, Security',
        'Engineer',
        'Engineer, Reviewer, Security'
      ],
      example: {
        title: 'An API key in the code',
        items: [
          'Review spots a hard-coded key in a committed configuration file.',
          'Risk: anyone with repository access — or a leak — can use it.',
          'Move it to the secrets manager and read it at run time.',
          'Rotate the exposed key, because git history still contains it.'
        ]
      },
      misconceptions: [
        { wrong: 'Security is the security team\'s job.', right: 'Most vulnerabilities are introduced and caught in ordinary code.' },
        { wrong: 'Input from our own frontend is safe.', right: 'Anyone can call the API directly with anything.' },
        { wrong: 'Escaping input once is enough.', right: 'Escaping depends on where it is used — query, page or command.' },
        { wrong: 'We are too small to be targeted.', right: 'Most attacks are automated and indiscriminate.' }
      ],
      takeaways: [
        '**Never trust input,** whatever it came from. "Our app sends it" is not a guarantee, because anyone can call the endpoint.',
        '**Parameterised queries prevent injection.** Building SQL by string concatenation is the mistake behind decades of breaches.',
        '**Escape on output, for the right context.** A value safe in a page can be dangerous in a query or a shell command.',
        '**Authorise on the server, per resource.** Client-side checks are convenience; the server decides.',
        '**Patch dependencies.** Known vulnerabilities in libraries you did not write are one of the most common ways in.',
        '**Fail closed.** When authorisation cannot be determined, deny — an error that grants access is far worse than one that refuses it.',
        '**Do not roll your own crypto or auth.** Use the audited implementation; the failures are silent and severe.',
        '**Say something when you spot a risk.** In review, "what stops someone passing another user\'s id here?" is one of the most valuable questions there is.'
      ],
      reflection: 'Look at a piece of code you wrote recently that takes input. What does it assume about that input, and what would happen if every assumption were deliberately violated?',
      checks: [
        'Why must input be treated as untrusted?',
        'What does a parameterised query prevent?',
        'Why does escaping depend on context?',
        'Why do dependency updates matter for security?',
        'What does "fail closed" mean?',
        'Whose responsibility is security?'
      ]
    }
  ]
}
