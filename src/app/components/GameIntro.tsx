import { Dna, GitBranch, Scale, BookOpen } from 'lucide-react';

import { GameMode } from '../App';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-12">
      <div className="max-w-4xl w-full">
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
            Interactive Scenario Game About Genetic Engineering
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">
            Begin the Scenario
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Explore the ethical, social, and personal dimensions of reproductive
            genetic technologies through an interactive narrative journey.
          </p>

          <button
            onClick={() => onModeSelect('narrative')}
            className="w-full bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-2 border-purple-300 hover:border-purple-400 rounded-2xl p-8 text-left transition-all transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl group-hover:bg-purple-600 transition-colors">
                <GitBranch className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl text-gray-800">
                Narrative Journey
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Follow a decade-spanning story from an IVF clinic to a 2045
              policy debate. Make five decisions that shape the narrative and
              determine which of three possible futures you create.
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
            </div>

            <div className="mt-6 text-purple-600 group-hover:text-purple-700 flex items-center gap-2">
              <span>Begin Narrative Journey</span>
              <span className="text-2xl">→</span>
            </div>
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-6">
          <h3 className="text-xl mb-4 text-gray-800">
            Why Play This Game?
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Genetic technologies that once seemed like science fiction are
            rapidly becoming reality. This game helps you explore ethical
            questions about access, prevention, enhancement, and where society
            might draw the line.
          </p>

          <p className="text-gray-700 leading-relaxed">
            There are no right answers, only trade-offs worth understanding.
          </p>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>
            Educational simulation exploring the ethical dimensions of
            reproductive genetic technologies.
          </p>
          <p>
            This is not medical advice or a recommendation of any technology.
          </p>
        </div>
      </div>
    </div>
  );
}
