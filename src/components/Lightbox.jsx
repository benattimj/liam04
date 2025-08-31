import React, { useEffect } from 'react'

export default function Lightbox({ open, onClose, src, onPrev, onNext, index, total }) {
  useEffect(() => {
    function onKey(e) {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, onPrev, onNext])

  if (!open) return null

return (
  <div className="fixed inset-0 z-50 bg-black/90 text-white">
    {/* Botão fechar com z-index garantido */}
    <button
      className="absolute top-4 right-4 z-50 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20"
      onClick={onClose}
      aria-label="Fechar"
      title="Fechar"
    >
      ✕
    </button>

    {/* Contador de fotos */}
    <div className="absolute top-4 left-4 text-sm opacity-80 z-50">
      {index + 1} / {total}
    </div>

    {/* Container da imagem com pointer-events:none */}
    <div className="h-full w-full grid place-items-center px-4 pointer-events-none">
      <img
        src={src}
        alt="Foto"
        className="max-h-[88vh] max-w-[96vw] object-contain rounded-xl shadow-2xl pointer-events-auto"
      />
    </div>

    {/* Botão anterior */}
    <div className="absolute inset-y-0 left-0 w-20 grid place-items-center z-50">
      <button
        className="text-3xl opacity-70 hover:opacity-100"
        onClick={onPrev}
        aria-label="Anterior"
      >
        ‹
      </button>
    </div>

    {/* Botão próxima */}
    <div className="absolute inset-y-0 right-0 w-20 grid place-items-center z-50">
      <button
        className="text-3xl opacity-70 hover:opacity-100"
        onClick={onNext}
        aria-label="Próxima"
      >
        ›
      </button>
    </div>
  </div>
)
}
