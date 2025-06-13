# Video AI Platform

A full-stack video AI platform built with Next.js, Supabase, and Vercel.

## Tech Stack

- **Frontend:** Next.js 14 with TypeScript
- **Backend:** Supabase (Auth, Database, Storage)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Version Control:** GitHub

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd video-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

1. Create a new Supabase project at [https://supabase.com](https://supabase.com)
2. Enable Email/Password authentication in the Authentication settings
3. Create a `users` table with the following SQL:
   ```sql
   create table public.users (
     id uuid references auth.users on delete cascade,
     email text,
     username text,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     primary key (id)
   );

   -- Enable Row Level Security
   alter table public.users enable row level security;

   -- Create policies
   create policy "Users can view their own data" on public.users
     for select using (auth.uid() = id);

   create policy "Users can update their own data" on public.users
     for update using (auth.uid() = id);
   ```

## Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add the environment variables in the Vercel project settings
4. Deploy!

## Features

- 🔐 Authentication (Sign up, Login, Logout)
- 🛡️ Protected Routes
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time Session Management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
