import { createClient } from "@supabase/supabase-js";
import { supabaseDataProvider, supabaseAuthProvider } from "ra-supabase-core";

export const supabaseClient = createClient(
  "https://nmjlbbaqyksrnqqmhgsc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tamxiYmFxeWtzcm5xcW1oZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNjEyMzAsImV4cCI6MjA1MTkzNzIzMH0.S1zT9Gpx42T2a2WzVu-KYMFxFqJfUW8KieHHeDsIJ_Y"
);

export const dataProvider = supabaseDataProvider({
  instanceUrl: "https://nmjlbbaqyksrnqqmhgsc.supabase.co",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tamxiYmFxeWtzcm5xcW1oZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNjEyMzAsImV4cCI6MjA1MTkzNzIzMH0.S1zT9Gpx42T2a2WzVu-KYMFxFqJfUW8KieHHeDsIJ_Y",
  supabaseClient: supabaseClient,
});

// Define `getIdentity` to return the identity object
export const getIdentity = async (user) => {
  return {
    id: user.id,
    fullName: user.user_metadata?.full_name || "Anonymous",
    avatar: user.user_metadata?.avatar_url || null,
  };
};

// Define `getPermissions` to return permissions (if needed)
export const getPermissions = async (user) => {
  // Example: Return roles or other permission data from your user object
  return user.user_metadata?.roles || [];
};

// Specify a redirect URL for OAuth or recovery flows
export const redirectTo = "your-app://auth/callback";
