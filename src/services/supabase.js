import { createClient } from "@supabase/supabase-js";

console.log("supabase key",import.meta.env.VITE_SUPABASE_KEY);

console.log("supabase url",import.meta.env.VITE_SUPABASE_URL);


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default supabase;
