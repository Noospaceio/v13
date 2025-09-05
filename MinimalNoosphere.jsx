import React, { useState, useEffect } from "react";
import WalletPhantomButton from "./WalletPhantomButton";
import { useRouter } from "next/router";

export default function NoospaceMinimal() {
  const [wallet, setWallet] = useState(null);
  const router = useRouter();

  // Sobald Wallet gesetzt ist → redirect nach v8
  useEffect(() => {
    if (wallet) {
      router.push("https://v8-five-dun.vercel.app/?mode=wallet");
    }
  }, [wallet, router]);

  return (
    <div className="min-h-screen bg-black text-green-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 tracking-wide">☄️ Noospace</h1>
      <p className="mb-6 max-w-xl text-center">
        Welcome to Noospace – archaic communication in the McKenna style,
        connected through your Solana wallet.
      </p>

      {/* Wallet connect button */}
      <WalletPhantomButton onAddress={setWallet} />

      {/* Continue without wallet button */}
      <button
        onClick={() =>
          router.push("https://v8-five-dun.vercel.app/?mode=guest")
        }
        className="mt-4 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold"
      >
        Continue without Wallet
      </button>
    </div>
  );
}
