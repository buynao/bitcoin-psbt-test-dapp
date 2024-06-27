import { useState } from 'react';
import './App.css';
import Connect from './components/Connect';
import { WalletProvider } from './wallet/wallet_provider';
import BabylonStaking from './components/BabylonStaking';
import SignPsbt from './components/SignPsbt';

function App() {
  const [btcWallet, setWallet] = useState<WalletProvider | null>(null);
  console.log('>>>>>>>>winodw', window);
  console.log('>>>>>>>buffer', Buffer.from('xxx'));
  return (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <Connect btcWallet={btcWallet} setWallet={setWallet} />
      <BabylonStaking btcWallet={btcWallet} />
      <SignPsbt btcWallet={btcWallet} />
    </div>
  );
}

export default App;
