import { ArrowRight, Home } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene2Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene2({ choices, onChoice, onHome }: Scene2Props) {
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
            Scene 2 of 5
          </p>

          <h1 className="mb-6 text-4xl font-black text-gray-900">
            How far do you screen?
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            {testedEmbryos ? (
              <>
                <p>
                  Before you leave the appointment, the counsellor mentions an expanded testing option.
                </p>

                <p>
                  Recent advances in genetic testing have made it possible for some companies overseas to offer embryo reports that claim to estimate traits such as height, hair loss, and cognitive ability. These are based on polygenic scores, which combine many small genetic differences to estimate a possible outcome.
                </p>

                <p>
                  The counsellor explains that this kind of testing is not part of standard IVF practice in Australia. However, one US company, Herasight, which charges $50,000 USD to assess an unlimited number of embryos, has confirmed that it had already worked with couples undergoing IVF at clinics from countries such as the UK.
                </p>

                <p>
                  The counsellor also explains that these scores are not certain predictions. They do not tell you what a child will definitely be like. They only suggest statistical differences, and the science is still limited when used to choose between embryos.
                </p>

                <p>
                  “More information can feel helpful,” the doctor says. “But it can also create uncertainty and difficult choices.”
                </p>

                <p>
                  Do you want to go ahead with the expanded testing?
                </p>
              </>
            ) : (
              <>
                <p>
                  Unfortunately, you had a miscarriage and you are back at the clinic for a second IVF cycle. This time, you agree to do the standard testing.
                </p>

                <p>
                  Recent advances in genetic testing have made it possible for some companies overseas to offer embryo reports that claim to estimate traits such as height, hair loss, and cognitive ability. These are based on polygenic scores, which combine many small genetic differences to estimate a possible outcome.
                </p>

                <p>
                  The counsellor explains that this kind of testing is not part of standard IVF practice in Australia. However, one US company, Herasight, which charges $50,000 USD to assess an unlimited number of embryos, has confirmed that it had already worked with couples undergoing IVF at clinics from countries such as the UK. The company is happy to work with you free of charge, to promote their program in Australia.
                </p>

                <p>
                  The counsellor also explains that these scores are not certain predictions. They do not tell you what a child will definitely be like. They only suggest statistical differences, and the science is still limited when used to choose between embryos.
                </p>

                <p>
                  Do you want to go ahead with the expanded testing?
                </p>
              </>
            )}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => onChoice('A')}
              className="group rounded-2xl border-2 border-blue-300 bg-blue-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                A. Standard disease testing only
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Screen for serious genetic conditions, without expanded trait predictions
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onChoice('B')}
              className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                B. Expanded testing
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Add polygenic scores for complex conditions and traits
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
