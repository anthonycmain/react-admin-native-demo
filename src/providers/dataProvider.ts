// import fakeRestDataProvider from "ra-data-fakerest";
// import generateData from "data-generator-retail";

// export const dataProvider = fakeRestDataProvider(generateData(), true);
import { createClient } from '@supabase/supabase-js';
import { supabaseDataProvider, supabaseAuthProvider } from 'ra-supabase-core';

const supabaseClient = createClient('http://localhost:54321','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0')

export const dataProvider = supabaseDataProvider(
  {
        instanceUrl:'http://localhost:54321',
        apiKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
        supabaseClient: supabaseClient
  }
)