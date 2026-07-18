const emojiMap = {
  'arrow-pointer': '👉',
  'arrows-rotate': '🔄',
  'bookmark': '🔖',
  'bug': '🐛',
  'chart-line': '📈',
  'circle-question': '❓',
  'cloud': '☁️',
  'code': '💻',
  'code-branch': '🌳',
  'comments': '💬',
  'database': '🗄️',
  'desktop': '🖥️',
  'face-smile': '😊',
  'file-lines': '📄',
  'flask': '🧪',
  'gears': '⚙️',
  'heart': '❤️',
  'lightbulb': '💡',
  'magnifying-glass': '🔍',
  'moon': '🌙',
  'mountain': '⛰️',
  'people-group': '👥',
  'puzzle-piece': '🧩',
  'right-left': '↔️',
  'rocket': '🚀',
  'shield-halved': '🛡️',
  'sitemap': '🗺️',
  'square-check': '✅',
  'stairs': '👣',
  'star': '⭐',
  'user': '👤',
  'users': '👥',
  'wand-magic-sparkles': '✨'
}

export default function Icon({ name, className = '', style }) {
  const emoji = emojiMap[name] || '❌'
  return <span className={className} style={style} aria-hidden="true">{emoji}</span>
}
