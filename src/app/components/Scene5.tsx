// import { ArrowRight, Home } from 'lucide-react';

// import { Choice, GameState } from '../App';

// interface Scene5Props {
//   choices: GameState;
//   onChoice: (choice: Choice) => void;
//   onHome?: () => void;
// }

// export function Scene5({ choices, onChoice, onHome }: Scene5Props) {
//   const medicareFunding = choices.scene4 === 'A';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8 sm:px-6">
//       <main className="mx-auto max-w-3xl">
//         {onHome && (
//           <button
//             onClick={onHome}
//             className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white"
//           >
//             <Home className="h-4 w-4" />
//             Home
//           </button>
//         )}

//         <section className="rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
//           <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
//             Scene 5 of 5
//           </p>

//           <h1 className="mb-6 text-4xl font-black text-gray-900">
//             2045: mandatory or voluntary?
//           </h1>

//           <div className="space-y-4 text-base leading-relaxed text-gray-700">
//             <p>
//               {medicareFunding
//                 ? 'It’s 2045 and your child is 18. In 2030, preimplantation genetic testing was added to Medicare. Uptake rose sharply, from 8% of IVF patients to more than 60%, and rates of certain inherited conditions have fallen measurably.'
//                 : 'It’s 2045 and your child is 18. Genetic screening remained in the private market. The technology has become cheaper and more sophisticated, but access still tracks closely with income. Rates of serious inherited conditions have fallen among wealthier families and stayed roughly flat in lower-income communities.'}
//             </p>

//             <p>
//               A new debate has emerged. Public health modelling suggests that widespread embryo screening could greatly reduce, or even eliminate, some serious genetic conditions within two generations.
//             </p>

//             <p>
//               A private member’s bill proposes mandatory genetic screening for all IVF pregnancies. Under the bill, embryos affected by severe, early-onset genetic conditions could not be transferred.
//             </p>

//             <p>
//               Do you support mandatory genetic screening for all IVF pregnancies?
//             </p>
//           </div>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             <button
//               onClick={() => onChoice('A')}
//               className="group rounded-2xl border-2 border-blue-300 bg-blue-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-100"
//             >
//               <p className="mb-2 text-lg font-bold text-gray-900">
//                 A. Support mandatory screening
//               </p>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 Back the bill requiring screening for all IVF pregnancies
//               </p>
//               <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
//             </button>

//             <button
//               onClick={() => onChoice('B')}
//               className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
//             >
//               <p className="mb-2 text-lg font-bold text-gray-900">
//                 B. Keep it voluntary
//               </p>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 Preserve individual choice
//               </p>
//               <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
import { ArrowRight, Home } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene5Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene5({ choices, onChoice, onHome }: Scene5Props) {
  const medicareFunding = choices.scene4 === 'A';

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3e8dc] px-4 py-8 font-['Manrope',sans-serif] text-[#754635] sm:px-6">
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#d6b9a0] opacity-50" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#bd8f79] opacity-30" />

      <main className="relative mx-auto max-w-3xl">
        {onHome && (
          <button
            onClick={onHome}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a7715b]/40 bg-white/70 px-4 py-2 text-sm font-semibold text-[#754635] shadow-sm backdrop-blur transition hover:bg-white"
          >
            <Home className="h-4 w-4" />
            Home
          </button>
        )}

        <section className="rounded-3xl bg-white/80 p-6 shadow-md backdrop-blur sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a7715b] sm:text-sm">
            Scene 5 of 5
          </p>

          <h1 className="mb-6 font-['Oleo_Script',cursive] text-5xl leading-tight text-[#754635] sm:text-6xl">
            2045: mandatory or voluntary?
          </h1>

          {/* World-state result - prior choice consequence */}
          <div className="mb-6 rounded-2xl border-l-4 border-[#d19153] bg-[#fdc38a]/25 p-5">
            <p className="text-base leading-relaxed text-[#754635]">
              {medicareFunding
                ? 'It\u2019s 2045 and your child is 18. In 2030, preimplantation genetic testing was added to Medicare. Uptake rose sharply, from 8% of IVF patients to more than 60%, and rates of certain inherited conditions have fallen measurably.'
                : 'It\u2019s 2045 and your child is 18. Genetic screening remained in the private market. The technology has become cheaper and more sophisticated, but access still tracks closely with income. Rates of serious inherited conditions have fallen among wealthier families and stayed roughly flat in lower-income communities.'}
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-[#754635]/85">
            <p>
              A new debate has emerged. Public health modelling suggests that widespread embryo screening could greatly reduce, or even eliminate, some serious genetic conditions within two generations.
            </p>

            <p>
              A private member's bill proposes mandatory genetic screening for all IVF pregnancies. Under the bill, embryos affected by severe, early-onset genetic conditions could not be transferred.
            </p>
          </div>

          {/* Final question highlighted */}
          <div className="mt-6 rounded-2xl bg-[#fdc38a]/30 p-5 text-center">
            <p className="text-lg font-bold text-[#754635]">
              Do you support mandatory genetic screening for all IVF pregnancies?
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => onChoice('A')}
              className="group rounded-2xl border-2 border-[#a7715b] bg-[#f3e8dc] p-5 text-left transition-all hover:scale-[1.02] hover:bg-[#e8d6c0]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#a7715b] text-sm font-bold text-white">
                  A
                </span>
                <p className="text-lg font-bold text-[#754635]">Support mandatory screening</p>
              </div>
              <p className="text-sm leading-relaxed text-[#754635]/75">
                Back the bill requiring screening for all IVF pregnancies
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-[#a7715b] transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onChoice('B')}
              className="group rounded-2xl border-2 border-[#dd9385] bg-[#f3e8dc] p-5 text-left transition-all hover:scale-[1.02] hover:bg-[#f0dcd5]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dd9385] text-sm font-bold text-white">
                  B
                </span>
                <p className="text-lg font-bold text-[#754635]">Keep it voluntary</p>
              </div>
              <p className="text-sm leading-relaxed text-[#754635]/75">
                Preserve individual choice
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-[#dd9385] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
