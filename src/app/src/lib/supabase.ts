import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-url-here'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-key-here'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface QuizResult {
  id?: number;
  name: string;
  score: number;
  total_questions: number;
  time_taken: number;
  answers: any[];
  completed_at?: string;
  created_at?: string;
}
