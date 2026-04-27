import { Home, RotateCcw } from 'lucide-react';

import { GameState } from '../App';
import { DecisionTree } from './DecisionTree';

interface FinalOutcomeProps {
  choices: GameState;
  onRestart: () => void;
  onHome?: () => void;
}

interface Outcome {
  title: string;
  description: string;
  gradient: string;
}

export function FinalOutcome({ choices, onRestart, onHome }: FinalOutcomeProps) {
  const getOutcome = (): Outcome => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) {
      return {
        title: 'The Prevention State',
        description:
          "Publicly funded, state-mandated embryo selection. Egalitarian in access, but the state now has a formal position on which embryos should be implanted. You've chosen universal access and collective action to prevent genetic disease. But you've also given the state the authority to decide which genetic variants are compatible with being born. The line between prevention and prescription may prove hard to hold.",
        gradient: 'from-purple-600 to-pink-600',
      };
    }

    if (publicFunding && !mandatory) {
      return {
        title: 'Supported Choice',
        description:
          'The "moderate" position: universal access, individual choice. The question it can\'t answer — does voluntary really stay voluntary under social pressure? You\'ve chosen the compromise position: make the technology available to everyone, but let families decide. It sounds balanced. But when everyone around you is screening, when the technology is normalised, when choosing not to test means choosing risk — is that choice still meaningfully free?',
        gradient: 'from-blue-500 to-purple-600',
      };
    }

    return {
      title: 'The Uneven Shield',
      description:
        "Technology exists, access follows income. The world we are roughly already in. Disease prevention is real for those who can pay; not for those who can't. You've chosen to keep genetic screening in the private market. It means no state control over reproductive decisions — but it also means that protection from genetic disease tracks wealth. Some children are screened, some are not. The lottery of birth gets a new dimension.",
      gradient: 'from-amber-500 to-orange-600',
    };
  };

  const outcome = getOutcome();

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

        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Your outcome
          </p>
          <h1 className="text-4xl font-black text-gray-900 sm:text-5xl">
            {outcome.title}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600 sm:text-base">
            Based on your decisions through the five scenes.
          </p>
        </div>

        <div
          className={`mb-8 rounded-3xl bg-gradient-to-br ${outcome.gradient} p-6 text-white shadow-xl sm:p-10`}
        >
          <p className="text-base leading-relaxed sm:text-lg">
            {outcome.description}
          </p>
        </div>

        <div className="mb-8">
          <DecisionTree choices={choices} />
        </div>

        <section className="mb-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
          <h3 className="mb-4 text-2xl font-black text-gray-900 sm:text-3xl">
            Reflection questions
          </h3>
          <ul className="space-y-3 text-base text-gray-700">
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Were you surprised by the world your choices created?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Which decision was hardest for you? Why?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Did your priorities shift as you moved through the scenarios?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>
                What trade-offs between equity, autonomy, and prevention did you
                notice?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>
                How do you think others with different values might have chosen
                differently?
              </span>
            </li>
          </ul>
        </section>

        <div className="pb-4 text-center">
          <button
            onClick={onRestart}
            className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
          >
            <RotateCcw className="h-5 w-5" />
            Try a different path
          </button>
        </div>
      </main>
    </div>
  );
}
