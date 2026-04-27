import { ArrowDown, Sparkles } from 'lucide-react';

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
  optionAContext: string;
  optionB: string;
  optionBContext: string;
}

export function DecisionTree({ choices }: DecisionTreeProps) {
  const getOutcome = () => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) return 'The Prevention State';
    if (publicFunding && !mandatory) return 'Supported Choice';
    return 'The Uneven Shield';
  };

  const scene3Options =
    choices.scene2 === 'B'
      ? {
          optionA: 'Implant Embryo 2',
          optionAContext:
            'You chose lower predicted cardiometabolic risk over higher cognitive and height scores.',
          optionB: 'Implant Embryo 1',
          optionBContext:
            'You chose higher predicted cognitive and height scores, accepting elevated diabetes risk.',
        }
      : {
          optionA: 'Implant the embryo',
          optionAContext:
            'You accepted the variant of uncertain significance and moved forward with the transfer.',
          optionB: 'Start another cycle',
          optionBContext:
            'You chose to try again rather than implant an embryo carrying an uncertain flag.',
        };

  const scenes: SceneSummary[] = [
    {
      scene: 1,
      title: 'The clinic',
      question: 'Test the embryos before transfer?',
      optionA: 'Test the embryos',
      optionAContext:
        'You chose to screen for chromosomal abnormalities before implantation.',
      optionB: 'Implant without testing',
      optionBContext:
        'You chose to proceed with standard IVF and skip preimplantation genetic testing.',
    },
    {
      scene: 2,
      title: 'How far do you screen?',
      question: 'Which screening pathway?',
      optionA: 'Disease variants only',
      optionAContext:
        'You chose a basic panel limited to serious single-gene conditions.',
      optionB: 'Full polygenic panel',
      optionBContext:
        'You added polygenic risk scores for complex conditions and traits.',
    },
    {
      scene: 3,
      title: 'A difficult result',
      question: 'Which embryo pathway?',
      ...scene3Options,
    },
    {
      scene: 4,
      title: 'The policy table',
      question: 'Public funding for genetic screening?',
      optionA: 'Recommend Medicare funding',
      optionAContext:
        'You backed public funding so genetic screening is universally accessible.',
      optionB: 'Keep it private',
      optionBContext:
        'You chose to keep screening in the private market, paid out of pocket.',
    },
    {
      scene: 5,
      title: '2045: mandatory or voluntary?',
      question: 'Future screening policy?',
      optionA: 'Support mandatory screening',
      optionAContext:
        'You backed a bill requiring screening for all IVF pregnancies.',
      optionB: 'Keep it voluntary',
      optionBContext:
        'You preserved individual choice and rejected mandatory screening.',
    },
  ];

  const getChoice = (scene: number): ChoiceValue | null =>
    choices[`scene${scene}` as keyof GameState] as ChoiceValue | null;

  return (
    <section className="rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur sm:p-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
          Decision tree
        </p>

        <h3 className="text-3xl font-black text-gray-900 sm:text-4xl">
          Your path through the game
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
          The five decisions you made and where they led.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        {scenes.map((scene, idx) => {
          const selected = getChoice(scene.scene);

          const isA = selected === 'A';
          const isB = selected === 'B';

          const chosenLabel =
            isA ? scene.optionA : isB ? scene.optionB : 'No choice recorded';

          const chosenContext = isA
            ? scene.optionAContext
            : isB
              ? scene.optionBContext
              : '';

          const cardClasses = isA
            ? 'border-blue-300 bg-blue-50'
            : isB
              ? 'border-purple-300 bg-purple-50'
              : 'border-gray-200 bg-gray-50';

          const titleClasses = isA
            ? 'text-blue-900'
            : isB
              ? 'text-purple-900'
              : 'text-gray-700';

          const contextClasses = isA
            ? 'text-blue-800'
            : isB
              ? 'text-purple-800'
              : 'text-gray-600';

          return (
            <div key={scene.scene}>
              <div className={`rounded-2xl border-2 p-5 sm:p-6 ${cardClasses}`}>
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-purple-600 shadow-sm">
                    Scene {scene.scene}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    {scene.question}
                  </span>
                </div>

                <h4 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                  {scene.title}
                </h4>

                <div className="space-y-2">
                  <p className={`text-base font-bold sm:text-lg ${titleClasses}`}>
                    {selected ? `${selected}. ${chosenLabel}` : chosenLabel}
                  </p>

                  {chosenContext && (
                    <p className={`text-sm leading-relaxed ${contextClasses}`}>
                      {chosenContext}
                    </p>
                  )}
                </div>
              </div>

              {idx < scenes.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden="true">
                  <ArrowDown className="h-5 w-5 text-purple-300" />
                </div>
              )}
            </div>
          );
        })}

        <div className="flex justify-center py-3" aria-hidden="true">
          <ArrowDown className="h-5 w-5 text-purple-400" />
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center text-white shadow-lg sm:p-8">
          <Sparkles className="mx-auto mb-3 h-7 w-7" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-100 sm:text-sm">
            Final outcome
          </p>
          <p className="mt-2 text-2xl font-black sm:text-3xl">{getOutcome()}</p>
        </div>
      </div>
    </section>
  );
}
