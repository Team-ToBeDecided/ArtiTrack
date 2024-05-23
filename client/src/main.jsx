import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "@arcana/auth"
import { ProvideAuth } from "@arcana/auth-react";

const clientID = 'xar_test_fef9863227d590f5d115f0d2477c5ab7636ca5c8'

export const ArcanaProvider = new AuthProvider(clientID, {
  network: 'testnet', // Use 'testnet' for the test network
  theme: 'dark', // Use 'dark' for dark mode
  position: 'right', // Optional: position of the wallet UI
  alwaysVisible: true, // Optional: wallet always visible after user logs in
  chainConfig: {
    chainId: '80002', // Example: Polygon chain ID
    rpcUrl: 'https://rpc-amoy.polygon.technology/' // Example: RPC URL for Polygon Mumbai testnet
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAuth provider={ArcanaProvider}>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
)
