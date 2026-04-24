import { SelectedTraits } from '../App';
import { Heart, Brain, Activity } from 'lucide-react';

interface TraitSummaryProps {
  selectedTraits: SelectedTraits;
  budgetSpent: number;
}

const traitInfo: Record<string, { name: string; cost: number; category: 'physical' | 'cognitive' | 'health' }> = {
  height: { name: 'Increased Height', cost: 15000, category: 'physical' },
  athleticism: { name: 'Enhanced Athleticism', cost: 25000, category: 'physical' },
  eyecolor: { name: 'Specific Eye Color', cost: 8000, category: 'physical' },
  hairtype: { name: 'Hair Characteristics', cost: 8000, category: 'physical' },
  memory: { name: 'Enhanced Memory', cost: 30000, category: 'cognitive' },
  iq: { name: 'Higher IQ Potential', cost: 35000, category: 'cognitive' },
  creativity: { name: 'Creative Aptitude', cost: 20000, category: 'cognitive' },
  musicality: { name: 'Musical Ability', cost: 18000, category: 'cognitive' },
  immunity: { name: 'Enhanced Immune System', cost: 40000, category: 'health' },
  cancer: { name: 'Cancer Resistance', cost: 50000, category: 'health' },
  longevity: { name: 'Extended Lifespan', cost: 45000, category: 'health' },
  metabolism: { name: 'Optimized Metabolism', cost: 22000, category: 'health' }
};

export function TraitSummary({ selectedTraits, budgetSpent }: TraitSummaryProps) {
  const totalTraits = selectedTraits.physical.length + selectedTraits.cognitive.length + selectedTraits.health.length;

  const categories = [
    {
      key: 'physical' as const,
      title: 'Physical Traits',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300'
    },
    {
      key: 'cognitive' as const,
      title: 'Cognitive Traits',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300'
    },
    {
      key: 'health' as const,
      title: 'Health Traits',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
      <h3 className="text-2xl mb-6 text-gray-800">Your Genetic Selections</h3>
      <p className="text-gray-600 mb-8">
        A summary of the {totalTraits} genetic modification{totalTraits !== 1 ? 's' : ''} you selected, totaling ${budgetSpent.toLocaleString()}.
      </p>

      <div className="space-y-6">
        {categories.map((category) => {
          const categoryTraits = selectedTraits[category.key];
          const Icon = category.icon;

          if (categoryTraits.length === 0) {
            return (
              <div key={category.key} className="opacity-50">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${category.color}`} />
                  <h4 className="text-lg text-gray-800">{category.title}</h4>
                </div>
                <p className="text-sm text-gray-500 ml-8">No traits selected</p>
              </div>
            );
          }

          return (
            <div key={category.key}>
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`w-5 h-5 ${category.color}`} />
                <h4 className="text-lg text-gray-800">{category.title}</h4>
                <span className="text-sm text-gray-500">({categoryTraits.length})</span>
              </div>

              <div className="ml-8 space-y-2">
                {categoryTraits.map((traitId) => {
                  const trait = traitInfo[traitId];
                  return (
                    <div
                      key={traitId}
                      className={`flex items-center justify-between p-3 rounded-lg border-2 ${category.borderColor} ${category.bgColor}`}
                    >
                      <div className="flex items-center gap-3">
                        <svg className={`w-5 h-5 ${category.color}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        <span className="text-gray-800">{trait.name}</span>
                      </div>
                      <span className="text-gray-600">${trait.cost.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-gray-800">
            <span className="text-lg">Total Investment:</span>
          </div>
          <div className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${budgetSpent.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-600 text-sm">
            Remaining Budget:
          </div>
          <div className="text-lg text-gray-600">
            ${(100000 - budgetSpent).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
