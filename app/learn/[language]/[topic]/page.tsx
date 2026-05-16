import Link from 'next/link'

const lessonsData: Record<string, Record<string, { title: string; content: string; code: string; explanation: string }>> = {
  python: {
    'getting-started': {
      title: 'Getting Started with Python',
      content: 'Python is a high-level, interpreted programming language known for its simple and readable syntax. It was created in 1991 by Guido van Rossum and has become one of the most popular languages in the world.',
      code: 'print("Hello, Python!")',
      explanation: 'The print() function outputs text to the console. This is often the first program beginners write.',
    },
    'variables--data-types': {
      title: 'Variables & Data Types',
      content: 'Variables are containers that store data values. In Python, you don\'t need to declare the type; Python infers it automatically. Common data types include strings, integers, floats, lists, and dictionaries.',
      code: 'name = "Alice"\nage = 25\nheight = 5.7\nprint(name, age, height)',
      explanation: 'Variables hold different types of data. Python automatically determines the type based on the value assigned.',
    },
    'operators': {
      title: 'Operators in Python',
      content: 'Operators are special symbols that perform operations on variables and values. Python supports arithmetic, comparison, logical, and assignment operators.',
      code: 'a = 10\nb = 3\nprint(a + b)  # Addition\nprint(a - b)  # Subtraction\nprint(a * b)  # Multiplication\nprint(a / b)  # Division',
      explanation: 'Basic arithmetic operators: + (add), - (subtract), * (multiply), / (divide), % (modulo), ** (exponent)',
    },
  },
  javascript: {
    'getting-started': {
      title: 'Getting Started with JavaScript',
      content: 'JavaScript is a programming language that makes web pages interactive. It runs in browsers and can manipulate HTML and CSS. It\'s essential for modern web development.',
      code: 'console.log("Hello, JavaScript!");',
      explanation: 'console.log() outputs text to the browser console. You can open it with F12 or Ctrl+Shift+J.',
    },
    'variables--types': {
      title: 'Variables & Types in JavaScript',
      content: 'Variables store data values. JavaScript has three ways to declare variables: var, let, and const. Modern JavaScript prefers let and const over var.',
      code: 'let name = "Alice";\nconst age = 25;\nvar city = "New York";\nconsole.log(name, age, city);',
      explanation: 'const cannot be reassigned, let can be reassigned, and var is the old way (avoid it in modern code).',
    },
    'operators': {
      title: 'Operators in JavaScript',
      content: 'JavaScript supports arithmetic, comparison, logical, and assignment operators. These are used to perform calculations and make decisions.',
      code: 'let a = 10;\nlet b = 3;\nconsole.log(a + b);   // 13\nconsole.log(a === b); // false\nconsole.log(a > b);   // true',
      explanation: 'Use === for strict comparison, == for loose comparison. Arithmetic: +, -, *, /, %, **',
    },
  },
  html: {
    'getting-started': {
      title: 'Getting Started with HTML',
      content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of websites.',
      code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, HTML!</h1>\n</body>\n</html>',
      explanation: 'Every HTML document starts with <!DOCTYPE html>. The head contains metadata, and the body contains visible content.',
    },
    'elements--tags': {
      title: 'HTML Elements & Tags',
      content: 'HTML uses tags to structure content. Tags are enclosed in angle brackets. Some common tags include h1-h6 for headings, p for paragraphs, and div for sections.',
      code: '<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<p>This is a paragraph of text.</p>\n<strong>Bold text</strong>\n<em>Italic text</em>',
      explanation: 'Headings range from h1 (most important) to h6. Use semantic tags to structure your content properly.',
    },
    'forms': {
      title: 'HTML Forms',
      content: 'Forms collect user input. They include input fields, buttons, checkboxes, and more. Forms send data to a server when submitted.',
      code: '<form>\n  <label>Name:</label>\n  <input type="text" name="name">\n  <label>Email:</label>\n  <input type="email" name="email">\n  <button type="submit">Submit</button>\n</form>',
      explanation: 'Use appropriate input types (text, email, password, number) for better user experience and validation.',
    },
  },
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ language: string; topic: string }>
}) {
  const { language, topic } = await params
  const lesson = lessonsData[language]?.[topic]

  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-900">
        <header className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Link href={`/learn/${language}`} className="text-blue-400 hover:text-blue-300">
              ← Back to Topics
            </Link>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-white text-2xl">Lesson not found</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href={`/learn/${language}`}
            className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
          >
            ← Back to Topics
          </Link>
          <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2">
            {/* Lesson Content */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-slate-300 leading-relaxed text-lg">{lesson.content}</p>
            </div>

            {/* Code Example */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Code Example</h2>
              <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto border border-slate-700 mb-4">
                <pre className="text-slate-300 font-mono text-sm">{lesson.code}</pre>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Explanation</h3>
              <p className="text-slate-300">{lesson.explanation}</p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <Link
                href={`/learn/${language}`}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-lg text-center transition-colors"
              >
                ← Back
              </Link>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
                Next Lesson →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Practice by typing the code yourself</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Experiment with different values</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Don&apos;t memorize, understand the concepts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Build small projects to practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
