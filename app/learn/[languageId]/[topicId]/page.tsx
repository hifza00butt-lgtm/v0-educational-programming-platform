'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase, type Language, type Topic, type Lesson } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const languageId = params.languageId as string
  const topicId = params.topicId as string

  const [language, setLanguage] = useState<Language | null>(null)
  const [topic, setTopic] = useState<Topic | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const currentLesson = lessons[currentLessonIndex]

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch language
        const { data: langData, error: langError } = await supabase
          .from('languages')
          .select('*')
          .eq('id', languageId)
          .single()

        if (langError) throw langError
        setLanguage(langData)

        // Fetch topic
        const { data: topicData, error: topicError } = await supabase
          .from('topics')
          .select('*')
          .eq('id', topicId)
          .single()

        if (topicError) throw topicError
        setTopic(topicData)

        // Fetch lessons
        const { data: lessonsData, error: lessonsError } = await supabase
          .from('lessons')
          .select('*')
          .eq('topic_id', topicId)
          .order('order_num', { ascending: true })

        if (lessonsError) throw lessonsError
        setLessons(lessonsData || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (languageId && topicId) {
      fetchData()
    }
  }, [languageId, topicId])

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleNext = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading lesson...</p>
      </div>
    )
  }

  if (!language || !topic || !currentLesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Lesson not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                CodeLearn
              </div>
            </Link>
            <Button variant="ghost" onClick={() => router.back()}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Course Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span>{language.icon} {language.name}</span>
          <span>/</span>
          <span>{topic.name}</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Lesson Title */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{currentLesson.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Lesson {currentLessonIndex + 1} of {lessons.length}</span>
            </div>
          </div>

          {/* Lesson Content */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>About This Lesson</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none dark:prose-invert">
              <p className="text-base leading-relaxed text-foreground">
                {currentLesson.content}
              </p>
            </CardContent>
          </Card>

          {/* Code Example */}
          {currentLesson.code_example && (
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Code Example</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyCode(currentLesson.code_example)}
                  >
                    {copiedCode === currentLesson.code_example ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Highlight
                  theme={themes.dracula}
                  code={currentLesson.code_example}
                  language="python"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className={`${className} p-4 rounded-lg overflow-x-auto text-sm`}
                      style={style}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </CardContent>
            </Card>
          )}

          {/* Explanation */}
          {currentLesson.explanation && (
            <Card className="border-border bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-base">Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {currentLesson.explanation}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentLessonIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>

            <div className="flex gap-2">
              {lessons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLessonIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentLessonIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to lesson ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentLessonIndex === lessons.length - 1}
            >
              Next Lesson
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
