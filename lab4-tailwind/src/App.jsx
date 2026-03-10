function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-300">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Uygulama 3: İlk Bileşen */}
      <div className="flex items-center justify-center mb-12 mt-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-sm w-full p-6 transition-colors">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Merhaba Tailwind!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Bu benim ilk Tailwind CSS bileşenim. Her class tek bir iş yapar.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Devam Et
          </button>
        </div>
      </div>

      {/* Uygulama 4: Responsive Grid */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Projelerim
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Kart 1 */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <img src="https://placehold.co/600x400/EEE/31343C" alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
            </div>
          </article>

          {/* Kart 2 */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <img src="https://placehold.co/600x400/F8F9FA/1A1A1A" alt="Blog Uygulaması" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Kişisel Blog</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Next.js ve Tailwind CSS kullanarak hazırlanmış modern blog sistemi.</p>
            </div>
          </article>

          {/* Kart 3 */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <img src="https://placehold.co/600x400/2563EB/FFF" alt="Görev Yöneticisi" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Görev Yöneticisi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Vite, React ve Zustand ile hızlı ve interaktif bir görev yönetim paneli.</p>
            </div>
          </article>
          
        </div>
      </section>
    </div>
  )
}

export default App
