import { createClient } from "@supabase/supabase-js";
import { supabaseDataProvider, supabaseAuthProvider } from "ra-supabase-core";

const supabaseClient = createClient(
  "https://nmjlbbaqyksrnqqmhgsc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tamxiYmFxeWtzcm5xcW1oZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNjEyMzAsImV4cCI6MjA1MTkzNzIzMH0.S1zT9Gpx42T2a2WzVu-KYMFxFqJfUW8KieHHeDsIJ_Y"
);

export const dataProvider = supabaseDataProvider({
  instanceUrl: "https://nmjlbbaqyksrnqqmhgsc.supabase.co",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tamxiYmFxeWtzcm5xcW1oZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNjEyMzAsImV4cCI6MjA1MTkzNzIzMH0.S1zT9Gpx42T2a2WzVu-KYMFxFqJfUW8KieHHeDsIJ_Y",
  supabaseClient: supabaseClient,
});
