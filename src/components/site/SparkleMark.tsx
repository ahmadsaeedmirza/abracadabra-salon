export function SparkleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.4 9.2 L20.5 10.5 L14.2 13.2 L15.8 21 L12 16.5 L8.2 21 L9.8 13.2 L3.5 10.5 L10.6 9.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
