import '../styles/globals.css'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { walletConnect } from 'wagmi/connectors/walletConnect'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || 'demo-project-id-change-me'

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet, polygon], [publicProvider()])

const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({ chains }),
    walletConnect({ projectId, chains })
  ],
  publicClient,
  webSocketPublicClient
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
