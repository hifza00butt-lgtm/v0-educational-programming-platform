import Link from 'next/link'

const lessonsData: Record<string, Record<string, { title: string; content: string; code: string; explanation: string }>> = {
  python: {
    'getting-started': {
      title: 'Getting Started with Python',
      content: 'Python is a high-level, interpreted programming language known for its simple and readable syntax. It was created in 1991 by Guido van Rossum and has become one of the most popular languages in the world.',
      code: 'print("Hello, Python!")',
      explanation: 'The print() function outputs text to the console. This is often the first program beginners write.',
    },
    'variables---data-types': {
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
    'control-flow': {
      title: 'Control Flow in Python',
      content: 'Control flow statements allow you to execute code conditionally or repeatedly. The main control flow statements are if, elif, else, and loops like for and while.',
      code: 'age = 18\nif age >= 18:\n    print("You are an adult")\nelif age >= 13:\n    print("You are a teenager")\nelse:\n    print("You are a child")',
      explanation: 'Use if, elif, and else to make decisions. Indentation is important in Python!',
    },
    'functions': {
      title: 'Functions in Python',
      content: 'Functions are reusable blocks of code that perform a specific task. They help organize code and make it more maintainable.',
      code: 'def greet(name):\n    return f"Hello, {name}!"\n\nresult = greet("Alice")\nprint(result)',
      explanation: 'Define functions with def keyword. Use return to send back a value.',
    },
    'lists---dictionaries': {
      title: 'Lists & Dictionaries',
      content: 'Lists and dictionaries are used to store multiple values. Lists are ordered collections, while dictionaries store key-value pairs.',
      code: 'fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])  # Access by index\n\nperson = {"name": "Alice", "age": 25}\nprint(person["name"])  # Access by key',
      explanation: 'Lists use square brackets [], dictionaries use curly braces {}.',
    },
    'string-methods': {
      title: 'String Methods',
      content: 'Strings in Python have many built-in methods for manipulation. You can convert case, find text, split strings, and more.',
      code: 'text = "Hello World"\nprint(text.lower())  # Convert to lowercase\nprint(text.upper())  # Convert to uppercase\nprint(text.replace("World", "Python"))',
      explanation: 'String methods don\'t modify the original string. They return a new string.',
    },
    'file-handling': {
      title: 'File Handling',
      content: 'Reading and writing files is essential for many programs. Python provides simple ways to work with files.',
      code: 'with open("file.txt", "w") as f:\n    f.write("Hello, World!")\n\nwith open("file.txt", "r") as f:\n    content = f.read()\n    print(content)',
      explanation: 'Use "with" statement for safe file handling. It automatically closes the file.',
    },
    'error-handling': {
      title: 'Error Handling',
      content: 'Error handling lets you deal with problems gracefully. Use try and except blocks to catch and handle errors.',
      code: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("That\'s not a valid number!")',
      explanation: 'Try block contains code that might fail. Except block handles the error.',
    },
    'object-oriented-programming': {
      title: 'Object-Oriented Programming',
      content: 'OOP is a programming paradigm that uses objects and classes. It\'s great for organizing large programs.',
      code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.bark())',
      explanation: 'Classes are templates for objects. __init__ is called when creating an object.',
    },
  },
  javascript: {
    'getting-started': {
      title: 'Getting Started with JavaScript',
      content: 'JavaScript is a programming language that makes web pages interactive. It runs in browsers and can manipulate HTML and CSS. It\'s essential for modern web development.',
      code: 'console.log("Hello, JavaScript!");',
      explanation: 'console.log() outputs text to the browser console. You can open it with F12 or Ctrl+Shift+J.',
    },
    'variables---types': {
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
    'conditionals': {
      title: 'Conditionals in JavaScript',
      content: 'Conditionals let you execute code based on conditions. Use if, else if, else, and switch statements.',
      code: 'let age = 18;\nif (age >= 18) {\n    console.log("You are an adult");\n} else {\n    console.log("You are a minor");\n}',
      explanation: 'Curly braces {} are required in JavaScript, unlike Python.',
    },
    'loops': {
      title: 'Loops in JavaScript',
      content: 'Loops repeat code multiple times. JavaScript has for, while, and forEach loops.',
      code: 'for (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\nlet fruits = ["apple", "banana", "cherry"];\nfruits.forEach(fruit => console.log(fruit));',
      explanation: 'For loops are great for counting. forEach is perfect for iterating arrays.',
    },
    'functions': {
      title: 'Functions in JavaScript',
      content: 'Functions are reusable blocks of code. JavaScript has function declarations, function expressions, and arrow functions.',
      code: 'function add(a, b) {\n    return a + b;\n}\n\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(5, 3));\nconsole.log(multiply(4, 2));',
      explanation: 'Arrow functions => are a modern way to write functions.',
    },
    'arrays': {
      title: 'Arrays in JavaScript',
      content: 'Arrays store multiple values. JavaScript arrays are flexible and have many useful methods.',
      code: 'let numbers = [1, 2, 3, 4, 5];\nnumbers.push(6);  // Add to end\nlet doubled = numbers.map(n => n * 2);\nconsole.log(doubled);',
      explanation: 'Push adds elements. Map creates a new array with transformed values.',
    },
    'objects': {
      title: 'Objects in JavaScript',
      content: 'Objects store key-value pairs. They\'re fundamental to JavaScript and used everywhere.',
      code: 'let person = {\n    name: "Alice",\n    age: 25,\n    city: "New York"\n};\n\nconsole.log(person.name);\nperson.age = 26;',
      explanation: 'Access properties with dot notation (.) or bracket notation ([]).',
    },
    'dom-manipulation': {
      title: 'DOM Manipulation',
      content: 'The DOM (Document Object Model) represents HTML elements. You can change HTML and CSS with JavaScript.',
      code: 'let button = document.getElementById("myButton");\nbutton.textContent = "Click Me!";\nbutton.addEventListener("click", () => {\n    console.log("Button clicked!");\n});',
      explanation: 'querySelector and getElementById find elements. addEventListener responds to events.',
    },
    'async-javascript': {
      title: 'Async JavaScript',
      content: 'Asynchronous code lets your program do multiple things. Use promises, async/await, and callbacks.',
      code: 'async function fetchData() {\n    let response = await fetch("https://api.example.com/data");\n    let data = await response.json();\n    console.log(data);\n}\n\nfetchData();',
      explanation: 'Async/await makes asynchronous code look synchronous and easier to read.',
    },
  },
  html: {
    'getting-started': {
      title: 'Getting Started with HTML',
      content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of websites.',
      code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, HTML!</h1>\n</body>\n</html>',
      explanation: 'Every HTML document starts with <!DOCTYPE html>. The head contains metadata, and the body contains visible content.',
    },
    'elements---tags': {
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
    'semantic-html': {
      title: 'Semantic HTML',
      content: 'Semantic HTML uses meaningful tags like header, nav, article, section. This improves accessibility and SEO.',
      code: '<header>\n  <h1>My Website</h1>\n</header>\n<nav>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</nav>\n<article>\n  Content here\n</article>',
      explanation: 'Semantic tags help screen readers and search engines understand page structure.',
    },
    'attributes': {
      title: 'HTML Attributes',
      content: 'Attributes provide additional information about elements. Common attributes include id, class, href, src, alt.',
      code: '<img src="photo.jpg" alt="A beautiful photo" width="300">\n<a href="page.html" title="Go to page">Link</a>\n<input type="text" placeholder="Enter text">',
      explanation: 'Alt text is important for accessibility. Always provide meaningful alt text for images.',
    },
    'links---navigation': {
      title: 'Links & Navigation',
      content: 'Links connect web pages. Create menus and navigation using lists and anchor tags.',
      code: '<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>',
      explanation: 'Use semantic nav tags for navigation. Lists organize menu items.',
    },
    'media': {
      title: 'Media in HTML',
      content: 'HTML supports images, audio, and video. Use appropriate tags for each media type.',
      code: '<img src="image.jpg" alt="Description">\n<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>\n<video controls>\n  <source src="video.mp4" type="video/mp4">\n</video>',
      explanation: 'Always include alt text for images. Controls attribute adds play/pause buttons.',
    },
    'tables': {
      title: 'HTML Tables',
      content: 'Tables organize data in rows and columns. Use thead, tbody, and tfoot for structure.',
      code: '<table>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>25</td></tr>\n    <tr><td>Bob</td><td>30</td></tr>\n  </tbody>\n</table>',
      explanation: 'Thead for headers, tbody for data, tfoot for footers.',
    },
    'meta-tags': {
      title: 'Meta Tags',
      content: 'Meta tags provide information about the HTML document. They help with SEO and compatibility.',
      code: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Page description">\n</head>',
      explanation: 'Viewport meta tag is essential for responsive design.',
    },
    'accessibility': {
      title: 'HTML Accessibility',
      content: 'Accessible HTML helps people with disabilities. Use semantic tags, alt text, labels, and ARIA attributes.',
      code: '<label for="username">Username:</label>\n<input type="text" id="username" name="username">\n<button aria-label="Close menu">X</button>',
      explanation: 'Labels connect to inputs with for/id. ARIA attributes improve accessibility.',
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
