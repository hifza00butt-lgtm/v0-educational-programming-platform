import Link from 'next/link'

const lessonData: Record<string, { topics: string[] }> = {
  python: {
    topics: [
      'Getting Started',
      'Variables & Data Types',
      'Operators',
      'Control Flow',
      'Functions',
      'Lists & Dictionaries',
      'String Methods',
      'File Handling',
      'Error Handling',
      'Object-Oriented Programming',
    ],
  },
  javascript: {
    topics: [
      'Getting Started',
      'Variables & Types',
      'Operators',
      'Conditionals',
      'Loops',
      'Functions',
      'Arrays',
      'Objects',
      'DOM Manipulation',
      'Async JavaScript',
    ],
  },
  html: {
    topics: [
      'Getting Started',
      'Elements & Tags',
      'Forms',
      'Semantic HTML',
      'Attributes',
      'Links & Navigation',
      'Media',
      'Tables',
      'Meta Tags',
      'Accessibility',
    ],
  },
}

const languageNames: Record<string, string> = {
  python: 'Python',
  javascript: 'JavaScript',
  html: 'HTML',
}

const languageEmojis: Record<string, string> = {
  python: '🐍',
  javascript: '✨',
  html: '🏗️',
}

export default async function LearnPage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = await params
  const data = lessonData[language]
  const displayName = languageNames[language] || language
  const emoji = languageEmojis[language] || '📚'

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-900">
        <header className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              ← Back Home
            </Link>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-white text-2xl">Language not found</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back Home
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{emoji}</span>
            <div>
              <h1 className="text-3xl font-bold text-white">{displayName}</h1>
              <p className="text-slate-400">Learn {displayName} programming</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">Topics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.topics.map((topic, index) => (
            <Link
              key={topic}
              href={`/learn/${language}/${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-full group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {topic}
                  </h3>
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    Lesson {index + 1}
                  </span>
                </div>
                <p className="text-slate-400 mb-4">Learn about {topic.toLowerCase()}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                  Start Lesson
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
