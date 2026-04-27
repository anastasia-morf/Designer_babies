import { useState } from 'react';

interface GoogleFormEmbedProps {
  src: string;
  title: string;
  height?: number;
}

export function GoogleFormEmbed({
  src,
  title,
  height = 900,
}: GoogleFormEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white"
          style={{ height }}
        >
          <p className="text-sm font-semibold text-purple-600">
            Loading form…
          </p>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        onLoad={() => setLoaded(true)}
        className="block w-full"
      >
        Loading…
      </iframe>
    </div>
  );
}
