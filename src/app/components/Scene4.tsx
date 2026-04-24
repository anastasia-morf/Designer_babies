import { Choice, GameState } from '../App';
import { Home } from 'lucide-react';

interface Scene4Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene4({ choices, onChoice, onHome }: Scene4Props) {
  const noInitialScreen = choices.scene1 === 'B';

  const getOpeningText = () => {
    if (noInitialScreen) {
      return (
        <p className="text-gray-700 leading-relaxed">
          You're pregnant. It took two IVF cycles and a lot of appointments.
        </p>
      );
    } else {
      return (
        <p className="text-gray-700 leading-relaxed">
          You're pregnant. The transfer worked. You think about the decisions that got you here.
        </p>
      );
    }
  };

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
            <div className="text-sm text-purple-600 mb-2">SCENE 4 OF 5</div>
            <h1 className="text-3xl mb-4 text-gray-800">The Policy Table</h1>
          </div>

          <div className="prose prose-lg mb-8">
            {getOpeningText()}
            <p className="text-gray-700 leading-relaxed">
              Six months later, you receive an email. A parliamentary inquiry is reviewing access to reproductive genetic technologies, and they're inviting submissions from people who've been through IVF with genetic testing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              One of the key questions is whether preimplantation genetic testing should be subsidised through Medicare. At the moment it costs thousands of dollars out of pocket. Public funding would mean universal access regardless of income, but it would also mean the state is paying to select which embryos get implanted and which don't.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onChoice('A')}
              className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg mb-2 group-hover:text-blue-700">A. Recommend Medicare funding</div>
                  <div className="text-sm text-gray-600">
                    Public funding for universal access to genetic testing
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
                  <div className="text-lg mb-2 group-hover:text-purple-700">B. Keep it private</div>
                  <div className="text-sm text-gray-600">
                    Families continue to pay out of pocket
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
