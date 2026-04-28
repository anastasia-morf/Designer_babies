import { ArrowRight, Home } from 'lucide-react';

import { Choice } from '../App';

interface Scene1Props {
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene1({ onChoice, onHome }: Scene1Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8 sm:px-6">
      <main className="mx-auto max-w-3xl">
        {onHome && (
          <button
            onClick={onHome}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white"
          >
            <Home className="h-4 w-4" />
            Home
          </button>
        )}

        <section className="rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Scene 1 of 5
          </p>

          <h1 className="mb-6 text-4xl font-black text-gray-900">
            The clinic
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              At your first IVF appointment, the clinic offers a series of preimplantation genetic tests, or PGTs.
              These tests screen embryos for certain genetic conditions, diseases or abnormalities that would severely limit the quality of life of the baby, 
              to improve the chance of pregnancy and reduce the risk of miscarriage ().
            </p>

            <p>
              But testing is not perfect. Some embryos can have a mixture of normal and abnormal cells,
              which can make results harder to interpret. A small biopsy may not always represent the
              whole embryo, so false positive or false negative results can occur (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30691630/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-700 underline hover:text-purple-900"
              >
                Victor et al.
              </a>
              ). Testing can also leave you with fewer embryos to choose from. In some cases, none are
              recommended for transfer (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/26942198/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-700 underline hover:text-purple-900"
              >
                Cimadomo et al.
              </a>
              ).
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => onChoice('A')}
              className="group rounded-2xl border-2 border-blue-300 bg-blue-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                A. Test the embryos
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Screen for chromosomal abnormalities before implantation
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onChoice('B')}
              className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                B. Implant without testing
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Proceed with standard IVF
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
