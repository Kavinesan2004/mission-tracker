import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

function Hero() {
  return (
    <section className="flex flex-col items-center py-20 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        GTA VI Companion
      </p>

      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
        Track Every Mission.
        <br />
        Complete Every Story.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        Follow your GTA VI journey with mission tracking,
        collectibles, interactive maps, achievements, and
        completion statistics—all in one place.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button size="lg">
          Start Tracking
        </Button>

        <Button variant="outline" size="lg">
          Explore Map
        </Button>
      </div>

      <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
        <Card>
          <h2 className="text-4xl font-bold text-cyan-400">
            150+
          </h2>

          <p className="mt-2 text-zinc-400">
            Missions
          </p>
        </Card>

        <Card>
          <h2 className="text-4xl font-bold text-cyan-400">
            100%
          </h2>

          <p className="mt-2 text-zinc-400">
            Completion
          </p>
        </Card>

        <Card>
          <h2 className="text-4xl font-bold text-cyan-400">
            500+
          </h2>

          <p className="mt-2 text-zinc-400">
            Collectibles
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Hero;