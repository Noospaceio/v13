import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount()
  const { connectors, connect, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 card px-3 py-1.5">
        <span className="text-xs text-neutral-400">connected</span>
        <span className="text-sm font-semibold">{address?.slice(0,6)}…{address?.slice(-4)}</span>
        <button onClick={() => disconnect()} className="header-btn">Disconnect</button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      {connectors.map((c) => (
        <button key={c.id} onClick={() => connect({ connector: c })} className="header-btn" disabled={!c.ready || isLoading}>
          {c.name}{isLoading && pendingConnector?.id === c.id ? ' …' : ''}
        </button>
      ))}
    </div>
  )
}
