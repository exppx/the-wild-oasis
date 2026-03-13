import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tquapdbzkktcaqgrkmim.supabase.co";
const supabaseKey = "sb_publishable_SK2PURxQfp6xAZD_9Mr2gg_uUGmme15";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
