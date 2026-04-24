import { Choice, GameState } from '../App';
import { Home } from 'lucide-react';

interface Scene5Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene5({ choices, onChoice, onHome }: Scene5Props) {
  const publicFunding = choices.scene4 === 'A';

  const getOpeningText = () => {
    if (publicFunding) {
      return (
        <p className="text-gray-700 leading-relaxed">
          It's 2045 and your child is 18. In 2030, preimplantation genetic testing was added to Medicare. Uptake rose sharply, from 8% of IVF patients to more than 60%, and rates of certain inherited conditions have fallen measurably.
        </p>
      );
    } else {
      return (
        <p className="text-gray-700 leading-relaxed">
          It's 2045 and your child is 18. Genetic screening remained in the private market. The technology has become cheaper and more sophisticated, but access still tracks closely with income. Rates of serious inherited conditions have fallen among wealthier families and stayed roughly flat in lower-income communities. Researchers have a name for it now: the genomic divide.
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
            <div className="text-sm text-purple-600 mb-2">SCENE 5 OF 5</div>
            <h1 className="text-3xl mb-4 text-gray-800">2045 — Mandatory or Voluntary?</h1>
          </div>

          <div className="prose prose-lg mb-8">
            {getOpeningText()}
            <p className="text-gray-700 leading-relaxed">
              A new debate has emerged. Public health modelling suggests that widespread embryo screening could greatly reduce, or even eliminate, several serious genetic conditions within two generations. Some ethicists argue that if the technology is safe and effective, not using it may allow preventable suffering to continue.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A private member's bill has now been introduced. It proposes mandatory genetic screening for all IVF pregnancies. Under the bill, embryos affected by severe, early-onset genetic conditions would not be allowed to be transferred.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Disability rights groups have condemned the proposal as eugenics. They argue that "severe" is being defined by people who do not live with these conditions, and that affected communities have not been properly consulted. Some parents who chose not to screen, and now have children with the conditions this bill aims to prevent, feel that their families are being told they should not exist.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Others, including some parents of children with severe genetic conditions, support the bill. They argue that if a technology can prevent serious suffering, there may be a responsibility to use it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Some also point out that "voluntary" choices are not always truly equal. For some families, screening was only available if they could afford it. For others, refusing screening may have made them feel judged or irresponsible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your adult child asks where you stand. They're studying bioethics at university and writing an essay on reproductive autonomy.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onChoice('A')}
              className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 text-gray-800 p-6 rounded-xl text-left transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg mb-2 group-hover:text-blue-700">A. Support mandatory screening</div>
                  <div className="text-sm text-gray-600">
                    Back the bill requiring screening for all IVF pregnancies
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
                  <div className="text-lg mb-2 group-hover:text-purple-700">B. Keep it voluntary</div>
                  <div className="text-sm text-gray-600">
                    Preserve individual choice
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
