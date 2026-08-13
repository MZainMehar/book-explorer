export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/library-hero.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-stone-950/60" />
      </div>

      <div className="relative mx-auto flex min-h-[380px] max-w-7xl items-center justify-center px-5 py-20 text-center lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            Explore the library
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            For minds that wander and words that last.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-200 sm:text-lg">
            Discover books from around the world and explore their ratings,
            authors, and publication history.
          </p>

          <a
            href="#explore"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-600"
          >
            Explore books
          </a>
        </div>
      </div>
    </section>
  );
}
