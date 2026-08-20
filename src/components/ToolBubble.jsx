import { TOOL_ICONS } from "../assets/svg.js";
import RawSvg from "./RawSvg.jsx";

// A tool pill. Shows the matching icon when we have one, otherwise text-only.
export default function ToolBubble({ name }) {
  const icon = TOOL_ICONS[name];
  return (
    <div className="tool-bubble reveal">
      {icon ? <RawSvg html={icon} /> : null}
      <p>{name}</p>
    </div>
  );
}
