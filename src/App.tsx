import { useState } from 'react';
import './App.css';
import Connect from './components/Connect';
import { WalletProvider } from './wallet/wallet_provider';
import BabylonStaking from './components/BabylonStaking';
import SignPsbt from './components/SignPsbt';
import { Divider } from 'antd';
function App() {
  const [btcWallet, setWallet] = useState<WalletProvider | null>(null);
  return (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <Connect btcWallet={btcWallet} setWallet={setWallet} />
      <Divider />
      <BabylonStaking btcWallet={btcWallet} />
      <Divider />
      <SignPsbt btcWallet={btcWallet} />
    </div>
  );
}

export default App;
