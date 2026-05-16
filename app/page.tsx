'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase, type Language } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const { data, error } = await supabase
          .from('languages')
          .select('*')
          .order('created_at', { ascending: true })

        if (error) throw error
        setLanguages(data || [])
      } catch (error) {
        console.error('Error fetching languages:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLanguages()
  }, [])

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                CodeLearn
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                Courses
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Learn Programming the Right Way
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Start your coding journey with interactive lessons in Python, JavaScript, and HTML. Perfect for beginners!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Learning
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-2 rounded-lg border border-input"
            />
          </div>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading courses...</p>
            </div>
          ) : filteredLanguages.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No courses found matching your search.</p>
            </div>
          ) : (
            filteredLanguages.map((language) => (
              <Link key={language.id} href={`/learn/${language.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="text-4xl mb-2">{language.icon}</div>
                    <CardTitle>{language.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {language.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>CodeLearn © 2026. Learn to code, one lesson at a time.</p>
        </div>
      </footer>
    </main>
  )
}
