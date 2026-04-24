import { useState } from 'react';
import { Heart, Brain, Activity, DollarSign, Info, Home } from 'lucide-react';
import { SelectedTraits } from '../App';

interface Trait {
  id: string;
  name: string;
  description: string;
  cost: number;
  category: 'physical' | 'cognitive' | 'health';
  ethicalConcern?: string;
}

const traits: Trait[] = [
  {
    id: 'height',
    name: 'Increased Height',
    description: 'Genetic modifications to promote above-average height (6\'2" - 6\'5")',
    cost: 15000,
    category: 'physical',
    ethicalConcern: 'May reinforce societal biases about physical appearance'
  },
  {
    id: 'athleticism',
    name: 'Enhanced Athleticism',
    description: 'Improved muscle fiber composition and oxygen efficiency',
    cost: 25000,
    category: 'physical',
    ethicalConcern: 'Questions about fairness in sports and natural human variation'
  },
  {
    id: 'eyecolor',
    name: 'Specific Eye Color',
    description: 'Choose exact eye color (blue, green, brown, amber)',
    cost: 8000,
    category: 'physical',
    ethicalConcern: 'Reduces genetic diversity and natural variation'
  },
  {
    id: 'hairtype',
    name: 'Hair Characteristics',
    description: 'Select hair color, texture, and thickness',
    cost: 8000,
    category: 'physical'
  },
  {
    id: 'memory',
    name: 'Enhanced Memory',
    description: 'Improved hippocampus function for better memory retention',
    cost: 30000,
    category: 'cognitive',
    ethicalConcern: 'Could create cognitive inequality between enhanced and non-enhanced individuals'
  },
  {
    id: 'iq',
    name: 'Higher IQ Potential',
    description: 'Genetic factors associated with increased cognitive ability',
    cost: 35000,
    category: 'cognitive',
    ethicalConcern: 'Reinforces problematic assumptions about intelligence measurement'
  },
  {
    id: 'creativity',
    name: 'Creative Aptitude',
    description: 'Enhanced neural pathways associated with creative thinking',
    cost: 20000,
    category: 'cognitive'
  },
  {
    id: 'musicality',
    name: 'Musical Ability',
    description: 'Improved auditory processing and rhythm recognition',
    cost: 18000,
    category: 'cognitive'
  },
  {
    id: 'immunity',
    name: 'Enhanced Immune System',
    description: 'Stronger resistance to common diseases and infections',
    cost: 40000,
    category: 'health'
  },
  {
    id: 'cancer',
    name: 'Cancer Resistance',
    description: 'Reduced genetic markers for various cancers',
    cost: 50000,
    category: 'health',
    ethicalConcern: 'Creates two-tier healthcare system based on wealth'
  },
  {
    id: 'longevity',
    name: 'Extended Lifespan',
    description: 'Genetic modifications associated with longer life expectancy',
    cost: 45000,
    category: 'health',
    ethicalConcern: 'Social implications of radical life extension'
  },
  {
    id: 'metabolism',
    name: 'Optimized Metabolism',
    description: 'Efficient metabolism to maintain healthy weight',
    cost: 22000,
    category: 'health'
  }
];

interface TraitSelectionProps {
  selectedTraits: SelectedTraits;
  setSelectedTraits: (traits: SelectedTraits) => void;
  budget: number;
  setBudget: (budget: number) => void;
  onComplete: () => void;
  onHome?: () => void;
}

export function TraitSelection({
  selectedTraits,
  setSelectedTraits,
  budget,
  setBudget,
  onComplete,
  onHome
}: TraitSelectionProps) {
  const [activeCategory, setActiveCategory] = useState<'physical' | 'cognitive' | 'health'>('physical');
  const [showInfo, setShowInfo] = useState<string | null>(null);

  const toggleTrait = (trait: Trait) => {
    const category = trait.category;
    const isSelected = selectedTraits[category].includes(trait.id);

    if (isSelected) {
      setSelectedTraits({
        ...selectedTraits,
        [category]: selectedTraits[category].filter(id => id !== trait.id)
      });
      setBudget(budget + trait.cost);
    } else {
      if (budget >= trait.cost) {
        setSelectedTraits({
          ...selectedTraits,
          [category]: [...selectedTraits[category], trait.id]
        });
        setBudget(budget - trait.cost);
      }
    }
  };

  const isSelected = (traitId: string, category: string) => {
    return selectedTraits[category as keyof SelectedTraits].includes(traitId);
  };

  const categoryTraits = traits.filter(t => t.category === activeCategory);
  const totalSelected = selectedTraits.physical.length + selectedTraits.cognitive.length + selectedTraits.health.length;

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Design Your Baby
          </h1>
          <p className="text-gray-600">Select genetic modifications within your budget</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Remaining Budget</p>
                <p className="text-2xl text-gray-800">${budget.toLocaleString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Traits Selected</p>
              <p className="text-2xl text-gray-800">{totalSelected}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
              style={{ width: `${((100000 - budget) / 100000) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex gap-4 mb-6 border-b">
            <button
              onClick={() => setActiveCategory('physical')}
              className={`flex items-center gap-2 pb-3 px-4 transition-all ${
                activeCategory === 'physical'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Physical Traits</span>
            </button>
            <button
              onClick={() => setActiveCategory('cognitive')}
              className={`flex items-center gap-2 pb-3 px-4 transition-all ${
                activeCategory === 'cognitive'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Brain className="w-5 h-5" />
              <span>Cognitive Traits</span>
            </button>
            <button
              onClick={() => setActiveCategory('health')}
              className={`flex items-center gap-2 pb-3 px-4 transition-all ${
                activeCategory === 'health'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Activity className="w-5 h-5" />
              <span>Health Traits</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {categoryTraits.map(trait => {
              const selected = isSelected(trait.id, trait.category);
              const canAfford = budget >= trait.cost;

              return (
                <div
                  key={trait.id}
                  className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${
                    selected
                      ? 'border-purple-500 bg-purple-50'
                      : canAfford
                      ? 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => canAfford || selected ? toggleTrait(trait) : null}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-800 mb-1">{trait.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{trait.description}</p>
                    </div>
                    {trait.ethicalConcern && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowInfo(showInfo === trait.id ? null : trait.id);
                        }}
                        className="ml-2 text-yellow-600 hover:text-yellow-700"
                      >
                        <Info className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {showInfo === trait.id && trait.ethicalConcern && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3 text-sm text-yellow-800">
                      <strong>Ethical Consideration:</strong> {trait.ethicalConcern}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-800">${trait.cost.toLocaleString()}</span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selected
                          ? 'border-purple-600 bg-purple-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {selected && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onComplete}
            disabled={totalSelected === 0}
            className={`px-12 py-4 rounded-full text-lg transition-all transform shadow-lg ${
              totalSelected > 0
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            See Outcome
          </button>
        </div>
      </div>
    </div>
  );
}
