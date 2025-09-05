# Noospace — McKenna Epic (Next.js + Tailwind + wagmi + Supabase)

Episches Noosphere Interface im Geist von Terence McKenna. Ready für Vercel and GitHub.

## Quickstart (Vercel)
1. ZIP entpacken und **Inhalt** ins GitHub-Repo-Root legen (package.json muss im Root sein).
2. Importiere das Repo in Vercel (Framework: Next.js will be detected).
3. Set environment variable `NEXT_PUBLIC_WALLETCONNECT_ID` (optional) to enable WalletConnect QR flows.
   - MetaMask (Injected) will work without this env.
4. Deploy.

## Local
```bash
npm install
npm run dev
```

## Supabase
The project uses the included Supabase anon key and URL. Ensure your Supabase table `entries` exists with columns:
- id (primary key, auto increment)
- text (text)
- symbol (text)
- tags (text[])
- wallet (text)
- date (timestamptz)
- stars (int4)
