'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase, type Language, type Topic } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'

export default function LanguagePage() {
  const params = useParams()
  const router = useRouter()
  const languageId = params.languageId as string

  const [language, setLanguage] = useState<Language | null>(null)
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)

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

        // Fetch topics
        const { data: topicsData, error: topicsError } = await supabase
          .from('topics')
          .select('*')
          .eq('language_id', languageId)
          .order('order_num', { ascending: true })

        if (topicsError) throw topicsError
        setTopics(topicsData || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (languageId) {
      fetchData()
    }
  }, [languageId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading course...</p>
      </div>
    )
  }

  if (!language) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Course not found</p>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Course Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{language.icon}</div>
            <div>
              <h1 className="text-4xl font-bold">{language.name}</h1>
              <p className="text-muted-foreground mt-2">{language.description}</p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No topics available</p>
            </div>
          ) : (
            topics.map((topic) => (
              <Link key={topic.id} href={`/learn/${languageId}/${topic.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{topic.name}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" size="sm">
                      Start Topic
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
