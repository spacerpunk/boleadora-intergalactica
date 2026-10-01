// A labelled row of toggle buttons; one item is pressed at a time.
export default function OptionChips({ label, items, value, onChange, swatch }) {
  return (
    <div className="option-chips" role="group" aria-label={label}>
      <span className="mono">{label}</span>
      <div>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === value}
            onClick={() => onChange(item.id)}
          >
            {swatch && (
              <i className="swatch" style={{ background: swatch(item) }} />
            )}
            {item.name ?? item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
