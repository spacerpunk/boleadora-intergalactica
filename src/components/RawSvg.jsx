// Renders a raw SVG markup string (from src/assets/svg.js) inline.
// The SVG artwork is trusted, first-party content bundled with the app.
export default function RawSvg({ html, className, ...rest }) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}
