import { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

import { GameState } from '../App';

interface DecisionTreeProps {
  choices: GameState;
}

type ChoiceValue = 'A' | 'B';
type OutcomeId = 'universal' | 'funded' | 'private';

interface SceneOption {
  label: string;
  blurb: string;
}

interface Scene {
  scene: number;
  title: string;
  optionA: SceneOption;
  optionB: SceneOption;
}

interface OutcomeData {
  id: OutcomeId;
  title: string;
  blurb: string;
  gradient: string;
}

export function DecisionTree({ choices }: DecisionTreeProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const scene3Options =
    choices.scene2 === 'B'
      ? {
          optionA: {
            label: 'Implant Embryo 2',
            blurb: 'Lower disease risk, average cognitive scores.',
          },
          optionB: {
            label: 'Implant Embryo 1',
            blurb: 'Higher cognitive scores, but higher diabetes risk.',
          },
        }
      : {
          optionA: {
            label: 'Implant the embryo',
            blurb: 'Implant despite the uncertain genetic flag.',
          },
          optionB: {
            label: 'Start another cycle',
            blurb: 'Try another IVF cycle for a cleaner result.',
          },
        };

  const scenes: Scene[] = [
    {
      scene: 1,
      title: 'The clinic',
      optionA: {
        label: 'Test the embryos',
        blurb: 'Screen for chromosomal issues before transfer.',
      },
      optionB: {
        label: 'Implant without testing',
        blurb: 'Standard IVF, no genetic check.',
      },
    },
    {
      scene: 2,
      title: 'How far do you screen?',
      optionA: {
        label: 'Disease variants only',
        blurb: 'Basic panel, just the serious single-gene stuff.',
      },
      optionB: {
        label: 'Full polygenic panel',
        blurb: 'Risk scores for complex conditions and traits.',
      },
    },
    {
      scene: 3,
      title: 'A difficult result',
      ...scene3Options,
    },
    {
      scene: 4,
      title: 'The policy table',
      optionA: {
        label: 'Recommend Medicare funding',
        blurb: 'Public funding so screening is for everyone.',
      },
      optionB: {
        label: 'Keep it private',
        blurb: 'Stays private, paid out of pocket.',
      },
    },
    {
      scene: 5,
      title: '2045: the future',
      optionA: {
        label: 'Support mandatory screening',
        blurb: 'Screening becomes required for all IVF.',
      },
      optionB: {
        label: 'Keep it voluntary',
        blurb: 'Screening stays optional, families decide.',
      },
    },
  ];

  const outcomes: OutcomeData[] = [
    {
      id: 'universal',
      title: 'Universal Screening',
      blurb:
        'Screening is publicly funded and required. Everyone has access, but families have less individual choice about whether to use it.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 'funded',
      title: 'Funded Choice',
      blurb:
        'Screening is publicly funded, but families can choose whether to use it. This improves access while keeping individual choice.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 'private',
      title: 'Private Access',
      blurb:
        'Screening is optional and privately paid. Families who can afford it have access, while others may not.',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];
  
  const getChoice = (s: number): ChoiceValue | null =>
    choices[`scene${s}` as keyof GameState] as ChoiceValue | null;

  const userOutcome: OutcomeId =
    choices.scene4 === 'A' && choices.scene5 === 'A'
      ? 'universal'
      : choices.scene4 === 'A' && choices.scene5 === 'B'
        ? 'funded'
        : 'private';

  return (
    <section className="rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur sm:p-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
          Decision tree
        </p>
        <h3 className="text-3xl font-black text-gray-900 sm:text-4xl">
          The path you took
        </h3>
      </div>

      <div className="mx-auto max-w-2xl">
        {scenes.map((scene, idx) => {
          const selected = getChoice(scene.scene);
          const isA = selected === 'A';
          const isB = selected === 'B';

          return (
            <div key={scene.scene}>
              <div className="flex justify-center">
                <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-center shadow-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 sm:text-xs">
                    Scene {scene.scene}
                  </p>
                  <p className="text-sm font-black text-white sm:text-base">
                    {scene.title}
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-2" aria-hidden="true">
                <ChevronDown className="h-5 w-5 text-purple-300" />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <OptionBox
                  letter="A"
                  option={scene.optionA}
                  isChosen={isA}
                  isActive={activeKey === `s${scene.scene}-A`}
                  onActivate={() => setActiveKey(`s${scene.scene}-A`)}
                  onDeactivate={() => setActiveKey(null)}
                />
                <OptionBox
                  letter="B"
                  option={scene.optionB}
                  isChosen={isB}
                  isActive={activeKey === `s${scene.scene}-B`}
                  onActivate={() => setActiveKey(`s${scene.scene}-B`)}
                  onDeactivate={() => setActiveKey(null)}
                />
              </div>

              {idx < scenes.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden="true">
                  <ChevronDown className="h-5 w-5 text-purple-300" />
                </div>
              )}
            </div>
          );
        })}

        <div className="my-6 flex justify-center" aria-hidden="true">
          <ChevronDown className="h-5 w-5 text-purple-400" />
        </div>

        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
            Outcomes
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {outcomes.map((o) => (
            <OutcomeBox
              key={o.id}
              outcome={o}
              isUser={o.id === userOutcome}
              isActive={activeKey === `out-${o.id}`}
              onActivate={() => setActiveKey(`out-${o.id}`)}
              onDeactivate={() => setActiveKey(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface OptionBoxProps {
  letter: 'A' | 'B';
  option: SceneOption;
  isChosen: boolean;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

function OptionBox({
  letter,
  option,
  isChosen,
  isActive,
  onActivate,
  onDeactivate,
}: OptionBoxProps) {
  const colors =
    letter === 'A'
      ? {
          border: 'border-blue-400',
          bg: 'bg-blue-50',
          text: 'text-blue-900',
          dot: 'bg-blue-500',
          check: 'text-blue-600',
        }
      : {
          border: 'border-purple-400',
          bg: 'bg-purple-50',
          text: 'text-purple-900',
          dot: 'bg-purple-500',
          check: 'text-purple-600',
        };

  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        className={`w-full rounded-2xl border-2 p-3 text-left transition-all sm:p-4 ${
          isChosen
            ? `${colors.border} ${colors.bg} shadow-sm`
            : 'border-gray-200 bg-gray-50 opacity-60 hover:opacity-100 focus:opacity-100'
        }`}
      >
        <div className="mb-2 flex items-center gap-2">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black text-white ${
              isChosen ? colors.dot : 'bg-gray-400'
            }`}
          >
            {letter}
          </span>
          {isChosen && (
            <CheckCircle2 className={`h-4 w-4 ${colors.check}`} />
          )}
        </div>
        <p
          className={`text-sm font-bold leading-snug ${
            isChosen ? colors.text : 'text-gray-600'
          }`}
        >
          {option.label}
        </p>
      </button>

      {isActive && (
        <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-44 -translate-x-1/2 rounded-xl bg-gray-900 px-3 py-2.5 text-xs leading-relaxed text-white shadow-xl sm:w-56">
          <div
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"
            aria-hidden="true"
          />
          {option.blurb}
        </div>
      )}
    </div>
  );
}

interface OutcomeBoxProps {
  outcome: OutcomeData;
  isUser: boolean;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

function OutcomeBox({
  outcome,
  isUser,
  isActive,
  onActivate,
  onDeactivate,
}: OutcomeBoxProps) {
  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        className={`w-full rounded-2xl p-4 text-center transition-all ${
          isUser
            ? `bg-gradient-to-br ${outcome.gradient} text-white shadow-lg`
            : 'border-2 border-gray-200 bg-gray-50 text-gray-600 opacity-60 hover:opacity-100 focus:opacity-100'
        }`}
      >
        {isUser && (
          <div className="mb-2 flex justify-center">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
        )}
        <p className="text-sm font-black leading-tight sm:text-base">
          {outcome.title}
        </p>
      </button>

      {isActive && (
        <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-xl bg-gray-900 px-3 py-2.5 text-xs leading-relaxed text-white shadow-xl">
          <div
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"
            aria-hidden="true"
          />
          {outcome.blurb}
        </div>
      )}
    </div>
  );
}
