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
    <div className="fixed inset-0 z-50 bg-black/90 text-white flex items-center justify-center">
      {/* Botão fechar */}
      <button
        className="absolute top-4 right-4 z-50 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20"
        onClick={onClose}
        aria-label="Fechar"
        title="Fechar"
      >
        ✕
      </button>

      {/* Contador */}
      <div className="absolute top-4 left-4 text-sm opacity-80 z-50">
        {index + 1} / {total}
      </div>

      {/* Clique fora para fechar */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Imagem */}
      <div className="relative z-50 max-h-[90vh] max-w-[95vw]">
        <img
          src={src}
          alt={`Foto ${index + 1}`}
          className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
        />
      </div>

      {/* Botão anterior */}
      <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center z-50">
        <button
          className="text-3xl opacity-70 hover:opacity-100"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Anterior"
        >
          ‹
        </button>
      </div>

      {/* Botão próxima */}
      <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center z-50">
        <button
          className="text-3xl opacity-70 hover:opacity-100"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Próxima"
        >
          ›
        </button>
      </div>
    </div>
  )
}