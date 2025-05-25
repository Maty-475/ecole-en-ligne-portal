// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jarckgotilbpiyuwjkpi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphcmNrZ290aWxicGl5dXdqa3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODQ3MjcsImV4cCI6MjA2Mzc2MDcyN30.JkAuyeu8yOtoQo91xok7gTF0sqaWXoz6-_dNK6F7I9A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
