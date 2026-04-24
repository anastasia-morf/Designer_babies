import { Choice, GameState } from '../App';
import { Home } from 'lucide-react';

interface Scene2Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene2({ choices, onChoice, onHome }: Scene2Props) {
  const didScreen = choices.scene1 === 'A';

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
            <div className="text-sm text-purple-600 mb-2">SCENE 2 OF 5</div>
            <h1 className="text-3xl mb-4 text-gray-800">How Far Do You Screen?</h1>
          </div>

          <div className="prose prose-lg mb-8">
            {didScreen ? (
              <>
                <p className="text-gray-700 leading-relaxed">
                  Your PGT results come back. Two embryos are chromosomally normal, and the clinic is ready to schedule the transfer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Before you hang up, the counsellor mentions the clinic's expanded panel. For an extra $3,000, it screens for a small number of serious single-gene diseases like cystic fibrosis, sickle cell, and Tay-Sachs. When present, these conditions are rare, but the results are usually clear and clinically meaningful.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The expanded panel also includes Polygenic Risk Score, which estimates risk for complex conditions like diabetes, heart disease, and some cancers, as well as traits like height and cognitive ability. These scores reflect small statistical shifts across many genes and are less reliable at the individual level.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  She pauses before ending the call. "Some people feel reassured by having more information," she says. "Others find it creates difficult decisions without clear answers." She adds that these scores are most reliable for people of European ancestry because the research datasets skew that way, and carry wider margins of error for others.
                </p>
              </>
            ) : (
              <>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-xl">
                  <p className="text-red-800 leading-relaxed">
                    At eight weeks, you miscarried. The doctor confirms it was due to a chromosomal abnormality called trisomy 16. There was nothing anyone could have done.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  You're back at the clinic for a second IVF cycle, and this time the doctor suggests considering genetic testing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The clinic offers two options. A basic panel focuses on a small number of serious single-gene conditions. These are rare, but when present, the results are usually clear and medically actionable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A full panel adds Polygenic Risk Score for complex conditions like diabetes and heart disease, along with predictions for traits like cognitive ability. These estimates are based on many genes and reflect small shifts in probability rather than definite outcomes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The doctor notes that while more information can seem helpful, it can also introduce uncertainty and difficult choices without clear guidance.
                </p>
              </>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onChoice('A')}
              className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg mb-2 group-hover:text-blue-700">A. Disease variants only</div>
                  <div className="text-sm text-gray-600">
                    Screen for serious single-gene conditions like cystic fibrosis
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
                  <div className="text-lg mb-2 group-hover:text-purple-700">B. Full polygenic panel</div>
                  <div className="text-sm text-gray-600">
                    Adds risk scores for complex conditions and traits
                  </div>
                </div>
                <div className="text-3xl text-purple-400 group-hover:text-purple-600">→</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
