src/lib/supabase.tsimport { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.warn('Supabase is not configured. Copy .env.example to .env.local and add the project URL and publishable key.');
}

export const supabase = createClient(
  url || 'https://placeholder.supabase.co',
  key || 'placeholder'
);
