import { Dna, GitBranch, Sparkles, Scale, Beaker, BookOpen } from 'lucide-react';
import { GameMode } from '../App';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-12">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-full">
              <Dna className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Designer Babies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Interactive Scenario Games About Genetic Engineering
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">Choose Your Experience</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Explore the ethical, social, and personal dimensions of reproductive genetic technologies through two different game modes. Each offers a unique way to engage with these complex questions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onModeSelect('narrative')}
              className="bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-2 border-purple-300 hover:border-purple-400 rounded-2xl p-8 text-left transition-all transform hover:scale-105 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 p-3 rounded-xl group-hover:bg-purple-600 transition-colors">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-800">Narrative Journey</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Follow a decade-spanning story from an IVF clinic to a 2045 policy debate. Make five binary decisions that shape the narrative and determine which of three possible futures you create.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Scale className="w-4 h-4 text-purple-600" />
                  <span>5 scenes with branching narratives</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>3 distinct outcome worlds</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Beaker className="w-4 h-4 text-purple-600" />
                  <span>Explores policy and societal implications</span>
                </div>
              </div>
              <div className="mt-6 text-purple-600 group-hover:text-purple-700 flex items-center gap-2">
                <span>Begin Narrative Journey</span>
                <span className="text-2xl">→</span>
              </div>
            </button>

            <button
              onClick={() => onModeSelect('trait-designer')}
              className="bg-gradient-to-br from-pink-50 to-orange-50 hover:from-pink-100 hover:to-orange-100 border-2 border-pink-300 hover:border-pink-400 rounded-2xl p-8 text-left transition-all transform hover:scale-105 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-500 p-3 rounded-xl group-hover:bg-pink-600 transition-colors">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-800">Trait Designer</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Design a baby by selecting genetic modifications within a budget. Choose from physical, cognitive, and health traits, then discover the complex outcomes and unintended consequences of your choices.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Dna className="w-4 h-4 text-pink-600" />
                  <span>Select from 12+ genetic traits</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Scale className="w-4 h-4 text-pink-600" />
                  <span>$100,000 budget to allocate</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Beaker className="w-4 h-4 text-pink-600" />
                  <span>Reveals ethical considerations & consequences</span>
                </div>
              </div>
              <div className="mt-6 text-pink-600 group-hover:text-pink-700 flex items-center gap-2">
                <span>Begin Trait Designer</span>
                <span className="text-2xl">→</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-6">
          <h3 className="text-xl mb-4 text-gray-800">Why Play These Games?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Genetic technologies that once seemed like science fiction are rapidly becoming reality. These games help you explore the ethical questions we'll face as a society: Who should have access? How much should we modify? Where do we draw the line between prevention and enhancement?
          </p>
          <p className="text-gray-700 leading-relaxed">
            There are no right answers, only trade-offs worth understanding.
          </p>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Educational simulations exploring the ethical dimensions of reproductive genetic technologies.</p>
          <p>This is not medical advice or a recommendation of any technology.</p>
        </div>
      </div>
    </div>
  );
}
