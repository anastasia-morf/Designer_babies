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
import { Baby } from 'lucide-react';
import { GameMode } from '../App';

const PRE_GAME_MENTIMETER_LINK = 'https://www.menti.com/algbyyrscrg2';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ECE0CC] px-4 py-12 font-['Inter',sans-serif] text-[#3D2419] sm:px-6">
      {/* Soft decorative blobs in the corners */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#A89178] opacity-30" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#C5A98C] opacity-25" />

      {/* Tiny floral/heart accents (subtle, like the reference) */}
      <span className="pointer-events-none absolute left-6 top-1/2 text-2xl text-[#7A4A3F] opacity-60">♥</span>
      <span className="pointer-events-none absolute bottom-10 right-10 text-xl text-[#F5EDDD] opacity-80">♡</span>

      <main className="relative mx-auto w-full max-w-2xl">
        {/* Title section */}
        <section className="mb-8 rounded-3xl bg-[#F5EDDD] p-8 text-center shadow-md sm:p-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[#A89178] p-4 shadow-md">
              <Baby className="h-8 w-8 text-[#F5EDDD]" />
            </div>
          </div>
          <h1 className="mb-4 font-['Playfair_Display',serif] text-5xl font-black italic leading-tight text-[#3D2419] sm:text-6xl">
            Designer Babies
          </h1>
          <p className="font-['Playfair_Display',serif] text-base font-bold italic text-[#B86F65] sm:text-lg">
            Interactive Scenario Game About Genetic Engineering
          </p>
        </section>

        {/* Survey section */}
        <section className="mb-8 rounded-3xl bg-[#F5EDDD] p-6 shadow-md sm:p-8">
          <h2 className="mb-4 font-['Playfair_Display',serif] text-2xl font-black italic text-[#3D2419] sm:text-3xl">
            Quick survey
          </h2>
          <div className="rounded-2xl bg-[#E8D3CB] p-6 text-center">
            <a
              href={PRE_GAME_MENTIMETER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#8B5A4F] px-8 py-3 text-base font-semibold tracking-wide text-[#F5EDDD] shadow-md transition-all hover:scale-105 hover:bg-[#6E4438]"
            >
              Open Mentimeter
            </a>
          </div>
        </section>

        {/* CTA section */}
        <section className="rounded-3xl bg-[#F5EDDD] p-8 text-center shadow-md sm:p-10">
          <button
            onClick={() => onModeSelect('narrative')}
            className="rounded-full bg-[#8B5A4F] px-10 py-4 text-lg font-semibold tracking-wide text-[#F5EDDD] shadow-md transition-all hover:scale-105 hover:bg-[#6E4438] sm:text-xl"
          >
            Begin the journey
          </button>
        </section>
      </main>
    </div>
  );
}
