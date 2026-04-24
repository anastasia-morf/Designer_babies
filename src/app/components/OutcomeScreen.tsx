import { CheckCircle, AlertCircle, TrendingUp, Users, Scale, RotateCcw, Home } from 'lucide-react';
import { SelectedTraits } from '../App';
import { TraitSummary } from './TraitSummary';

interface OutcomeScreenProps {
  selectedTraits: SelectedTraits;
  budgetSpent: number;
  onRestart: () => void;
  onHome?: () => void;
}

interface Outcome {
  type: 'positive' | 'negative' | 'neutral';
  title: string;
  description: string;
}

export function OutcomeScreen({ selectedTraits, budgetSpent, onRestart, onHome }: OutcomeScreenProps) {
  const totalTraits = selectedTraits.physical.length + selectedTraits.cognitive.length + selectedTraits.health.length;

  const generateOutcomes = (): Outcome[] => {
    const outcomes: Outcome[] = [];

    if (selectedTraits.cognitive.includes('iq') || selectedTraits.cognitive.includes('memory')) {
      outcomes.push({
        type: 'positive',
        title: 'Academic Excellence',
        description: 'Your child excels in school and shows remarkable learning capabilities from an early age.'
      });
      outcomes.push({
        type: 'negative',
        title: 'Social Pressure',
        description: 'High expectations from family and teachers create significant pressure. Your child struggles with the weight of constant achievement.'
      });
    }

    if (selectedTraits.physical.includes('athleticism')) {
      outcomes.push({
        type: 'positive',
        title: 'Athletic Success',
        description: 'Your child becomes a standout athlete, receiving scholarship opportunities and recognition.'
      });
      outcomes.push({
        type: 'neutral',
        title: 'Sports Ethics Debate',
        description: 'Questions arise about fairness in youth sports. Some leagues begin requiring genetic disclosure.'
      });
    }

    if (selectedTraits.health.includes('cancer') || selectedTraits.health.includes('immunity')) {
      outcomes.push({
        type: 'positive',
        title: 'Robust Health',
        description: 'Your child rarely gets sick and shows strong resistance to common illnesses.'
      });
    }

    if (selectedTraits.physical.includes('eyecolor') || selectedTraits.physical.includes('hairtype')) {
      outcomes.push({
        type: 'neutral',
        title: 'Identity Questions',
        description: 'As your child grows, they question whether their appearance reflects who they truly are or who you wanted them to be.'
      });
    }

    if (budgetSpent > 80000) {
      outcomes.push({
        type: 'negative',
        title: 'Financial Strain',
        description: 'The high cost of genetic modifications creates long-term financial pressure on your family.'
      });
      outcomes.push({
        type: 'negative',
        title: 'Social Inequality',
        description: 'Your child grows up aware that their advantages weren\'t available to most families, leading to complex feelings about privilege.'
      });
    }

    if (totalTraits >= 6) {
      outcomes.push({
        type: 'negative',
        title: 'Unforeseen Interactions',
        description: 'Multiple genetic modifications interact in unexpected ways, requiring additional medical monitoring.'
      });
    }

    if (selectedTraits.health.includes('longevity')) {
      outcomes.push({
        type: 'neutral',
        title: 'Generational Gap',
        description: 'Your child may outlive their unenhanced peers by decades, experiencing unique psychological and social challenges.'
      });
    }

    outcomes.push({
      type: 'neutral',
      title: 'Regulatory Changes',
      description: 'New laws require genetic modification disclosure on medical records, affecting insurance and employment.'
    });

    if (selectedTraits.cognitive.includes('creativity') || selectedTraits.cognitive.includes('musicality')) {
      outcomes.push({
        type: 'positive',
        title: 'Artistic Talent',
        description: 'Your child shows exceptional creative abilities and finds joy in artistic expression.'
      });
    }

    if (selectedTraits.physical.includes('height')) {
      outcomes.push({
        type: 'neutral',
        title: 'Physical Expectations',
        description: 'While your child benefits from their height in some contexts, they also face assumptions and expectations based on appearance.'
      });
    }

    if (totalTraits === 0) {
      outcomes.push({
        type: 'neutral',
        title: 'Natural Development',
        description: 'Your child develops naturally, without genetic modifications. They navigate the world alongside both enhanced and non-enhanced peers.'
      });
    }

    return outcomes;
  };

  const outcomes = generateOutcomes();
  const positiveOutcomes = outcomes.filter(o => o.type === 'positive');
  const negativeOutcomes = outcomes.filter(o => o.type === 'negative');
  const neutralOutcomes = outcomes.filter(o => o.type === 'neutral');

  return (
    <div className="min-h-screen p-6 py-12">
      {onHome && (
        <button
          onClick={onHome}
          className="fixed top-6 left-6 bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-lg transition-all flex items-center gap-2 z-10"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      )}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Scenario Outcome
          </h1>
          <p className="text-gray-600">The consequences of your choices unfold over time</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Traits Selected</p>
              <p className="text-2xl text-gray-800">{totalTraits}</p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <Scale className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Budget Spent</p>
              <p className="text-2xl text-gray-800">${budgetSpent.toLocaleString()}</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Outcomes</p>
              <p className="text-2xl text-gray-800">{outcomes.length}</p>
            </div>
          </div>

          <div className="space-y-6">
            {positiveOutcomes.length > 0 && (
              <div>
                <h3 className="text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Positive Outcomes
                </h3>
                <div className="space-y-3">
                  {positiveOutcomes.map((outcome, index) => (
                    <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                      <h4 className="text-gray-800 mb-1">{outcome.title}</h4>
                      <p className="text-sm text-gray-600">{outcome.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {negativeOutcomes.length > 0 && (
              <div>
                <h3 className="text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  Challenges & Consequences
                </h3>
                <div className="space-y-3">
                  {negativeOutcomes.map((outcome, index) => (
                    <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                      <h4 className="text-gray-800 mb-1">{outcome.title}</h4>
                      <p className="text-sm text-gray-600">{outcome.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {neutralOutcomes.length > 0 && (
              <div>
                <h3 className="text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-yellow-600" />
                  Complex Realities
                </h3>
                <div className="space-y-3">
                  {neutralOutcomes.map((outcome, index) => (
                    <div key={index} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                      <h4 className="text-gray-800 mb-1">{outcome.title}</h4>
                      <p className="text-sm text-gray-600">{outcome.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <TraitSummary selectedTraits={selectedTraits} budgetSpent={budgetSpent} />

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-6">
          <h3 className="text-2xl mb-4 text-gray-800">Reflection Questions</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>How did your choices reflect your values and priorities?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Were you surprised by any of the outcomes? Why or why not?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>Should access to genetic enhancements be based on ability to pay?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>What rights should children have regarding modifications made before birth?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">•</span>
              <span>How might widespread genetic modification change society and human relationships?</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl mb-4 text-gray-800">Key Takeaways</h3>
          <div className="space-y-3 text-gray-600 mb-6">
            <p>
              This scenario demonstrates that genetic engineering technology raises profound ethical,
              social, and personal questions. Every choice carries both benefits and risks, and
              outcomes often include unintended consequences.
            </p>
            <p>
              Real genetic technologies are advancing rapidly, making these once-theoretical questions
              increasingly relevant to policy makers, scientists, and society as a whole.
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Different Choices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
