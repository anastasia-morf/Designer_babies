import { RotateCcw, Home } from 'lucide-react';

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
  color: string;
  bgColor: string;
  borderColor: string;
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
        color: 'text-purple-700',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-400',
      };
    }

    if (publicFunding && !mandatory) {
      return {
        title: 'Supported Choice',
        description:
          'The "moderate" position: universal access, individual choice. The question it can\'t answer — does voluntary really stay voluntary under social pressure? You\'ve chosen the compromise position: make the technology available to everyone, but let families decide. It sounds balanced. But when everyone around you is screening, when the technology is normalised, when choosing not to test means choosing risk — is that choice still meaningfully free?',
        color: 'text-blue-700',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-400',
      };
    }

    return {
      title: 'The Uneven Shield',
      description:
        "Technology exists, access follows income. The world we are roughly already in. Disease prevention is real for those who can pay; not for those who can't. You've chosen to keep genetic screening in the private market. It means no state control over reproductive decisions — but it also means that protection from genetic disease tracks wealth. Some children are screened, some are not. The lottery of birth gets a new dimension.",
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
    };
  };

  const outcome = getOutcome();

  return (
    <div className="flex min-h-screen items-center justify-center p-6 py-12">
      {onHome && (
        <button
          onClick={onHome}
          className="fixed top-6 left-6 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-700 shadow-lg transition-all hover:bg-gray-100"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </button>
      )}

      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl text-transparent">
            Your Outcome
          </h1>
          <p className="text-gray-600">
            Based on your decisions through the five scenes
          </p>
        </div>

        <div
          className={`${outcome.bgColor} border-l-4 ${outcome.borderColor} mb-8 rounded-r-3xl p-8`}
        >
          <h2 className={`mb-4 text-3xl ${outcome.color}`}>{outcome.title}</h2>
          <p className={`text-lg leading-relaxed ${outcome.color}`}>
            {outcome.description}
          </p>
        </div>

        <div className="mb-8">
          <DecisionTree choices={choices} />
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 mb-8">
          <h3 className="mb-4 text-2xl text-gray-800">Reflection Questions</h3>
          <ul className="space-y-3 text-gray-700">
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
              <span>What trade-offs between equity, autonomy, and prevention did you notice?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>How do you think others with different values might have chosen differently?</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 text-lg text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
          >
            <RotateCcw className="h-5 w-5" />
            Try a Different Path
          </button>
        </div>
      </div>
    </div>
  );
}
