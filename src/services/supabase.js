import { createClient } from "@supabase/supabase-js";

console.log(import.meta.env.VITE_SUPABASE_KEY);
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default supabase;
