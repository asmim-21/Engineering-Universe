// Tiny markdown-lite so data files stay plain strings: "**bold**" renders
// bold, "`code`" renders as inline code. Bold is parsed first so "**`x`**"
// (bold-wrapped code) still resolves its inner code span.

function renderInlineCode(text) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') && part.length > 1
      ? <code key={i}>{part.slice(1, -1)}</code>
      : part
  )
}

export function renderRich(text) {
  if (typeof text !== 'string') return text
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{renderInlineCode(part.slice(2, -2))}</strong>
    }
    return <span key={i}>{renderInlineCode(part)}</span>
  })
}
