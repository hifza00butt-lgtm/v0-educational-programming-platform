import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Language = {
  id: string
  name: string
  description: string
  icon: string
  created_at: string
}

export type Topic = {
  id: string
  language_id: string
  name: string
  description: string
  order_num: number
  created_at: string
}

export type Lesson = {
  id: string
  topic_id: string
  title: string
  content: string
  code_example: string
  explanation: string
  order_num: number
  created_at: string
}

export type CodeExample = {
  id: string
  lesson_id: string
  title: string
  code: string
  output: string
  description: string
  order_num: number
  created_at: string
}
