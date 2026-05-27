-- Run this SQL in your Supabase SQL Editor

-- 1. Create projects table
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  category text,
  image_url text,
  demo_url text,
  github_url text,
  tech_stack text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create knowledge table for AI RAG
create table if not exists knowledge (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  source_type text not null, -- 'text' or 'url'
  source_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Set up Row Level Security (RLS)
alter table projects enable row level security;
alter table knowledge enable row level security;

-- Only authenticated admins can insert/update/delete
create policy "Allow all actions for authenticated users" on projects for all to authenticated using (true);
create policy "Allow all actions for authenticated users" on knowledge for all to authenticated using (true);

-- Anyone can read projects and knowledge
create policy "Allow public read access" on projects for select using (true);
create policy "Allow public read access" on knowledge for select using (true);
