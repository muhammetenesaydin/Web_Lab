import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-8 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-muted/20 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-primary mb-2">Vite + React</h1>
        <h2 className="text-xl text-secondary font-medium mb-6">Tailwind CSS v4 Kurulum Testi</h2>
        
        <div className="space-y-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full py-3 px-4 bg-accent hover:opacity-90 text-white font-bold rounded-lg transition-all shadow-md active:scale-95"
          >
            Tıklama Sayısı: {count}
          </button>
          
          <div className="flex gap-2 justify-center pt-4">
            <span className="px-3 py-1 bg-success/10 text-success text-sm font-semibold rounded-full">
              Success Color
            </span>
            <span className="px-3 py-1 bg-error/10 text-error text-sm font-semibold rounded-full">
              Error Color
            </span>
          </div>
        </div>
        
        <p className="mt-8 text-sm text-muted font-mono bg-surface p-2 rounded">
          src/App.jsx dosyasını düzenleyerek test et.
        </p>
      </div>
    </div>
  )
}

export default App
