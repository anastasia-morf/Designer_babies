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
  summary: string;
  gradient: string;
}

export function FinalOutcome({ choices, onRestart, onHome }: FinalOutcomeProps) {
  const getOutcome = (): Outcome => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) {
      return {
        title: 'The Prevention State',
        summary:
          'Universal access, state mandate. Disease prevention as collective action — but the state now has a position on which embryos belong. Prevention and prescription start to blur.',
        gradient: 'from-purple-600 to-pink-600',
      };
    }

    if (publicFunding && !mandatory) {
      return {
        title: 'Supported Choice',
        summary:
          'Universal access, individual choice. The middle path. But when screening becomes the norm, opting out starts to mean choosing risk — is voluntary still voluntary?',
        gradient: 'from-blue-500 to-purple-600',
      };
    }

    return {
      title: 'The Uneven Shield',
      summary:
        "Roughly the world we're already in. No state control over reproduction — but protection from genetic disease tracks wealth. The lottery of birth gets a new dimension.",
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

        <div className="mb-8">
          <DecisionTree choices={choices} />
        </div>

        <div
          className={`mb-8 rounded-3xl bg-gradient-to-br ${outcome.gradient} p-6 text-white shadow-xl sm:p-10`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
            You ended at
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            {outcome.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            {outcome.summary}
          </p>
        </div>

        <section className="mb-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
          <h3 className="mb-4 text-2xl font-black text-gray-900 sm:text-3xl">
            Reflection questions
          </h3>
          <ul className="space-y-3 text-base text-gray-700">
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Were you surprised by where your choices led?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Which decision was hardest? Why?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Did your priorities shift across the scenes?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>
                What trade-offs between equity, autonomy, and prevention came up?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>How might someone with different values have chosen?</span>
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
