import React, { useState } from 'react'

export default function Login({ onLogin }) {
  const [pwd, setPwd] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-sm rounded-3xl shadow-xl glass p-6">
        <div className="flex items-center justify-center">
          <div className="size-12 rounded-2xl grid place-items-center bg-black text-white font-bold">📸</div>
        </div>
        <h2 className="mt-4 text-center text-lg font-medium">Acesse a Galeria</h2>
        <p className="mt-1 text-center text-sm text-zinc-600">Digite a senha para entrar.</p>

        <div className="mt-6 space-y-2">
          <label className="text-sm text-zinc-700">Senha</label>
          <div className="flex items-center gap-2">
            <input
              type={visible ? 'text' : 'password'}
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') onLogin(pwd) }}
              autoFocus
            />
            <button
              className="rounded-xl border px-3 py-2 text-sm hover:bg-zinc-100"
              onClick={() => setVisible(v => !v)}
              aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
              title={visible ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {visible ? '🙈' : '👁️'}
            </button>
          </div>
          <button
            className="mt-3 w-full rounded-xl bg-black text-white py-2 hover:opacity-90"
            onClick={() => onLogin(pwd)}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}
