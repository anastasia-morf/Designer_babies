// import { Home, RotateCcw } from 'lucide-react';

// import { GameState } from '../App';
// import { DecisionTree } from './DecisionTree';

// const POST_GAME_MENTIMETER_LINK =
//   'https://www.menti.com/alnm5zpy6xzm';

// interface FinalOutcomeProps {
//   choices: GameState;
//   onRestart: () => void;
//   onHome?: () => void;
// }

// interface Outcome {
//   title: string;
//   summary: string;
//   gradient: string;
// }

// export function FinalOutcome({ choices, onRestart, onHome }: FinalOutcomeProps) {
//   const getOutcome = (): Outcome => {
//     const publicFunding = choices.scene4 === 'A';
//     const mandatory = choices.scene5 === 'A';

//     if (publicFunding && mandatory) {
//       return {
//         title: 'Universal Screening',
//         summary:
//           'Screening is publicly funded and becomes part of standard IVF care. This could reduce preventable genetic disease and make access more equal, but it also raises questions about how much choice families really have when screening becomes the default.',
//         gradient: 'from-purple-600 to-pink-600',
//       };
//     }

//     if (publicFunding && !mandatory) {
//       return {
//         title: 'Funded Choice',
//         summary:
//           'Screening is available to everyone, but families decide whether to use it. This gives people more support without forcing one decision, though over time it may still create pressure to choose the “safest” embryo.',
//         gradient: 'from-blue-500 to-purple-600',
//       };
//     }

//     return {
//       title: 'Private Access',
//       summary:
//         'Screening remains optional and privately funded. Families keep more personal control over the decision, but access depends on money, meaning some people have more reproductive choices than others.',
//       gradient: 'from-amber-500 to-orange-600',
//     };
//   };

//   const outcome = getOutcome();

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

//         <div className="mb-8">
//           <DecisionTree choices={choices} />
//         </div>

//         <div
//           className={`mb-8 rounded-3xl bg-gradient-to-br ${outcome.gradient} p-6 text-white shadow-xl sm:p-10`}
//         >
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
//             You ended at
//           </p>

//           <h2 className="mt-2 text-3xl font-black sm:text-4xl">
//             {outcome.title}
//           </h2>

//           <p className="mt-4 text-base leading-relaxed sm:text-lg">
//             {outcome.summary}
//           </p>
//         </div>

//         <section className="mb-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
//           <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
//             One more thing
//           </p>

//           <h3 className="mb-4 text-2xl font-black text-gray-900 sm:text-3xl">
//             How did the game land?
//           </h3>

//           <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
//             Quick survey now that you've played through.
//           </p>

//           <div className="rounded-2xl bg-purple-50 p-6 text-center">
//             <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
//               Click below to answer the Mentimeter questions. It will open in a
//               new tab.
//             </p>

//             <a
//               href={POST_GAME_MENTIMETER_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
//             >
//               Open quick survey
//             </a>
//           </div>
//         </section>

//         <div className="pb-4 text-center">
//           <button
//             onClick={onRestart}
//             className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
//           >
//             <RotateCcw className="h-5 w-5" />
//             Try a different path
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }
import { Home, RotateCcw, ExternalLink } from 'lucide-react';

import { GameState } from '../App';
import { DecisionTree } from './DecisionTree';

const POST_GAME_MENTIMETER_LINK = 'https://www.menti.com/alnm5zpy6xzm';

interface FinalOutcomeProps {
  choices: GameState;
  onRestart: () => void;
  onHome?: () => void;
}

interface Outcome {
  title: string;
  summary: string;
  bg: string;
  text: string;
  accent: string;
}

export function FinalOutcome({ choices, onRestart, onHome }: FinalOutcomeProps) {
  const getOutcome = (): Outcome => {
    const publicFunding = choices.scene4 === 'A';
    const mandatory = choices.scene5 === 'A';

    if (publicFunding && mandatory) {
      return {
        title: 'Universal Screening',
        summary:
          'Screening is publicly funded and becomes part of standard IVF care. This could reduce preventable genetic disease and make access more equal, but it also raises questions about how much choice families really have when screening becomes the default.',
        bg: '#754635',
        text: '#f3e8dc',
        accent: '#fdc38a',
      };
    }

    if (publicFunding && !mandatory) {
      return {
        title: 'Funded Choice',
        summary:
          'Screening is available to everyone, but families decide whether to use it. This gives people more support without forcing one decision, though over time it may still create pressure to choose the \u201csafest\u201d embryo.',
        bg: '#a7715b',
        text: '#f3e8dc',
        accent: '#fdc38a',
      };
    }

    return {
      title: 'Private Access',
      summary:
        'Screening remains optional and privately funded. Families keep more personal control over the decision, but access depends on money, meaning some people have more reproductive choices than others.',
      bg: '#d19153',
      text: '#754635',
      accent: '#754635',
    };
  };

  const outcome = getOutcome();

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

        {/* Outcome card - prominent, color depends on ending */}
        <div
          className="mb-8 rounded-3xl p-6 shadow-lg sm:p-10"
          style={{ backgroundColor: outcome.bg, color: outcome.text }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: outcome.accent, opacity: 0.9 }}
          >
            You ended at
          </p>

          <h2
            className="mt-2 font-['Oleo_Script',cursive] text-4xl leading-tight sm:text-5xl"
            style={{ color: outcome.text }}
          >
            {outcome.title}
          </h2>

          <p
            className="mt-4 text-base leading-relaxed sm:text-lg"
            style={{ color: outcome.text }}
          >
            {outcome.summary}
          </p>
        </div>

        <div className="relative z-50 mb-16 overflow-visible">
          <DecisionTree choices={choices} />
        </div>

        <section className="relative z-0 mb-8 rounded-3xl bg-white/80 p-6 shadow-md backdrop-blur sm:p-8">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a7715b] sm:text-sm">
            One more thing
          </p>

          <h3 className="mb-4 font-['Oleo_Script',cursive] text-3xl text-[#754635] sm:text-4xl">
            Quick survey!
          </h3>

          <div className="rounded-2xl bg-[#dd9385]/15 p-6 text-center">
            <p className="mb-4 text-sm leading-relaxed text-[#754635]/80 sm:text-base">
              Click below to answer the Mentimeter questions. It will open in a new tab.
            </p>

            <a
              href={POST_GAME_MENTIMETER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#a7715b] px-8 py-3 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#754635]"
            >
              Open quick survey
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <div className="pb-4 text-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 rounded-full bg-[#a7715b] px-10 py-4 text-lg font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#754635]"
          >
            <RotateCcw className="h-5 w-5" />
            Try a different path
          </button>
        </div>
      </main>
    </div>
  );
}
