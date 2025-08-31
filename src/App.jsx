import React, { useEffect, useMemo, useState } from 'react'
import Gallery from './components/Gallery.jsx'
import Login from './components/Login.jsx'

const PASSWORD = 'liam2711' // senha universal solicitada

export default function App() {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    // Persist simple auth in sessionStorage
    const ok = sessionStorage.getItem('authed') === 'true'
    setAuthed(ok)
  }, [])

  const handleLogin = (pwd) => {
    if (pwd === PASSWORD) {
      sessionStorage.setItem('authed', 'true')
      setAuthed(true)
    } else {
      alert('Senha incorreta.')
    }
  }

  if (!authed) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">🎉 Galeria — 1º Aninho</h1>
          <button
            className="text-sm px-3 py-1.5 rounded-xl border hover:bg-zinc-100"
            onClick={() => {
              sessionStorage.removeItem('authed')
              location.reload()
            }}
          >
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Gallery />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-2 text-sm text-zinc-500">
        Feito com ❤️ em React + Tailwind por Mbj.
        Com carinho para Mariana!
      </footer>
    </div>
  )
}
