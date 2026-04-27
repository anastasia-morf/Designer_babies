import { ArrowDown, CheckCircle2 } from 'lucide-react';

import { GameState } from '../App';

interface DecisionTreeProps {
  choices: GameState;
}

type ChoiceValue = 'A' | 'B';
type OutcomeId = 'prevention' | 'supported' | 'uneven';

interface SceneSummary {
  scene: number;
  title: string;
  optionA: string;
  optionB: string;
}

interface OutcomeCard {
  id: OutcomeId;
  title: string;
  gradient: string;
}

export function DecisionTree({ choices }: DecisionTreeProps) {
  const scene3Options =
    choices.scene2 === 'B'
      ? { optionA: 'Implant Embryo 2', optionB: 'Implant Embryo 1' }
      : { optionA: 'Implant the embryo', optionB: 'Start another cycle' };

  const scenes: SceneSummary[] = [
    {
      scene: 1,
      title: 'The clinic',
      optionA: 'Test the embryos',
      optionB: 'Implant without testing',
    },
    {
      scene: 2,
      title: 'How far do you screen?',
      optionA: 'Disease variants only',
      optionB: 'Full polygenic panel',
    },
    {
      scene: 3,
      title: 'A difficult result',
      ...scene3Options,
    },
    {
      scene: 4,
      title: 'The policy table',
      optionA: 'Recommend Medicare funding',
      optionB: 'Keep it private',
    },
    {
      scene: 5,
      title: '2045: the future',
      optionA: 'Support mandatory screening',
      optionB: 'Keep it voluntary',
    },
  ];

  const outcomes: OutcomeCard[] = [
    {
      id: 'prevention',
      title: 'The Prevention State',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 'supported',
      title: 'Supported Choice',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 'uneven',
      title: 'The Uneven Shield',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  const getChoice = (scene: number): ChoiceValue | null =>
    choices[`scene${scene}` as keyof GameState] as ChoiceValue | null;

  const getUserOutcome = (): OutcomeId => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) return 'prevention';
    if (publicFunding && !mandatory) return 'supported';
    return 'uneven';
  };

  const userOutcome = getUserOutcome();

  return (
    <section className="rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur sm:p-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
          Decision tree
        </p>

        <h3 className="text-3xl font-black text-gray-900 sm:text-4xl">
          The path you took
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
          Your choices are highlighted. Faded options show what could have
          happened.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        {scenes.map((scene, idx) => {
          const selected = getChoice(scene.scene);
          const isA = selected === 'A';
          const isB = selected === 'B';

          return (
            <div key={scene.scene}>
              <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
                  Scene {scene.scene}
                </span>
                <span className="text-base font-bold text-gray-900 sm:text-lg">
                  {scene.title}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div
                  className={`rounded-2xl border-2 p-3 transition-all sm:p-4 ${
                    isA
                      ? 'border-blue-400 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-gray-50 opacity-50'
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black text-white ${
                        isA ? 'bg-blue-500' : 'bg-gray-400'
                      }`}
                    >
                      A
                    </span>
                    {isA && (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    )}
                  </div>
                  <p
                    className={`text-sm font-bold leading-snug ${
                      isA ? 'text-blue-900' : 'text-gray-600'
                    }`}
                  >
                    {scene.optionA}
                  </p>
                </div>

                <div
                  className={`rounded-2xl border-2 p-3 transition-all sm:p-4 ${
                    isB
                      ? 'border-purple-400 bg-purple-50 shadow-sm'
                      : 'border-gray-200 bg-gray-50 opacity-50'
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black text-white ${
                        isB ? 'bg-purple-500' : 'bg-gray-400'
                      }`}
                    >
                      B
                    </span>
                    {isB && (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-600" />
                    )}
                  </div>
                  <p
                    className={`text-sm font-bold leading-snug ${
                      isB ? 'text-purple-900' : 'text-gray-600'
                    }`}
                  >
                    {scene.optionB}
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-3" aria-hidden="true">
                <ArrowDown
                  className={`h-4 w-4 ${
                    idx === scenes.length - 1
                      ? 'text-purple-400'
                      : 'text-purple-300'
                  }`}
                />
              </div>
            </div>
          );
        })}

        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
            Possible outcomes
          </span>
          <span className="text-base font-bold text-gray-900 sm:text-lg">
            Where you could have landed
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
          {outcomes.map((outcome) => {
            const isUser = outcome.id === userOutcome;

            return (
              <div
                key={outcome.id}
                className={`rounded-2xl p-4 text-center transition-all ${
                  isUser
                    ? `bg-gradient-to-br ${outcome.gradient} text-white shadow-lg`
                    : 'border-2 border-gray-200 bg-gray-50 text-gray-600 opacity-60'
                }`}
              >
                {isUser && (
                  <div className="mb-2 flex justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                )}
                <p className="text-base font-black leading-tight sm:text-lg">
                  {outcome.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
