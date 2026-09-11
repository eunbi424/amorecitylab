type IconName = "microscope" | "heart" | "solution";

export default function PhilosophyIcon({ name }: { name: IconName }) {
  const common = "h-7 w-7 stroke-current";

  if (name === "microscope") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <circle cx="8.5" cy="7.5" r="3.2" strokeWidth="1.4" />
        <path d="M11 10.2 16.6 16a2.2 2.2 0 0 1-3.1 3.1L8.2 13.6" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14.5 14.5h5.2M16.2 20.5h5" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M4.8 13.2c2.2-4.8 5.4-7.2 7.2-4.6.6.9 1.2.9 1.8 0 1.8-2.6 5-.2 7.2 4.6 1.6 3.4-2.2 7.4-8.1 7.4s-9.7-4-8.1-7.4Z"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
      <path d="M8 11.2c.9 1.8 2.4 2.8 4 2.8s3.1-1 4-2.8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7.2 13.2h9.6v5.4H7.2z" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9.4 18.6v1.8h5.2v-1.8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
