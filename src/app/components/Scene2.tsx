import { ArrowRight, Home, Quote } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene2Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene2({ choices, onChoice, onHome }: Scene2Props) {
  const testedEmbryos = choices.scene1 === 'A';

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
            Scene 2 of 5
          </p>

          <h1 className="mb-6 font-['Oleo_Script',cursive] text-5xl leading-tight text-[#754635] sm:text-6xl">
            How far do you screen?
          </h1>

          {/* Result box - prior choice consequence (only on B branch) */}
          {!testedEmbryos && (
            <div className="mb-6 rounded-2xl border-l-4 border-[#d19153] bg-[#fdc38a]/25 p-5">
              <p className="text-base leading-relaxed text-[#754635]">
                Unfortunately, you had a miscarriage and you are back at the clinic for a second IVF cycle. This time, you agree to do the standard testing.
              </p>
            </div>
          )}

          <div className="space-y-4 text-base leading-relaxed text-[#754635]/85">
            <p>
              Before you leave the appointment, the counsellor mentions an expanded testing option.
            </p>

            <p>
              Recent advances in genetic testing have made it possible for some companies overseas to offer embryo reports that claim to estimate traits such as height, hair loss, and cognitive ability. These are based on polygenic scores, which combine many small genetic differences to estimate a possible outcome.
            </p>

            <p>
              {testedEmbryos
                ? 'The counsellor explains that this kind of testing is not part of standard IVF practice in Australia. However, one US company, Herasight, which charges $50,000 USD to assess an unlimited number of embryos, has confirmed that it had already worked with couples undergoing IVF at clinics from countries such as the UK.'
                : 'The counsellor explains that this kind of testing is not part of standard IVF practice in Australia. However, one US company, Herasight, which charges $50,000 USD to assess an unlimited number of embryos, has confirmed that it had already worked with couples undergoing IVF at clinics from countries such as the UK. The company is happy to work with you free of charge, to promote their program in Australia.'}
            </p>

            <p>
              The counsellor also explains that these scores are not certain predictions. They do not tell you what a child will definitely be like. They only suggest statistical differences, and the science is still limited when used to choose between embryos.
            </p>

            {/* Doctor quote - styled callout in original position */}
            <blockquote className="!mt-6 flex gap-3 rounded-2xl border-l-4 border-[#d67e6d] bg-[#dd9385]/15 p-5 not-italic">
              <Quote className="h-5 w-5 flex-none text-[#d67e6d]" />
              <p className="italic text-[#754635]">
                {'\u201cMore information can feel helpful,\u201d the doctor says. \u201cBut it can also create uncertainty and difficult choices.\u201d'}
              </p>
            </blockquote>
          </div>

          {/* Highlighted question prompt */}
          <div className="mt-6 rounded-2xl bg-[#fdc38a]/30 p-5 text-center">
            <p className="text-lg font-bold text-[#754635]">
              Do you want to go ahead with the expanded testing?
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
                <p className="text-lg font-bold text-[#754635]">Standard disease testing only</p>
              </div>
              <p className="text-sm leading-relaxed text-[#754635]/75">
                Screen for serious genetic conditions, without expanded trait predictions
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
                <p className="text-lg font-bold text-[#754635]">Expanded testing</p>
              </div>
              <p className="text-sm leading-relaxed text-[#754635]/75">
                Add polygenic scores for complex conditions and traits
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

// interface Scene2Props {
//   choices: GameState;
//   onChoice: (choice: Choice) => void;
//   onHome?: () => void;
// }

// export function Scene2({ choices, onChoice, onHome }: Scene2Props) {
//   const testedEmbryos = choices.scene1 === 'A';

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
//             Scene 2 of 5
//           </p>

//           <h1 className="mb-6 text-4xl font-black text-gray-900">
//             How far do you screen?
//           </h1>

//           <div className="space-y-4 text-base leading-relaxed text-gray-700">
//             {testedEmbryos ? (
//               <>
//                 <p>
//                   Before you leave the appointment, the counsellor mentions an expanded testing option.
//                 </p>

//                 <p>
//                   Recent advances in genetic testing have made it possible for some companies overseas to offer embryo reports that claim to estimate traits such as height, hair loss, and cognitive ability. These are based on polygenic scores, which combine many small genetic differences to estimate a possible outcome.
//                 </p>

//                 <p>
//                   The counsellor explains that this kind of testing is not part of standard IVF practice in Australia. However, one US company, Herasight, which charges $50,000 USD to assess an unlimited number of embryos, has confirmed that it had already worked with couples undergoing IVF at clinics from countries such as the UK.
//                 </p>

//                 <p>
//                   The counsellor also explains that these scores are not certain predictions. They do not tell you what a child will definitely be like. They only suggest statistical differences, and the science is still limited when used to choose between embryos.
//                 </p>

//                 <p>
//                   “More information can feel helpful,” the doctor says. “But it can also create uncertainty and difficult choices.”
//                 </p>

//                 <p>
//                   Do you want to go ahead with the expanded testing?
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   Unfortunately, you had a miscarriage and you are back at the clinic for a second IVF cycle. This time, you agree to do the standard testing.
//                   Before you leave the appointment, the counsellor mentions an expanded testing option.
//                 </p>

//                 <p>
//                   Recent advances in genetic testing have made it possible for some companies overseas to offer embryo reports that claim to estimate traits such as height, hair loss, and cognitive ability. These are based on polygenic scores, which combine many small genetic differences to estimate a possible outcome.
//                 </p>

//                 <p>
//                   The counsellor explains that this kind of testing is not part of standard IVF practice in Australia. However, one US company, Herasight, which charges $50,000 USD to assess an unlimited number of embryos, has confirmed that it had already worked with couples undergoing IVF at clinics from countries such as the UK. The company is happy to work with you free of charge, to promote their program in Australia.
//                 </p>

//                 <p>
//                   The counsellor also explains that these scores are not certain predictions. They do not tell you what a child will definitely be like. They only suggest statistical differences, and the science is still limited when used to choose between embryos.
//                 </p>

//                 <p>
//                   Do you want to go ahead with the expanded testing?
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
//                 A. Standard disease testing only
//               </p>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 Screen for serious genetic conditions, without expanded trait predictions
//               </p>
//               <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
//             </button>

//             <button
//               onClick={() => onChoice('B')}
//               className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
//             >
//               <p className="mb-2 text-lg font-bold text-gray-900">
//                 B. Expanded testing
//               </p>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 Add polygenic scores for complex conditions and traits
//               </p>
//               <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
