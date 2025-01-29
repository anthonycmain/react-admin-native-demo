import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   "https://yonaoicmsrtfwawsgjnn.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvbmFvaWNtc3J0Zndhd3Nnam5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MTA4NTgsImV4cCI6MjA1MzI4Njg1OH0.gD3BfIzko2OLvMJUtkc-4mDwSkAPtfAR7fN732zhuac"
//   // process.env.VITE_SUPABASE_URL,
//   // process.env.VITE_SUPABASE_ANON_KEY
// );

export const supabase = createClient(
  "http://127.0.0.1:54321",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
  // process.env.VITE_SUPABASE_URL,
  // process.env.VITE_SUPABASE_ANON_KEY
);

54321