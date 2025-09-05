// pages/_app.js
import '../styles/globals.css'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// --- Chains + Provider konfigurieren ---
const { chains, publicClient } = configureChains(
  [mainnet], // du kannst hier weitere Chains hinzufügen
  [publicProvider()]
)

// --- WalletConnect Connector einrichten ---
const walletConnect = new WalletConnectConnector({
  options: {
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID, // lege diesen Wert in .env an
    showQrModal: true,
  },
})

// --- wagmi Config erstellen ---
const config = createConfig({
  autoConnect: true,
  connectors: [walletConnect],
  publicClient,
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

