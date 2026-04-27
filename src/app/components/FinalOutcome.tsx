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
          'Public funding and mandatory screening. Everyone gets access. But the government now has a say in which embryos get implanted.',
        gradient: 'from-purple-600 to-pink-600',
      };
    }

export function FinalOutcome({ choices, onRestart, onHome }: FinalOutcomeProps) {
  const getOutcome = (): Outcome => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) {
      return {
        title: 'Universal Screening',
        summary:
          'Screening is publicly funded and becomes part of standard IVF care. This could reduce preventable genetic disease and make access more equal, but it also raises questions about how much choice families really have when screening becomes the default.',
        gradient: 'from-slate-700 to-indigo-700',
      };
    }

    if (publicFunding && !mandatory) {
      return {
        title: 'Funded Choice',
        summary:
          'Screening is available to everyone, but families decide whether to use it. This gives people more support without forcing one decision, though over time it may still create pressure to choose the “safest” embryo.',
        gradient: 'from-blue-600 to-cyan-700',
      };
    }

    return {
      title: 'Private Access',
      summary:
        'Screening remains optional and privately funded. Families keep more personal control over the decision, but access depends on money, meaning some people have more reproductive choices than others.',
      gradient: 'from-amber-600 to-orange-700',
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
            Your outcome
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            {outcome.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            {outcome.summary}
          </p>
        </div>

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
