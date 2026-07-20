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
        text: 'Authentication answers "who are you?" and authorisation answers "what are you allowed to do?". A user can be authenticated but still not authorised for a specific resource. Many security bugs come from confusing the two.',
        ensures: [
          '**Authentication** verifies identity.',
          '**Authorisation** checks permissions.',
          'Being logged in is not the same as being allowed.',
          'Both checks are needed for safe access.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Auth flow — separating identity from access.',
        loop: false,
        steps: [
          { icon: 'right-to-bracket', label: 'User logs in', desc: 'Someone attempts to sign in.', purpose: 'Begin an access request.', question: 'Who is trying to get in?' },
          { icon: 'fingerprint', label: 'Authenticate', desc: 'Verify the identity.', purpose: 'Confirm the user is who they claim.', question: 'Are you who you say you are?' },
          { icon: 'user-check', label: 'Authorise', desc: 'Check what they may access.', purpose: 'Decide what this identity is allowed to do.', question: 'What are you allowed to do?' },
          { icon: 'door-open', label: 'Grant or deny', desc: 'Access is allowed or refused.', purpose: 'Enforce the decision for this resource.', question: 'Is this specific action permitted?' }
        ]
      },
      example: {
        title: 'Logged in, but no admin',
        items: [
          'A user signs in with the right password.',
          'Authentication confirms their identity.',
          'Authorisation checks their role for admin settings.',
          'They’re authenticated but not authorised, so admin is denied.'
        ]
      },
      io: {
        inputs: [
          ['Login attempt', 'Credentials'],
          ['Credentials', 'Identity store'],
          ['Verified identity', 'Permission rules'],
          ['Authorisation decision']
        ],
        outputs: [
          ['A user to verify'],
          ['Confirmed or rejected identity'],
          ['Allowed or disallowed action'],
          ['Access granted or denied']
        ]
      },
      who: [
        'User',
        'Authentication system',
        'Authorisation system',
        'Application'
      ],
      misconceptions: [
        { wrong: 'Authentication and authorisation are the same thing.', right: 'One proves identity; the other grants access.' },
        { wrong: 'If you can log in, you can do anything.', right: 'You still need authorisation for each protected resource.' },
        { wrong: 'Can’t access admin means the login failed.', right: 'You may be authenticated but not authorised.' }
      ],
      takeaways: [
        'Authentication verifies who you are.',
        'Authorisation decides what you can do.',
        'Logged in ≠ allowed.',
        'Confusing the two causes real security bugs.'
      ],
      reflection: 'A user logs in fine but can’t open a report — is that an authentication or an authorisation problem?',
      checks: [
        'What does authentication answer?',
        'What does authorisation answer?',
        'Can you be authenticated but not authorised?',
        'Why are both checks needed?'
      ]
    },
    {
      id: 'sec-hashing',
      title: 'Passwords & Hashing',
      blurb: 'Why passwords are never stored as plain text — and how hashing differs from encryption.',
      whatIs: {
        text: 'Passwords should not be stored as plain text. Hashing transforms a password into a value used for verification. Hashing is not encryption — it is designed to be one-way.',
        ensures: [
          'Stored passwords should be hashed, never plain text.',
          'Hashing is one-way: you can’t reverse it back to the password.',
          'Verification compares hashes, not the original password.',
          'Use approved libraries, never custom password logic.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How a password is stored and later verified — without ever keeping the plain text.',
        loop: false,
        steps: [
          { icon: 'key', label: 'Password entered', desc: 'The user sets or types a password.', purpose: 'Capture the credential to protect.', question: 'What did the user provide?' },
          { icon: 'hashtag', label: 'Hash it', desc: 'It’s transformed one-way into a hash.', purpose: 'Avoid ever storing the plain password.', question: 'What one-way value represents it?' },
          { icon: 'database', label: 'Store the hash', desc: 'Only the hash is saved.', purpose: 'Keep something to verify against, not the secret.', question: 'What is actually stored?' },
          { icon: 'circle-check', label: 'Verify by hashing', desc: 'A login hashes and compares.', purpose: 'Confirm a match without knowing the password.', question: 'Do the hashes match?' }
        ]
      },
      io: {
        inputs: [
          ['A password'],
          ['Password', 'Hash function'],
          ['The hash'],
          ['Login attempt', 'Stored hash']
        ],
        outputs: [
          ['A credential to protect'],
          ['A one-way hash'],
          ['A stored hash'],
          ['A match or mismatch']
        ]
      },
      who: [
        'User',
        'Auth system, Hash library',
        'Auth system, Database',
        'Auth system'
      ],
      example: {
        title: 'Logging in safely',
        items: [
          'You enter your password at sign-up.',
          'The system hashes it one-way.',
          'Only the hash is stored — never your password.',
          'At login, your input is hashed and compared to the stored hash.'
        ]
      },
      misconceptions: [
        { wrong: 'Encryption and hashing are the same thing.', right: 'Encryption is reversible; hashing is one-way.' },
        { wrong: 'Storing passwords is fine if the database is private.', right: 'Plain-text passwords are a serious risk regardless.' },
        { wrong: 'Writing your own hashing is fine.', right: 'Use approved, well-tested libraries and systems.' }
      ],
      takeaways: [
        'Never store passwords as plain text.',
        'Hashing is one-way, unlike encryption.',
        'Verification compares hashes.',
        'Rely on approved libraries, not custom logic.'
      ],
      reflection: 'If a hashed-password database leaks, why is that far less catastrophic than a plain-text one?',
      checks: [
        'Why not store passwords as plain text?',
        'What does hashing do?',
        'How is hashing different from encryption?',
        'Why avoid custom password logic?'
      ]
    },
    {
      id: 'sec-encryption',
      title: 'Encryption & Certificates',
      blurb: 'Protecting data from unintended readers — in transit and at rest.',
      whatIs: {
        text: 'Encryption protects data from being read by unintended parties. Data can be protected in transit and at rest. TLS certificates help secure HTTPS and verify server identity.',
        ensures: [
          'Encryption keeps data unreadable to the wrong parties.',
          'Data can be protected **in transit** and **at rest**.',
          'TLS certificates secure HTTPS and prove identity.',
          'Certificate issues can cause app and browser failures.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Where encryption protects data across its journey.',
        loop: false,
        steps: [
          { icon: 'lock', label: 'Protect in transit', desc: 'Data is encrypted as it travels.', purpose: 'Stop eavesdroppers reading data on the wire.', question: 'Is data safe while moving?' },
          { icon: 'database', label: 'Protect at rest', desc: 'Stored data is encrypted too.', purpose: 'Keep stored data unreadable if it’s stolen.', question: 'Is stored data safe?' },
          { icon: 'certificate', label: 'Verify identity', desc: 'Certificates prove the server.', purpose: 'Confirm you’re talking to the real server.', question: 'Is the server trustworthy?' },
          { icon: 'triangle-exclamation', label: 'Handle cert issues', desc: 'Expired certs break connections.', purpose: 'Recognise certificate failures early.', question: 'Is the certificate valid?' }
        ]
      },
      io: {
        inputs: [
          ['Data in transit'],
          ['Stored data'],
          ['Server certificate'],
          ['Certificate status']
        ],
        outputs: [
          ['Encrypted traffic'],
          ['Encrypted storage'],
          ['A verified server'],
          ['A working or blocked connection']
        ]
      },
      who: [
        'TLS layer, Network',
        'Storage system',
        'Client, Certificate authority',
        'Server, Engineer'
      ],
      example: {
        title: 'Data end to end',
        items: [
          'A payment is encrypted as it travels to the server (in transit).',
          'The stored record is encrypted on disk (at rest).',
          'The server’s certificate proves its identity during HTTPS.',
          'If that certificate expires, the connection fails until it’s renewed.'
        ]
      },
      misconceptions: [
        { wrong: 'Encryption only matters in transit.', right: 'Data at rest needs protection too.' },
        { wrong: 'A certificate is just a formality.', right: 'It verifies identity and secures the connection.' },
        { wrong: 'Encrypted data can never cause failures.', right: 'Expired or invalid certificates break connections.' }
      ],
      takeaways: [
        'Encryption protects data from unintended readers.',
        'Protect data both in transit and at rest.',
        'Certificates secure HTTPS and verify identity.',
        'Certificate problems cause real failures.'
      ],
      reflection: 'Which is riskier for your app to skip — encryption in transit or at rest — and why?',
      checks: [
        'What does encryption protect against?',
        'What are "in transit" and "at rest"?',
        'What do TLS certificates help with?',
        'How can certificates cause failures?'
      ]
    },
    {
      id: 'sec-secrets',
      title: 'Secrets, Keys & Tokens',
      blurb: 'Passwords, API keys, and tokens need a lifecycle — not a home in your source code.',
      whatIs: {
        text: 'Secrets include passwords, API keys, certificates, private keys, and tokens. They should not be hardcoded in source code, should live in approved secure stores, and should be rotated and revoked as needed.',
        ensures: [
          'Secrets should never be hardcoded in source code.',
          'They belong in approved secure stores.',
          'They should be rotated periodically and when exposed.',
          'A leaked secret can grant unauthorised access.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Secret lifecycle — secrets need managing from creation to revocation.',
        loop: false,
        steps: [
          { icon: 'key', label: 'Create', desc: 'A new secret is generated.', purpose: 'Produce a strong, unique secret.', question: 'What is this secret for?' },
          { icon: 'vault', label: 'Store securely', desc: 'It’s kept in a secure store.', purpose: 'Keep it out of code and safe from leaks.', question: 'Where is it safely held?' },
          { icon: 'shield-halved', label: 'Use carefully', desc: 'It’s accessed only when needed.', purpose: 'Limit exposure during use.', question: 'Who and what can access it?' },
          { icon: 'arrows-rotate', label: 'Rotate', desc: 'It’s replaced periodically.', purpose: 'Reduce the window a leak stays useful.', question: 'When was it last rotated?' },
          { icon: 'ban', label: 'Revoke', desc: 'It’s retired when no longer needed.', purpose: 'Cut off access once it’s obsolete or exposed.', question: 'Should this still work?' }
        ]
      },
      example: {
        title: 'An API key’s life',
        items: [
          'A new API key is generated for a service.',
          'It’s stored in a secrets manager, not in the repo.',
          'The service reads it securely at run time.',
          'It’s rotated on a schedule to limit exposure.',
          'When the service is retired, the key is revoked.'
        ]
      },
      io: {
        inputs: [
          ['Need for access', 'Secret generator'],
          ['New secret', 'Secure store'],
          ['Stored secret', 'Access request'],
          ['Rotation schedule'],
          ['Retirement or leak event']
        ],
        outputs: [
          ['A fresh secret'],
          ['A safely stored secret'],
          ['Controlled, audited use'],
          ['A replaced secret'],
          ['A disabled secret']
        ]
      },
      who: [
        'Engineer, Secret system',
        'Secrets manager',
        'Application, Engineer',
        'Operations, Automation',
        'Operations, Security'
      ],
      misconceptions: [
        { wrong: 'It’s fine to hardcode secrets if the repo is private.', right: 'Private repos leak; secrets belong in secure stores.' },
        { wrong: 'A secret can be set once and forgotten.', right: 'Secrets should be rotated and revoked over time.' },
        { wrong: 'A leaked key is harmless if noticed quickly.', right: 'A leaked secret can grant real unauthorised access.' }
      ],
      takeaways: [
        'Secrets include passwords, keys, certs, and tokens.',
        'Never hardcode them in source code.',
        'Store them securely and rotate them.',
        'Revoke secrets that leak or are no longer needed.'
      ],
      reflection: 'If a secret were exposed today, how quickly could you rotate and revoke it — and would you even know?',
      checks: [
        'What counts as a secret?',
        'Why not hardcode secrets in code?',
        'What are the stages of a secret’s lifecycle?',
        'What can a leaked secret enable?'
      ]
    },
    {
      id: 'sec-privilege',
      title: 'Least Privilege',
      blurb: 'Give people, systems, and services only the access they actually need.',
      whatIs: {
        text: 'Least privilege means giving people, systems, and services only the access they need. Excessive permissions increase the impact of mistakes or compromise.',
        ensures: [
          'Grant only the minimum access required.',
          'Excess permissions widen the blast radius of any mistake.',
          'Access should be reviewed and audited over time.',
          'Trusted people can still cause accidental damage.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Least privilege — minimising access by default.',
        loop: false,
        steps: [
          { icon: 'user-gear', label: 'User or service', desc: 'Something needs to act.', purpose: 'Identify who or what needs access.', question: 'Who needs access?' },
          { icon: 'list-check', label: 'Required action', desc: 'Determine what it must do.', purpose: 'Pin down the exact task involved.', question: 'What do they actually need to do?' },
          { icon: 'shield-halved', label: 'Minimum access', desc: 'Grant only what’s needed.', purpose: 'Give the least access that gets the job done.', question: 'What is the smallest access that works?' },
          { icon: 'clipboard-check', label: 'Audit & review', desc: 'Re-check access over time.', purpose: 'Remove access that’s no longer justified.', question: 'Is this access still needed?' }
        ]
      },
      io: {
        inputs: [
          ['An access need'],
          ['The task'],
          ['Required action'],
          ['Granted access', 'Time']
        ],
        outputs: [
          ['The requester'],
          ['The exact action needed'],
          ['Minimum access granted'],
          ['Reviewed or revoked access']
        ]
      },
      who: [
        'User or service',
        'Owner, Engineer',
        'Access admin',
        'Security, Auditors'
      ],
      example: {
        title: 'A reporting service',
        items: [
          'A reporting service needs some database access.',
          'Its only task is to read report tables.',
          'It’s granted read-only access to those tables — nothing more.',
          'Access is reviewed later and trimmed if it’s no longer used.'
        ]
      },
      misconceptions: [
        { wrong: 'Admin access is harmless if the person is trusted.', right: 'Trusted people make mistakes; broad access magnifies them.' },
        { wrong: 'More access now saves time later.', right: 'It increases risk and the blast radius of any compromise.' },
        { wrong: 'Access granted once never needs review.', right: 'Access should be audited and revoked when unused.' }
      ],
      takeaways: [
        'Grant only the access that’s needed.',
        'Excess permissions widen the blast radius.',
        'Review and audit access over time.',
        'Least privilege limits the damage of mistakes.'
      ],
      reflection: 'What’s one permission you or a service holds that you couldn’t justify if asked today?',
      checks: [
        'What does least privilege mean?',
        'Why are excessive permissions risky?',
        'Why review access over time?',
        'Why isn’t "trusted" a reason for broad access?'
      ]
    },
    {
      id: 'sec-mistakes',
      title: 'Common Security Mistakes',
      blurb: 'Spot the everyday mistakes — secrets in code, shared passwords, over-broad access, plain-text storage.',
      whatIs: {
        text: 'Security is not only the security team’s responsibility. Engineers should validate input, avoid trusting user-controlled data, protect sensitive information, and follow secure engineering practices from the start.',
        ensures: [
          'Secrets in source code are a common, serious mistake.',
          'Shared passwords and broad admin access spread risk.',
          'Plain-text password storage exposes everyone.',
          'Every engineer shares responsibility for security.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'How to catch and correct a security issue.',
        loop: false,
        steps: [
          { icon: 'magnifying-glass', label: 'Spot the issue', desc: 'Notice risky behaviour.', purpose: 'Recognise a security problem in the making.', question: 'What looks unsafe here?' },
          { icon: 'triangle-exclamation', label: 'Name the risk', desc: 'Explain what could go wrong.', purpose: 'Make the danger concrete.', question: 'What’s the worst that could happen?' },
          { icon: 'shield-halved', label: 'Apply the safe pattern', desc: 'Use the secure alternative.', purpose: 'Replace the risky habit with a safe one.', question: 'What’s the safer way to do this?' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm the risk is gone.', purpose: 'Check that the fix actually closed the gap.', question: 'Is the risk really addressed?' }
        ]
      },
      io: {
        inputs: [
          ['Code or behaviour'],
          ['The risk'],
          ['Risky pattern'],
          ['Applied fix']
        ],
        outputs: [
          ['A spotted risk'],
          ['A named danger'],
          ['A safe alternative'],
          ['A closed gap']
        ]
      },
      who: [
        'Engineer, Reviewer',
        'Engineer',
        'Engineer',
        'Engineer, Reviewer'
      ],
      example: {
        title: 'API key in the code',
        items: [
          'You spot an API key committed in the source.',
          'The risk: anyone with the repo can use it.',
          'Move it to a secrets manager and read it at run time.',
          'Rotate the exposed key and confirm nothing else references it.'
        ]
      },
      misconceptions: [
        { wrong: 'Security is only handled by a security team.', right: 'Every engineer is responsible for secure practices.' },
        { wrong: 'A private repo makes hardcoded secrets safe.', right: 'Repos leak; secrets still belong in secure stores.' },
        { wrong: 'User input can be trusted if it looks fine.', right: 'Always validate and never trust user-controlled data.' }
      ],
      takeaways: [
        'Don’t hardcode secrets or store passwords in plain text.',
        'Avoid shared passwords and over-broad access.',
        'Validate input and distrust user-controlled data.',
        'Security is everyone’s responsibility.'
      ],
      reflection: 'Which of these mistakes have you seen in real code — and what safe pattern replaces it?',
      checks: [
        'Why is an API key in code a problem?',
        'What’s wrong with plain-text password storage?',
        'Why is a private repo not a safe place for secrets?',
        'Whose job is security?'
      ]
    }
  ]
}
