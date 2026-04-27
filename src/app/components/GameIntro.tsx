import { CheckCircle2, Circle, GitBranch, Sparkles } from 'lucide-react';

import { GameState } from '../App';

interface DecisionTreeProps {
  choices: GameState;
}

type ChoiceValue = 'A' | 'B';

interface SceneSummary {
  scene: number;
  title: string;
  question: string;
  optionA: string;
  optionB: string;
}

export function DecisionTree({ choices }: DecisionTreeProps) {
  const getOutcome = () => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) return 'Prevention State';
    if (publicFunding && !mandatory) return 'Supported Choice';
    return 'Uneven Shield';
  };

  const scene3Options =
    choices.scene2 === 'B'
      ? {
          optionA: 'Implant Embryo 2',
          optionB: 'Implant Embryo 1',
        }
      : {
          optionA: 'Implant the embryo',
          optionB: 'Start another cycle',
        };

  const scenes: SceneSummary[] = [
    {
      scene: 1,
      title: 'The clinic',
      question: 'Test the embryos?',
      optionA: 'Test the embryos',
      optionB: 'Implant without testing',
    },
    {
      scene: 2,
      title: 'How far do you screen?',
      question: 'Which screening pathway?',
      optionA: 'Disease variants only',
      optionB: 'Full polygenic panel',
    },
    {
      scene: 3,
      title: 'A difficult result',
      question: 'Which embryo pathway?',
      optionA: scene3Options.optionA,
      optionB: scene3Options.optionB,
    },
    {
      scene: 4,
      title: 'The policy table',
      question: 'Medicare funding?',
      optionA: 'Recommend Medicare funding',
      optionB: 'Keep it private',
    },
    {
      scene: 5,
      title: '2045: mandatory or voluntary?',
      question: 'Future screening policy?',
      optionA: 'Support mandatory screening',
      optionB: 'Keep it voluntary',
    },
  ];

  const getChoice = (scene: number) =>
    choices[`scene${scene}` as keyof GameState] as ChoiceValue | null;

  const optionClasses = (selected: boolean, variant: ChoiceValue) => {
    if (selected && variant === 'A') {
      return 'border-blue-400 bg-blue-50 text-blue-900 shadow-sm';
    }

    if (selected && variant === 'B') {
      return 'border-purple-400 bg-purple-50 text-purple-900 shadow-sm';
    }

    return 'border-gray-200 bg-white text-gray-500';
  };

  const choiceLabel = (scene: SceneSummary) => {
    const selected = getChoice(scene.scene);

    if (selected === 'A') return scene.optionA;
    if (selected === 'B') return scene.optionB;
    return 'No choice recorded';
  };

  return (
    <section className="mt-10 rounded-3xl border border-purple-100 bg-white/90 p-5 shadow-xl backdrop-blur sm:p-8">
      <div className="mb-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-3 shadow-lg">
            <GitBranch className="h-7 w-7 text-white" />
          </div>
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
          Decision tree
        </p>

        <h3 className="text-3xl font-black text-gray-900">
          Your path through the game
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
          This shows the choices you made across the five scenes and how they
          led to your final outcome.
        </p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {scenes.map((scene) => {
          const selected = getChoice(scene.scene);

          return (
            <div
              key={scene.scene}
              className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-purple-700 shadow-sm">
                  Scene {scene.scene}
                </span>

                {selected ? (
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
              </div>

              <h4 className="mb-2 text-sm font-bold text-gray-900">
                {scene.title}
              </h4>

              <p className="text-sm leading-relaxed text-gray-700">
                {choiceLabel(scene)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center text-white shadow-lg">
        <Sparkles className="mx-auto mb-3 h-7 w-7" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-100">
          Final outcome
        </p>
        <p className="mt-2 text-2xl font-black">{getOutcome()}</p>
      </div>

      <details className="group rounded-2xl border border-purple-100 bg-white p-4 sm:p-5" open>
        <summary className="cursor-pointer list-none text-left">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Full decision tree
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Tap to open or close on mobile.
              </p>
            </div>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-700 transition group-open:bg-pink-100 group-open:text-pink-700">
              View
            </span>
          </div>
        </summary>

        <div className="mt-5 space-y-4">
          {scenes.map((scene) => {
            const selected = getChoice(scene.scene);

            return (
              <div
                key={scene.scene}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
              >
                <div className="mb-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-600">
                    Scene {scene.scene}
                  </p>
                  <h5 className="mt-1 text-base font-bold text-gray-900">
                    {scene.title}
                  </h5>
                  <p className="mt-1 text-sm text-gray-600">
                    {scene.question}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div
                    className={`rounded-xl border-2 p-4 ${optionClasses(
                      selected === 'A',
                      'A'
                    )}`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                        A
                      </span>
                      <span className="text-sm font-bold">
                        {scene.optionA}
                      </span>
                    </div>
                    {selected === 'A' && (
                      <p className="text-xs font-semibold text-blue-700">
                        Your choice
                      </p>
                    )}
                  </div>

                  <div
                    className={`rounded-xl border-2 p-4 ${optionClasses(
                      selected === 'B',
                      'B'
                    )}`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-sm font-black text-white">
                        B
                      </span>
                      <span className="text-sm font-bold">
                        {scene.optionB}
                      </span>
                    </div>
                    {selected === 'B' && (
                      <p className="text-xs font-semibold text-purple-700">
                        Your choice
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </details>
    </section>
  );
}
