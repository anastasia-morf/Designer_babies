// import { Baby } from 'lucide-react';

// import { GameMode } from '../App';

// const PRE_GAME_MENTIMETER_LINK =
//   'https://www.menti.com/algbyyrscrg2';

// interface GameIntroProps {
//   onModeSelect: (mode: GameMode) => void;
// }

// export function GameIntro({ onModeSelect }: GameIntroProps) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6">
//       <main className="mx-auto w-full max-w-2xl">
//         <section className="mb-8 rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur sm:p-12">
//           <div className="mb-6 flex justify-center">
//             <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg">
//               <Baby className="h-8 w-8 text-white" />
//             </div>
//           </div>

//           <h1 className="mb-4 text-5xl font-black text-gray-900 sm:text-6xl">
//             Designer Babies
//           </h1>

//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 sm:text-base">
//             Interactive Scenario Game About Genetic Engineering
//           </p>
//         </section>

//         <section className="mb-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
//           {/* <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
//             Before you start
//           </p> */}

//           <h2 className="mb-4 text-2xl font-black text-gray-900 sm:text-3xl">
//             Quick survey
//           </h2>

//           <div className="rounded-2xl bg-purple-50 p-6 text-center">
//             {/* <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
//               Click below to answer the Mentimeter questions. It will open in a
//               new tab.
//             </p> */}

//             <a
//               href={PRE_GAME_MENTIMETER_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
//             >
//               Open Mentimeter
//             </a>
//           </div>
//         </section>

//         <section className="rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur sm:p-10">
//           <button
//             onClick={() => onModeSelect('narrative')}
//             className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700 sm:text-xl"
//           >
//             Begin the journey
//           </button>

//           {/* <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
//             A simulation exploring the ethical dimensions of reproductive
//             genetic technologies. This is not medical advice or a recommendation
//             of any technology.
//           </p> */}
//         </section>
//       </main>
//     </div>
//   );
// }
import { useState } from 'react';
import { Baby, ExternalLink, ArrowDown } from 'lucide-react';
import { GameMode } from '../App';

const PRE_GAME_MENTIMETER_LINK = 'https://www.menti.com/algbyyrscrg2';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  const [surveyOpened, setSurveyOpened] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3e8dc] px-4 py-12 font-['Manrope',sans-serif] text-[#754635] sm:px-6">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#d6b9a0] opacity-50" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#bd8f79] opacity-30" />

      <main className="relative mx-auto w-full max-w-2xl">
        {/* Title block */}
        <section className="mb-10 text-center">
          <div className="mb-5 flex justify-center">
            <div className="rounded-full bg-[#a7715b] p-4 shadow-md">
              <Baby className="h-8 w-8 text-[#f3e8dc]" />
            </div>
          </div>
          <h1 className="mb-3 font-['Oleo_Script',cursive] text-6xl leading-tight text-[#754635] sm:text-7xl">
            Designer Babies
          </h1>
          <p className="text-base italic text-[#d67e6d] sm:text-lg">
            An interactive scenario game about genetic engineering
          </p>
        </section>

        {/* Step 1 — Survey */}
        <section className="rounded-3xl bg-white/80 p-6 shadow-md backdrop-blur sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#dd9385] font-bold text-white shadow-sm">
              1
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold text-[#754635] sm:text-2xl">
                Start with a quick survey
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-[#754635]/70">
                Opens in a new tab.
              </p>
              <a
                href={PRE_GAME_MENTIMETER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSurveyOpened(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#a7715b] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#754635] sm:text-base"
              >
                Open Mentimeter
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Connecting arrow */}
        <div className="my-2 flex justify-center">
          <ArrowDown
            className={`h-7 w-7 transition-colors ${
              surveyOpened ? 'text-[#a7715b]' : 'text-[#d6b9a0]'
            }`}
          />
        </div>

        {/* Step 2 — Game (locked until step 1 is opened) */}
        <section
          className={`rounded-3xl p-6 shadow-md backdrop-blur transition-all sm:p-7 ${
            surveyOpened ? 'bg-white/80' : 'bg-white/40'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex h-10 w-10 flex-none items-center justify-center rounded-full font-bold shadow-sm transition-colors ${
                surveyOpened ? 'bg-[#dd9385] text-white' : 'bg-[#d6b9a0] text-white/80'
              }`}
            >
              2
            </div>
            <div className="flex-1">
              <h2
                className={`mb-1 text-xl font-bold transition-colors sm:text-2xl ${
                  surveyOpened ? 'text-[#754635]' : 'text-[#754635]/50'
                }`}
              >
                Then begin the game
              </h2>
              <p
                className={`mb-4 text-sm leading-relaxed transition-colors ${
                  surveyOpened ? 'text-[#754635]/70' : 'text-[#754635]/40'
                }`}
              >
                {surveyOpened
                  ? "Let's go!"
                  : 'Unlocks once you open the survey above.'}
              </p>
              <button
                onClick={() => onModeSelect('narrative')}
                disabled={!surveyOpened}
                className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold shadow-md transition-all sm:text-base ${
                  surveyOpened
                    ? 'bg-[#a7715b] text-white hover:scale-105 hover:bg-[#754635]'
                    : 'cursor-not-allowed bg-[#d6b9a0] text-white/70'
                }`}
              >
                Begin the journey
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
