export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 gap-8 sm:p-20 font-[family-name:var(--font-outfit)]">
      <main className="flex flex-col gap-8 items-center text-center sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl">
          AstraHR
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center sm:text-left">
          The AI-native HR platform for High-Performance Teams.
          <br />
          <span className="text-sm text-accent">Coming 2026.</span>
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Get Started
          </button>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer sm:min-w-44">
            Read Logic
          </button>
        </div>
      </main>
    </div>
  );
}
