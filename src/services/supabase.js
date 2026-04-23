import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qmpoddsnorcdjzdowyvz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtcG9kZHNub3JjZGp6ZG93eXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NzAxMTksImV4cCI6MjA5MTQ0NjExOX0.5AJe4Qw9RxbfGhDpu7yfQgYhB6zngEfZGJRE21vCpns";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
