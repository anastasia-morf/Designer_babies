import { Choice, GameState } from '../App';
import { Home } from 'lucide-react';

interface Scene3Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene3({ choices, onChoice, onHome }: Scene3Props) {
  const usedPolygenic = choices.scene2 === 'B';

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {onHome && (
        <button
          onClick={onHome}
          className="fixed top-6 left-6 bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-lg transition-all flex items-center gap-2 z-10"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      )}
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="mb-6">
            <div className="text-sm text-purple-600 mb-2">SCENE 3 OF 5</div>
            <h1 className="text-3xl mb-4 text-gray-800">A Difficult Result</h1>
          </div>

          <div className="prose prose-lg mb-8">
            {usedPolygenic ? (
              <>
                <p className="text-gray-700 leading-relaxed">
                  The results come back for both embryos. Both are chromosomally normal and free of the serious disease variants included in the test. But the polygenic scores rank them differently.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-xl">
                  <p className="text-blue-900 leading-relaxed mb-3">
                    <strong>Embryo 1</strong> scores higher for predicted cognitive traits and has above-average predicted height. However, it also has a moderately higher predicted risk of type 2 diabetes.
                  </p>
                  <p className="text-blue-900 leading-relaxed">
                    <strong>Embryo 2</strong> has a stronger cardiometabolic profile, meaning it has lower predicted risk for conditions such as heart disease, diabetes, and stroke. Its predicted cognitive and height scores are around the population average.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The counsellor is careful here. Polygenic scores do not predict a child's future with certainty. They are based on patterns across many genes and only show small shifts in likelihood. Scores for traits like cognition and height are especially limited. The scores for health-related risks are better studied, but they are still only probabilities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Neither embryo is guaranteed to be healthier, smarter, taller, or more successful because of these numbers. The test has given you more information, but not a clear answer.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-700 leading-relaxed">
                  The counsellor calls with the disease panel results. One of your embryos stopped developing before reaching the transfer stage. This can happen, even with chromosomally normal embryos. You have one embryo remaining.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  That embryo is clear for the named disease conditions on the panel. It does not carry the tested variants for cystic fibrosis, sickle cell disease, Tay-Sachs disease, or Huntington's disease.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-xl">
                  <p className="text-yellow-900 leading-relaxed">
                    However, the test has found a <strong>variant of uncertain significance</strong>, often called a VUS, in a gene linked to a hereditary cancer syndrome. This means there is a genetic change, but scientists and doctors do not yet know whether it is harmful.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The variant might slightly increase lifetime cancer risk. It might also have no effect at all. The research is still incomplete, and clearer answers may not be available for several years.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can implant this embryo and accept the uncertainty. You can also start another IVF cycle and hope for a result with fewer unknowns. Another cycle would take months, cost thousands of dollars, and still offer no guarantee.
                </p>
              </>
            )}
          </div>

          <div className="space-y-4">
            {usedPolygenic ? (
              <>
                <button
                  onClick={() => onChoice('A')}
                  className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg mb-2 group-hover:text-blue-700">A. Implant Embryo 2</div>
                      <div className="text-sm text-gray-600">
                        Lower cardiometabolic risk, median cognitive and height scores
                      </div>
                    </div>
                    <div className="text-3xl text-blue-400 group-hover:text-blue-600">→</div>
                  </div>
                </button>

                <button
                  onClick={() => onChoice('B')}
                  className="w-full bg-purple-50 hover:bg-purple-100 border-2 border-purple-300 hover:border-purple-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg mb-2 group-hover:text-purple-700">B. Implant Embryo 1</div>
                      <div className="text-sm text-gray-600">
                        Higher cognitive and height scores, elevated diabetes risk
                      </div>
                    </div>
                    <div className="text-3xl text-purple-400 group-hover:text-purple-600">→</div>
                  </div>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onChoice('A')}
                  className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg mb-2 group-hover:text-blue-700">A. Implant the embryo</div>
                      <div className="text-sm text-gray-600">
                        Accept the VUS, which may mean nothing
                      </div>
                    </div>
                    <div className="text-3xl text-blue-400 group-hover:text-blue-600">→</div>
                  </div>
                </button>

                <button
                  onClick={() => onChoice('B')}
                  className="w-full bg-purple-50 hover:bg-purple-100 border-2 border-purple-300 hover:border-purple-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg mb-2 group-hover:text-purple-700">B. Start another cycle</div>
                      <div className="text-sm text-gray-600">
                        Try for an embryo without the flag
                      </div>
                    </div>
                    <div className="text-3xl text-purple-400 group-hover:text-purple-600">→</div>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
