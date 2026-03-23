const features = [
  {
    title: "One command, not twelve clicks",
    description:
      "Open a port from automation instead of hunting through router panels, model-specific menus, and inconsistent admin UIs.",
  },
  {
    title: "Built for server setup flows",
    description:
      "Pair it with deployment scripts, homelab bootstrap jobs, and local AI or game server installs where inbound access matters.",
  },
  {
    title: "Router-aware by design",
    description:
      "The idea is to support FRITZ!Box first, then expand to more consumer and SMB routers with a shared script interface.",
  },
];

const ideas = [
  "Port open and close commands with explicit success or error output",
  "Protocol selection for TCP, UDP, or both",
  "Port range support for game servers and internal service clusters",
  "Status checks to see what is already forwarded before changing anything",
  "Profiles for repeatable setup across dev, staging, and homelab machines",
  "Extra network helpers like DHCP lease lookup and local device discovery",
];

const useCases = [
  "Spin up a self-hosted app and expose the needed port as part of setup.",
  "Prepare multiplayer game servers without manually touching the router UI.",
  "Bootstrap demo infrastructure for edge devices or local AI tooling.",
  "Help developers automate networking steps that are usually forgotten.",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/70">
              Trainvent Startup Idea
            </p>
            <a
              href="https://next.trainvent.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-3 text-lg font-semibold text-white transition hover:text-cyan-200"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm text-cyan-100">
                TV
              </span>
              next.trainvent.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a
              href="mailto:hello@trainvent.com"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
            >
              hello@trainvent.com
            </a>
            <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-amber-100">
              Concept only, not a product yet
            </span>
          </div>
        </header>

        <div className="grid flex-1 gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-rise space-y-8">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                PortOpener
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Open router ports from a script, not from a maze of web UIs.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                PortOpener is a Trainvent concept for turning port forwarding
                into a clean command line primitive. Instead of clicking through
                FRITZ!Box, ISP dashboards, or router-specific panels, you run
                one command and get a clear success or error back.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:hello@trainvent.com?subject=PortOpener%20idea"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Talk to Trainvent
              </a>
              <a
                href="#cli"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                See the command
              </a>
            </div>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <h2 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside
            id="cli"
            className="animate-rise-delayed rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                  Example Flow
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Terminal-first networking
                </h2>
              </div>
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-rose-400/80" />
                <span className="size-3 rounded-full bg-amber-300/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/40 p-5 font-mono text-sm leading-7 text-slate-200">
              <p className="text-cyan-200">$ sudo order-portforward &lt;router-username&gt; &lt;router-password&gt; &lt;port&gt;/&lt;protocol&gt;</p>
              <p className="mt-4 text-slate-500"># Example</p>
              <p>$ sudo order-portforward admin hunter2 25565/tcp</p>
              <p className="mt-4 text-emerald-300">
                success: forwarded tcp/25565 to 192.168.178.34
              </p>
              <p className="text-slate-500">
                router: fritz.box | external: 25565 | internal: 25565
              </p>
              <p className="mt-6 text-rose-300">
                error: router refused credentials or lacks UPnP/API access
              </p>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                A good CLI tool should be composable in shell scripts, CI jobs,
                server installers, and local setup guides.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                The pitch is simple: automate the annoying network step that
                blocks self-hosting and inbound service setup.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Why it matters
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              The manual router step keeps breaking otherwise automatable
              workflows.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-300"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Future surface area
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Port forwarding first. Broader local networking next.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              PortOpener is intentionally framed as a startup idea, not a
              shipping product. The value is the direction: make local network
              configuration scriptable enough to fit modern deployment and
              server setup workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ideas.map((idea) => (
              <article
                key={idea}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200"
              >
                {idea}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/80">
            Trainvent
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                If this idea belongs in your server automation stack, let&apos;s
                talk.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200">
                PortOpener is a concept page for a practical startup idea:
                scriptable router actions for real-world infrastructure setup.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@trainvent.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                hello@trainvent.com
              </a>
              <a
                href="https://next.trainvent.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Visit Trainvent
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
