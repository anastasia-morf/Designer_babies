import { GameState } from '../App';
import { Baby, Dna } from 'lucide-react';

interface DecisionTreeProps {
  choices: GameState;
}

export function DecisionTree({ choices }: DecisionTreeProps) {
  const isOnPath = (scene: number, choice: 'A' | 'B'): boolean => {
    return choices[`scene${scene}` as keyof GameState] === choice;
  };

  // Calculate the outcome based on scenes 3, 4, 5
  const getOutcome = () => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) return 'Prevention State';
    if (publicFunding && !mandatory) return 'Supported Choice';
    return 'Uneven Shield';
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 overflow-x-auto">
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 px-8 py-4 rounded-3xl shadow-lg border-4 border-yellow-500 transform -rotate-2">
            <h3 className="text-3xl font-black text-gray-800">Decision</h3>
          </div>
          <div className="bg-gradient-to-br from-green-300 to-green-400 px-8 py-4 rounded-3xl shadow-lg border-4 border-green-500 transform rotate-1 mt-2">
            <h3 className="text-3xl font-black text-gray-800">Tree</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-purple-500 p-4 rounded-full shadow-lg border-4 border-purple-600">
            <Dna className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
          <div className="bg-pink-500 p-4 rounded-full shadow-lg border-4 border-pink-600">
            <Baby className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center min-w-[1400px] gap-12">
        {/* Scene 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-300 to-blue-400 px-8 py-4 rounded-3xl shadow-lg border-4 border-blue-500 text-center min-w-[280px]">
            <div className="text-sm font-bold text-blue-900 mb-1">SCENE 1</div>
            <div className="text-lg font-black text-gray-800">The Clinic</div>
            <div className="text-xs text-blue-900 mt-1">Test embryos?</div>
          </div>

          <div className="flex gap-32 mt-8">
            {/* Option A */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${
                isOnPath(1, 'A')
                  ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600'
                  : 'bg-gray-300 border-gray-400'
              }`}>
                <span className="text-2xl font-black text-white">A</span>
              </div>
              <div className={`mt-2 px-4 py-2 rounded-2xl text-sm font-bold ${
                isOnPath(1, 'A') ? 'text-green-700' : 'text-gray-500'
              }`}>
                YES
              </div>
            </div>

            {/* Option B */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${
                isOnPath(1, 'B')
                  ? 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600'
                  : 'bg-gray-300 border-gray-400'
              }`}>
                <span className="text-2xl font-black text-white">B</span>
              </div>
              <div className={`mt-2 px-4 py-2 rounded-2xl text-sm font-bold ${
                isOnPath(1, 'B') ? 'text-pink-700' : 'text-gray-500'
              }`}>
                NO
              </div>
            </div>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="flex gap-32">
          {/* Left branch (if tested) */}
          <div className="flex flex-col items-center">
            <div className={`bg-gradient-to-br from-blue-300 to-blue-400 px-6 py-3 rounded-3xl shadow-lg border-4 border-blue-500 text-center min-w-[240px] ${
              !isOnPath(1, 'A') ? 'opacity-40' : ''
            }`}>
              <div className="text-xs font-bold text-blue-900 mb-1">SCENE 2</div>
              <div className="text-base font-black text-gray-800">How far screen?</div>
            </div>

            <div className="flex gap-16 mt-6">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-lg ${
                  isOnPath(1, 'A') && isOnPath(2, 'A')
                    ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600'
                    : 'bg-gray-300 border-gray-400'
                }`}>
                  <span className="text-lg font-black text-white">A</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-lg ${
                  isOnPath(1, 'A') && isOnPath(2, 'B')
                    ? 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600'
                    : 'bg-gray-300 border-gray-400'
                }`}>
                  <span className="text-lg font-black text-white">B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right branch (if not tested) */}
          <div className="flex flex-col items-center">
            <div className={`bg-gradient-to-br from-blue-300 to-blue-400 px-6 py-3 rounded-3xl shadow-lg border-4 border-blue-500 text-center min-w-[240px] ${
              !isOnPath(1, 'B') ? 'opacity-40' : ''
            }`}>
              <div className="text-xs font-bold text-blue-900 mb-1">SCENE 2</div>
              <div className="text-base font-black text-gray-800">How far screen?</div>
            </div>

            <div className="flex gap-16 mt-6">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-lg ${
                  isOnPath(1, 'B') && isOnPath(2, 'A')
                    ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600'
                    : 'bg-gray-300 border-gray-400'
                }`}>
                  <span className="text-lg font-black text-white">A</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-lg ${
                  isOnPath(1, 'B') && isOnPath(2, 'B')
                    ? 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600'
                    : 'bg-gray-300 border-gray-400'
                }`}>
                  <span className="text-lg font-black text-white">B</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scene 3 - 4 paths */}
        <div className="flex gap-12">
          {[
            { s1: 'A', s2: 'A' },
            { s1: 'A', s2: 'B' },
            { s1: 'B', s2: 'A' },
            { s1: 'B', s2: 'B' }
          ].map((path, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`bg-gradient-to-br from-blue-300 to-blue-400 px-4 py-2 rounded-3xl shadow-lg border-4 border-blue-500 text-center min-w-[180px] ${
                !(isOnPath(1, path.s1 as 'A' | 'B') && isOnPath(2, path.s2 as 'A' | 'B')) ? 'opacity-40' : ''
              }`}>
                <div className="text-xs font-bold text-blue-900">SCENE 3</div>
                <div className="text-sm font-black text-gray-800">Result</div>
              </div>

              <div className="flex gap-8 mt-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-3 shadow ${
                  isOnPath(1, path.s1 as 'A' | 'B') && isOnPath(2, path.s2 as 'A' | 'B') && isOnPath(3, 'A')
                    ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600'
                    : 'bg-gray-300 border-gray-400'
                }`}>
                  <span className="text-sm font-black text-white">A</span>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-3 shadow ${
                  isOnPath(1, path.s1 as 'A' | 'B') && isOnPath(2, path.s2 as 'A' | 'B') && isOnPath(3, 'B')
                    ? 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600'
                    : 'bg-gray-300 border-gray-400'
                }`}>
                  <span className="text-sm font-black text-white">B</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scene 4 - Policy */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-purple-300 to-purple-400 px-8 py-4 rounded-3xl shadow-lg border-4 border-purple-500 text-center min-w-[300px]">
            <div className="text-sm font-bold text-purple-900 mb-1">SCENE 4</div>
            <div className="text-lg font-black text-gray-800">The Policy Table</div>
            <div className="text-xs text-purple-900 mt-1">Medicare funding?</div>
          </div>

          <div className="flex gap-32 mt-8">
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${
                isOnPath(4, 'A')
                  ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600'
                  : 'bg-gray-300 border-gray-400'
              }`}>
                <span className="text-2xl font-black text-white">A</span>
              </div>
              <div className={`mt-2 px-4 py-2 rounded-2xl text-sm font-bold ${
                isOnPath(4, 'A') ? 'text-green-700' : 'text-gray-500'
              }`}>
                YES
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${
                isOnPath(4, 'B')
                  ? 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600'
                  : 'bg-gray-300 border-gray-400'
              }`}>
                <span className="text-2xl font-black text-white">B</span>
              </div>
              <div className={`mt-2 px-4 py-2 rounded-2xl text-sm font-bold ${
                isOnPath(4, 'B') ? 'text-pink-700' : 'text-gray-500'
              }`}>
                NO
              </div>
            </div>
          </div>
        </div>

        {/* Scene 5 - 2045 */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-purple-300 to-purple-400 px-8 py-4 rounded-3xl shadow-lg border-4 border-purple-500 text-center min-w-[300px]">
            <div className="text-sm font-bold text-purple-900 mb-1">SCENE 5</div>
            <div className="text-lg font-black text-gray-800">2045 Future</div>
            <div className="text-xs text-purple-900 mt-1">Mandatory screening?</div>
          </div>

          <div className="flex gap-32 mt-8">
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${
                isOnPath(5, 'A')
                  ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600'
                  : 'bg-gray-300 border-gray-400'
              }`}>
                <span className="text-2xl font-black text-white">A</span>
              </div>
              <div className={`mt-2 px-4 py-2 rounded-2xl text-sm font-bold ${
                isOnPath(5, 'A') ? 'text-green-700' : 'text-gray-500'
              }`}>
                YES
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${
                isOnPath(5, 'B')
                  ? 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600'
                  : 'bg-gray-300 border-gray-400'
              }`}>
                <span className="text-2xl font-black text-white">B</span>
              </div>
              <div className={`mt-2 px-4 py-2 rounded-2xl text-sm font-bold ${
                isOnPath(5, 'B') ? 'text-pink-700' : 'text-gray-500'
              }`}>
                NO
              </div>
            </div>
          </div>
        </div>

        {/* Final Outcome */}
        <div className="flex justify-center gap-16 mt-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-300 to-orange-400 px-8 py-4 rounded-3xl shadow-lg border-4 border-orange-500 text-center min-w-[280px]">
              <div className="text-sm font-bold text-orange-900 mb-2">YOUR OUTCOME</div>
              <div className="text-xl font-black text-gray-800">{getOutcome()}</div>
            </div>
            <div className="absolute -top-3 -right-3">
              <span className="text-4xl">⭐</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t-4 border-dashed border-purple-300">
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-4 border-green-600"></div>
            <span className="font-bold text-gray-700">Your Choice (A/Yes)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-4 border-pink-600"></div>
            <span className="font-bold text-gray-700">Your Choice (B/No)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 border-4 border-gray-400"></div>
            <span className="font-bold text-gray-700">Not Selected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
