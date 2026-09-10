import { useEffect, useRef } from "react";
export default function Dialog({
  open,
  onClose,
  label,
  className = "",
  children,
}) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open) return;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      if (previous?.isConnected) previous.focus();
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={`studio-dialog ${className}`}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {open && (
        <div className="dialog-surface">
          <button
            className="dialog-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
