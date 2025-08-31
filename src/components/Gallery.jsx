import React, { useEffect, useState } from 'react'
import Lightbox from './Lightbox.jsx'

// Lê a lista de imagens do arquivo manifest.json em /public/photos
export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [active, setActive] = useState(null) // índice da foto ativa para o lightbox

  useEffect(() => {
    fetch('/photos/manifest.json')
      .then((r) => r.json())
      .then((data) => setPhotos(data))
      .catch(() => setPhotos([]))
  }, [])

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Todas as fotos</h2>
          <p className="text-sm text-zinc-600">Estilo galeria do iPhone/Samsung com layout tipo masonry.</p>
        </div>
        <a
          className="rounded-xl border px-3 py-1.5 text-sm hover:bg-zinc-100"
          href="/photos/manifest.json"
          target="_blank"
          rel="noreferrer"
        >
          Ver manifest
        </a>
      </div>

      {/* Masonry responsivo */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((src, idx) => (
          <button
            key={src}
            className="mb-4 w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
            onClick={() => setActive(idx)}
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="w-full h-auto object-cover transition hover:opacity-90"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={active !== null}
        onClose={() => setActive(null)}
        src={active !== null ? photos[active] : ''}
        onPrev={() => setActive((i) => (i === 0 ? photos.length - 1 : i - 1))}
        onNext={() => setActive((i) => (i === photos.length - 1 ? 0 : i + 1))}
        index={active ?? 0}
        total={photos.length}
      />
    </>
  )
}
