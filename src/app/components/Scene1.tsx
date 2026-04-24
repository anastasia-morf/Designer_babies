import { Choice } from '../App';
import { Home } from 'lucide-react';

interface Scene1Props {
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene1({ onChoice, onHome }: Scene1Props) {
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
            <div className="text-sm text-purple-600 mb-2">SCENE 1 OF 5</div>
            <h1 className="text-3xl mb-4 text-gray-800">The Clinic</h1>
          </div>

          <div className="prose prose-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              You and your partner have been trying to conceive for two years, and after fertility testing, your specialist has recommended IVF.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At the first consultation, the clinic offers preimplantation genetic testing (PGT). It can screen embryos for chromosomal abnormalities before transfer, which may improve the chance of a successful pregnancy and reduce the risk of miscarriage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The counsellor explains that testing isn't perfect. Some embryos flagged as abnormal may still result in healthy births, and screening can reduce the number of embryos available for transfer. In some cases, no embryos are considered suitable after testing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The process adds around ten days and costs $2,500 out of pocket, on top of an already expensive IVF cycle. Because it isn't covered by Medicare, not all couples choose to include it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Some couples find the extra information reassuring. Others feel it introduces more uncertainty and difficult decisions.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onChoice('A')}
              className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg mb-2 group-hover:text-blue-700">A. Test the embryos</div>
                  <div className="text-sm text-gray-600">
                    Screen for chromosomal abnormalities before implantation
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
                  <div className="text-lg mb-2 group-hover:text-purple-700">B. Implant without testing</div>
                  <div className="text-sm text-gray-600">
                    Proceed with standard IVF without genetic screening
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
