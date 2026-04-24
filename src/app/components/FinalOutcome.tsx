import { GameState } from '../App';
import { RotateCcw, Lightbulb, Home } from 'lucide-react';
import { DecisionTree } from './DecisionTree';

interface FinalOutcomeProps {
  choices: GameState;
  onRestart: () => void;
  onHome?: () => void;
}

interface Outcome {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export function FinalOutcome({ choices, onRestart, onHome }: FinalOutcomeProps) {
  const getOutcome = (): Outcome => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';
    const usedPolygenic = choices.scene2 === 'B';

    // Medicare + Mandatory
    if (publicFunding && mandatory) {
      return {
        title: 'The Prevention State',
        subtitle: 'Public Funding + Mandatory Screening',
        description: 'Publicly funded, state-mandated embryo selection. Egalitarian in access, but the state now has a formal position on which embryos should be implanted. You\'ve chosen universal access and collective action to prevent genetic disease. But you\'ve also given the state the authority to decide which genetic variants are compatible with being born. The line between prevention and prescription may prove hard to hold.',
        color: 'text-purple-700',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-400'
      };
    }

    // Medicare + Voluntary
    if (publicFunding && !mandatory) {
      return {
        title: 'Supported Choice',
        subtitle: 'Public Funding + Voluntary Screening',
        description: 'The "moderate" position: universal access, individual choice. The question it can\'t answer — does voluntary really stay voluntary under social pressure? You\'ve chosen the compromise position: make the technology available to everyone, but let families decide. It sounds balanced. But when everyone around you is screening, when the technology is normalised, when choosing not to test means choosing risk — is that choice still meaningfully free?',
        color: 'text-blue-700',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-400'
      };
    }

    // Private + any
    return {
      title: 'The Uneven Shield',
      subtitle: 'Private Market + ' + (mandatory ? 'Mandatory' : 'Voluntary') + ' Screening',
      description: 'Technology exists, access follows income. The world we are roughly already in. Disease prevention is real for those who can pay; not for those who can\'t. You\'ve chosen to keep genetic screening in the private market. It means no state control over reproductive decisions — but it also means that protection from genetic disease tracks wealth. Some children are screened, some are not. The lottery of birth gets a new dimension.',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400'
    };
  };

  const outcome = getOutcome();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-12">
      {onHome && (
        <button
          onClick={onHome}
          className="fixed top-6 left-6 bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-lg transition-all flex items-center gap-2 z-10"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      )}
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Outcome
          </h1>
          <p className="text-gray-600">Based on your decisions through the five scenes</p>
        </div>

        <div className={`${outcome.bgColor} border-l-4 ${outcome.borderColor} rounded-r-3xl p-8 mb-8`}>
          <h2 className={`text-3xl mb-2 ${outcome.color}`}>{outcome.title}</h2>
          <p className="text-sm text-gray-600 mb-6 font-mono">{outcome.subtitle}</p>
          <p className={`text-lg leading-relaxed ${outcome.color}`}>
            {outcome.description}
          </p>
        </div>

        <div className="mb-6">
          <DecisionTree choices={choices} />
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-6">
          <h3 className="text-2xl mb-4 text-gray-800">Reflection Questions</h3>
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

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-xl mb-4 text-gray-800">About This Scenario Game</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            This decision tree was designed to explore the ethical, social, and policy dimensions of reproductive genetic technologies. Each path reveals different tensions: between individual choice and collective consequences, between prevention and prescription, between equity and autonomy. There are no simple answers — only trade-offs that matter.
          </p>
          <div className="text-center">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try a Different Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
