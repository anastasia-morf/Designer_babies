import { ArrowRight, Home } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene4Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene4({ choices, onChoice, onHome }: Scene4Props) {
  const testedEmbryos = choices.scene1 === 'A';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8 sm:px-6">
      <main className="mx-auto max-w-3xl">
        {onHome && (
          <button
            onClick={onHome}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white"
          >
            <Home className="h-4 w-4" />
            Home
          </button>
        )}

        <section className="rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Scene 4 of 5
          </p>

          <h1 className="mb-6 text-4xl font-black text-gray-900">
            The policy table
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              {testedEmbryos
                ? 'You’re pregnant. The transfer worked. You think about the decisions that got you here.'
                : 'You’re pregnant. It took two IVF cycles and a lot of appointments.'}
            </p>

            <p>
              Six months later, you receive an email. A parliamentary inquiry is
              reviewing access to reproductive genetic technologies, and they’re
              inviting submissions from people who’ve been through IVF with
              genetic testing.
            </p>

            <p>
              One of the key questions is whether preimplantation genetic
              testing should be subsidised through Medicare. At the moment it
              costs thousands of dollars out of pocket. Public funding would
              mean universal access regardless of income, but it would also mean
              the state is paying to select which embryos get implanted and
              which don’t.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => onChoice('A')}
              className="group rounded-2xl border-2 border-blue-300 bg-blue-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                A. Recommend Medicare funding
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Public funding for universal access to genetic testing
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onChoice('B')}
              className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                B. Keep it private
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Families continue to pay out of pocket
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
