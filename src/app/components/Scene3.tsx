import { ArrowRight, Home, AlertCircle } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene3Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene3({ choices, onChoice, onHome }: Scene3Props) {
  const fullPolygenicPanel = choices.scene2 === 'B';

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
            Scene 3 of 5
          </p>

          <h1 className="mb-6 font-['Oleo_Script',cursive] text-5xl leading-tight text-[#754635] sm:text-6xl">
            A difficult result
          </h1>

          {fullPolygenicPanel ? (
            <>
              <div className="space-y-4 text-base leading-relaxed text-[#754635]/85">
                <p>
                  The results come back. Two embryos have been found to be viable. Both are chromosomally normal, and neither carries the serious disease variants tested.
                </p>

                <p>
                  But the expanded report gives you more information than you expected.
                </p>
              </div>

              {/* Embryo comparison - side-by-side info boxes */}
              <div className="my-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#d6b9a0] bg-[#fdc38a]/20 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d19153]">
                    Embryo 1
                  </p>
                  <p className="text-sm leading-relaxed text-[#754635]">
                    scores higher for predicted cognitive traits and height, but has a moderately higher predicted risk of type 1 diabetes.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d6b9a0] bg-[#dd9385]/15 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d67e6d]">
                    Embryo 2
                  </p>
                  <p className="text-sm leading-relaxed text-[#754635]">
                    has lower predicted risk for heart disease, diabetes, and stroke. Its predicted cognitive and height scores are around average.
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#754635]/85">
                The counsellor reminds you that these scores are probabilities, not guarantees. They do not determine whether a child will be healthier, smarter, taller, or more successful.
              </p>
            </>
          ) : (
            <div className="space-y-4 text-base leading-relaxed text-[#754635]/85">
              <p>
                The counsellor calls with the disease panel results. One embryo stopped developing before transfer, which can happen even with chromosomally normal embryos. You have one embryo left.
              </p>

              <p>
                That embryo is clear for the named diseases on the panel, including cystic fibrosis, sickle cell disease, Tay-Sachs disease, and Huntington's disease.
              </p>

              {/* VUS finding - highlighted as the key complication */}
              <div className="!mt-6 flex gap-3 rounded-2xl border-l-4 border-[#d67e6d] bg-[#dd9385]/15 p-5">
                <AlertCircle className="h-5 w-5 flex-none text-[#d67e6d]" />
                <p className="text-[#754635]">
                  However, the test also found a variant of uncertain significance, or VUS, in a gene linked to hereditary cancer risk. This means there is a genetic change, but doctors do not yet know whether it is harmful. The counsellor explains that it might slightly increase cancer risk, but it might also do nothing at all.
                </p>
              </div>

              <p>
                You can implant this embryo and accept the uncertainty, or start another IVF cycle. Another cycle would take months, cost thousands, and still offer no guarantee. What do you choose?
              </p>
            </div>
          )}

          {/* Final question highlighted (only for full panel branch — basic branch already ends with "What do you choose?") */}
          {fullPolygenicPanel && (
            <div className="mt-6 rounded-2xl bg-[#fdc38a]/30 p-5 text-center">
              <p className="text-lg font-bold text-[#754635]">
                Which embryo do you choose?
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => onChoice('A')}
              className="group rounded-2xl border-2 border-[#a7715b] bg-[#f3e8dc] p-5 text-left transition-all hover:scale-[1.02] hover:bg-[#e8d6c0]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#a7715b] text-sm font-bold text-white">
                  A
                </span>
                <p className="text-lg font-bold text-[#754635]">
                  {fullPolygenicPanel ? 'Implant Embryo 2' : 'Implant the embryo'}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#754635]/75">
                {fullPolygenicPanel
                  ? 'Lower cardiometabolic risk, median cognitive and height scores'
                  : 'Accept the VUS, which may mean nothing'}
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
                <p className="text-lg font-bold text-[#754635]">
                  {fullPolygenicPanel ? 'Implant Embryo 1' : 'Start another cycle'}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#754635]/75">
                {fullPolygenicPanel
                  ? 'Higher cognitive and height scores, elevated diabetes risk'
                  : 'Try for an embryo without the flag'}
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-[#dd9385] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// import { ArrowRight, Home } from 'lucide-react';

// import { Choice, GameState } from '../App';

// interface Scene3Props {
//   choices: GameState;
//   onChoice: (choice: Choice) => void;
//   onHome?: () => void;
// }

// export function Scene3({ choices, onChoice, onHome }: Scene3Props) {
//   const fullPolygenicPanel = choices.scene2 === 'B';

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
//             Scene 3 of 5
//           </p>

//           <h1 className="mb-6 text-4xl font-black text-gray-900">
//             A difficult result
//           </h1>

//           <div className="space-y-4 text-base leading-relaxed text-gray-700">
//             {fullPolygenicPanel ? (
//               <>
//                 <p>
//                   The results come back. Two embryos have been found to be viable. Both are chromosomally normal, and neither carries the serious disease variants tested.
//                 </p>

//                 <p>
//                   But the expanded report gives you more information than you expected.
//                 </p>

//                 <p>
//                   Embryo 1 scores higher for predicted cognitive traits and height, but has a moderately higher predicted risk of type 1 diabetes.
//                 </p>

//                 <p>
//                   Embryo 2 has lower predicted risk for heart disease, diabetes, and stroke. Its predicted cognitive and height scores are around average.
//                 </p>

//                 <p>
//                   The counsellor reminds you that these scores are probabilities, not guarantees. They do not determine whether a child will be healthier, smarter, taller, or more successful.
//                 </p>

//                 <p>
//                   Which embryo do you choose?
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   The counsellor calls with the disease panel results. One embryo stopped developing before transfer, which can happen even with chromosomally normal embryos. You have one embryo left.
//                 </p>

//                 <p>
//                   That embryo is clear for the named diseases on the panel, including cystic fibrosis, sickle cell disease, Tay-Sachs disease, and Huntington’s disease.
//                 </p>

//                 <p>
//                   However, the test also found a variant of uncertain significance, or VUS, in a gene linked to hereditary cancer risk. This means there is a genetic change, but doctors do not yet know whether it is harmful. The counsellor explains that it might slightly increase cancer risk, but it might also do nothing at all.
//                 </p>

//                 <p>
//                   You can implant this embryo and accept the uncertainty, or start another IVF cycle. Another cycle would take months, cost thousands, and still offer no guarantee. What do you choose?
//                 </p>
//               </>
//             )}
//           </div>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             <button
//               onClick={() => onChoice('A')}
//               className="group rounded-2xl border-2 border-blue-300 bg-blue-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-100"
//             >
//               <p className="mb-2 text-lg font-bold text-gray-900">
//                 A. {fullPolygenicPanel ? 'Implant Embryo 2' : 'Implant the embryo'}
//               </p>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 {fullPolygenicPanel
//                   ? 'Lower cardiometabolic risk, median cognitive and height scores'
//                   : 'Accept the VUS, which may mean nothing'}
//               </p>
//               <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
//             </button>

//             <button
//               onClick={() => onChoice('B')}
//               className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
//             >
//               <p className="mb-2 text-lg font-bold text-gray-900">
//                 B. {fullPolygenicPanel ? 'Implant Embryo 1' : 'Start another cycle'}
//               </p>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 {fullPolygenicPanel
//                   ? 'Higher cognitive and height scores, elevated diabetes risk'
//                   : 'Try for an embryo without the flag'}
//               </p>
//               <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
