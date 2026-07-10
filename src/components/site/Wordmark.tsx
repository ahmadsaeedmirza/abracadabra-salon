import { SparkleMark } from "./SparkleMark";

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-espresso" : "text-ivory";
  return (
    <div className={`flex items-center gap-2 ${color}`}>
      <SparkleMark className="w-4 h-4 text-terracotta" />
      <div className="leading-none">
        <div className="font-display text-xl tracking-tight">Abracadabra</div>
        <div className="eyebrow text-[0.55rem] mt-0.5 opacity-70">Salon · Virginia</div>
      </div>
    </div>
  );
}
