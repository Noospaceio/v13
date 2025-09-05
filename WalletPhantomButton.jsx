import React, { useState } from "react";

export default function WalletPhantomButton({ onAddress }) {
  const [address, setAddress] = useState(null);

  async function connectPhantom() {
    if (!window.solana || !window.solana.isPhantom) {
      alert("Bitte installiere die Phantom Wallet Extension.");
      return;
    }
    try {
      const resp = await window.solana.connect();
      setAddress(resp.publicKey.toString());
      if (onAddress) onAddress(resp.publicKey.toString());
    } catch (err) {
      console.error("Phantom connect error", err);
    }
  }

  function disconnectPhantom() {
    if (window.solana && window.solana.disconnect) {
      window.solana.disconnect();
    }
    setAddress(null);
    if (onAddress) onAddress(null);
  }

  if (address) {
    return (
      <button
        onClick={disconnectPhantom}
        className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500"
      >
        Disconnect {address.slice(0, 4)}…{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={connectPhantom}
      className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500"
    >
      Connect Phantom
    </button>
  );
}
