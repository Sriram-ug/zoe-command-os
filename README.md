# Zoe Command OS — Build 02 Connected

Build 02 connects the React foundation to the real Supabase project.

## Supabase
Project URL: `https://ebdajcbpidzromscqbhv.supabase.co`

The database schema and RLS policies are already deployed.

## Local setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Put your Supabase **publishable key** in `VITE_SUPABASE_PUBLISHABLE_KEY`.
5. Run `npm run dev`.

Never put a Supabase `service_role` secret in browser code. Only the publishable/anon key belongs in the frontend.

## Included
- Supabase client
- Auth-aware profile lookup
- Business/lead/finance data access
- RLS-compatible inserts
- Existing Build 01 command center
