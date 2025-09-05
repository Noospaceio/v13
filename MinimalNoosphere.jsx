import React, { useState } from "react";
import WalletPhantomButton from "./WalletPhantomButton";

export default function NoospaceMinimal() {
  const [wallet, setWallet] = useState(null);

  return (
    <div className="min-h-screen bg-black text-green-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 tracking-wide">☄️ Noospace</h1>
      <p className="mb-6 max-w-xl text-center">
        Willkommen im Noospace – archaische Kommunikation im McKenna-Stil, verbunden über dein Solana-Wallet.
      </p>
      <WalletPhantomButton onAddress={setWallet} />
      {wallet && (
        <div className="mt-6 text-sm text-green-400">
          Verbunden mit: {wallet.slice(0, 6)}…{wallet.slice(-4)}
        </div>
      )}
    </div>
  );
}
