// Thin wrapper around Font Awesome (loaded via CDN in index.html).
// Usage: <Icon name="rocket" /> or <Icon name="star" variant="regular" />

export default function Icon({ name, variant = 'solid', className = '', style }) {
  return (
    <i
      className={`fa-${variant} fa-${name} ${className}`.trim()}
      style={style}
      aria-hidden="true"
    />
  )
}
