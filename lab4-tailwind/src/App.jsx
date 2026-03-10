import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-lg">&#9790;</span>
        <span className="hidden dark:inline text-lg text-yellow-400">&#9728;</span>
      </button>

      <div className="max-w-5xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">UI Kit & Components</h1>
          <p className="text-gray-600 dark:text-gray-400">Tailwind CSS v4 ile oluşturulmuş modern bileşen arayüzü</p>
        </header>

        {/* Uygulama-6: Button Kit */}
        <section className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-2">Button Variants</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sizes</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Küçük</Button>
                <Button size="md">Orta</Button>
                <Button size="lg">Büyük</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Colors</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">States</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Uygulama-7: Input Kit */}
        <section className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-2">Input Fields</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input id="name" label="Ad Soyad" placeholder="Ahmet Yılmaz" />
            <Input id="email" label="E-posta" type="email" helpText="Örnek: ad@mail.com" />
            <Input id="pass" label="Şifre" type="password" error="En az 8 karakter olmalı" />
            <Input id="disabled" label="Devre Dışı" disabled value="Düzenlenemez" />
          </div>
        </section>

        {/* Uygulama-8: Card Kit */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Card Variants</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="elevated" title="Proje A" image="https://placehold.co/600x400/3b82f6/white?text=Elevated+Card" imageAlt="Proje ekran görüntüsü">
              <p>Bu bir elevated (gölgeli) kart. Hover durumunda gölgesi artar.</p>
            </Card>

            <Card variant="outlined" title="Proje B" image="https://placehold.co/600x400/gray/white?text=Outlined+Card">
              <p>Bu bir outlined (çerçeveli) kart. Zarif ve modern bir görünüm sunar.</p>
            </Card>

            <Card variant="filled" title="Proje C" footer={<Button size="sm" variant="secondary" className="w-full">Detayları Gör</Button>}>
              <p>Bu bir filled (dolgulu) kart. İçerisinde alt bilgi (footer) alanı bulunmaktadır.</p>
            </Card>
          </div>
        </section>
      </div>

      <footer className="mt-20 text-center text-gray-500 text-sm pb-8">
        &copy; 2024 Lab-4 Tailwind CSS v4 Component Library
      </footer>
    </div>
  )
}

export default App
