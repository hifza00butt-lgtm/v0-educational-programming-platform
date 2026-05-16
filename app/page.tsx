import Link from 'next/link'

const languages = [
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    description: 'Learn the versatile language used for web development, data science, and automation.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '✨',
    description: 'Master the language that powers interactive websites and modern web applications.',
  },
  {
    id: 'html',
    name: 'HTML',
    icon: '🏗️',
    description: 'Build beautiful web pages with HTML, the foundation of all web development.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-white">CodeLearn</h1>
          <p className="text-slate-400 mt-1">Learn to code with interactive lessons</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Start Learning Today</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Master programming with comprehensive, beginner-friendly lessons in Python, JavaScript, and HTML.
            Start from the basics and progress at your own pace.
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {languages.map((lang) => (
            <Link key={lang.id} href={`/learn/${lang.id}`}>
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-full group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{lang.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{lang.name}</h3>
                <p className="text-slate-300 mb-6">{lang.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-200">
                  Start Learning
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-slate-800 rounded-lg p-12 border border-slate-700 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose CodeLearn?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-white mb-2">Comprehensive Content</h4>
              <p className="text-slate-300">From basics to advanced topics, learn everything you need to become a skilled programmer.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💻</div>
              <h4 className="text-xl font-bold text-white mb-2">Code Examples</h4>
              <p className="text-slate-300">Every lesson includes practical, real-world code examples that you can understand and apply.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-2">Beginner Friendly</h4>
              <p className="text-slate-300">No prior experience needed. Clear explanations make learning easy for everyone.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">30+</p>
            <p className="text-slate-300">Lessons</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">3</p>
            <p className="text-slate-300">Programming Languages</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">100%</p>
            <p className="text-slate-300">Free Forever</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>&copy; 2026 CodeLearn. Learn to code, anywhere, anytime.</p>
        </div>
      </footer>
    </div>
  )
}
